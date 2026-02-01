#!/usr/bin/env node
/**
 * Build script for @makemore/agent-frontend
 * 
 * Produces multiple build outputs:
 * 1. dist/chat-widget.js - IIFE bundle for script tag embedding (includes Preact)
 * 2. dist/chat-widget.esm.js - ESM bundle for bundlers (externalizes preact)
 * 3. dist/chat-widget.cjs.js - CommonJS bundle for Node/older bundlers
 * 4. dist/react.esm.js - ESM bundle with React compatibility (uses preact/compat aliases)
 * 5. dist/react.cjs.js - CommonJS bundle with React compatibility
 */

import * as esbuild from 'esbuild';
import { execSync } from 'child_process';
import fs from 'fs';

const isDev = process.argv.includes('--dev');
const isWatch = process.argv.includes('--watch');

// Common options
const commonOptions = {
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  target: ['es2020'],
  logLevel: 'info',
};

// Build configurations
const builds = [
  // 1. IIFE bundle for embedding (includes everything)
  {
    ...commonOptions,
    entryPoints: ['src/index.js'],
    outfile: 'dist/chat-widget.js',
    format: 'iife',
    globalName: 'ChatWidgetModule',
    // Include preact in the bundle for standalone use
  },

  // 2. ESM bundle for modern bundlers (externalizes preact)
  {
    ...commonOptions,
    entryPoints: ['src/index.js'],
    outfile: 'dist/chat-widget.esm.js',
    format: 'esm',
    external: ['preact', 'preact/hooks', 'htm', 'htm/preact'],
    // Bundlers will resolve preact themselves
  },

  // 3. CommonJS bundle for Node/older bundlers
  {
    ...commonOptions,
    entryPoints: ['src/index.js'],
    outfile: 'dist/chat-widget.cjs.js',
    format: 'cjs',
    external: ['preact', 'preact/hooks', 'htm', 'htm/preact'],
  },

  // 4. React-compatible ESM bundle
  // Uses preact/compat aliases so React projects can use it
  {
    ...commonOptions,
    entryPoints: ['src/react.js'],
    outfile: 'dist/react.esm.js',
    format: 'esm',
    // Externalize both preact and react - let the bundler resolve
    external: ['preact', 'preact/hooks', 'preact/compat', 'htm', 'htm/preact', 'react', 'react-dom'],
    // Alias preact to preact/compat for React API compatibility
    alias: {
      'preact': 'preact/compat',
      'preact/hooks': 'preact/compat',
    },
  },

  // 5. React-compatible CommonJS bundle
  {
    ...commonOptions,
    entryPoints: ['src/react.js'],
    outfile: 'dist/react.cjs.js',
    format: 'cjs',
    external: ['preact', 'preact/hooks', 'preact/compat', 'htm', 'htm/preact', 'react', 'react-dom'],
    alias: {
      'preact': 'preact/compat',
      'preact/hooks': 'preact/compat',
    },
  },
];

async function build() {
  console.log(`\n🔨 Building @makemore/agent-frontend (${isDev ? 'development' : 'production'})...\n`);

  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  try {
    if (isWatch) {
      // Watch mode - only watch the IIFE build for development
      const ctx = await esbuild.context(builds[0]);
      await ctx.watch();
      console.log('👀 Watching for changes...');
    } else {
      // Build all targets
      for (const config of builds) {
        await esbuild.build(config);
        console.log(`  ✅ ${config.outfile}`);
      }

      // Copy to django_agent_studio
      try {
        execSync('npm run copy', { stdio: 'inherit' });
      } catch (e) {
        // Ignore copy errors (directory might not exist)
      }

      console.log('\n✨ Build complete!\n');
      
      // Print bundle sizes
      console.log('📦 Bundle sizes:');
      for (const config of builds) {
        const stats = fs.statSync(config.outfile);
        const sizeKB = (stats.size / 1024).toFixed(1);
        console.log(`   ${config.outfile}: ${sizeKB} KB`);
      }
      console.log('');
    }
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();

