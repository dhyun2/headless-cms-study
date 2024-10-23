import { promises as fs } from 'fs';
import { getColorCssClassList } from './color/index';
import { getElevationCssClassList } from './elevation/index';
import { getLayoutCssClassList } from './layout/index';
import { getTypographyCssClassList } from './typography/index';

export const generator = async () => {
  const [colorClasses, elevationClasses, layoutClasses, typographyClasses] = await Promise.all([
    getColorCssClassList(),
    getElevationCssClassList(),
    getLayoutCssClassList(),
    getTypographyCssClassList(),
  ]);

  const combinedClasses = [...colorClasses, ...layoutClasses, ...elevationClasses, ...typographyClasses];

  await Promise.all([generateCss(combinedClasses), generateJson(combinedClasses)]);
};

const generateCss = async (classList: string[]) => {
  const selector = ':root';
  const data = `${selector} {\n${classList.join('\n')}\n}`;

  fs.writeFile('foundation.scss', data);
};

interface KeyValueObject {
  [key: string]: string | KeyValueObject;
}

const generateJson = async (classList: string[]) => {
  const result: KeyValueObject = {};

  classList.forEach((list) => {
    if (list.startsWith('--')) {
      const [key, value] = list.replaceAll(' ', '').split(':');
      result[key] = value;
    }

    if (list.startsWith('.')) {
      const [key, ...subList] = list
        .replaceAll(' ', '')
        .replace(/\n\}|\./g, '')
        .split('{\n');

      result[key] = {};

      subList.forEach((subString) => {
        if (!subString.includes('\n')) {
          const [subKey, value] = subString.split(':');
          (result[key] as KeyValueObject)[subKey] = value;
          return;
        }

        subString.split('\n').forEach((targetString) => {
          if (!targetString.includes('\n')) {
            const [subKey, value] = targetString.split(':');
            (result[key] as KeyValueObject)[subKey] = value;
            return;
          }
        });
      });
    }
  });

  const jsonString = JSON.stringify(result, null, 2);
  fs.writeFile('foundation.json', jsonString, 'utf8');
};
