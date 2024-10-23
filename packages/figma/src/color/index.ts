import { fetchFigmaNodesByFileName } from '../api';
import { dfsGenerator, getTextStyleObj, type TargetTypeData } from '../utils';

const rgbaToHex = (r: number, g: number, b: number, a?: number): string => {
  const toHex = (value: number): string => {
    const hex = Math.round(value * 255)
      .toString(16)
      .padStart(2, '0');
    return hex.toUpperCase();
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}${a ? toHex(a) : ''}`;
};

export const getColorCssClassList = async () => {
  const result = [];
  const colorNode = (await fetchFigmaNodesByFileName('color')).nodes;
  let colorList = Object.keys(colorNode).reduce((acc, nodeKey) => {
    return { ...acc, ...getTextStyleObj(colorNode[nodeKey].styles, 'FILL') };
  }, {} as TargetTypeData);
  const colorKeyList = Object.keys(colorList);

  const generator = dfsGenerator(colorNode);

  for (const node of generator) {
    if (node.type === 'RECTANGLE' && node.styles && colorKeyList.includes(node.styles.fill ?? '')) {
      const fills = node.fills[0];
      if (fills && fills.type === 'SOLID') {
        if (colorList[node.styles.fill].name.includes(' ')) continue;
        const { opacity } = fills;
        const { r, g, b, a } = fills.color;
        const color = rgbaToHex(r, g, b, opacity);
        console.log(colorList[node.styles.fill]);
        result.push(`--color-${colorList[node.styles.fill].name.replaceAll('/', '-')}: ${color.trim()};`);
      }
    }
  }

  return [...new Set(result)];
};
