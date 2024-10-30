import path from 'path';
import fs from 'fs';
import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('ICON', {
    description: 'SVG 파일을 컴포넌트로 변환',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'svg 이름을 입력하세요 (전체: all):',
      },
      {
        type: 'list',
        name: 'framework',
        message: '어떤 프레임워크로 컴포넌트를 생성할까요?',
        choices: ['Vue', 'React', 'Vue, React'],
      },
    ],
    actions: (data) => {
      const actions: PlopTypes.ActionType[] = [];
      if (!data) return actions;

      const svgFiles: string[] = [];
      const svgDir = path.resolve(process.cwd(), 'packages/ui/node_modules/@hyun2/figma/svg');

      if (data.name === 'all') {
        const allFiles = fs.readdirSync(svgDir);
        allFiles.forEach((file) => {
          if (path.extname(file) === '.svg') {
            svgFiles.push(path.basename(file, '.svg'));
          }
        });
      } else {
        const specificFile = `${data.name}.svg`;
        if (fs.existsSync(path.join(svgDir, specificFile))) {
          svgFiles.push(data.name);
        } else {
          throw new Error(`SVG 파일 ${data.name}.svg를 찾을 수 없습니다.`);
        }
      }

      const frameworks = data.framework === 'Vue, React' ? ['Vue', 'React'] : [data.framework];
      svgFiles.forEach((svgName) => {
        const svgFilePath = path.join(svgDir, `${svgName}.svg`);
        const svgContent = fs.readFileSync(svgFilePath, 'utf8');

        const capitalizeFirstName = svgName.charAt(0).toUpperCase() + svgName.slice(1);
        frameworks.forEach((framework) => {
          const outputPath =
            framework === 'Vue'
              ? `src/icons/vue/${capitalizeFirstName}.vue`
              : `src/icons/react/${capitalizeFirstName}.tsx`;
          const templateFile =
            framework === 'Vue' ? 'plop-templates/vue-component.hbs' : 'plop-templates/react-component.hbs';

          const transFormSvgVue = (data: string) => {
            if (framework === 'Vue') {
              return data
                .replaceAll('width="24" height="24"', ':width="`${size}px`" :height="`${size}px`"')
                .replaceAll('fill="#121212"', ':fill="color"');
            }
            return data
              .replaceAll('width="24" height="24"', 'width={`${size}px`} height={`${size}px`}')
              .replaceAll('fill="#121212"', 'fill={color}');
          };

          actions.push({
            type: 'add',
            path: outputPath,
            templateFile: templateFile,
            data: {
              svgContent: transFormSvgVue(svgContent),
              name: capitalizeFirstName,
            },
            force: true,
          });
        });
      });

      return actions;
    },
  });
}
