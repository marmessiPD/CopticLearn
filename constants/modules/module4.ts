// Module 4 — Zahlen, Uhrzeit & Ordnungen (Bohairic)
// Source basis: Younan, sections on time-of-day phrases, days of week (ordinals), and numeric notation for thousands/ten-thousands.

import type { Module, Lesson, Quiz, Slide } from "../../types";

export const QUIZZES_M4: Record<string, Quiz> = {
  "q4-1": {
    id: "q4-1",
    lessonId: "m4-l1",
    title: {
      de: "Quiz: Zahlen & Uhrzeiten I",
      en: "Quiz: Numbers & Time I",
      ar: "اختبار: الأرقام والوقت ١",
    },
    passScore: 80,
    items: [
      {
        type: "mc",
        prompt: "Was heißt „eins Uhr“?",
        choices: ["ⲏⲟⲩⲁ ⲁⲓⲡ", "ⲓⲁⲡ ⲟⲩⲁⲓ", "ⲓⲁⲡ ⲧⲉ ⲟⲩⲁⲓ"],
        answer: 2,
      },
      { type: "gap", prompt: "„ⲥⲟⲟⲩ ⲟⲩϫⲟⲥ“ bedeutet __:__", answer: "6:30" },
      {
        type: "match",
        prompt: "Ordne Wochentage ↔ Rangzahl",
        pairs: [
          ["ⲡⲓⲟⲩⲁⲓ", "der Erste (Sonntag)"],
          ["ⲡⲓⲥⲱⲙⲧ", "der Dritte (Dienstag)"],
          ["ⲡⲓⲥⲁⲥϥ", "der Siebte (Samstag)"],
        ],
      },
      { type: "tf", prompt: "„ⲙⲏⲧ“ = zehn.", answer: true },
      {
        type: "produce",
        prompt: "Sag: „Zehn vor drei am Morgen“ in Bohairic.",
        rubric:
          "ⲓⲁⲡ ⲥⲱⲙⲧ ⲥⲁⲧⲉⲛ ⲙⲏⲧ ⲛ̀ⲕⲟⲩⲕⲟⲩ ⲛ̀ⲧⲟⲟⲩⲓ (Toleranz bei Schreibvarianten)",
      },
    ],
  },
  "q4-2": {
    id: "q4-2",
    lessonId: "m4-l2",
    title: {
      de: "Quiz: Zahlen & Uhrzeiten II",
      en: "Quiz: Numbers & Time II",
      ar: "اختبار: الأرقام والوقت ٢",
    },
    passScore: 80,
    items: [
      {
        type: "mc",
        prompt: "Wie wird 12 im Zeit-/Zählkontext gebildet?",
        choices: ["ⲙⲏⲧ + ⲛ̀ + 2", "2 + ⲙⲏⲧ", "ⲛ̀ + 2 + ⲙⲏⲧ"],
        answer: 0,
      },
      {
        type: "gap",
        prompt: "„ⲓⲁⲡ ⲟⲩⲁⲓ ⲛⲉⲙ ⲟⲩⲃⲁⲥⲓ ⲛ̀ⲙⲉⲣⲓ“ = __:__",
        answer: "1:30 (am Nachmittag)",
      },
      {
        type: "tf",
        prompt: "Tage heißen im Bohairischen schlicht ‚der Erste… der Siebte‘.",
        answer: true,
      },
      {
        type: "match",
        prompt: "Adverbien für Zeitangaben",
        pairs: [
          ["ⲟⲩⲛⲟⲩ (ajp/ ounou)", "Stunde"],
          ["ⲕⲟⲩⲕⲟⲩ", "Minute"],
          ["ϫⲟⲥ / ⲃⲁⲥⲓ", "Hälfte/Viertel"],
        ],
      },
      {
        type: "produce",
        prompt: "Sage 3 Uhrzeiten (frei), nutze ⲥⲁⲧⲉⲛ/ⲛⲉⲙ.",
        rubric: "korrekte Wortfolge; mind. 1 mit ‚vor‘ & 1 mit ‚nach‘",
      },
    ],
  },
  "q4-final": {
    id: "q4-final",
    lessonId: "m4-l4",
    title: {
      de: "Quiz: Zahlen & Uhrzeiten Final",
      en: "Quiz: Numbers & Time Final",
      ar: "اختبار: الأرقام والوقت النهائي",
    },
    passScore: 80,
    items: [
      {
        type: "gap",
        prompt: "Schreibe ‚ⲓⲁⲡ ⲟⲩⲁⲓ‘ ohne/mit ⲧⲉ korrekt.",
        answer: "ⲓⲁⲡ ⲧⲉ ⲟⲩⲁⲓ / ⲓⲁⲡ ⲟⲩⲁⲓ",
      },
      {
        type: "mc",
        prompt: "Montag heißt …",
        choices: ["ⲡⲓⲟⲩⲁⲓ", "ⲡⲓⲕⲣⲟⲙ", "ⲡⲓⲕ̀ⲥⲛⲁⲩ"],
        answer: 2,
      },
      {
        type: "tf",
        prompt:
          "Eine Zahl ×1000 wird mit Strich ‚so‘ über dem Zeichen markiert.",
        answer: true,
      },
      {
        type: "match",
        prompt: "Zuordnen: 1000 / 10 000 / 100 000 / 1 000 000",
        pairs: [
          ["—̅so", "×1000"],
          ["ⲙⲏⲧ ⲛ̀ⲥⲟ", "10 000"],
          ["ⲥⲉ ⲛ̀ⲥⲟ", "100 000"],
          ["ⲥⲟ ⲛ̀ⲥⲟ", "1 000 000"],
        ],
      },
      {
        type: "produce",
        prompt: "Sag 3 Alltagssätze mit Zahlen (Uhrzeit, Wochentag, Menge).",
        rubric: "aussagekräftige Bohairic-Phrasen; Aussprache ok",
      },
    ],
  },
};

export const LESSONS_M4: Record<string, Lesson> = {
  "m4-l1": {
    id: "m4-l1",
    order: 1,
    moduleId: "m4",
    title: {
      de: "Zählen I — 1–7 & 10 via Alltag",
      en: "Counting I",
      ar: "العد ١",
    },
    prerequisites: ["m3-l2"],
    quizId: "q4-1",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Höre & sprich 5 Uhrzeit-Chunks (1:00, 2:10, 3:50, 6:30, 7:00).",
          "Karten: ⲡⲓⲟⲩⲁⲓ/ⲡⲓⲥⲱⲙⲧ/ⲡⲓⲥⲁⲥϥ → ordne Wochentage.",
        ],
      } as any,
      {
        type: "discover" as any,
        prompt:
          "Beobachte: Uhrzeit ohne Kopula möglich; ‚vor' = ⲥⲁⲧⲉⲛ, ‚nach' = ⲛⲉⲙ.",
      } as any,
      {
        type: "explain" as any,
        maxWords: 350,
        text: 'Zeitangaben im Bohairischen: „ⲓⲁⲡ ⲧⲉ ⲟⲩⲁⲓ" (1 Uhr), „ⲓⲁⲡ ⲥⲱⲙⲧ ⲥⲁⲧⲉⲛ ⲙⲏⲧ ⲛ̀ⲕⲟⲩⲕⲟⲩ ⲛ̀ⲧⲟⲟⲩⲓ" (10 vor 3 am Morgen), „ⲕⲟⲟⲩ ⲟⲩϫⲟⲥ" (6:30). Wochentage sind Rangzahlen: ⲡⲓⲟⲩⲁⲓ (1.), ⲡⲓⲕ̀ⲥⲛⲁⲩ (2.), ⲡⲓⲥⲱⲙⲧ (3.) … ⲡⲓⲥⲁⲥϥ (7.).',
      } as any,
      {
        type: "drill" as any,
        mode: "guided",
        items: [
          ["Sag 1:00 / 1:30", "ⲓⲁⲡ ⲧⲉ ⲟⲩⲁⲓ · ⲓⲁⲡ ⲟⲩⲁⲓ ⲛⲉⲙ ⲟⲩⲃⲁⲥⲓ ⲛ̀ⲙⲉⲣⲓ"],
          ["10 vor 3 (morgens)", "ⲓⲁⲡ ⲥⲱⲙⲧ ⲥⲁⲧⲉⲛ ⲙⲏⲧ ⲛ̀ⲕⲟⲩⲕⲟⲩ ⲛ̀ⲧⲟⲟⲩⲓ"],
          ["6:30", "ⲥⲟⲟⲩ ⲟⲩϫⲟⲥ"],
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "semi",
        items: [
          "Baue 4 Uhrzeiten (du entscheidest ‚vor'/‚nach').",
          "Nenne den heutigen Wochentag auf Bohairisch.",
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "free",
        items: ["Sage 3 Termine (Tag+Uhrzeit) laut & aufzeichnen."],
      } as any,
      { type: "quizRef" as any, quizId: "q4-1" } as any,
    ],
  },

  "m4-l2": {
    id: "m4-l2",
    order: 2,
    moduleId: "m4",
    title: {
      de: "Kombinationen — 11–19, ‚vor/nach‘",
      en: "Combinations (11–19)",
      ar: "التركيبات ١١–١٩",
    },
    prerequisites: ["m4-l1"],
    quizId: "q4-2",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Karten: ⲙⲏⲧ + ⲛ̀ + (2/3/…); bilde gesprochene Uhrzeiten 12:.., 13:..",
          "Höre & sprich 3 Beispielsätze (App zählt Silben).",
        ],
      } as any,
      {
        type: "discover" as any,
        prompt:
          "Finde das Gemeinsame in 12 / 10 vor 3: Vorkommen von ⲙⲏⲧ ‚10'.",
      } as any,
      {
        type: "explain" as any,
        maxWords: 280,
        text: "Zahlen >10 in Zeit-/Zählangaben erscheinen als **ⲙⲏⲧ + ⲛ̀ + Grundzahl** in Kombinationen (z. B. ‚12 Tugenden' / ‚10 vor 3'). Für Uhrzeit mit ‚vor'/‚nach' nutzen wir **ⲥⲁⲧⲉⲛ** bzw. **ⲛⲉⲙ**.",
      } as any,
      {
        type: "drill" as any,
        mode: "guided",
        items: [
          ["10 nach 2", "ⲕ̀ⲥⲛⲁⲩ ⲛⲉⲙ ⲙⲏⲧ ⲛ̀ⲕⲟⲩⲕⲟⲩ"],
          ["12 (als Zahlwort im Satz)", "ⲙⲏⲧ ⲛ̀ⲥⲛⲁⲩ"],
          ["13 (als Uhrzeit-Minute)", "… ⲛⲉⲙ ⲙⲏⲧ ⲛ̀ⲥⲱⲙⲧ"],
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "semi",
        items: [
          "3 freie Uhrzeiten mit vor/nach (verschiedene Tageszeiten ⲛ̀ⲧⲟⲟⲩⲓ/ⲛ̀ⲙⲉⲣⲓ).",
        ],
      } as any,
      { type: "quizRef" as any, quizId: "q4-2" } as any,
    ],
  },

  "m4-l3": {
    id: "m4-l3",
    order: 3,
    moduleId: "m4",
    title: {
      de: "Rang & Wochentage",
      en: "Ordinal & Weekdays",
      ar: "الترتيبيّات",
    },
    prerequisites: ["m4-l2"],
    quizId: "q4-2",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Ordne 7 Karten (ⲡⲓⲟⲩⲁⲓ…ⲡⲓⲥⲁⲥϥ) zu Wochentagen.",
          "Sag den nächsten Gottesdienst-Tag (Bohairic).",
        ],
      } as any,
      {
        type: "discover" as any,
        prompt: "Rang im Alltag: Termine, Reihenfolgen.",
      } as any,
      {
        type: "explain" as any,
        maxWords: 220,
        text: "Im Bohairischen heißen die Tage schlicht ‚der Erste … der Siebte'. Nutze sie wie Ordinalzahlen im Alltagskontext (Terminabsprachen, Pläne).",
      } as any,
      {
        type: "drill" as any,
        mode: "guided",
        items: [
          ["Heute ist Dienstag.", "ⲡⲓⲥⲱⲙⲧ"],
          ["Wir treffen uns am Freitag.", "… ⲡⲓⲕⲟⲟⲩ"],
          ["Der Kurs beginnt am Ersten.", "… ⲡⲓⲟⲩⲁⲓ"],
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "free",
        items: ["Plane deine Woche (3 Sätze mit Tagesnamen + Uhrzeit)."],
      } as any,
      { type: "quizRef" as any, quizId: "q4-2" } as any,
    ],
  },

  "m4-l4": {
    id: "m4-l4",
    order: 4,
    moduleId: "m4",
    title: {
      de: "Zahlenschrift — 1000 ff.",
      en: "Numeral Notation",
      ar: "كتابة الأعداد",
    },
    prerequisites: ["m4-l3"],
    quizId: "q4-final",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Erkenne 4 Zahlbilder (×1000/×10 000/×100 000/×1 000 000).",
          "Ziehe richtige Lesung auf die Zahl.",
        ],
      } as any,
      {
        type: "discover" as any,
        prompt: "Beobachte das Überstrich-Zeichen ‚so' über Ziffern (×1000).",
      } as any,
      {
        type: "explain" as any,
        maxWords: 260,
        text: "Coptische Zahlenschrift: **Überstrich (so)** ⇒ Zahl ×1000. **ⲙⲏⲧ ⲛ̀ⲥⲟ** = 10 000; **ⲥⲉ ⲛ̀ⲥⲟ** = 100 000; **ⲥⲟ ⲛ̀ⲥⲟ** = 1 000 000.",
      } as any,
      {
        type: "drill" as any,
        mode: "guided",
        items: [
          ["Lies: (20)̅", "20 000"],
          ["Schreibe: hunderttausend", "ⲥⲉ ⲛ̀ⲥⲟ"],
          ["Schreibe: eine Million", "ⲥⲟ ⲛ̀ⲥⲟ"],
        ],
      } as any,
      {
        type: "drill" as any,
        mode: "free",
        items: ["Erzeuge 5 Zahlen (Gemischt: Uhrzeit, Mengen, große Zahlen)."],
      } as any,
      { type: "quizRef" as any, quizId: "q4-final" } as any,
    ],
  },

  "m4-l5": {
    id: "m4-l5",
    order: 5,
    moduleId: "m4",
    title: {
      de: "Alltag: Uhrzeit, Tage, Mengen",
      en: "Everyday Numbers",
      ar: "أرقام الحياة اليومية",
    },
    prerequisites: ["m4-l4"],
    quizId: "q4-final",
    slides: [
      {
        type: "do" as any,
        minutes: 2,
        tasks: [
          "Sage 3 Termine (Tag + Stunde + vor/nach).",
          "Schätze: Wie viele (ⲟⲩ/ⲣ) Gäste? Antworte knapp.",
        ],
      } as any,
      {
        type: "discover" as any,
        prompt: "Muster: kurzer Kopula-freier Zeit-Satz; Rang für Tage.",
      } as any,
      {
        type: "explain" as any,
        maxWords: 220,
        text: "Kompakt wiederholen: Uhrzeitfloskeln, Rangtage, große Zahlen. Fokus: schnelle Produktion.",
      } as any,
      {
        type: "drill" as any,
        mode: "free",
        items: ["Planer-Mini-Projekt (3 Sätze): Messe, Treffen, Lernslot."],
      } as any,
      { type: "quizRef" as any, quizId: "q4-final" } as any,
    ],
  },
};

// Export MODULE_M4 AFTER LESSONS_M4 is defined
export const MODULE_M4: Module = {
  id: "m4",
  order: 4,
  title: {
    de: "Zahlen & Ordnungen",
    en: "Numbers & Ordinals",
    ar: "الأعداد والرتب",
  },
  lessons: Object.keys(LESSONS_M4),
};

// Export aliases for compatibility with index.ts
export const LESSONS = LESSONS_M4;
export const QUIZZES = QUIZZES_M4;
