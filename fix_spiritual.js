const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'constants', 'modules', 'module1.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define all the fixes
const fixes = [
  // Lines 400-411: Alpha
  {
    search: /bibleVerse: \{\s*de: '„Ich bin das Alpha und das Omega", spricht der Herr\.',\s*\/\/ Schlachter2000 \(Ref\.\):\s*\},\s*bibleReference: \{ de: 'Offb 1,8 \(SCH2000\)' \},\s*fatherQuote: \{\s*de: '„Wer die Liebe hat, ist fern von jeder Sünde\." — Hl\. Polykarp\.',\s*source: 'Polykarp, zitiert bei Bercot, \*Early Christian Beliefs\*, s\.v\. LOVE\.', \/\/ [^\n]*\n\s*\},\s*_refs: \[':contentReference\[oaicite:5\]\{index=5\}'\],/s,
    replace: `bibleVerse: {
            de: '„Ich bin das Alpha und das Omega", spricht der Herr.',
            en: '"I am the Alpha and the Omega," says the Lord.',
            ar: '"أنا الألف والياء"، يقول الرب.',
          },
          bibleReference: {
            de: 'Offb 1,8 (SCH2000)',
            en: 'Rev 1:8',
            ar: 'رؤيا ١:٨',
          },
          fatherQuote: {
            de: '„Wer die Liebe hat, ist fern von jeder Sünde." — Hl. Polykarp.',
            en: '"He who has love is far from all sin." — St. Polycarp.',
            ar: '"من لديه المحبة بعيد عن كل خطيئة." — القديس بوليكاربوس.',
          },
          fatherReference: {
            de: 'Polykarp, zitiert bei Bercot, *Early Christian Beliefs*, s.v. LOVE.',
            en: 'Polycarp, quoted in Bercot, *Early Christian Beliefs*, s.v. LOVE.',
            ar: 'بوليكاربوس، مقتبس في بيركوت، *Early Christian Beliefs*، انظر LOVE.',
          },`
  },
  // Lines 422-430: Vita (Eye)
  {
    search: /bibleVerse: \{ de: '„Die Leuchte des Leibes ist das Auge\."' \},\s*bibleReference: \{ de: 'Lk 11,34 \(SCH2000\)' \},\s*fatherQuote: \{\s*de: '„Der Sohn … ist … vollkommenes väterliches Licht; er ist ganz Augen, sieht alles\." — Hl\. Klemens v\. Alexandrien\.',\s*source: 'Clement of Alexandria, bei Bercot, s\.v\. CHRIST, DIVINITY OF\.', \/\/ [^\n]*\n\s*\},\s*_refs: \[':contentReference\[oaicite:9\]\{index=9\}'\],/s,
    replace: `bibleVerse: {
            de: '„Die Leuchte des Leibes ist das Auge."',
            en: '"The lamp of the body is the eye."',
            ar: '"سراج الجسد هو العين."',
          },
          bibleReference: {
            de: 'Lk 11,34 (SCH2000)',
            en: 'Lk 11:34',
            ar: 'لوقا ١١:٣٤',
          },
          fatherQuote: {
            de: '„Der Sohn … ist … vollkommenes väterliches Licht; er ist ganz Augen, sieht alles." — Hl. Klemens v. Alexandrien.',
            en: '"The Son … is … perfect paternal light; He is all eyes, seeing all." — St. Clement of Alexandria.',
            ar: '"الابن ... هو ... النور الأبوي الكامل؛ هو كله عيون، يرى كل شيء." — القديس إكليمنضس الإسكندري.',
          },
          fatherReference: {
            de: 'Clement of Alexandria, bei Bercot, s.v. CHRIST, DIVINITY OF.',
            en: 'Clement of Alexandria, in Bercot, s.v. CHRIST, DIVINITY OF.',
            ar: 'إكليمنضس الإسكندري، في بيركوت، انظر CHRIST, DIVINITY OF.',
          },`
  },
  // Lines 441-449: Gamma (God)
  {
    search: /bibleVerse: \{ de: '„Denn so sehr hat Gott die Welt geliebt…"' \},\s*bibleReference: \{ de: 'Joh 3,16 \(SCH2000\)' \},\s*fatherQuote: \{\s*de: '„Gottes Wille ist, dass der Gehorsame gerettet werde\." — Hl\. Klemens v\. Alexandrien\.',\s*source: 'Clement of Alexandria, bei Bercot, s\.v\. SALVATION\.', \/\/ [^\n]*\n\s*\},\s*_refs: \[':contentReference\[oaicite:13\]\{index=13\}'\],/s,
    replace: `bibleVerse: {
            de: '„Denn so sehr hat Gott die Welt geliebt…"',
            en: '"For God so loved the world…"',
            ar: '"لأنه هكذا أحب الله العالم..."',
          },
          bibleReference: {
            de: 'Joh 3,16 (SCH2000)',
            en: 'Jn 3:16',
            ar: 'يوحنا ٣:١٦',
          },
          fatherQuote: {
            de: '„Gottes Wille ist, dass der Gehorsame gerettet werde." — Hl. Klemens v. Alexandrien.',
            en: '"God\\'s will is that the obedient be saved." — St. Clement of Alexandria.',
            ar: '"إرادة الله هي أن يخلص المطيع." — القديس إكليمنضس الإسكندري.',
          },
          fatherReference: {
            de: 'Clement of Alexandria, bei Bercot, s.v. SALVATION.',
            en: 'Clement of Alexandria, in Bercot, s.v. SALVATION.',
            ar: 'إكليمنضس الإسكندري، في بيركوت، انظر SALVATION.',
          },`
  }
];

// Apply fixes
let fixCount = 0;
fixes.forEach((fix, index) => {
  if (content.match(fix.search)) {
    content = content.replace(fix.search, fix.replace);
    fixCount++;
    console.log(`Applied fix ${index + 1}`);
  } else {
    console.log(`Could not find pattern for fix ${index + 1}`);
  }
});

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nApplied ${fixCount} fixes total`);
