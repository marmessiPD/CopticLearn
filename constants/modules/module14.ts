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
    description: {
      de: "Adverbien der Zeit/Ort/Art, Uhrzeit (Stunden/Tageszeiten), Wochentage & Monate des koptischen Kalenders, einfache Vergleiche.",
      en: "Adverbs of time/place/manner, telling the hour & periods, days and Coptic months, basic comparisons.",
      ar: "ظروف الزمان/المكان/الطريقة، قراءة الساعة، فترات اليوم، أيام الأسبوع وشهور القبط، والمقارنة الأساسية.",
    },
    duration: "40–55 min",
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
            de: "die sechste Stunde",
            en: "the sixth hour",
            ar: "الساعة السادسة",
          },
          {
            coptic: "ⲕⲉⲛ ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲑⲓⲑ",
            translit: "qen vnau najp 9",
            de: "in der neunten Stunde",
            en: "in the ninth hour",
            ar: "في الساعة التاسعة",
          },
          {
            coptic: "ⲣⲟⲩϩⲓ ⲛⲉⲙ ⲥⲱⲣⲡ ⲛⲉⲙ ⲙⲉⲣⲓ",
            translit: "rouhi nem swrp nem meri",
            de: "Abend und Morgen und Mittag",
            en: "evening and morning and midday",
            ar: "مساء وصباح وظهيرة",
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
            de: "(am) Sonntag im Paoni",
            en: "Sunday in Paoni",
            ar: "الأحد في باؤوني",
          },
          {
            coptic: "ⲡⲓⲥⲁⲥϥ / ⲡⲕⲁⲃⲃⲁⲧⲟⲛ",
            translit: "pisasf / pkabbaton",
            de: "Samstag / Sabbat",
            en: "Saturday / Sabbath",
            ar: "السبت / السبت",
          },
          {
            coptic: "ⲡⲓⲕⲟⲩϫⲓ",
            translit: "pikouji",
            de: "der kleine (13. Monat)",
            en: "the “little” (13th month)",
            ar: "الصغير (الشهر ١٣)",
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
            de: "ich gehe hinein in die Stadt",
            en: "I am going inside to the city",
            ar: "أنا ذاهب إلى داخل المدينة",
          },
          {
            coptic: "ⲧⲉⲛⲛⲁⲥⲉ ⲛⲁⲛ ⲉϩⲣⲓ ⲉ !ⲏⲗⲏⲙ",
            translit: "tennase nan ehrī e Iērēlm",
            de: "wir gehen hinauf nach Jerusalem",
            en: "we are going up to Jerusalem",
            ar: "نصعد إلى أورشليم",
          },
        ],
      },
      {
        type: "sentence",
        title: {
          de: "Alltagssätze (Zeit & Ort)",
          en: "Everyday sentences",
          ar: "جُمَل يومية",
        },
        lines: [
          {
            coptic: "ⲕⲉⲛ ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲥⲛⲁⲩ ⲁⲓⲥⲱⲧⲙ",
            translit: "qen vnau najp 2 aisōtm",
            de: "in der zweiten Stunde habe ich gehört",
            en: "I listened in the second hour",
            ar: "في الساعة الثانية سمعتُ",
          },
          {
            coptic: "ⲙ̀ⲫⲟⲟⲩ ⲟⲩⲟⲛ ⲟⲩⲥⲟⲡ",
            translit: "mvoou ouon ousop",
            de: "heute gibt es eine Zeit",
            en: "today there is a time/appointment",
            ar: "اليوم يوجد موعد",
          },
          {
            coptic: "ⲟⲩⲛⲁⲥⲙⲟⲩ ⲉⲡⲓⲙⲁϩⲟⲩⲧ ⲛ̀ⲧⲉ ⲡⲁⲱⲛⲓ",
            translit: "ounasmu e-pi-mahout nte paōni",
            de: "ich werde im Monat Paoni feiern",
            en: "I will celebrate in Paoni",
            ar: "سأحتفل في باؤوني",
          },
        ],
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
    questions: [
      {
        id: "m14-q1-1",
        type: "multiple-choice",
        prompt: {
          de: "„die sechste Stunde“ auf Bohairisch?",
          en: "“the sixth hour” in Bohairic?",
          ar: "«الساعة السادسة» بالبهيري؟",
        },
        options: [
          {
            id: "a",
            text: { de: "ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ϥ", en: "vnau najp 6", ar: "ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ϥ" },
            correct: true,
          },
          {
            id: "b",
            text: {
              de: "ⲕⲉⲛ ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ 3",
              en: "qen vnau najp 3",
              ar: "ⲕⲉⲛ ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ 3",
            },
          },
          {
            id: "c",
            text: { de: "ⲟⲩⲟⲛ ⲛ̀ⲁϫⲡ", en: "ouon najp", ar: "ⲟⲩⲟⲛ ⲛ̀ⲁϫⲡ" },
          },
        ],
      },
      {
        id: "m14-q1-2",
        type: "matching",
        prompt: {
          de: "Ordne Tageszeit ↔️ Adverb.",
          en: "Match period ↔️ adverb.",
          ar: "طابِق الفترة مع الظرف.",
        },
        pairs: [
          { left: "ⲥⲱⲣⲡ", right: "Morgen" },
          { left: "ⲣⲟⲩϩⲓ", right: "Abend" },
          { left: "ⲙⲉⲣⲓ", right: "Mittag" },
        ],
      },
      {
        id: "m14-q1-3",
        type: "cloze",
        prompt: {
          de: "Ergänze mit Bewegungsadverb: „Ich gehe ⟨…⟩ in die Stadt“ → ]ⲥⲉⲛⲓ ⟨…⟩ ⲉ]ⲃⲁⲕⲏ.",
          en: "Add motion adverb: “I am going ⟨…⟩ to the city”.",
          ar: 'أضف ظرف حركة: "أنا ذاهب ⟨…⟩ إلى المدينة".',
        },
        answer: "ⲉⲕⲟⲩⲛ",
      },
      {
        id: "m14-q1-4",
        type: "multiple-choice",
        prompt: {
          de: "Welcher Name ist ein koptischer Monat?",
          en: "Which is a Coptic month?",
          ar: "أيٌّ هو شهر قبطي؟",
        },
        options: [
          {
            id: "a",
            text: { de: "ⲡⲁⲱⲛⲓ (Paoni)", en: "Paoni", ar: "ⲡⲁⲱⲛⲓ" },
            correct: true,
          },
          {
            id: "b",
            text: { de: "ⲡⲁⲣⲁⲥⲕⲉⲩⲏ", en: "Paraskeuē", ar: "]ⲡⲁⲣⲁⲥⲕⲉⲩⲏ" },
          },
          { id: "c", text: { de: "ⲡⲁⲣⲁⲃⲟⲗⲏ", en: "parabolē", ar: "ⲡⲁⲣⲁⲃⲟⲗⲏ" } },
        ],
      },
      {
        id: "m14-q1-5",
        type: "production",
        prompt: {
          de: "Schreibe zwei Sätze: (1) “Heute um die neunte Stunde …”; (2) „Wir gehen hinauf nach Kairo…“",
          en: "Write two sentences: (1) “Today at the ninth hour …”; (2) “We are going up to Cairo …”",
          ar: "اكتب جملتين: (١) «اليوم في الساعة التاسعة…»؛ (٢) «نصعد إلى القاهرة…»",
        },
        sampleSolution:
          "ⲙ̀ⲫⲟⲟⲩ ⲕⲉⲛ ⲫⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲑⲓⲑ ⲁⲓⲥⲱⲧⲙ. ⲧⲉⲛⲛⲁⲥⲉ ⲛⲁⲛ ⲉϩⲣⲓ ⲉⲕⲁⲓⲣⲟ.",
      },
    ],
  },
};
