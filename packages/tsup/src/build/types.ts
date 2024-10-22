// 패키지 JSON 구조 정의
export interface PackageJSON {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

// BuildContextOptions 타입 정의
export interface BuildContextOptions {
  entryPoints?: string[];
  pkg: PackageJSON;
  config?: Record<string, unknown>;
}

// CreateBuildConfigOptions 타입 정의
export interface CreateBuildConfigOptions {
  entryPoints: string[];
  external: string[];
  minify: boolean;
  watch: boolean;
}
