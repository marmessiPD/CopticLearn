// Module 1 — Bohairisch (Bohairic) Alphabet, Slides & geistliche Bezüge
// Aussprache/Regeln/Beispiele ausschließlich nach: Younan, *Coptic – So You Want to Learn (A Guide to Bohairic Grammar).*
// (z.B. Vita/ⲃ → v/b-Regel; Delta/ⲇ → d/“th in this”; So-ou/ⲋ nur als Zahl 6; Key/Ⲭ → k/sh/kh je nach Umgebung; Epsilon/ⲩ → i ~ v ~ u je nach Umgebung).
//
// Väter-Zitate ausschließlich aus diesen drei Büchern (Beispiele sind bei den jeweiligen Slides vermerkt):
// - Bercot (Hg.), *A Dictionary of Early Christian Beliefs.*
// - Jimmy Akin, *The Fathers Know Best.*
// - Papandrea, *Reading the Early Church Fathers (Didache to Nicaea).*

import type { Module, Lesson, Quiz, Letter } from "../../types";

// ————————————————————————————————————————————————————————————————————————
// LETTERS (Bohairic) — Datenbasis nach Younan
// Hinweis: Zahlwerte nur für die griechischen Grundbuchstaben + So-ou (6). Rein koptische Buchstaben (Ϣ Ϥ Ϧ Ϩ Ϫ Ϭ Ϯ) tragen keinen Zahlwert.

export const LETTERS: Record<string, Letter> = {
  alpha: {
    id: "alpha",
    uppercase: "Ⲁ",
    lowercase: "ⲁ",
    name: { de: "Alpha", en: "Alpha", ar: "ألفا" },
    pronunciation: {
      de: "wie a in „Vater“",
      en: "like a in “father”",
      ar: 'مثل الألف في "بابا"',
    },
    numeric: 1,
    exampleWord: {
      coptic: "ⲁⲅⲁⲡⲏ",
      translit: "agapē",
      meaning: { de: "Liebe", en: "love", ar: "محبة" },
    },
  },
  beta: {
    id: "beta",
    uppercase: "Ⲃ",
    lowercase: "ⲃ",
    name: { de: "Vita (Beta)", en: "Vita (Beta)", ar: "ڤيتا" },
    pronunciation: {
      de: "vor Vokal = v; sonst b; in Eigennamen stets b",
      en: "v before vowel; otherwise b; proper names always b",
      ar: "قبل الحركة = ڤ؛ وإلا ب؛ في الأعلام دائمًا ب",
    },
    numeric: 2,
    exampleWord: {
      coptic: "ⲃⲁⲗ",
      translit: "bal",
      meaning: { de: "Auge", en: "eye", ar: "عين" },
    },
  },
  gamma: {
    id: "gamma",
    uppercase: "Ⲅ",
    lowercase: "ⲅ",
    name: { de: "Gamma", en: "Gamma", ar: "غاما" },
    pronunciation: {
      de: "vor ⲁ/ⲟ/ⲱ „gh“ (rauschend), vor ⲉ/ⲏ/ⲓ/ⲩ hartes g; vor ⲅ/ⲕ/ⲭ/ⲝ = nasales n",
      en: "gh before ⲁ/ⲟ/ⲱ; hard g before ⲉ/ⲏ/ⲓ/ⲩ; n before ⲅ/ⲕ/ⲭ/ⲝ",
      ar: "غ قبل ⲁ/ⲟ/ⲱ؛ ج صلبة قبل ⲉ/ⲏ/ⲓ/ⲩ؛ ن قبل ⲅ/ⲕ/ⲭ/ⲝ",
    },
    numeric: 3,
    exampleWord: {
      coptic: "ⲅⲉ",
      translit: "ge",
      meaning: { de: "denn/ja", en: "for/indeed", ar: "لأن" },
    },
  },
  delta: {
    id: "delta",
    uppercase: "Ⲇ",
    lowercase: "ⲇ",
    name: { de: "Delta", en: "Delta", ar: "دلتا" },
    pronunciation: {
      de: "in Eigennamen d; sonst stimmhaftes th wie „this“",
      en: "d in proper names; otherwise voiced th as in “this”",
      ar: "د في الأعلام؛ وإلا ذ كما في this",
    },
    numeric: 4,
    exampleWord: {
      coptic: "ⲇⲁⲩⲓⲇ",
      translit: "Dauid",
      meaning: { de: "David", en: "David", ar: "داود" },
    },
  },
  eie: {
    id: "eie",
    uppercase: "Ⲉ",
    lowercase: "ⲉ",
    name: { de: "Eey", en: "Eey", ar: "إي" },
    pronunciation: {
      de: "kurzes e wie „Bett“",
      en: "short e as in “bet”",
      ar: 'حركة قصيرة "إي"',
    },
    numeric: 5,
    exampleWord: {
      coptic: "ⲉⲃⲟⲗ",
      translit: "ebol",
      meaning: { de: "aus, hinaus", en: "out of", ar: "من/إلى الخارج" },
    },
  },
  so: {
    id: "so",
    uppercase: "Ⲋ",
    lowercase: "ⲋ",
    name: { de: "So-ou", en: "So-ou", ar: "سو-أو" },
    pronunciation: {
      de: "nur als Zahlzeichen verwendet",
      en: "only used as numeral",
      ar: "يستخدم رقمًا فقط",
    },
    numeric: 6,
    exampleWord: {
      coptic: "ⲋ̅",
      translit: "so",
      meaning: { de: "sechs", en: "six", ar: "ستة" },
    },
  },
  zita: {
    id: "zita",
    uppercase: "Ⲍ",
    lowercase: "ⲍ",
    name: { de: "Zeeta", en: "Zeta", ar: "زيتا" },
    pronunciation: {
      de: "stimmhaftes s (z)",
      en: "z (voiced s)",
      ar: "ز",
    },
    numeric: 7,
    exampleWord: {
      coptic: "ⲍⲱⲛ",
      translit: "zōn",
      meaning: { de: "Gürtel", en: "belt", ar: "حزام" },
    },
  },
  hita: {
    id: "hita",
    uppercase: "Ⲏ",
    lowercase: "ⲏ",
    name: { de: "Eeta", en: "Eta", ar: "إيتا" },
    pronunciation: {
      de: "langes i („ie“)",
      en: "long ee",
      ar: "ياء طويلة",
    },
    numeric: 8,
    exampleWord: {
      coptic: "ⲏⲓ",
      translit: "ēi",
      meaning: { de: "Haus", en: "house", ar: "بيت" },
    },
  },
  thita: {
    id: "thita",
    uppercase: "Ⲑ",
    lowercase: "ⲑ",
    name: { de: "Theta", en: "Theta", ar: "ثيتا" },
    pronunciation: {
      de: "wie th in “thing”; nach ⲥ/ϣ/ⲧ oft t",
      en: "th as in “thing”; after ⲥ/ϣ/ⲧ often t",
      ar: "ث؛ وبعد ⲥ/ϣ/ⲧ قد تُنطق ت",
    },
    numeric: 9,
    exampleWord: {
      coptic: "ⲑⲁⲗⲁⲥⲥⲁ",
      translit: "thalassa",
      meaning: { de: "Meer", en: "sea", ar: "بحر" },
    },
  },
  yota: {
    id: "yota",
    uppercase: "Ⲓ",
    lowercase: "ⲓ",
    name: { de: "Yota", en: "Iota", ar: "يوتا" },
    pronunciation: {
      de: "kurzes i",
      en: "short i",
      ar: "ياء قصيرة",
    },
    numeric: 10,
    exampleWord: {
      coptic: "ⲓⲱⲧ",
      translit: "iōt",
      meaning: { de: "Vater", en: "father", ar: "أب" },
    },
  },
  kappa: {
    id: "kappa",
    uppercase: "Ⲕ",
    lowercase: "ⲕ",
    name: { de: "Kappa", en: "Kappa", ar: "كاپا" },
    pronunciation: {
      de: "k",
      en: "k",
      ar: "ك",
    },
    numeric: 20,
    exampleWord: {
      coptic: "ⲕⲁϩⲓ",
      translit: "kahi",
      meaning: { de: "Erde", en: "earth", ar: "أرض" },
    },
  },
  laula: {
    id: "laula",
    uppercase: "Ⲗ",
    lowercase: "ⲗ",
    name: { de: "Lola", en: "Laula (Lambda)", ar: "لامبدا" },
    pronunciation: { de: "l", en: "l", ar: "ل" },
    numeric: 30,
    exampleWord: {
      coptic: "ⲗⲁⲥ",
      translit: "las",
      meaning: { de: "Zunge", en: "tongue", ar: "لسان" },
    },
  },
  mi: {
    id: "mi",
    uppercase: "Ⲙ",
    lowercase: "ⲙ",
    name: { de: "Mey (Mu)", en: "Mu", ar: "مي" },
    pronunciation: { de: "m", en: "m", ar: "م" },
    numeric: 40,
    exampleWord: {
      coptic: "ⲙⲁⲁⲩ",
      translit: "maau",
      meaning: { de: "Mutter", en: "mother", ar: "أم" },
    },
  },
  ni: {
    id: "ni",
    uppercase: "Ⲛ",
    lowercase: "ⲛ",
    name: { de: "Ney (Nu)", en: "Nu", ar: "ني" },
    pronunciation: { de: "n", en: "n", ar: "ن" },
    numeric: 50,
    exampleWord: {
      coptic: "ⲛⲟⲩⲃ",
      translit: "noub",
      meaning: { de: "Gold", en: "gold", ar: "ذهب" },
    },
  },
  eksi: {
    id: "eksi",
    uppercase: "Ⲝ",
    lowercase: "ⲝ",
    name: { de: "Exi (Xi)", en: "Xi", ar: "إكسي" },
    pronunciation: { de: "ks (x)", en: "ks (x)", ar: "كس" },
    numeric: 60,
    exampleWord: {
      coptic: "ⲝⲩⲗⲟⲛ",
      translit: "xylon",
      meaning: { de: "Holz", en: "wood", ar: "خشب" },
    },
  },
  o: {
    id: "o",
    uppercase: "Ⲟ",
    lowercase: "ⲟ",
    name: { de: "O (Omikron)", en: "Omicron", ar: "أوميكرون" },
    pronunciation: { de: "kurzes o", en: "short o", ar: "واو قصيرة" },
    numeric: 70,
    exampleWord: {
      coptic: "ⲟⲛ",
      translit: "on",
      meaning: { de: "wieder", en: "again", ar: "مجدّدًا" },
    },
  },
  pi: {
    id: "pi",
    uppercase: "Ⲡ",
    lowercase: "ⲡ",
    name: { de: "Pe (Pi)", en: "Pi", ar: "پي" },
    pronunciation: { de: "p", en: "p", ar: "پ/ب غير معطّشة" },
    numeric: 80,
    exampleWord: {
      coptic: "ⲡⲉ",
      translit: "pe",
      meaning: { de: "ist", en: "is", ar: "هو" },
    },
  },
  ro: {
    id: "ro",
    uppercase: "Ⲣ",
    lowercase: "ⲣ",
    name: { de: "Ro (Rho)", en: "Rho", ar: "رو" },
    pronunciation: { de: "r", en: "r", ar: "ر" },
    numeric: 100,
    exampleWord: {
      coptic: "ⲣⲁⲛ",
      translit: "ran",
      meaning: { de: "Name", en: "name", ar: "اسم" },
    },
  },
  sima: {
    id: "sima",
    uppercase: "Ⲥ",
    lowercase: "ⲥ",
    name: { de: "Seema (Sigma)", en: "Sigma", ar: "سيغما" },
    pronunciation: { de: "s", en: "s", ar: "س" },
    numeric: 200,
    exampleWord: {
      coptic: "ⲥⲱⲧⲉⲙ",
      translit: "sōtem",
      meaning: { de: "hören", en: "to hear", ar: "يسمع" },
    },
  },
  tav: {
    id: "tav",
    uppercase: "Ⲧ",
    lowercase: "ⲧ",
    name: { de: "Tav (Tau)", en: "Tau", ar: "تاو" },
    pronunciation: {
      de: "t (nach ⲛ in griech. Wörtern oft d)",
      en: "t (after ⲛ in Greek loans often d)",
      ar: "ت (وقد تُنطق د بعد ⲛ في الدخيل)",
    },
    numeric: 300,
    exampleWord: {
      coptic: "ⲧⲁⲗϭⲟ",
      translit: "talcho",
      meaning: { de: "heilen", en: "to heal", ar: "يشفي" },
    },
  },
  epsilon: {
    id: "epsilon",
    uppercase: "Ⲩ",
    lowercase: "ⲩ",
    name: { de: "Epsilon (Ou/He)", en: "Epsilon (Ou/He)", ar: "إبسيلون" },
    pronunciation: {
      de: "als i (hit); nach ⲁ/ⲉ als v; nach ⲟ als u (soup)",
      en: "as i (hit); after ⲁ/ⲉ as v; after ⲟ as u (soup)",
      ar: "مثل i؛ بعد ⲁ/ⲉ = v؛ بعد ⲟ = u",
    },
    numeric: 400,
    exampleWord: {
      coptic: "ⲉⲑⲟⲩⲁⲃ",
      translit: "ethouap",
      meaning: { de: "heilig", en: "holy", ar: "قدوس" },
    },
  },
  phi: {
    id: "phi",
    uppercase: "Ⲫ",
    lowercase: "ⲫ",
    name: { de: "Phi", en: "Phi", ar: "في" },
    pronunciation: { de: "f", en: "f", ar: "ف" },
    numeric: 500,
    exampleWord: {
      coptic: "ⲫⲱⲥ",
      translit: "phōs",
      meaning: { de: "Licht", en: "light", ar: "نور" },
    },
  },
  khi: {
    id: "khi",
    uppercase: "Ⲭ",
    lowercase: "ⲭ",
    name: { de: "Key (Chi)", en: "Key (Chi)", ar: "كي" },
    pronunciation: {
      de: "k in koptischen Wörtern; griech.: vor ⲉ/ⲏ/ⲓ/ⲩ = sch; sonst raues kh (wie „Bach“)",
      en: "k in Coptic words; Greek loans: sh before ⲉ/ⲏ/ⲓ/ⲩ; otherwise kh",
      ar: "ك (قبطي)؛ في اليوناني: ش قبل ⲉ/ⲏ/ⲓ/ⲩ؛ وإلا خ",
    },
    numeric: 600,
    exampleWord: {
      coptic: "ⲭⲟⲓⲁⲕ",
      translit: "Khoiak",
      meaning: { de: "4. Monat", en: "4th month", ar: "كيهك" },
    },
  },
  epsi: {
    id: "epsi",
    uppercase: "Ⲯ",
    lowercase: "ⲯ",
    name: { de: "Epsi (Psi)", en: "Psi", ar: "بسي" },
    pronunciation: { de: "ps", en: "ps", ar: "بس" },
    numeric: 700,
    exampleWord: {
      coptic: "ⲯⲁⲗⲙⲟⲥ",
      translit: "psalmos",
      meaning: { de: "Psalm", en: "psalm", ar: "مزمور" },
    },
  },
  oou: {
    id: "oou",
    uppercase: "Ⲱ",
    lowercase: "ⲱ",
    name: { de: "Omega", en: "Omega", ar: "أوميغا" },
    pronunciation: {
      de: "langes o (Younan: „au“ wie in „baud“)",
      en: "long o (Younan: “au” ~ “baud”)",
      ar: "واو طويلة",
    },
    numeric: 800,
    exampleWord: {
      coptic: "ⲱⲛⲁⲓ",
      translit: "ōnai",
      meaning: { de: "Stein", en: "stone", ar: "حجر" },
    },
  },
  shai: {
    id: "shai",
    uppercase: "Ϣ",
    lowercase: "ϣ",
    name: { de: "Shai", en: "Shai", ar: "شاي" },
    pronunciation: { de: "sch", en: "sh", ar: "ش" },
    numeric: null,
    exampleWord: {
      coptic: "ϣⲏⲣⲓ",
      translit: "shēri",
      meaning: { de: "Sohn/Kind", en: "son/child", ar: "ابن/طفل" },
    },
  },
  fai: {
    id: "fai",
    uppercase: "Ϥ",
    lowercase: "ϥ",
    name: { de: "Fai", en: "Fai", ar: "فاي" },
    pronunciation: { de: "f", en: "f", ar: "ف" },
    numeric: null,
    exampleWord: {
      coptic: "ϥⲁⲓ",
      translit: "fai",
      meaning: { de: "tragen", en: "to carry", ar: "يحمل" },
    },
  },
  khai: {
    id: "khai",
    uppercase: "Ϧ",
    lowercase: "ϧ",
    name: { de: "Khai", en: "Khai", ar: "خاي" },
    pronunciation: { de: "raues ch (wie „Bach“)", en: "guttural kh", ar: "خ" },
    numeric: null,
    exampleWord: {
      coptic: "ϧⲉⲛ",
      translit: "khen",
      meaning: { de: "in", en: "in", ar: "في" },
    },
  },
  hori: {
    id: "hori",
    uppercase: "Ϩ",
    lowercase: "ϩ",
    name: { de: "Hori", en: "Hori", ar: "هوري" },
    pronunciation: { de: "h", en: "h", ar: "هـ" },
    numeric: null,
    exampleWord: {
      coptic: "ϩⲏⲧ",
      translit: "hēt",
      meaning: { de: "Herz", en: "heart", ar: "قلب" },
    },
  },
  janja: {
    id: "janja",
    uppercase: "Ϫ",
    lowercase: "ϫ",
    name: { de: "Jenja", en: "Jenja", ar: "جنچا" },
    pronunciation: {
      de: "j (dsch) vor ⲉ/ⲏ/ⲓ/ⲩ; sonst hartes g",
      en: "j before front vowels; else hard g",
      ar: "ج قبل الحركات الأمامية؛ وإلا ج صلبة",
    },
    numeric: null,
    exampleWord: {
      coptic: "ϫⲓϫ",
      translit: "jij",
      meaning: { de: "Hand", en: "hand", ar: "يد" },
    },
  },
  chima: {
    id: "chima",
    uppercase: "Ϭ",
    lowercase: "ϭ",
    name: { de: "Cheema", en: "Cheema", ar: "تشِيما" },
    pronunciation: { de: "tsch (wie „Deutsch“)", en: "tch (church)", ar: "تش" },
    numeric: null,
    exampleWord: {
      coptic: "ϭⲟⲓⲥ",
      translit: "chois",
      meaning: { de: "Herr", en: "Lord", ar: "الرب" },
    },
  },
  ti: {
    id: "ti",
    uppercase: "Ϯ",
    lowercase: "ϯ",
    name: { de: "Ti (Ligatur)", en: "Ti (ligature)", ar: "تي" },
    pronunciation: { de: "ti", en: "ti", ar: "تي" },
    numeric: null,
    exampleWord: {
      coptic: "ϯ",
      translit: "ti",
      meaning: { de: "geben / ich", en: "to give / I", ar: "يعطي / أنا" },
    },
  },
};

// ————————————————————————————————————————————————————————————————————————
// LESSONS (Modul 1): 8 Lektionen à 4 Buchstaben — mit Bibel (Schlachter2000) & Väterzitaten

export const LESSONS: Record<string, Lesson> = {
  "m1-l1": {
    id: "m1-l1",
    order: 1,
    moduleId: "m1",
    title: {
      de: "Alphabet 1: Ⲁ–Ⲇ",
      en: "Alphabet 1: Ⲁ–Ⲇ",
      ar: "الأبجدية 1: Ⲁ–Ⲇ",
    },
    prerequisites: [],
    quizId: "m1-q1",
    slides: [
      {
        type: "alphabet",
        letterId: "alpha",
        emoji: "❤️",
        explanation: {
          de: "Alpha ist der erste Buchstabe des bohairischen Alphabets.",
          en: "Alpha is the first letter of the Bohairic alphabet.",
          ar: "ألفا هو أول حرف في الأبجدية البحيرية.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Ich bin das Alpha und das Omega", spricht der Herr.',
            en: '"I am the Alpha and the Omega," says the Lord.',
            ar: '"أنا الألف والياء"، يقول الرب.',
          },
          bibleReference: {
            de: "Offb 1,8 (SCH2000)",
            en: "Revelation 1:8",
            ar: "رؤيا ١: ٨",
          },
          fatherQuote: {
            de: '"Wer die Liebe hat, ist fern von jeder Sünde." — Hl. Polykarp.',
            en: '"He who has love is far from all sin." — St. Polycarp.',
            ar: '"من له المحبة فهو بعيد عن كل خطيئة." — القديس بوليكاربوس.',
          },
          fatherReference: {
            de: "Polykarp, zitiert bei Bercot, Early Christian Beliefs, s.v. LOVE.",
            en: "Polycarp, quoted in Bercot, Early Christian Beliefs, s.v. LOVE.",
            ar: "بوليكاربوس، مقتبس في بيركوت، معتقدات المسيحيين الأوائل، LOVE.",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "beta",
        emoji: "👁️",
        explanation: {
          de: "Vita (ⲃ) klingt vor Vokal wie v, sonst wie b; in Eigennamen immer b.",
          en: "Vita (ⲃ) is v before vowels, otherwise b; proper names always b.",
          ar: "ⲃ تُنطق ڤ قبل الحركة، وب خلاف ذلك؛ وفي الأعلام دائمًا ب.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Die Leuchte des Leibes ist das Auge."',
            en: '"The lamp of the body is the eye."',
            ar: '"سراج الجسد هو العين."',
          },
          bibleReference: {
            de: "Lk 11,34 (SCH2000)",
            en: "Luke 11:34",
            ar: "لوقا ١١: ٣٤",
          },
          fatherQuote: {
            de: '"Der Sohn … ist … vollkommenes väterliches Licht; er ist ganz Augen, sieht alles." — Hl. Klemens v. Alexandrien.',
            en: '"The Son... is... perfect paternal light; he is all eyes, seeing all things." — St. Clement of Alexandria.',
            ar: '"الابن... هو... نور أبوي كامل؛ إنه كل عيون، يرى كل شيء." — القديس إكليمندس الإسكندري.',
          },
          fatherReference: {
            de: "Clement of Alexandria, bei Bercot, s.v. CHRIST, DIVINITY OF.",
            en: "Clement of Alexandria, in Bercot, s.v. CHRIST, DIVINITY OF.",
            ar: "إكليمندس الإسكندري، في بيركوت، CHRIST, DIVINITY OF.",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "gamma",
        emoji: "🗣️",
        explanation: {
          de: "Gamma: gh vor ⲁ/ⲟ/ⲱ; hartes g vor ⲉ/ⲏ/ⲓ/ⲩ; vor ⲅ/ⲕ/ⲭ/ⲝ = n.",
          en: "Gamma: gh before ⲁ/ⲟ/ⲱ; hard g before ⲉ/ⲏ/ⲓ/ⲩ; n before ⲅ/ⲕ/ⲭ/ⲝ.",
          ar: "غ/ج بحسب الموضع؛ ن قبل ⲅ/ⲕ/ⲭ/ⲝ.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Denn so sehr hat Gott die Welt geliebt…"',
            en: '"For God so loved the world..."',
            ar: '"لأنه هكذا أحب الله العالم..."',
          },
          bibleReference: {
            de: "Joh 3,16 (SCH2000)",
            en: "John 3:16",
            ar: "يوحنا ٣: ١٦",
          },
          fatherQuote: {
            de: '"Gottes Wille ist, dass der Gehorsame gerettet werde." — Hl. Klemens v. Alexandrien.',
            en: '"God\'s will is that the obedient be saved." — St. Clement of Alexandria.',
            ar: '"إرادة الله أن يخلص المطيع." — القديس إكليمندس الإسكندري.',
          },
          fatherReference: {
            de: "Clement of Alexandria, bei Bercot, s.v. SALVATION.",
            en: "Clement of Alexandria, in Bercot, s.v. SALVATION.",
            ar: "إكليمندس الإسكندري، في بيركوت، SALVATION.",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "delta",
        emoji: "👑",
        explanation: {
          de: 'Delta: d in Eigennamen, sonst stimmhaftes th („this").',
          en: 'Delta: d in proper names; otherwise voiced th ("this").',
          ar: "دلتا: د في الأعلام، وذ في غيرها.",
        },
        spiritual: {
          bibleVerse: {
            de: '"…ein Mann nach dem Herzen Gottes."',
            en: '"...a man after God\'s own heart."',
            ar: '"...رجل حسب قلب الله."',
          },
          bibleReference: {
            de: "Apg 13,22 (SCH2000)",
            en: "Acts 13:22",
            ar: "أعمال الرسل ١٣: ٢٢",
          },
          fatherQuote: {
            de: '"Mans Pflicht ist der Gehorsam gegen Gott." — Hl. Klemens v. Alexandrien.',
            en: '"Man\'s duty is obedience to God." — St. Clement of Alexandria.',
            ar: '"واجب الإنسان هو الطاعة لله." — القديس إكليمندس الإسكندري.',
          },
          fatherReference: {
            de: "Clement of Alexandria, bei Bercot, s.v. SALVATION.",
            en: "Clement of Alexandria, in Bercot, s.v. SALVATION.",
            ar: "إكليمندس الإسكندري، في بيركوت، SALVATION.",
          },
        },
      },
    ],
  },

  "m1-l2": {
    id: "m1-l2",
    order: 2,
    moduleId: "m1",
    title: {
      de: "Alphabet 2: Ⲉ–Ⲏ",
      en: "Alphabet 2: Ⲉ–Ⲏ",
      ar: "الأبجدية 2: Ⲉ–Ⲏ",
    },
    prerequisites: ["m1-l1"],
    quizId: "m1-q2",
    slides: [
      {
        type: "alphabet",
        letterId: "eie",
        emoji: "🥚",
        explanation: {
          de: "Eey ist ein kurzer Vokal (e).",
          en: "Eey is a short vowel (e).",
          ar: "إي حركة قصيرة.",
        },
        spiritual: {
          bibleVerse: {
            de: '"…damit sie Leben haben und es im Überfluss haben."',
            en: '"...that they may have life and have it abundantly."',
            ar: '"...لتكون لهم حياة وليكون لهم أفضل."',
          },
          bibleReference: {
            de: "Joh 10,10 (SCH2000)",
            en: "John 10:10",
            ar: "يوحنا ١٠: ١٠",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "so",
        emoji: "6️⃣",
        explanation: {
          de: 'So-ou (ⲋ) dient fast ausschließlich als Zahlzeichen „6".',
          en: "So-ou (ⲋ) is used almost exclusively for the numeral 6.",
          ar: "ⲋ للرقم 6 غالبًا.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Sechs Tage sollst du arbeiten…"',
            en: '"Six days you shall labor..."',
            ar: '"ستة أيام تعمل..."',
          },
          bibleReference: {
            de: "2Mo 20,9 (SCH2000)",
            en: "Exodus 20:9",
            ar: "خروج ٢٠: ٩",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "zita",
        emoji: "🦓",
        explanation: {
          de: "Zeeta kommt aus dem Griechischen.",
          en: "Zeta is of Greek origin.",
          ar: "زيتا يونانية الأصل.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Trachtet zuerst nach dem Reich Gottes…"',
            en: '"Seek first the kingdom of God..."',
            ar: '"اطلبوا أولاً ملكوت الله..."',
          },
          bibleReference: {
            de: "Mt 6,33 (SCH2000)",
            en: "Matthew 6:33",
            ar: "متى ٦: ٣٣",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "hita",
        emoji: "🏠",
        explanation: {
          de: "Eeta ist ein langer Vokal (ee).",
          en: "Eta is a long vowel (ee).",
          ar: "إيتا صوت طويل.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Ich aber und mein Haus, wir wollen dem HERRN dienen."',
            en: '"But as for me and my house, we will serve the LORD."',
            ar: '"أما أنا وبيتي فنعبد الرب."',
          },
          bibleReference: {
            de: "Jos 24,15 (SCH2000)",
            en: "Joshua 24:15",
            ar: "يشوع ٢٤: ١٥",
          },
        },
      },
    ],
  },

  "m1-l3": {
    id: "m1-l3",
    order: 3,
    moduleId: "m1",
    title: {
      de: "Alphabet 3: Ⲑ–Ⲕ",
      en: "Alphabet 3: Ⲑ–Ⲕ",
      ar: "الأبجدية 3: Ⲑ–Ⲕ",
    },
    prerequisites: ["m1-l2"],
    quizId: "m1-q3",
    slides: [
      {
        type: "alphabet",
        letterId: "thita",
        emoji: "🌀",
        explanation: {
          de: 'Theta wie th („thing"); nach Zischlauten oft t.',
          en: 'Theta as th ("thing"); often t after sibilants.',
          ar: "ث؛ وأحيانًا ت بعد الصفير.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Gott ist treu."',
            en: '"God is faithful."',
            ar: '"الله أمين."',
          },
          bibleReference: {
            de: "1Kor 1,9 (SCH2000)",
            en: "1 Corinthians 1:9",
            ar: "١ كورنثوس ١: ٩",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "yota",
        emoji: "👨‍👧‍👦",
        explanation: {
          de: "Yota ist ein kurzer i-Laut.",
          en: "Iota is a short i.",
          ar: "يوتا حركة قصيرة.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Im Anfang war das Wort…"',
            en: '"In the beginning was the Word..."',
            ar: '"في البدء كان الكلمة..."',
          },
          bibleReference: {
            de: "Joh 1,1 (SCH2000)",
            en: "John 1:1",
            ar: "يوحنا ١: ١",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "kappa",
        emoji: "🌍",
        explanation: { de: "Kappa = k.", en: "Kappa = k.", ar: "ك." },
        spiritual: {
          bibleVerse: {
            de: '"Die Erde ist des HERRN…"',
            en: '"The earth is the LORD\'S..."',
            ar: '"للرب الأرض..."',
          },
          bibleReference: {
            de: "Ps 24,1 (SCH2000)",
            en: "Psalm 24:1",
            ar: "مزمور ٢٤: ١",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "laula",
        emoji: "👅",
        explanation: { de: "Laula = l.", en: "Laula = l.", ar: "ل." },
        spiritual: {
          bibleVerse: {
            de: '"Die Zunge der Weisen bringt Heilung."',
            en: '"The tongue of the wise brings healing."',
            ar: '"لسان الحكماء شفاء."',
          },
          bibleReference: {
            de: "Spr 12,18 (SCH2000)",
            en: "Proverbs 12:18",
            ar: "أمثال ١٢: ١٨",
          },
        },
      },
    ],
  },

  "m1-l4": {
    id: "m1-l4",
    order: 4,
    moduleId: "m1",
    title: {
      de: "Alphabet 4: Ⲙ–Ⲛ",
      en: "Alphabet 4: Ⲙ–Ⲛ",
      ar: "الأبجدية 4: Ⲙ–Ⲛ",
    },
    prerequisites: ["m1-l3"],
    quizId: "m1-q4",
    slides: [
      {
        type: "alphabet",
        letterId: "mi",
        emoji: "👩‍👧‍👦",
        explanation: { de: "Mey = m.", en: "Mu = m.", ar: "م." },
        spiritual: {
          bibleVerse: {
            de: '"Ehre deinen Vater und deine Mutter!"',
            en: '"Honor your father and your mother."',
            ar: '"أكرم أباك وأمك."',
          },
          bibleReference: {
            de: "2Mo 20,12 (SCH2000)",
            en: "Exodus 20:12",
            ar: "خروج ٢٠: ١٢",
          },
          fatherQuote: {
            de: '"Lasst eure Kinder Anteil an wahrer christlicher Erziehung haben." — Hl. Klemens von Rom.',
            en: '"Let your children partake of true Christian education." — St. Clement of Rome.',
            ar: '"دعوا أولادكم يشاركون في التربية المسيحية الحقيقية." — القديس إكليمندس الروماني.',
          },
          fatherReference: {
            de: "Clement of Rome, bei Bercot, s.v. CHILDREN.",
            en: "Clement of Rome, in Bercot, s.v. CHILDREN.",
            ar: "إكليمندس الروماني، في بيركوت، CHILDREN.",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "ni",
        emoji: "✨",
        explanation: { de: "Ney = n.", en: "Nu = n.", ar: "ن." },
        spiritual: {
          bibleVerse: {
            de: '"Gott ist Licht…"',
            en: '"God is light..."',
            ar: '"الله نور..."',
          },
          bibleReference: {
            de: "1Joh 1,5 (SCH2000)",
            en: "1 John 1:5",
            ar: "١ يوحنا ١: ٥",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "eksi",
        emoji: "🌳",
        explanation: { de: "Exi = ks.", en: "Xi = ks.", ar: "كس." },
        spiritual: {
          bibleVerse: {
            de: '"Holz" & Kreuz als Lebensbaum (Motiv in Liturgie).',
            en: '"Wood" & the Cross as the Tree of Life (liturgical theme).',
            ar: '"الخشب" والصليب كشجرة الحياة (موضوع طقسي).',
          },
          bibleReference: {
            de: "vgl. Gal 3,13; lit. Hymnen (SCH2000)",
            en: "cf. Galatians 3:13; liturgical hymns",
            ar: "راجع غلاطية ٣: ١٣؛ ترانيم طقسية",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "o",
        emoji: "🔄",
        explanation: {
          de: "O (Omikron) ist kurz.",
          en: "Omicron is short.",
          ar: "أوميكرون قصير.",
        },
        spiritual: {
          bibleVerse: {
            de: '"…werdet erneuert im Geist eures Sinnes…"',
            en: '"...be renewed in the spirit of your mind..."',
            ar: '"...تتجددوا بروح ذهنكم..."',
          },
          bibleReference: {
            de: "Eph 4,23 (SCH2000)",
            en: "Ephesians 4:23",
            ar: "أفسس ٤: ٢٣",
          },
        },
      },
    ],
  },

  "m1-l5": {
    id: "m1-l5",
    order: 5,
    moduleId: "m1",
    title: {
      de: "Alphabet 5: Ⲡ–Ⲣ",
      en: "Alphabet 5: Ⲡ–Ⲣ",
      ar: "الأبجدية 5: Ⲡ–Ⲣ",
    },
    prerequisites: ["m1-l4"],
    quizId: "m1-q5",
    slides: [
      {
        type: "alphabet",
        letterId: "pi",
        emoji: "🚪",
        explanation: { de: "Pe = p.", en: "Pi = p.", ar: "پ." },
        spiritual: {
          bibleVerse: {
            de: '"Ich bin die Tür."',
            en: '"I am the door."',
            ar: '"أنا هو الباب."',
          },
          bibleReference: {
            de: "Joh 10,9 (SCH2000)",
            en: "John 10:9",
            ar: "يوحنا ١٠: ٩",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "ro",
        emoji: "📛",
        explanation: { de: "Ro = r.", en: "Rho = r.", ar: "ر." },
        spiritual: {
          bibleVerse: {
            de: '"Ein guter Name ist köstlicher…"',
            en: '"A good name is more desirable..."',
            ar: '"الاسم الصالح أفضل..."',
          },
          bibleReference: {
            de: "Spr 22,1 (SCH2000)",
            en: "Proverbs 22:1",
            ar: "أمثال ٢٢: ١",
          },
          fatherQuote: {
            de: '"Christi Name wird überall geglaubt und verehrt." — Tertullian.',
            en: '"The name of Christ is believed and venerated everywhere." — Tertullian.',
            ar: '"اسم المسيح مؤمن به ومكرّم في كل مكان." — ترتليان.',
          },
          fatherReference: {
            de: "Tertullian, bei Bercot, s.v. CHRIST, DIVINITY OF.",
            en: "Tertullian, in Bercot, s.v. CHRIST, DIVINITY OF.",
            ar: "ترتليان، في بيركوت، CHRIST, DIVINITY OF.",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "sima",
        emoji: "👂",
        explanation: { de: "Seema = s.", en: "Sigma = s.", ar: "س." },
        spiritual: {
          bibleVerse: {
            de: '"Wer Ohren hat zu hören, der höre!"',
            en: '"He who has ears to hear, let him hear!"',
            ar: '"من له أذنان للسمع فليسمع!"',
          },
          bibleReference: {
            de: "Mk 4,9 (SCH2000)",
            en: "Mark 4:9",
            ar: "مرقس ٤: ٩",
          },
          fatherQuote: {
            de: '"Dem Wort gehorchen heißt: ihm glauben, ihm in nichts widerstehen." — Hl. Klemens v. Alexandrien.',
            en: '"To obey the Word means: to believe it, to resist it in nothing." — St. Clement of Alexandria.',
            ar: '"أن تطيع الكلمة يعني: أن تؤمن به، وألا تقاومه في شيء." — القديس إكليمندس الإسكندري.',
          },
          fatherReference: {
            de: "Clement of Alexandria, bei Bercot, s.v. SALVATION/OBEDIENCE.",
            en: "Clement of Alexandria, in Bercot, s.v. SALVATION/OBEDIENCE.",
            ar: "إكليمندس الإسكندري، في بيركوت، SALVATION/OBEDIENCE.",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "tav",
        emoji: "🩹",
        explanation: {
          de: "Tav = t (in griech. Lehnwörtern nach ⲛ oft d).",
          en: "Tau = t (often d after ⲛ in Greek loans).",
          ar: "تاو = ت.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Er heilt, die zerbrochenen Herzens sind."',
            en: '"He heals the brokenhearted."',
            ar: '"يشفي المنكسري القلوب."',
          },
          bibleReference: {
            de: "Ps 147,3 (SCH2000)",
            en: "Psalm 147:3",
            ar: "مزمور ١٤٧: ٣",
          },
        },
      },
    ],
  },

  "m1-l6": {
    id: "m1-l6",
    order: 6,
    moduleId: "m1",
    title: {
      de: "Alphabet 6: Ⲩ–Ⲯ",
      en: "Alphabet 6: Ⲩ–Ⲯ",
      ar: "الأبجدية 6: Ⲩ–Ⲯ",
    },
    prerequisites: ["m1-l5"],
    quizId: "m1-q6",
    slides: [
      {
        type: "alphabet",
        letterId: "epsilon",
        emoji: "🕊️",
        explanation: {
          de: "Epsilon (ⲩ): i; nach ⲁ/ⲉ = v; nach ⲟ = u.",
          en: "Epsilon (ⲩ): i; after ⲁ/ⲉ = v; after ⲟ = u.",
          ar: "ⲩ: i؛ وبعد ⲁ/ⲉ = v؛ وبعد ⲟ = u.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Seid heilig, denn ich bin heilig."',
            en: '"Be holy, for I am holy."',
            ar: '"كونوا قديسين لأني أنا قدوس."',
          },
          bibleReference: {
            de: "1Petr 1,16 (SCH2000)",
            en: "1 Peter 1:16",
            ar: "١ بطرس ١: ١٦",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "phi",
        emoji: "💡",
        explanation: { de: "Phi = f.", en: "Phi = f.", ar: "ف." },
        spiritual: {
          bibleVerse: {
            de: '"Dein Wort ist meines Fußes Leuchte."',
            en: '"Your word is a lamp to my feet."',
            ar: '"كلامك مصباح لرجلي."',
          },
          bibleReference: {
            de: "Ps 119,105 (SCH2000)",
            en: "Psalm 119:105",
            ar: "مزمور ١١٩: ١٠٥",
          },
          fatherQuote: {
            de: '"Die Kirche ist der siebenarmige Leuchter, der das Licht Christi trägt…" — Hl. Irenäus.',
            en: '"The Church is the seven-branched lampstand that bears the light of Christ..." — St. Irenaeus.',
            ar: '"الكنيسة هي المنارة السباعية التي تحمل نور المسيح..." — القديس إيريناوس.',
          },
          fatherReference: {
            de: "Irenaeus, bei Bercot, s.v. CHURCH.",
            en: "Irenaeus, in Bercot, s.v. CHURCH.",
            ar: "إيريناوس، في بيركوت، CHURCH.",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "khi",
        emoji: "🗓️",
        explanation: {
          de: 'Key (Ⲭ): in Koptisch = k; in griech. Lehnwörtern „sch" vor Frontvokalen, sonst „kh".',
          en: "Key (Ⲭ): k in Coptic; Greek loans: sh before front vowels, else kh.",
          ar: "Ⲭ: ك (قبطي)؛ ش/خ (يوناني).",
        },
        spiritual: {
          bibleVerse: {
            de: '"Dies ist der Tag, den der HERR gemacht hat."',
            en: '"This is the day the LORD has made."',
            ar: '"هذا هو اليوم الذي صنعه الرب."',
          },
          bibleReference: {
            de: "Ps 118,24 (SCH2000)",
            en: "Psalm 118:24",
            ar: "مزمور ١١٨: ٢٤",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "epsi",
        emoji: "🎶",
        explanation: { de: "Epsi (Psi) = ps.", en: "Psi = ps.", ar: "بس." },
        spiritual: {
          bibleVerse: {
            de: '"Singt dem HERRN ein neues Lied!"',
            en: '"Sing to the LORD a new song!"',
            ar: '"رنموا للرب ترنيمة جديدة!"',
          },
          bibleReference: {
            de: "Ps 96,1 (SCH2000)",
            en: "Psalm 96:1",
            ar: "مزمور ٩٦: ١",
          },
          fatherQuote: {
            de: '"Fort mit Liebesliedern; unsere Lieder seien Hymnen für Gott." — Hl. Klemens v. Alexandrien.',
            en: '"Away with love songs; let our songs be hymns to God." — St. Clement of Alexandria.',
            ar: '"بعيدًا عن أغاني الحب؛ لتكن أغانينا تسابيح لله." — القديس إكليمندس الإسكندري.',
          },
          fatherReference: {
            de: "Clement of Alexandria, bei Bercot, s.v. HYMNS.",
            en: "Clement of Alexandria, in Bercot, s.v. HYMNS.",
            ar: "إكليمندس الإسكندري، في بيركوت، HYMNS.",
          },
        },
      },
    ],
  },

  "m1-l7": {
    id: "m1-l7",
    order: 7,
    moduleId: "m1",
    title: {
      de: "Alphabet 7: Ⲱ–ϣ",
      en: "Alphabet 7: Ⲱ–ϣ",
      ar: "الأبجدية 7: Ⲱ–ϣ",
    },
    prerequisites: ["m1-l6"],
    quizId: "m1-q7",
    slides: [
      {
        type: "alphabet",
        letterId: "oou",
        emoji: "🗿",
        explanation: {
          de: "Omega = langes o.",
          en: "Omega = long o.",
          ar: "واو طويلة.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Der Stein, den die Bauleute verworfen haben…"',
            en: '"The stone the builders rejected..."',
            ar: '"الحجر الذي رفضه البناؤون..."',
          },
          bibleReference: {
            de: "Ps 118,22 (SCH2000)",
            en: "Psalm 118:22",
            ar: "مزمور ١١٨: ٢٢",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "shai",
        emoji: "🧒",
        explanation: { de: "Shai = sch.", en: "Shai = sh.", ar: "ش." },
        spiritual: {
          bibleVerse: {
            de: '"Lasst die Kinder zu mir kommen."',
            en: '"Let the children come to me."',
            ar: '"دعوا الأولاد يأتون إلي."',
          },
          bibleReference: {
            de: "Mk 10,14 (SCH2000)",
            en: "Mark 10:14",
            ar: "مرقس ١٠: ١٤",
          },
          fatherQuote: {
            de: '"Lasst eure Kinder an wahrer christlicher Erziehung teilhaben." — Hl. Klemens von Rom.',
            en: '"Let your children partake of true Christian education." — St. Clement of Rome.',
            ar: '"دعوا أولادكم يشاركون في التربية المسيحية الحقيقية." — القديس إكليمندس الروماني.',
          },
          fatherReference: {
            de: "Clement of Rome, bei Bercot, s.v. CHILDREN.",
            en: "Clement of Rome, in Bercot, s.v. CHILDREN.",
            ar: "إكليمندس الروماني، في بيركوت، CHILDREN.",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "fai",
        emoji: "👜",
        explanation: { de: "Fai = f.", en: "Fai = f.", ar: "ف." },
        spiritual: {
          bibleVerse: {
            de: '"Nehmt mein Joch auf euch…"',
            en: '"Take my yoke upon you..."',
            ar: '"احملوا نيري عليكم..."',
          },
          bibleReference: {
            de: "Mt 11,29 (SCH2000)",
            en: "Matthew 11:29",
            ar: "متى ١١: ٢٩",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "khai",
        emoji: "📥",
        explanation: {
          de: "Khai = raues ch.",
          en: "Khai = guttural kh.",
          ar: "خ.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Das Reich Gottes ist inwendig in euch."',
            en: '"The kingdom of God is within you."',
            ar: '"ملكوت الله داخلكم."',
          },
          bibleReference: {
            de: "Lk 17,21 (SCH2000)",
            en: "Luke 17:21",
            ar: "لوقا ١٧: ٢١",
          },
        },
      },
    ],
  },

  "m1-l8": {
    id: "m1-l8",
    order: 8,
    moduleId: "m1",
    title: {
      de: "Alphabet 8: ϩ–ϯ",
      en: "Alphabet 8: ϩ–ϯ",
      ar: "الأبجدية 8: ϩ–ϯ",
    },
    prerequisites: ["m1-l7"],
    quizId: "m1-q8",
    slides: [
      {
        type: "alphabet",
        letterId: "hori",
        emoji: "❤️",
        explanation: { de: "Hori = h.", en: "Hori = h.", ar: "هـ." },
        spiritual: {
          bibleVerse: {
            de: '"Selig sind, die reinen Herzens sind…"',
            en: '"Blessed are the pure in heart..."',
            ar: '"طوبى لأنقياء القلب..."',
          },
          bibleReference: {
            de: "Mt 5,8 (SCH2000)",
            en: "Matthew 5:8",
            ar: "متى ٥: ٨",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "janja",
        emoji: "✋",
        explanation: {
          de: "Jenja: j vor ⲉ/ⲏ/ⲓ/ⲩ; sonst hartes g.",
          en: "Jenja: j before front vowels; else hard g.",
          ar: "ج/ج صلبة حسب الموضع.",
        },
        spiritual: {
          bibleVerse: {
            de: '"In deine Hände befehle ich meinen Geist."',
            en: '"Into your hands I commit my spirit."',
            ar: '"في يديك أستودع روحي."',
          },
          bibleReference: {
            de: "Lk 23,46 (SCH2000)",
            en: "Luke 23:46",
            ar: "لوقا ٢٣: ٤٦",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "chima",
        emoji: "✝️",
        explanation: { de: "Cheema = tsch.", en: "Cheema = tch.", ar: "تش." },
        spiritual: {
          bibleVerse: {
            de: '"Das Wort vom Kreuz… Gottes Kraft."',
            en: '"The word of the cross... the power of God."',
            ar: '"كلمة الصليب... قوة الله."',
          },
          bibleReference: {
            de: "1Kor 1,18 (SCH2000)",
            en: "1 Corinthians 1:18",
            ar: "١ كورنثوس ١: ١٨",
          },
        },
      },
      {
        type: "alphabet",
        letterId: "ti",
        emoji: "🎁",
        explanation: {
          de: "Ti (Ligatur) = ti.",
          en: "Ti (ligature) = ti.",
          ar: "تي.",
        },
        spiritual: {
          bibleVerse: {
            de: '"Denn die Gabe Gottes ist das ewige Leben."',
            en: '"For the gift of God is eternal life."',
            ar: '"لأن هبة الله هي حياة أبدية."',
          },
          bibleReference: {
            de: "Röm 6,23 (SCH2000)",
            en: "Romans 6:23",
            ar: "رومية ٦: ٢٣",
          },
        },
      },
    ],
  },
};

// ————————————————————————————————————————————————————————————————————————
// QUIZ (Platzhalter – kann wie gehabt aus dem bestehenden System übernommen werden)

export const QUIZZES: Record<string, Quiz> = {
  "m1-q1": {
    id: "m1-q1",
    moduleId: "m1",
    lessonId: "m1-l1",
    passScore: 70,
    title: { de: "Quiz 1: Ⲁ–Ⲇ", en: "Quiz 1: Ⲁ–Ⲇ", ar: "الاختبار 1: Ⲁ–Ⲇ" },
    questions: [
      {
        id: "m1-q1-1",
        type: "multiple-choice",
        questionText: {
          de: "Welcher Buchstabe ist Alpha (Ⲁ)?",
          en: "Which letter is Alpha (Ⲁ)?",
          ar: "أي حرف هو ألفا (Ⲁ)؟",
        },
        options: [
          { de: "Ⲁ", en: "Ⲁ", ar: "Ⲁ" },
          { de: "Ⲃ", en: "Ⲃ", ar: "Ⲃ" },
          { de: "Ⲅ", en: "Ⲅ", ar: "Ⲅ" },
          { de: "Ⲇ", en: "Ⲇ", ar: "Ⲇ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q1-2",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Vita (ⲃ) vor einem Vokal ausgesprochen?",
          en: "How is Vita (ⲃ) pronounced before a vowel?",
          ar: "كيف يُنطق ڤيتا (ⲃ) قبل الحركة؟",
        },
        options: [
          { de: "v", en: "v", ar: "ڤ" },
          { de: "b", en: "b", ar: "ب" },
          { de: "p", en: "p", ar: "پ" },
          { de: "f", en: "f", ar: "ف" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q1-3",
        type: "multiple-choice",
        questionText: {
          de: "Welche Aussprache hat Gamma (ⲅ) vor ⲉ/ⲏ/ⲓ/ⲩ?",
          en: "What pronunciation does Gamma (ⲅ) have before ⲉ/ⲏ/ⲓ/ⲩ?",
          ar: "ما هو نطق غاما (ⲅ) قبل ⲉ/ⲏ/ⲓ/ⲩ؟",
        },
        options: [
          { de: "hartes g", en: "hard g", ar: "ج صلبة" },
          { de: "gh (rauschend)", en: "gh (rasping)", ar: "غ" },
          { de: "nasales n", en: "nasal n", ar: "ن" },
          { de: "k", en: "k", ar: "ك" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q1-4",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Delta (ⲇ) in Eigennamen ausgesprochen?",
          en: "How is Delta (ⲇ) pronounced in proper names?",
          ar: "كيف يُنطق دلتا (ⲇ) في الأعلام؟",
        },
        options: [
          { de: "d", en: "d", ar: "د" },
          { de: 'th wie "this"', en: 'th as in "this"', ar: "ذ" },
          { de: "t", en: "t", ar: "ت" },
          { de: "dh", en: "dh", ar: "ض" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q1-5",
        type: "multiple-choice",
        questionText: {
          de: "Welcher Zahlwert gehört zu Alpha (Ⲁ)?",
          en: "What numeric value belongs to Alpha (Ⲁ)?",
          ar: "ما هي القيمة العددية لألفا (Ⲁ)؟",
        },
        options: [
          { de: "1", en: "1", ar: "١" },
          { de: "2", en: "2", ar: "٢" },
          { de: "3", en: "3", ar: "٣" },
          { de: "4", en: "4", ar: "٤" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q1-6",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲁⲅⲁⲡⲏ" (agapē)?',
          en: 'What does the Coptic word "ⲁⲅⲁⲡⲏ" (agapē) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲁⲅⲁⲡⲏ" (agapē)؟',
        },
        options: [
          { de: "Liebe", en: "love", ar: "محبة" },
          { de: "Auge", en: "eye", ar: "عين" },
          { de: "Herz", en: "heart", ar: "قلب" },
          { de: "Licht", en: "light", ar: "نور" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q1-7",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Vita (ⲃ) in Eigennamen ausgesprochen?",
          en: "How is Vita (ⲃ) pronounced in proper names?",
          ar: "كيف يُنطق ڤيتا (ⲃ) في الأعلام؟",
        },
        options: [
          { de: "immer b", en: "always b", ar: "دائمًا ب" },
          { de: "immer v", en: "always v", ar: "دائمًا ڤ" },
          { de: "p", en: "p", ar: "پ" },
          { de: "f", en: "f", ar: "ف" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q1-8",
        type: "multiple-choice",
        questionText: {
          de: "Welcher biblische Bezug wird bei Alpha (Ⲁ) genannt?",
          en: "Which biblical reference is mentioned for Alpha (Ⲁ)?",
          ar: "أي إشارة كتابية تُذكر لألفا (Ⲁ)؟",
        },
        options: [
          {
            de: '„Ich bin das Alpha und das Omega"',
            en: '"I am the Alpha and the Omega"',
            ar: '"أنا الألفا والأوميغا"',
          },
          {
            de: '„Im Anfang war das Wort"',
            en: '"In the beginning was the Word"',
            ar: '"في البدء كان الكلمة"',
          },
          {
            de: '„Die Leuchte des Leibes ist das Auge"',
            en: '"The lamp of the body is the eye"',
            ar: '"سراج الجسد هو العين"',
          },
          { de: '„Gott ist Licht"', en: '"God is light"', ar: '"الله نور"' },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m1-q2": {
    id: "m1-q2",
    moduleId: "m1",
    lessonId: "m1-l2",
    passScore: 70,
    title: { de: "Quiz 2: Ⲉ–Ⲏ", en: "Quiz 2: Ⲉ–Ⲏ", ar: "الاختبار 2: Ⲉ–Ⲏ" },
    questions: [
      {
        id: "m1-q2-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Eey (ⲉ) ausgesprochen?",
          en: "How is Eey (ⲉ) pronounced?",
          ar: "كيف يُنطق إي (ⲉ)؟",
        },
        options: [
          {
            de: 'kurzes e wie "Bett"',
            en: 'short e as in "bet"',
            ar: 'حركة قصيرة "إي"',
          },
          { de: "langes ee", en: "long ee", ar: "ياء طويلة" },
          { de: "kurzes i", en: "short i", ar: "ياء قصيرة" },
          { de: "kurzes a", en: "short a", ar: "ألف قصيرة" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q2-2",
        type: "multiple-choice",
        questionText: {
          de: "Wofür wird So-ou (ⲋ) hauptsächlich verwendet?",
          en: "What is So-ou (ⲋ) mainly used for?",
          ar: "لماذا يُستخدم سو-أو (ⲋ) بشكل رئيسي؟",
        },
        options: [
          {
            de: "als Zahlzeichen für 6",
            en: "as numeral for 6",
            ar: "رقمًا للستة",
          },
          { de: "als Konsonant", en: "as consonant", ar: "حرفًا ساكنًا" },
          { de: "als Vokal", en: "as vowel", ar: "حركة" },
          { de: "am Wortende", en: "at word end", ar: "في نهاية الكلمة" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q2-3",
        type: "multiple-choice",
        questionText: {
          de: "Welcher Zahlwert gehört zu Zeeta (ⲍ)?",
          en: "What numeric value belongs to Zeta (ⲍ)?",
          ar: "ما هي القيمة العددية لزيتا (ⲍ)؟",
        },
        options: [
          { de: "7", en: "7", ar: "٧" },
          { de: "6", en: "6", ar: "٦" },
          { de: "5", en: "5", ar: "٥" },
          { de: "8", en: "8", ar: "٨" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q2-4",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Eeta (ⲏ) ausgesprochen?",
          en: "How is Eta (ⲏ) pronounced?",
          ar: "كيف يُنطق إيتا (ⲏ)؟",
        },
        options: [
          { de: "langes i (ie)", en: "long ee", ar: "ياء طويلة" },
          { de: "kurzes e", en: "short e", ar: "إي قصيرة" },
          { de: "kurzes i", en: "short i", ar: "ياء قصيرة" },
          { de: "langes a", en: "long a", ar: "ألف طويلة" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q2-5",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲏⲓ" (ēi)?',
          en: 'What does the Coptic word "ⲏⲓ" (ēi) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲏⲓ" (ēi)؟',
        },
        options: [
          { de: "Haus", en: "house", ar: "بيت" },
          { de: "Gürtel", en: "belt", ar: "حزام" },
          { de: "Auge", en: "eye", ar: "عين" },
          { de: "Herz", en: "heart", ar: "قلب" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q2-6",
        type: "multiple-choice",
        questionText: {
          de: "Welcher dieser Buchstaben ist ein langer Vokal?",
          en: "Which of these letters is a long vowel?",
          ar: "أي من هذه الحروف هو حركة طويلة؟",
        },
        options: [
          { de: "Ⲏ (Eeta)", en: "Ⲏ (Eta)", ar: "Ⲏ (إيتا)" },
          { de: "Ⲉ (Eey)", en: "Ⲉ (Eey)", ar: "Ⲉ (إي)" },
          { de: "Ⲋ (So-ou)", en: "Ⲋ (So-ou)", ar: "Ⲋ (سو-أو)" },
          { de: "Ⲍ (Zeeta)", en: "Ⲍ (Zeta)", ar: "Ⲍ (زيتا)" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q2-7",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Zeeta (ⲍ) ausgesprochen?",
          en: "How is Zeta (ⲍ) pronounced?",
          ar: "كيف يُنطق زيتا (ⲍ)؟",
        },
        options: [
          { de: "stimmhaftes s (z)", en: "z (voiced s)", ar: "ز" },
          { de: "s", en: "s", ar: "س" },
          { de: "sch", en: "sh", ar: "ش" },
          { de: "ts", en: "ts", ar: "تس" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q2-8",
        type: "multiple-choice",
        questionText: {
          de: "Welcher biblische Vers wird bei Eeta (ⲏ) zitiert?",
          en: "Which biblical verse is quoted for Eta (ⲏ)?",
          ar: "أي آية كتابية تُذكر لإيتا (ⲏ)؟",
        },
        options: [
          {
            de: '„Ich aber und mein Haus, wir wollen dem HERRN dienen"',
            en: '"As for me and my house, we will serve the LORD"',
            ar: '"أما أنا وبيتي فنعبد الرب"',
          },
          {
            de: '„Sechs Tage sollst du arbeiten"',
            en: '"Six days you shall labor"',
            ar: '"ستة أيام تعمل"',
          },
          {
            de: '„Trachtet zuerst nach dem Reich Gottes"',
            en: '"Seek first the kingdom of God"',
            ar: '"اطلبوا أولاً ملكوت الله"',
          },
          { de: '„Gott ist Licht"', en: '"God is light"', ar: '"الله نور"' },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m1-q3": {
    id: "m1-q3",
    moduleId: "m1",
    lessonId: "m1-l3",
    passScore: 70,
    title: { de: "Quiz 3: Ⲑ–Ⲕ", en: "Quiz 3: Ⲑ–Ⲕ", ar: "الاختبار 3: Ⲑ–Ⲕ" },
    questions: [
      {
        id: "m1-q3-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Theta (ⲑ) ausgesprochen?",
          en: "How is Theta (ⲑ) pronounced?",
          ar: "كيف يُنطق ثيتا (ⲑ)؟",
        },
        options: [
          { de: 'th wie "thing"', en: 'th as in "thing"', ar: "ث" },
          { de: "t", en: "t", ar: "ت" },
          { de: "d", en: "d", ar: "د" },
          { de: 'th wie "this"', en: 'th as in "this"', ar: "ذ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q3-2",
        type: "multiple-choice",
        questionText: {
          de: "Wann wird Theta (ⲑ) oft als t ausgesprochen?",
          en: "When is Theta (ⲑ) often pronounced as t?",
          ar: "متى يُنطق ثيتا (ⲑ) كـ ت؟",
        },
        options: [
          { de: "nach ⲥ/ϣ/ⲧ", en: "after ⲥ/ϣ/ⲧ", ar: "بعد ⲥ/ϣ/ⲧ" },
          {
            de: "am Wortanfang",
            en: "at word beginning",
            ar: "في بداية الكلمة",
          },
          { de: "vor Vokalen", en: "before vowels", ar: "قبل الحركات" },
          { de: "in Eigennamen", en: "in proper names", ar: "في الأعلام" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q3-3",
        type: "multiple-choice",
        questionText: {
          de: "Welcher Zahlwert gehört zu Yota (ⲓ)?",
          en: "What numeric value belongs to Iota (ⲓ)?",
          ar: "ما هي القيمة العددية ليوتا (ⲓ)؟",
        },
        options: [
          { de: "10", en: "10", ar: "١٠" },
          { de: "9", en: "9", ar: "٩" },
          { de: "20", en: "20", ar: "٢٠" },
          { de: "30", en: "30", ar: "٣٠" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q3-4",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲓⲱⲧ" (iōt)?',
          en: 'What does the Coptic word "ⲓⲱⲧ" (iōt) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲓⲱⲧ" (iōt)؟',
        },
        options: [
          { de: "Vater", en: "father", ar: "أب" },
          { de: "Erde", en: "earth", ar: "أرض" },
          { de: "Zunge", en: "tongue", ar: "لسان" },
          { de: "Meer", en: "sea", ar: "بحر" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q3-5",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Kappa (ⲕ) ausgesprochen?",
          en: "How is Kappa (ⲕ) pronounced?",
          ar: "كيف يُنطق كاپا (ⲕ)؟",
        },
        options: [
          { de: "k", en: "k", ar: "ك" },
          { de: "kh", en: "kh", ar: "خ" },
          { de: "g", en: "g", ar: "ج" },
          { de: "ch", en: "ch", ar: "تش" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q3-6",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲕⲁϩⲓ" (kahi)?',
          en: 'What does the Coptic word "ⲕⲁϩⲓ" (kahi) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲕⲁϩⲓ" (kahi)؟',
        },
        options: [
          { de: "Erde", en: "earth", ar: "أرض" },
          { de: "Himmel", en: "heaven", ar: "سماء" },
          { de: "Meer", en: "sea", ar: "بحر" },
          { de: "Feuer", en: "fire", ar: "نار" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q3-7",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Laula (ⲗ) ausgesprochen?",
          en: "How is Laula (ⲗ) pronounced?",
          ar: "كيف يُنطق لامبدا (ⲗ)؟",
        },
        options: [
          { de: "l", en: "l", ar: "ل" },
          { de: "r", en: "r", ar: "ر" },
          { de: "n", en: "n", ar: "ن" },
          { de: "m", en: "m", ar: "م" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q3-8",
        type: "multiple-choice",
        questionText: {
          de: "Welcher biblische Bezug wird bei Theta (ⲑ) genannt?",
          en: "Which biblical reference is mentioned for Theta (ⲑ)?",
          ar: "أي إشارة كتابية تُذكر لثيتا (ⲑ)؟",
        },
        options: [
          { de: '„Gott ist treu"', en: '"God is faithful"', ar: '"الله أمين"' },
          {
            de: '„Im Anfang war das Wort"',
            en: '"In the beginning was the Word"',
            ar: '"في البدء كان الكلمة"',
          },
          {
            de: '„Die Erde ist des HERRN"',
            en: '"The earth is the LORD\'s"',
            ar: '"للرب الأرض"',
          },
          { de: '„Gott ist Licht"', en: '"God is light"', ar: '"الله نور"' },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m1-q4": {
    id: "m1-q4",
    moduleId: "m1",
    lessonId: "m1-l4",
    passScore: 70,
    title: { de: "Quiz 4: Ⲙ–Ⲛ", en: "Quiz 4: Ⲙ–Ⲛ", ar: "الاختبار 4: Ⲙ–Ⲛ" },
    questions: [
      {
        id: "m1-q4-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Mey (ⲙ) ausgesprochen?",
          en: "How is Mu (ⲙ) pronounced?",
          ar: "كيف يُنطق مي (ⲙ)؟",
        },
        options: [
          { de: "m", en: "m", ar: "م" },
          { de: "n", en: "n", ar: "ن" },
          { de: "l", en: "l", ar: "ل" },
          { de: "r", en: "r", ar: "ر" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q4-2",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲙⲁⲁⲩ" (maau)?',
          en: 'What does the Coptic word "ⲙⲁⲁⲩ" (maau) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲙⲁⲁⲩ" (maau)؟',
        },
        options: [
          { de: "Mutter", en: "mother", ar: "أم" },
          { de: "Vater", en: "father", ar: "أب" },
          { de: "Kind", en: "child", ar: "طفل" },
          { de: "Familie", en: "family", ar: "عائلة" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q4-3",
        type: "multiple-choice",
        questionText: {
          de: "Welcher Zahlwert gehört zu Mey (ⲙ)?",
          en: "What numeric value belongs to Mu (ⲙ)?",
          ar: "ما هي القيمة العددية لمي (ⲙ)؟",
        },
        options: [
          { de: "40", en: "40", ar: "٤٠" },
          { de: "30", en: "30", ar: "٣٠" },
          { de: "50", en: "50", ar: "٥٠" },
          { de: "60", en: "60", ar: "٦٠" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q4-4",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Ney (ⲛ) ausgesprochen?",
          en: "How is Nu (ⲛ) pronounced?",
          ar: "كيف يُنطق ني (ⲛ)؟",
        },
        options: [
          { de: "n", en: "n", ar: "ن" },
          { de: "m", en: "m", ar: "م" },
          { de: "ng", en: "ng", ar: "نغ" },
          { de: "l", en: "l", ar: "ل" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q4-5",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲛⲟⲩⲃ" (noub)?',
          en: 'What does the Coptic word "ⲛⲟⲩⲃ" (noub) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲛⲟⲩⲃ" (noub)؟',
        },
        options: [
          { de: "Gold", en: "gold", ar: "ذهب" },
          { de: "Silber", en: "silver", ar: "فضة" },
          { de: "Holz", en: "wood", ar: "خشب" },
          { de: "Stein", en: "stone", ar: "حجر" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q4-6",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Exi (ⲝ) ausgesprochen?",
          en: "How is Xi (ⲝ) pronounced?",
          ar: "كيف يُنطق إكسي (ⲝ)؟",
        },
        options: [
          { de: "ks (x)", en: "ks (x)", ar: "كس" },
          { de: "k", en: "k", ar: "ك" },
          { de: "s", en: "s", ar: "س" },
          { de: "z", en: "z", ar: "ز" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q4-7",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Omikron (ⲟ) ausgesprochen?",
          en: "How is Omicron (ⲟ) pronounced?",
          ar: "كيف يُنطق أوميكرون (ⲟ)؟",
        },
        options: [
          { de: "kurzes o", en: "short o", ar: "واو قصيرة" },
          { de: "langes o", en: "long o", ar: "واو طويلة" },
          { de: "u", en: "u", ar: "ضمة" },
          { de: "ö", en: "ö", ar: "أوه" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q4-8",
        type: "multiple-choice",
        questionText: {
          de: "Welcher biblische Vers wird bei Mey (ⲙ) zitiert?",
          en: "Which biblical verse is quoted for Mu (ⲙ)?",
          ar: "أي آية كتابية تُذكر لمي (ⲙ)؟",
        },
        options: [
          {
            de: '„Ehre deinen Vater und deine Mutter!"',
            en: '"Honor your father and your mother!"',
            ar: '"أكرم أباك وأمك!"',
          },
          { de: '„Gott ist Licht"', en: '"God is light"', ar: '"الله نور"' },
          { de: '„Gott ist treu"', en: '"God is faithful"', ar: '"الله أمين"' },
          {
            de: '„Die Erde ist des HERRN"',
            en: '"The earth is the LORD\'s"',
            ar: '"للرب الأرض"',
          },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m1-q5": {
    id: "m1-q5",
    moduleId: "m1",
    lessonId: "m1-l5",
    passScore: 70,
    title: { de: "Quiz 5: Ⲡ–Ⲣ", en: "Quiz 5: Ⲡ–Ⲣ", ar: "الاختبار 5: Ⲡ–Ⲣ" },
    questions: [
      {
        id: "m1-q5-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Pe (ⲡ) ausgesprochen?",
          en: "How is Pi (ⲡ) pronounced?",
          ar: "كيف يُنطق پي (ⲡ)؟",
        },
        options: [
          { de: "p", en: "p", ar: "پ" },
          { de: "b", en: "b", ar: "ب" },
          { de: "f", en: "f", ar: "ف" },
          { de: "v", en: "v", ar: "ڤ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q5-2",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲡⲉ" (pe)?',
          en: 'What does the Coptic word "ⲡⲉ" (pe) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲡⲉ" (pe)؟',
        },
        options: [
          { de: "ist", en: "is", ar: "هو" },
          { de: "war", en: "was", ar: "كان" },
          { de: "wird sein", en: "will be", ar: "سيكون" },
          { de: "hat", en: "has", ar: "لديه" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q5-3",
        type: "multiple-choice",
        questionText: {
          de: "Welcher Zahlwert gehört zu Ro (ⲣ)?",
          en: "What numeric value belongs to Rho (ⲣ)?",
          ar: "ما هي القيمة العددية لرو (ⲣ)؟",
        },
        options: [
          { de: "100", en: "100", ar: "١٠٠" },
          { de: "80", en: "80", ar: "٨٠" },
          { de: "200", en: "200", ar: "٢٠٠" },
          { de: "300", en: "300", ar: "٣٠٠" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q5-4",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲣⲁⲛ" (ran)?',
          en: 'What does the Coptic word "ⲣⲁⲛ" (ran) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲣⲁⲛ" (ran)؟',
        },
        options: [
          { de: "Name", en: "name", ar: "اسم" },
          { de: "Herz", en: "heart", ar: "قلب" },
          { de: "Haus", en: "house", ar: "بيت" },
          { de: "Liebe", en: "love", ar: "محبة" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q5-5",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Seema (ⲥ) ausgesprochen?",
          en: "How is Sigma (ⲥ) pronounced?",
          ar: "كيف يُنطق سيغما (ⲥ)؟",
        },
        options: [
          { de: "s", en: "s", ar: "س" },
          { de: "z", en: "z", ar: "ز" },
          { de: "sh", en: "sh", ar: "ش" },
          { de: "ch", en: "ch", ar: "خ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q5-6",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲥⲱⲧⲉⲙ" (sōtem)?',
          en: 'What does the Coptic word "ⲥⲱⲧⲉⲙ" (sōtem) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲥⲱⲧⲉⲙ" (sōtem)؟',
        },
        options: [
          { de: "hören", en: "to hear", ar: "يسمع" },
          { de: "sehen", en: "to see", ar: "يرى" },
          { de: "sprechen", en: "to speak", ar: "يتكلم" },
          { de: "denken", en: "to think", ar: "يفكر" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q5-7",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Tav (ⲧ) nach ⲛ in griechischen Lehnwörtern oft ausgesprochen?",
          en: "How is Tau (ⲧ) often pronounced after ⲛ in Greek loanwords?",
          ar: "كيف يُنطق تاو (ⲧ) بعد ⲛ في الكلمات اليونانية المستعارة؟",
        },
        options: [
          { de: "d", en: "d", ar: "د" },
          { de: "t", en: "t", ar: "ت" },
          { de: "th", en: "th", ar: "ث" },
          { de: "dh", en: "dh", ar: "ذ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q5-8",
        type: "multiple-choice",
        questionText: {
          de: "Welcher biblische Bezug wird bei Pe (ⲡ) genannt?",
          en: "Which biblical reference is mentioned for Pi (ⲡ)?",
          ar: "أي إشارة كتابية تُذكر لپي (ⲡ)؟",
        },
        options: [
          {
            de: '„Ich bin die Tür"',
            en: '"I am the door"',
            ar: '"أنا هو الباب"',
          },
          {
            de: '„Ich bin der Weg"',
            en: '"I am the way"',
            ar: '"أنا هو الطريق"',
          },
          {
            de: '„Ich bin das Licht"',
            en: '"I am the light"',
            ar: '"أنا هو النور"',
          },
          {
            de: '„Ich bin das Brot"',
            en: '"I am the bread"',
            ar: '"أنا هو الخبز"',
          },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m1-q6": {
    id: "m1-q6",
    moduleId: "m1",
    lessonId: "m1-l6",
    passScore: 70,
    title: { de: "Quiz 6: Ⲩ–Ⲯ", en: "Quiz 6: Ⲩ–Ⲯ", ar: "الاختبار 6: Ⲩ–Ⲯ" },
    questions: [
      {
        id: "m1-q6-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Epsilon (ⲩ) normalerweise ausgesprochen?",
          en: "How is Epsilon (ⲩ) normally pronounced?",
          ar: "كيف يُنطق إبسيلون (ⲩ) عادة؟",
        },
        options: [
          { de: 'i (wie "hit")', en: 'i (as in "hit")', ar: "i" },
          { de: "u", en: "u", ar: "u" },
          { de: "e", en: "e", ar: "e" },
          { de: "o", en: "o", ar: "o" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q6-2",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Epsilon (ⲩ) nach ⲁ oder ⲉ ausgesprochen?",
          en: "How is Epsilon (ⲩ) pronounced after ⲁ or ⲉ?",
          ar: "كيف يُنطق إبسيلون (ⲩ) بعد ⲁ أو ⲉ؟",
        },
        options: [
          { de: "v", en: "v", ar: "v" },
          { de: "i", en: "i", ar: "i" },
          { de: "u", en: "u", ar: "u" },
          { de: "w", en: "w", ar: "w" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q6-3",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Epsilon (ⲩ) nach ⲟ ausgesprochen?",
          en: "How is Epsilon (ⲩ) pronounced after ⲟ?",
          ar: "كيف يُنطق إبسيلون (ⲩ) بعد ⲟ؟",
        },
        options: [
          { de: 'u (wie "soup")', en: 'u (as in "soup")', ar: "u" },
          { de: "i", en: "i", ar: "i" },
          { de: "v", en: "v", ar: "v" },
          { de: "o", en: "o", ar: "o" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q6-4",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲟⲩⲁⲡ" (ouap)?',
          en: 'What does the Coptic word "ⲟⲩⲁⲡ" (ouap) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲟⲩⲁⲡ" (ouap)؟',
        },
        options: [
          { de: "heilig", en: "holy", ar: "قدوس" },
          { de: "Licht", en: "light", ar: "نور" },
          { de: "rein", en: "pure", ar: "طاهر" },
          { de: "gut", en: "good", ar: "صالح" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q6-5",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Phi (ⲫ) ausgesprochen?",
          en: "How is Phi (ⲫ) pronounced?",
          ar: "كيف يُنطق في (ⲫ)؟",
        },
        options: [
          { de: "f", en: "f", ar: "ف" },
          { de: "p", en: "p", ar: "پ" },
          { de: "v", en: "v", ar: "ڤ" },
          { de: "ph", en: "ph", ar: "فه" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q6-6",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Key (ⲭ) in koptischen Wörtern ausgesprochen?",
          en: "How is Key (ⲭ) pronounced in Coptic words?",
          ar: "كيف يُنطق كي (ⲭ) في الكلمات القبطية؟",
        },
        options: [
          { de: "k", en: "k", ar: "ك" },
          { de: "sch", en: "sh", ar: "ش" },
          { de: "kh", en: "kh", ar: "خ" },
          { de: "ch", en: "ch", ar: "تش" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q6-7",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Key (ⲭ) in griechischen Lehnwörtern vor ⲉ/ⲏ/ⲓ/ⲩ ausgesprochen?",
          en: "How is Key (ⲭ) pronounced in Greek loanwords before ⲉ/ⲏ/ⲓ/ⲩ?",
          ar: "كيف يُنطق كي (ⲭ) في الكلمات اليونانية قبل ⲉ/ⲏ/ⲓ/ⲩ؟",
        },
        options: [
          { de: "sch", en: "sh", ar: "ش" },
          { de: "k", en: "k", ar: "ك" },
          { de: "kh", en: "kh", ar: "خ" },
          { de: "ch", en: "ch", ar: "تش" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q6-8",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Epsi (ⲯ) ausgesprochen?",
          en: "How is Psi (ⲯ) pronounced?",
          ar: "كيف يُنطق بسي (ⲯ)؟",
        },
        options: [
          { de: "ps", en: "ps", ar: "بس" },
          { de: "p", en: "p", ar: "پ" },
          { de: "s", en: "s", ar: "س" },
          { de: "z", en: "z", ar: "ز" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q6-9",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲯⲁⲗⲙⲟⲥ" (psalmos)?',
          en: 'What does the Coptic word "ⲯⲁⲗⲙⲟⲥ" (psalmos) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲯⲁⲗⲙⲟⲥ" (psalmos)؟',
        },
        options: [
          { de: "Psalm", en: "psalm", ar: "مزمور" },
          { de: "Lied", en: "song", ar: "أغنية" },
          { de: "Gebet", en: "prayer", ar: "صلاة" },
          { de: "Hymne", en: "hymn", ar: "ترنيمة" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q6-10",
        type: "multiple-choice",
        questionText: {
          de: "Welcher biblische Vers wird bei Phi (ⲫ) zitiert?",
          en: "Which biblical verse is quoted for Phi (ⲫ)?",
          ar: "أي آية كتابية تُذكر لفي (ⲫ)؟",
        },
        options: [
          {
            de: '„Dein Wort ist meines Fußes Leuchte"',
            en: '"Your word is a lamp to my feet"',
            ar: '"كلمتك مصباح لرجلي"',
          },
          {
            de: '„Seid heilig, denn ich bin heilig"',
            en: '"Be holy, for I am holy"',
            ar: '"كونوا قديسين لأني أنا قدوس"',
          },
          { de: '„Gott ist Licht"', en: '"God is light"', ar: '"الله نور"' },
          {
            de: '„Singt dem HERRN ein neues Lied"',
            en: '"Sing to the LORD a new song"',
            ar: '"رنموا للرب ترنيمة جديدة"',
          },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m1-q7": {
    id: "m1-q7",
    moduleId: "m1",
    lessonId: "m1-l7",
    passScore: 70,
    title: { de: "Quiz 7: Ⲱ–ϣ", en: "Quiz 7: Ⲱ–ϣ", ar: "الاختبار 7: Ⲱ–ϣ" },
    questions: [
      {
        id: "m1-q7-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Omega (ⲱ) ausgesprochen?",
          en: "How is Omega (ⲱ) pronounced?",
          ar: "كيف يُنطق أوميغا (ⲱ)؟",
        },
        options: [
          { de: "langes o", en: "long o", ar: "واو طويلة" },
          { de: "kurzes o", en: "short o", ar: "واو قصيرة" },
          { de: "u", en: "u", ar: "ضمة" },
          { de: "ö", en: "ö", ar: "أوه" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q7-2",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ⲱⲛⲁⲓ" (ōnai)?',
          en: 'What does the Coptic word "ⲱⲛⲁⲓ" (ōnai) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ⲱⲛⲁⲓ" (ōnai)؟',
        },
        options: [
          { de: "Stein", en: "stone", ar: "حجر" },
          { de: "Holz", en: "wood", ar: "خشب" },
          { de: "Wasser", en: "water", ar: "ماء" },
          { de: "Feuer", en: "fire", ar: "نار" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q7-3",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Shai (ϣ) ausgesprochen?",
          en: "How is Shai (ϣ) pronounced?",
          ar: "كيف يُنطق شاي (ϣ)؟",
        },
        options: [
          { de: "sch", en: "sh", ar: "ش" },
          { de: "s", en: "s", ar: "س" },
          { de: "z", en: "z", ar: "ز" },
          { de: "ch", en: "ch", ar: "خ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q7-4",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ϣⲏⲣⲓ" (shēri)?',
          en: 'What does the Coptic word "ϣⲏⲣⲓ" (shēri) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ϣⲏⲣⲓ" (shēri)؟',
        },
        options: [
          { de: "Sohn/Kind", en: "son/child", ar: "ابن/طفل" },
          { de: "Tochter", en: "daughter", ar: "بنت" },
          { de: "Vater", en: "father", ar: "أب" },
          { de: "Mutter", en: "mother", ar: "أم" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q7-5",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Fai (ϥ) ausgesprochen?",
          en: "How is Fai (ϥ) pronounced?",
          ar: "كيف يُنطق فاي (ϥ)؟",
        },
        options: [
          { de: "f", en: "f", ar: "ف" },
          { de: "v", en: "v", ar: "ڤ" },
          { de: "p", en: "p", ar: "پ" },
          { de: "ph", en: "ph", ar: "فه" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q7-6",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ϥⲁⲓ" (fai)?',
          en: 'What does the Coptic word "ϥⲁⲓ" (fai) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ϥⲁⲓ" (fai)؟',
        },
        options: [
          { de: "tragen", en: "to carry", ar: "يحمل" },
          { de: "geben", en: "to give", ar: "يعطي" },
          { de: "nehmen", en: "to take", ar: "يأخذ" },
          { de: "bringen", en: "to bring", ar: "يحضر" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q7-7",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Khai (ϧ) ausgesprochen?",
          en: "How is Khai (ϧ) pronounced?",
          ar: "كيف يُنطق خاي (ϧ)؟",
        },
        options: [
          { de: 'raues ch (wie „Bach")', en: "guttural kh", ar: "خ" },
          { de: "k", en: "k", ar: "ك" },
          { de: "h", en: "h", ar: "هـ" },
          { de: "sch", en: "sh", ar: "ش" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q7-8",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ϧⲉⲛ" (khen)?',
          en: 'What does the Coptic word "ϧⲉⲛ" (khen) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ϧⲉⲛ" (khen)؟',
        },
        options: [
          { de: "in", en: "in", ar: "في" },
          { de: "aus", en: "out", ar: "من" },
          { de: "mit", en: "with", ar: "مع" },
          { de: "für", en: "for", ar: "لـ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q7-9",
        type: "multiple-choice",
        questionText: {
          de: "Welcher dieser Buchstaben ist ein rein koptischer Buchstabe (nicht griechisch)?",
          en: "Which of these letters is a purely Coptic letter (not Greek)?",
          ar: "أي من هذه الحروف هو حرف قبطي صرف (ليس يونانيًا)؟",
        },
        options: [
          { de: "Ϣ (Shai)", en: "Ϣ (Shai)", ar: "Ϣ (شاي)" },
          { de: "Ⲱ (Omega)", en: "Ⲱ (Omega)", ar: "Ⲱ (أوميغا)" },
          { de: "Ⲁ (Alpha)", en: "Ⲁ (Alpha)", ar: "Ⲁ (ألفا)" },
          { de: "Ⲃ (Vita)", en: "Ⲃ (Vita)", ar: "Ⲃ (ڤيتا)" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q7-10",
        type: "multiple-choice",
        questionText: {
          de: "Welcher biblische Vers wird bei Shai (ϣ) zitiert?",
          en: "Which biblical verse is quoted for Shai (ϣ)?",
          ar: "أي آية كتابية تُذكر لشاي (ϣ)؟",
        },
        options: [
          {
            de: '„Lasst die Kinder zu mir kommen"',
            en: '"Let the children come to me"',
            ar: '"دعوا الأولاد يأتون إليّ"',
          },
          {
            de: '„Ich bin das Alpha und das Omega"',
            en: '"I am the Alpha and the Omega"',
            ar: '"أنا الألفا والأوميغا"',
          },
          {
            de: '„Der Stein, den die Bauleute verworfen haben"',
            en: '"The stone the builders rejected"',
            ar: '"الحجر الذي رفضه البناؤون"',
          },
          {
            de: '„Nehmt mein Joch auf euch"',
            en: '"Take my yoke upon you"',
            ar: '"احملوا نيري عليكم"',
          },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m1-q8": {
    id: "m1-q8",
    moduleId: "m1",
    lessonId: "m1-l8",
    passScore: 70,
    title: { de: "Quiz 8: ϩ–ϯ", en: "Quiz 8: ϩ–ϯ", ar: "الاختبار 8: ϩ–ϯ" },
    questions: [
      {
        id: "m1-q8-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Hori (ϩ) ausgesprochen?",
          en: "How is Hori (ϩ) pronounced?",
          ar: "كيف يُنطق هوري (ϩ)؟",
        },
        options: [
          { de: "h", en: "h", ar: "هـ" },
          { de: "kh", en: "kh", ar: "خ" },
          { de: "ch", en: "ch", ar: "تش" },
          { de: "sh", en: "sh", ar: "ش" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q8-2",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ϩⲏⲧ" (hēt)?',
          en: 'What does the Coptic word "ϩⲏⲧ" (hēt) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ϩⲏⲧ" (hēt)؟',
        },
        options: [
          { de: "Herz", en: "heart", ar: "قلب" },
          { de: "Kopf", en: "head", ar: "رأس" },
          { de: "Hand", en: "hand", ar: "يد" },
          { de: "Haus", en: "house", ar: "بيت" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q8-3",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Jenja (ϫ) vor ⲉ/ⲏ/ⲓ/ⲩ ausgesprochen?",
          en: "How is Jenja (ϫ) pronounced before ⲉ/ⲏ/ⲓ/ⲩ?",
          ar: "كيف يُنطق جنچا (ϫ) قبل ⲉ/ⲏ/ⲓ/ⲩ؟",
        },
        options: [
          { de: "j (dsch)", en: 'j (as in "jump")', ar: "ج" },
          { de: "hartes g", en: "hard g", ar: "ج صلبة" },
          { de: "ch", en: "ch", ar: "تش" },
          { de: "sh", en: "sh", ar: "ش" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q8-4",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ϫⲓϫ" (jij)?',
          en: 'What does the Coptic word "ϫⲓϫ" (jij) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ϫⲓϫ" (jij)؟',
        },
        options: [
          { de: "Hand", en: "hand", ar: "يد" },
          { de: "Fuß", en: "foot", ar: "قدم" },
          { de: "Auge", en: "eye", ar: "عين" },
          { de: "Ohr", en: "ear", ar: "أذن" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q8-5",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird Cheema (ϭ) ausgesprochen?",
          en: "How is Cheema (ϭ) pronounced?",
          ar: "كيف يُنطق تشِيما (ϭ)؟",
        },
        options: [
          { de: 'tsch (wie „Deutsch")', en: 'tch (as in "church")', ar: "تش" },
          { de: "k", en: "k", ar: "ك" },
          { de: "j", en: "j", ar: "ج" },
          { de: "sh", en: "sh", ar: "ش" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q8-6",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet das koptische Wort „ϭⲟⲓⲥ" (chois)?',
          en: 'What does the Coptic word "ϭⲟⲓⲥ" (chois) mean?',
          ar: 'ماذا تعني الكلمة القبطية "ϭⲟⲓⲥ" (chois)؟',
        },
        options: [
          { de: "Herr", en: "Lord", ar: "الرب" },
          { de: "Gott", en: "God", ar: "الله" },
          { de: "König", en: "King", ar: "الملك" },
          { de: "Meister", en: "Master", ar: "السيد" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q8-7",
        type: "multiple-choice",
        questionText: {
          de: "Was ist Ti (ϯ)?",
          en: "What is Ti (ϯ)?",
          ar: "ما هو تي (ϯ)؟",
        },
        options: [
          { de: "eine Ligatur", en: "a ligature", ar: "رباط حرفي" },
          {
            de: "ein griechischer Buchstabe",
            en: "a Greek letter",
            ar: "حرف يوناني",
          },
          { de: "ein Vokal", en: "a vowel", ar: "حركة" },
          { de: "ein Zahlzeichen", en: "a numeral", ar: "رقم" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q8-8",
        type: "multiple-choice",
        questionText: {
          de: 'Was kann das koptische Wort „ϯ" (ti) bedeuten?',
          en: 'What can the Coptic word "ϯ" (ti) mean?',
          ar: 'ماذا يمكن أن تعني الكلمة القبطية "ϯ" (ti)؟',
        },
        options: [
          { de: "geben / ich", en: "to give / I", ar: "يعطي / أنا" },
          { de: "nehmen / du", en: "to take / you", ar: "يأخذ / أنت" },
          { de: "haben / er", en: "to have / he", ar: "يملك / هو" },
          { de: "sein / wir", en: "to be / we", ar: "يكون / نحن" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q8-9",
        type: "multiple-choice",
        questionText: {
          de: "Welche dieser Buchstaben haben keinen Zahlwert?",
          en: "Which of these letters have no numeric value?",
          ar: "أي من هذه الحروف ليس له قيمة عددية؟",
        },
        options: [
          {
            de: "alle rein koptischen Buchstaben (Ϣ Ϥ Ϧ Ϩ Ϫ Ϭ Ϯ)",
            en: "all purely Coptic letters (Ϣ Ϥ Ϧ Ϩ Ϫ Ϭ Ϯ)",
            ar: "كل الحروف القبطية الصرفة (Ϣ Ϥ Ϧ Ϩ Ϫ Ϭ Ϯ)",
          },
          {
            de: "alle griechischen Buchstaben",
            en: "all Greek letters",
            ar: "كل الحروف اليونانية",
          },
          { de: "nur Hori (ϩ)", en: "only Hori (ϩ)", ar: "هوري (ϩ) فقط" },
          { de: "nur Ti (ϯ)", en: "only Ti (ϯ)", ar: "تي (ϯ) فقط" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m1-q8-10",
        type: "multiple-choice",
        questionText: {
          de: "Welcher biblische Vers wird bei Hori (ϩ) zitiert?",
          en: "Which biblical verse is quoted for Hori (ϩ)?",
          ar: "أي آية كتابية تُذكر لهوري (ϩ)؟",
        },
        options: [
          {
            de: '„Selig sind, die reinen Herzens sind"',
            en: '"Blessed are the pure in heart"',
            ar: '"طوبى لأنقياء القلب"',
          },
          {
            de: '„In deine Hände befehle ich meinen Geist"',
            en: '"Into your hands I commit my spirit"',
            ar: '"في يديك أستودع روحي"',
          },
          {
            de: '„Das Wort vom Kreuz… Gottes Kraft"',
            en: '"The word of the cross... God\'s power"',
            ar: '"كلمة الصليب... قوة الله"',
          },
          {
            de: '„Die Gabe Gottes ist das ewige Leben"',
            en: '"The gift of God is eternal life"',
            ar: '"هبة الله هي الحياة الأبدية"',
          },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
};

// ————————————————————————————————————————————————————————————————————————
// MODULE-Export

export const MODULE_M1: Module = {
  id: "m1",
  order: 1,
  title: {
    de: "Alphabet (Bohairisch)",
    en: "Alphabet (Bohairic)",
    ar: "الأبجدية (بحيري)",
  },
  lessons: Object.keys(LESSONS).filter((k) => k.startsWith("m1-")),
  quizIds: Object.keys(QUIZZES).filter((k) => k.startsWith("m1-")),
};
