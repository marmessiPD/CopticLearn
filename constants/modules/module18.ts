// Module 18 — Interrogativa & Gespräch (Dialoge), Interjektionen
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m18-l1": {
    id: "m18-l1",
    moduleId: "m18",
    order: 1,
    title: "Fragen & Gespräch: Interrogativa, Gesprächsöffner, Interjektionen",
    prerequisites: ["m12-l1", "m13-l1", "m14-l1", "m15-l1", "m16-l1", "m17-l1"],
    quizId: "m18-q1",
    slides: [
      {
        type: "grammar",
        title: "Drei Wege zu Fragen (Überblick)",
        body: "In Bohairisch gibt es (1) reine Intonation, (2) das Fragepartikel (ⲙⲛ/ⲙⲁⲛ? → orthographisch oft ⲙⲉ/ⲙ/), und (3) Interrogativ‑Pronomen/‑Adverbien (z. B. ⲛⲓⲙ, ⲁⲥ, ⲟⲩ, ⲉⲩⲛⲁⲩ, ⲉⲩⲱⲛ). Wenn ein Interrogativ NACH dem Verb steht, nutzt das Verb häufig die „zweite Tempusreihe“ (2nd tense).",
        examples: [
          "↗ Intonation: ⲛⲁⲛ ⲛⲁⲃⲱⲕ? — ‚Gehen wir?‘",
          "Partikel: ⲙⲉ ⲁⲛⲟⲕ ⲟⲩⲣⲉⲙϩⲉ ⲁⲛ; — ‚Bin ich kein Freier?‘",
          "Interrogativ vor Verb: ⲛⲓⲙ ⲡⲉ; — ‚Wer ist es?‘",
          "Interrogativ nach Verb → 2nd tense: ⲁⲩⲥⲱⲧⲙ ⲛⲓⲙ; — ‚Wen hörten sie?‘",
        ],
      },
      {
        type: "grammar",
        title: "Fragepartikel ⲁⲛ / ⲙ/ (Polarfragen)",
        body: "Ja/Nein‑Fragen kann man mit Intonation oder mit einem Partikel bilden. Sehr häufig steht ein enklitisches Fragepartikel wie ⲁⲛ bzw. ⲙ/; semantisch entspricht es ‚etwa/nicht?‘. Übersetze natürlich.",
        examples: [
          "ⲙ/ ⲁⲛⲟⲕ ⲟⲩⲁⲡⲟⲥⲧⲟⲗⲟⲥ ⲁⲛ; — ‚Bin ich nicht ein Apostel?‘",
          "ⲙ/ ⲧⲉⲕϣⲁϫⲉ ⲉⲣⲟⲓ; — ‚Sprichst du nicht zu mir?‘",
        ],
      },
      {
        type: "grammar",
        title: "Interrogativ‑Pronomen (wer/was/warum/wie viele …)",
        body: "Typische Formen: ⲁⲥ ‚was‘, ⲁⲕⲟⲟ= / ⲉⲩⲃⲉ ⲟⲩ ‚warum?‘, ⲛⲓⲙ ‚wer?‘, ⲟⲩ ‚was?‘, ⲟⲩ/ⲣ ‚wie viele?‘, ⲡⲱⲥ ‚wie (ist es)?‘, ⲥⲁ ⲛⲓⲁⲛⲟⲩ ‚bis wann?‘.",
        examples: [
          "ⲁⲥ ⲉⲧⲉ ⲡⲉ; — ‚Was ist es?‘",
          "ⲛⲓⲙ ⲡⲉ ⲡⲓⲣⲱⲙⲓ; — ‚Wer ist der Mann?‘",
          "ⲉⲩⲃⲉ ⲟⲩ ⲧⲉⲕⲣⲓⲙⲏ; — ‚Warum weinst du?‘",
        ],
      },
      {
        type: "grammar",
        title: "Interrogativ‑Adverbien des Ortes/Zeit",
        body: "ⲉⲱⲛ ‚wo?‘, ⲉⲓⲱⲛ ‚wohin?‘, ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ ‚woher?‘; Zeit: ⲛⲁⲩ/ⲉⲛⲁⲩ ‚wann?‘ (oft mit Präp. ⲉⲛ/ⲛ=).",
        examples: [
          "ⲉⲱⲛ ⲟⲩⲛⲟⲩⲧⲉ; — ‚Wo ist Gott?‘",
          "ⲉⲓⲱⲛ ⲟⲩⲟⲛ; — ‚Wohin gehst du?‘",
          "ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ ⲁⲕⲓ; — ‚Woher bist du gekommen?‘",
          "ⲛⲁⲩ ⲁⲕⲃⲱⲕ; — ‚Wann bist du gegangen?‘",
        ],
      },
      {
        type: "grammar",
        title: "Gesprächsstarter & Antworten",
        body: "Alltagssätze für den Einstieg: Begrüßen, Vorstellen, Nachfragen. Nutze kurze Einheiten und wiederhole die Frageformen.",
        examples: [
          "— ⲁⲛⲟⲕ ⲡⲉ … ⲛⲏⲓ ⲡⲉⲓⲱⲧ? — ‚Ich heiße …, und du?‘",
          "— ⲁⲕⲉⲣⲟⲟⲩⲥ ⲛⲁⲓ; — ‚Kannst du mir helfen?‘ — ⲉⲣⲟⲓ ⲙⲏⲓ, ⲛⲁⲓ ⲡⲉ. ‚Gerne.‘",
          "— ⲉⲱⲛ ⲡⲉ ⲡⲓⲙⲁ; — ‚Wo ist der Ort?‘ — ⲡⲉϫⲉ ⲡⲓⲣⲱⲙⲓ: ⲡⲉϩⲟⲟⲩ ⲛⲁⲓ.",
        ],
      },
      {
        type: "grammar",
        title: "Interjektionen (Ausrufe)",
        body: "Eigenständige Ausrufe wie ‚ja‘, ‚nein‘, ‚siehe!‘ etc. Sie stehen oft allein und tragen die Bedeutung ohne Verb. Einige sind flektiert (mit Kopula oder Person), andere unflektiert.",
        examples: [
          "ⲁⲙⲏⲛ! — ‚Amen!‘",
          "ⲟⲩⲟϩ! — ‚Und! (außerdem)‘ (als Anschluss)",
          "ⲱ … — Vokativ‑Einleitung: ⲱ Ⲙⲁⲣⲓⲁ!",
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
      },
      {
        type: "sentence",
        prompt: "Formuliere: „Warum weinst du?“ mit ⲉⲩⲃⲉ ⲟⲩ + Verb.",
        correct: "ⲉⲩⲃⲉ ⲟⲩ ⲧⲉⲕⲣⲓⲙⲏ;",
        distractors: ["ⲁⲕⲟⲟ= ⲧⲉⲕⲣⲓⲙⲏ;", "ⲙ/ ⲧⲉⲕⲣⲓⲙⲏ;"],
        explanation: "Die Buchform verwendet ⲉⲩⲃⲉ ⲟⲩ als ‚warum‘ vor dem Verb.",
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "m18-q1": {
    id: "m18-q1",
    moduleId: "m18",
    items: [
      {
        type: "multiple-choice",
        prompt: "Welcher Satz erfordert typischerweise die 2nd tense?",
        options: ["ⲛⲓⲙ ⲡⲉ ⲡⲓⲣⲱⲙⲓ;", "ⲁⲩⲛⲟⲩ ⲛⲓⲙ;", "ⲙ/ ⲛⲏⲧⲛ ⲛⲁⲃⲱⲕ;"],
        answer: 1,
        feedback: {
          correct: "Richtig – Interrogativ nach dem Verb → 2nd tense.",
          incorrect:
            "Denke daran: Steht das Fragewort hinter dem Verb, wechselt das Verb in die 2nd tense.",
        },
      },
      {
        type: "matching",
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
        type: "cloze",
        prompt: "Setze das passende Fragewort ein.",
        text: "_____ ⲁⲕⲃⲱⲕ; — ‚Wohin bist du gegangen?‘",
        solutions: { 0: "ⲉⲓⲱⲛ" },
      },
      {
        type: "multiple-choice",
        prompt: "Wähle die korrekte Polarfrage mit Partikel.",
        options: ["ⲙ/ ⲁⲛⲟⲕ ⲟⲩⲣⲉⲙϩⲉ ⲁⲛ;", "ⲁⲛⲟⲕ ⲟⲩⲣⲉⲙϩⲉ ⲙ/;", "ⲙ/ ⲁⲛⲟⲕ;"],
        answer: 0,
      },
      {
        type: "production",
        prompt:
          "Formuliere zwei höfliche Fragen an eine neue Person: (1) ‚Wie heißt du?‘ (2) ‚Woher kommst du?‘ (benutze ⲡⲱⲥ? / ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲉⲱⲛ)",
        rubric: {
          full: "Beide Fragen idiomatisch; richtige Fragewörter; korrekte Wortstellung.",
          partial: "Kleine Fehler in Fragewort/Wortstellung; Sinn klar.",
          none: "Nicht als Frage oder falsche Fragewörter.",
        },
      },
      {
        type: "cloze",
        prompt: "Ersetze die Lücke durch ⲛⲓⲙ oder ⲟⲩ.",
        text: "ⲁⲩϫⲟⲟⲩ ⲛⲁⲓ ⲛⲁ ____; — ‚Sie fragten: wen/was?‘",
        solutions: { 0: "ⲛⲓⲙ|ⲟⲩ" },
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
