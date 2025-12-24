import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

function getAllHtmlFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            if (item.name === 'node_modules' || item.name === 'dist' || item.name === 'public') continue;
            files.push(...getAllHtmlFiles(path.join(dir, item.name)));
        } else if (item.name.endsWith('.html')) {
            files.push(path.join(dir, item.name));
        }
    }
    return files;
}

const htmlFiles = getAllHtmlFiles(__dirname);
const input = {};

htmlFiles.forEach(file => {
    const relativePath = path.relative(__dirname, file);
    const name = relativePath.replace(/\\/g, '/').replace(/\.html$/, '');
    // For index.html, naming it 'main' or keeping as 'index' usually works, 
    // but better to key by path for subfolders like 'admin-panel/login'
    input[name] = resolve(__dirname, relativePath);
});

export default defineConfig({
    build: {
        rollupOptions: {
            input: input
        }
    }
});
