import { build } from 'tsup';
import type { Options as TsupOptions } from 'tsup'; // `tsup`의 옵션 타입 가져오기
import type { PackageJSON, BuildContextOptions, CreateBuildConfigOptions } from './types'; // 사용자 정의 타입

// dev 모드인지 체크하는 함수
const isDev = (): boolean => process.argv.includes('--dev');

// watch 모드인지 체크하는 함수
const isWatchMode = (): boolean => process.argv.includes('--watch');

// minify 여부를 결정하는 함수
const shouldMinify = (): boolean => !isDev();

// external dependencies를 추출하는 함수
const getExternalDependencies = (pkg: PackageJSON): string[] =>
  Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

// 빌드 설정을 생성하는 함수 (tsup의 Options 타입 사용)
const createBuildConfig = ({ entryPoints, external, minify, watch }: CreateBuildConfigOptions): TsupOptions => ({
  entry: entryPoints,
  format: ['esm', 'cjs'], // CommonJS와 ESM 포맷 지원
  dts: true, // 타입 선언 파일 자동 생성
  minify, // dev 모드에 따라 minify 여부 결정
  sourcemap: true, // 소스맵 생성
  splitting: false, // 코드 분할 비활성화
  outDir: 'dist', // 출력 폴더
  clean: true, // 빌드 시 dist 폴더 정리
  watch, // 감시 모드 설정
  external
});

// 실행 함수 (타입 정의 적용)
export const run = async ({ entryPoints = ['src/index.ts'], pkg, config = {} }: BuildContextOptions): Promise<void> => {
  try {
    const minify = shouldMinify();
    const watch = isWatchMode();
    const external = getExternalDependencies(pkg);

    const buildConfig = createBuildConfig({
      entryPoints,
      external,
      minify,
      watch,
    });

    await build({
      ...buildConfig,
      ...config, // 추가적인 설정 병합
    });

    console.log(watch ? 'Watching for changes...' : 'Build completed.');
  } catch (error) {
    console.error('Build failed:', (error as Error).message);
    process.exit(1);
  }
};

