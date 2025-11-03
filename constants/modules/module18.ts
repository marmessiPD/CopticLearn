// Module 18 — Interrogativa & Gespräch (Dialoge), Interjektionen
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m18-l1": {
    id: "m18-l1",
    moduleId: "m18",
    order: 1,
    title: {
      de: "Fragen & Gespräch: Interrogativa, Gesprächsöffner, Interjektionen",
      en: "Questions & Conversation: Interrogatives, Conversation Starters, Interjections",
      ar: "الأسئلة والمحادثة: الاستفهام، بدايات المحادثة، التعجّبات",
    },
    prerequisites: ["m12-l1", "m13-l1", "m14-l1", "m15-l1", "m16-l1", "m17-l1"],
    quizId: "m18-q1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Drei Wege zu Fragen (Überblick)",
          en: "Three Ways to Ask Questions (Overview)",
          ar: "ثلاث طرق لطرح الأسئلة (نظرة عامة)",
        },
        rule: {
          de: 'In Bohairisch gibt es (1) reine Intonation, (2) das Fragepartikel (ⲙⲛ/ⲙⲁⲛ? → orthographisch oft ⲙⲉ/ⲙ/), und (3) Interrogativ‑Pronomen/‑Adverbien (z. B. ⲛⲓⲙ, ⲁⲥ, ⲟⲩ, ⲉⲩⲛⲁⲩ, ⲉⲩⲱⲛ). Wenn ein Interrogativ NACH dem Verb steht, nutzt das Verb häufig die "zweite Tempusreihe" (2nd tense).',
          en: 'In Bohairic there are (1) pure intonation, (2) the question particle (ⲙⲛ/ⲙⲁⲛ? → orthographically often ⲙⲉ/ⲙ/), and (3) interrogative pronouns/adverbs (e.g. ⲛⲓⲙ, ⲁⲥ, ⲟⲩ, ⲉⲩⲛⲁⲩ, ⲉⲩⲱⲛ). When an interrogative comes AFTER the verb, the verb often uses the "second tense series" (2nd tense).',
          ar: "في البهيرية هناك (1) النبرة المحضة، (2) أداة الاستفهام (ⲙⲛ/ⲙⲁⲛ؟ → إملائياً غالباً ⲙⲉ/ⲙ/)، و(3) الضمائر/الظروف الاستفهامية (مثل ⲛⲓⲙ، ⲁⲥ، ⲟⲩ، ⲉⲩⲛⲁⲩ، ⲉⲩⲱⲛ). عندما يأتي الاستفهام بعد الفعل، يستخدم الفعل غالباً «السلسلة الزمنية الثانية» (الماضي الثاني).",
        },
        examples: [
          {
            coptic: "↗ ⲛⲁⲛ ⲛⲁⲃⲱⲕ?",
            translit: "nan nabōk?",
            meaning: { de: "Gehen wir?", en: "Shall we go?", ar: "هل نذهب؟" },
          },
          {
            coptic: "ⲙⲉ ⲁⲛⲟⲕ ⲟⲩⲣⲉⲙϩⲉ ⲁⲛ;",
            translit: "me anok ouremhe an;",
            meaning: {
              de: "Bin ich kein Freier?",
              en: "Am I not a free person?",
              ar: "ألستُ حراً؟",
            },
          },
          {
            coptic: "ⲛⲓⲙ ⲡⲉ;",
            translit: "nim pe;",
            meaning: { de: "Wer ist es?", en: "Who is it?", ar: "من هو؟" },
          },
          {
            coptic: "ⲁⲩⲥⲱⲧⲙ ⲛⲓⲙ;",
            translit: "ausōtm nim;",
            meaning: {
              de: "Wen hörten sie?",
              en: "Whom did they hear?",
              ar: "من سمعوا؟",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Fragepartikel ⲁⲛ / ⲙ/ (Polarfragen)",
          en: "Question Particles ⲁⲛ / ⲙ/ (Polar Questions)",
          ar: "أدوات الاستفهام ⲁⲛ / ⲙ/ (أسئلة نعم/لا)",
        },
        rule: {
          de: "Ja/Nein‑Fragen kann man mit Intonation oder mit einem Partikel bilden. Sehr häufig steht ein enklitisches Fragepartikel wie ⲁⲛ bzw. ⲙ/; semantisch entspricht es ‚etwa/nicht?'. Übersetze natürlich.",
          en: "Yes/No questions can be formed with intonation or with a particle. Very often an enclitic question particle like ⲁⲛ or ⲙ/ is used; semantically it corresponds to 'isn't it?/right?'. Translate naturally.",
          ar: "يمكن تكوين أسئلة نعم/لا بالنبرة أو بأداة. غالباً ما تُستخدم أداة استفهام ملحقة مثل ⲁⲛ أو ⲙ/؛ ومعناها يوافق «أليس كذلك؟/صحيح؟». ترجم بشكل طبيعي.",
        },
        examples: [
          {
            coptic: "ⲙ/ ⲁⲛⲟⲕ ⲟⲩⲁⲡⲟⲥⲧⲟⲗⲟⲥ ⲁⲛ;",
            translit: "m/ anok ouapostolos an;",
            meaning: {
              de: "Bin ich nicht ein Apostel?",
              en: "Am I not an apostle?",
              ar: "ألستُ رسولاً؟",
            },
          },
          {
            coptic: "ⲙ/ ⲧⲉⲕϣⲁϫⲉ ⲉⲣⲟⲓ;",
            translit: "m/ tekšaje eroi;",
            meaning: {
              de: "Sprichst du nicht zu mir?",
              en: "Don't you speak to me?",
              ar: "ألا تتكلم معي؟",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Interrogativ‑Pronomen (wer/was/warum/wie viele …)",
          en: "Interrogative Pronouns (who/what/why/how many …)",
          ar: "الضمائر الاستفهامية (من/ماذا/لماذا/كم …)",
        },
        rule: {
          de: "Typische Formen: ⲁⲥ ‚was', ⲁⲕⲟⲟ= / ⲉⲩⲃⲉ ⲟⲩ ‚warum?', ⲛⲓⲙ ‚wer?', ⲟⲩ ‚was?', ⲟⲩ/ⲣ ‚wie viele?', ⲡⲱⲥ ‚wie (ist es)?', ⲥⲁ ⲛⲓⲁⲛⲟⲩ ‚bis wann?'.",
          en: "Typical forms: ⲁⲥ 'what', ⲁⲕⲟⲟ= / ⲉⲩⲃⲉ ⲟⲩ 'why?', ⲛⲓⲙ 'who?', ⲟⲩ 'what?', ⲟⲩ/ⲣ 'how many?', ⲡⲱⲥ 'how (is it)?', ⲥⲁ ⲛⲓⲁⲛⲟⲩ 'until when?'.",
          ar: "الأشكال النموذجية: ⲁⲥ «ماذا»، ⲁⲕⲟⲟ= / ⲉⲩⲃⲉ ⲟⲩ «لماذا؟»، ⲛⲓⲙ «من؟»، ⲟⲩ «ماذا؟»، ⲟⲩ/ⲣ «كم؟»، ⲡⲱⲥ «كيف (هو)؟»، ⲥⲁ ⲛⲓⲁⲛⲟⲩ «حتى متى؟».",
        },
        examples: [
          {
            coptic: "ⲁⲥ ⲉⲧⲉ ⲡⲉ;",
            translit: "as ete pe;",
            meaning: { de: "Was ist es?", en: "What is it?", ar: "ما هو؟" },
          },
          {
            coptic: "ⲛⲓⲙ ⲡⲉ ⲡⲓⲣⲱⲙⲓ;",
            translit: "nim pe piromi;",
            meaning: {
              de: "Wer ist der Mann?",
              en: "Who is the man?",
              ar: "من هو الرجل؟",
            },
          },
          {
            coptic: "ⲉⲩⲃⲉ ⲟⲩ ⲧⲉⲕⲣⲓⲙⲏ;",
            translit: "euve ou tekrimē;",
            meaning: {
              de: "Warum weinst du?",
              en: "Why do you cry?",
              ar: "لماذا تبكي؟",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Interrogativ‑Adverbien des Ortes/Zeit",
          en: "Interrogative Adverbs of Place/Time",
          ar: "الظروف الاستفهامية للمكان/الزمان",
        },
        rule: {
          de: "ⲉⲱⲛ ‚wo?', ⲉⲓⲱⲛ ‚wohin?', ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ ‚woher?'; Zeit: ⲛⲁⲩ/ⲉⲛⲁⲩ ‚wann?' (oft mit Präp. ⲉⲛ/ⲛ=).",
          en: "ⲉⲱⲛ 'where?', ⲉⲓⲱⲛ 'where to?', ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ 'where from?'; Time: ⲛⲁⲩ/ⲉⲛⲁⲩ 'when?' (often with prep. ⲉⲛ/ⲛ=).",
          ar: "ⲉⲱⲛ «أين؟»، ⲉⲓⲱⲛ «إلى أين؟»، ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ «من أين؟»؛ الزمان: ⲛⲁⲩ/ⲉⲛⲁⲩ «متى؟» (غالباً مع حرف الجر ⲉⲛ/ⲛ=).",
        },
        examples: [
          {
            coptic: "ⲉⲱⲛ ⲟⲩⲛⲟⲩⲧⲉ;",
            translit: "eōn ounoute;",
            meaning: {
              de: "Wo ist Gott?",
              en: "Where is God?",
              ar: "أين الله؟",
            },
          },
          {
            coptic: "ⲉⲓⲱⲛ ⲟⲩⲟⲛ;",
            translit: "eiōn ouon;",
            meaning: {
              de: "Wohin gehst du?",
              en: "Where are you going?",
              ar: "إلى أين تذهب؟",
            },
          },
          {
            coptic: "ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ ⲁⲕⲓ;",
            translit: "evol hiten eōn aki;",
            meaning: {
              de: "Woher bist du gekommen?",
              en: "Where did you come from?",
              ar: "من أين جئت؟",
            },
          },
          {
            coptic: "ⲛⲁⲩ ⲁⲕⲃⲱⲕ;",
            translit: "nau akbōk;",
            meaning: {
              de: "Wann bist du gegangen?",
              en: "When did you go?",
              ar: "متى ذهبت؟",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Gesprächsstarter & Antworten",
          en: "Conversation Starters & Responses",
          ar: "بدايات المحادثة والردود",
        },
        rule: {
          de: "Alltagssätze für den Einstieg: Begrüßen, Vorstellen, Nachfragen. Nutze kurze Einheiten und wiederhole die Frageformen.",
          en: "Everyday sentences for getting started: greeting, introducing, asking follow-up questions. Use short units and repeat the question forms.",
          ar: "جمل يومية للبدء: التحية، التعريف، طرح أسئلة متابعة. استخدم وحدات قصيرة وكرر أشكال الأسئلة.",
        },
        examples: [
          {
            coptic: "ⲁⲛⲟⲕ ⲡⲉ … ⲛⲏⲓ ⲡⲉⲓⲱⲧ?",
            translit: "anok pe … nēi peiōt?",
            meaning: {
              de: "Ich heiße …, und du?",
              en: "My name is …, and you?",
              ar: "اسمي … وأنت؟",
            },
          },
          {
            coptic: "ⲁⲕⲉⲣⲟⲟⲩⲥ ⲛⲁⲓ; — ⲉⲣⲟⲓ ⲙⲏⲓ, ⲛⲁⲓ ⲡⲉ.",
            translit: "akerōus nai; — eroi mēi, nai pe.",
            meaning: {
              de: "Kannst du mir helfen? — Gerne.",
              en: "Can you help me? — Gladly.",
              ar: "هل يمكنك مساعدتي؟ — بكل سرور.",
            },
          },
          {
            coptic: "ⲉⲱⲛ ⲡⲉ ⲡⲓⲙⲁ; — ⲡⲉϫⲉ ⲡⲓⲣⲱⲙⲓ: ⲡⲉϩⲟⲟⲩ ⲛⲁⲓ.",
            translit: "eōn pe pima; — peje piromi: pehoou nai.",
            meaning: {
              de: "Wo ist der Ort? — Der Mann sagte: Hier ist es.",
              en: "Where is the place? — The man said: Here it is.",
              ar: "أين المكان؟ — قال الرجل: هنا هو.",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Interjektionen (Ausrufe)",
          en: "Interjections (Exclamations)",
          ar: "التعجّبات (النداءات)",
        },
        rule: {
          de: "Eigenständige Ausrufe wie ‚ja', ‚nein', ‚siehe!' etc. Sie stehen oft allein und tragen die Bedeutung ohne Verb. Einige sind flektiert (mit Kopula oder Person), andere unflektiert.",
          en: "Independent exclamations like 'yes', 'no', 'behold!' etc. They often stand alone and carry meaning without a verb. Some are inflected (with copula or person), others uninflected.",
          ar: "نداءات مستقلة مثل «نعم»، «لا»، «ها!» إلخ. غالباً ما تقف وحدها وتحمل المعنى بدون فعل. بعضها معرب (مع رابط أو ضمير)، وبعضها غير معرب.",
        },
        examples: [
          {
            coptic: "ⲁⲙⲏⲛ!",
            translit: "amēn!",
            meaning: { de: "Amen!", en: "Amen!", ar: "آمين!" },
          },
          {
            coptic: "ⲟⲩⲟϩ!",
            translit: "ouoh!",
            meaning: {
              de: "Und! (außerdem)",
              en: "And! (moreover)",
              ar: "و! (علاوة على ذلك)",
            },
          },
          {
            coptic: "ⲱ Ⲙⲁⲣⲓⲁ!",
            translit: "ō Maria!",
            meaning: {
              de: "O Maria! (Vokativ‑Einleitung)",
              en: "O Mary! (vocative introduction)",
              ar: "يا مريم! (نداء)",
            },
          },
        ],
      },
      {
        type: "sentence",
        prompt:
          "Bilde eine natürliche Nachfrage mit ⲉⲱⲛ/ⲛⲁⲩ: „Wo wohnst du? Wann arbeitest du?“",
        correct: "ⲉⲱⲛ ⲁⲕⲥⲏⲛⲓ; ⲛⲁⲩ ⲁⲕⲉⲣⲅⲁⲍⲉ;",
        distractors: ["ⲉⲃⲟⲗ ⲁⲕⲥⲏⲛⲓ; ⲛⲟⲩ ⲁⲕⲉⲣⲅⲁⲍⲉ;", "ⲙ/ ⲁⲕⲥⲏⲛⲓ; ⲙ/ ⲁⲕⲉⲣⲅⲁⲍⲉ;"],
        explanation:
          "ⲉⲱⲛ fragt nach Ort; ⲛⲁⲩ/ⲉⲛⲁⲩ nach Zeit. Polarfragen mit ⲙ/ verwenden wir nur bei Ja/Nein.",
      } as any,
      {
        type: "sentence",
        item: {
          text: "ⲉⲩⲃⲉ ⲟⲩ ⲧⲉⲕⲣⲓⲙⲏ;",
          translit: "euve ou tekrimē;",
          meaning: {
            de: 'Formuliere: „Warum weinst du?" mit ⲉⲩⲃⲉ ⲟⲩ + Verb.',
            en: 'Formulate: "Why do you cry?" with ⲉⲩⲃⲉ ⲟⲩ + verb.',
            ar: "كوّن: «لماذا تبكي؟» مع ⲉⲩⲃⲉ ⲟⲩ + فعل.",
          },
        },
      } as any,
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "m18-q1": {
    id: "m18-q1",
    lessonId: "m18-l1",
    title: {
      de: "Quiz: Interrogativa & Gespräch",
      en: "Quiz: Interrogatives & Conversation",
      ar: "اختبار: الاستفهام والمحادثة",
    },
    passScore: 80,
    moduleId: "m18",
    items: [
      {
        type: "multiple-choice",
        prompt: "Welcher Satz erfordert typischerweise die 2nd tense?",
        options: ["ⲛⲓⲙ ⲡⲉ ⲡⲓⲣⲱⲙⲓ;", "ⲁⲩⲛⲟⲩ ⲛⲓⲙ;", "ⲙ/ ⲛⲏⲧⲛ ⲛⲁⲃⲱⲕ;"],
        answer: 1,
      } as any,
      {
        type: "match",
        prompt: "Ordne Interrogativa zu Bedeutungen.",
        pairs: [
          ["ⲉⲱⲛ", "wo?"],
          ["ⲉⲓⲱⲛ", "wohin?"],
          ["ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ", "woher?"],
          ["ⲛⲁⲩ", "wann?"],
          ["ⲁⲥ", "was?"],
        ],
      },
      {
        type: "gap",
        prompt: "Setze das passende Fragewort ein.",
        answer: "ⲉⲓⲱⲛ",
      },
      {
        type: "multiple-choice",
        prompt: "Wähle die korrekte Polarfrage mit Partikel.",
        options: ["ⲙ/ ⲁⲛⲟⲕ ⲟⲩⲣⲉⲙϩⲉ ⲁⲛ;", "ⲁⲛⲟⲕ ⲟⲩⲣⲉⲙϩⲉ ⲙ/;", "ⲙ/ ⲁⲛⲟⲕ;"],
        answer: 0,
      },
      {
        type: "produce",
        prompt:
          "Formuliere zwei höfliche Fragen an eine neue Person: (1) ‚Wie heißt du?' (2) ‚Woher kommst du?' (benutze ⲡⲱⲥ? / ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ)",
        rubric:
          "Beide Fragen idiomatisch; richtige Fragewörter; korrekte Wortstellung.",
      },
      {
        type: "gap",
        prompt: "Ersetze die Lücke durch ⲛⲓⲙ oder ⲟⲩ.",
        answer: "ⲛⲓⲙ|ⲟⲩ",
      },
      {
        type: "multiple-choice",
        prompt:
          "Welche Antwort ist eine Interjektion (alleinstehend sinnvoll)?",
        options: ["ⲱ Ⲙⲁⲣⲓⲁ", "ⲁⲙⲏⲛ!", "ⲙ/ ⲁⲛⲟⲕ ⲁⲛ;"],
        answer: 1,
      },
    ],
  },
};
