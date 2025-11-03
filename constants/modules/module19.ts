// Module 19 — Besitz (Artikel, Konstruktion, ouon, Possessiv‑Pronomen, besessene Nomen)
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m19-l1": {
    id: "m19-l1",
    moduleId: "m19",
    order: 1,
    title: {
      de: "Besitz ausdrücken: pa/ta/na, ⲛ/ⲙ/ⲛⲧⲉ, ⲟⲩⲟⲛ (haben), Possessiv‑Pronomen, besessene Nomen",
      en: "Expressing Possession: pa/ta/na, ⲛ/ⲙ/ⲛⲧⲉ, ⲟⲩⲟⲛ (to have), Possessive Pronouns, Construct Nouns",
      ar: "التعبير عن الملكية: pa/ta/na، ⲛ/ⲙ/ⲛⲧⲉ، ⲟⲩⲟⲛ (يملك)، الضمائر الملكية، الأسماء المبنية",
    },
    prerequisites: ["m2-l1", "m5-l1", "m8-l1", "m10-l1", "m15-l1"],
    quizId: "m19-q1",
    slides: [
      {
        type: "grammar",
        title: "Possessiv‑Artikel (‚mein/sein/unser…‘)",
        body: "Die Possessiv‑Artikel hängen am Nomen: Maskulin: ⲡⲁ/ⲡⲉⲕ/ⲡⲉⲫ/…; Feminin: ⲧⲁ/ⲧⲉⲕ/ⲧⲉⲫ/…; Plural: ⲛⲁ/ⲛⲉⲕ/ⲛⲉⲫ/… Die Wahl von ⲡ‑ oder ⲧ‑ hängt vom GENUS des BESITZ‑Objekts ab (z. B. ‚seine Mutter‘ = ⲧⲉⲫⲙⲁⲩ).",
        examples: [
          "ⲡⲁⲓⲱⲓⲕ — „mein Brot“ (m.), ⲧⲁⲙⲁⲩ — „meine Mutter“ (f.)",
          "ⲡⲉⲕⲓⲱⲧ — „dein Vater (m.sg)“, ⲛⲉⲛⲛⲟⲩⲧⲉ — „unser Gott (pl.)“",
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Possessiv‑Konstruktion (Genitiv) mit ⲛ/ⲙ bzw. ⲛⲧⲉ",
          en: "Possessive Construction (Genitive) with ⲛ/ⲙ or ⲛⲧⲉ",
          ar: "بناء الملكية (المضاف) مع ⲛ/ⲙ أو ⲛⲧⲉ",
        },
        rule: {
          de: "Zwischen zwei Nomen steht ⲛ/ⲙ als Genitiv; bei indefinitem Erstnomen und oft allgemein auch ⲛⲧⲉ. Zweites Nomen trägt Artikel.",
          en: "Between two nouns ⲛ/ⲙ stands as genitive; with indefinite first noun and often generally also ⲛⲧⲉ. Second noun carries the article.",
          ar: "بين اسمين يقف ⲛ/ⲙ كمضاف؛ مع الاسم الأول غير المحدد وغالباً أيضاً ⲛⲧⲉ. الاسم الثاني يحمل الأداة.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲟⲓⲕ ⲛⲧⲉ ⲡⲓⲣⲱⲙⲓ",
            translit: "pioik nte piromi",
            meaning: {
              de: "das Haus des Mannes",
              en: "the house of the man",
              ar: "بيت الرجل",
            },
          },
          {
            coptic: "ⲟⲩⲥⲏⲣⲓ ⲛⲧⲉ ⲧⲓⲥⲏⲙⲏ",
            translit: "ousēri nte tisēmē",
            meaning: {
              de: "eine Tochter der Frau",
              en: "a daughter of the woman",
              ar: "ابنة المرأة",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Pronominale Form von ⲛⲧⲉ (‚von mir/dir/…')",
          en: "Pronominal Form of ⲛⲧⲉ ('from me/you/...')",
          ar: "الصيغة الضميرية لـ ⲛⲧⲉ («مني/منك/...»)",
        },
        rule: {
          de: "Stamm ⲛⲧ= + Personal‑Suffix: ⲛⲧⲓ (‚von mir'), ⲛⲧⲁⲕ, ⲛⲧⲉ, ⲛⲧⲁⲫ, ⲛⲧⲁⲥ, ⲛⲧⲁⲛ, ⲛⲧⲱⲧⲛ, ⲛⲧⲱⲟⲩ.",
          en: "Stem ⲛⲧ= + personal suffix: ⲛⲧⲓ ('from me'), ⲛⲧⲁⲕ, ⲛⲧⲉ, ⲛⲧⲁⲫ, ⲛⲧⲁⲥ, ⲛⲧⲁⲛ, ⲛⲧⲱⲧⲛ, ⲛⲧⲱⲟⲩ.",
          ar: "الجذر ⲛⲧ= + لاحقة شخصية: ⲛⲧⲓ («مني»)، ⲛⲧⲁⲕ، ⲛⲧⲉ، ⲛⲧⲁⲫ، ⲛⲧⲁⲥ، ⲛⲧⲁⲛ، ⲛⲧⲱⲧⲛ، ⲛⲧⲱⲟⲩ.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲟⲩⲓⲕ ⲛⲧⲁⲫ",
            translit: "piouik ntaf",
            meaning: {
              de: "sein Brot (= ‚das Brot von ihm')",
              en: "his bread (= 'the bread from him')",
              ar: "خبزه (= «الخبز منه»)",
            },
          },
          {
            coptic: "ⲡⲓⲟⲩⲟⲩⲛⲓ ⲛⲧⲓ",
            translit: "piouoni nti",
            meaning: { de: "mein Licht", en: "my light", ar: "نوري" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Haben mit ⲟⲩⲟⲛ / Negation ⲙⲙⲟⲛ",
          en: "To Have with ⲟⲩⲟⲛ / Negation ⲙⲙⲟⲛ",
          ar: "الملكية مع ⲟⲩⲟⲛ / النفي ⲙⲙⲟⲛ",
        },
        rule: {
          de: "Existenziell ‚es gibt' → mit pronominalem ⲛⲧ= als ‚es gibt bei/zu mir' = ‚ich habe'. Negation mit ⲙⲙⲟⲛ (option. ⲙⲙⲁⲩ).",
          en: "Existential 'there is' → with pronominal ⲛⲧ= as 'there is at/with me' = 'I have'. Negation with ⲙⲙⲟⲛ (option. ⲙⲙⲁⲩ).",
          ar: "الوجودية «هناك» → مع ⲛⲧ= الضميرية كـ «هناك عندي/معي» = «أملك». النفي مع ⲙⲙⲟⲛ (اختياري ⲙⲙⲁⲩ).",
        },
        examples: [
          {
            coptic: "ⲟⲩⲟⲛ ⲛⲧⲓ ϩⲙⲙⲟⲓ",
            translit: "ouon nti hmmoi",
            meaning: {
              de: "ich habe (für mich) …",
              en: "I have (for me) ...",
              ar: "أملك (لي) ...",
            },
          },
          {
            coptic: "ⲙⲙⲟⲛ ⲛⲧⲉ",
            translit: "mmon nte",
            meaning: {
              de: "du (f.) hast nicht …",
              en: "you (f.) do not have ...",
              ar: "أنت (مؤ.) لا تملك ...",
            },
          },
          {
            coptic: "ⲙⲙⲟⲛ] ϩⲁⲓ",
            translit: "mmon] hai",
            meaning: {
              de: "ich habe keinen Ehemann",
              en: "I have no husband",
              ar: "ليس لدي زوج",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Possessiv‑Pronomen (‚meins/deins/… ist …')",
          en: "Possessive Pronouns ('mine/yours/... is ...')",
          ar: "الضمائر الملكية («لي/لك/... هو ...»)",
        },
        rule: {
          de: "Prädikativ ‚mein/dein/… ist …' mit Formen: mask. vⲟⲓ, fem. yⲟⲓ, pl. nⲟⲩⲓ usw.; plus passende Kopula (ⲡⲉ/ⲧⲉ/ⲛⲉ). Auch prenominal: ⲃⲁ/ⲓⲁ/ⲛⲁ ‚der/die/das eine von …'.",
          en: "Predicative 'my/yours/... is ...' with forms: masc. vⲟⲓ, fem. yⲟⲓ, pl. nⲟⲩⲓ etc.; plus appropriate copula (ⲡⲉ/ⲧⲉ/ⲛⲉ). Also prenominal: ⲃⲁ/ⲓⲁ/ⲛⲁ 'the one of ...'.",
          ar: "الخبرية «لي/لك/... هو ...» بأشكال: مذكر vⲟⲓ، مؤنث yⲟⲓ، جمع nⲟⲩⲓ إلخ؛ زائد الرابط المناسب (ⲡⲉ/ⲧⲉ/ⲛⲉ). أيضاً قبل الاسم: ⲃⲁ/ⲓⲁ/ⲛⲁ «الواحد من ...».",
        },
        examples: [
          {
            coptic: "vⲟⲓ ⲡⲉ ⲡⲓⲧⲟⲧⲥ",
            translit: "voi pe pitots",
            meaning: {
              de: "der Stuhl ist meiner",
              en: "the chair is mine",
              ar: "الكرسي لي",
            },
          },
          {
            coptic: "yⲟⲕ ⲧⲉ ⲡⲓϫⲟⲙ",
            translit: "yok te pijom",
            meaning: {
              de: "die Kraft ist deine",
              en: "the power is yours",
              ar: "القوة لك",
            },
          },
          {
            coptic: "ⲁⲃⲃⲁ ⲡⲁⲕⲱⲙ ⲃⲁ ⲧⲉ ⲕⲟⲓⲛⲱⲛⲓⲁ",
            translit: "abba pakōm ba te koinōnia",
            meaning: {
              de: "Abba Pachom von der Gemeinschaft",
              en: "Abba Pachom of the community",
              ar: "أبا باخوم من الجماعة",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: "Besessene Nomen (‚Körperteile‘ u. a.)",
        body: "Einige Substantive erscheinen im ‚besessenen‘ Stamm (z. B. ⲣⲟ → ⲣⲱ= ‚Mund‘) und nehmen direkt Personalsuffixe: ⲣⲱⲓ ‚mein Mund‘, ⲣⲱⲕ ‚dein (m.) Mund‘, ⲣⲱⲫ ‚sein Mund‘ usw.",
        examples: [
          "ⲣⲱⲓ / ⲣⲱⲕ / ⲣⲱⲫ / ⲣⲱⲥ / ⲣⲱⲛ / ⲣⲱⲧⲉⲛ / ⲣⲱⲟⲩ",
          "Weitere Stämme: ⲧⲟⲧ= ‚Hand‘, ⲓⲁⲧ= ‚Auge‘, ⲕⲉⲛ= ‚Busen‘ …",
        ],
      },
      {
        type: "sentence",
        prompt: "Übersetze natürlich: „Unser Brot ist weiß.“",
        correct: "ⲡⲉⲛⲟⲩⲓⲕ ⲛⲟⲩⲁⲃ ⲡⲉ.",
        distractors: ["ⲡⲉⲛⲟⲩⲓⲕ ⲛⲟⲩⲁⲃ ⲧⲉ.", "ⲡⲉⲛⲟⲩⲓⲕ ⲛⲟⲩⲁⲃ ⲛⲉ."],
        explanation: "‚Brot' ist mask.; Kopula ⲡⲉ.",
      } as any,
      {
        type: "sentence",
        prompt:
          "Bilde: „Ich habe keine Zeit.“ (verwende ⲙⲙⲟⲛ + pronominales ⲛⲧ=)",
        correct: "ⲙⲙⲟⲛ ⲛⲧⲓ ϩⲓ ⲟⲩⲛⲟⲩ.",
        distractors: ["ⲙⲙⲟⲛ] ⲟⲩⲛⲟⲩ.", "ⲟⲩⲟⲛ ⲛⲧⲓ ⲙⲛ ⲟⲩⲛⲟⲩ."],
        explanation: "Negatives ‚haben' mit ⲙⲙⲟⲛ + pronominale ⲛⲧ=‑Form.",
      } as any,
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "m19-q1": {
    id: "m19-q1",
    lessonId: "m19-l1",
    title: {
      de: "Quiz: Besitz & Possessiv",
      en: "Quiz: Possession & Possessive",
      ar: "اختبار: الملكية والضمائر الملكية",
    },
    passScore: 80,
    moduleId: "m19",
    items: [
      {
        type: "multiple-choice",
        prompt: "Wähle die korrekte Übersetzung von „sein Vater“",
        options: ["ⲡⲉⲫⲙⲁⲩ", "ⲧⲉⲫⲙⲁⲩ", "ⲡⲉⲫⲓⲱⲧ"],
        answer: 2,
      } as any,
      {
        type: "match",
        prompt: "Ordne ⲛⲧ=‑Pronominalformen (‚von X‘).",
        pairs: [
          ["ⲛⲧⲓ", "von mir"],
          ["ⲛⲧⲁⲕ", "von dir (m.)"],
          ["ⲛⲧⲁⲥ", "von ihr"],
          ["ⲛⲧⲁⲛ", "von uns"],
          ["ⲛⲧⲱⲟⲩ", "von ihnen"],
        ],
      },
      {
        type: "gap",
        prompt: "Setze ⲛ/ⲙ oder ⲛⲧⲉ ein.",
        answer: "ⲛⲧⲉ|ⲛ",
      },
      {
        type: "multiple-choice",
        prompt: "Welche Negation ist korrekt für „Ich habe nicht …“?",
        options: ["ⲙⲙⲟⲛ ⲛⲧⲓ …", "ⲙⲙⲟⲛ] …", "ⲙ/ …"],
        answer: 0,
      },
      {
        type: "gap",
        prompt: "Setze die richtige Kopula (ⲡⲉ/ⲧⲉ/ⲛⲉ): ___ ⲡⲓⲧⲟⲧⲥ vⲟⲓ.",
        answer: "ⲡⲉ",
      },
      {
        type: "produce",
        prompt:
          'Schreibe zwei Sätze: (1) "Das Buch ist meines." (2) "Der König der Stadt."',
        rubric: "(1) vⲟⲓ ⲡⲉ ⲡⲓⲃⲓⲃⲗⲟⲥ / ⲡⲓⲙⲉⲧⲣⲉⲙⲉ; (2) ⲡⲓⲟⲩⲣⲟ ⲛⲧⲉ ⲧⲓⲃⲁⲕⲏ.",
      },
    ],
  },
};
