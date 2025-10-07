// Module 3 – Artikel & Pronomen (Bohairisch)
import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  'm3-l1': {
    id: 'm3-l1',
    order: 1,
    moduleId: 'm3',
    title: {
      de: 'Das erste Präsens',
      en: 'The First Present Tense',
      ar: 'زمن المضارع الأول',
    },
    prerequisites: ['l3-4'],
    quizId: 'q4-1',
    slides: [
      {
        type: 'grammar',
        title: {
          de: 'Bildung des ersten Präsens',
          en: 'Formation of the First Present',
          ar: 'تكوين زمن المضارع الأول',
        },
        rule: {
          de: 'Das erste Präsens beschreibt eine andauernde Handlung oder einen allgemeinen Zustand. Es wird durch Personalpräfixe vor dem Infinitiv des Verbs gebildet.',
          en: 'The first present describes an ongoing action or general state. It is formed by adding personal prefixes to the verb stem.',
          ar: 'يصف المضارع الأول فعلاً مستمراً أو حالة عامة. يتكون من إضافة بادئات شخصية إلى جذر الفعل.',
        },
        examples: [
          { coptic: 'ϯⲙⲟϣⲓ', translit: 'ti-moshi', meaning: { de: 'ich gehe', en: 'I walk', ar: 'أنا أمشي' } },
          { coptic: 'ⲕ̀ⲙⲟϣⲓ', translit: 'ek-moshi', meaning: { de: 'du gehst', en: 'you walk', ar: 'أنت تمشي' } },
          { coptic: 'ϥ̀ⲙⲟϣⲓ', translit: 'ef-moshi', meaning: { de: 'er geht', en: 'he walks', ar: 'هو يمشي' } },
          { coptic: 'ⲧⲉⲛⲙⲟϣⲓ', translit: 'ten-moshi', meaning: { de: 'wir gehen', en: 'we walk', ar: 'نحن نمشي' } },
        ],
      },
      {
        type: 'grammar',
        title: {
          de: 'Negation im Präsens',
          en: 'Negation in the Present',
          ar: 'النفي في المضارع',
        },
        rule: {
          de: 'Um eine Aussage zu verneinen, folgt auf das Verb die Partikel ⲁⲛ (an). Vor dem Verb kann zur Betonung ⲛ̀– (en–) gesetzt werden.',
          en: 'To negate a statement, add ⲁⲛ (an) after the verb. Optionally, place ⲛ̀– (en–) before the verb for emphasis.',
          ar: 'للنفي، تُضاف "ⲁⲛ" بعد الفعل. يمكن وضع "ⲛ̀" قبله للتأكيد.',
        },
        examples: [
          { coptic: 'ⲕ̀ⲥⲁϫⲓ ⲁⲛ', translit: 'ek-saji an', meaning: { de: 'du sprichst nicht', en: 'you do not speak', ar: 'أنت لا تتكلم' } },
          { coptic: 'ⲛ̀ϯⲥⲱⲧⲉⲙ ⲁⲛ', translit: 'en-ti-sotem an', meaning: { de: 'ich höre nicht', en: 'I do not hear', ar: 'أنا لا أسمع' } },
        ],
      },
      {
        type: 'grammar',
        title: {
          de: 'Der verschobene Subjektindikator',
          en: 'The Postponed Subject Indicator',
          ar: 'أداة تأخير الفاعل',
        },
        rule: {
          de: 'Mit ⲛ̀ϫⲉ (enje) kann das Subjekt hinter dem Verb stehen. Diese Form wird häufig in griechisch beeinflussten Texten verwendet.',
          en: 'With ⲛ̀ϫⲉ (enje), the subject can follow the verb, often to mirror Greek syntax.',
          ar: 'باستخدام "ⲛ̀ϫⲉ" يمكن أن يأتي الفاعل بعد الفعل، وغالبًا لتقليد تركيب اليونانية.',
        },
        examples: [
          { coptic: 'ⲥ̀ⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ', translit: 'es-sotem enje pi-romi', meaning: { de: 'der Mann hört', en: 'the man listens', ar: 'الرجل يستمع' } },
        ],
      },
      {
        type: 'grammar',
        title: {
          de: 'Objektmarker',
          en: 'Object Markers',
          ar: 'علامات المفعول به',
        },
        rule: {
          de: 'Das direkte Objekt wird mit ⲛ̀ oder ⲙ̀ markiert (ⲙ̀ vor Vilminor-Buchstaben). Wenn das Objekt ein Pronomen ist, werden Suffixe angehängt.',
          en: 'The direct object is marked with ⲛ̀ or ⲙ̀ (ⲙ̀ before Vilminor letters). If the object is a pronoun, pronominal suffixes are attached.',
          ar: 'يُميز المفعول به المباشر بـ "ⲛ̀" أو "ⲙ̀" (قبل حروف الفيلمينور). إذا كان ضميراً، تُضاف لاحقة ضميرية.',
        },
        examples: [
          { coptic: 'ϯⲥⲱⲧⲉⲙ ⲉ̀ⲡⲉⲕⲥⲁϫⲓ', translit: 'ti-sotem e-pek-saji', meaning: { de: 'ich höre dein Wort', en: 'I hear your word', ar: 'أسمع كلمتك' } },
          { coptic: 'ϥ̀ⲙⲟϣⲓ ⲛ̀ⲧⲉ ⲡⲓⲕⲉⲙⲉ', translit: 'ef-moshi ente pi-keme', meaning: { de: 'er geht durch das Land', en: 'he walks through the land', ar: 'هو يسير في الأرض' } },
        ],
      },
      {
        type: 'sentence',
        item: {
          text: 'ϯⲙⲟϣⲓ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ',
          translit: 'ti-moshi enje pi-romi',
          meaning: { de: 'Ich gehe, sagt der Mann', en: 'I walk, says the man', ar: 'أنا أمشي، قال الرجل' },
        },
        spiritual: {
          bibleVerse: {
            de: '„Wandle vor mir und sei fromm.“',
            en: '"Walk before Me and be blameless."',
            ar: '«سِر أمامي وكن كاملاً.»',
          },
          bibleReference: { de: '1. Mose 17:1', en: 'Genesis 17:1', ar: 'تكوين ١٧:١' },
          fatherQuote: {
            de: '„Ein tugendhafter Wandel ist das sichtbare Gebet.“',
            en: '"A virtuous walk is a visible prayer."',
            ar: 'السلوك الفاضل هو صلاة منظورة.',
          },
          fatherReference: {
            de: 'Hl. Gregor von Nyssa, zitiert bei Papandrea, *Reading the Early Church Fathers*, Kap. 3',
            en: 'St. Gregory of Nyssa, in Papandrea, *Reading the Early Church Fathers*, Ch. 3',
            ar: 'القديس غريغوريوس النيسي (باباندريا، الآباء الأوائل)',
          },
        },
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲕ̀ⲥⲁϫⲓ ⲁⲛ ⲛ̀ϫⲉ ⲡⲓⲥⲁϫⲓ',
          translit: 'ek-saji an enje pi-saji',
          meaning: { de: 'Der Sprecher schweigt.', en: 'The speaker is silent.', ar: 'المتحدث صامت.' },
        },
        spiritual: {
          bibleVerse: {
            de: '„Ein jeglicher Mensch sei schnell zum Hören, langsam zum Reden.“',
            en: '"Let every man be swift to hear, slow to speak."',
            ar: '«ليكن كل إنسان مسرعاً في الاستماع، مبطئاً في التكلم.»',
          },
          bibleReference: { de: 'Jakobus 1:19', en: 'James 1:19', ar: 'يعقوب ١:١٩' },
          fatherQuote: {
            de: '„Schweigen ist oft eine höhere Predigt als Worte.“',
            en: '"Silence is often a higher sermon than words."',
            ar: 'الصمت كثيراً ما يكون عظة أعمق من الكلام.',
          },
          fatherReference: {
            de: 'Hl. Antonius, *Apophthegmata Patrum* (Bercot, *Dictionary of Early Christian Beliefs*, S. 580)',
            en: 'St. Anthony, *Apophthegmata Patrum* (Bercot, p. 580)',
            ar: 'القديس أنطونيوس، أقوال الآباء',
          },
        },
      },
      {
        type: 'sentence',
        item: {
          text: 'ϥ̀ⲙⲟϣⲓ ⲛ̀ⲧⲉ ⲡⲓⲙⲁ ⲙ̀ⲡⲓⲉ̀ⲕⲕⲗⲏⲥⲓⲁ',
          translit: 'ef-moshi ente pi-ma em-piekklesia',
          meaning: { de: 'Er geht zum Ort der Kirche.', en: 'He goes to the place of the Church.', ar: 'هو يذهب إلى مكان الكنيسة.' },
        },
        spiritual: {
          bibleVerse: {
            de: '„Ich freute mich über die, die zu mir sagten: Lass uns zum Hause des HERRN gehen!“',
            en: '"I rejoiced when they said to me: Let us go to the house of the Lord!"',
            ar: '«فرحت بالقائلين لي إلى بيت الرب نذهب.»',
          },
          bibleReference: { de: 'Psalm 122:1', en: 'Psalm 122:1', ar: 'مزمور ١٢٢:١' },
          fatherQuote: {
            de: '„Wer zur Kirche eilt, eilt zu Christus.“',
            en: '"He who hastens to the Church hastens to Christ."',
            ar: 'من يسرع إلى الكنيسة يسرع إلى المسيح.',
          },
          fatherReference: {
            de: 'Hl. Kyrill von Jerusalem, *Katechese 4* (Papandrea, Kap. 5)',
            en: 'St. Cyril of Jerusalem, Catechesis 4 (Papandrea Ch. 5)',
            ar: 'القديس كيرلس الأورشليمي، التعليم الرابع',
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  'q4-1': {
    id: 'q4-1',
    lessonId: 'm3-l1',
    title: { de: 'Quiz: Das erste Präsens', en: 'Quiz: The First Present Tense', ar: 'اختبار: زمن المضارع الأول' },
    passScore: 70,
    questions: [
      {
        id: 'q4-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ϯⲙⲟϣⲓ"?', en: 'What does "ϯⲙⲟϣⲓ" mean?', ar: 'ماذا يعني "ϯⲙⲟϣⲓ"؟' },
        options: [
          { de: 'ich gehe', en: 'I walk', ar: 'أنا أمشي' },
          { de: 'du gehst', en: 'you walk', ar: 'أنت تمشي' },
          { de: 'er geht', en: 'he walks', ar: 'هو يمشي' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q4-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Wie negiert man ein Verb im ersten Präsens?', en: 'How do you negate a verb in the first present?', ar: 'كيف تنفي فعلاً في المضارع الأول؟' },
        options: [
          { de: 'mit ⲁⲛ nach dem Verb', en: 'with ⲁⲛ after the verb', ar: 'بـ ⲁⲛ بعد الفعل' },
          { de: 'mit ⲙ̀ vor dem Verb', en: 'with ⲙ̀ before the verb', ar: 'بـ ⲙ̀ قبل الفعل' },
          { de: 'mit ϯⲙ̀- vor dem Verb', en: 'with ϯⲙ̀- before the verb', ar: 'بـ ϯⲙ̀- قبل الفعل' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q4-1-3',
        type: 'multiple-choice',
        questionText: { de: 'Was ist die Funktion von ⲛ̀ϫⲉ?', en: 'What is the function of ⲛ̀ϫⲉ?', ar: 'ما هي وظيفة ⲛ̀ϫⲉ؟' },
        options: [
          { de: 'es markiert das Objekt', en: 'it marks the object', ar: 'يحدد المفعول به' },
          { de: 'es verschiebt das Subjekt hinter das Verb', en: 'it postpones the subject after the verb', ar: 'يؤخر الفاعل بعد الفعل' },
          { de: 'es zeigt Negation an', en: 'it shows negation', ar: 'يدل على النفي' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q4-1-4',
        type: 'multiple-choice',
        questionText: { de: 'Welcher Buchstabe markiert das direkte Objekt vor Vilminor-Buchstaben?', en: 'Which letter marks the direct object before Vilminor letters?', ar: 'أي حرف يحدد المفعول به قبل حروف فيلمينور؟' },
        options: [
          { de: 'ⲛ̀', en: 'ⲛ̀', ar: 'ⲛ̀' },
          { de: 'ⲙ̀', en: 'ⲙ̀', ar: 'ⲙ̀' },
          { de: 'ⲉ̀', en: 'ⲉ̀', ar: 'ⲉ̀' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q4-1-5',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ⲕ̀ⲥⲁϫⲓ ⲁⲛ"?', en: 'What does "ⲕ̀ⲥⲁϫⲓ ⲁⲛ" mean?', ar: 'ماذا يعني "ⲕ̀ⲥⲁϫⲓ ⲁⲛ"؟' },
        options: [
          { de: 'du sprichst', en: 'you speak', ar: 'أنت تتكلم' },
          { de: 'du sprichst nicht', en: 'you do not speak', ar: 'أنت لا تتكلم' },
          { de: 'ich spreche nicht', en: 'I do not speak', ar: 'أنا لا أتكلم' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q4-1-6',
        type: 'multiple-choice',
        questionText: { de: 'Wie lautet "wir gehen" im ersten Präsens?', en: 'How is "we walk" in the first present?', ar: 'كيف تقول "نحن نمشي" في المضارع الأول؟' },
        options: [
          { de: 'ⲧⲉⲛⲙⲟϣⲓ', en: 'ⲧⲉⲛⲙⲟϣⲓ', ar: 'ⲧⲉⲛⲙⲟϣⲓ' },
          { de: 'ϯⲙⲟϣⲓ', en: 'ϯⲙⲟϣⲓ', ar: 'ϯⲙⲟϣⲓ' },
          { de: 'ⲥⲉⲙⲟϣⲓ', en: 'ⲥⲉⲙⲟϣⲓ', ar: 'ⲥⲉⲙⲟϣⲓ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q4-1-7',
        type: 'multiple-choice',
        questionText: { de: 'Was ist der Unterschied zwischen ⲛ̀ und ⲙ̀ als Objektmarker?', en: 'What is the difference between ⲛ̀ and ⲙ̀ as object markers?', ar: 'ما الفرق بين ⲛ̀ و ⲙ̀ كعلامات مفعول؟' },
        options: [
          { de: 'ⲛ̀ wird vor Vilminor verwendet, ⲙ̀ sonst', en: 'ⲛ̀ is used before Vilminor, ⲙ̀ otherwise', ar: 'ⲛ̀ تُستخدم قبل فيلمينور، ⲙ̀ في غير ذلك' },
          { de: 'ⲙ̀ wird vor Vilminor verwendet, ⲛ̀ sonst', en: 'ⲙ̀ is used before Vilminor, ⲛ̀ otherwise', ar: 'ⲙ̀ تُستخدم قبل فيلمينور، ⲛ̀ في غير ذلك' },
          { de: 'beide sind identisch', en: 'both are identical', ar: 'كلاهما متطابق' }
        ],
        correctAnswerIndex: 1
      }
    ]
  }
};
