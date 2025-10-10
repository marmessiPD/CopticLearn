const fs = require('fs');

const filePath = String.raw`c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts`;
let content = fs.readFileSync(filePath, 'utf-8');

// Pattern to match malformed spiritual fields with duplicate keys
// These have the pattern: spiritual: { bibleVerse: { de: '...', en: '...', ar: '...', en: '...', ar: '...' }, bibleReference: { ... }, en: '...', ar: '...' }
// We need to extract just the de, en, ar for bibleVerse and bibleReference

const pattern = /spiritual:\s*\{\s*bibleVerse:\s*\{\s*de:\s*'([^']+)',\s*en:\s*'([^']+)',\s*ar:\s*'([^']+)',\s*en:\s*'([^']+)',\s*ar:\s*'([^']+)'\s*\},\s*bibleReference:\s*\{\s*de:\s*'([^']+)',\s*en:\s*'([^']+)',\s*ar:\s*'([^']+)',\s*en:\s*'([^']+)',\s*ar:\s*'([^']+)'\s*\},\s*en:\s*'([^']+)',\s*ar:\s*'([^']+)',\s*en:\s*'([^']+)',\s*ar:\s*'([^']+)'\s*\}/g;

let count = 0;
content = content.replace(pattern, (match, deBV, enBV1, arBV1, enBV2, arBV2, deBR, enBR1, arBR1, enBR2, arBR2, en1, ar1, en2, ar2) => {
  count++;
  // Use the first en/ar values for bibleVerse, and the second set (en2/ar2) for bibleReference
  return `spiritual: {
          bibleVerse: { de: '${deBV}', en: '${enBV1}', ar: '${arBV1}' },
          bibleReference: { de: '${deBR}', en: '${enBV2}', ar: '${arBV2}' }
        }`;
});

console.log(`Fixed ${count} malformed spiritual fields`);

// Write back
fs.writeFileSync(filePath, content, 'utf-8');
console.log('File updated successfully');
