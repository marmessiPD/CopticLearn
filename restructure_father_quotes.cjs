#!/usr/bin/env node
/**
 * Script to restructure fatherQuote objects in module1.ts
 * Moves the 'source' field to a separate 'fatherReference' object with translations
 */

const fs = require('fs');

// Read the file
const filePath = String.raw`c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts`;
let content = fs.readFileSync(filePath, 'utf-8');

// Define the transformations for each source reference
const transformations = [
  {
    source_de: 'Polykarp, zitiert bei Bercot, *Early Christian Beliefs*, s.v. LOVE.',
    source_en: 'Polycarp, cited in Bercot, *Early Christian Beliefs*, s.v. LOVE.',
    source_ar: 'بوليكاربوس، مُقتبس في بيركوت، *Early Christian Beliefs*، s.v. LOVE.',
  },
  {
    source_de: 'Clement of Alexandria, bei Bercot, s.v. CHRIST, DIVINITY OF.',
    source_en: 'Clement of Alexandria, cited in Bercot, s.v. CHRIST, DIVINITY OF.',
    source_ar: 'إكليمنضس الإسكندري، مُقتبس في بيركوت، s.v. CHRIST, DIVINITY OF.',
  },
  {
    source_de: 'Clement of Alexandria, bei Bercot, s.v. SALVATION.',
    source_en: 'Clement of Alexandria, cited in Bercot, s.v. SALVATION.',
    source_ar: 'إكليمنضس الإسكندري، مُقتبس في بيركوت، s.v. SALVATION.',
  },
  {
    source_de: 'Clement of Rome, bei Bercot, s.v. CHILDREN.',
    source_en: 'Clement of Rome, cited in Bercot, s.v. CHILDREN.',
    source_ar: 'إكليمنضس الرُّومانِيّ، مُقتبس في بيركوت، s.v. CHILDREN.',
  },
  {
    source_de: 'Tertullian, bei Bercot, s.v. CHRIST, DIVINITY OF.',
    source_en: 'Tertullian, cited in Bercot, s.v. CHRIST, DIVINITY OF.',
    source_ar: 'ترتليانوس، مُقتبس في بيركوت، s.v. CHRIST, DIVINITY OF.',
  },
  {
    source_de: 'Clement of Alexandria, bei Bercot, s.v. SALVATION/OBEDIENCE.',
    source_en: 'Clement of Alexandria, cited in Bercot, s.v. SALVATION/OBEDIENCE.',
    source_ar: 'إكليمنضس الإسكندري، مُقتبس في بيركوت، s.v. SALVATION/OBEDIENCE.',
  },
  {
    source_de: 'Irenaeus, bei Bercot, s.v. CHURCH.',
    source_en: 'Irenaeus, cited in Bercot, s.v. CHURCH.',
    source_ar: 'إيرينيئوس، مُقتبس في بيركوت، s.v. CHURCH.',
  },
  {
    source_de: 'Clement of Alexandria, bei Bercot, s.v. HYMNS.',
    source_en: 'Clement of Alexandria, cited in Bercot, s.v. HYMNS.',
    source_ar: 'إكليمنضس الإسكندري، مُقتبس في بيركوت، s.v. HYMNS.',
  },
];

// Process each transformation
let replacementCount = 0;
for (const transform of transformations) {
  // Build regex pattern to match the source line
  // We need to escape special regex characters in the source string
  const escapedSource = transform.source_de.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `(\\s*)source:\\s*'${escapedSource}',\\s*//[^\\n]*\\n(\\s*)\\},`,
    'g'
  );

  const matches = [...content.matchAll(pattern)];
  if (matches.length === 0) {
    console.log(`WARNING: Pattern not found for: ${transform.source_de}`);
    continue;
  }

  for (const match of matches) {
    const indent = match[1];
    const closeIndent = match[2];

    // Build the replacement
    const replacement =
      `${closeIndent}},\n` +
      `${closeIndent}fatherReference: {\n` +
      `${indent}de: '${transform.source_de}',\n` +
      `${indent}en: '${transform.source_en}',\n` +
      `${indent}ar: '${transform.source_ar}',\n` +
      `${closeIndent}},`;

    content = content.replace(match[0], replacement);
    replacementCount++;
    console.log(`OK Replaced: ${transform.source_de.substring(0, 50)}...`);
  }
}

// Write the modified content back
fs.writeFileSync(filePath, content, 'utf-8');

console.log(`\nOK Successfully restructured ${replacementCount} fatherQuote objects`);
console.log(`OK File written to: ${filePath}`);
