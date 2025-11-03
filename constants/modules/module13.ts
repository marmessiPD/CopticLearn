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
    order: 1,
    prerequisites: [],
    quizId: "q13",
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
            meaning: {
              de: "es geschah eine große Furcht über die Kirche",
              en: "a great fear happened upon the Church",
              ar: "حدث خوف عظيم على الكنيسة",
            },
          },
          {
            coptic: "ⲥⲉ ⲛⲁⲛ ⲉⲡⲉⲕⲧⲉⲗⲱⲛⲏⲥ ⲉⲡⲉⲕⲣⲏⲝ",
            translit: "cse nan e-pektelōnēs e-pekrix",
            meaning: {
              de: "es ist uns angemessen, dem König Zoll zu zahlen",
              en: "it is appropriate for us to pay tribute to the king",
              ar: "من المناسب لنا أن ندفع الجزية للملك",
            },
          },
          {
            coptic: "ⲉⲙⲡⲥⲁ ⲛⲥⲱⲧⲙ ⲛ̀ⲧⲁϥ",
            translit: "empsa nsōtm ntaf",
            meaning: {
              de: "es ist schicklich, Gott zu gehorchen",
              en: "it is proper to obey God",
              ar: "من اللائق أن نطيع الله",
            },
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
            meaning: {
              de: "es gibt einen Anteil",
              en: "there is a share",
              ar: "يوجد نصيب",
            },
          },
          {
            coptic: "ⲙⲙⲟⲛ ⲟⲩϣⲏⲙⲓ",
            translit: "mmon oušēmi",
            meaning: {
              de: "es gibt keine Frau",
              en: "there is no woman",
              ar: "لا توجد امرأة",
            },
          },
          {
            coptic: "ϩⲱⲩⲧ ⲛ̀ⲧⲁⲛⲁⲩ ⲉⲧⲕⲉⲣⲱⲙⲏ",
            translit: "hōwt ntanau et-kerōmē",
            meaning: {
              de: "es ist nötig, dass ich Rom auch sehe",
              en: "it is necessary that I also see Rome",
              ar: "ينبغي أن أرى رومية أيضًا",
            },
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
            meaning: {
              de: "euer Rühmen ist gut",
              en: "your boasting is good",
              ar: "افتخاركم صالح",
            },
          },
          {
            coptic: "ⲡⲓⲣⲱⲙⲓ ⲉⲩⲛⲁⲛⲉⲫ",
            translit: "pirōmi eynanef",
            meaning: {
              de: "der gute Mann",
              en: "the good man",
              ar: "الرجل الصالح",
            },
          },
          {
            coptic: "ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲉⲛⲁⲛⲉⲫ",
            translit: "ourōmi enanef",
            meaning: {
              de: "ein guter Mann",
              en: "a good man",
              ar: "رجل صالح",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲟⲩⲟⲛ ⲟⲩϩⲱⲃ ⲛ̀ⲧⲉ ⲛⲟⲩⲃ",
          translit: "ouon ouhōb nte noub",
          meaning: {
            de: "es gibt Geld",
            en: "there is money",
            ar: "يوجد مال",
          },
        },
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
    items: [
      {
        type: "mc",
        prompt: "Welches Verb verlangt ⲉ‑ vor dem nächsten Verb?",
        choices: ["ⲁⲥⲥⲱⲡⲓ", "ⲥⲉ", "ⲟⲩⲟⲛ"],
        answer: 1,
      },
      {
        type: "match",
        prompt: "Ordne zu.",
        pairs: [
          ["ⲟⲩⲟⲛ", "es gibt/there is"],
          ["ⲙⲙⲟⲛ", "es gibt nicht/there is no"],
          ["ϩⲱⲩⲧ", "es ist nötig/necessary"],
        ],
      },
      {
        type: "gap",
        prompt: "Setze richtig ein: Es ist nötig, dass ich spreche",
        answer: "ϩⲱⲩⲧ ⲛ̀ⲧⲁⲛⲥⲁϫⲓ",
      },
      {
        type: "mc",
        prompt: "Wie wird der gute Mann attributiv gebildet?",
        choices: ["ⲛⲁⲛⲉ ⲡⲓⲣⲱⲙⲓ", "ⲡⲓⲣⲱⲙⲓ ⲉⲩⲛⲁⲛⲉⲫ", "ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲁⲛⲉ"],
        answer: 1,
      },
      {
        type: "produce",
        prompt: "Produziere zwei Sätze mit ⲟⲩⲟⲛ / ⲙⲙⲟⲛ über deinen Tag.",
        rubric: "ⲟⲩⲟⲛ ⲟⲩⲥⲟⲡ ⲙ̀ⲡⲓⲉϩⲟⲟⲩ. ⲙⲙⲟⲛ ⲟⲩⲁⲅⲁⲑⲟⲛ ⲙ̀ⲡⲓⲟⲩⲱϣ.",
      },
    ],
  },
};
