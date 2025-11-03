// Module 20 — Capstone: Lesestücke, Liturgie-Ausschnitte, Gesamtprüfung
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m20-l1": {
    id: "m20-l1",
    moduleId: "m20",
    order: 1,
    title: {
      de: "Capstone: Lese‑/Hörverständnis & Produktion",
      en: "Capstone: Reading/Listening Comprehension & Production",
      ar: "الختام: فهم القراءة/الاستماع والإنتاج",
    },
    prerequisites: [
      "m1-l1",
      "m2-l1",
      "m3-l1",
      "m4-l1",
      "m5-l1",
      "m6-l1",
      "m7-l1",
      "m8-l1",
      "m9-l1",
      "m10-l1",
      "m11-l1",
      "m12-l1",
      "m13-l1",
      "m14-l1",
      "m15-l1",
      "m16-l1",
      "m17-l1",
      "m18-l1",
      "m19-l1",
    ],
    quizId: "m20-q1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Capstone‑Hinweise",
          en: "Capstone Guidelines",
          ar: "إرشادات الختام",
        },
        rule: {
          de: "Du arbeitest jetzt mit zusammenhängenden Texten (biblisch/liturgisch) und Dialogen. Ziele: (1) Formen erkennen (Tempusreihen, Relativ, Pronomen), (2) Besitz/Frageformen sicher anwenden, (3) frei sprechen/schreiben.",
          en: "You now work with connected texts (biblical/liturgical) and dialogues. Goals: (1) recognize forms (tense series, relative, pronouns), (2) apply possession/question forms securely, (3) speak/write freely.",
          ar: "تعمل الآن مع نصوص مترابطة (كتابية/طقسية) وحوارات. الأهداف: (1) التعرف على الأشكال (سلاسل الأزمنة، النسبي، الضمائر)، (2) تطبيق الملكية/أشكال الأسئلة بثقة، (3) التحدث/الكتابة بحرية.",
        },
        examples: [
          {
            coptic:
              "Strategie: erst Artikel/Pronomen, dann Verbform (1st/2nd/3rd), danach Präpositionalgruppen farb‑markieren.",
            translit: "",
            meaning: {
              de: "Strategie: erst Artikel/Pronomen, dann Verbform (1st/2nd/3rd), danach Präpositionalgruppen farb‑markieren.",
              en: "Strategy: first article/pronouns, then verb form (1st/2nd/3rd), then color-mark prepositional groups.",
              ar: "الاستراتيجية: أولاً الأدوات/الضمائر، ثم شكل الفعل (الأول/الثاني/الثالث)، ثم تحديد مجموعات الجر بالألوان.",
            },
          },
          {
            coptic:
              "Beim Übersetzen natürlich und idiomatisch bleiben (nicht Wort‑für‑Wort).",
            translit: "",
            meaning: {
              de: "Beim Übersetzen natürlich und idiomatisch bleiben (nicht Wort‑für‑Wort).",
              en: "Stay natural and idiomatic when translating (not word-for-word).",
              ar: "كن طبيعياً ومعبراً عند الترجمة (وليس كلمة بكلمة).",
            },
          },
        ],
      },
      {
        type: "sentence",
        prompt:
          "Micro‑Projekt A (Dialog): Stelle dich vor, frage nach Name, Herkunft, Tätigkeit; antworte kurz (3–4 Sätze).",
        correct:
          "Beispiel: ⲁⲛⲟⲕ ⲡⲉ … · ⲙ/ ⲛⲁⲛ ⲁⲕⲣⲁϥ; · ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ ⲁⲛⲟⲕ; · ⲁⲓⲉⲣⲅⲁⲍⲉ ⲙ̄ⲡⲉⲓⲙⲁ …",
        distractors: [],
        explanation:
          "Nutze aus Modul 18 Interrogativa + aus Modul 19 Besitz (ⲡⲁ/ⲧⲁ/ⲛⲁ).",
      } as any,
      {
        type: "sentence",
        prompt:
          "Micro‑Projekt B (Liturgie‑Phrase bauen): ‚Dir (sg.) ist die Kraft und die Herrlichkeit' (mische Kopula + Possessiv‑Pronomen).",
        correct: "ⲉⲣⲟⲕ ⲡⲉ ⲡⲓⲃⲟⲏⲑⲉⲓⲁ · yⲟⲕ ⲧⲉ ⲡⲓϫⲟⲙ · ⲡⲉ ⲡⲓⲱⲟⲩ ⲛⲁⲓ.",
        distractors: ["ⲡⲓϫⲟⲙ ⲡⲉ yⲟⲕ (Wortstellung vertauscht)"],
        explanation:
          "Possessiv‑Pronomen + passende Kopula; bei fem. Nomen (ϫⲟⲙ) → ⲧⲉ.",
      } as any,
      {
        type: "sentence",
        prompt:
          "Micro‑Projekt C (Lesen): Übersetze 2–3 Sätze aus einem kurzen Erzähltext (Lehrtext). Markiere: Relativ, Zeitform, Objektmarker.",
        correct: "Lösung abhängig vom gewählten Abschnitt (freie Produktion).",
        distractors: [],
        explanation:
          "Achte auf ⲉⲧ‑/ⲛⲉⲧ‑, auf 1./2. Tempusreihe und auf ⲙⲙⲟ= / ⲉⲣⲟ=.",
      } as any,
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "m20-q1": {
    id: "m20-q1",
    lessonId: "m20-l1",
    title: {
      de: "Capstone Quiz: Gesamtprüfung",
      en: "Capstone Quiz: Comprehensive Test",
      ar: "اختبار الختام: الامتحان الشامل",
    },
    passScore: 80,
    moduleId: "m20",
    items: [
      // Mix aus 30 Items (Lesen, Grammatik, Produktion)
      {
        type: "multiple-choice",
        prompt: "Welche Sequenz analysiert Besitz korrekt? ⲡⲓⲟⲩⲣⲟ ⲛⲧⲉ ⲧⲓⲃⲁⲕⲏ …",
        options: [
          "Artikel–Nomen–Genitiv–Artikel–Nomen",
          "Nomen–Artikel–Genitiv–Artikel–Nomen",
          "Artikel–Nomen–Artikel–Genitiv–Nomen",
        ],
        answer: 0,
      },
      {
        type: "match",
        prompt: "Ordne ‚haben'‑Aussagen zu.",
        pairs: [
          ["ⲟⲩⲟⲛ ⲛⲧⲓ …", "ich habe …"],
          ["ⲙⲙⲟⲛ ⲛⲧⲁⲕ …", "du (m.) hast nicht …"],
          ["ⲟⲩⲟⲛ ⲛⲧⲁⲥ …", "sie (f.) hat …"],
          ["ⲙⲙⲟⲛ ⲛⲧⲱⲟⲩ …", "sie (pl.) haben nicht …"],
        ],
      },
      {
        type: "gap",
        prompt: "Setze das Fragewort ein (Ort/Zeit).",
        answer: "ⲉⲱⲛ|ⲛⲁⲩ|ⲉⲛⲁⲩ",
      },
      {
        type: "multiple-choice",
        prompt:
          "Wähle die korrekte prädikative Possessiv‑Pronomen‑Form: „Der Tisch ist deiner (m.sg)“.",
        options: ["vⲟⲕ ⲡⲉ ⲡⲓⲧⲣⲁⲡⲉⲍⲁ", "yⲟⲕ ⲧⲉ ⲡⲓⲧⲣⲁⲡⲉⲍⲁ", "nⲟⲩⲕ ⲛⲉ ⲡⲓⲧⲣⲁⲡⲉⲍⲁ"],
        answer: 0,
      },
      {
        type: "multiple-choice",
        prompt:
          "2nd tense bei Interrogativ NACH dem Verb – welche ist korrekt?",
        options: ["ⲛⲓⲙ ⲡⲉ ⲡⲓⲣⲱⲙⲓ;", "ⲁⲩⲥⲱⲧⲙ ⲛⲓⲙ;", "ⲉⲩⲃⲉ ⲟⲩ ⲧⲉⲕϣⲁϫⲉ;"],
        answer: 1,
      },
      {
        type: "cloze",
        prompt: "Besessenes Nomen ‚Mund‘: ergänze die Endung.",
        text: "ⲣⲱ= → ⲣⲱⲥ = ‚ihr Mund‘; ⲣⲱ= → _____ = ‚unser Mund‘.",
        solutions: { 0: "ⲣⲱⲛ" },
      },
      {
        type: "matching",
        prompt: "Ordne: Fragepartikel/Interjektion/Vokativ.",
        pairs: [
          ["ⲙ/", "Polarfrage‑Partikel"],
          ["ⲁⲙⲏⲛ", "Interjektion"],
          ["ⲱ …", "Vokativ‑Einleitung"],
        ],
      },
      {
        type: "multiple-choice",
        prompt: "Welche Übersetzung trifft ⲁⲩⲥⲱⲧⲙ ⲉⲟⲩⲱⲛ; am besten?",
        options: [
          "‚Hörten sie irgendwen?‘ (2nd tense)",
          "‚Hören sie jemanden?‘ (1st present)",
          "‚Sie hörten etwas.‘ (Perfekt)",
        ],
        answer: 0,
      },
      {
        type: "produce",
        prompt:
          "Kurzer Absatz (4–5 Sätze): Erzähle, was du gestern getan hast; benutze mindestens (a) eine Besitzkonstruktion, (b) eine Frage, (c) eine Interjektion.",
        rubric:
          "Kohärent, korrekte Tempora/2nd‑Tense wo nötig, Genitiv und Frage/Interjektion idiomatisch.",
      },
    ],
  },
};
