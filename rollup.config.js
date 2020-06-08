import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  plugins: [
    babel({
      babelHelpers: 'runtime',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['last 2 versions', 'ie >= 11'],
            },
            useBuiltIns: 'usage',
            corejs: 3,
            shippedProposals: true,
          },
        ],
      ],
    }),
    typescript(),
  ],
  output: [
    {
      format: 'umd',
      name: 'reduxLogger',
      sourcemap: true,
      file: 'dist/react-logger-filter.js',
      plugins: [terser()],
    },
    {
      format: 'es',
      file: 'dist/react-logger-filter.mjs',
    },
    {
      format: 'cjs',
      file: 'dist/react-logger-filter.cjs',
    },
  ],
};
