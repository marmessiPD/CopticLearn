// Module 13 — Besondere Verben: Unpersönliche & Adjektiv‑Verben (Bohairic)
// Quellen (nur Younan, Bohairic): Kap. 8 — Ungewöhnliche Verben (jw, ran=, ouet‑), Impersonalia (8.2), Adjektiv‑Verben (8.3).

import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  m13: {
    id: "m13",
    moduleId: "13",
    title: {
      de: "Besondere Verben II: Unpersönliche & Adjektiv‑Verben",
      en: "Special Verbs: Impersonal & Adjective‑Verbs",
      ar: "أفعال خاصة: أفعال غير شخصية و«أفعال‑صفات»",
    },
    description: {
      de: "Unpersönliche Ausdrücke (ⲟⲩⲟⲛ/ⲙⲙⲟⲛ, ⲉⲙⲡⲥⲁ, ⲥⲟⲩⲡⲓ…), und sogenannte „Adjektiv‑Verben“ wie ⲛⲁⲛⲉ‑ „gut sein“.",
      en: "Impersonal verbs (ouon/μμⲛ, cse, empsa, swpi…) and the adjective‑verbs such as nane‑ “to be good”.",
      ar: 'الأفعال غير الشخصية (ⲟⲩⲟⲛ/ⲙⲙⲟⲛ، ⲥⲉ، ⲉⲙⲡⲥⲁ، ⲥⲱⲡⲓ…) و«الأفعال‑الصفات» مثل ⲛⲁⲛⲉ‑ "أن يكون جيدًا".',
    },
    duration: "35–45 min",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Impersonalia: Typ A – Subjekt „es“ (f.sg.)",
          en: "Impersonal Type A: Subject “it” (f.sg.)",
          ar: "غير الشخصية النوع أ: الفاعل «هي/هو» المؤنث",
        },
        rule: {
          de: "Einige Verben erscheinen unpersönlich mit der 3. Ps. Sg. fem.: ⲁⲥⲥⲱⲡⲓ „es geschah“, ⲥⲉ „es ist angemessen“, ⲉⲙⲡⲥⲁ „es ziemt sich“ (typisch gefolgt von ⲛ). ⲥⲉ verlangt ⲉ‑ vor folgendem Verb; Negation: … ⲁⲛ.",
          en: "Some verbs are impersonal with 3rd f.sg.: acswpi “it happened”, cse “it is appropriate”, empsa “it is proper (to)”; cse requires e‑ before the following verb; negate with … an.",
          ar: "بعض الأفعال تأتي غير شخصية بالمؤنث المفرد: ⲁⲥⲥⲱⲡⲓ «حدث»، ⲥⲉ «يليق/من المناسب»، ⲉⲙⲡⲥⲁ «من اللائق أن»؛ ⲥⲉ تأخذ ⲉ‑ قبل الفعل التالي؛ النفي بـ … ⲁⲛ.",
        },
        examples: [
          {
            coptic: "ⲁⲥⲥⲱⲡⲓ ⲛ̀ⲕⲉⲙⲉⲅⲁⲗⲏ ⲛ̀ⲧⲉ ⲡⲓⲉⲕⲕⲗⲏⲥⲓⲁ",
            translit: "as-swpi nkemegalē nte piekklesia",
            de: "es geschah eine große Furcht über die Kirche",
            en: "a great fear happened upon the Church",
            ar: "حدث خوف عظيم على الكنيسة",
          },
          {
            coptic: "ⲥⲉ ⲛⲁⲛ ⲉⲡⲉⲕⲧⲉⲗⲱⲛⲏⲥ ⲉⲡⲉⲕⲣⲏⲝ",
            translit: "cse nan e-pektelōnēs e-pekrix",
            de: "es ist uns angemessen, dem König Zoll zu zahlen",
            en: "it is appropriate for us to pay tribute to the king",
            ar: "من المناسب لنا أن ندفع الجزية للملك",
          },
          {
            coptic: "ⲉⲙⲡⲥⲁ ⲛⲥⲱⲧⲙ ⲛ̀ⲧⲁϥ",
            translit: "empsa nsōtm ntaf",
            de: "es ist schicklich, Gott zu gehorchen",
            en: "it is proper to obey God",
            ar: "من اللائق أن نطيع الله",
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Impersonalia: Typ B – kein Subjekt",
          en: "Impersonal Type B: no subject",
          ar: "غير الشخصية النوع ب: بلا فاعل",
        },
        rule: {
          de: "ⲟⲩⲟⲛ „es gibt/da ist“, Negation ⲙⲙⲟⲛ; ⲏⲩⲱⲧ „es ist nötig/ينبغي“. Mit Personalpronomen folgt Konjunktiv; gelegentlich steht ⲡⲉ zwischen ⲏⲩⲱⲧ und Konjunktiv.",
          en: "ouon “there is”, mmon “there is not”; hw] “it is necessary”. With a pronoun subject, the conjugated subjunctive is used; sometimes pe intervenes between hw] and the verb.",
          ar: "ⲟⲩⲟⲛ «يوجد»، نفيها ⲙⲙⲟⲛ؛ ⲏⲩⲱⲧ «ينبغي». مع الضمائر يُستخدم التصريف الشرطي (المضارع المنصوب). وقد يأتي ⲡⲉ بين ⲏⲩⲱⲧ والفعل.",
        },
        examples: [
          {
            coptic: "ⲟⲩⲟⲛ ⲟⲩⲙⲉⲣⲟⲥ",
            translit: "ouon oumeros",
            de: "es gibt einen Anteil",
            en: "there is a share",
            ar: "يوجد نصيب",
          },
          {
            coptic: "ⲙⲙⲟⲛ ⲟⲩϣⲏⲙⲓ",
            translit: "mmon oušēmi",
            de: "es gibt keine Frau",
            en: "there is no woman",
            ar: "لا توجد امرأة",
          },
          {
            coptic: "ϩⲱⲩⲧ ⲛ̀ⲧⲁⲛⲁⲩ ⲉⲧⲕⲉⲣⲱⲙⲏ",
            translit: "hōwt ntanau et-kerōmē",
            de: "es ist nötig, dass ich Rom auch sehe",
            en: "it is necessary that I also see Rome",
            ar: "ينبغي أن أرى رومية أيضًا",
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Adjektiv‑Verben (Verboide): ⲛⲁⲛⲉ‑",
          en: "Adjective‑Verbs: nane‑",
          ar: "الأفعال‑الصفات: ⲛⲁⲛⲉ‑",
        },
        rule: {
          de: "Zwischen Verb und Adjektiv: nehmen Subjektendungen (nanⲓ, nanek … naneu) und stehen vor dem Nomen: ⲛⲁⲛⲉ ⲡⲉⲧⲉⲛⲥⲟⲩⲥⲟⲩ „euer Rühmen ist gut“. Mit Relativkonverter (ⲉⲧ/ⲉ‑) werden attributive Phrasen gebildet: ⲡⲓⲣⲱⲙⲓ ⲉⲩⲛⲁⲛⲉⲫ „der gute Mann“; bei indef. Art.: ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲉⲛⲁⲛⲉⲫ.",
          en: "Between verb and adjective: take subject endings (nani, nanek … naneu) and precede the noun; with relative converter (et/ey or e‑) they form attributive phrases: pirōmi eynanef “the good man”; ourōmi enanef “a good man.”",
          ar: "تقع قبل الاسم وتأخذ لواحق الفاعل (ⲛⲁⲛⲓ، ⲛⲁⲛⲉⲕ … ⲛⲁⲛⲉⲩ). مع أداة الصلة (ⲉⲧ/ⲉ‑) تُكوِّن تركيبًا وصفيًا: ⲡⲓⲣⲱⲙⲓ ⲉⲩⲛⲁⲛⲉⲫ «الرجل الصالح».",
        },
        examples: [
          {
            coptic: "ⲛⲁⲛⲉ ⲡⲉⲧⲉⲛⲥⲟⲩⲥⲟⲩ",
            translit: "nane petensousou",
            de: "euer Rühmen ist gut",
            en: "your boasting is good",
            ar: "افتخاركم صالح",
          },
          {
            coptic: "ⲡⲓⲣⲱⲙⲓ ⲉⲩⲛⲁⲛⲉⲫ",
            translit: "pirōmi eynanef",
            de: "der gute Mann",
            en: "the good man",
            ar: "الرجل الصالح",
          },
          {
            coptic: "ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲉⲛⲁⲛⲉⲫ",
            translit: "ourōmi enanef",
            de: "ein guter Mann",
            en: "a good man",
            ar: "رجل صالح",
          },
        ],
      },
      {
        type: "sentence",
        title: {
          de: "Alltagssätze (Impersonalia & Verboide)",
          en: "Everyday sentences",
          ar: "جُمَل يومية",
        },
        lines: [
          {
            coptic: "ⲟⲩⲟⲛ ⲟⲩϩⲱⲃ ⲛ̀ⲧⲉ ⲛⲟⲩⲃ",
            translit: "ouon ouhōb nte noub",
            de: "es gibt Geld",
            en: "there is money",
            ar: "يوجد مال",
          },
          {
            coptic: "ϩⲱⲩⲧ ⲡⲉ ⲛⲧⲟⲩⲥⲱⲡⲓ",
            translit: "hōwt pe ntousōpi",
            de: "es ist nötig, dass sie geschehen",
            en: "it is necessary that they happen",
            ar: "يلزم أن تحدث",
          },
          {
            coptic: "ⲡⲓⲣⲱⲙⲓ ⲉⲩⲛⲁⲛⲉⲫ ⲙ̀ⲡⲓⲏⲓ",
            translit: "pirōmi eynanef mpiēi",
            de: "der gute Mann (vom Haus)",
            en: "the good man (of the house)",
            ar: "الرجل الصالح (للبيت)",
          },
        ],
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "m13-q1": {
    id: "m13-q1",
    lessonId: "m13",
    title: {
      de: "Mini‑Quiz: Impersonalia & Adjektiv‑Verben",
      en: "Mini‑Quiz",
      ar: "اختبار قصير",
    },
    passScore: 80,
    questions: [
      {
        id: "m13-q1-1",
        type: "multiple-choice",
        prompt: {
          de: "Welches Verb verlangt ⲉ‑ vor dem nächsten Verb?",
          en: "Which impersonal verb requires e‑ before the following verb?",
          ar: "أي فعل غير شخصي يتطلب ⲉ‑ قبل الفعل التالي؟",
        },
        options: [
          { id: "a", text: { de: "ⲁⲥⲥⲱⲡⲓ", en: "acswpi", ar: "ⲁⲥⲥⲱⲡⲓ" } },
          { id: "b", text: { de: "ⲥⲉ", en: "cse", ar: "ⲥⲉ" }, correct: true },
          { id: "c", text: { de: "ⲟⲩⲟⲛ", en: "ouon", ar: "ⲟⲩⲟⲛ" } },
        ],
      },
      {
        id: "m13-q1-2",
        type: "matching",
        prompt: { de: "Ordne zu.", en: "Match.", ar: "طابِق." },
        pairs: [
          { left: "ⲟⲩⲟⲛ", right: "es gibt/there is" },
          { left: "ⲙⲙⲟⲛ", right: "es gibt nicht/there is no" },
          { left: "ϩⲱⲩⲧ", right: "es ist nötig/necessary" },
        ],
      },
      {
        id: "m13-q1-3",
        type: "cloze",
        prompt: {
          de: "Setze richtig ein: „Es ist nötig, dass ich spreche“ → ϩⲱⲩⲧ ⲛ̀ⲧⲁⲛⲥⲁϫⲓ / ϩⲱⲩⲧ ⲡⲉ ⲛ̀ⲧⲁⲛⲥⲁϫⲓ.",
          en: "Fill in: “it is necessary that I speak”.",
          ar: "أكمل: «يلزم أن أتكلم».",
        },
        answer: "ϩⲱⲩⲧ ⲛ̀ⲧⲁⲛⲥⲁϫⲓ",
      },
      {
        id: "m13-q1-4",
        type: "multiple-choice",
        prompt: {
          de: "Wie wird „der gute Mann“ attributiv gebildet?",
          en: "How do you form “the good man” attributively?",
          ar: "كيف تُصاغ «الرجل الصالح»؟",
        },
        options: [
          {
            id: "a",
            text: { de: "ⲛⲁⲛⲉ ⲡⲓⲣⲱⲙⲓ", en: "nane pirōmi", ar: "ⲛⲁⲛⲉ ⲡⲓⲣⲱⲙⲓ" },
          },
          {
            id: "b",
            text: {
              de: "ⲡⲓⲣⲱⲙⲓ ⲉⲩⲛⲁⲛⲉⲫ",
              en: "pirōmi eynanef",
              ar: "ⲡⲓⲣⲱⲙⲓ ⲉⲩⲛⲁⲛⲉⲫ",
            },
            correct: true,
          },
          {
            id: "c",
            text: { de: "ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲁⲛⲉ", en: "ourōmi nane", ar: "ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲁⲛⲉ" },
          },
        ],
      },
      {
        id: "m13-q1-5",
        type: "production",
        prompt: {
          de: "Produziere zwei Sätze mit ⲟⲩⲟⲛ / ⲙⲙⲟⲛ über deinen Tag.",
          en: "Write two ouon/mmon sentences about your day.",
          ar: "اكتب جملتين بـ ⲟⲩⲟⲛ / ⲙⲙⲟⲛ عن يومك.",
        },
        sampleSolution: "ⲟⲩⲟⲛ ⲟⲩⲥⲟⲡ ⲙ̀ⲡⲓⲉϩⲟⲟⲩ. ⲙⲙⲟⲛ ⲟⲩⲁⲅⲁⲑⲟⲛ ⲙ̀ⲡⲓⲟⲩⲱϣ.",
      },
    ],
  },
};
