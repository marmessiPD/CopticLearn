// Module 3 – Artikel & Pronomen (Bohairisch)
// Based on Younan, Coptic Grammar, Chapter 2-3
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m3-l1": {
    id: "m3-l1",
    order: 1,
    moduleId: "m3",
    title: {
      de: "Der bestimmte Artikel",
      en: "The Definite Article",
      ar: "أداة التعريف",
    },
    prerequisites: ["m2-l1"],
    quizId: "q3-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Der bestimmte Artikel im Bohairischen",
          en: "The Definite Article in Bohairic",
          ar: "أداة التعريف في القبطية البحيرية",
        },
        rule: {
          de: "Der bestimmte Artikel hat drei Formen: ⲡⲓ (maskulin), ϯ (feminin), ⲛⲓ (Plural). Er steht immer vor dem Substantiv.",
          en: "The definite article has three forms: ⲡⲓ (masculine), ϯ (feminine), ⲛⲓ (plural). It always precedes the noun.",
          ar: "أداة التعريف لها ثلاثة أشكال: ⲡⲓ (مذكر)، ϯ (مؤنث)، ⲛⲓ (جمع). تأتي دائماً قبل الاسم.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲣⲱⲙⲓ",
            translit: "pi-romi",
            meaning: { de: "der Mann", en: "the man", ar: "الرجل" },
          },
          {
            coptic: "ϯⲥϩⲓⲙⲓ",
            translit: "ti-shimi",
            meaning: { de: "die Frau", en: "the woman", ar: "المرأة" },
          },
          {
            coptic: "ⲛⲓϣⲏⲣⲓ",
            translit: "ni-shiri",
            meaning: { de: "die Kinder", en: "the children", ar: "الأطفال" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Maskuline Substantive",
          en: "Masculine Nouns",
          ar: "الأسماء المذكرة",
        },
        rule: {
          de: "Maskuline Substantive verwenden den Artikel ⲡⲓ. Die meisten enden auf -ⲓ oder Konsonant.",
          en: "Masculine nouns use the article ⲡⲓ. Most end in -ⲓ or a consonant.",
          ar: "الأسماء المذكرة تستخدم أداة ⲡⲓ. معظمها ينتهي بـ -ⲓ أو حرف ساكن.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲛⲟⲩϯ",
            translit: "pi-nouti",
            meaning: { de: "der Gott", en: "the God", ar: "الله" },
          },
          {
            coptic: "ⲡⲓϫⲱⲙ",
            translit: "pi-jom",
            meaning: { de: "das Buch", en: "the book", ar: "الكتاب" },
          },
          {
            coptic: "ⲡⲓⲟⲩⲱⲛⲓ",
            translit: "pi-ouoni",
            meaning: { de: "das Licht", en: "the light", ar: "النور" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Feminine Substantive",
          en: "Feminine Nouns",
          ar: "الأسماء المؤنثة",
        },
        rule: {
          de: "Feminine Substantive verwenden den Artikel ϯ. Die meisten enden auf -ⲓ oder -ⲉ.",
          en: "Feminine nouns use the article ϯ. Most end in -ⲓ or -ⲉ.",
          ar: "الأسماء المؤنثة تستخدم أداة ϯ. معظمها ينتهي بـ -ⲓ أو -ⲉ.",
        },
        examples: [
          {
            coptic: "ϯⲉⲕⲕⲗⲏⲥⲓⲁ",
            translit: "ti-ekklisia",
            meaning: { de: "die Kirche", en: "the church", ar: "الكنيسة" },
          },
          {
            coptic: "ϯⲯⲩⲭⲏ",
            translit: "ti-psychi",
            meaning: { de: "die Seele", en: "the soul", ar: "النفس" },
          },
          {
            coptic: "ϯⲁⲅⲁⲡⲏ",
            translit: "ti-agapi",
            meaning: { de: "die Liebe", en: "the love", ar: "المحبة" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Der Plural-Artikel",
          en: "The Plural Article",
          ar: "أداة الجمع",
        },
        rule: {
          de: "Alle Pluralformen (maskulin und feminin) verwenden den Artikel ⲛⲓ.",
          en: "All plural forms (masculine and feminine) use the article ⲛⲓ.",
          ar: "جميع أشكال الجمع (المذكر والمؤنث) تستخدم أداة ⲛⲓ.",
        },
        examples: [
          {
            coptic: "ⲛⲓⲣⲱⲙⲓ",
            translit: "ni-romi",
            meaning: { de: "die Männer", en: "the men", ar: "الرجال" },
          },
          {
            coptic: "ⲛⲓⲥϩⲓⲙⲓ",
            translit: "ni-shimi",
            meaning: { de: "die Frauen", en: "the women", ar: "النساء" },
          },
          {
            coptic: "ⲛⲓⲁⲅⲅⲉⲗⲟⲥ",
            translit: "ni-angelos",
            meaning: { de: "die Engel", en: "the angels", ar: "الملائكة" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Der unbestimmte Artikel",
          en: "The Indefinite Article",
          ar: "أداة التنكير",
        },
        rule: {
          de: "Der unbestimmte Artikel ⲟⲩ bedeutet 'ein/eine'. Er wird für maskulin und feminin gleich verwendet.",
          en: "The indefinite article ⲟⲩ means 'a/an'. It is used the same for masculine and feminine.",
          ar: "أداة التنكير ⲟⲩ تعني 'واحد/واحدة'. تُستخدم بنفس الشكل للمذكر والمؤنث.",
        },
        examples: [
          {
            coptic: "ⲟⲩⲣⲱⲙⲓ",
            translit: "ou-romi",
            meaning: { de: "ein Mann", en: "a man", ar: "رجل" },
          },
          {
            coptic: "ⲟⲩⲥϩⲓⲙⲓ",
            translit: "ou-shimi",
            meaning: { de: "eine Frau", en: "a woman", ar: "امرأة" },
          },
          {
            coptic: "ⲟⲩϣⲏⲣⲓ",
            translit: "ou-shiri",
            meaning: { de: "ein Kind", en: "a child", ar: "طفل" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲡⲓⲛⲟⲩϯ ⲡⲉ ⲟⲩⲁⲅⲁⲡⲏ",
          translit: "pi-nouti pe ou-agapi",
          meaning: {
            de: "Gott ist Liebe",
            en: "God is love",
            ar: "الله محبة",
          },
        },
        spiritual: {
          bibleVerse: {
            de: '„Gott ist Liebe; und wer in der Liebe bleibt, der bleibt in Gott und Gott in ihm.“',
            en: '"God is love, and whoever abides in love abides in God, and God abides in him."',
            ar: "«الله محبة، ومن يثبت في المحبة يثبت في الله والله فيه.»",
          },
          bibleReference: {
            de: "1. Johannes 4:16",
            en: "1 John 4:16",
            ar: "١ يوحنا ٤:١٦",
          },
          fatherQuote: {
            de: '„Die Liebe Gottes ist das Feuer, das alle Kälte der Sünde verzehrt.“',
            en: '"The love of God is the fire that consumes all the coldness of sin."',
            ar: "محبة الله هي النار التي تلتهم كل برودة الخطيئة.",
          },
          fatherReference: {
            de: "Hl. Augustinus, Bekenntnisse X.29",
            en: "St. Augustine, Confessions X.29",
            ar: "القديس أوغسطينوس، الاعترافات ١٠:٢٩",
          },
        },
      },
    ],
  },

  "m3-l2": {
    id: "m3-l2",
    order: 2,
    moduleId: "m3",
    title: {
      de: "Personalpronomen",
      en: "Personal Pronouns",
      ar: "الضمائر الشخصية",
    },
    prerequisites: ["m3-l1"],
    quizId: "q3-2",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Unabhängige Personalpronomen",
          en: "Independent Personal Pronouns",
          ar: "الضمائر الشخصية المنفصلة",
        },
        rule: {
          de: "Die unabhängigen Personalpronomen stehen allein und werden zur Betonung verwendet.",
          en: "Independent personal pronouns stand alone and are used for emphasis.",
          ar: "الضمائر الشخصية المنفصلة تقف وحدها وتُستخدم للتأكيد.",
        },
        examples: [
          {
            coptic: "ⲁⲛⲟⲕ",
            translit: "anok",
            meaning: { de: "ich", en: "I", ar: "أنا" },
          },
          {
            coptic: "ⲛ̀ⲑⲟⲕ",
            translit: "enthok",
            meaning: { de: "du (m.)", en: "you (m.)", ar: "أنت (م)" },
          },
          {
            coptic: "ⲛ̀ⲑⲟ",
            translit: "entho",
            meaning: { de: "du (f.)", en: "you (f.)", ar: "أنتِ (ف)" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Personalpronomen: 3. Person",
          en: "Personal Pronouns: 3rd Person",
          ar: "الضمائر الشخصية: الشخص الثالث",
        },
        rule: {
          de: "Die dritte Person unterscheidet zwischen maskulin (ⲛ̀ⲑⲟϥ) und feminin (ⲛ̀ⲑⲟⲥ).",
          en: "The third person distinguishes between masculine (ⲛ̀ⲑⲟϥ) and feminine (ⲛ̀ⲑⲟⲥ).",
          ar: "الشخص الثالث يميّز بين المذكر (ⲛ̀ⲑⲟϥ) والمؤنث (ⲛ̀ⲑⲟⲥ).",
        },
        examples: [
          {
            coptic: "ⲛ̀ⲑⲟϥ",
            translit: "enthof",
            meaning: { de: "er", en: "he", ar: "هو" },
          },
          {
            coptic: "ⲛ̀ⲑⲟⲥ",
            translit: "enthos",
            meaning: { de: "sie", en: "she", ar: "هي" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Personalpronomen: Plural",
          en: "Personal Pronouns: Plural",
          ar: "الضمائر الشخصية: الجمع",
        },
        rule: {
          de: "Die Pluralformen sind: ⲁⲛⲟⲛ (wir), ⲛ̀ⲑⲱⲧⲉⲛ (ihr), ⲛ̀ⲑⲱⲟⲩ (sie, Plural).",
          en: "The plural forms are: ⲁⲛⲟⲛ (we), ⲛ̀ⲑⲱⲧⲉⲛ (you pl.), ⲛ̀ⲑⲱⲟⲩ (they).",
          ar: "أشكال الجمع هي: ⲁⲛⲟⲛ (نحن)، ⲛ̀ⲑⲱⲧⲉⲛ (أنتم)، ⲛ̀ⲑⲱⲟⲩ (هم).",
        },
        examples: [
          {
            coptic: "ⲁⲛⲟⲛ",
            translit: "anon",
            meaning: { de: "wir", en: "we", ar: "نحن" },
          },
          {
            coptic: "ⲛ̀ⲑⲱⲧⲉⲛ",
            translit: "enthoten",
            meaning: { de: "ihr", en: "you (plural)", ar: "أنتم" },
          },
          {
            coptic: "ⲛ̀ⲑⲱⲟⲩ",
            translit: "enthou",
            meaning: { de: "sie (Plural)", en: "they", ar: "هم" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Pronominale Präfixe",
          en: "Pronominal Prefixes",
          ar: "البادئات الضميرية",
        },
        rule: {
          de: "Pronominale Präfixe werden mit Verben verbunden. Sie sind kürzer als die unabhängigen Formen.",
          en: "Pronominal prefixes are attached to verbs. They are shorter than independent forms.",
          ar: "البادئات الضميرية تتصل بالأفعال. هي أقصر من الأشكال المنفصلة.",
        },
        examples: [
          {
            coptic: "ϯ-",
            translit: "ti-",
            meaning: { de: "ich (Präfix)", en: "I (prefix)", ar: "أنا (بادئة)" },
          },
          {
            coptic: "ⲕ̀-",
            translit: "ek-",
            meaning: { de: "du (m., Präfix)", en: "you m. (prefix)", ar: "أنت (م، بادئة)" },
          },
          {
            coptic: "ϥ̀-",
            translit: "ef-",
            meaning: { de: "er (Präfix)", en: "he (prefix)", ar: "هو (بادئة)" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Pronominalsuffixe",
          en: "Pronominal Suffixes",
          ar: "اللواحق الضميرية",
        },
        rule: {
          de: "Pronominalsuffixe werden an Verben, Präpositionen und Nomen angehängt.",
          en: "Pronominal suffixes are attached to verbs, prepositions, and nouns.",
          ar: "اللواحق الضميرية تُلحق بالأفعال وحروف الجر والأسماء.",
        },
        examples: [
          {
            coptic: "-ⲓ",
            translit: "-i",
            meaning: { de: "mich/mir", en: "me", ar: "-ي (ني/لي)" },
          },
          {
            coptic: "-ⲕ",
            translit: "-k",
            meaning: { de: "dich/dir (m.)", en: "you (m.)", ar: "-ك (م)" },
          },
          {
            coptic: "-ϥ",
            translit: "-f",
            meaning: { de: "ihn/ihm", en: "him", ar: "-ه (له)" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲱⲛⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ",
          translit: "anok pe pi-ouoni em-pi-kosmos",
          meaning: {
            de: "Ich bin das Licht der Welt",
            en: "I am the light of the world",
            ar: "أنا نور العالم",
          },
        },
        spiritual: {
          bibleVerse: {
            de: '„Ich bin das Licht der Welt. Wer mir nachfolgt, wird nicht in der Finsternis wandeln.“',
            en: '"I am the light of the world. Whoever follows me will not walk in darkness."',
            ar: "«أنا نور العالم. من يتبعني فلا يمشي في الظلمة.»",
          },
          bibleReference: {
            de: "Johannes 8:12",
            en: "John 8:12",
            ar: "يوحنا ٨:١٢",
          },
          fatherQuote: {
            de: '„Christus ist das wahre Licht, das jeden Menschen erleuchtet.“',
            en: '"Christ is the true light that enlightens every man."',
            ar: "المسيح هو النور الحقيقي الذي ينير كل إنسان.",
          },
          fatherReference: {
            de: "Hl. Johannes Chrysostomus, Homilien über Johannes 8",
            en: "St. John Chrysostom, Homilies on John 8",
            ar: "القديس يوحنا الذهبي الفم، عظات على يوحنا ٨",
          },
        },
      },
    ],
  },

  "m3-l3": {
    id: "m3-l3",
    order: 3,
    moduleId: "m3",
    title: {
      de: "Der Nominalsatz",
      en: "The Nominal Sentence",
      ar: "الجملة الاسمية",
    },
    prerequisites: ["m3-l2"],
    quizId: "q3-3",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Bildung des Nominalsatzes",
          en: "Formation of the Nominal Sentence",
          ar: "تكوين الجملة الاسمية",
        },
        rule: {
          de: "Der Nominalsatz verbindet zwei Nomen mit der Kopula ⲡⲉ (m.), ⲧⲉ (f.), oder ⲛⲉ (pl.). Er bedeutet 'ist/sind'.",
          en: "The nominal sentence connects two nouns with the copula ⲡⲉ (m.), ⲧⲉ (f.), or ⲛⲉ (pl.). It means 'is/are'.",
          ar: "الجملة الاسمية تربط اسمين بالرابطة ⲡⲉ (م.)، ⲧⲉ (ف.)، أو ⲛⲉ (ج.). تعني 'هو/هي/هم'.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲛⲟⲩϯ ⲡⲉ ⲡⲓⲟⲩⲱⲛⲓ",
            translit: "pi-nouti pe pi-ouoni",
            meaning: { de: "Gott ist das Licht", en: "God is the light", ar: "الله هو النور" },
          },
          {
            coptic: "ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲧⲉ ϯⲙⲁⲩ",
            translit: "ti-ekklisia te ti-mau",
            meaning: { de: "Die Kirche ist die Mutter", en: "The Church is the mother", ar: "الكنيسة هي الأم" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Nominalsatz mit Pronomen",
          en: "Nominal Sentence with Pronouns",
          ar: "الجملة الاسمية مع الضمائر",
        },
        rule: {
          de: "Mit Pronomen: Pronomen + Kopula + Nomen. Die Kopula richtet sich nach dem Nomen.",
          en: "With pronouns: Pronoun + copula + noun. The copula agrees with the noun.",
          ar: "مع الضمائر: الضمير + الرابطة + الاسم. الرابطة توافق الاسم.",
        },
        examples: [
          {
            coptic: "ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲥⲟⲛ",
            translit: "anok pe pi-son",
            meaning: { de: "Ich bin der Bruder", en: "I am the brother", ar: "أنا الأخ" },
          },
          {
            coptic: "ⲛ̀ⲑⲟ ⲧⲉ ϯⲥⲱⲛⲓ",
            translit: "entho te ti-soni",
            meaning: { de: "Du bist die Schwester", en: "You are the sister", ar: "أنتِ الأخت" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Negation des Nominalsatzes",
          en: "Negation of the Nominal Sentence",
          ar: "نفي الجملة الاسمية",
        },
        rule: {
          de: "Negation mit ⲁⲛ am Ende: Subjekt + Kopula + Prädikat + ⲁⲛ.",
          en: "Negation with ⲁⲛ at the end: Subject + copula + predicate + ⲁⲛ.",
          ar: "النفي بـ ⲁⲛ في النهاية: الفاعل + الرابطة + الخبر + ⲁⲛ.",
        },
        examples: [
          {
            coptic: "ⲁⲛⲟⲕ ⲁⲛ ⲡⲉ ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ",
            translit: "anok an pe pi-refernobi",
            meaning: { de: "Ich bin nicht der Sünder", en: "I am not the sinner", ar: "لستُ الخاطئ" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲡⲉ ⲡⲉⲛⲛⲟⲩϯ",
          translit: "pi-khristos pe pen-nouti",
          meaning: {
            de: "Christus ist unser Gott",
            en: "Christ is our God",
            ar: "المسيح هو إلهنا",
          },
        }
      },
    ],
  },

  "m3-l4": {
    id: "m3-l4",
    order: 4,
    moduleId: "m3",
    title: {
      de: "Praktische Redewendungen: Vorstellung & Begrüßung",
      en: "Practical Phrases: Introduction & Greeting",
      ar: "عبارات عملية: التعريف والتحية",
    },
    prerequisites: ["m3-l3"],
    quizId: "q3-4",
    slides: [
      {
        type: "vocab",
        title: {
          de: "Grundlegende Begrüßungen",
          en: "Basic Greetings",
          ar: "تحيات أساسية",
        },
        items: [
          {
            coptic: "ⲭⲉⲣⲉ",
            translit: "khere",
            meaning: { de: "Sei gegrüßt / Hallo", en: "Greetings / Hello", ar: "السلام عليك / مرحباً" },
          },
          {
            coptic: "ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲣⲁⲛ",
            translit: "nim pe pek-ran",
            meaning: { de: "Wie heißt du? (m.)", en: "What is your name? (m.)", ar: "ما اسمك؟ (م)" },
          },
          {
            coptic: "ⲛⲓⲙ ⲡⲉ ⲡⲁⲣⲁⲛ",
            translit: "nim pe pa-ran",
            meaning: { de: "Wie heiße ich?", en: "What is my name?", ar: "ما اسمي؟" },
          },
          {
            coptic: "ⲡⲁⲣⲁⲛ ⲡⲉ ...",
            translit: "pa-ran pe ...",
            meaning: { de: "Mein Name ist ...", en: "My name is ...", ar: "اسمي هو ..." },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ",
          translit: "anok pe pi-mathētēs",
          meaning: { de: "Ich bin der Schüler", en: "I am the student", ar: "أنا التلميذ" },
        }
      },
      {
        type: "vocab",
        title: {
          de: "Familienmitglieder",
          en: "Family Members",
          ar: "أفراد العائلة",
        },
        items: [
          {
            coptic: "ⲡⲓⲓⲱⲧ",
            translit: "pi-iot",
            meaning: { de: "der Vater", en: "the father", ar: "الأب" },
          },
          {
            coptic: "ϯⲙⲁⲩ",
            translit: "ti-mau",
            meaning: { de: "die Mutter", en: "the mother", ar: "الأم" },
          },
          {
            coptic: "ⲡⲓⲥⲟⲛ",
            translit: "pi-son",
            meaning: { de: "der Bruder", en: "the brother", ar: "الأخ" },
          },
          {
            coptic: "ϯⲥⲱⲛⲓ",
            translit: "ti-soni",
            meaning: { de: "die Schwester", en: "the sister", ar: "الأخت" },
          },
          {
            coptic: "ⲡⲓϣⲏⲣⲓ",
            translit: "pi-shiri",
            meaning: { de: "das Kind / der Sohn", en: "the child / the son", ar: "الطفل / الابن" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲫⲁⲓ ⲡⲉ ⲡⲁⲓⲱⲧ",
          translit: "fai pe pa-iot",
          meaning: { de: "Dies ist mein Vater", en: "This is my father", ar: "هذا أبي" },
        }
      },
      {
        type: "conversation",
        title: {
          de: "Einfacher Dialog",
          en: "Simple Dialogue",
          ar: "حوار بسيط",
        },
        lines: [
          {
            speaker: { de: "Person 1", en: "Person 1", ar: "الشخص 1" },
            coptic: "ⲭⲉⲣⲉ, ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲣⲁⲛ?",
            translit: "khere, nim pe pek-ran?",
            meaning: { de: "Hallo, wie heißt du?", en: "Hello, what is your name?", ar: "مرحباً، ما اسمك؟" },
          },
          {
            speaker: { de: "Person 2", en: "Person 2", ar: "الشخص 2" },
            coptic: "ⲡⲁⲣⲁⲛ ⲡⲉ Ⲙⲁⲣⲕⲟⲥ",
            translit: "pa-ran pe Markos",
            meaning: { de: "Mein Name ist Markus", en: "My name is Mark", ar: "اسمي مرقس" },
          },
          {
            speaker: { de: "Person 1", en: "Person 1", ar: "الشخص 1" },
            coptic: "ⲁⲛⲟⲕ ⲡⲉ Ⲡⲁⲩⲗⲟⲥ",
            translit: "anok pe Paulos",
            meaning: { de: "Ich bin Paulus", en: "I am Paul", ar: "أنا بولس" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲁⲥⲟⲛ",
          translit: "enthok pe pa-son",
          meaning: { de: "Du bist mein Bruder", en: "You are my brother", ar: "أنت أخي" },
        }
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q3-1": {
    id: "q3-1",
    lessonId: "m3-l1",
    title: {
      de: "Quiz: Der bestimmte Artikel",
      en: "Quiz: The Definite Article",
      ar: "اختبار: أداة التعريف",
    },
    passScore: 70,
    questions: [
      {
        id: "q3-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Welcher Artikel wird für maskuline Substantive verwendet?",
          en: "Which article is used for masculine nouns?",
          ar: "ما الأداة المستخدمة للأسماء المذكرة؟",
        },
        options: [
          { de: "ⲡⲓ", en: "ⲡⲓ", ar: "ⲡⲓ" },
          { de: "ϯ", en: "ϯ", ar: "ϯ" },
          { de: "ⲛⲓ", en: "ⲛⲓ", ar: "ⲛⲓ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q3-1-2",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet "ϯⲉⲕⲕⲗⲏⲥⲓⲁ"?',
          en: 'What does "ϯⲉⲕⲕⲗⲏⲥⲓⲁ" mean?',
          ar: 'ماذا يعني "ϯⲉⲕⲕⲗⲏⲥⲓⲁ"؟',
        },
        options: [
          { de: "die Kirche", en: "the church", ar: "الكنيسة" },
          { de: "der Mann", en: "the man", ar: "الرجل" },
          { de: "das Licht", en: "the light", ar: "النور" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q3-1-3",
        type: "multiple-choice",
        questionText: {
          de: "Welcher Artikel wird für alle Pluralformen verwendet?",
          en: "Which article is used for all plural forms?",
          ar: "ما الأداة المستخدمة لجميع أشكال الجمع؟",
        },
        options: [
          { de: "ⲡⲓ", en: "ⲡⲓ", ar: "ⲡⲓ" },
          { de: "ϯ", en: "ϯ", ar: "ϯ" },
          { de: "ⲛⲓ", en: "ⲛⲓ", ar: "ⲛⲓ" },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "q3-1-4",
        type: "multiple-choice",
        questionText: {
          de: "Was ist der unbestimmte Artikel im Koptischen?",
          en: "What is the indefinite article in Coptic?",
          ar: "ما أداة التنكير في القبطية؟",
        },
        options: [
          { de: "ⲟⲩ", en: "ⲟⲩ", ar: "ⲟⲩ" },
          { de: "ⲡⲓ", en: "ⲡⲓ", ar: "ⲡⲓ" },
          { de: "ⲛⲓ", en: "ⲛⲓ", ar: "ⲛⲓ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q3-2": {
    id: "q3-2",
    lessonId: "m3-l2",
    title: {
      de: "Quiz: Personalpronomen",
      en: "Quiz: Personal Pronouns",
      ar: "اختبار: الضمائر الشخصية",
    },
    passScore: 70,
    questions: [
      {
        id: "q3-2-1",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet "ⲁⲛⲟⲕ"?',
          en: 'What does "ⲁⲛⲟⲕ" mean?',
          ar: 'ماذا يعني "ⲁⲛⲟⲕ"؟',
        },
        options: [
          { de: "ich", en: "I", ar: "أنا" },
          { de: "du", en: "you", ar: "أنت" },
          { de: "er", en: "he", ar: "هو" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q3-2-2",
        type: "multiple-choice",
        questionText: {
          de: "Welches Präfix wird für 'er' verwendet?",
          en: "Which prefix is used for 'he'?",
          ar: "ما البادئة المستخدمة لـ 'هو'؟",
        },
        options: [
          { de: "ϯ-", en: "ϯ-", ar: "ϯ-" },
          { de: "ⲕ̀-", en: "ⲕ̀-", ar: "ⲕ̀-" },
          { de: "ϥ̀-", en: "ϥ̀-", ar: "ϥ̀-" },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "q3-2-3",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet "ⲛ̀ⲑⲱⲟⲩ"?',
          en: 'What does "ⲛ̀ⲑⲱⲟⲩ" mean?',
          ar: 'ماذا يعني "ⲛ̀ⲑⲱⲟⲩ"؟',
        },
        options: [
          { de: "wir", en: "we", ar: "نحن" },
          { de: "ihr", en: "you (pl.)", ar: "أنتم" },
          { de: "sie (Plural)", en: "they", ar: "هم" },
        ],
        correctAnswerIndex: 2,
      },
    ],
  },

  "q3-3": {
    id: "q3-3",
    lessonId: "m3-l3",
    title: {
      de: "Quiz: Der Nominalsatz",
      en: "Quiz: The Nominal Sentence",
      ar: "اختبار: الجملة الاسمية",
    },
    passScore: 70,
    questions: [
      {
        id: "q3-3-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Kopula wird mit maskulinen Substantiven verwendet?",
          en: "Which copula is used with masculine nouns?",
          ar: "ما الرابطة المستخدمة مع الأسماء المذكرة؟",
        },
        options: [
          { de: "ⲡⲉ", en: "ⲡⲉ", ar: "ⲡⲉ" },
          { de: "ⲧⲉ", en: "ⲧⲉ", ar: "ⲧⲉ" },
          { de: "ⲛⲉ", en: "ⲛⲉ", ar: "ⲛⲉ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q3-3-2",
        type: "multiple-choice",
        questionText: {
          de: "Wie negiert man einen Nominalsatz?",
          en: "How do you negate a nominal sentence?",
          ar: "كيف تنفي جملة اسمية؟",
        },
        options: [
          { de: "mit ⲁⲛ am Ende", en: "with ⲁⲛ at the end", ar: "بـ ⲁⲛ في النهاية" },
          { de: "mit ⲙ̀ am Anfang", en: "with ⲙ̀ at the beginning", ar: "بـ ⲙ̀ في البداية" },
          { de: "mit ⲛ̀ vor dem Verb", en: "with ⲛ̀ before the verb", ar: "بـ ⲛ̀ قبل الفعل" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
  "q3-4": {
    id: "q3-4",
    lessonId: "m3-l4",
    title: {
      de: "Quiz: Praktische Redewendungen",
      en: "Quiz: Practical Phrases",
      ar: "اختبار: عبارات عملية",
    },
    passScore: 70,
    questions: [
      {
        id: "q3-4-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie sagt man \"Hallo\" auf Koptisch?",
          en: "How do you say \"Hello\" in Coptic?",
          ar: "كيف تقول \"مرحباً\" بالقبطية؟",
        },
        options: [
          { de: "ⲭⲉⲣⲉ", en: "ⲭⲉⲣⲉ", ar: "ⲭⲉⲣⲉ" },
          { de: "ⲛⲓⲙ", en: "ⲛⲓⲙ", ar: "ⲛⲓⲙ" },
          { de: "ⲁⲛⲟⲕ", en: "ⲁⲛⲟⲕ", ar: "ⲁⲛⲟⲕ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q3-4-2",
        type: "multiple-choice",
        questionText: {
          de: "Was bedeutet \"ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲣⲁⲛ\"?",
          en: "What does \"ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲣⲁⲛ\" mean?",
          ar: "ماذا يعني \"ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲣⲁⲛ\"؟",
        },
        options: [
          { de: "Wie heißt du?", en: "What is your name?", ar: "ما اسمك؟" },
          { de: "Ich bin Markus", en: "I am Mark", ar: "أنا مرقس" },
          { de: "Dies ist mein Vater", en: "This is my father", ar: "هذا أبي" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q3-4-3",
        type: "multiple-choice",
        questionText: {
          de: "Wie sagt man \"der Vater\" auf Koptisch?",
          en: "How do you say \"the father\" in Coptic?",
          ar: "كيف تقول \"الأب\" بالقبطية؟",
        },
        options: [
          { de: "ⲡⲓⲓⲱⲧ", en: "ⲡⲓⲓⲱⲧ", ar: "ⲡⲓⲓⲱⲧ" },
          { de: "ϯⲙⲁⲩ", en: "ϯⲙⲁⲩ", ar: "ϯⲙⲁⲩ" },
          { de: "ⲡⲓⲥⲟⲛ", en: "ⲡⲓⲥⲟⲛ", ar: "ⲡⲓⲥⲟⲛ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
};
