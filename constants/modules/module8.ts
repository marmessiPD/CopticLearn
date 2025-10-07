// Module 8: Präpositionen I (ϧⲉⲛ, ⲛ̀/ⲙ̀, ⲉ̀, ⲛⲁ, ⲛⲉⲙ)
import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  // L8-1: ϧⲉⲛ, ⲛ̀/ⲙ̀, ⲉ̀
  'm8-l1': {
    id: 'm8-l1',
    order: 1,
    moduleId: 'm8',
    title: { de: 'ϧⲉⲛ · ⲛ̀/ⲙ̀ · ⲉ̀', en: 'ϧⲉⲛ · ⲛ̀/ⲙ̀ · ⲉ̀', ar: 'ϧⲉⲛ · ⲛ̀/ⲙ̀ · ⲉ̀' },
    prerequisites: ['l5-1'],
    quizId: 'q8-1',
    slides: [
      {
        type: 'grammar',
        title: { de: 'ϧⲉⲛ = in', en: 'ϧⲉⲛ = in', ar: 'ϧⲉⲛ = في' },
        rule: {
          de: 'ϧⲉⲛ markiert Ort/Zustand „in“. Vor Vokal oft ϧⲓⲛ.',
          en: 'ϧⲉⲛ marks location/state “in”. Before a vowel often ϧⲓⲛ.',
          ar: 'ϧⲉⲛ تدل على الظرف المكاني/الحالي "في". قبل حركة غالبًا ϧⲓⲛ.'
        },
        examples: [
          { coptic: 'ϧⲉⲛ ⲡ̀ⲏⲓ', translit: 'khen peei', meaning: { de: 'im Haus', en: 'in the house', ar: 'في البيت' } },
          { coptic: 'ϧⲉⲛ ⲡⲓϩⲏⲧ', translit: 'khen pi-heet', meaning: { de: 'im Herzen', en: 'in the heart', ar: 'في القلب' } }
        ],
        spiritual: {
          bibleVerse: { de: '„Selig sind, die reinen Herzens sind.“', en: '“Blessed are the pure in heart.”', ar: '«طوبى لأنقياء القلب»' },
          bibleReference: { de: 'Mt 5,8 (SCH2000)', en: 'Mt 5:8', ar: 'متى 5:8' },
          fatherQuote: {
            de: 'Der Christ wahrt Keuschheit bis in Gedanken.',
            en: 'The Christian guards chastity even in thought.',
            ar: 'المسيحي يحفظ العفة حتى في الفكر.'
          },
          fatherReference: {
            de: 'Klemens v. Alex., Paidagogos (vgl. Auswahl bei Bercot, „Chastity“).',
            en: 'Clement of Alexandria, Paedagogus (cf. Bercot, “Chastity”).',
            ar: 'كليمندس الإسكندري، المُربّي (انظر بيركوت: العفة).'
          }
        }
      },
      {
        type: 'grammar',
        title: { de: 'ⲛ̀ / ⲙ̀ = von/Objektmarker', en: 'ⲛ̀ / ⲙ̀ = of/object', ar: 'ⲛ̀ / ⲙ̀ = مِن/مفعول' },
        rule: {
          de: 'ⲛ̀ markiert Genitiv „von“ und direktes Objekt; vor Vilminor-Bst. wird ⲙ̀. Beispiel: ⲥⲱⲧⲉⲙ ⲙ̀ⲡ̀ⲣⲱⲙⲓ.',
          en: 'ⲛ̀ marks genitive “of” and DO; before Vilminor letters use ⲙ̀. E.g., ⲥⲱⲧⲉⲙ ⲙ̀ⲡ̀ⲣⲱⲙⲓ.',
          ar: 'ⲛ̀ للملكية والمفعول؛ قبل حروف فيلمينور نستخدم ⲙ̀.'
        },
        examples: [
          { coptic: 'ⲡ̀ⲣⲁⲛ ⲛ̀Ⲫⲛⲟⲩϯ', translit: 'ep-ran en-Efnouti', meaning: { de: 'der Name Gottes', en: 'the name of God', ar: 'اسم الله' } },
          { coptic: 'ϯⲥⲱⲧⲉⲙ ⲙ̀ⲡ̀ⲥⲁϫⲓ', translit: 'ti-sotem em-psaji', meaning: { de: 'ich höre das Wort', en: 'I hear the word', ar: 'أسمع الكلمة' } }
        ],
        spiritual: {
          bibleVerse: { de: '„Dein Name ist kostbar.“', en: '“A good name is to be chosen.”', ar: '«الاسم الصالح مختار»' },
          bibleReference: { de: 'Spr 22,1 (SCH2000)', en: 'Prov 22:1', ar: 'أمثال 22:1' },
          fatherQuote: {
            de: 'Die Kirche bewahrte den ganzen Glaubenssinn öffentlich.',
            en: 'The apostles proclaimed the whole rule of faith openly.',
            ar: 'الرسل أعلنوا قاعدة الإيمان كاملة علنًا.'
          },
          fatherReference: {
            de: 'Tertullian, De praescriptione haereticorum (vgl. Bercot, „Heresies“).',
            en: 'Tertullian, Prescr. Against Heretics (cf. Bercot, “Heresies”).',
            ar: 'ترتليان، «ضدّ الهراطقة» (انظر بيركوت: الهرطقات).'
          }
        }
      },
      {
        type: 'grammar',
        title: { de: 'ⲉ̀ = zu/nach/bei', en: 'ⲉ̀ = to/into/at', ar: 'ⲉ̀ = إلى/عند' },
        rule: {
          de: 'ⲉ̀ zeigt Richtung/Ziel. Mit Personen oft als Dativübersetzung „zu/bei“.',
          en: 'ⲉ̀ marks goal/direction. With persons often dative-like.',
          ar: 'ⲉ̀ للدلالة على الاتجاه والغاية، ومع الأشخاص كالداتيف.'
        },
        examples: [
          { coptic: 'ⲉ̀ ⲡ̀ⲓⲕⲟⲓⲛⲱⲛⲓⲟⲛ', translit: 'e-pi-koinonion', meaning: { de: 'zur Gemeinschaft', en: 'to communion', ar: 'إلى الشركة' } },
          { coptic: 'ⲉ̀ ⲡ̀ⲛⲟⲩϯ', translit: 'e-p-nouti', meaning: { de: 'zu Gott', en: 'to God', ar: 'إلى الله' } }
        ],
        spiritual: {
          bibleVerse: { de: '„Kommt her zu mir, alle…“', en: '“Come to me, all…”', ar: '«تعالوا إليّ يا جميع…»' },
          bibleReference: { de: 'Mt 11,28 (SCH2000)', en: 'Mt 11:28', ar: 'متى 11:28' },
          fatherQuote: {
            de: 'Durch Taufe und Geist werden wir neu geboren und zu Gott geführt.',
            en: 'By water and Spirit we are reborn and led to God.',
            ar: 'بالماء والروح نولد من جديد ونقاد إلى الله.'
          },
          fatherReference: {
            de: 'Basilius, De Spiritu Sancto 15,35 (Akin, „Baptism“).',
            en: 'Basil, On the Holy Spirit 15:35 (Akin).',
            ar: 'باسيليوس، الروح القدس 15:35 (أكين).'
          }
        }
      }
    ]
  },

  // L8-2: ⲛⲁ, ⲛⲉⲙ + Praxis
  'm8-l2': {
    id: 'm8-l2',
    order: 2,
    moduleId: 'm8',
    title: { de: 'ⲛⲁ · ⲛⲉⲙ · Anwendung', en: 'ⲛⲁ · ⲛⲉⲙ · Practice', ar: 'ⲛⲁ · ⲛⲉⲙ · تطبيق' },
    prerequisites: ['m8-l1'],
    quizId: 'q8-2',
    slides: [
      {
        type: 'grammar',
        title: { de: 'ⲛⲁ = an/zu (Dativ, Ziel, Empfänger)', en: 'ⲛⲁ = to/for (dative)', ar: 'ⲛⲁ = إلى/لـ' },
        rule: {
          de: 'ⲛⲁ markiert Empfänger/Richtung: „geben an“, „sprechen zu“, „gehen zu“.',
          en: 'ⲛⲁ marks recipient/direction: “give to”, “speak to”, “go to”.',
          ar: 'ⲛⲁ لبيان المتلقّي/الاتجاه.'
        },
        examples: [
          { coptic: 'ϯ ⲛⲁ ⲡ̀ⲣⲱⲙⲓ ⲡⲓⲥⲱⲧⲙ', translit: 'ti na ep-romi pi-sotm', meaning: { de: 'ich gebe dem Mann das Gehörte', en: 'I give the man the teaching', ar: 'أعطي الرجل التعليم' } },
          { coptic: 'ⲥⲁϫⲓ ⲛⲁ ⲡⲓⲟⲩⲱⲧ', translit: 'saji na pi-ouot', meaning: { de: 'sprich zum Vater', en: 'speak to the father', ar: 'تكلّم إلى الأب' } }
        ],
        spiritual: {
          bibleVerse: { de: '„Gebt, so wird euch gegeben.“', en: '“Give, and it will be given to you.”', ar: '«أعطوا تُعطوا»' },
          bibleReference: { de: 'Lk 6,38 (SCH2000)', en: 'Lk 6:38', ar: 'لوقا 6:38' },
          fatherQuote: {
            de: 'Die Taufe ist das Bad der Wiedergeburt, dann Gebet und Dienst.',
            en: 'Baptism is the bath of regeneration, then prayer and service.',
            ar: 'المعمودية حمّام الولادة الثانية، ثم الصلاة والخدمة.'
          },
          fatherReference: {
            de: 'Hippolyt, Traditio Apostolica 22 (Akin).',
            en: 'Hippolytus, Apostolic Tradition 22 (Akin).',
            ar: 'هيبوليتس، التقليد الرسولي 22 (أكين).'
          }
        }
      },
      {
        type: 'grammar',
        title: { de: 'ⲛⲉⲙ = mit/und', en: 'ⲛⲉⲙ = with/and', ar: 'ⲛⲉⲙ = مع/و' },
        rule: {
          de: 'ⲛⲉⲙ verbindet Personen/Sachen: „mit“ oder koordinierend „und“.',
          en: 'ⲛⲉⲙ links people/things: “with” or coordinating “and”.',
          ar: 'ⲛⲉⲙ للمعيّة أو العطف.'
        },
        examples: [
          { coptic: 'ⲙⲱⲟⲩ ⲛⲉⲙ ⲙⲟⲩⲓ', translit: 'mwou nem moui', meaning: { de: 'Wasser und Wein', en: 'water and wine', ar: 'ماء وخمر' } },
          { coptic: 'ⲙⲱⲓ ⲛⲉⲙ ⲡⲓⲙⲱⲓⲧ', translit: 'moi nem pi-moit', meaning: { de: 'ich gehe mit dem Weggefährten', en: 'I go with the companion', ar: 'أسير مع الرفيق' } }
        ],
        spiritual: {
          bibleVerse: { de: '„Sie blieben beständig… in der Gemeinschaft.“', en: '“They continued steadfastly… in fellowship.”', ar: '«وكانوا يواظبون… على الشركة»' },
          bibleReference: { de: 'Apg 2,42 (SCH2000)', en: 'Acts 2:42', ar: 'أعمال 2:42' },
          fatherQuote: {
            de: '„Glücklich ist unser Sakrament des Wassers… wir kleinen Fische sind in Wasser geboren.“',
            en: '“Happy is our sacrament of water… little fishes are born in water.”',
            ar: '«طوبى لسرّ الماء… نحن سمكات صغار نولد في الماء»'
          },
          fatherReference: {
            de: 'Tertullian, De Baptismo 1 (Akin).',
            en: 'Tertullian, On Baptism 1 (Akin).',
            ar: 'ترتليان، في المعمودية 1 (أكين).'
          }
        }
      },
      {
        type: 'practice',
        title: { de: 'Mini-Übung', en: 'Mini Practice', ar: 'تدريب قصير' },
        items: [
          {
            prompt: { de: 'Übersetze: „im Haus“, „zu Gott“, „mit den Brüdern“.', en: 'Translate: “in the house”, “to God”, “with the brothers”.', ar: 'ترجم: «في البيت»، «إلى الله»، «مع الإخوة».' },
            answers: [
              { coptic: 'ϧⲉⲛ ⲡ̀ⲏⲓ', translit: 'khen peei' },
              { coptic: 'ⲉ̀ ⲡ̀ⲛⲟⲩϯ', translit: 'e p-nouti' },
              { coptic: 'ⲛⲉⲙ ⲛⲓⲥ̀ⲛⲏⲟⲩ', translit: 'nem ni-sneo-u' }
            ]
          }
        ]
      }
    ]
  }
};

export const QUIZZES: Record<string, Quiz> = {
  'q8-1': {
    id: 'q8-1',
    lessonId: 'm8-l1',
    title: { de: 'Quiz: Präpositionen ϧⲉⲛ, ⲛ̀/ⲙ̀, ⲉ̀', en: 'Quiz: Prepositions ϧⲉⲛ, ⲛ̀/ⲙ̀, ⲉ̀', ar: 'اختبار: حروف الجر ϧⲉⲛ, ⲛ̀/ⲙ̀, ⲉ̀' },
    passScore: 70,
    questions: [
      {
        id: 'q8-1-1',
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
        id: 'q8-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Wann wird ⲙ̀ statt ⲛ̀ verwendet?', en: 'When is ⲙ̀ used instead of ⲛ̀?', ar: 'متى تُستخدم ⲙ̀ بدلاً من ⲛ̀؟' },
        options: [
          { de: 'vor Vilminor-Buchstaben', en: 'before Vilminor letters', ar: 'قبل حروف فيلمينور' },
          { de: 'vor allen Buchstaben', en: 'before all letters', ar: 'قبل كل الحروف' },
          { de: 'nie', en: 'never', ar: 'أبداً' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q8-1-3',
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
  'q8-2': {
    id: 'q8-2',
    lessonId: 'm8-l2',
    title: { de: 'Quiz: ⲛⲁ und ⲛⲉⲙ', en: 'Quiz: ⲛⲁ and ⲛⲉⲙ', ar: 'اختبار: ⲛⲁ و ⲛⲉⲙ' },
    passScore: 70,
    questions: [
      {
        id: 'q8-2-1',
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
        id: 'q8-2-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲛⲉⲙ?', en: 'What does ⲛⲉⲙ mean?', ar: 'ماذا يعني ⲛⲉⲙ؟' },
        options: [
          { de: 'zu', en: 'to', ar: 'إلى' },
          { de: 'mit/und', en: 'with/and', ar: 'مع/و' },
          { de: 'ohne', en: 'without', ar: 'بدون' }
        ],
        correctAnswerIndex: 1
      }
    ]
  }
};
