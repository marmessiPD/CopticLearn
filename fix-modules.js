const fs = require('fs');
const path = require('path');

// Function to fix a single module file
function fixModuleFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix GrammarExample de/en/ar to meaning structure (3 lines)
  const grammarExampleRegex = /(\s+)(de: "([^"]+)",\s+en: "([^"]+)",\s+ar: "([^"]+)")/g;
  if (content.match(grammarExampleRegex)) {
    content = content.replace(grammarExampleRegex, (match, indent, full, de, en, ar) => {
      return `${indent}meaning: {\n${indent}  de: "${de}",\n${indent}  en: "${en}",\n${indent}  ar: "${ar}",\n${indent}}`;
    });
    modified = true;
  }

  // Fix 4-line de/en/ar patterns
  const fourLineRegex = /(\s+)de: "([^"]+)",\n(\s+)en: "([^"]+)",\n(\s+)ar: "([^"]+)",/g;
  if (content.match(fourLineRegex)) {
    content = content.replace(fourLineRegex, (match, indent1, de, indent2, en, indent3, ar) => {
      return `${indent1}meaning: {\n${indent1}  de: "${de}",\n${indent1}  en: "${en}",\n${indent1}  ar: "${ar}",\n${indent1}},`;
    });
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${path.basename(filePath)}`);
  }

  return modified;
}

// Fix all module files 13-20
const modulesDir = path.join(__dirname, 'constants', 'modules');
let totalFixed = 0;

for (let i = 13; i <= 20; i++) {
  const filePath = path.join(modulesDir, `module${i}.ts`);
  if (fs.existsSync(filePath)) {
    const fixed = fixModuleFile(filePath);
    if (fixed) totalFixed++;
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);
