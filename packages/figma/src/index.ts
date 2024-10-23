import { generator } from './generateFoundation';
import { getIconList } from '../src/icon/index';
// 점을 생성하는 함수
const generateDots = (count: number) => '.'.repeat(count);

// 진행 상태를 업데이트하는 함수
const updateProgress = (taskName: string, count: number) => {
  const dots = generateDots(count);
  process.stdout.write(`\rProcessing ${taskName}${dots}`);
};

// 비동기 작업을 처리하는 공통 함수
const processTask = async (taskName: string, task: () => Promise<void>) => {
  let progressCount = 0;
  const interval = setInterval(() => {
    updateProgress(taskName, progressCount);
    progressCount++;
  }, 500);

  try {
    await task(); // 비동기 작업 완료 대기
    clearInterval(interval); // 점 출력 멈춤
    console.log(`\n${taskName} Processing Complete!`);
  } catch (error) {
    clearInterval(interval);
    console.error(`\nError during ${taskName} processing:`, error);
  }
};

// CSS 처리
const setFoundationCss = () => processTask('CSS', generator);

// Icon 처리 (추후 로직 추가 가능)
const setIcon = () => processTask('Icons', getIconList);

const args = process.argv.slice(2);

switch (args[0]) {
  case 'css':
    setFoundationCss();
    break;
  case 'icon':
    setIcon();
    break;
  default:
    console.log('Invalid command. Use "css" or "icon".');
    break;
}
