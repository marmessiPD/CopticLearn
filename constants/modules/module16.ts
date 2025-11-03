// Module 16 – Review & Advanced Grammar (based on Younan, Appendix 1–4)

import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  'm16-l1': {
    id: 'm16-l1',
    order: 1,
    moduleId: 'm16',
    title: {
      de: 'Modul 16: Wiederholung & Fortgeschrittene Formen',
      en: 'Module 16: Review & Advanced Forms',
      ar: 'الوحدة 16: المراجعة والأشكال المتقدّمة'
    },
    prerequisites: ['l15-1'],
    quizId: 'q16-l1',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Die wichtigsten Verbformen', en: 'Main Verb Forms', ar: 'أهم صيغ الأفعال' },
        rule: {
          de: 'Bohairisches Koptisch kennt mehrere Zeitformen auf Basis des Infinitivs: Präsens, Perfekt, Futur, Relativ u. a. Diese werden mit Präfixen oder Partikeln gebildet (vgl. Younan App. 1).',
          en: 'Bohairic Coptic has several tense forms derived from the infinitive: present, perfect, future, relative, etc., formed with prefixes or particles (see Younan App. 1).',
          ar: 'القبطية البوحيرية تحتوي على أزمنة مشتقة من المصدر: الحاضر، الكامل، المستقبل، النسبي... تتكوّن من سوابق أو جزيئات (راجع يونان الملحق 1).'
        },
        examples: [
          { coptic: 'ϯⲙⲟϣⲓ', translit: 'ti-moshi', meaning: { de: 'ich gehe', en: 'I go / I am walking', ar: 'أنا أمشي' } },
          { coptic: 'ⲛ̀ϥⲙⲟϣⲓ', translit: 'enf-moshi', meaning: { de: 'er ging', en: 'he went', ar: 'هو مشى' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Nützliche Präfixe', en: 'Useful Prefixes', ar: 'السوابق المفيدة' },
        rule: {
          de: 'Einige Präfixe verändern die Bedeutung des Verbs (Younan App. 2): ⲙⲁ- („machen“), ⲁⲩ- („haben“ oder „vollendet“), ⲛⲉ- („werden“), ⲟⲩ- („sein“).',
          en: 'Some prefixes modify the meaning of the verb (Younan App. 2): ⲙⲁ- (to make), ⲁⲩ- (to have / perfective marker), ⲛⲉ- (to become), ⲟⲩ- (to be).',
          ar: 'بعض السوابق تغيّر معنى الفعل (يونان الملحق 2): ⲙⲁ- (يعمل)، ⲁⲩ- (يملك أو يُتمّ)، ⲛⲉ- (يصبح)، ⲟⲩ- (يكون).'
        },
        examples: [
          { coptic: 'ⲙⲁⲥⲱⲧⲉⲙ', translit: 'ma-sotem', meaning: { de: 'bewirken, dass jemand hört', en: 'cause to hear', ar: 'يجعل يسمع' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Zusammengesetzte Präpositionen', en: 'Compound Prepositions', ar: 'حروف الجر المركّبة' },
        rule: {
          de: 'Viele zusammengesetzte Präpositionen bestehen aus einfachen Präpositionen + Nomen (Younan App. 3). Beispiel: ⲛ̀ⲥⲁ = „nach“ (= ⲛ̀ + ⲥⲁ „hinter“).',
          en: 'Many compound prepositions arise from simple prepositions plus nouns (Younan App. 3). Example: ⲛ̀ⲥⲁ = “after” (from ⲛ̀ + ⲥⲁ “behind”).',
          ar: 'تتكوّن العديد من حروف الجر المركّبة من حروف جر بسيطة + أسماء (يونان الملحق 3). مثال: ⲛ̀ⲥⲁ = "بعد" من ⲛ̀ + ⲥⲁ "خلف".'
        },
        examples: [
          { coptic: 'ⲛ̀ⲥⲁ ⲡⲓⲣⲱⲙⲓ', translit: 'ensa pi-romi', meaning: { de: 'nach dem Mann', en: 'after the man', ar: 'بعد الرجل' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Pronominalsuffixe', en: 'Pronominal Suffixes', ar: 'اللواحق الضميرية' },
        rule: {
          de: 'Die Endungen für Personalpronomen variieren (Younan App. 4). Beispiel: ϥ = „sein“, ⲟⲩϥ = „er“. Diese werden an Verben und Präpositionen gehängt.',
          en: 'Personal-pronoun endings vary (Younan App. 4). Example: ϥ = “his”, ⲟⲩϥ = “he”. They attach to verbs and prepositions.',
          ar: 'تنتهي الضمائر الشخصية بصيغ تختلف (يونان الملحق 4). مثال: ϥ = "له"، ⲟⲩϥ = "هو". تلحق بالأفعال وحروف الجر.'
        },
        examples: [
          { coptic: 'ⲡⲓⲟⲩⲱϣⲓ ⲉⲣⲟϥ', translit: 'pi-ouoshi erof', meaning: { de: 'der Lobpreis für ihn', en: 'praise to him', ar: 'التسبيح له' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Übungszusammenfassung', en: 'Practice Review', ar: 'مراجعة تطبيقية' },
        rule: {
          de: 'Übung: Übersetze kurze Sätze unter Verwendung von Präfixen und Suffixen.',
          en: 'Exercise: Translate short sentences using prefixes and suffixes.',
          ar: 'تمرين: ترجم جملًا قصيرة باستخدام السوابق واللواحق.'
        },
        examples: [
          { coptic: 'ⲁϥⲥⲱⲧⲉⲙ ⲛ̀ϩⲏⲧϥ', translit: 'af-sotem en-heetf', meaning: { de: 'Er hörte in seinem Herzen.', en: 'He heard in his heart.', ar: 'سمع في قلبه.' } }
        ]
      }
    ]
  },

  'm16-l2': {
    id: 'm16-l2',
    order: 2,
    moduleId: 'm16',
    title: {
      de: 'Fortgeschrittene Verbformen & Passiv',
      en: 'Advanced Verb Forms & Passive',
      ar: 'صيغ الأفعال المتقدمة والمنفعل'
    },
    prerequisites: ['m16-l1'],
    quizId: 'q16-l2',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Passiv-Konstruktionen', en: 'Passive Constructions', ar: 'التركيبات المنفعلة' },
        rule: {
          de: 'Bohairisches Koptisch kennt verschiedene Passiv-Konstruktionen, oft mit Partikeln wie ⲁⲩ- oder durch Kontext. Das Passiv zeigt, dass das Subjekt die Handlung erleidet.',
          en: 'Bohairic Coptic has various passive constructions, often with particles like ⲁⲩ- or through context. The passive shows that the subject undergoes the action.',
          ar: 'القبطية البوحيرية تحتوي على تركيبات منفعلة مختلفة، غالباً بجزيئات مثل ⲁⲩ- أو عبر السياق. المنفعل يظهر أن الفاعل يتلقى الفعل.'
        },
        examples: [
          { coptic: 'ⲁⲩⲥⲱⲧⲉⲙ ⲛ̀ⲡⲓⲥⲁϫⲓ', translit: 'au-sotem en-ep-saji', meaning: { de: 'das Wort wurde gehört', en: 'the word was heard', ar: 'الكلمة سُمعت' } },
          { coptic: 'ⲁⲩⲙⲉⲩⲓⲱⲧ ⲙ̀Ⲫϯ', translit: 'au-meuiiot em-Efnouti', meaning: { de: 'Gott wurde geliebt', en: 'God was loved', ar: 'الله أُحبّ' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Kausative Verben mit ⲙⲁ-', en: 'Causative Verbs with ⲙⲁ-', ar: 'أفعال السببية بـ ⲙⲁ-' },
        rule: {
          de: 'Das Präfix ⲙⲁ- macht Verben kausativ: „bewirken, dass jemand etwas tut". Beispiel: ⲙⲁⲥⲱⲧⲉⲙ = „bewirken, dass jemand hört".',
          en: 'The prefix ⲙⲁ- makes verbs causative: "cause someone to do something". Example: ⲙⲁⲥⲱⲧⲉⲙ = "cause to hear".',
          ar: 'السابقة ⲙⲁ- تجعل الأفعال سببية: "يجعل شخصاً يفعل شيئاً". مثال: ⲙⲁⲥⲱⲧⲉⲙ = "يجعل يسمع".'
        },
        examples: [
          { coptic: 'ⲙⲁⲥⲱⲧⲉⲙ ⲙ̀ⲡⲓⲗⲁⲟⲥ', translit: 'ma-sotem em-ep-laos', meaning: { de: 'das Volk zum Hören bringen', en: 'make the people hear', ar: 'يجعل الشعب يسمع' } },
          { coptic: 'ⲙⲁⲙⲉⲩⲓⲱⲧ ⲙ̀ⲡⲓⲣⲱⲙⲓ', translit: 'ma-meuiiot em-pi-romi', meaning: { de: 'den Mann zum Lieben bringen', en: 'make the man love', ar: 'يجعل الرجل يحب' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Verben mit ⲛⲉ- (werden)', en: 'Verbs with ⲛⲉ- (to become)', ar: 'أفعال مع ⲛⲉ- (يصبح)' },
        rule: {
          de: 'ⲛⲉ- drückt einen Zustandswechsel aus: „werden, sich verwandeln in". Wird oft mit Adjektiven kombiniert.',
          en: 'ⲛⲉ- expresses a state change: "to become, to turn into". Often combined with adjectives.',
          ar: 'ⲛⲉ- تعبّر عن تغيير الحالة: "يصبح/يتحول إلى". غالباً تُدمج مع الصفات.'
        },
        examples: [
          { coptic: 'ⲛⲉⲟⲩⲱⲛⲓ', translit: 'ne-ouoni', meaning: { de: 'Licht werden', en: 'become light', ar: 'يصبح نوراً' } },
          { coptic: 'ⲛⲉⲙⲉⲩⲓⲱⲧ', translit: 'ne-meuiiot', meaning: { de: 'liebend werden', en: 'become loving', ar: 'يصبح محباً' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲁⲩⲥⲱⲧⲉⲙ ⲛ̀ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲡ̀ϭⲟⲓⲥ',
          translit: 'au-sotem en-ep-saji ente ep-chois',
          meaning: { de: 'Das Wort des Herrn wurde gehört.', en: 'The word of the Lord was heard.', ar: 'كلمة الرب سُمعت.' }
        }
      }
    ]
  }
};

export const QUIZZES: Record<string, Quiz> = {
  'q16-l1': {
    id: 'q16-l1',
    lessonId: 'm16-l1',
    title: { de: 'Quiz: Wiederholung & Fortgeschrittene Formen', en: 'Quiz: Review & Advanced Forms', ar: 'اختبار: المراجعة والأشكال المتقدّمة' },
    passScore: 70,
    questions: [
      {
        id: 'q16-l1-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet das Präfix ⲙⲁ-?', en: 'What does the prefix ⲙⲁ- mean?', ar: 'ماذا يعني السابقة ⲙⲁ-؟' },
        options: [
          { de: 'haben', en: 'to have', ar: 'يملك' },
          { de: 'machen / verursachen', en: 'to make / cause', ar: 'يعمل أو يُسبّب' },
          { de: 'werden', en: 'to become', ar: 'يصبح' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q16-l1-2',
        type: 'multiple-choice',
        questionText: { de: 'ⲛ̀ⲥⲁ bedeutet…', en: 'ⲛ̀ⲥⲁ means…', ar: 'ⲛ̀ⲥⲁ تعني…' },
        options: [
          { de: 'vor', en: 'before', ar: 'قبل' },
          { de: 'nach / hinter', en: 'after / behind', ar: 'بعد / خلف' },
          { de: 'über', en: 'over', ar: 'فوق' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q16-l1-3',
        type: 'multiple-choice',
        questionText: { de: 'Welches Suffix steht für „ihn"?', en: 'Which suffix means "him"?', ar: 'أي لاحقة تعني "له"؟' },
        options: [
          { de: 'ⲥ', en: '-s', ar: '-ⲥ' },
          { de: 'ϥ', en: '-f', ar: '-ϥ' },
          { de: 'ⲧⲉ', en: '-te', ar: '-ⲧⲉ' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q16-l1-4',
        type: 'multiple-choice',
        questionText: { de: 'Welche Form ist ein Beispiel für das Präsens?', en: 'Which form is an example of the present tense?', ar: 'أي صيغة هي مثال على زمن الحاضر؟' },
        options: [
          { de: 'ϯⲙⲟϣⲓ', en: 'ti-moshi', ar: 'ϯⲙⲟϣⲓ' },
          { de: 'ⲛ̀ϥⲙⲟϣⲓ', en: 'enf-moshi', ar: 'ⲛ̀ϥⲙⲟϣⲓ' },
          { de: 'ⲁϥⲙⲟϣⲓ', en: 'af-moshi', ar: 'ⲁϥⲙⲟϣⲓ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q16-l1-5',
        type: 'multiple-choice',
        questionText: { de: 'Welche Kombination ist richtig gebildet?', en: 'Which combination is correctly formed?', ar: 'أي تركيب صحيح؟' },
        options: [
          { de: 'ⲛ̀ⲥⲁ ⲡⲓⲙⲁⲁⲩ = nach der Mutter', en: 'ⲛ̀ⲥⲁ pi-maav = after the mother', ar: 'ⲛ̀ⲥⲁ ⲡⲓⲙⲁⲁⲩ = بعد الأم' },
          { de: 'ⲛ̀ⲥⲁ ⲡⲓⲣⲱⲙⲓ = vor dem Mann', en: 'ⲛ̀ⲥⲁ pi-romi = before the man', ar: 'ⲛ̀ⲥⲁ ⲡⲓⲣⲱⲙⲓ = قبل الرجل' },
          { de: 'ⲙ̀ⲥⲁ ⲡⲓⲣⲱⲙⲓ = unter dem Mann', en: 'ⲙ̀ⲥⲁ pi-romi = under the man', ar: 'ⲙ̀ⲥⲁ ⲡⲓⲣⲱⲙⲓ = تحت الرجل' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q16-l2': {
    id: 'q16-l2',
    lessonId: 'm16-l2',
    title: { de: 'Quiz: Fortgeschrittene Verbformen', en: 'Quiz: Advanced Verb Forms', ar: 'اختبار: صيغ الأفعال المتقدمة' },
    passScore: 70,
    questions: [
      {
        id: 'q16-l2-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲁⲩ- in Passiv-Konstruktionen?', en: 'What does ⲁⲩ- mean in passive constructions?', ar: 'ماذا يعني ⲁⲩ- في التركيبات المنفعلة؟' },
        options: [
          { de: 'Passiv-Marker', en: 'passive marker', ar: 'علامة المنفعل' },
          { de: 'Aktiv-Marker', en: 'active marker', ar: 'علامة الفاعل' },
          { de: 'Imperativ', en: 'imperative', ar: 'أمر' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q16-l2-2',
        type: 'multiple-choice',
        questionText: { de: 'Was macht ⲛⲉ-?', en: 'What does ⲛⲉ- do?', ar: 'ماذا يفعل ⲛⲉ-؟' },
        options: [
          { de: 'drückt Zustandswechsel aus (werden)', en: 'expresses state change (become)', ar: 'يعبّر عن تغيير الحالة (يصبح)' },
          { de: 'macht Verben kausativ', en: 'makes verbs causative', ar: 'يجعل الأفعال سببية' },
          { de: 'zeigt Passiv an', en: 'shows passive', ar: 'يدل على المنفعل' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};
