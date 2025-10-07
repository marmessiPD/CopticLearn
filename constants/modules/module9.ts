// --- Module 9: Relativsätze ---
import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
    // M9-L1
    'm9-l1': {
      id: 'm9-l1',
      order: 1,
      moduleId: 'm9',
      title: { de: 'Relativsätze I: ⲉ̀ⲧⲉ-Grundform', en: 'Relatives I', ar: 'جمل الوصل I' },
      prerequisites: ['l3-4'],
      quizId: 'q9-1',
      slides: [
        {
          type: 'grammar',
          title: { de: 'Relativpartikel ⲉ̀ⲧⲉ', en: 'Relative ⲉ̀ⲧⲉ', ar: 'أداة الوصل ⲉ̀ⲧⲉ' },
          rule: {
            de: 'ⲉ̀ⲧⲉ leitet Relativsätze ein. Das Bezugswort steht mit bestimmtem Artikel. Im Satz erscheint oft ein rückbezügliches Pronomen (ⲡⲉ/ⲧⲉ/ⲛⲉ oder pronominale Formen) zur Kongruenz.',
            en: 'ⲉ̀ⲧⲉ introduces relative clauses. The head noun takes a definite article. A resumptive pronoun often appears for agreement.',
            ar: 'ⲉ̀ⲧⲉ تُدخل جملة صلة. الاسم ذو أداة تعريف، وغالبًا يوجد ضمير عائد للمطابقة.'
          },
          examples: [
            { coptic: 'ⲡ̀ⲣⲱⲙⲓ ⲉ̀ⲧⲉ ϥ̀ⲥⲱⲧⲉⲙ ⲉ̀ⲡⲉⲛⲟⲩϯ', translit: 'ep-romi ete ef-sotem e-penouti', meaning: { de: 'der Mann, der Gott hört', en: 'the man who listens to God', ar: 'الرجل الذي يسمع الله' } },
            { coptic: 'ⲧ̀ϩⲏⲧ ⲉ̀ⲧⲉ ⲥⲉⲕⲁⲁⲓ ⲙ̀ⲙⲟⲥ', translit: 'et-heet ete se-kaai emmos', meaning: { de: 'das Herz, das sie rein machen', en: 'the heart which they purify', ar: 'القلب الذي يطهرونه' } }
          ]
        },
        {
          type: 'grammar',
          title: { de: 'Kongruenz & Rückbezug', en: 'Agreement & Resumption', ar: 'المطابقة والضمير العائد' },
          rule: {
            de: 'Nach ⲉ̀ⲧⲉ steht häufig ⲡⲉ/ⲧⲉ/ⲛⲉ nach dem Prädikatnominal oder entsprechende Objekt-/Dativ-Pronomina (ⲙ̀ⲙⲟϥ, ⲛⲁϥ ...).',
            en: 'After ⲉ̀ⲧⲉ, predicate nominals often take ⲡⲉ/ⲧⲉ/ⲛⲉ; objects/datives use pronominal clitics (ⲙ̀ⲙⲟϥ, ⲛⲁϥ ...).',
            ar: 'بعد ⲉ̀ⲧⲉ يظهر ⲡⲉ/ⲧⲉ/ⲛⲉ مع الخبر، وللمفعول/المجرور تُستخدم لواحق مثل ⲙ̀ⲙⲟϥ، ⲛⲁϥ.'
          },
          examples: [
            { coptic: 'ⲡ̀ϣⲏⲣⲓ ⲉ̀ⲧⲉ ⲡⲉ ⲛ̀ⲧⲟϥ ⲡ̀ⲣⲱⲙⲓ', translit: 'ep-sheri ete pe entof ep-romi', meaning: { de: 'der Sohn, der jener Mann ist', en: 'the son who is that man', ar: 'الابن الذي هو ذلك الرجل' } },
            { coptic: 'ⲧ̀ⲥⲁϫⲓ ⲉ̀ⲧⲉ ϥ̀ⲥⲁϫⲓ ⲛⲁϥ', translit: 'et-saji ete ef-saji naf', meaning: { de: 'das Wort, zu dem er spricht', en: 'the word to which he speaks', ar: 'الكلمة التي يتكلم إليها' } }
          ]
        },
        {
          type: 'sentence',
          item: {
            text: 'ⲛⲓⲣⲱⲙⲓ ⲉ̀ⲧⲉ ⲥⲉⲛⲟⲩⲧⲉ ⲛ̀ⲧⲟⲟⲧⲟⲩ ⲛⲉ ⲙ̀ⲙⲟⲛⲟⲛ ⲉ̀ⲣⲟⲟⲩ',
            translit: 'ni-romi ete senoute entootou ne emmonon erou',
            meaning: { de: 'Die Menschen, die zu Gott gehören, sind nicht allein.', en: 'The people who belong to God are not alone.', ar: 'الناس الذين ينتمون إلى الله ليسوا وحدهم.' }
          },
          spiritual: {
            bibleVerse: { de: '„Selig sind, die reinen Herzens sind; denn sie werden Gott schauen.“', en: '“Blessed are the pure in heart, for they shall see God.”', ar: '«طوبى لأنقياء القلب لأنهم يعاينون الله»' },
            bibleReference: { de: 'Mt 5,8', en: 'Matt 5:8', ar: 'متى 5:8' },
            fatherQuote: {
              de: 'Sei beständig im Gebet und im Lesen. Zuerst rede du mit Gott, dann rede Gott mit dir.',
              en: 'Be constant in both prayer and reading. First, speak with God; then let God speak with you.',
              ar: 'اثبت في الصلاة والقراءة. تكلم مع الله أولًا ثم دع الله يتكلم معك.'
            },
            fatherReference: { de: 'Cyprian, De oratione, zitiert bei Bercot, 5.279–280.', en: 'Cyprian, De Oratione, in Bercot, pp. 279–280.', ar: 'كبريان، عن الصلاة، بركوت 279–280.' }
          }
        }
      ]
    },
  
    // M9-L2
    'm9-l2': {
      id: 'm9-l2',
      order: 2,
      moduleId: 'm9',
      title: { de: 'Relativsätze II: „der/die/das, welche(r) …“', en: 'Relatives II', ar: 'جمل الوصل II' },
      prerequisites: ['m9-l1'],
      quizId: 'q9-2',
      slides: [
        {
          type: 'grammar',
          title: { de: 'Komplexe Relativa', en: 'Complex Relatives', ar: 'وصلات معقدة' },
          rule: {
            de: 'ⲉ̀ⲧⲉ + Zeitform des Prädikats: Tempus bleibt erhalten. Bei Objekten oft ⲙ̀ⲙⲟ- + Suffix: ⲙ̀ⲙⲟϥ, ⲙ̀ⲙⲟⲥ ...',
            en: 'ⲉ̀ⲧⲉ + predicate in its own tense. Objects often marked with ⲙ̀ⲙⲟ- + suffix.',
            ar: 'ⲉ̀ⲧⲉ مع الفعل بزمنه. المفعول غالبًا بعلامة ⲙ̀ⲙⲟ- مع لاحقة.'
          },
          examples: [
            { coptic: 'ⲡ̀ⲛⲟⲩⲧⲉ ⲉ̀ⲧⲉ ⲁϥⲑⲱⲟⲩ ⲙ̀ⲙⲟⲛ ⲡⲉ', translit: 'ep-noute ete af-thou emmon pe', meaning: { de: 'der Gott, der uns gerettet hat', en: 'the God who has saved us', ar: 'الله الذي خلّصنا' } },
            { coptic: 'ⲧ̀ⲥⲟⲟⲩⲛ ⲉ̀ⲧⲉ ⲥⲉⲙⲟⲩⲛ ⲙ̀ⲙⲟⲥ', translit: 'et-soun ete se-moun emmos', meaning: { de: 'die Weisheit, die sie loben', en: 'the wisdom that they praise', ar: 'الحكمة التي يمدحونها' } }
          ]
        },
        {
          type: 'sentence',
          item: {
            text: 'ⲡ̀ⲗⲁⲟⲥ ⲉ̀ⲧⲉ ⲥⲉⲙⲉⲧⲁⲛⲁⲩ ⲉ̀ⲡ̀ⲛⲟⲩⲧⲉ ⲛⲉ ⲛ̀ⲧⲟⲟⲩ ⲛⲓⲙ',
            translit: 'ep-laos ete semet-anau ep-noute ne entou nim',
            meaning: { de: 'Das Volk, das den Blick auf Gott richtet, gehört ihm ganz.', en: 'The people who look to God belong wholly to him.', ar: 'الشعب الذي ينظر إلى الله هو له كليًا.' }
          },
          spiritual: {
            bibleVerse: { de: '„Singt dem HERRN ein neues Lied!“', en: '“Sing to the LORD a new song!”', ar: '«رنّموا للرب ترنيمة جديدة!»' },
            bibleReference: { de: 'Ps 96,1', en: 'Ps 96:1', ar: 'مزمور 96:1' },
            fatherQuote: {
              de: 'Das Gebet ist die Mauer des Glaubens, seine Waffen und Geschosse gegen den Feind.',
              en: 'Prayer is the wall of faith, its arms and missiles against the foe.',
              ar: 'الصلاة هي سور الإيمان وسلاحه ضد العدو.'
            },
            fatherReference: { de: 'Tertullian, zitiert bei Bercot, 3.691.', en: 'Tertullian, in Bercot, p. 691.', ar: 'ترتليان، بركوت 691.' }
          }
        }
      ]
    },
};

export const QUIZZES: Record<string, Quiz> = {
  'q9-1': {
    id: 'q9-1',
    lessonId: 'm9-l1',
    title: { de: 'Quiz: Relativsätze I', en: 'Quiz: Relatives I', ar: 'اختبار: جمل الوصل I' },
    passScore: 70,
    questions: [
      {
        id: 'q9-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Was macht ⲉ̀ⲧⲉ?', en: 'What does ⲉ̀ⲧⲉ do?', ar: 'ما الذي يفعله ⲉ̀ⲧⲉ؟' },
        options: [
          { de: 'leitet Relativsätze ein', en: 'introduces relative clauses', ar: 'يُدخل جمل الوصل' },
          { de: 'negiert das Verb', en: 'negates the verb', ar: 'ينفي الفعل' },
          { de: 'zeigt Zukunft an', en: 'indicates future', ar: 'يدل على المستقبل' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q9-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Welche Form wird für Kongruenz im Relativsatz verwendet?', en: 'Which form is used for agreement in relative clauses?', ar: 'ما الصيغة المستخدمة للمطابقة في جمل الوصل؟' },
        options: [
          { de: 'rückbezügliche Pronomen (ⲡⲉ/ⲧⲉ/ⲛⲉ)', en: 'resumptive pronouns (ⲡⲉ/ⲧⲉ/ⲛⲉ)', ar: 'ضمائر عائدة (ⲡⲉ/ⲧⲉ/ⲛⲉ)' },
          { de: 'Artikel', en: 'articles', ar: 'أدوات' },
          { de: 'Präpositionen', en: 'prepositions', ar: 'حروف جر' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q9-2': {
    id: 'q9-2',
    lessonId: 'm9-l2',
    title: { de: 'Quiz: Relativsätze II', en: 'Quiz: Relatives II', ar: 'اختبار: جمل الوصل II' },
    passScore: 70,
    questions: [
      {
        id: 'q9-2-1',
        type: 'multiple-choice',
        questionText: { de: 'Wie markiert man Objekte in Relativsätzen?', en: 'How are objects marked in relative clauses?', ar: 'كيف تُحدد المفاعيل في جمل الوصل؟' },
        options: [
          { de: 'mit ⲙ̀ⲙⲟ- + Suffix', en: 'with ⲙ̀ⲙⲟ- + suffix', ar: 'بـ ⲙ̀ⲙⲟ- مع لاحقة' },
          { de: 'mit ⲛ̀ⲧⲉ', en: 'with ⲛ̀ⲧⲉ', ar: 'بـ ⲛ̀ⲧⲉ' },
          { de: 'mit ⲉ̀', en: 'with ⲉ̀', ar: 'بـ ⲉ̀' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};