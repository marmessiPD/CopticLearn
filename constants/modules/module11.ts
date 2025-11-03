// --- Module 11: Imperativ & Bitten (Bohairisch) ---

import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  'm11-l1': {
    id: 'm11-l1',
  order: 1,
  moduleId: 'm11',
  title: { de: 'Imperativ & Bitten', en: 'Imperative & Requests', ar: 'الأمر والالتماس' },
  prerequisites: ['l5-1'], // Erstes Präsens
  quizId: 'q11-1',
  slides: [
    {
      type: 'grammar',
      title: { de: 'Imperativ: Grundform', en: 'Imperative: Base Form', ar: 'صيغة الأمر: الأساس' },
      rule: {
        de: 'Der Imperativ im Bohairischen nutzt den Verbstamm ohne Personalpräfix. Das direkte Objekt wird wie üblich mit ⲛ̀/ⲙ̀ markiert (vor Vilminor-Buchstaben ⲙ̀).',
        en: 'Bohairic imperative uses the bare stem. Direct object takes ⲛ̀/ⲙ̀ as object marker (ⲙ̀ before Vilminor letters).',
        ar: 'الأمر في البهيري يستخدم جذر الفعل دون سوابق. المفعول به يُميَّز بـ ⲛ̀/ⲙ̀ (ⲙ̀ قبل حروف فيلمينور).'
      },
      examples: [
        { coptic: 'ⲥⲱⲧⲉⲙ ⲛ̀ⲡⲉϥⲥⲁϫⲓ', translit: 'sotem en-pef-saji', meaning: { de: 'Höre auf sein Wort.', en: 'Listen to his word.', ar: 'أَصغِ إلى كلمته.' } },
        { coptic: 'ⲙⲟϣⲓ ⲙ̀ⲡⲏⲓ', translit: 'moshi em-pei', meaning: { de: 'Geh ins Haus.', en: 'Go into the house.', ar: 'اذهب إلى البيت.' } },
        { coptic: 'ⲕⲱ ⲛ̀ⲥⲁ ⲡ̀ϭⲟⲓⲥ', translit: 'ko n-sa ep-chois', meaning: { de: 'Verneige dich vor dem Herrn.', en: 'Bow before the Lord.', ar: 'اسجد أمام الرب.' } }
      ]
    },
    {
      type: 'grammar',
      title: { de: 'Negierter Imperativ (Verbotsform)', en: 'Negative Imperative (Prohibition)', ar: 'النهي' },
      rule: {
        de: 'Für das Verbot wird ϯⲙ̀- (ti-m) + Verbstamm verwendet, v. a. in liturgischem und klassischem Bohairisch.',
        en: 'Prohibition commonly uses ϯⲙ̀- (ti-m) + verb stem in liturgical/classical Bohairic.',
        ar: 'يستخدم ϯⲙ̀- مع جذر الفعل للنهي في البهيري الكلاسيكي/الليتورجي.'
      },
      examples: [
        { coptic: 'ϯⲙ̀ⲥⲱⲧⲉⲙ ⲛ̀ⲛⲟⲃⲓ', translit: 'tim-sotem en-novi', meaning: { de: 'Gehorche nicht der Sünde.', en: 'Do not obey sin.', ar: 'لا تُطع الخطيئة.' } },
        { coptic: 'ϯⲙ̀ⲕⲱ ⲛ̀ⲥⲁ ⲛⲟϥ', translit: 'tim-ko n-sa nof', meaning: { de: 'Beuge dich nicht vor ihm.', en: 'Do not bow to him.', ar: 'لا تسجد له.' } }
      ]
    },
    {
      type: 'grammar',
      title: { de: 'Höfliche Bitte mit ⲛⲁ-', en: 'Polite Request with ⲛⲁ-', ar: 'الالتماس بـ ⲛⲁ-' },
      rule: {
        de: 'Für Bitten: ⲛⲁ- + Pronominalpräfix + Verbstamm. Beispiel 1. Sg. ⲛⲁⲓ-… (lass mich …), 2. Sg. ⲛⲁⲕ-… (bitte, …).',
        en: 'Requests use ⲛⲁ- + subject prefix + stem. E.g., ⲛⲁⲓ-… (let me …), ⲛⲁⲕ-… (please, you …).',
        ar: 'الالتماس: ⲛⲁ- + سوابق الضمائر + الجذر. مثل: ⲛⲁⲓ- (دعني)، ⲛⲁⲕ- (من فضلك).'
      },
      examples: [
        { coptic: 'ⲛⲁⲕ-ⲥⲱⲧⲉⲙ ⲛ̀ⲡⲓⲗⲟⲅⲟⲥ', translit: 'nak-sotem en-pilogos', meaning: { de: 'Bitte höre auf das Wort.', en: 'Please listen to the Word.', ar: 'من فضلك استمع إلى الكلمة.' } },
        { coptic: 'ⲛⲁⲛ-ⲙⲟϣⲓ ⲉ̀ⲡⲓⲕⲏⲙⲉ', translit: 'nan-moshi e-pi-keme', meaning: { de: 'Lass uns zum Feld gehen.', en: 'Let us go to the field.', ar: 'دعنا نذهب إلى الحقل.' } }
      ]
    },
    {
      type: 'sentence',
      item: {
        text: 'ⲛⲁⲥ-ⲥⲱⲧⲉⲙ ⲙ̀ⲡ̀ⲥⲁϫⲓ ⲛ̀ⲛⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ',
        translit: 'nas-sotem em-ep-saji en-nikatholikon',
        meaning: { de: 'Bitte höre die katholischen Lesungen.', en: 'Please listen to the catholic readings.', ar: 'من فضلك استمع للقراءات الكاثوليكية.' },
        meta: { emoji: '📖', bibleRef: { de: 'Jak 1,22 (SCH2000)', en: 'James 1:22', ar: 'يعقوب ١:٢٢' } }
      }
    },
    {
      type: 'exercise',
      title: { de: 'Umformen zu Imperativ', en: 'Transform to Imperative', ar: 'حوّل إلى أمر' },
      tasks: [
        { prompt: { de: 'Ich gehe ins Haus → Imperativ (2. Sg.)', en: 'I go to the house → Imperative (2sg)', ar: 'أنا أذهب إلى البيت ← أمر (مفرد)' }, answer: 'ⲙⲟϣⲓ ⲙ̀ⲡⲏⲓ' },
        { prompt: { de: 'Du hörst das Wort → Verbot', en: 'You listen to the word → prohibition', ar: 'أنت تستمع للكلمة ← نهي' }, answer: 'ϯⲙ̀ⲥⲱⲧⲉⲙ ⲛ̀ⲡⲉⲥⲁϫⲓ' }
      ]
    },
    {
      type: 'theology',
      title: { de: 'Infobox: Bitte & Demut', en: 'Infobox: Request & Humility', ar: 'معلومات: الالتماس والتواضع' },
      content: {
        de: 'Bitten in der koptisch-orthodoxen Tradition verbindet Demut und Gehorsam. In Gebeten wird häufig die Bitte-Formel ⲛⲁ- verwendet.',
        en: 'Requests in the Coptic Orthodox tradition express humility and obedience. Liturgical prayer frequently uses ⲛⲁ-.',
        ar: 'الالتماس في التقليد القبطي الأرثوذكسي يجمع التواضع بالطاعة. تستخدم الصلوات الليتورجية غالباً ⲛⲁ-.' 
      },
      meta: { emoji: '🙏' }
    }
  ]
  }
};

export const QUIZZES: Record<string, Quiz> = {
  'q11-1': {
    id: 'q11-1',
    lessonId: 'm11-l1',
    title: { de: 'Quiz: Imperativ & Bitten', en: 'Quiz: Imperative & Requests', ar: 'اختبار: الأمر والالتماس' },
    passScore: 70,
    questions: [
      {
        id: 'q11-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Wie bildet man den Imperativ im Bohairischen?', en: 'How is the imperative formed in Bohairic?', ar: 'كيف يُكوَّن الأمر في البحيري؟' },
        options: [
          { de: 'mit dem Verbstamm ohne Personalpräfix', en: 'with the verb stem without personal prefix', ar: 'بجذر الفعل دون سوابق شخصية' },
          { de: 'mit ⲁ- vor dem Verb', en: 'with ⲁ- before the verb', ar: 'بـ ⲁ- قبل الفعل' },
          { de: 'beide können verwendet werden', en: 'both can be used', ar: 'كلاهما يمكن استخدامه' }
        ],
        correctAnswerIndex: 2
      },
      {
        id: 'q11-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Wie negiert man einen Imperativ (Verbot)?', en: 'How do you negate an imperative (prohibition)?', ar: 'كيف تنفي الأمر (نهي)؟' },
        options: [
          { de: 'mit ϯⲙ̀- vor dem Verbstamm', en: 'with ϯⲙ̀- before the stem', ar: 'بـ ϯⲙ̀- قبل الجذر' },
          { de: 'mit ⲁⲛ nach dem Verb', en: 'with ⲁⲛ after the verb', ar: 'بـ ⲁⲛ بعد الفعل' },
          { de: 'mit ⲙ̀ⲙⲟⲛ', en: 'with ⲙ̀ⲙⲟⲛ', ar: 'بـ ⲙ̀ⲙⲟⲛ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q11-1-3',
        type: 'multiple-choice',
        questionText: { de: 'Wie bildet man eine höfliche Bitte?', en: 'How do you form a polite request?', ar: 'كيف تُكوّن التماساً مهذباً؟' },
        options: [
          { de: 'mit ⲛⲁ- + Pronominalpräfix + Verbstamm', en: 'with ⲛⲁ- + subject prefix + stem', ar: 'بـ ⲛⲁ- + سابقة ضميرية + جذر' },
          { de: 'mit dem einfachen Imperativ', en: 'with the simple imperative', ar: 'بالأمر البسيط' },
          { de: 'mit ϯⲙ̀-', en: 'with ϯⲙ̀-', ar: 'بـ ϯⲙ̀-' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },

  'm11-l2': {
    id: 'm11-l2',
    order: 2,
    moduleId: 'm11',
    title: { de: 'Plural-Imperativ & Höflichkeitsformen', en: 'Plural Imperative & Polite Forms', ar: 'الأمر الجمعي والأشكال المهذبة' },
    prerequisites: ['m11-l1'],
    quizId: 'q11-2',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Plural-Imperativ', en: 'Plural Imperative', ar: 'الأمر الجمعي' },
        rule: {
          de: 'Für Plural-Imperative werden oft dieselben Formen wie Singular verwendet, aber der Kontext macht die Pluralität klar. Bei einigen Verben gibt es spezielle Pluralformen.',
          en: 'Plural imperatives often use the same forms as singular, but context makes the plurality clear. Some verbs have special plural forms.',
          ar: 'الأمر الجمعي غالباً يستخدم نفس صيغ المفرد، لكن السياق يوضح الجمع. بعض الأفعال لها صيغ جمع خاصة.'
        },
        examples: [
          { coptic: 'ⲥⲱⲧⲉⲙ ⲛⲓⲣⲱⲙⲓ ⲙ̀ⲡⲓⲥⲁϫⲓ', translit: 'sotem ni-romi em-ep-saji', meaning: { de: 'Hört, ihr Menschen, auf das Wort!', en: 'Listen, you people, to the word!', ar: 'اسمعوا أيها الناس الكلمة!' } },
          { coptic: 'ⲙⲟϣⲓ ⲉ̀ⲡⲓⲕⲏⲙⲉ', translit: 'moshi e-pi-keme', meaning: { de: 'Geht zum Feld! (Plural)', en: 'Go to the field! (plural)', ar: 'اذهبوا إلى الحقل!' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Höfliche Bitten mit ⲉⲣⲉ', en: 'Polite Requests with ⲉⲣⲉ', ar: 'الالتماسات المهذبة بـ ⲉⲣⲉ' },
        rule: {
          de: 'ⲉⲣⲉ leitet höfliche Bitten oder Wünsche ein: „möge ...", „bitte, dass ...". Wird häufig in liturgischen Texten verwendet.',
          en: 'ⲉⲣⲉ introduces polite requests or wishes: "may ...", "please, that ...". Often used in liturgical texts.',
          ar: 'ⲉⲣⲉ تُدخل التماسات أو أمنيات مهذبة: "ليكن...", "من فضلك أن...". تُستخدم غالباً في النصوص الليتورجية.'
        },
        examples: [
          { coptic: 'ⲉⲣⲉ ⲡ̀ϭⲟⲓⲥ ⲥⲉⲛⲁⲩ ⲉ̀ⲣⲟⲛ', translit: 'ere ep-chois senau eron', meaning: { de: 'Möge der Herr auf uns blicken.', en: 'May the Lord look upon us.', ar: 'ليت الرب ينظر إلينا.' } },
          { coptic: 'ⲉⲣⲉ ⲡⲉⲛⲟⲩϯ ⲧⲟⲧⲉ ⲛⲁⲛ ⲙ̀ⲡⲉⲛⲭⲁⲣⲓⲥ', translit: 'ere penouti tote nan em-pencharis', meaning: { de: 'Möge Gott uns seine Gnade geben.', en: 'May God give us his grace.', ar: 'ليعطنا الله نعمته.' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Liturgische Imperative', en: 'Liturgical Imperatives', ar: 'الأوامر الليتورجية' },
        rule: {
          de: 'In liturgischen Texten werden Imperative häufig mit religiösen Wendungen kombiniert, besonders in Hymnen und Gebeten.',
          en: 'In liturgical texts, imperatives are often combined with religious phrases, especially in hymns and prayers.',
          ar: 'في النصوص الليتورجية تُدمج الأوامر غالباً مع عبارات دينية، خاصة في الترانيم والصلوات.'
        },
        examples: [
          { coptic: 'ⲛⲁϩⲙⲟⲩ ⲉⲃⲟⲗ ϩⲁ ⲡⲓⲡⲉⲑⲱⲟⲩ', translit: 'nahmou ebol ha pipethou', meaning: { de: 'Errette uns vor dem Bösen.', en: 'Save us from evil.', ar: 'خلّصنا من الشر.' } },
          { coptic: 'ⲧⲱⲛ= ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲡⲓⲟⲩⲱⲛⲓ', translit: 'twn= nisheri ente piouoni', meaning: { de: 'Steht auf, Kinder des Lichts!', en: 'Arise, children of the light!', ar: 'انهضوا يا أبناء النور!' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲉⲣⲉ ⲡⲉⲛⲟⲩϯ ⲧⲁⲓⲙⲁⲥⲧⲓⲥ ⲙ̀ⲡⲉⲛⲗⲁⲟⲥ',
          translit: 'ere penouti taimasteis em-penlaos',
          meaning: { de: 'Möge Gott sich unseres Volkes erbarmen.', en: 'May God have mercy on our people.', ar: 'ليترأف الله بشعبنا.' }
        }
      }
    ]
  }
};
