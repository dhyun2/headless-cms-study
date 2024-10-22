import { build } from 'tsup';
import { run } from './run'; // 실제 run 함수 가져오기

// tsup의 build 함수를 모킹하여 실제 빌드가 실행되지 않도록 합니다.
jest.mock('tsup', () => ({
  build: jest.fn(),
}));

describe('run 함수 테스트', () => {
  const pkg = {
    dependencies: {
      react: "^17.0.0",
    },
    peerDependencies: {
      "react-dom": "^17.0.0",
    },
  };

  const entryPoints = ['src/index.ts'];
  const originalArgv = process.argv; // 원래 argv 값을 저장

  // 각 테스트 전에 실행되는 설정
  beforeEach(() => {
    jest.resetAllMocks(); // 각 테스트가 독립적으로 실행될 수 있도록 모킹을 리셋합니다.
  });

  // 각 테스트 후에 실행되는 설정
  afterEach(() => {
    process.argv = originalArgv; // 테스트가 끝난 후 원래 argv로 복원
  });

  test('올바른 옵션으로 tsup.build가 호출되어야 함', async () => {
    const buildMock = build as jest.Mock;

    // 실제 run 함수 실행
    await run({
      entryPoints,
      pkg,
      config: {},
    });

    // tsup.build가 올바르게 호출되었는지 확인
    expect(buildMock).toHaveBeenCalledWith(
      expect.objectContaining({
        entry: entryPoints, // 엔트리 포인트 확인
        format: ['esm', 'cjs'], // 포맷이 올바르게 설정되었는지 확인
        dts: true, // 타입 선언 파일 생성 여부 확인
        minify: expect.any(Boolean), // minify 여부 확인
        sourcemap: true, // 소스맵 생성 여부 확인
        splitting: false, // 코드 분할 비활성화 여부 확인
        outDir: 'dist', // 출력 폴더 확인
        clean: true, // 빌드 시 dist 폴더 정리 여부 확인
        external: expect.arrayContaining(['react', 'react-dom']), // 외부 의존성 설정 확인
      })
    );
  });

  test('dev 모드가 아닐 때 minify가 활성화되어야 함', async () => {
    // dev 모드가 아닐 때의 minify 동작을 테스트
    process.argv = ['node', 'script.js']; // process.argv 값을 직접 재정의
    const buildMock = build as jest.Mock;

    await run({
      entryPoints,
      pkg,
      config: {},
    });

    // minify 옵션이 true로 전달되었는지 확인
    expect(buildMock).toHaveBeenCalledWith(expect.objectContaining({
      minify: true,
    }));
  });

  test('dev 모드일 때 minify가 비활성화되어야 함', async () => {
    // dev 모드에서의 동작을 확인하기 위한 테스트
    process.argv = ['node', 'script.js', '--dev']; // dev 모드로 process.argv 재정의
    const buildMock = build as jest.Mock;

    await run({
      entryPoints,
      pkg,
      config: {},
    });

    // dev 모드에서는 minify가 false여야 함
    expect(buildMock).toHaveBeenCalledWith(expect.objectContaining({
      minify: false,
    }));
  });

  test('watch 모드가 활성화되면 watch가 true여야 함', async () => {
    // watch 모드가 활성화된 상태를 테스트
    process.argv = ['node', 'script.js', '--watch']; // watch 모드로 process.argv 재정의
    const buildMock = build as jest.Mock;

    await run({
      entryPoints,
      pkg,
      config: {},
    });

    // watch 모드가 true로 설정되었는지 확인
    expect(buildMock).toHaveBeenCalledWith(expect.objectContaining({
      watch: true,
    }));
  });
});
