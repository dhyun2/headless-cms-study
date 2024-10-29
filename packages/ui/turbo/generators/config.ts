import type { PlopTypes } from '@turbo/gen';

import iconGenerator from './icon';
import indexGenerator from './icon-barrel.config';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // 생성기 설정
  plop.setGenerator('UI', {
    description: 'Stencil, Vue, React 컴포넌트와 Storybook 파일을 생성',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '컴포넌트 이름을 입력하세요:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.tsx',
        templateFile: '../plop-templates/stencil.hbs',
      },
      // 다른 파일들 생성
    ],
  });
  iconGenerator(plop);
  indexGenerator(plop);
}
