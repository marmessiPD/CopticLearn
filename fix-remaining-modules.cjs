const fs = require('fs');
const path = require('path');

function fixModule(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changes = [];

  // Fix GrammarExample structure - wrap de/en/ar in meaning
  const grammarPattern = /(\s+)de: (".*?"),\n\s+en: (".*?"),\n\s+ar: (".*?"),/g;
  let match;
  while ((match = grammarPattern.exec(content)) !== null) {
    const indent = match[1];
    const de = match[2];
    const en = match[3];
    const ar = match[4];
    const replacement = `${indent}meaning: {\n${indent}  de: ${de},\n${indent}  en: ${en},\n${indent}  ar: ${ar},\n${indent}},`;
    content = content.replace(match[0], replacement);
    changes.push('Fixed GrammarExample structure');
  }

  // Fix SentenceSlide - remove title property and convert to item
  const sentencePattern = /{\s*type: "sentence",\s*title: \{[^}]+\},\s*lines: \[([^\]]+)\],\s*\}/gs;
  content = content.replace(sentencePattern, (match) => {
    changes.push('Fixed SentenceSlide structure');
    // Extract first line item
    const lineMatch = match.match(/coptic: (".*?"),\s*translit: (".*?"),\s*de: (".*?"),\s*en: (".*?"),\s*ar: (".*?")/);
    if (lineMatch) {
      const [, coptic, translit, de, en, ar] = lineMatch;
      return `{
        type: "sentence",
        item: {
          text: ${coptic},
          translit: ${translit},
          meaning: {
            de: ${de},
            en: ${en},
            ar: ${ar},
          },
        },
      }`;
    }
    return match;
  });

  // Fix quiz structure - convert to items format
  content = content.replace(/questions: \[/g, () => {
    changes.push('Converted questions to items');
    return 'items: [';
  });

  // Remove invalid properties from quiz items
  content = content.replace(/\s+id: "[^"]+",?\n/g, '');
  content = content.replace(/prompt: \{[^}]+\},/g, (match) => {
    const deMatch = match.match(/de: "([^"]+)"/);
    return deMatch ? `prompt: "${deMatch[1]}",` : match;
  });

  // Fix question types
  content = content.replace(/type: "multiple-choice",/g, 'type: "mc",');
  content = content.replace(/type: "matching",/g, 'type: "match",');
  content = content.replace(/type: "cloze",/g, 'type: "gap",');
  content = content.replace(/type: "production",/g, 'type: "produce",');

  // Fix options format
  content = content.replace(/options: \[([\s\S]*?)\],\s*answer:/g, (match, optionsContent) => {
    const options = [];
    const optionMatches = optionsContent.matchAll(/text: \{\s*de: "([^"]+)"/g);
    for (const optMatch of optionMatches) {
      options.push(optMatch[1]);
    }
    if (options.length > 0) {
      const answerMatch = match.match(/answer: (\d+)/);
      const answer = answerMatch ? answerMatch[1] : '0';
      return `choices: ${JSON.stringify(options)},\n        answer: ${answer},`;
    }
    return match;
  });

  // Fix correctAnswer to answer
  content = content.replace(/correctAnswer:/g, 'answer:');

  // Fix sampleSolution to rubric
  content = content.replace(/sampleSolution:/g, 'rubric:');

  if (changes.length > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`${path.basename(filePath)}: ${changes.length} changes made`);
    return true;
  }
  return false;
}

// Fix modules 14-20
const modulesDir = path.join(__dirname, 'constants', 'modules');
let totalFixed = 0;

for (let i = 14; i <= 20; i++) {
  const filePath = path.join(modulesDir, `module${i}.ts`);
  if (fs.existsSync(filePath)) {
    try {
      const fixed = fixModule(filePath);
      if (fixed) totalFixed++;
    } catch (error) {
      console.error(`Error fixing module${i}.ts:`, error.message);
    }
  }
}

console.log(`\nTotal files modified: ${totalFixed}`);
