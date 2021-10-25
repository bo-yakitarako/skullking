/* eslint-disable */

require('esbuild')
  .build({
    entryPoints: ['server/index.ts'],
    bundle: true,
    outfile: 'server/dist/bundle.js',
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    minify: false,
    sourcemap: true,
  })
  .catch(() => process.exit(1));
