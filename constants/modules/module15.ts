// ───────────────────────────────
// Module 15 – Different Ways of Having Things
// Source grammar from Younan, "So You Want to Learn Coptic?" (ch. 15 § 15.1-15.5)
// Patristic citations from Papandrea & Bercot; Bible verses Schlachter 2000
// ───────────────────────────────

import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {

    // Lesson 15-1 – Possessive Articles
    'l15-1': {
      id: 'l15-1',
      order: 1,
      moduleId: 'm15',
      title: {
        de: 'Besitzanzeigende Artikel',
        en: 'Possessive Articles',
        ar: 'أدوات الملكية'
      },
      prerequisites: [],
      quizId: 'q15-1',
      slides: [
        {
          type: 'grammar',
          title: {
            de: 'Bildung des Possessivartikels',
            en: 'Forming the Possessive Article',
            ar: 'تكوين أداة الملكية'
          },
          rule: {
            de: 'Die Possessivartikel werden gebildet, indem die Personalpräfixe vor den Artikel gesetzt werden (ⲡ, ⲧ, ⲛ). Sie drücken „mein, dein, sein“ usw. aus.',
            en: 'Possessive articles are formed by placing the personal prefix before the article (ⲡ, ⲧ, ⲛ) to express “my, your, his,” etc.',
            ar: 'تُكوَّن أدوات الملكية بإضافة السابقة الشخصية قبل أداة التعريف (ⲡ، ⲧ، ⲛ) لتعبير عن "لي، لك، له" إلخ.'
          },
          examples: [
            { coptic: 'ⲡⲁⲓⲱⲧ', translit: 'pa-iot', meaning: { de: 'mein Vater', en: 'my father', ar: 'أبي' } },
            { coptic: 'ⲧⲁⲙⲁⲁⲩ', translit: 'ta-maau', meaning: { de: 'meine Mutter', en: 'my mother', ar: 'أمي' } },
            { coptic: 'ⲛⲁϣⲏⲣⲓ', translit: 'na-sheri', meaning: { de: 'meine Kinder', en: 'my children', ar: 'أولادي' } }
          ]
        },
        {
          type: 'spiritual',
          bibleVerse: {
            de: 'Ehre deinen Vater und deine Mutter.',
            en: 'Honor your father and your mother.',
            ar: 'أكرم أباك وأمك.'
          },
          bibleReference: { de: '2. Mose 20:12', en: 'Exodus 20:12', ar: 'خروج ٢٠:١٢' },
          fatherQuote: {
            de: 'Die Familie ist die erste Kirche des Menschen.',
            en: 'The family is a man’s first church.',
            ar: 'الأسرة هي الكنيسة الأولى للإنسان.'
          },
          fatherReference: { de: 'Hl. Klemens von Alexandria', en: 'St. Clement of Alexandria', ar: 'القديس كليمندس الإسكندري' },
          emoji: '👨‍👩‍👧'
        }
      ]
    },
  
    // Lesson 15-2 – Possessive Construction
    'l15-2': {
      id: 'l15-2',
      order: 2,
      moduleId: 'm15',
      title: {
        de: 'Die Besitzkonstruktion',
        en: 'The Possessive Construction',
        ar: 'تركيب الملكية'
      },
      prerequisites: ['l15-1'],
      quizId: 'q15-1',
      slides: [
        {
          type: 'grammar',
          title: { de: 'Nomen + ⲛ̀ + Nomen', en: 'Noun + ⲛ̀ + Noun', ar: 'اسم + ⲛ̀ + اسم' },
          rule: {
            de: 'Besitz wird durch die Konstruktion „ⲡⲓ… ⲛ̀…“ angezeigt: das erste Substantiv gehört dem zweiten.',
            en: 'Possession is shown by the construction “ⲡⲓ… ⲛ̀…” — the first noun belongs to the second.',
            ar: 'يُعبَّر عن الملكية بتركيب "ⲡⲓ… ⲛ̀…" حيث الاسم الأول يخص الثاني.'
          },
          examples: [
            { coptic: 'ⲡⲓⲏⲓ ⲛ̀ⲡ̀ⲣⲱⲙⲓ', translit: 'pi-ee en-ep-romi', meaning: { de: 'das Haus des Mannes', en: 'the house of the man', ar: 'بيت الرجل' } },
            { coptic: 'ⲡⲓⲣⲁⲛ ⲛ̀ⲧⲉ Ⲫϯ', translit: 'pi-ran ente Efnouti', meaning: { de: 'der Name Gottes', en: 'the name of God', ar: 'اسم الله' } }
          ]
        },
        {
          type: 'sentence',
          item: {
            text: 'ⲡⲓⲥⲱⲙⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ',
            translit: 'pi-soma ente pi-Christos',
            meaning: { de: 'der Leib Christi', en: 'the body of Christ', ar: 'جسد المسيح' }
          },
          emoji: '✝️'
        }
      ]
    },
  
    // Lesson 15-3 – Existential ⲟⲩⲱⲛ (“to have”)
    'l15-3': {
      id: 'l15-3',
      order: 3,
      moduleId: 'm15',
      title: {
        de: 'Das Existential „ⲟⲩⲱⲛ“ – Haben und Sein',
        en: 'The Existential ⲟⲩⲱⲛ – To Have and To Be',
        ar: 'الفعل ⲟⲩⲱⲛ (يكون/يملك)'
      },
      prerequisites: ['l15-2'],
      quizId: 'q15-1',
      slides: [
        {
          type: 'grammar',
          title: { de: 'Verwendung von ⲟⲩⲱⲛ', en: 'Use of ⲟⲩⲱⲛ', ar: 'استخدام ⲟⲩⲱⲛ' },
          rule: {
            de: 'ⲟⲩⲱⲛ bedeutet „es gibt“ oder „haben“. Mit ⲛ̀- zeigt man den Besitzer: „ⲟⲩⲱⲛ ⲛ̀ⲁⲓ“ = ich habe.',
            en: 'ⲟⲩⲱⲛ means “there is” or “to have.” Add ⲛ̀- to mark the possessor: “ⲟⲩⲱⲛ ⲛ̀ⲁⲓ” = I have.',
            ar: 'ⲟⲩⲱⲛ تعني "يوجد" أو "يملك". بإضافة ⲛ̀- يُحدد المالك: "ⲟⲩⲱⲛ ⲛ̀ⲁⲓ" = أنا عندي.'
          },
          examples: [
            { coptic: 'ⲟⲩⲱⲛ ⲛ̀ⲁⲓ ⲛ̀ⲟⲩⲉⲣⲡⲉ', translit: 'ouon nai nou-erpe', meaning: { de: 'ich habe ein Haus', en: 'I have a house', ar: 'عندي بيت' } },
            { coptic: 'ⲟⲩⲱⲛ ⲛ̀ϥ ⲛ̀ϩⲏⲧ ⲉⲩⲟⲩⲁⲓ', translit: 'ouon nef nehit eu-ouai', meaning: { de: 'er hat ein gutes Herz', en: 'he has a good heart', ar: 'له قلب صالح' } }
          ]
        },
        {
          type: 'spiritual',
          bibleVerse: {
            de: 'Denn alles, was wir haben, kommt von Gott.',
            en: 'For all we have comes from God.',
            ar: 'كل ما لنا هو من الله.'
          },
          bibleReference: { de: '1 Chronik 29:14', en: '1 Chronicles 29:14', ar: 'أخبار الأيام الأول ٢٩:١٤' },
          fatherQuote: {
            de: 'Wer reich an Gott ist, besitzt alles.',
            en: 'He who is rich in God possesses all.',
            ar: 'من هو غني بالله يملك كل شيء.'
          },
          fatherReference: { de: 'Hl. Athanasius', en: 'St. Athanasius', ar: 'القديس أثناسيوس' },
          emoji: '🙏'
        }
      ]
    },
  
    // Lesson 15-4 – Possessive Pronouns
    'l15-4': {
      id: 'l15-4',
      order: 4,
      moduleId: 'm15',
      title: {
        de: 'Possessiv-Pronomen',
        en: 'Possessive Pronouns',
        ar: 'ضمائر الملكية'
      },
      prerequisites: ['l15-3'],
      quizId: 'q15-1',
      slides: [
        {
          type: 'grammar',
          title: { de: 'Unabhängige Possessivpronomen', en: 'Independent Possessive Pronouns', ar: 'ضمائر الملكية المنفصلة' },
          rule: {
            de: 'Wenn kein Substantiv folgt, wird ⲡⲁⲓ, ⲧⲁⲓ, ⲛⲁⲓ verwendet (entspricht „meiner / meine / meine (pl.)“).',
            en: 'When no noun follows, use ⲡⲁⲓ, ⲧⲁⲓ, ⲛⲁⲓ = “mine” (m./f./pl.).',
            ar: 'عندما لا يتبعها اسم تُستخدم ⲡⲁⲓ، ⲧⲁⲓ، ⲛⲁⲓ بمعنى "لي" (مذكر/مؤنث/جمع).'
          },
          examples: [
            { coptic: 'ⲡⲁⲓ ⲡⲉ', translit: 'pai pe', meaning: { de: 'das ist meiner', en: 'that is mine (m.)', ar: 'هذا لي' } },
            { coptic: 'ⲧⲁⲓ ⲧⲉ', translit: 'tai te', meaning: { de: 'das ist meine (f.)', en: 'that is mine (f.)', ar: 'هذه لي' } }
          ]
        },
        {
          type: 'sentence',
          item: {
            text: 'ⲡⲁⲓ ⲡⲉ ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫϯ',
            translit: 'pai pe ep-shiiri em-Efnouti',
            meaning: { de: 'Dieser ist der Sohn Gottes', en: 'This is the Son of God', ar: 'هذا هو ابن الله' }
          },
          emoji: '✨'
        }
      ]
    }
  };

export const QUIZZES: Record<string, Quiz> = {
  'q15-1': {
    id: 'q15-1',
    lessonId: 'l15-1',
    title: { de: 'Quiz: Besitz & Besitzartikel', en: 'Quiz: Possession & Possessive Articles', ar: 'اختبار: الملكية وأدوات الملكية' },
    passScore: 70,
    questions: [
      {
        id: 'q15-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Wie wird "mein Vater" auf Koptisch gesagt?', en: 'How is "my father" said in Coptic?', ar: 'كيف تقول "أبي" بالقبطية؟' },
        options: [
          { de: 'ⲡⲁⲓⲱⲧ', en: 'ⲡⲁⲓⲱⲧ', ar: 'ⲡⲁⲓⲱⲧ' },
          { de: 'ⲡⲉⲕⲓⲱⲧ', en: 'ⲡⲉⲕⲓⲱⲧ', ar: 'ⲡⲉⲕⲓⲱⲧ' },
          { de: 'ⲡⲉϥⲓⲱⲧ', en: 'ⲡⲉϥⲓⲱⲧ', ar: 'ⲡⲉϥⲓⲱⲧ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q15-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Was ist die Besitzkonstruktion mit ⲛ̀?', en: 'What is the possessive construction with ⲛ̀?', ar: 'ما تركيب الملكية بـ ⲛ̀؟' },
        options: [
          { de: 'Nomen + ⲛ̀ + Besitzer', en: 'noun + ⲛ̀ + possessor', ar: 'اسم + ⲛ̀ + المالك' },
          { de: 'Besitzer + ⲛ̀ + Nomen', en: 'possessor + ⲛ̀ + noun', ar: 'المالك + ⲛ̀ + اسم' },
          { de: 'beide sind korrekt', en: 'both are correct', ar: 'كلاهما صحيح' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q15-1-3',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲟⲩⲱⲛ?', en: 'What does ⲟⲩⲱⲛ mean?', ar: 'ماذا يعني ⲟⲩⲱⲛ؟' },
        options: [
          { de: 'es gibt/haben', en: 'there is/to have', ar: 'يوجد/يملك' },
          { de: 'sein', en: 'to be', ar: 'يكون' },
          { de: 'gehen', en: 'to go', ar: 'يذهب' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q15-1-4',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ⲡⲁⲓ ⲡⲉ"?', en: 'What does "ⲡⲁⲓ ⲡⲉ" mean?', ar: 'ماذا يعني "ⲡⲁⲓ ⲡⲉ"؟' },
        options: [
          { de: 'das ist meiner (m.)', en: 'that is mine (m.)', ar: 'هذا لي' },
          { de: 'das ist deiner', en: 'that is yours', ar: 'هذا لك' },
          { de: 'das ist seiner', en: 'that is his', ar: 'هذا له' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};
