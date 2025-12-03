import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'setup-lfs-for-dist',
      closeBundle() {
        // Create .gitattributes in dist folder to track video with LFS
        const distDir = 'dist';
        const gitattributesPath = join(distDir, '.gitattributes');
        const gitattributesContent = 'assets/pacmandemo.mp4 filter=lfs diff=lfs merge=lfs -text\n';
        
        try {
          if (!existsSync(distDir)) {
            mkdirSync(distDir, { recursive: true });
          }
          writeFileSync(gitattributesPath, gitattributesContent);
          console.log('Created .gitattributes in dist folder for LFS tracking');
        } catch (err) {
          console.warn('Could not create .gitattributes in dist:', err);
        }
      }
    }
  ],
  base: "",
});
