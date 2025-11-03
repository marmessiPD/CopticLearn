// Module 6 – Präpositionen (Bohairisch) — Comprehensive merged module
// Merged from previous modules 6, 7, 8
// Uses pure Bohairic rules and examples. Bible: Schlachter 2000.
// Cross-checked with Younan's "So you want to learn Coptic?"

import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  // Lesson 1: Location Prepositions
  'm6-l1': {
    id: 'm6-l1',
    order: 1,
    moduleId: 'm6',
    title: {
      de: 'Ortspräpositionen: ϧⲉⲛ · ϩⲛ̄/ϩⲙ̄ · ϩⲓ · ⲛ̀ϩⲏⲧ',
      en: 'Location Prepositions: ϧⲉⲛ · ϩⲛ̄/ϩⲙ̄ · ϩⲓ · ⲛ̀ϩⲏⲧ',
      ar: 'حروف الجر المكانية: ϧⲉⲛ · ϩⲛ̄/ϩⲙ̄ · ϩⲓ · ⲛ̀ϩⲏⲧ'
    },
    prerequisites: ['m3-l3'],
    quizId: 'q6-1',
    slides: [
      {
        type: 'grammar',
        title: {
          de: 'ϧⲉⲛ = „in" (Ort/Zustand)',
          en: 'ϧⲉⲛ = "in" (location/state)',
          ar: 'ϧⲉⲛ = "في" (مكان/حالة)'
        },
        rule: {
          de: 'ϧⲉⲛ markiert Ort oder Zustand „in". Vor Vokal oft ϧⲓⲛ. Allgemeinste Form für „in".',
          en: 'ϧⲉⲛ marks location or state "in". Before vowel often ϧⲓⲛ. Most general form for "in".',
          ar: 'ϧⲉⲛ تدل على المكان أو الحالة "في". قبل حركة غالبًا ϧⲓⲛ.'
        },
        examples: [
          { coptic: 'ϧⲉⲛ ⲡ̀ⲏⲓ', translit: 'khen peei', meaning: { de: 'im Haus', en: 'in the house', ar: 'في البيت' } },
          { coptic: 'ϧⲉⲛ ⲡⲓϩⲏⲧ', translit: 'khen pi-heet', meaning: { de: 'im Herzen', en: 'in the heart', ar: 'في القلب' } },
          { coptic: 'ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ ϧⲉⲛ Ⲓ̅ⲗ̅ⲏ̅ⲙ', translit: 'ni-apostolos khen Ierē̄m', meaning: { de: 'die Apostel in Jerusalem', en: 'the apostles in Jerusalem', ar: 'الرسل في أورشليم' } }
        ]
      },
      {
        type: 'grammar',
        title: {
          de: 'ϩⲛ̄ / ϩⲙ̄ = „in" (mit Labialregel)',
          en: 'ϩⲛ̄ / ϩⲙ̄ = "in" (with labial rule)',
          ar: 'ϩⲛ̄ / ϩⲙ̄ = "في" (مع قاعدة الشفوية)'
        },
        rule: {
          de: 'Bohairisch: Vor nicht-labialen Anfangsbuchstaben steht ϩⲛ̄, vor Labialen ⲃ, ⲙ, ϥ, ⲫ steht ϩⲙ̄.',
          en: 'Bohairic: Use ϩⲛ̄ before non-labials; use ϩⲙ̄ before labials ⲃ, ⲙ, ϥ, ⲫ.',
          ar: 'البحيري: ϩⲛ̄ قبل غير الشفوية؛ ϩⲙ̄ قبل الشفوية ⲃ، ⲙ، ϥ، ⲫ.'
        },
        examples: [
          { coptic: 'ϩⲛ̄ ⲡ̀ⲏⲓ', translit: 'hen peei', meaning: { de: 'im Haus', en: 'in the house', ar: 'في البيت' } },
          { coptic: 'ϩⲙ̄ ⲡ̀ⲙⲁ', translit: 'hem pma', meaning: { de: 'am Ort', en: 'at the place', ar: 'في المكان' } },
          { coptic: 'ϩⲛ̄ ⲧ̀ⲕⲏⲙⲉ', translit: 'hen tkēme', meaning: { de: 'in Ägypten', en: 'in Egypt', ar: 'في مصر' } },
          { coptic: 'ϩⲙ̄ ⲡ̀ϥⲱⲓ', translit: 'hem pfōi', meaning: { de: 'im Herzen', en: 'in the heart', ar: 'في القلب' } }
        ]
      },
      {
        type: 'grammar',
        title: {
          de: 'ϩⲓ = „auf" (Kontakt)',
          en: 'ϩⲓ = "on" (contact)',
          ar: 'ϩⲓ = "على" (تماس)'
        },
        rule: {
          de: 'ϩⲓ drückt Lage „auf" mit Kontakt aus. Oft ϩⲓϫⲉⲛ „auf der Oberfläche von".',
          en: 'ϩⲓ expresses "on" with contact. Often ϩⲓϫⲉⲛ "on the surface of".',
          ar: 'ϩⲓ تفيد معنى "على" مع تماس. غالبًا ϩⲓϫⲉⲛ "على سطح".'
        },
        examples: [
          { coptic: 'ϩⲓ ⲡⲓⲙⲱⲓⲧ', translit: 'hi pi-mōit', meaning: { de: 'auf dem Weg', en: 'on the road', ar: 'على الطريق' } },
          { coptic: 'ϩⲓϫⲉⲛ ⲡⲓⲧⲣⲁⲡⲉⲍⲁ', translit: 'hijen pi-trapeza', meaning: { de: 'auf dem Tisch', en: 'on the table', ar: 'على المائدة' } },
          { coptic: 'ⲡⲉⲛⲥⲱⲧⲏⲣ ϩⲓ ⲡⲓⲥⲧⲁⲩⲣⲟⲥ', translit: 'pen-sōtēr hi pi-stauros', meaning: { de: 'unser Retter am Kreuz', en: 'our Savior on the cross', ar: 'مخلّصنا على الصليب' } }
        ]
      },
      {
        type: 'grammar',
        title: {
          de: 'ⲛ̀ϩⲏⲧ = „unter"',
          en: 'ⲛ̀ϩⲏⲧ = "under"',
          ar: 'ⲛ̀ϩⲏⲧ = "تحت"'
        },
        rule: {
          de: 'Lage „unter"; oft mit bestimmtem Artikel.',
          en: 'Location "under"; often with definite article.',
          ar: 'تفيد المكان "تحت".'
        },
        examples: [
          { coptic: 'ⲛ̀ϩⲏⲧ ⲡ̀ⲇⲏⲗⲟⲥ', translit: 'enhēt p-dēlos', meaning: { de: 'unter dem Baum', en: 'under the tree', ar: 'تحت الشجرة' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ϩⲛ̄ ⲡ̀ⲙⲏⲓ ⲛ̀ⲧⲉ ⲡ̀ⲛⲟⲩⲧⲉ',
          translit: 'hen pmee ente pnoute',
          meaning: { de: 'im Haus Gottes', en: 'in the house of God', ar: 'في بيت الله' }
        }
      }
    ]
  },

  // Lesson 2: Direction Prepositions
  'm6-l2': {
    id: 'm6-l2',
    order: 2,
    moduleId: 'm6',
    title: {
      de: 'Richtungspräpositionen: ⲉ · ⲉ̀ · ⲉϩⲣⲁⲓ · ⲉⲃⲟⲗ · ⲛⲁ',
      en: 'Direction Prepositions: ⲉ · ⲉ̀ · ⲉϩⲣⲁⲓ · ⲉⲃⲟⲗ · ⲛⲁ',
      ar: 'حروف الجر الاتجاهية: ⲉ · ⲉ̀ · ⲉϩⲣⲁⲓ · ⲉⲃⲟⲗ · ⲛⲁ'
    },
    prerequisites: ['m6-l1'],
    quizId: 'q6-2',
    slides: [
      {
        type: 'grammar',
        title: { de: 'ⲉ / ⲉ̀ = „zu, nach; bei"', en: 'ⲉ / ⲉ̀ = "to; at"', ar: 'ⲉ / ⲉ̀ = "إلى؛ عند"' },
        rule: {
          de: 'ⲉ/ⲉ̀ markiert Ziel/Empfänger: Bewegung „zu", Präsenz „bei". Mit Personen oft als Dativübersetzung.',
          en: 'ⲉ/ⲉ̀ marks goal/recipient: motion "to", presence "at/with". With persons often dative-like.',
          ar: 'ⲉ/ⲉ̀ تدل على الغاية أو المتلقي. مع الأشخاص كالداتيف.'
        },
        examples: [
          { coptic: 'ⲙⲟϣⲓ ⲉ ⲡ̀ⲏⲓ', translit: 'moshi e peei', meaning: { de: 'ins Haus gehen', en: 'go to the house', ar: 'اذهب إلى البيت' } },
          { coptic: 'ⲥⲱⲧⲉⲙ ⲉ ⲡ̀ⲗⲁⲟⲥ', translit: 'sōtem e plaos', meaning: { de: 'dem Volk zuhören', en: 'listen to the people', ar: 'استمع إلى الشعب' } },
          { coptic: 'ⲉ̀ ⲡ̀ⲓⲕⲟⲓⲛⲱⲛⲓⲟⲛ', translit: 'e-pi-koinonion', meaning: { de: 'zur Gemeinschaft', en: 'to communion', ar: 'إلى الشركة' } },
          { coptic: 'ⲉ̀ ⲡ̀ⲛⲟⲩϯ', translit: 'e-p-nouti', meaning: { de: 'zu Gott', en: 'to God', ar: 'إلى الله' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲉϩⲣⲁⲓ = „auf, über"', en: 'ⲉϩⲣⲁⲓ = "on, upon"', ar: 'ⲉϩⲣⲁⲓ = "على"' },
        rule: {
          de: 'Drückt Lage „auf" mit Kontakt aus.',
          en: 'Expresses "on/upon" with contact.',
          ar: 'تفيد معنى "على" مع تماس.'
        },
        examples: [
          { coptic: 'ⲁⲛⲟⲕ ⲛⲁⲓ ⲉϩⲣⲁⲓ ⲡ̀ⲧⲣⲁⲡⲉⲍⲁ', translit: 'anok nai ehrai p-trapeza', meaning: { de: 'ich lege dies auf den Tisch', en: 'I put this on the table', ar: 'أضع هذا على المائدة' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲉⲃⲟⲗ = „hinaus/aus"', en: 'ⲉⲃⲟⲗ = "out (of)"', ar: 'ⲉⲃⲟⲗ = "إلى الخارج/من"' },
        rule: {
          de: 'Richtung „nach außen" oder „aus … heraus"; oft mit ϩⲛ̄/ϩⲙ̄ kombiniert.',
          en: 'Motion outward or out of; often combines with ϩⲛ̄/ϩⲙ̄.',
          ar: 'حركة إلى الخارج أو من الداخل؛ غالبًا مع ϩⲛ̄/ϩⲙ̄.'
        },
        examples: [
          { coptic: 'ⲉⲃⲟⲗ ϩⲛ̄ ⲡ̀ⲏⲓ', translit: 'ebol hen peei', meaning: { de: 'aus dem Haus hinaus', en: 'out of the house', ar: 'إلى خارج البيت' } },
          { coptic: 'ⲡⲉⲕⲣⲁⲛ ⲉⲃⲟⲗ', translit: 'pekran ebol', meaning: { de: 'dein Name erschallt heraus', en: 'your name goes out', ar: 'اسمك يخرج' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲛⲁ = „an/zu" (Dativ)', en: 'ⲛⲁ = "to/for" (dative)', ar: 'ⲛⲁ = "إلى/لـ"' },
        rule: {
          de: 'ⲛⲁ markiert Empfänger/Richtung: „geben an", „sprechen zu", „gehen zu".',
          en: 'ⲛⲁ marks recipient/direction: "give to", "speak to", "go to".',
          ar: 'ⲛⲁ لبيان المتلقّي/الاتجاه.'
        },
        examples: [
          { coptic: 'ϯ ⲛⲁ ⲡ̀ⲣⲱⲙⲓ', translit: 'ti na ep-romi', meaning: { de: 'ich gebe dem Mann', en: 'I give to the man', ar: 'أعطي الرجل' } },
          { coptic: 'ⲥⲁϫⲓ ⲛⲁ ⲡⲓⲟⲩⲱⲧ', translit: 'saji na pi-ouot', meaning: { de: 'sprich zum Vater', en: 'speak to the father', ar: 'تكلّم إلى الأب' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲧⲉⲛⲥⲱⲧⲉⲙ ⲉ ⲡⲓⲗⲟⲅⲟⲥ',
          translit: 'ten-sōtem e pi-logos',
          meaning: { de: 'wir hören auf das Wort', en: 'we listen to the Word', ar: 'نسمع للكلمة' }
        }
      }
    ]
  },

  // Lesson 3: Relational Prepositions
  'm6-l3': {
    id: 'm6-l3',
    order: 3,
    moduleId: 'm6',
    title: {
      de: 'Beziehungspräpositionen: ⲛⲉⲙ · ⲛ̀ⲥⲁ · ⲛ̀ⲥⲟⲩ · ⲉⲑⲃⲉ · ⲛ̀/ⲙ̀',
      en: 'Relational Prepositions: ⲛⲉⲙ · ⲛ̀ⲥⲁ · ⲛ̀ⲥⲟⲩ · ⲉⲑⲃⲉ · ⲛ̀/ⲙ̀',
      ar: 'حروف الجر العلائقية: ⲛⲉⲙ · ⲛ̀ⲥⲁ · ⲛ̀ⲥⲟⲩ · ⲉⲑⲃⲉ · ⲛ̀/ⲙ̀'
    },
    prerequisites: ['m6-l2'],
    quizId: 'q6-3',
    slides: [
      {
        type: 'grammar',
        title: { de: 'ⲛⲉⲙ = „mit/und"', en: 'ⲛⲉⲙ = "with/and"', ar: 'ⲛⲉⲙ = "مع/و"' },
        rule: {
          de: 'ⲛⲉⲙ verbindet Personen/Sachen: „mit" oder koordinierend „und".',
          en: 'ⲛⲉⲙ links people/things: "with" or coordinating "and".',
          ar: 'ⲛⲉⲙ للمعيّة أو العطف.'
        },
        examples: [
          { coptic: 'ⲙⲱⲟⲩ ⲛⲉⲙ ⲙⲟⲩⲓ', translit: 'mwou nem moui', meaning: { de: 'Wasser und Wein', en: 'water and wine', ar: 'ماء وخمر' } },
          { coptic: 'ⲙⲱⲓ ⲛⲉⲙ ⲡⲓⲙⲱⲓⲧ', translit: 'moi nem pi-moit', meaning: { de: 'ich gehe mit dem Weggefährten', en: 'I go with the companion', ar: 'أسير مع الرفيق' } },
          { coptic: 'ⲛ̀ⲛⲓⲉⲣⲟ ⲛⲉⲙ ⲡⲓⲗⲁⲟⲥ', translit: 'enniero nem pi-laos', meaning: { de: 'mit den Priestern und dem Volk', en: 'with the priests and the people', ar: 'مع الكهنة والشعب' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲛ̀ⲥⲁ = „nach, hinter"', en: 'ⲛ̀ⲥⲁ = "after, behind"', ar: 'ⲛ̀ⲥⲁ = "بعد/خلف"' },
        rule: {
          de: 'Zeitlich „nach", räumlich „hinter"; mit Nomen oder Person.',
          en: 'Temporal "after", spatial "behind"; with nouns or persons.',
          ar: 'زمنيًا "بعد"، مكانيًا "خلف".'
        },
        examples: [
          { coptic: 'ⲛ̀ⲥⲁ ⲡ̀ⲥⲁϫⲓ', translit: 'ensa p-saji', meaning: { de: 'nach dem Wort', en: 'after the word', ar: 'بعد الكلمة' } },
          { coptic: 'ⲛ̀ⲥⲁ ⲡ̀ⲣⲱⲙⲓ', translit: 'ensa p-romi', meaning: { de: 'hinter dem Mann', en: 'behind the man', ar: 'خلف الرجل' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲛ̀ⲥⲟⲩ / ⲁⲧⲉⲛ = „ohne"', en: 'ⲛ̀ⲥⲟⲩ / ⲁⲧⲉⲛ = "without"', ar: 'ⲛ̀ⲥⲟⲩ / ⲁⲧⲉⲛ = "بدون"' },
        rule: {
          de: 'Verneinter Begleitstand: „ohne …"',
          en: 'Negative accompaniment: "without …"',
          ar: 'مرافقة منفية: "بدون ..."'
        },
        examples: [
          { coptic: 'ⲛ̀ⲥⲟⲩ ⲡ̀ⲥⲁϫⲓ', translit: 'ensou p-saji', meaning: { de: 'ohne das Wort', en: 'without the word', ar: 'بدون الكلمة' } },
          { coptic: 'ⲛ̀ⲥⲟⲩ ⲧ̀ⲙⲉⲧⲙⲁⲕϯ', translit: 'ensou t-metmakti', meaning: { de: 'ohne Demut', en: 'without humility', ar: 'بدون تواضع' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲉⲑⲃⲉ / ⲉⲓⲃⲉ = „wegen"', en: 'ⲉⲑⲃⲉ / ⲉⲓⲃⲉ = "because of"', ar: 'ⲉⲑⲃⲉ / ⲉⲓⲃⲉ = "بسبب"' },
        rule: {
          de: 'Gibt den Grund an: „wegen", „aufgrund von".',
          en: 'Indicates reason: "because of", "on account of".',
          ar: 'تدل على السبب: "بسبب"، "لأجل".'
        },
        examples: [
          { coptic: 'ⲉⲓⲃⲉ ⲡⲓⲡⲓⲥⲧⲉⲩⲙⲁ', translit: 'eibe pi-pisteuma', meaning: { de: 'wegen des Glaubens', en: 'because of the faith', ar: 'بسبب الإيمان' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲛ̀ / ⲙ̀ / ⲛ̀ⲧⲉ = Genitiv', en: 'ⲛ̀ / ⲙ̀ / ⲛ̀ⲧⲉ = Genitive', ar: 'ⲛ̀ / ⲙ̀ / ⲛ̀ⲧⲉ = ملكية' },
        rule: {
          de: 'ⲛ̀ markiert Genitiv „von" und direktes Objekt; vor Labialen (ⲃⲙⲫⲡ) wird ⲙ̀. Längere Form: ⲛ̀ⲧⲉ.',
          en: 'ⲛ̀ marks genitive "of" and DO; before labials (ⲃⲙⲫⲡ) use ⲙ̀. Longer form: ⲛ̀ⲧⲉ.',
          ar: 'ⲛ̀ للملكية والمفعول؛ قبل الشفوية نستخدم ⲙ̀. صيغة أطول: ⲛ̀ⲧⲉ.'
        },
        examples: [
          { coptic: 'ⲡ̀ⲣⲁⲛ ⲛ̀Ⲫⲛⲟⲩϯ', translit: 'ep-ran en-Efnouti', meaning: { de: 'der Name Gottes', en: 'the name of God', ar: 'اسم الله' } },
          { coptic: 'ϯⲥⲱⲧⲉⲙ ⲙ̀ⲡ̀ⲥⲁϫⲓ', translit: 'ti-sotem em-psaji', meaning: { de: 'ich höre das Wort', en: 'I hear the word', ar: 'أسمع الكلمة' } },
          { coptic: 'ⲡ̀ⲙⲏⲓ ⲛ̀ⲧⲉ ⲡ̀ⲛⲟⲩⲧⲉ', translit: 'p-mee ente p-noute', meaning: { de: 'das Haus Gottes', en: 'the house of God', ar: 'بيت الله' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲙⲁⲣⲉⲛⲣⲁⲥⲓ ϧⲉⲛ ⲡⲓⲕⲁⲗⲱⲥ ⲛⲉⲙ ⲛⲓⲥ̀ⲛⲏⲟⲩ',
          translit: 'maren-rasi khen pi-kalos nem ni-sneo-u',
          meaning: { de: 'lasst uns in Freude mit den Geschwistern jubeln', en: 'let us rejoice in joy with the siblings', ar: 'لنفرح بالفرح مع الإخوة' }
        }
      }
    ]
  },

  // Lesson 4: Pronominal Forms & Advanced
  'm6-l4': {
    id: 'm6-l4',
    order: 4,
    moduleId: 'm6',
    title: {
      de: 'Pronominale Formen & Fortgeschrittenes',
      en: 'Pronominal Forms & Advanced',
      ar: 'الصيغ الضميرية والمتقدم'
    },
    prerequisites: ['m6-l3'],
    quizId: 'q6-4',
    slides: [
      {
        type: 'grammar',
        title: {
          de: 'Pronominale Präpositionen',
          en: 'Pronominal Prepositions',
          ar: 'حروف الجر الضميرية'
        },
        rule: {
          de: 'Einfache Präpositionen besitzen pronominale Endungen. Verwende die Pronomenform, wenn das Objekt ein Pronomen ist.',
          en: 'Simple prepositions take pronominal endings. Use pronoun form when the object is a pronoun.',
          ar: 'لدى الحروف البسيطة صيغ ضميرية. استعملها مع الضمير.'
        },
        examples: [
          { coptic: 'ⲉ̀ⲣⲟⲓ / ⲉ̀ⲣⲟⲕ / ⲉ̀ⲣⲟϥ / ⲉ̀ⲣⲟⲛ', translit: 'e-roi / e-rok / e-rof / e-ron', meaning: { de: 'zu mir/dir/ihm/uns', en: 'to me/you/him/us', ar: 'إليّ/إليك/إليه/إلينا' } },
          { coptic: 'ⲛ̀ⲣⲟⲥ / ⲛ̀ⲣⲟⲩ', translit: 'en-ros / en-rou', meaning: { de: 'mit ihr / mit ihnen', en: 'with her / with them', ar: 'معها / معهم' } },
          { coptic: 'ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ', translit: 'smou e-rof', meaning: { de: 'segne ihn', en: 'bless him', ar: 'باركه' } }
        ]
      },
      {
        type: 'grammar',
        title: {
          de: 'ⲥⲁ + Konjunktiv (Limitativ)',
          en: 'ⲥⲁ + Subjunctive (Limitative)',
          ar: 'ⲥⲁ + المضارع الرغبي'
        },
        rule: {
          de: 'ⲥⲁ „zu/bis" + Konjunktiv ergibt „bis dass". Kurzform durch Wegfall von ⲛ: ⲥⲁⲧⲉⲕⲓ = ⲥⲁ ⲛⲧⲉⲕⲓ „bis du kommst".',
          en: 'ⲥⲁ "to/till" + subjunctive yields "until…". Short form by dropping ⲛ: ⲥⲁⲧⲉⲕⲓ = ⲥⲁ ⲛⲧⲉⲕⲓ.',
          ar: 'ⲥⲁ + صيغة الرغبة تعطي «حتى». صيغة قصيرة بحذف ⲛ.'
        },
        examples: [
          { coptic: 'ⲟⲩⲟϩ ⲙ̀ⲡⲉϥⲥⲟⲩⲟⲛⲥ ⲥⲁⲧⲉⲥⲙⲓⲥⲓ ⲙ̀ⲡⲓϣⲏⲣⲓ', translit: 'ouoh mpef-souōns sate-smisi em-pi-sheri', meaning: { de: 'und er erkannte sie nicht, bis sie den Sohn gebar', en: 'and he did not know her until she bore the Son', ar: 'ولم يعرفها حتى ولدت الابن' } },
          { coptic: 'ⲥⲁⲧⲉⲛⲧⲱⲟⲩⲛ ⲉ̀ⲡⲓⲉⲕⲕⲗⲏⲥⲓⲁ', translit: 'saten-tōoun e pi-ekklēsia', meaning: { de: 'bis ihr in die Kirche eintretet', en: 'until you enter the church', ar: 'حتى تدخلوا الكنيسة' } }
        ]
      },
      {
        type: 'grammar',
        title: {
          de: 'Zusammengesetzte Präpositionen',
          en: 'Compound Prepositions',
          ar: 'حروف الجر المركبة'
        },
        rule: {
          de: 'Viele Präpositionen kombinieren: ⲉⲃⲟⲗ ϩⲛ̄ „aus … heraus", ⲉϩⲣⲁⲓ ⲉ̀ „hinauf zu".',
          en: 'Many prepositions combine: ⲉⲃⲟⲗ ϩⲛ̄ "out of", ⲉϩⲣⲁⲓ ⲉ̀ "up to".',
          ar: 'حروف جر عديدة تتركب: ⲉⲃⲟⲗ ϩⲛ̄ «خارجًا من»، ⲉϩⲣⲁⲓ ⲉ̀ «صعودًا إلى».'
        },
        examples: [
          { coptic: 'ⲉⲃⲟⲗ ϩⲛ̄ ⲧ̀ⲕⲏⲙⲉ', translit: 'ebol hen t-kēme', meaning: { de: 'aus Ägypten heraus', en: 'out of Egypt', ar: 'خارجًا من مصر' } },
          { coptic: 'ⲉϩⲣⲁⲓ ⲉ̀ ⲡⲓⲧⲟⲡⲟⲥ', translit: 'ehrai e pi-topos', meaning: { de: 'hinauf zum Ort', en: 'up to the place', ar: 'صعودًا إلى المكان' } }
        ]
      },
      {
        type: 'grammar',
        title: {
          de: 'Nominalsatz mit Präposition',
          en: 'Nominal Clause with Preposition',
          ar: 'جملة اسمية مع حرف جر'
        },
        rule: {
          de: 'Nominalsätze mit Präposition benötigen kein „ist". Struktur: [Nomen] + [Präposition + Nomen].',
          en: 'Nominal clauses with a preposition omit "is". Structure: [Noun] + [Preposition + Noun].',
          ar: 'الجمل الاسمية مع حرف جر بلا فعل "يكون".'
        },
        examples: [
          { coptic: 'ⲡⲓⲥⲱⲧⲏⲣ ϩⲓⲧⲉⲛ ⲡⲓⲉⲕⲕⲗⲏⲥⲓⲁ', translit: 'pi-sōtēr hiten pi-ekklēsia', meaning: { de: 'der Retter in der Kirche', en: 'the Savior in the church', ar: 'المخلّص في الكنيسة' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲛ ⲛⲉⲙ ⲡⲓⲥⲱⲧⲏⲣ',
          translit: 'smou e-ron nem pi-sōtēr',
          meaning: { de: 'segne uns mit dem Retter', en: 'bless us with the Savior', ar: 'باركنا مع المخلّص' }
        }
      }
    ]
  },

  // Lesson 5: Practical Phrases - Location & Directions
  'm6-l5': {
    id: 'm6-l5',
    order: 5,
    moduleId: 'm6',
    title: {
      de: 'Praktische Redewendungen: Ort & Richtung',
      en: 'Practical Phrases: Location & Directions',
      ar: 'عبارات عملية: المكان والاتجاه'
    },
    prerequisites: ['m6-l4'],
    quizId: 'q6-5',
    slides: [
      {
        type: 'grammar',
        title: {
          de: 'Fragen nach dem Ort',
          en: 'Asking About Location',
          ar: 'السؤال عن المكان'
        },
        rule: {
          de: 'Verwende ⲁⲩⲑⲱⲛ „wo?" mit der entsprechenden Ortspräposition.',
          en: 'Use ⲁⲩⲑⲱⲛ "where?" with the appropriate location preposition.',
          ar: 'استخدم ⲁⲩⲑⲱⲛ «أين؟» مع حرف الجر المكاني المناسب.'
        },
        examples: [
          { coptic: 'Ⲁⲩⲑⲱⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ?', translit: 'Authōn ti-ekklēsia?', meaning: { de: 'Wo ist die Kirche?', en: 'Where is the church?', ar: 'أين الكنيسة؟' } },
          { coptic: 'Ⲁⲩⲑⲱⲛ ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ?', translit: 'Authōn pima en-ershoushi?', meaning: { de: 'Wo ist das Heiligtum?', en: 'Where is the sanctuary?', ar: 'أين المقدس؟' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'Ϯⲉⲕⲕⲗⲏⲥⲓⲁ ϧⲉⲛ ⲡⲁⲓⲙⲱⲓⲧ',
          translit: 'Ti-ekklēsia khen pai-mōit',
          meaning: { de: 'Die Kirche ist in dieser Straße', en: 'The church is on this street', ar: 'الكنيسة في هذا الشارع' }
        }
      },
      {
        type: 'grammar',
        title: {
          de: 'Wegbeschreibungen geben',
          en: 'Giving Directions',
          ar: 'إعطاء الاتجاهات'
        },
        rule: {
          de: 'Verwende Bewegungsverben mit Richtungspräpositionen.',
          en: 'Use motion verbs with direction prepositions.',
          ar: 'استخدم أفعال الحركة مع حروف الجر الاتجاهية.'
        },
        examples: [
          { coptic: 'Ⲙⲟϣⲓ ⲛⲓⲥⲁϫ', translit: 'Moshi nisaj', meaning: { de: 'Geh geradeaus', en: 'Go straight', ar: 'اذهب مباشرة' } },
          { coptic: 'Ⲕⲱϯ ⲉ̀ⲟⲩⲓⲛⲁⲙ', translit: 'Kōti e-ouinam', meaning: { de: 'Dreh nach rechts', en: 'Turn right', ar: 'انعطف يمينًا' } },
          { coptic: 'Ⲕⲱϯ ⲉ̀ϩⲓⲃⲟⲩⲣ', translit: 'Kōti e-hibour', meaning: { de: 'Dreh nach links', en: 'Turn left', ar: 'انعطف يسارًا' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'Ⲙⲟϣⲓ ⲛⲓⲥⲁϫ, ⲓⲧⲁ ⲕⲱϯ ⲉ̀ⲟⲩⲓⲛⲁⲙ',
          translit: 'Moshi nisaj, ita kōti e-ouinam',
          meaning: { de: 'Geh geradeaus, dann dreh nach rechts', en: 'Go straight, then turn right', ar: 'اذهب مباشرة، ثم انعطف يمينًا' }
        }
      },
      {
        type: 'grammar',
        title: {
          de: 'Liturgische Ortsbegriffe',
          en: 'Liturgical Location Terms',
          ar: 'مصطلحات مكانية طقسية'
        },
        rule: {
          de: 'Wichtige Orte in der koptischen Kirche.',
          en: 'Important places in the Coptic church.',
          ar: 'أماكن مهمة في الكنيسة القبطية.'
        },
        examples: [
          { coptic: 'Ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ', translit: 'Pima en-ershoushi', meaning: { de: 'Das Heiligtum', en: 'The sanctuary', ar: 'المقدس' } },
          { coptic: 'Ⲡⲓⲙⲁⲛ̀ⲉⲣⲥⲙⲟⲩ', translit: 'Pima-en-ersmou', meaning: { de: 'Der Altarraum', en: 'The altar area', ar: 'منطقة المذبح' } },
          { coptic: 'Ⲡⲓⲭⲟⲣⲟⲥ', translit: 'Pi-khoros', meaning: { de: 'Der Chor', en: 'The choir', ar: 'الكورس' } },
          { coptic: 'Ϯⲛⲁⲟⲥ', translit: 'Ti-naos', meaning: { de: 'Das Kirchenschiff', en: 'The nave', ar: 'الصحن' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'Ⲁⲩⲑⲱⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ? - Ϯⲉⲕⲕⲗⲏⲥⲓⲁ ϧⲉⲛ ⲡⲁⲓⲙⲱⲓⲧ, ⲙⲟϣⲓ ⲛⲓⲥⲁϫ',
          translit: 'Authōn ti-ekklēsia? - Ti-ekklēsia khen pai-mōit, moshi nisaj',
          meaning: { de: 'Wo ist die Kirche? - Die Kirche ist in dieser Straße, geh geradeaus', en: 'Where is the church? - The church is on this street, go straight', ar: 'أين الكنيسة؟ - الكنيسة في هذا الشارع، اذهب مباشرة' }
        }
      }
    ]
  }
};

export const QUIZZES: Record<string, Quiz> = {
  'q6-1': {
    id: 'q6-1',
    lessonId: 'm6-l1',
    title: { de: 'Quiz: Ortspräpositionen', en: 'Quiz: Location Prepositions', ar: 'اختبار: حروف الجر المكانية' },
    passScore: 70,
    questions: [
      {
        id: 'q6-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Wähle die korrekte Form für „in" vor ⲙ:', en: 'Choose the correct form for "in" before ⲙ:', ar: 'اختر الصيغة الصحيحة لـ "في" قبل ⲙ:' },
        options: [
          { de: 'ϩⲛ̄', en: 'ϩⲛ̄', ar: 'ϩⲛ̄' },
          { de: 'ϩⲙ̄', en: 'ϩⲙ̄', ar: 'ϩⲙ̄' },
          { de: 'ⲉⲃⲟⲗ', en: 'ⲉⲃⲟⲗ', ar: 'ⲉⲃⲟⲗ' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q6-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ϧⲉⲛ ⲡ̀ⲏⲓ?', en: 'What does ϧⲉⲛ ⲡ̀ⲏⲓ mean?', ar: 'ماذا يعني ϧⲉⲛ ⲡ̀ⲏⲓ؟' },
        options: [
          { de: 'im Haus', en: 'in the house', ar: 'في البيت' },
          { de: 'zum Haus', en: 'to the house', ar: 'إلى البيت' },
          { de: 'aus dem Haus', en: 'out of the house', ar: 'من البيت' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q6-1-3',
        type: 'multiple-choice',
        questionText: { de: 'Welche Präposition bedeutet "unter"?', en: 'Which preposition means "under"?', ar: 'أي حرف جر يعني "تحت"؟' },
        options: [
          { de: 'ⲛ̀ϩⲏⲧ', en: 'ⲛ̀ϩⲏⲧ', ar: 'ⲛ̀ϩⲏⲧ' },
          { de: 'ϩⲓ', en: 'ϩⲓ', ar: 'ϩⲓ' },
          { de: 'ϧⲉⲛ', en: 'ϧⲉⲛ', ar: 'ϧⲉⲛ' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q6-2': {
    id: 'q6-2',
    lessonId: 'm6-l2',
    title: { de: 'Quiz: Richtungspräpositionen', en: 'Quiz: Direction Prepositions', ar: 'اختبار: حروف الجر الاتجاهية' },
    passScore: 70,
    questions: [
      {
        id: 'q6-2-1',
        type: 'multiple-choice',
        questionText: { de: '„aus dem Haus" ist …', en: '"out of the house" is …', ar: '«خارجًا من البيت» هو...' },
        options: [
          { de: 'ⲉⲃⲟⲗ ϩⲛ̄ ⲡ̀ⲏⲓ', en: 'ⲉⲃⲟⲗ ϩⲛ̄ ⲡ̀ⲏⲓ', ar: 'ⲉⲃⲟⲗ ϩⲛ̄ ⲡ̀ⲏⲓ' },
          { de: 'ϩⲛ̄ ⲡ̀ⲏⲓ ⲉ', en: 'ϩⲛ̄ ⲡ̀ⲏⲓ ⲉ', ar: 'ϩⲛ̄ ⲡ̀ⲏⲓ ⲉ' },
          { de: 'ⲉϩⲣⲁⲓ ⲡ̀ⲏⲓ', en: 'ⲉϩⲣⲁⲓ ⲡ̀ⲏⲓ', ar: 'ⲉϩⲣⲁⲓ ⲡ̀ⲏⲓ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q6-2-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲛⲁ?', en: 'What does ⲛⲁ mean?', ar: 'ماذا يعني ⲛⲁ؟' },
        options: [
          { de: 'an/zu (Dativ)', en: 'to/for (dative)', ar: 'إلى/لـ' },
          { de: 'mit', en: 'with', ar: 'مع' },
          { de: 'in', en: 'in', ar: 'في' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q6-2-3',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲉ̀ ⲡ̀ⲛⲟⲩϯ?', en: 'What does ⲉ̀ ⲡ̀ⲛⲟⲩϯ mean?', ar: 'ماذا يعني ⲉ̀ ⲡ̀ⲛⲟⲩϯ؟' },
        options: [
          { de: 'in Gott', en: 'in God', ar: 'في الله' },
          { de: 'zu Gott', en: 'to God', ar: 'إلى الله' },
          { de: 'von Gott', en: 'from God', ar: 'من الله' }
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  'q6-3': {
    id: 'q6-3',
    lessonId: 'm6-l3',
    title: { de: 'Quiz: Beziehungspräpositionen', en: 'Quiz: Relational Prepositions', ar: 'اختبار: حروف الجر العلائقية' },
    passScore: 70,
    questions: [
      {
        id: 'q6-3-1',
        type: 'multiple-choice',
        questionText: { de: '„ohne das Wort" ist:', en: '"without the word" is:', ar: '«بدون الكلمة» هو:' },
        options: [
          { de: 'ⲛ̀ⲥⲟⲩ ⲡ̀ⲥⲁϫⲓ', en: 'ⲛ̀ⲥⲟⲩ ⲡ̀ⲥⲁϫⲓ', ar: 'ⲛ̀ⲥⲟⲩ ⲡ̀ⲥⲁϫⲓ' },
          { de: 'ⲛ̀ϩⲏⲧ ⲡ̀ⲥⲁϫⲓ', en: 'ⲛ̀ϩⲏⲧ ⲡ̀ⲥⲁϫⲓ', ar: 'ⲛ̀ϩⲏⲧ ⲡ̀ⲥⲁϫⲓ' },
          { de: 'ⲛ̀ⲥⲁ ⲡ̀ⲥⲁϫⲓ', en: 'ⲛ̀ⲥⲁ ⲡ̀ⲥⲁϫⲓ', ar: 'ⲛ̀ⲥⲁ ⲡ̀ⲥⲁϫⲓ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q6-3-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲛⲉⲙ?', en: 'What does ⲛⲉⲙ mean?', ar: 'ماذا يعني ⲛⲉⲙ؟' },
        options: [
          { de: 'in', en: 'in', ar: 'في' },
          { de: 'mit/und', en: 'with/and', ar: 'مع/و' },
          { de: 'ohne', en: 'without', ar: 'بدون' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q6-3-3',
        type: 'multiple-choice',
        questionText: { de: 'Wann wird ⲙ̀ statt ⲛ̀ verwendet?', en: 'When is ⲙ̀ used instead of ⲛ̀?', ar: 'متى تُستخدم ⲙ̀ بدلاً من ⲛ̀؟' },
        options: [
          { de: 'vor Labialen (ⲃⲙⲫⲡ)', en: 'before labials (ⲃⲙⲫⲡ)', ar: 'قبل الشفوية (ⲃⲙⲫⲡ)' },
          { de: 'vor allen Buchstaben', en: 'before all letters', ar: 'قبل كل الحروف' },
          { de: 'nie', en: 'never', ar: 'أبداً' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q6-4': {
    id: 'q6-4',
    lessonId: 'm6-l4',
    title: { de: 'Quiz: Pronominale Formen', en: 'Quiz: Pronominal Forms', ar: 'اختبار: الصيغ الضميرية' },
    passScore: 70,
    questions: [
      {
        id: 'q6-4-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲉ̀ⲣⲟϥ?', en: 'What does ⲉ̀ⲣⲟϥ mean?', ar: 'ماذا يعني ⲉ̀ⲣⲟϥ؟' },
        options: [
          { de: 'zu mir', en: 'to me', ar: 'إليّ' },
          { de: 'zu ihm', en: 'to him', ar: 'إليه' },
          { de: 'zu ihr', en: 'to her', ar: 'إليها' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q6-4-2',
        type: 'multiple-choice',
        questionText: { de: 'Was ist der Limitativ?', en: 'What is the limitative?', ar: 'ما هي البنية المحددة؟' },
        options: [
          { de: 'ⲥⲁ + Konjunktiv', en: 'ⲥⲁ + subjunctive', ar: 'ⲥⲁ + المضارع الرغبي' },
          { de: 'ⲛⲉⲙ + Nomen', en: 'ⲛⲉⲙ + noun', ar: 'ⲛⲉⲙ + اسم' },
          { de: 'ϧⲉⲛ + Verb', en: 'ϧⲉⲛ + verb', ar: 'ϧⲉⲛ + فعل' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q6-4-3',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ?', en: 'What does ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ mean?', ar: 'ماذا يعني ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ؟' },
        options: [
          { de: 'segne mich', en: 'bless me', ar: 'باركني' },
          { de: 'segne ihn', en: 'bless him', ar: 'باركه' },
          { de: 'segne uns', en: 'bless us', ar: 'باركنا' }
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  'q6-5': {
    id: 'q6-5',
    lessonId: 'm6-l5',
    title: { de: 'Quiz: Praktische Redewendungen', en: 'Quiz: Practical Phrases', ar: 'اختبار: العبارات العملية' },
    passScore: 70,
    questions: [
      {
        id: 'q6-5-1',
        type: 'multiple-choice',
        questionText: { de: 'Wie fragt man „Wo ist die Kirche?"', en: 'How do you ask "Where is the church?"', ar: 'كيف تسأل «أين الكنيسة؟»' },
        options: [
          { de: 'Ⲁⲩⲑⲱⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ?', en: 'Ⲁⲩⲑⲱⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ?', ar: 'Ⲁⲩⲑⲱⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ?' },
          { de: 'Ⲙⲟϣⲓ ⲛⲓⲥⲁϫ?', en: 'Ⲙⲟϣⲓ ⲛⲓⲥⲁϫ?', ar: 'Ⲙⲟϣⲓ ⲛⲓⲥⲁϫ?' },
          { de: 'Ⲕⲱϯ ⲉ̀ⲟⲩⲓⲛⲁⲙ?', en: 'Ⲕⲱϯ ⲉ̀ⲟⲩⲓⲛⲁⲙ?', ar: 'Ⲕⲱϯ ⲉ̀ⲟⲩⲓⲛⲁⲙ?' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q6-5-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet „Ⲙⲟϣⲓ ⲛⲓⲥⲁϫ"?', en: 'What does "Ⲙⲟϣⲓ ⲛⲓⲥⲁϫ" mean?', ar: 'ماذا يعني «Ⲙⲟϣⲓ ⲛⲓⲥⲁϫ»؟' },
        options: [
          { de: 'Dreh nach rechts', en: 'Turn right', ar: 'انعطف يمينًا' },
          { de: 'Geh geradeaus', en: 'Go straight', ar: 'اذهب مباشرة' },
          { de: 'Komm zurück', en: 'Come back', ar: 'ارجع' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q6-5-3',
        type: 'multiple-choice',
        questionText: { de: 'Was ist „Ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ"?', en: 'What is "Ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ"?', ar: 'ما هو «Ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ»؟' },
        options: [
          { de: 'Das Heiligtum', en: 'The sanctuary', ar: 'المقدس' },
          { de: 'Das Kirchenschiff', en: 'The nave', ar: 'الصحن' },
          { de: 'Der Chor', en: 'The choir', ar: 'الكورس' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};
