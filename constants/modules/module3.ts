// Module 3 — Nominalsätze & Kopula (Bohairic)
// Source basis: Younan, *So, You want to learn COPTIC? A guide to Bohairic Grammar (Bohairic)*.
// Notes: examples & forms follow sections on nominal sentences, copula pe/te/ne, demonstratives (vai/yai/nai; pai/tai/nai), far-demonstrative, and special possessive-copula turns.

import type { Module, Lesson, Quiz, Slide } from "../../types";

export const QUIZZES_M3: Record<string, Quiz> = {
  "q3-1": {
    id: "q3-1",
    lessonId: "m3-l1",
    title: {
      de: "Quiz: Nominalsatz I",
      en: "Quiz: Nominal Clause I",
      ar: "اختبار: الجملة الاسمية ١",
    },
    passScore: 80,
    items: [
      {
        type: "mc",
        prompt: "Welche Form ist die Kopula (3sg. masc.)?",
        choices: ["ⲡⲉ", "ⲧⲉ", "ⲛⲉ"],
        answer: 0,
      },
      {
        type: "match",
        prompt: "Ordne Demonstrativa (Pronomen)",
        pairs: [
          ["masc. ‚dieser‘", "ⲃⲁⲓ"],
          ["fem. ‚diese‘", "ⲓⲁⲓ"],
          ["Plural ‚diese‘", "ⲛⲁⲓ"],
        ],
      },
      { type: "gap", prompt: "ⲁⲛⲟⲕ ___ ⲡⲓⲅⲁⲃⲣⲓⲏⲗ (Kopula?)", answer: "ⲡⲉ" },
      {
        type: "tf",
        prompt: "Bei indefinitem Prädikat steht ⲡⲉ/ⲧⲉ/ⲛⲉ am ENDE des Satzes.",
        answer: true,
      },
      {
        type: "produce",
        prompt:
          "Übersetze: „Das ist der Sohn Gottes.“ (near demonstrative + Kopula)",
        rubric:
          "VAIsatz + pe; akzeptiere ⲃⲁⲓ ⲡⲉ ⲡⲥⲱⲛ ⲙ̀Ⲫⲛⲟⲩϯ / ⲃⲁⲓ ⲡⲉ ⲡⲥⲣⲏ ⲙ̀Ⲫⲛⲟⲩϯ",
      },
    ],
  },
  "q3-2": {
    id: "q3-2",
    lessonId: "m3-l2",
    title: {
      de: "Quiz: Nominalsatz II",
      en: "Quiz: Nominal Clause II",
      ar: "اختبار: الجملة الاسمية ٢",
    },
    passScore: 80,
    items: [
      {
        type: "mc",
        prompt: "Wähle das korrekte Muster (definites Prädikat):",
        choices: ["Subj + Präd", "Subj + Kopula + Präd"],
        answer: 1,
      },
      { type: "gap", prompt: "ⲓⲱⲥⲏⲫ ___ ⲟⲩϩⲁⲙⲥⲉ ___", answer: "ⲟⲩϩⲁⲙⲥⲉ ⲡⲉ" },
      {
        type: "match",
        prompt: "Zuordnen: pai/tai/nai vs. vai/yai/nai",
        pairs: [
          ["Artikel (nah, masc.)", "ⲡⲁⲓ"],
          ["Artikel (nah, fem.)", "ⲧⲁⲓ"],
          ["Pronomen (nah, masc.)", "ⲃⲁⲓ"],
        ],
      },
      {
        type: "tf",
        prompt: "ⲡⲁⲓⲁⲃⲱⲧ ⲃⲁⲓ = „dieser Kelch hier“ mit Emphase.",
        answer: true,
      },
      {
        type: "produce",
        prompt: "Baue: „Jener (dort) ist der Herr“ (far-demonstrative).",
        rubric: "… ⲡⲉ ⲡⲁⲛⲟⲩϯ mit ϯⲥⲟⲛ/ⲉⲧⲉ ⲛ̀ⲙⲙⲁⲩ o. ä. akzeptiert",
      },
    ],
  },
  "q3-3": {
    id: "q3-3",
    lessonId: "m3-l3",
    title: {
      de: "Quiz: Nominalsatz III",
      en: "Quiz: Nominal Clause III",
      ar: "اختبار: الجملة الاسمية ٣",
    },
    passScore: 80,
    items: [
      {
        type: "mc",
        prompt: "Welche Form bedeutet ‚zu dir ist …‘ (Besitzturn)?",
        choices: ["ⲛ̀ⲧⲟⲧⲕ", "ⲛ̀ⲧⲱⲧⲕ", "ⲧⲱⲧⲕ"],
        answer: 0,
      },
      {
        type: "gap",
        prompt: "___ ⲧⲉ ⲡⲉⲕϫⲟⲙ („Dein ist die Kraft“)",
        answer: "ⲉⲑⲱⲕ / ⲉⲑⲱⲧⲕ",
      },
      {
        type: "tf",
        prompt:
          "Bei indefinitem Prädikat (z. B. ⲟⲩⲣⲱⲙⲓ) steht ⲡⲉ/ⲧⲉ/ⲛⲉ am Ende.",
        answer: true,
      },
      {
        type: "match",
        prompt: "Ordne Subjektpronomen",
        pairs: [
          ["ich", "ⲁⲛⲟⲕ"],
          ["du (m.)", "ⲛⲓⲟⲕ"],
          ["er", "ⲛⲓⲟϥ"],
        ],
      },
      {
        type: "produce",
        prompt: "Sag: „Ich bin die Auferstehung.“ (Kopula-Satz)",
        rubric: "ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲁⲛⲁⲥⲧⲁⲥⲓⲥ (Bohairic Schreibweise akzeptiert)",
      },
    ],
  },
  "q3-final": {
    id: "q3-final",
    lessonId: "m3-l4",
    title: {
      de: "Abschlussquiz: Nominalsätze & Kopula",
      en: "Final Quiz: Nominals & Copula",
      ar: "الاختبار النهائي: الجمل الاسمية والرابطة",
    },
    passScore: 80,
    items: [
      // 25–30 mixed; include 3 production
      {
        type: "mc",
        prompt: "Wähle den korrekten Kopula-Satz (definites Prädikat):",
        choices: [
          "ⲡⲓⲑⲉⲟⲥ ⲡⲉ ⲡⲓⲟⲣⲑⲟⲇⲟⲝⲟⲥ",
          "ⲡⲓⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲡⲉ ⲡⲓⲑⲉⲟⲥ",
          "ⲡⲓⲑⲉⲟⲥ ⲡⲓⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲡⲉ",
        ],
        answer: 0,
      },
      { type: "tf", prompt: "ⲟⲩ-Prädikat ⇒ Kopula am Satzende.", answer: true },
      {
        type: "gap",
        prompt: "ⲃⲁⲓ ___ ⲡⲓⲁⲃⲱⲧ („Das ist der Kelch“)",
        answer: "ⲡⲉ",
      },
      { type: "gap", prompt: "ⲛⲓⲟϥ ___ ⲟⲩⲁⲅⲅⲉⲗⲟⲥ ___", answer: "ⲟⲩⲁⲅⲅⲉⲗⲟⲥ ⲡⲉ" },
      {
        type: "mc",
        prompt: "Welche Reihe ist Demonstrativ-Artikel (nah)?",
        choices: ["ⲃⲁⲓ/ⲓⲁⲓ/ⲛⲁⲓ", "ⲡⲁⲓ/ⲧⲁⲓ/ⲛⲁⲓ"],
        answer: 1,
      },
      {
        type: "match",
        prompt: "Ordne: ‚das ist‘ (m./f./pl.)",
        pairs: [
          ["m.", "ⲡⲉ"],
          ["f.", "ⲧⲉ"],
          ["pl.", "ⲛⲉ"],
        ],
      },
      {
        type: "produce",
        prompt: "Baue 2 Sätze mit ⲃⲁⲓ / ⲛⲁⲓ (nah), 1 mit ‚dort‘ (fern).",
        rubric: "korrekte Kopula & Artikel; Emphase (ⲡⲁⲓⲁⲃⲱⲧ ⲃⲁⲓ) optional",
      },
      {
        type: "mc",
        prompt: "Besitzumschreibung ‚dir gehört‘ ⇒",
        choices: ["ⲛ̀ⲧⲟⲧⲕ", "ⲙ̀ⲡⲉⲕ-", "ⲡⲉⲕ-"],
        answer: 0,
      },
      {
        type: "produce",
        prompt:
          "Sag 2 Alltagsaussagen: „Das ist mein Buch.“ / „Euch ist die Ehre.“",
        rubric: "Bsp. ⲃⲁⲓ ⲡⲉ ⲡⲓϫⲱⲙ ⲛ̀ⲁⲛⲟⲕ; ⲉⲧⲱⲧⲛ ⲛⲉ ⲡⲓⲱⲟⲩ",
      },
    ],
  },
};

export const LESSONS_M3: Record<string, Lesson> = {
  "m3-l1": {
    id: "m3-l1",
    order: 1,
    moduleId: "m3",
    title: {
      de: "Nominalsatz I — Subjekt & Prädikat",
      en: "Nominal Clause I",
      ar: "جملة اسمية ١",
    },
    prerequisites: ["m2-l?"],
    quizId: "q3-1",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Wähle schnell: ⲁⲛⲟⲕ / ⲛⲓⲟⲕ / ⲛⲓⲟϥ ⇒ ziehe zum passenden Emoji 👤/👥.",
          "Tippe: ⲁⲛⲟⲕ ⲟⲩⲡⲣⲟⲫⲏⲧⲏⲥ (ich bin Prophet) – nur tippen, noch keine Erklärung.",
        ],
      } as any,
      {
        type: "discover" as any,
        prompt:
          "Beobachte Wortstellung in 3 Sätzen (Subj vor Präd). Markiere Pronomina.",
      } as any,
      {
        type: "explain" as any,
        maxWords: 300,
        text: "Nominalsätze in Bohairic bestehen ohne Verb ‚sein‘. Bei **indefinitem** Prädikat (ⲟⲩ-) steht die **Kopula am Satzende**; bei **definitem** Prädikat steht **ⲡⲉ/ⲧⲉ/ⲛⲉ** vor dem Prädikat. Unabhängige Personalpronomina: ⲁⲛⲟⲕ, ⲛⲓⲟⲕ, ⲛⲓⲟϥ usw.",
      } as any,
      {
        type: "drill" as any,
        mode: "guided",
        items: [
          ["ich — Prophet (indef.)", "ⲁⲛⲟⲕ ⲟⲩⲡⲣⲟⲫⲏⲧⲏⲥ ⲡⲉ"],
          ["du (m.) — Christ", "ⲛⲓⲟⲕ ⲡⲉ ⲡⲭⲣⲓⲥⲧⲟⲥ"],
          ["er — Retter (indef.)", "ⲛⲓⲟϥ ⲟⲩⲥⲱⲧⲏⲣ ⲡⲉ"],
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "semi",
        items: [
          'Bilde: „Sie (f.) ist Jüngerin." (indef.)',
          "Wir sind die Schüler. (def.)",
          "Sie (pl.) sind Menschen. (indef.)",
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "free",
        items: [
          "Vorstellen: 2 Sätze über dich (indef.+def.).",
          "Schreibe 3 Wahr/Falsch-Sätze über Bilder (Person/Beruf).",
        ],
      } as any,
      { type: "quizRef" as any, quizId: "q3-1" } as any,
    ],
    vocabNew: [
      { coptic: "ⲁⲛⲟⲕ", glossDe: "ich" },
      { coptic: "ⲛⲓⲟⲕ", glossDe: "du (m.)" },
      { coptic: "ⲟⲩⲥⲱⲧⲏⲣ", glossDe: "Retter" },
      { coptic: "ⲡⲣⲟⲫⲏⲧⲏⲥ", glossDe: "Prophet" },
      { coptic: "ⲡⲉ/ⲧⲉ/ⲛⲉ", glossDe: "Kopula m./f./pl." },
    ],
  } as Lesson & { vocabNew: Array<{ coptic: string; glossDe: string }> },

  "m3-l2": {
    id: "m3-l2",
    order: 2,
    moduleId: "m3",
    title: {
      de: "Nominalsatz II — Kopula-Stellung",
      en: "Copula Placement",
      ar: "المسند والرابطة",
    },
    prerequisites: ["m3-l1"],
    quizId: "q3-2",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Ziehe ⲡⲉ/ⲧⲉ/ⲛⲉ an den richtigen Platz in 3 Sätzen.",
          "Höre & sprich: ⲓⲱⲥⲏⲫ ⲟⲩϩⲁⲙⲥⲉ ⲡⲉ.",
        ],
      } as any,
      {
        type: "discover" as any,
        prompt:
          'Vergleiche: (A) ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ vs. (B) ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲅⲁⲃⲣⲓⲏⲗ — Warum „ⲡⲉ" vorn in (B)?',
      } as any,
      {
        type: "explain" as any,
        maxWords: 350,
        text: "Regel: **Definites** Prädikat (mit Artikeln ⲡⲓ/ⲧⲓ/ⲛⲓ oder Demonstrativ-Artikel) ⇒ **Subj + ⲡⲉ/ⲧⲉ/ⲛⲉ + Präd**. **Indefinit** (ⲟⲩ-) ⇒ Kopula am **Satzende**. Emphase möglich.",
      } as any,
      {
        type: "drill" as any,
        mode: "guided",
        items: [
          ["Das ist der Herr.", "ⲃⲁⲓ ⲡⲉ ⲡⲁⲛⲟⲩϯ"],
          ["Josef ist ein Zimmermann.", "ⲓⲱⲥⲏⲫ ⲟⲩϩⲁⲙⲥⲉ ⲡⲉ"],
          ["Das ist die Auferstehung.", "ⲃⲁⲓ ⲡⲉ ⲡⲓⲁⲛⲁⲥⲧⲁⲥⲓⲥ"],
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "semi",
        items: [
          "Bilde 4 Sätze (2× def., 2× indef.).",
          "Markiere Kopula-Position.",
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "free",
        items: [
          "Mini-Projekt: Steckbrief – 4 Sätze zu Personenbildern (Beruf/Identität).",
        ],
      } as any,
      { type: "quizRef" as any, quizId: "q3-2" } as any,
    ],
    vocabNew: [
      { coptic: "ⲡⲁⲛⲟⲩϯ", glossDe: "der Herr (Gott)" },
      { coptic: "ⲡⲓⲅⲁⲃⲣⲓⲏⲗ", glossDe: "Gabriel" },
      { coptic: "ⲟⲩϩⲁⲙⲥⲉ", glossDe: "Zimmermann" },
      { coptic: "ⲡⲓⲁⲛⲁⲥⲧⲁⲥⲓⲥ", glossDe: "Auferstehung" },
    ],
  } as Lesson & { vocabNew: Array<{ coptic: string; glossDe: string }> },

  "m3-l3": {
    id: "m3-l3",
    order: 3,
    moduleId: "m3",
    title: {
      de: "Demonstrativa (nah/fern) im Satz",
      en: "Demonstratives in Nominals",
      ar: "أسماء الإشارة",
    },
    prerequisites: ["m3-l2"],
    quizId: "q3-2",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Zeige an: ⲃⲁⲓ / ⲓⲁⲓ / ⲛⲁⲓ → mask./fem./pl.",
          "Drag&Drop: ⲡⲁⲓ vs. ⲃⲁⲓ (Artikel vs. Pronomen).",
        ],
      } as any,
      {
        type: "discover" as any,
        prompt: 'Beobachte Emphase: ⲡⲁⲓⲁⲃⲱⲧ ⲃⲁⲓ = „dieser Kelch (genau hier)".',
      } as any,
      {
        type: "explain" as any,
        maxWords: 300,
        text: "Nah: Artikel ⲡⲁⲓ/ⲧⲁⲓ/ⲛⲁⲓ + Nomen; Pronomen ⲃⲁⲓ/ⲓⲁⲓ/ⲛⲁⲓ allein. Fern: Demonstrativ-Artikel mit Relativ-Partikel (z. B. ⲡⲓⲥⲱⲛ ⲉⲧⲉ ⲛ̀ⲙⲙⲁⲩ). Emphase: Artikel + Pronomen (ⲡⲁⲓ… ⲃⲁⲓ).",
      } as any,
      {
        type: "drill" as any,
        mode: "guided",
        items: [
          ['„Das ist der Sohn Gottes."', "ⲃⲁⲓ ⲡⲉ ⲡⲥⲣⲏ ⲙ̀Ⲫⲛⲟⲩϯ"],
          ['„Dieser Kelch (hier) …" (emphatisch)', "ⲡⲁⲓⲁⲃⲱⲧ ⲃⲁⲓ …"],
          ['„Jener Mann dort ist der Lehrer."', "ⲡⲓⲣⲱⲙⲓ ⲉⲧⲉ ⲛ̀ⲙⲙⲁⲩ ⲡⲉ ⲡⲓⲥⲁⲃⲁⲃ"],
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "semi",
        items: [
          "Ersetze Artikel durch Pronomen (3 Sätze).",
          "Bilde 3 Sätze mit fern-Demonstrativ.",
        ],
      } as any,
      { type: "quizRef" as any, quizId: "q3-2" } as any,
    ],
    vocabNew: [
      { coptic: "ⲃⲁⲓ/ⲓⲁⲓ/ⲛⲁⲓ", glossDe: "dieser/diese/diese (Pron.)" },
      { coptic: "ⲡⲁⲓ/ⲧⲁⲓ/ⲛⲁⲓ", glossDe: "dieser/diese/diese (Art.)" },
      { coptic: "ⲁⲃⲱⲧ", glossDe: "Kelch" },
    ],
  } as Lesson & { vocabNew: Array<{ coptic: string; glossDe: string }> },

  "m3-l4": {
    id: "m3-l4",
    order: 4,
    moduleId: "m3",
    title: {
      de: "Besitz & Kopula (ⲛ̀ⲧⲟⲧⲕ-Dreh)",
      en: "Possession with Copula",
      ar: "الملكية مع الرابطة",
    },
    prerequisites: ["m3-l3"],
    quizId: "q3-3",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Schnellformel: ‚dir gehört …' → Tippe ⲛ̀ⲧⲟⲧⲕ.",
          "Drag&Drop: ⲉⲑⲱⲕ ⲧⲉ ⲡⲉⲕϫⲟⲙ (zu dir ist die Kraft).",
        ],
      } as any,
      {
        type: "discover" as any,
        prompt:
          "Vergleiche ‚Besitz' (ⲛ̀ⲧⲟⲧⲕ …) vs. Nominal mit Possessiv-Artikel (ⲡⲉⲕ- …).",
      } as any,
      {
        type: "explain" as any,
        maxWords: 350,
        text: "Liturgische Besitz-Konstruktionen: ‚Zu dir ist …' (ⲉⲑⲱⲕ/ⲛ̀ⲧⲟⲧⲕ … ⲧⲉ/ⲡⲉ …). Auch Familienrelationen als Nominalsätze (‚Er ist der Vater': ⲃⲟⲓ ⲡⲉ ⲡⲓⲧⲱⲧⲥ).",
      } as any,
      {
        type: "drill" as any,
        mode: "guided",
        items: [
          ['„Dein ist die Kraft."', "ⲉⲑⲱⲕ ⲧⲉ ⲡⲉⲕϫⲟⲙ"],
          ['„Das ist der Vater."', "ⲃⲁⲓ ⲡⲉ ⲡⲓⲧⲱⲧⲥ"],
          ['„Euch ist die Herrlichkeit."', "ⲉⲧⲱⲧⲛ ⲛⲉ ⲡⲓⲱⲟⲩ"],
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "semi",
        items: ["Formuliere 4 Doxologie-Zeilen (ⲛ̀ⲧⲟⲧⲕ/ⲉⲑⲱⲕ + Kopula)."],
      } as any,
      { type: "quizRef" as any, quizId: "q3-3" } as any,
    ],
    vocabNew: [
      { coptic: "ⲛ̀ⲧⲟⲧⲕ / ⲉⲑⲱⲕ", glossDe: "zu dir (dir gehört…)" },
      { coptic: "ⲡⲓⲧⲱⲧⲥ", glossDe: "der Vater" },
      { coptic: "ⲡⲓⲱⲟⲩ", glossDe: "Herrlichkeit" },
    ],
  } as Lesson & { vocabNew: Array<{ coptic: string; glossDe: string }> },

  "m3-l5": {
    id: "m3-l5",
    order: 5,
    moduleId: "m3",
    title: {
      de: "Alltagssätze mit Kopula",
      en: "Everyday Nominals",
      ar: "تراكيب يومية",
    },
    prerequisites: ["m3-l4"],
    quizId: "q3-3",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Bilder benennen (dieser/diese/diese): 6 Karten.",
          "Sag laut nach (Aussprache-Drill): ⲃⲁⲓ ⲡⲉ ⲡⲉⲕϫⲱⲙ / ⲡⲁⲛⲟⲩϯ.",
        ],
      } as any,
      { type: "discover", prompt: "Finde Kopula-Position in 5 Alltagssätzen." },
      {
        type: "explain" as any,
        maxWords: 220,
        text: "Wiederholung & typische Fallen (Kopula-Endstellung bei ⲟⲩ-Prädikat; Demonstrativ-Artikel vs. -Pronomen; Besitz-Dreh).",
      } as any,
      {
        type: "drill" as any,
        mode: "free",
        items: [
          'Mini-Projekt: „Kirche vorstellen" – 5 Sätze (dies/jenes, Titel, Besitz-Dreh).',
          "Spreche & nimm auf; App gibt Silben-Feedback.",
        ],
      } as any,
      { type: "quizRef" as any, quizId: "q3-3" } as any,
    ],
    vocabNew: [
      { coptic: "ⲡⲓⲃⲁⲕⲏ", glossDe: "die Stadt" },
      { coptic: "ⲡⲉⲓⲱⲧ", glossDe: "mein Vater" },
      { coptic: "ⲡⲓϫⲱⲙ", glossDe: "das Buch" },
      { coptic: "ⲟⲩⲣⲱⲙⲓ", glossDe: "Mensch" },
    ],
  } as Lesson & { vocabNew: Array<{ coptic: string; glossDe: string }> },
};

// Export MODULE_M3 AFTER LESSONS_M3 is defined
export const MODULE_M3 = {
  id: "m3",
  order: 3,
  title: {
    de: "Nominalsätze & Kopula",
    en: "Nominals & Copula",
    ar: "الجمل الاسمية والرابطة",
  },
  outcomes: [
    "Kurzvorstellung (4 Sätze) sprechen & schreiben",
    "Kirchen-Phrasen bilden (‚Dir ist die Kraft' …)",
  ],
  lessons: Object.keys(LESSONS_M3),
  finalQuizId: "q3-final",
  masteryGate: 0.8,
  commonErrors: [
    {
      pattern: "Kopula vorn bei ⲟⲩ-Prädikat",
      fix: "Merke: ⲟⲩ- ⇒ ⲡⲉ/ⲧⲉ/ⲛⲉ **am Ende**.",
    },
    {
      pattern: "ⲡⲁⲓ vs. ⲃⲁⲓ",
      fix: "ⲡⲁⲓ = Artikel vor Nomen; ⲃⲁⲓ = Pronomen allein.",
    },
    {
      pattern: "Besitz mit gewöhnlichem Possessiv statt ⲛ̀ⲧⲟⲧⲕ-Dreh",
      fix: "Übe die liturgische Formel (ⲉⲑⲱⲕ/ⲛ̀ⲧⲟⲧⲕ … ⲡⲉ/ⲧⲉ/ⲛⲉ).",
    },
  ],
} as Module & {
  outcomes: string[];
  finalQuizId: string;
  masteryGate: number;
  commonErrors: Array<{ pattern: string; fix: string }>;
};

// Export aliases for compatibility with index.ts
export const LESSONS = LESSONS_M3;
export const QUIZZES = QUIZZES_M3;
