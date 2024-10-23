import { promises as fs } from 'fs';
import { fetchFigmaNodesByFileName, fetchFigmaImagesByids } from '../api';
import { dfsGenerator } from '../utils';

const unUsedIconNames = ['icon/icons', 'icon/normal/!Blank', 'icon/icons Responsive'];

export const getIconList = async () => {
  const result = new Map<string, string>();
  const iconNode = (await fetchFigmaNodesByFileName('icon')).nodes;

  const generator = dfsGenerator(iconNode);

  for (const node of generator) {
    if (node.type === 'COMPONENT_SET' && !unUsedIconNames.includes(node.name)) {
      result.set(node.id, node.name);
    }
  }
  const data = Object.fromEntries(result);
  const scssContent = JSON.stringify(data, null, 2);

  const fileData = (await fs.readFile('svg.json', 'utf8')) || '';
  const svgData = JSON.parse(fileData);

  const dif = new Map<string, string>();
  for (const svgName in data) {
    if (data[svgName] !== svgData[svgName]) {
      dif.set(svgName, data[svgName]);
    }
  }

  if (dif.size === 0) return;

  fs.writeFile(`svg.json`, scssContent);
  const valuesString = Array.from(dif.keys()).join(',');
  const imagesList = (await fetchFigmaImagesByids(valuesString)).images;

  fs.mkdir('svg', { recursive: true });
  for (const key in imagesList) {
    fetchAndSaveSvg(result.get(key)?.split('/').pop() as string, imagesList[key] as string);
  }
};

// 비동기로 SVG 데이터를 가져오고 파일로 저장하는 함수
function fetchAndSaveSvg(name: string, url: string) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch SVG: ${response.status}`);
      }
      return response.arrayBuffer(); // SVG 데이터를 ArrayBuffer로 변환
    })
    .then((arrayBuffer) => {
      const svgContent = new TextDecoder('utf-8').decode(arrayBuffer); // ArrayBuffer를 문자열로 변환
      return fs.writeFile(`svg/${name}.svg`, svgContent, 'utf-8'); // 파일 저장
    })
    .then(() => {
      console.log('SVG file successfully saved as downloaded_image.svg');
    })
    .catch((err) => {
      console.error('Error fetching or saving the SVG:', err);
    });
}
