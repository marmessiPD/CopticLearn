import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m15-l1": {
    id: "m15-l1",
    order: 1,
    moduleId: "m15",
    title: {
      de: "Imperativ, Optativ & Konditional",
      en: "Imperative, Optative & Conditional",
      ar: "الأمر، الصيغة الرغبية والشرطية",
    },
    prerequisites: ["m12-l1", "m13-l1", "m14-l1"],
    quizId: "q15-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Imperativ (Affirmativ)",
          en: "Imperative (affirmative)",
          ar: "صيغة الأمر (إثبات)",
        },
        rule: {
          de: "Der Imperativ bildet sich aus dem Infinitiv mit vorgesetztem a‑ oder ma‑ je nach Verb. Viele Verben bilden a‑ + Infinitiv (ⲁⲛⲁⲩ „sieh!“), andere ma‑ (ⲙⲁⲟⲩⲱⲙ „iss!“).",
          en: "The Coptic imperative is formed by prefixing a‑ or ma‑ to the infinitive, depending on the verb. Many take a‑ (ⲁⲛⲁⲩ “see!”), others ma‑ (ⲙⲁⲟⲩⲱⲙ “eat!”).",
          ar: "تُصاغ صيغة الأمر بإضافة ‎a‑ أو ‎ma‑ قبل المصدر حسب الفعل: كثير من الأفعال تأخذ ‎a‑ (ⲁⲛⲁⲩ «انظر!»)، وأخرى ‎ma‑ (ⲙⲁⲟⲩⲱⲙ «كُل!»).",
        },
        examples: [
          {
            coptic: "ⲁⲛⲁⲩ",
            translit: "anau",
            meaning: { de: "Sieh!", en: "Look!", ar: "انظر!" },
          },
          {
            coptic: "ⲙⲁⲟⲩⲱⲙ",
            translit: "ma‑ouwm",
            meaning: { de: "Iss!", en: "Eat!", ar: "كُل!" },
          },
          {
            coptic: "ⲁⲣⲓⲙⲉⲑⲙⲏⲧ",
            translit: "ari‑methmēt",
            meaning: {
              de: "Sei barmherzig!",
              en: "Be merciful!",
              ar: "كُن رحيمًا!",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Imperativ (Negation)",
          en: "Negative imperative",
          ar: "نفي الأمر",
        },
        rule: {
          de: "Negation mit ⲙⲡⲉⲣ‑ vor dem Infinitiv: „Tu nicht …!“ → ⲙⲡⲉⲣⲥⲱⲧⲙ „hör nicht!“.",
          en: "Negate orders with ⲙⲡⲉⲣ‑ before the infinitive: ⲙⲡⲉⲣⲥⲱⲧⲙ “do not listen!”.",
          ar: "تُنْفَى الأوامر بوضع ‎ⲙⲡⲉⲣ‑ قبل المصدر: ‎ⲙⲡⲉⲣⲥⲱⲧⲙ «لا تسمع!».",
        },
        examples: [
          {
            coptic: "ⲙⲡⲉⲣⲟⲩⲱⲙ",
            translit: "mper‑ouwm",
            meaning: { de: "Iss nicht!", en: "Do not eat!", ar: "لا تأكل!" },
          },
          {
            coptic: "ⲁⲛⲟⲕ ⲡⲉ ⲙⲡⲉⲣϩⲱⲥ",
            translit: "anok pe mper‑hōs",
            meaning: {
              de: "Ich bin es, fürchte nicht.",
              en: "It is I; do not fear.",
              ar: "أنا هو؛ لا تخف.",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Optativ (milder Befehl)",
          en: "Optative (mild command/wish)",
          ar: "الصيغة الرغبية (تمنٍّ/أمر لطيف)",
        },
        rule: {
          de: "Der Optativ verwendet ⲙⲁⲣ‑ + abhängiges Pronomen + Infinitiv, z. B. ⲙⲁⲣⲉⲛ‑ⲑⲱⲟⲩⲥ „lasst uns preisen“.",
          en: "Optative uses ⲙⲁⲣ‑ + dependent pronoun + infinitive, e.g., ⲙⲁⲣⲉⲛ‑ϩⲱⲟⲩⲥ “let us praise.”",
          ar: "تُصاغ الرغبية بـ ‎ⲙⲁⲣ‑ + ضمير تابع + المصدر، مثل ‎ⲙⲁⲣⲉⲛ‑ϩⲱⲟⲩⲥ «لنسبّح».",
        },
        examples: [
          {
            coptic: "ⲙⲁⲣⲉⲛϩⲱⲟⲩⲥ",
            translit: "maren‑hōous",
            meaning: {
              de: "Lasst uns preisen.",
              en: "Let us praise.",
              ar: "لنسبّح.",
            },
          },
          {
            coptic: "ⲙⲁⲣⲉϥⲥⲱⲧⲙ",
            translit: "maref‑sōtm",
            meaning: {
              de: "Möge er hören.",
              en: "May he listen.",
              ar: "ليسمع.",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Konditional (wenn/falls)",
          en: "Conditional (if/when)",
          ar: "الشرط (إذا/عندما)",
        },
        rule: {
          de: "Zwischen Pronomen und Verb steht ⲥⲁⲛ‑ (ⲁⲓⲥⲁⲛ‑, ⲁⲕⲥⲁⲛ‑ …) für „wenn / sobald“. Negation des Konditionals nutzt die Subjunktiv‑Negation mit dem sog. „Stamm“ (ⲁⲣⲉ⳯ⲥⲧⲉⲙ …).",
          en: "Insert ⲥⲁⲛ‑ between the subject pronoun and the verb for ‘if/when’ (e.g., ⲁⲓⲥⲁⲛ‑, ⲁⲕⲥⲁⲛ‑ …). The negative conditional uses the subjunctive‑type negative with the verb stem.",
          ar: "تُدخل ‎ⲥⲁⲛ‑ بين الضمير والفعل لمعنى «إذا/متى» (ⲁⲓⲥⲁⲛ‑، ⲁⲕⲥⲁⲛ‑…). نفي الشرط يستعمل نفي الصيغة التابعة مع جذر الفعل.",
        },
        examples: [
          {
            coptic: "ⲁⲓⲥⲁⲛⲥⲱⲧⲙ, ⲁⲓⲥⲱⲧⲙ",
            translit: "aisan‑sōtm, ai‑sōtm",
            meaning: {
              de: "Wenn ich höre, höre ich …",
              en: "If I listen, I listen …",
              ar: "إن استمعتُ، أستمع…",
            },
          },
          {
            coptic: "ⲁⲣⲉ⳯ⲥⲧⲉⲙ ⲉⲣⲟⲕ ⲉⲛⲧⲁⲓⲥⲱⲧⲙ",
            translit: "are`stem erok entai‑sōtm",
            meaning: {
              de: "Wenn ich dir nicht hörte …",
              en: "If I did not listen to you …",
              ar: "لو لم أسمع لك…",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Alltagssprache",
          en: "Everyday phrases",
          ar: "عبارات يومية",
        },
        rule: {
          de: "Kurze, nutzbare Wendungen mit Imperativ/Optativ/Konditional.",
          en: "Short useful phrases with imperative/optative/conditional.",
          ar: "تعبيرات قصيرة نافعة بصيغة الأمر/الرغبة/الشرط.",
        },
        examples: [
          {
            coptic: "ⲙⲡⲉⲣϩⲟⲥ",
            translit: "mper‑hos",
            meaning: {
              de: "Fürchte dich nicht.",
              en: "Do not fear.",
              ar: "لا تخف.",
            },
          },
          {
            coptic: "ⲙⲁⲣⲉⲛⲥⲱⲧⲙ ⲉⲡϭⲟⲓⲥ",
            translit: "maren‑sōtm ep‑chois",
            meaning: {
              de: "Lasst uns dem Herrn gehorchen.",
              en: "Let us obey the Lord.",
              ar: "لنطع الرب.",
            },
          },
          {
            coptic: "ⲁⲓⲥⲁⲛϯ ⲟⲩϯⲃⲁⲛⲏ",
            translit: "aisan‑ti ou‑tivanē",
            meaning: {
              de: "Wenn ich Zeit habe …",
              en: "If I have time …",
              ar: "إن كان لدي وقت…",
            },
          },
        ],
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q15-1": {
    id: "q15-1",
    lessonId: "m15",
    title: {
      de: "Mini‑Quiz: Imperativ/Optativ/Konditional",
      en: "Mini‑quiz: Imperative/Optative/Conditional",
      ar: "اختبار: الأمر/الرغبة/الشرط",
    },
    passScore: 80,
    questions: [
      {
        id: "q15-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Form ist ein negativer Imperativ?",
          en: "Which form is a negative imperative?",
          ar: "أي صيغة هي أمر منفي؟",
        },
        options: [
          { de: "ⲁⲣⲓⲥⲱⲧⲙ", en: "ari‑sōtm", ar: "ⲁⲣⲓⲥⲱⲧⲙ" },
          { de: "ⲙⲡⲉⲣⲥⲱⲧⲙ", en: "mper‑sōtm", ar: "ⲙⲡⲉⲣⲥⲱⲧⲙ" },
          { de: "ⲙⲁⲣⲉⲛⲥⲱⲧⲙ", en: "maren‑sōtm", ar: "ⲙⲁⲣⲉⲛⲥⲱⲧⲙ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q15-1-2",
        type: "fill-in-the-blank",
        questionText: {
          de: 'Ergänze den Optativ: „Lasst uns lieben" ⲙⲁⲣⲉⲛ‑ ___',
          en: 'Complete the optative: "let us love" ⲙⲁⲣⲉⲛ‑ ___',
          ar: "أكمل الرغبية: «لنحبّ» ⲙⲁⲣⲉⲛ‑ ___",
        },
        correctAnswer: "ⲙⲉⲛⲣⲉ",
      },
      {
        id: "q15-1-3",
        type: "multiple-choice",
        questionText: {
          de: "Wie bildet man den Konditional?",
          en: "How is the conditional formed?",
          ar: "كيف تُصاغ الجملة الشرطية؟",
        },
        options: [
          {
            de: "ⲙⲁⲣ‑ + Infinitiv",
            en: "mar‑ + infinitive",
            ar: "ⲙⲁⲣ‑ + مصدر",
          },
          {
            de: "ⲥⲁⲛ‑ zwischen Pronomen und Verb",
            en: "ⲥⲁⲛ‑ between pronoun and verb",
            ar: "ⲥⲁⲛ‑ بين الضمير والفعل",
          },
          {
            de: "ⲙⲡⲉⲣ‑ + Infinitiv",
            en: "mper‑ + infinitive",
            ar: "ⲙⲡⲉⲣ‑ + مصدر",
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q15-1-4",
        type: "matching" as any,
        pairs: [
          {
            left: "ⲁⲛⲁⲩ",
            right: { de: "Imperativ", en: "Imperative", ar: "أمر" },
          },
          {
            left: "ⲙⲁⲣⲉϥⲥⲱⲧⲙ",
            right: { de: "Optativ", en: "Optative", ar: "رغبيّة" },
          },
          {
            left: "ⲁⲕⲥⲁⲛⲥⲱⲧⲙ",
            right: { de: "Konditional", en: "Conditional", ar: "شرطي" },
          },
        ],
      } as any,
      {
        id: "q15-1-5",
        type: "production" as any,
        prompt: {
          de: "Bilde: „Bitte, fürchte dich nicht!“ (negativer Imperativ mit ϩⲱⲥ).",
          en: "Produce: “Please, do not fear!” (negative imperative with ϩⲱⲥ).",
          ar: "كوّن: «من فضلك لا تخف!» (أمر منفي مع ϩⲱⲥ).",
        },
        correctAnswer: { coptic: "ⲙⲡⲉⲣϩⲱⲥ", translit: "mper‑hōs" },
      } as any,
    ],
  },
};
