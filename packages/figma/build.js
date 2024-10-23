import run from '@hyun2/esbuild';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
  entryPoints: ['src/**/*'],
});
