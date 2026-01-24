import * as esbuild from 'esbuild';
import { copyFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outfile = join(__dirname, 'dist/chat-widget.js');
const destFile = join(__dirname, '../django_agent_studio/static/agent-frontend/chat-widget.js');

const copyPlugin = {
  name: 'copy-to-django',
  setup(build) {
    build.onEnd(result => {
      if (result.errors.length === 0) {
        try {
          copyFileSync(outfile, destFile);
          console.log(`[${new Date().toLocaleTimeString()}] Copied to django_agent_studio`);
        } catch (err) {
          console.error('Failed to copy:', err.message);
        }
      }
    });
  },
};

const ctx = await esbuild.context({
  entryPoints: ['src/index.js'],
  bundle: true,
  format: 'iife',
  globalName: 'ChatWidgetModule',
  outfile: 'dist/chat-widget.js',
  sourcemap: true,
  plugins: [copyPlugin],
});

console.log('Watching for changes...');
await ctx.watch();

