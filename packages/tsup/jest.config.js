export default {
  preset: 'ts-jest', // TypeScript용 Jest 프리셋 설정
  testEnvironment: 'node', // Node.js 환경에서 테스트
  moduleFileExtensions: ['ts', 'js'], // 확장자 인식 설정
  testMatch: ['**/build/*.test.ts'], // 테스트 파일 위치 및 확장자 패턴 설정
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true, // 테스트 결과를 상세하게 출력
};
