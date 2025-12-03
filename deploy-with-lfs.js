#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting deployment with LFS support...\n');

// Step 1: Ensure dist folder exists
if (!fs.existsSync('dist')) {
  console.error('❌ dist folder not found. Run "npm run build" first.');
  process.exit(1);
}

// Step 2: Check if video file exists
const videoPath = path.join('dist', 'assets', 'pacmandemo.mp4');
if (!fs.existsSync(videoPath)) {
  console.log('⚠️  Video file not found in dist, proceeding with normal deployment...');
  execSync('gh-pages -d dist', { stdio: 'inherit' });
  process.exit(0);
}

// Step 3: Create a temporary directory for gh-pages
const tempDir = path.join(process.cwd(), '.gh-pages-temp');
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir, { recursive: true });

try {
  // Step 4: Copy dist contents to temp directory
  console.log('📦 Copying dist files to temporary directory...');
  execSync(`cp -r dist/* ${tempDir}/`, { stdio: 'inherit' });
  
  // Step 5: Initialize git in temp directory
  console.log('🔧 Initializing Git repository...');
  process.chdir(tempDir);
  execSync('git init', { stdio: 'inherit' });
  
  // Step 6: Initialize LFS
  console.log('📎 Initializing Git LFS...');
  execSync('git lfs install', { stdio: 'inherit' });
  
  // Step 7: Track video file with LFS
  console.log('🎬 Setting up LFS tracking for video file...');
  execSync('git lfs track "assets/pacmandemo.mp4"', { stdio: 'inherit' });
  
  // Step 8: Add all files
  console.log('➕ Staging files...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Step 9: Commit
  console.log('💾 Committing files...');
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  
  // Step 10: Add remote and push
  console.log('🌐 Pushing to gh-pages branch...');
  process.chdir('..');
  const repoUrl = execSync('git config --get remote.origin.url', { encoding: 'utf-8' }).trim();
  process.chdir(tempDir);
  execSync(`git remote add origin ${repoUrl}`, { stdio: 'ignore' });
  execSync('git branch -m main', { stdio: 'ignore' });
  execSync('git push -f origin main:gh-pages', { stdio: 'inherit' });
  
  console.log('\n✅ Deployment complete!');
  
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  process.exit(1);
} finally {
  // Cleanup
  process.chdir('..');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

