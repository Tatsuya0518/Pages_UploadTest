// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... 他の設定 ...

  // ↓ GitHub Pages用の設定を追加
  site: 'https://tatsuya0518.github.io', // 必ずあなたのユーザー名に置き換えてください
  base: '/Pages_UploadTest', // 必ずあなたのリポジトリ名に置き換えてください
  // ↑ ここまで追加
});
