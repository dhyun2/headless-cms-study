import path from 'path';
import fs from 'fs';
import type { PlopTypes } from '@turbo/gen';

interface BarrelFileData {
  components: string[];
  extension: string;
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('INDEX', {
    description: 'Vue 또는 React 컴포넌트 배럴 파일 생성',
    prompts: [
      {
        type: 'list',
        name: 'framework',
        message: '어떤 프레임워크에 대해 index.ts를 생성할까요?',
        choices: ['Vue', 'React'],
      },
    ],
    actions: (data) => {
      const actions: PlopTypes.ActionType[] = [];
      const framework = data?.framework as 'Vue' | 'React';
      const frameworkDir = framework === 'Vue' ? 'src/icons/vue' : 'src/icons/react';
      const extension = framework === 'Vue' ? 'vue' : 'tsx';

      actions.push({
        type: 'add',
        path: `${frameworkDir}/index.ts`,
        templateFile: 'plop-templates/index.hbs',
        data: (): BarrelFileData => {
          const componentsDir = path.resolve(process.cwd(), `packages/ui/${frameworkDir}`);
          const components = fs
            .readdirSync(componentsDir)
            .filter((file) => file.endsWith(`.${extension}`))
            .map((file) => path.basename(file, `.${extension}`));
          return { components, extension };
        },
        force: true,
      });

      return actions;
    },
  });
}
