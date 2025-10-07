// Module 4 – Verben I: Erstes Präsens (Bohairisch)
import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  'm4-l1': {
    id: 'm4-l1',
    order: 1,
    moduleId: 'm4',
    title: {
      de: 'Präsens (Gegenwart)',
      en: 'Present Tense',
      ar: 'زمن المضارع الأول',
    },
    prerequisites: ['l3-4'],
    quizId: 'q4-1',
    slides: [
      {
        type: 'grammar',
        title: {
          de: 'Bildung des Präsens',
          en: 'Formation of the Present',
          ar: 'تكوين زمن المضارع الأول',
        },
        rule: {
          de: 'Das Präsens beschreibt eine andauernde Handlung oder einen allgemeinen Zustand. Es wird durch Personalpräfixe vor dem Infinitiv des Verbs gebildet.',
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

  // Lektion 2 – Vergangenheit
  'm4-l2': {
    id: 'm4-l2',
    order: 2,
    moduleId: 'm4',
    title: {
      de: 'Das Perfekt (Vergangenheit)',
      en: 'The Perfect (Past Tense)',
      ar: 'زمن الماضي',
    },
    prerequisites: ['m4-l1'],
    quizId: 'q4-2',
    slides: [
      {
        type: 'grammar',
        title: {
          de: 'Bildung der Vergangenheit',
          en: 'Formation of the Past',
          ar: 'تكوين زمن الماضي',
        },
        rule: {
          de: 'Die Vergangenheit wird mit der Partikel ⲁ vor das Verb gebildet. Danach folgt das Personalpräfix. Beispiel: ⲁϥϫⲱ = „er sprach“.',
          en: 'The past is formed with the particle ⲁ before the verb, followed by the personal prefix. Example: ⲁϥϫⲱ = “he spoke”.',
          ar: 'يُصاغ الماضي بوضع الأداة ⲁ قبل الفعل، تليها البادئة الشخصية. مثال: ⲁϥϫⲱ = «هو تكلّم».',
        },
        examples: [
          { coptic: 'ⲁⲓϫⲱ', translit: 'ai-jo', meaning: { de: 'ich sprach', en: 'I spoke', ar: 'تكلّمتُ' } },
          { coptic: 'ⲁϥϫⲱ', translit: 'af-jo', meaning: { de: 'er sprach', en: 'he spoke', ar: 'هو تكلّم' } },
          { coptic: 'ⲁⲛⲟⲕ ⲁⲓⲉⲣⲉ ϩⲱⲃ', translit: 'anok ai-ere hob', meaning: { de: 'ich tat Gutes', en: 'I did good', ar: 'عملت خيراً' } },
        ],
      },
      {
        type: 'grammar',
        title: { de: 'Negation der Vergangenheit', en: 'Negation of the Past', ar: 'نفي الماضي' },
        rule: {
          de: 'Die Verneinung erfolgt mit ⲙ̀ⲡⲉ ... ⲁⲛ. Beispiel: ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ = „er sprach nicht“.',
          en: 'Negation uses ⲙ̀ⲡⲉ ... ⲁⲛ. Example: ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ = “he did not speak”.',
          ar: 'يُنفى الماضي باستخدام ⲙ̀ⲡⲉ ... ⲁⲛ. مثال: ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ = «هو لم يتكلم».',
        },
        examples: [
          { coptic: 'ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ', translit: 'empa-f-jo an', meaning: { de: 'er sprach nicht', en: 'he did not speak', ar: 'لم يتكلّم' } },
          { coptic: 'ⲙ̀ⲡⲁⲓⲙⲟϣⲓ ⲁⲛ', translit: 'empa-i-moshi an', meaning: { de: 'ich ging nicht', en: 'I did not go', ar: 'لم أذهب' } },
        ],
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲁϥϫⲱ ⲛ̀ϫⲉ ⲡⲓⲛⲟⲩⲧⲉ',
          translit: 'af-jo enje pi-noute',
          meaning: { de: 'Gott sprach', en: 'God spoke', ar: 'تكلّم الله' },
        },
        spiritual: {
          bibleVerse: {
            de: '„Und Gott sprach: Es werde Licht!“',
            en: '"And God said: Let there be light!"',
            ar: '«وقال الله: ليكن نور!»',
          },
          bibleReference: { de: '1. Mose 1:3', en: 'Genesis 1:3', ar: 'تكوين ١:٣' },
          fatherQuote: {
            de: '„Das Wort Gottes ist Tat und Licht zugleich.“',
            en: '"The Word of God is both deed and light."',
            ar: 'كلمة الله هي عمل ونور معاً.',
          },
          fatherReference: {
            de: 'Hl. Athanasius, *Contra Gentes* 5',
            en: 'St. Athanasius, *Against the Heathen* 5',
            ar: 'القديس أثناسيوس، ضد الوثنيين ٥',
          },
        },
      },
    ],
  },

  // Lektion 3 – Zukunft
  'm4-l3': {
    id: 'm4-l3',
    order: 3,
    moduleId: 'm4',
    title: {
      de: 'Die Zukunft (ⲙⲁⲣⲉ-Form)',
      en: 'The Future (ⲙⲁⲣⲉ Form)',
      ar: 'زمن المستقبل',
    },
    prerequisites: ['m4-l2'],
    quizId: 'q4-3',
    slides: [
      {
        type: 'grammar',
        title: {
          de: 'Bildung der Zukunft',
          en: 'Formation of the Future',
          ar: 'تكوين زمن المستقبل',
        },
        rule: {
          de: 'Die Zukunft wird mit ⲙⲁⲣⲉ vor dem Verb gebildet. Danach folgt das Personalpräfix. Beispiel: ⲙⲁⲣⲉϥϫⲱ = „er wird sprechen“.',
          en: 'Future tense is formed with ⲙⲁⲣⲉ before the verb and the personal prefix. Example: ⲙⲁⲣⲉϥϫⲱ = “he will speak”.',
          ar: 'يتكوّن المستقبل بوضع ⲙⲁⲣⲉ قبل الفعل مع البادئة الشخصية. مثال: ⲙⲁⲣⲉϥϫⲱ = «سيتكلم».',
        },
        examples: [
          { coptic: 'ⲙⲁⲣⲉϯⲙⲟϣⲓ', translit: 'mare-ti-moshi', meaning: { de: 'ich werde gehen', en: 'I will go', ar: 'سأذهب' } },
          { coptic: 'ⲙⲁⲣⲉϥϫⲱ', translit: 'mare-f-jo', meaning: { de: 'er wird sprechen', en: 'he will speak', ar: 'سيتكلّم' } },
        ],
      },
      {
        type: 'grammar',
        title: { de: 'Negation der Zukunft', en: 'Negation of the Future', ar: 'نفي المستقبل' },
        rule: {
          de: 'Für die Verneinung wird ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ verwendet: ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ = „er wird nicht sprechen“.',
          en: 'Negation uses ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ: ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ = “he will not speak”.',
          ar: 'يُنفى المستقبل باستخدام ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ: ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ = «لن يتكلم».',
        },
        examples: [
          { coptic: 'ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ', translit: 'emmare-f-jo an', meaning: { de: 'er wird nicht sprechen', en: 'he will not speak', ar: 'لن يتكلم' } },
          { coptic: 'ⲙ̀ⲙⲁⲣⲉⲛⲉⲓⲣⲉ ⲁⲛ', translit: 'emmare-ne-ere an', meaning: { de: 'wir werden es nicht tun', en: 'we will not do it', ar: 'لن نفعل ذلك' } },
        ],
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲙⲁⲣⲉϥϫⲱ ⲛ̀ϫⲉ ⲡⲓⲛⲟⲩⲧⲉ',
          translit: 'maref-jo enje pi-noute',
          meaning: { de: 'Gott wird sprechen', en: 'God will speak', ar: 'سيتكلّم الله' },
        },
        spiritual: {
          bibleVerse: {
            de: '„Der Himmel und die Erde werden vergehen, aber meine Worte werden nicht vergehen.“',
            en: '"Heaven and earth will pass away, but my words will not pass away."',
            ar: '«السماء والأرض تزولان، ولكن كلامي لا يزول.»',
          },
          bibleReference: { de: 'Markus 13:31', en: 'Mark 13:31', ar: 'مرقس ١٣:٣١' },
          fatherQuote: {
            de: '„Das Wort, das Gott verheißen hat, bleibt ewig wahr.“',
            en: '"The word God has promised remains eternally true."',
            ar: 'الكلمة التي وعد بها الله تبقى صادقة إلى الأبد.',
          },
          fatherReference: {
            de: 'Hl. Irenäus, *Adversus Haereses* 3, 8',
            en: 'St. Irenaeus, *Against Heresies* 3.8',
            ar: 'القديس إيريناوس ضد الهرطقات ٣:٨',
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  'q4-1': {
    id: 'q4-1',
    lessonId: 'm4-l1',
    title: { de: 'Quiz: Das erste Präsens', en: 'Quiz: The First Present Tense', ar: 'اختبار: زمن المضارع الأول' },
    passScore: 70,
    questions: [
      {
        id: 'q4-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ϥ̀ⲙⲟϣⲓ"?', en: 'What does "ϥ̀ⲙⲟϣⲓ" mean?', ar: 'ماذا يعني "ϥ̀ⲙⲟϣⲓ"؟' },
        options: [
          { de: 'ich gehe', en: 'I walk', ar: 'أنا أمشي' },
          { de: 'du gehst', en: 'you walk', ar: 'أنت تمشي' },
          { de: 'er geht', en: 'he walks', ar: 'هو يمشي' }
        ],
        correctAnswerIndex: 2
      },
      {
        id: 'q4-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Wie negiert man "ϯⲥⲱⲧⲉⲙ"?', en: 'How do you negate "ϯⲥⲱⲧⲉⲙ"?', ar: 'كيف تنفي "ϯⲥⲱⲧⲉⲙ"؟' },
        options: [
          { de: 'ⲛ̀ϯⲥⲱⲧⲉⲙ ⲁⲛ', en: 'ⲛ̀ϯⲥⲱⲧⲉⲙ ⲁⲛ', ar: 'ⲛ̀ϯⲥⲱⲧⲉⲙ ⲁⲛ' },
          { de: 'ϯⲙ̀ⲥⲱⲧⲉⲙ', en: 'ϯⲙ̀ⲥⲱⲧⲉⲙ', ar: 'ϯⲙ̀ⲥⲱⲧⲉⲙ' },
          { de: 'ⲙ̀ⲙⲟⲛ ϯⲥⲱⲧⲉⲙ', en: 'ⲙ̀ⲙⲟⲛ ϯⲥⲱⲧⲉⲙ', ar: 'ⲙ̀ⲙⲟⲛ ϯⲥⲱⲧⲉⲙ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q4-1-3',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ⲥ̀ⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ"?', en: 'What does "ⲥ̀ⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ" mean?', ar: 'ماذا يعني "ⲥ̀ⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ"؟' },
        options: [
          { de: 'der Mann hört', en: 'the man listens', ar: 'الرجل يستمع' },
          { de: 'der Mann geht', en: 'the man walks', ar: 'الرجل يمشي' },
          { de: 'der Mann spricht', en: 'the man speaks', ar: 'الرجل يتكلم' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q4-1-4',
        type: 'multiple-choice',
        questionText: { de: 'Welches Objektmarker steht vor "ⲡⲓⲕⲉⲙⲉ"?', en: 'Which object marker comes before "ⲡⲓⲕⲉⲙⲉ"?', ar: 'أي علامة مفعول به تأتي قبل "ⲡⲓⲕⲉⲙⲉ"؟' },
        options: [
          { de: 'ⲛ̀ (weil ⲕ kein Vilminor ist)', en: 'ⲛ̀ (because ⲕ is not Vilminor)', ar: 'ⲛ̀ (لأن ⲕ ليس فيلمينور)' },
          { de: 'ⲙ̀ (weil es vor einem Wort steht)', en: "ⲙ̀ (because it's before a word)", ar: 'ⲙ̀ (لأنه قبل كلمة)' },
          { de: 'ⲉ̀', en: 'ⲉ̀', ar: 'ⲉ̀' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q4-1-5',
        type: 'multiple-choice',
        questionText: { de: 'Was ist das erste Präsens?', en: 'What is the first present tense?', ar: 'ما هو زمن المضارع الأول؟' },
        options: [
          { de: 'eine vergangene Handlung', en: 'a past action', ar: 'فعل ماضي' },
          { de: 'eine andauernde oder allgemeine Handlung', en: 'an ongoing or general action', ar: 'فعل مستمر أو عام' },
          { de: 'eine zukünftige Handlung', en: 'a future action', ar: 'فعل مستقبلي' }
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  'q4-2': {
    id: 'q4-2',
    lessonId: 'm4-l2',
    title: { de: 'Quiz: Vergangenheit', en: 'Quiz: Past Tense', ar: 'اختبار: زمن الماضي' },
    passScore: 70,
    questions: [
      {
        id: 'q4-2-1',
        type: 'multiple-choice',
        questionText: { de: 'Welche Partikel bildet die Vergangenheit?', en: 'Which particle forms the past?', ar: 'ما الأداة التي تكوّن الماضي؟' },
        options: [{ de: 'ⲁ', en: 'ⲁ', ar: 'ⲁ' }, { de: 'ⲙⲁⲣⲉ', en: 'ⲙⲁⲣⲉ', ar: 'ⲙⲁⲣⲉ' }, { de: 'ⲛ̀', en: 'ⲛ̀', ar: 'ⲛ̀' }],
        correctAnswerIndex: 0,
      },
      {
        id: 'q4-2-2',
        type: 'multiple-choice',
        questionText: { de: 'Wie sagt man „er sprach nicht“?', en: 'How do you say “he did not speak”?', ar: 'كيف تقول «لم يتكلم»؟' },
        options: [
          { de: 'ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ', en: 'ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ', ar: 'ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ' },
          { de: 'ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ', en: 'ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ', ar: 'ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ' },
          { de: 'ⲁϥϫⲱ ⲁⲛ', en: 'ⲁϥϫⲱ ⲁⲛ', ar: 'ⲁϥϫⲱ ⲁⲛ' },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  'q4-3': {
    id: 'q4-3',
    lessonId: 'm4-l3',
    title: { de: 'Quiz: Zukunft', en: 'Quiz: Future Tense', ar: 'اختبار: زمن المستقبل' },
    passScore: 70,
    questions: [
      {
        id: 'q4-3-1',
        type: 'multiple-choice',
        questionText: { de: 'Mit welcher Partikel bildet man die Zukunft?', en: 'Which particle forms the future?', ar: 'ما الأداة التي تُكوّن المستقبل؟' },
        options: [{ de: 'ⲙⲁⲣⲉ', en: 'ⲙⲁⲣⲉ', ar: 'ⲙⲁⲣⲉ' }, { de: 'ⲁ', en: 'ⲁ', ar: 'ⲁ' }, { de: 'ⲙ̀ⲡⲉ', en: 'ⲙ̀ⲡⲉ', ar: 'ⲙ̀ⲡⲉ' }],
        correctAnswerIndex: 0,
      },
      {
        id: 'q4-3-2',
        type: 'multiple-choice',
        questionText: { de: 'Wie negiert man die Zukunft?', en: 'How is the future negated?', ar: 'كيف يُنفى زمن المستقبل؟' },
        options: [
          { de: 'ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ', en: 'ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ', ar: 'ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ' },
          { de: 'ⲙ̀ⲡⲉ ... ⲁⲛ', en: 'ⲙ̀ⲡⲉ ... ⲁⲛ', ar: 'ⲙ̀ⲡⲉ ... ⲁⲛ' },
          { de: 'ⲛ̀ ... ⲁⲛ', en: 'ⲛ̀ ... ⲁⲛ', ar: 'ⲛ̀ ... ⲁⲛ' },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
};
