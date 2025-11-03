// Module 14 — Adverbien, Vergleiche, Uhrzeit & Monate (Bohairic)
// Quellen (nur Younan, Bohairic): Kap. 9 — Adverbien (Zeit/Ort/Art/Situation), Uhrzeiten & Tageszeiten,
// Tage/Wochen, Monate; Vergleiche (gleich/mehr als).

import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  m14: {
    id: "m14",
    moduleId: "14",
    title: {
      de: "Adverbien & Zeitangaben: Uhrzeit, Tage, Monate; Vergleiche",
      en: "Adverbs & Time: telling time, days, months; comparisons",
      ar: "الظروف والوقت: الساعة، الأيام، الشهور؛ المقارنة",
    },
    order: 1,
    prerequisites: [],
    quizId: "m14-q1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Zeit angeben: Stunde & Tageszeiten",
          en: "Telling the time",
          ar: "قراءة الوقت",
        },
        rule: {
          de: "Die Stunden wurden von Sonnenauf‑/untergang gezählt. „Die sechste Stunde“: ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ϥ oder als Angabe mit ⲕⲉⲛ/ⲙⲛ. Wichtige Tageszeiten: ⲥⲱⲣⲡ (Morgen), ⲣⲟⲩϩⲓ (Abend), ⲙⲉⲣⲓ (Mittag), ⲙ̀ⲫⲟⲟⲩ (heute), ⲛ̀ⲥⲁϥ (gestern), ⲛ̀ⲣⲁⲥϭ (morgen).",
          en: "Hours counted by daylight/night. “Sixth hour” literally “time of hour six”; periods include swrp (morning), rouhi (evening), meri (midday), mvoou (today), ncaf (yesterday), nrac] (tomorrow).",
          ar: "تُعدّ الساعات نهارًا/ليلًا. «الساعة السادسة»: «زمن الساعة ستة». فترات اليوم: ⲥⲱⲣⲡ صباحًا، ⲣⲟⲩϩⲓ مساءً، ⲙⲉⲣⲓ الظهيرة، ⲙ̀ⲫⲟⲟⲩ اليوم، ⲛ̀ⲥⲁϥ أمس، ⲛ̀ⲣⲁⲥϭ غدًا.",
        },
        examples: [
          {
            coptic: "ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲋ",
            translit: "vnau najp 6",
            meaning: {
              de: "die sechste Stunde",
              en: "the sixth hour",
              ar: "الساعة السادسة",
            },
          },
          {
            coptic: "ⲕⲉⲛ ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲑⲓⲑ",
            translit: "qen vnau najp 9",
            meaning: {
              de: "in der neunten Stunde",
              en: "in the ninth hour",
              ar: "في الساعة التاسعة",
            },
          },
          {
            coptic: "ⲣⲟⲩϩⲓ ⲛⲉⲙ ⲥⲱⲣⲡ ⲛⲉⲙ ⲙⲉⲣⲓ",
            translit: "rouhi nem swrp nem meri",
            meaning: {
              de: "Abend und Morgen und Mittag",
              en: "evening and morning and midday",
              ar: "مساء وصباح وظهيرة",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Wochentage & Monate",
          en: "Days & Months",
          ar: "الأيام والشهور",
        },
        rule: {
          de: "Wochentage heißen „der Erste/der Zweite…“: ⲡⲓⲟⲩⲁⲓ (So), ⲡⲓϫⲛⲁⲩ (Mo) … ⲡⲓⲥⲁⲥϥ (Sa). Manche haben griechische Namen: ]ⲕⲩⲣⲓⲁⲕⲏ (So), ]ⲡⲁⲣⲁⲥⲕⲉⲩⲏ (Fr), ⲡⲕⲁⲃⲃⲁⲧⲟⲛ (Sa). Monate (Bohairisch/Sahidisch/arab. und greg. Zeitraum) z.B.: ⲓⲱⲟⲩⲧ (Tut, سبتمبر/أكتوبر مبكر), Ⲡⲁⲱⲡⲓ (بابه)… 13. Monat: ⲡⲓⲕⲟⲩϫⲓ „der Kleine“.",
          en: "Days are “first/second…”: piouai, picnau … pisasf; also Greek names: kuriakē (Sun), paraskeuē (Fri), sabbaton (Sat). Coptic months: Youwt (Tut)… plus the 13th month pikouji “the little.”",
          ar: "الأيام: «الأول/الثاني…»: ⲡⲓⲟⲩⲁⲓ، ⲡⲓϫⲛⲁⲩ … ⲡⲓⲥⲁⲥϥ؛ وتسميات يونانية: ]ⲕⲩⲣⲓⲁⲕⲏ، ]ⲡⲁⲣⲁⲥⲕⲉⲩⲏ، ⲡⲕⲁⲃⲃⲁⲧⲟⲛ. الشهور القبطية ومن ضمنها الشهر الثالث عشر ⲡⲓⲕⲟⲩϫⲓ «الصغير».",
        },
        examples: [
          {
            coptic: "ⲡⲓⲟⲩⲁⲓ ⲛ̀ⲧⲉ ⲡⲱⲛⲓ",
            translit: "piouai nte pōni",
            meaning: {
              de: "(am) Sonntag im Paoni",
              en: "Sunday in Paoni",
              ar: "الأحد في باؤوني",
            },
          },
          {
            coptic: "ⲡⲓⲥⲁⲥϥ / ⲡⲕⲁⲃⲃⲁⲧⲟⲛ",
            translit: "pisasf / pkabbaton",
            meaning: {
              de: "Samstag / Sabbat",
              en: "Saturday / Sabbath",
              ar: "السبت / السبت",
            },
          },
          {
            coptic: "ⲡⲓⲕⲟⲩϫⲓ",
            translit: "pikouji",
            meaning: {
              de: "der kleine (13. Monat)",
              en: "the \"little\" (13th month)",
              ar: "الصغير (الشهر ١٣)",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Adverbien der Situation & Bewegung",
          en: "Adverbs of situation/motion",
          ar: "ظروف الحالة/الحركة",
        },
        rule: {
          de: "Von Basissubstantiven + Präpositionen gebildet (z. B. ⲕⲁⲃⲟⲗ „außen“ → ⲉⲃⲟⲗ/ⲥⲁⲃⲟⲗ …; ⲕⲟⲩⲛ „innen“ → ⲉⲕⲟⲩⲛ/ⲛⲕⲟⲩⲛ). Häufig in Kombination mit ⲉ „zu“ bei Verben der Bewegung (ⲥⲉⲛ= „gehen“): ⲓⲥⲉⲛⲓ ⲉⲕⲟⲩⲛ ⲉ ⲧⲃⲁⲕⲏ „ich gehe hinein in die Stadt“.",
          en: "Built from base nouns + prepositions (e.g., bol → ebol/sabol out; qoun → eqoun/nqoun inside). Often used with e “to” and motion verbs (se n= “go”): ]senⲓ eqoun e]baki “I am going inside to the city.”",
          ar: "تتكوّن من أسماء أساسية + حروف جرّ (مثل ⲃⲟⲗ → ⲉⲃⲟⲗ/ⲥⲁⲃⲟⲗ …؛ ⲕⲟⲩⲛ → ⲉⲕⲟⲩⲛ/ⲛⲕⲟⲩⲛ). تستعمل مع ⲉ «إلى» وأفعال الحركة: ]ⲥⲉⲛⲓ ⲉⲕⲟⲩⲛ ⲉ]ⲃⲁⲕⲏ.",
        },
        examples: [
          {
            coptic: "]ⲥⲉⲛⲓ ⲉⲕⲟⲩⲛ ⲉ]ⲃⲁⲕⲏ",
            translit: "]seni eqoun e]baki",
            meaning: {
              de: "ich gehe hinein in die Stadt",
              en: "I am going inside to the city",
              ar: "أنا ذاهب إلى داخل المدينة",
            },
          },
          {
            coptic: "ⲧⲉⲛⲛⲁⲥⲉ ⲛⲁⲛ ⲉϩⲣⲓ ⲉ !ⲏⲗⲏⲙ",
            translit: "tennase nan ehrī e Iērēlm",
            meaning: {
              de: "wir gehen hinauf nach Jerusalem",
              en: "we are going up to Jerusalem",
              ar: "نصعد إلى أورشليم",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲕⲉⲛ ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲥⲛⲁⲩ ⲁⲓⲥⲱⲧⲙ",
          translit: "qen vnau najp 2 aisōtm",
          meaning: {
            de: "in der zweiten Stunde habe ich gehört",
            en: "I listened in the second hour",
            ar: "في الساعة الثانية سمعتُ",
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "m14-q1": {
    id: "m14-q1",
    lessonId: "m14",
    title: {
      de: "Mini‑Quiz: Zeit/Ort/Art & Monate",
      en: "Mini‑Quiz",
      ar: "اختبار قصير",
    },
    passScore: 80,
    items: [
      {
        type: "mc",
        prompt: "die sechste Stunde auf Bohairisch?",
        choices: ["ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ϥ", "ⲕⲉⲛ ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ 3", "ⲟⲩⲟⲛ ⲛ̀ⲁϫⲡ"],
        answer: 0,
      },
      {
        type: "match",
        prompt: "Ordne Tageszeit ↔️ Adverb.",
        pairs: [
          ["ⲥⲱⲣⲡ", "Morgen"],
          ["ⲣⲟⲩϩⲓ", "Abend"],
          ["ⲙⲉⲣⲓ", "Mittag"],
        ],
      },
      {
        type: "gap",
        prompt: "Ergänze mit Bewegungsadverb: Ich gehe ... in die Stadt",
        answer: "ⲉⲕⲟⲩⲛ",
      },
      {
        type: "mc",
        prompt: "Welcher Name ist ein koptischer Monat?",
        choices: ["ⲡⲁⲱⲛⲓ (Paoni)", "ⲡⲁⲣⲁⲥⲕⲉⲩⲏ", "ⲡⲁⲣⲁⲃⲟⲗⲏ"],
        answer: 0,
      },
      {
        type: "produce",
        prompt: "Schreibe zwei Sätze: Heute um die neunte Stunde... und Wir gehen hinauf nach Kairo...",
        rubric: "ⲙ̀ⲫⲟⲟⲩ ⲕⲉⲛ ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲑⲓⲑ ⲁⲓⲥⲱⲧⲙ. ⲧⲉⲛⲛⲁⲥⲉ ⲛⲁⲛ ⲉϩⲣⲓ ⲉⲕⲁⲓⲣⲟ.",
      },
    ],
  },
};
