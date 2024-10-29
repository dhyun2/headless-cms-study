// turbo-gen.config.js
module.exports = {
  configs: [
    {
      name: 'svg-to-vue',
      input: 'node_modules/some-icons/*.svg', // 변환할 SVG 파일의 경로
      output: 'src/icons/vue', // 생성할 Vue 컴포넌트 파일 위치
      format: 'vue', // 변환 포맷 설정 (Vue 또는 React)
      options: {
        size: [16, 20, 24, 32], // 사이즈 옵션
        color: '#000000', // 기본 색상
      },
    },
    {
      name: 'svg-to-react',
      input: 'node_modules/some-icons/*.svg',
      output: 'src/icons/react',
      format: 'react',
      options: {
        size: [16, 20, 24, 32],
        color: '#000000',
      },
    },
  ],
};
