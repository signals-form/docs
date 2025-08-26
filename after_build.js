const { rename, existsSync } = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const enHtmlPath = path.join(outDir, 'en.html');
const indexHtmlPath = path.join(outDir, 'index.html');

if (existsSync(enHtmlPath)) {
  rename(enHtmlPath, indexHtmlPath, (err) => {
    if (err) {
      console.error('Rename Failed:', err);
      process.exit(1);
    } else {
      console.log('✅ En Html Has Been Renamed To Index Html');
    }
  });
} else {
  console.log('⚠️ En Html File Not Found, Skipping Rename');
}
