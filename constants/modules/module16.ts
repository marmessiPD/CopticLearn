import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m16-l1": {
    id: "m16-l1",
    order: 1,
    moduleId: "m16",
    title: {
      de: "Infinitiv: Kausativ, Substantivierung, Potential, „noch nicht“",
      en: "Infinitive: Causative, Verbal Noun, Potential, “not yet”",
      ar: "المصدر: السببي، الاسمي، الإمكان، «ليس بعد»",
    },
    prerequisites: ["m10-l2", "m11-l1", "m12-l1"],
    quizId: "q16-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Kausativ‑Infinitiv (ⲉⲣⲉ=)",
          en: "Causative infinitive (ⲉⲣⲉ=)",
          ar: "المصدر السببي (ⲉⲣⲉ=)",
        },
        rule: {
          de: "ⲉⲣⲉ= + (Objekt) + Infinitiv gibt „veranlassen/um … zu“. Personale Vorsilben: ⲉⲣⲓ‑, ⲉⲣⲉⲕ‑, ⲉⲣⲉ‑, ⲉⲣⲉϥ‑, ⲉⲣⲉⲥ‑, ⲉⲣⲉⲛ‑, ⲉⲣⲉⲧⲉⲛ‑, ⲉⲣⲉⲩ‑ + Infinitiv.",
          en: "ⲉⲣⲉ= + (object) + infinitive expresses 'cause / in order to'. Person prefixes: ⲉⲣⲓ‑, ⲉⲣⲉⲕ‑, ⲉⲣⲉ‑, ⲉⲣⲉϥ‑, ⲉⲣⲉⲥ‑, ⲉⲣⲉⲛ‑, ⲉⲣⲉⲧⲉⲛ‑, ⲉⲣⲉⲩ‑ + infinitive.",
          ar: "ⲉⲣⲉ= + (المفعول) + المصدر تُفيد «يُسَبِّب/لكي». سوابق الشخص: ⲉⲣⲓ‑، ⲉⲣⲉⲕ‑، ⲉⲣⲉ‑، ⲉⲣⲉϥ‑، ⲉⲣⲉⲥ‑، ⲉⲣⲉⲛ‑، ⲉⲣⲉⲧⲉⲛ‑، ⲉⲣⲉⲩ‑ + المصدر.",
        },
        examples: [
          {
            coptic: "ⲉⲣⲉⲛϩⲱⲟⲩⲥ",
            translit: "ere‑n‑hōous",
            meaning: {
              de: "damit wir preisen",
              en: "so that we praise",
              ar: "لكي نسبّح",
            },
          },
          {
            coptic: "ⲉⲣⲉⲩⲟⲩⲱⲙ",
            translit: "ere‑u‑ouwm",
            meaning: {
              de: "damit sie essen",
              en: "so that they eat",
              ar: "لكي يأكلوا",
            },
          },
          {
            coptic: "ⲉⲣⲉ= ⲙⲙⲟⲛ ⲙⲙⲟⲓ ⲥⲱⲧⲙ",
            translit: "ere= mmon m‑moi sōtm",
            meaning: {
              de: "veranlasste mich zu hören",
              en: "caused me to listen",
              ar: "سبّب أن أستمع",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Kausativ als Verb „bewirken“",
          en: "Causative used as verb 'to cause'",
          ar: "ⲉⲣⲉ= كفعل «يسبّب»",
        },
        rule: {
          de: "ⲉⲣⲉ= kann eigenständig als „bewirken, veranlassen“ stehen: ⲉⲣⲉ= + (Objektmarker) + Objekt + Infinitiv.",
          en: "ⲉⲣⲉ= also functions as a verb ‘to cause’: ⲉⲣⲉ= + (object marker) + object + infinitive.",
          ar: "يمكن استعمال ⲉⲣⲉ= كفعل مستقل «يُسبّب»: ‎ⲉⲣⲉ= + (أداة مفعول) + المفعول + المصدر.",
        },
        examples: [
          {
            coptic: "ⲉⲣⲉ= ⲛⲁⲛ ⲉⲣⲉⲛϩⲱⲟⲩⲥ",
            translit: "ere= nan ere‑n‑hōous",
            meaning: {
              de: "Er bewirkte, dass wir preisen.",
              en: "He caused us to praise.",
              ar: "جعلنا نسبّح.",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Verbales Substantiv",
          en: "Verbal substantive",
          ar: "الاسم المشتق من الفعل",
        },
        rule: {
          de: "Der Infinitiv kann als Substantiv verwendet werden („das Loben“, „das Gehen“) und bezieht sich auf die Handlung selbst.",
          en: "The infinitive can function as a noun (‘the praising’, ‘the going’), referring to the action itself.",
          ar: "يمكن أن يعمل المصدر كاسم («التسبيح»، «الذهاب») مشيرًا إلى الفعل ذاته.",
        },
        examples: [
          {
            coptic: "ⲡⲓϩⲱⲟⲩⲥ",
            translit: "pi‑hōous",
            meaning: {
              de: "das Lob/der Lobpreis",
              en: "the praise",
              ar: "التسبيح",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Potential‑Infinitiv",
          en: "Potential infinitive",
          ar: "المصدر الدال على الإمكان",
        },
        rule: {
          de: "ⲟⲩⲟⲛ ⲉϣⲟⲙ „هناك قدرة“ → „es ist möglich (zu …)“. Negativ: ⲙⲙⲟⲛⲉϣⲟⲙ oder mit Negativ des Plusquamperfekts + ⲉϣⲟⲙ für Vergangenheit („konnte nicht …“).",
          en: "ⲟⲩⲟⲛ ⲉϣⲟⲙ ‘there is ability’ → ‘it is possible (to …)’. Negative: ⲙⲙⲟⲛⲉϣⲟⲙ, or use the negative pluperfect + ⲉϣⲟⲙ to express past ‘could not’.",
          ar: "ⲟⲩⲟⲛ ⲉϣⲟⲙ «هناك قدرة» ⇒ «يمكن (أن…)». النفي: ⲙⲙⲟⲛⲉϣⲟⲙ، أو نفي الماضي الأسبق + ⲉϣⲟⲙ للدلالة على «لم يستطع».",
        },
        examples: [
          {
            coptic: "ⲟⲩⲟⲛ ⲉϣⲟⲙ ⲛⲁϣⲱⲧⲙ",
            translit: "ouon esjōm na‑shōtm",
            meaning: {
              de: "Es ist möglich, zu hören.",
              en: "It is possible to listen.",
              ar: "من الممكن أن يسمع.",
            },
          },
          {
            coptic: "ⲙⲙⲟⲛⲉϣⲟⲙ ⲙⲙⲟϥ",
            translit: "mmon esjōm mmof",
            meaning: {
              de: "Es ist nicht möglich für ihn.",
              en: "It is not possible for him.",
              ar: "ليس ممكنًا له.",
            },
          },
          {
            coptic: "ⲙⲡⲟⲩ ⲉϣⲟⲙ ⲛⲁⲙⲟⲛⲓ",
            translit: "mpou esjōm na‑Amoni",
            meaning: {
              de: "Sie konnten ihn nicht halten.",
              en: "They could not hold him.",
              ar: "لم يستطيعوا أن يمسكوه.",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: { de: "„Noch nicht“", en: "Not yet", ar: "ليس بعد" },
        rule: {
          de: "ⲙⲡⲁⲧ= (pronominal) / ⲙⲡⲁⲧⲉ‑ (Konstrukt) → „noch nicht/ bevor“. Mit Ne‑Partikel kann Vergangenheit „hatte noch nicht“ ausgedrückt werden.",
          en: "Use ⲙⲡⲁⲧ= (pronominal) / ⲙⲡⲁⲧⲉ‑ (construct) for ‘not yet/before’. Combine with the pluperfect particle ⲛⲉ‑ for ‘had not yet’.",
          ar: "ⲙⲡⲁⲧ= (ضميري) / ⲙⲡⲁⲧⲉ‑ (إضافي) لمعنى «ليس بعد/قبل». مع ‎ⲛⲉ‑ تُفيد «لم يكن بعد قد…».",
        },
        examples: [
          {
            coptic: "ⲙⲡⲁⲧⲉⲫⲓ ⲉⲡⲁⲓⲙⲁ",
            translit: "mpatef‑i e‑paima",
            meaning: {
              de: "Er war noch nicht gekommen.",
              en: "He had not yet come.",
              ar: "لم يكن قد أتى بعد.",
            },
          },
          {
            coptic: "ⲙⲡⲁⲧⲉ ⲡⲓⲡⲁⲣⲁⲃⲟⲗⲏ",
            translit: "mpate pi‑parabolē",
            meaning: {
              de: "bevor das Gleichnis …",
              en: "before the parable …",
              ar: "قبل المثل…",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Verbketten (ⲛ/ⲉ)",
          en: "Verb chains (ⲛ / ⲉ)",
          ar: "سلاسل الأفعال (ⲛ/ⲉ)",
        },
        rule: {
          de: "Wenn ein Verb direkt ein weiteres regiert, verbindet ⲛ das zweite Verb; steht ein anderes Wort dazwischen, steht ⲉ vor dem zweiten Verb.",
          en: "When one verb governs another, use ⲛ before the second verb; if another word intervenes, use ⲉ.",
          ar: "عند اقتران فعلين: تُستعمل ⲛ قبل الفعل الثاني مباشرة؛ وإذا تخلّل لفظ آخر استُعملت ⲉ قبل الفعل الثاني.",
        },
        examples: [
          {
            coptic: "ⲁⲫϩⲉⲙⲥⲓ ⲉⲧⲉⲥⲃⲱ",
            translit: "af‑hemsi e‑tesbō",
            meaning: {
              de: "Er begann zu lehren.",
              en: "He began to teach.",
              ar: "بدأ يعلّم.",
            },
          },
          {
            coptic: "ⲧⲉⲧⲉⲛⲥⲱⲧⲙ ⲛⲉⲣⲇⲟⲕⲓⲙⲁⲍⲓⲛ",
            translit: "teten‑sōtm ner‑dokimazin",
            meaning: {
              de: "Ihr wisst zu prüfen.",
              en: "You know how to discern.",
              ar: "أنتم تعرفون أن تمتحنوا.",
            },
          },
        ],
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q16-1": {
    id: "q16-1",
    lessonId: "m16",
    title: {
      de: "Mini‑Quiz: Infinitiv‑Strukturen",
      en: "Mini‑quiz: Infinitive structures",
      ar: "اختبار: بنى المصدر",
    },
    passScore: 80,
    questions: [
      {
        id: "q16-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Konstruktion drückt den Kausativ aus?",
          en: "Which construction expresses the causative?",
          ar: "أي تركيب يعبّر عن السببية؟",
        },
        options: [
          { de: "ⲛ + Infinitiv", en: "ⲛ + infinitive", ar: "ⲛ + مصدر" },
          {
            de: "ⲉⲣⲉ= + (Objekt) + Infinitiv",
            en: "ⲉⲣⲉ= + (object) + infinitive",
            ar: "ⲉⲣⲉ= + (مفعول) + مصدر",
          },
          { de: "ⲙⲡⲁⲧ=", en: "ⲙⲡⲁⲧ=", ar: "ⲙⲡⲁⲧ=" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q16-1-2",
        type: "fill-in-the-blank",
        questionText: {
          de: 'Ergänze: „Es ist möglich zu hören" ⲟⲩⲟⲛ ___',
          en: 'Complete: "it is possible to listen" ⲟⲩⲟⲛ ___',
          ar: "أكمل: «يمكن أن يسمع» ⲟⲩⲟⲛ ___",
        },
        correctAnswer: "ⲉϣⲟⲙ",
      },
      {
        id: "q16-1-3",
        type: "multiple-choice",
        questionText: {
          de: "Wie drückt man „noch nicht“ aus?",
          en: "How do you express ‘not yet’?",
          ar: "كيف نعبّر عن «ليس بعد»؟",
        },
        options: [
          { de: "ⲙⲡⲁⲧ= / ⲙⲡⲁⲧⲉ‑", en: "ⲙⲡⲁⲧ= / ⲙⲡⲁⲧⲉ‑", ar: "ⲙⲡⲁⲧ= / ⲙⲡⲁⲧⲉ‑" },
          {
            de: "ⲙⲡⲉⲣ‑ + Infinitiv",
            en: "mper‑ + infinitive",
            ar: "ⲙⲡⲉⲣ‑ + مصدر",
          },
          { de: "ⲥⲁⲛ‑ + Verb", en: "san‑ + verb", ar: "ⲥⲁⲛ‑ + فعل" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q16-1-4",
        type: "matching" as any,
        pairs: [
          {
            left: "ⲉⲣⲉϥ‑ⲥⲱⲧⲙ",
            right: {
              de: "damit er hört",
              en: "so that he hears",
              ar: "لكي يسمع",
            },
          },
          {
            left: "ⲙⲙⲟⲛⲉϣⲟⲙ",
            right: { de: "nicht möglich", en: "not possible", ar: "غير ممكن" },
          },
          {
            left: "ⲙⲡⲁⲧ=",
            right: { de: "noch nicht", en: "not yet", ar: "ليس بعد" },
          },
        ],
      } as any,
      {
        id: "q16-1-5",
        type: "production" as any,
        prompt: {
          de: 'Forme: „Er ließ uns sprechen" mit Kausativ.',
          en: 'Produce: "He made us speak" using the causative.',
          ar: "كوّن: «جعلنا نتكلم» باستعمال السببي.",
        },
        correctAnswer: { coptic: "ⲉⲣⲉ= ⲛⲁⲛ ⲥⲁⲅⲓ", translit: "ere= nan sagi" },
      } as any,
    ],
  },
};
