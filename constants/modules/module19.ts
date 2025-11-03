// Module 19 — Besitz (Artikel, Konstruktion, ouon, Possessiv‑Pronomen, besessene Nomen)
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m19-l1": {
    id: "m19-l1",
    moduleId: "m19",
    order: 1,
    title:
      "Besitz ausdrücken: pa/ta/na, ⲛ/ⲙ/ⲛⲧⲉ, ⲟⲩⲟⲛ (haben), Possessiv‑Pronomen, besessene Nomen",
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
        title: "Possessiv‑Konstruktion (Genitiv) mit ⲛ/ⲙ bzw. ⲛⲧⲉ",
        body: "Zwischen zwei Nomen steht ⲛ/ⲙ als Genitiv; bei indefinitem Erstnomen und oft allgemein auch ⲛⲧⲉ. Zweites Nomen trägt Artikel.",
        examples: [
          "ⲡⲓⲟⲓⲕ ⲛⲧⲉ ⲡⲓⲣⲱⲙⲓ — „das Haus des Mannes“",
          "ⲟⲩⲥⲏⲣⲓ ⲛⲧⲉ ⲧⲓⲥⲏⲙⲏ — „eine Tochter der Frau“",
        ],
      },
      {
        type: "grammar",
        title: "Pronominale Form von ⲛⲧⲉ (‚von mir/dir/…‘)",
        body: "Stamm ⲛⲧ= + Personal‑Suffix: ⲛⲧⲓ (‚von mir‘), ⲛⲧⲁⲕ, ⲛⲧⲉ, ⲛⲧⲁⲫ, ⲛⲧⲁⲥ, ⲛⲧⲁⲛ, ⲛⲧⲱⲧⲛ, ⲛⲧⲱⲟⲩ.",
        examples: [
          "ⲡⲓⲟⲩⲓⲕ ⲛⲧⲁⲫ — „sein Brot“ (= ‚das Brot von ihm‘)",
          "ⲡⲓⲟⲩⲟⲩⲛⲓ ⲛⲧⲓ — „mein Licht“",
        ],
      },
      {
        type: "grammar",
        title: "Haben mit ⲟⲩⲟⲛ / Negation ⲙⲙⲟⲛ",
        body: "Existenziell ‚es gibt‘ → mit pronominalem ⲛⲧ= als ‚es gibt bei/zu mir‘ = ‚ich habe‘. Negation mit ⲙⲙⲟⲛ (option. ⲙⲙⲁⲩ).",
        examples: [
          "ⲟⲩⲟⲛ ⲛⲧⲓ ϩⲙⲙⲟⲓ — „ich habe (für mich) …“",
          "ⲙⲙⲟⲛ ⲛⲧⲉ — „du (f.) hast nicht …“",
          "ⲙⲙⲟⲛ] ϩⲁⲓ — „ich habe keinen Ehemann“",
        ],
      },
      {
        type: "grammar",
        title: "Possessiv‑Pronomen (‚meins/deins/… ist …‘)",
        body: "Prädikativ ‚mein/dein/… ist …‘ mit Formen: mask. vⲟⲓ, fem. yⲟⲓ, pl. nⲟⲩⲓ usw.; plus passende Kopula (ⲡⲉ/ⲧⲉ/ⲛⲉ). Auch prenominal: ⲃⲁ/ⲓⲁ/ⲛⲁ ‚der/die/das eine von …‘.",
        examples: [
          "vⲟⲓ ⲡⲉ ⲡⲓⲧⲟⲧⲥ — „der Stuhl ist meiner“",
          "yⲟⲕ ⲧⲉ ⲡⲓϫⲟⲙ — „die Kraft ist deine“",
          "ⲁⲃⲃⲁ ⲡⲁⲕⲱⲙ ⲃⲁ ⲧⲉ ⲕⲟⲓⲛⲱⲛⲓⲁ — „Abba Pachom von der Gemeinschaft“",
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
        explanation: "‚Brot‘ ist mask.; Kopula ⲡⲉ.",
      },
      {
        type: "sentence",
        prompt:
          "Bilde: „Ich habe keine Zeit.“ (verwende ⲙⲙⲟⲛ + pronominales ⲛⲧ=)",
        correct: "ⲙⲙⲟⲛ ⲛⲧⲓ ϩⲓ ⲟⲩⲛⲟⲩ.",
        distractors: ["ⲙⲙⲟⲛ] ⲟⲩⲛⲟⲩ.", "ⲟⲩⲟⲛ ⲛⲧⲓ ⲙⲛ ⲟⲩⲛⲟⲩ."],
        explanation: "Negatives ‚haben‘ mit ⲙⲙⲟⲛ + pronominale ⲛⲧ=‑Form.",
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "m19-q1": {
    id: "m19-q1",
    moduleId: "m19",
    items: [
      {
        type: "multiple-choice",
        prompt: "Wähle die korrekte Übersetzung von „sein Vater“",
        options: ["ⲡⲉⲫⲙⲁⲩ", "ⲧⲉⲫⲙⲁⲩ", "ⲡⲉⲫⲓⲱⲧ"],
        answer: 2,
        feedback: {
          correct: "Richtig: ⲓⲱⲧ ist maskulin → ⲡ‑Serie.",
          incorrect: "Denke an das Genus des BESITZ‑Objekts.",
        },
      },
      {
        type: "matching",
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
        type: "cloze",
        prompt: "Setze ⲛ/ⲙ oder ⲛⲧⲉ ein.",
        text: "ⲟⲩⲥⲏⲣⲓ ___ ⲧⲓⲥⲏⲙⲏ · ⲡⲓⲟⲓⲕ ___ ⲡⲓⲣⲱⲙⲓ",
        solutions: { 0: "ⲛⲧⲉ", 1: "ⲛⲧⲉ|ⲛ" },
      },
      {
        type: "multiple-choice",
        prompt: "Welche Negation ist korrekt für „Ich habe nicht …“?",
        options: ["ⲙⲙⲟⲛ ⲛⲧⲓ …", "ⲙⲙⲟⲛ] …", "ⲙ/ …"],
        answer: 0,
      },
      {
        type: "cloze",
        prompt: "Setze die richtige Kopula (ⲡⲉ/ⲧⲉ/ⲛⲉ): ___ ⲡⲓⲧⲟⲧⲥ vⲟⲓ.",
        text: "___ ⲡⲓⲧⲟⲧⲥ vⲟⲓ.",
        solutions: { 0: "ⲡⲉ" },
      },
      {
        type: "production",
        prompt:
          "Schreibe zwei Sätze: (1) „Das Buch ist meines.“ (2) „Der König der Stadt.“",
        rubric: {
          full: "(1) vⲟⲓ ⲡⲉ ⲡⲓⲃⲓⲃⲗⲟⲥ / ⲡⲓⲙⲉⲧⲣⲉⲙⲉ; (2) ⲡⲓⲟⲩⲣⲟ ⲛⲧⲉ ⲧⲓⲃⲁⲕⲏ.",
          partial: "Form weitgehend korrekt; kleine Grammatikfehler.",
          none: "Falsche Konstruktionen; Bedeutung unklar.",
        },
      },
    ],
  },
};
