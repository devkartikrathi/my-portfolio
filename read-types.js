const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), 'node_modules', 'tech-stack-icons', 'dist', 'index.d.ts');
try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(content);
} catch (e) {
    console.error(e);
}
