// --- Modul 5: Verben — neue Lektionen (Bohairisch, nach Younan) ---
// Quellen für Grammatik: Younan, *So you want to learn – A guide to Bohairic Grammar*. :contentReference[oaicite:0]{index=0}
// Kirchenväter: Bercot (ed.), *Dictionary of Early Christian Beliefs*; Papandrea, *Reading the Early Church Fathers*; Akin, *The Fathers Know Best*. Zitierte Stellen sind in den Feldern fatherReference notiert.

import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
    // m5 — Verben (weitere Formen)
    'l5-2': {
      id: 'l5-2',
      order: 2,
      moduleId: 'm5',
      title: { de: 'Qualitatives Präsens', en: 'Qualitative Present', ar: 'الحاضر الوصفي' },
      prerequisites: ['l5-1'],
      quizId: 'q5-2',
      slides: [
        {
          type: 'grammar',
          title: { de: 'Funktion', en: 'Function', ar: 'الوظيفة' },
          rule: {
            de: 'Das qualitative Präsens beschreibt einen dauerhaften Zustand oder eine Eigenart, oft mit adjektivischem Sinn. Bildung: Personalpräfix + Verbalstamm (ohne Objektmarker).',
            en: 'The qualitative present describes a permanent state or quality, often adjectival. Formation: personal prefix + verbal stem (no object marker).',
            ar: 'الحاضر الوصفي يصف حالة دائمة أو صفة. التكوين: بادئة شخصية + جذر الفعل دون علامة مفعول.'
          },
          examples: [
            { coptic: 'ϯⲙⲟⲩϯ', translit: 'ti-mouti', meaning: { de: 'ich bin lebendig / lebe', en: 'I am alive', ar: 'أنا حيّ' } },
            { coptic: 'ϥ̀ⲥⲟⲧⲏⲣ', translit: 'ef-sotēr', meaning: { de: 'er ist rettend/retterhaft', en: 'he is saving', ar: 'هو مُخلِّص' } },
            { coptic: 'ⲧⲉⲛϣⲱⲡ', translit: 'ten-shop', meaning: { de: 'wir sind anwesend', en: 'we are present', ar: 'نحن حاضِرون' } }
          ],
          spiritual: {
            bibleVerse: {
              de: '„Denn ich lebe; und auch ihr sollt leben.“',
              en: '"Because I live, you also will live."',
              ar: '«لأَنِّي أَنَا حَيٌّ فَأَنْتُمْ سَتَحْيَوْنَ»'
            },
            bibleReference: { de: 'Joh 14,19 (Schlachter2000)', en: 'John 14:19 (Schlachter2000)', ar: 'يوحنا 14:19 (Sch2000)' },
            fatherQuote: {
              de: '„Er gibt Licht.“',
              en: '"He gives light."',
              ar: '«هو يُعطي النور»'
            },
            // Clement zitiert ein frühes Tauf-/Lichthymnus-Motiv; Kurzfassung. :contentReference[oaicite:2]{index=2}
            fatherReference: {
              de: 'Klemens v. Alex., *Protreptikos* (vgl. Licht-Hymnus).',
              en: 'Clement of Alexandria, *Exhortation to the Greeks* (light hymn).',
              ar: 'كليمنضس الإسكندري، الحث إلى اليونانيين (نشيد النور)'
            }
          },
          emoji: '✨'
        },
        {
          type: 'grammar',
          title: { de: 'Formenübersicht', en: 'Personal Prefixes', ar: 'البوادئ الشخصية' },
          rule: {
            de: 'Bohairisch, Qualitativ: ϯ-/ⲧⲉ- (1sg/1pl ⲧⲉⲛ-), ⲕ̀-, ⲥ̀-, ϥ̀-, ⲥ̀-, ⲛ̀ⲧⲟⲧⲉⲛ- nicht verwendet; Fokus auf Einwort-Prädikat.',
            en: 'Bohairic qualitative uses simple subject prefixes. Focus on single-word predicate.',
            ar: 'البحيري يستخدم بادئات بسيطة مع خبر كلمة واحدة.'
          },
          examples: [
            { coptic: 'ⲥ̀ⲛⲁϩ', translit: 'es-nah', meaning: { de: 'du (m.) bist weise', en: 'you (m.) are wise', ar: 'أنت حكيم' } },
            { coptic: 'ⲥ̀ⲕⲁⲑⲁⲣⲟⲥ', translit: 'es-katharos', meaning: { de: 'du (f.) bist rein', en: 'you (f.) are pure', ar: 'أنتِ طاهرة' } }
          ],
          emoji: '🧭'
        },
        {
          type: 'grammar',
          title: { de: 'Negation', en: 'Negation', ar: 'النفي' },
          rule: {
            de: 'Negation wie im Präsens: optional ⲛ̀- vor, ⲁⲛ nach dem Ausdruck: ⲛ̀-(Präfix+Stamm) ... ⲁⲛ.',
            en: 'Negate with optional ⲛ̀- before and ⲁⲛ after the predicate.',
            ar: 'النفي بـ ⲛ̀- قبل الخبر و ⲁⲛ بعده.'
          },
          examples: [
            { coptic: 'ⲛ̀ϯⲙⲟⲩϯ ⲁⲛ', translit: 'en-ti-mouti an', meaning: { de: 'ich bin nicht lebendig', en: 'I am not alive', ar: 'لست حياً' } }
          ],
          spiritual: {
            bibleVerse: {
              de: '„Ohne mich könnt ihr nichts tun.“',
              en: '"Apart from me you can do nothing."',
              ar: '«بِدُونِي لاَ تَقْدِرُونَ أَنْ تَفْعَلُوا شَيْئًا»'
            },
            bibleReference: { de: 'Joh 15,5 (Schlachter2000)', en: 'John 15:5 (Schlachter2000)', ar: 'يوحنا 15:5 (Sch2000)' },
            fatherQuote: {
              de: '„Am Tag des Herrn versammelt euch.“',
              en: '"On the Lord’s Day, gather yourselves."',
              ar: '«في يوم الربّ، اجتمعوا»'
            },
            // Didache zum Herrentag als Gemeindepraxis. :contentReference[oaicite:3]{index=3}
            fatherReference: {
              de: 'Didache, zum Herrentag (vgl. Bercot, *Lord’s Day*).',
              en: 'Didache on the Lord’s Day (Bercot, *Lord’s Day*).',
              ar: 'الديداخي عن يوم الربّ (بيركوت)'
            }
            ,
          },
          emoji: '🛡️'
        },
        {
          type: 'grammar',
          title: { de: 'Gebrauch mit Artikeln', en: 'With Articles', ar: 'مع الأدوات' },
          rule: {
            de: 'Mit bestimmtem Artikel wird das Qualitativ substantivisch: ⲡ̀ⲥⲱⲧⲏⲣ „der Retter“, ϯⲙⲟⲩϯ „das Leben“ im Kontext.',
            en: 'With definite article, the qualitative can become nominal: ⲡ̀ⲥⲱⲧⲏⲣ "the Savior".',
            ar: 'مع أداة التعريف يصبح اسمًا: ⲡ̀ⲥⲱⲧⲏⲣ «المخلّص».'
          },
          examples: [
            { coptic: 'ⲡ̀ⲥⲱⲧⲏⲣ ⲡⲉ Ⲡ̀ⲭⲣⲓⲥⲧⲟⲥ', translit: 'ep-sōtēr pe P-Christos', meaning: { de: 'Christus ist der Retter', en: 'Christ is the Savior', ar: 'المسيح هو المخلّص' } },
            { coptic: 'ϯⲙⲟⲩϯ ⲙ̀ⲫ̀ⲛⲟⲩϯ', translit: 'ti-mouti em-Efnouti', meaning: { de: 'das Leben in Gott', en: 'life in God', ar: 'الحياة في الله' } }
          ],
          emoji: '📘'
        }
      ]
    },
  
    'l5-3': {
      id: 'l5-3',
      order: 3,
      moduleId: 'm5',
      title: { de: 'Relativ: ⲉⲧ- / ⲉ- mit Adjektiven', en: 'Relative: ⲉⲧ- / ⲉ- with Adjectives', ar: 'الأدوات النسبية مع الصفات' },
      prerequisites: ['l5-2'],
      quizId: 'q5-3',
      slides: [
        {
          type: 'grammar',
          title: { de: 'ⲉⲧ- bildet Relativsatz', en: 'ⲉⲧ- forms relative clause', ar: 'ⲉⲧ- تُكوِّن جملة موصولة' },
          rule: {
            de: 'ⲉⲧ- + Qualitativ/Partizip: „der/die/das, der … ist“. Nach Artikel und in Kongruenz.',
            en: 'ⲉⲧ- + qualitative/participle: “who/that is …” after the article.',
            ar: 'ⲉⲧ- + الوصفي/اسم الفاعل: «الذي/التي هو …».'
          },
          examples: [
            { coptic: 'ⲡ̀ⲣⲱⲙⲓ ⲉⲧ-ϥ̀ⲙⲉⲣⲓ', translit: 'ep-romi et-f-meri', meaning: { de: 'der Mann, der gütig ist', en: 'the man who is kind', ar: 'الرجل الذي هو لطيف' } },
            { coptic: 'ϯⲥⲙⲏ ⲉⲧ-ⲥ̀ⲕⲁⲑⲁⲣⲁ', translit: 'ti-sme et-s-kathara', meaning: { de: 'die Stimme, die rein ist', en: 'the voice that is pure', ar: 'الصوت الطاهر' } }
          ],
          emoji: '🧩'
        },
        {
          type: 'grammar',
          title: { de: 'ⲉ- nach Präposition', en: 'ⲉ- after prepositions', ar: 'ⲉ- بعد حروف الجر' },
          rule: {
            de: 'Nach Präpositionen erscheint oft ⲉ- statt ⲉⲧ-: ⲙ̀ⲡⲉⲕⲛⲟⲩⲧⲉ ⲉ-ⲥ̀ⲕⲁⲑⲁⲣⲁ „in deinem Gott, der rein ist“ (Lehrbeispiel).',
            en: 'After prepositions, ⲉ- may replace ⲉⲧ-.',
            ar: 'بعد حروف الجر قد تأتي ⲉ- بدل ⲉⲧ-.'
          },
          examples: [
            { coptic: 'ϩⲓ-ⲡ̀ⲉⲕⲟⲓⲕ ⲉ-ϥ̀ⲙⲁⲣⲟⲩⲣ', translit: 'hi-ep-ékoik e-f-marour', meaning: { de: 'in deinem Haus, das bitter ist', en: 'in your house that is bitter', ar: 'في بيتك المرّ' } }
          ],
          emoji: '🔗',
          spiritual: {
            bibleVerse: {
              de: '„Selig sind, die reinen Herzens sind.“',
              en: '"Blessed are the pure in heart."',
              ar: '«طُوبَى لِلأَنْقِيَاءِ الْقَلْبِ»'
            },
            bibleReference: { de: 'Mt 5,8 (Schlachter2000)', en: 'Matt 5:8 (Schlachter2000)', ar: 'متى 5:8 (Sch2000)' },
            fatherQuote: {
              de: '„Christentum ist Tugend.“',
              en: '"Christianity is virtue."',
              ar: '«المسيحية فضيلة»'
            },
            // Zusammenfassung des Apologeten-Themas Tugend; kurz gehalten. :contentReference[oaicite:4]{index=4}
            fatherReference: {
              de: 'Apologeten-Thema bei Papandrea, Kap. „Christianity is virtue“.',
              en: 'Apologist theme in Papandrea, “Christianity is virtue”.',
              ar: 'باباندريا: المسيحية فضيلة'
            }
          }
        },
        {
          type: 'grammar',
          title: { de: 'Negative Relativform', en: 'Negative relative', ar: 'النسبة النافية' },
          rule: {
            de: 'Negation im Relativsatz: ⲉⲧ- … ⲁⲛ. Beispiel: ⲡ̀ⲙⲁ ⲉⲧ-ϥ̀ⲕⲁⲑⲁⲣⲟⲥ ⲁⲛ „der Ort, der nicht rein ist“.',
            en: 'Negation: ⲉⲧ- … ⲁⲛ inside the clause.',
            ar: 'النفي: ⲉⲧ- … ⲁⲛ داخل الجملة.'
          },
          examples: [
            { coptic: 'ⲡ̀ⲗⲁⲟⲥ ⲉⲧ-ϥ̀ⲙⲉⲧⲁⲛⲟⲓⲁ ⲁⲛ', translit: 'ep-laos et-f-metanoia an', meaning: { de: 'das Volk, das keine Umkehr hat', en: 'the people without repentance', ar: 'الشعب بلا توبة' } }
          ],
          emoji: '🚫'
        }
      ]
    },
  
    'l5-4': {
      id: 'l5-4',
      order: 4,
      moduleId: 'm5',
      title: { de: 'Besondere Stämme & Lexik', en: 'Special Stems & Lexicon', ar: 'جذور خاصة ومعجم' },
      prerequisites: ['l5-3'],
      quizId: 'q5-4',
      slides: [
        {
          type: 'grammar',
          title: { de: 'Häufige qualitative Stämme', en: 'Common qualitative stems', ar: 'جذور وصفية شائعة' },
          rule: {
            de: 'Beispiele: ⲙⲉⲣⲓ „gut/gütig“, ⲕⲁⲑⲁⲣⲟⲥ „rein“, ⲙⲟⲩϯ „leben“, ⲥⲱⲧⲉⲣ „rettend“.',
            en: 'Examples: ⲙⲉⲣⲓ good, ⲕⲁⲑⲁⲣⲟⲥ pure, ⲙⲟⲩϯ alive, ⲥⲱⲧⲉⲣ saving.',
            ar: 'أمثلة: ⲙⲉⲣⲓ طيب، ⲕⲁⲑⲁⲣⲟⲥ طاهر، ⲙⲟⲩϯ حيّ، ⲥⲱⲧⲉⲣ مخلّص.'
          },
          examples: [
            { coptic: 'ϥ̀ⲙⲉⲣⲓ', translit: 'ef-meri', meaning: { de: 'er ist gütig', en: 'he is kind', ar: 'هو طيب' } },
            { coptic: 'ⲥ̀ⲕⲁⲑⲁⲣⲟⲥ', translit: 'es-katharos', meaning: { de: 'du bist rein', en: 'you are pure', ar: 'أنت طاهر' } }
          ],
          emoji: '📚',
          spiritual: {
            bibleVerse: {
              de: '„Schaffe in mir, Gott, ein reines Herz.“',
              en: '"Create in me a clean heart, O God."',
              ar: '«قَلْبًا نَقِيًّا اخْلُقْ فِيَّ يَا ٱللهُ»'
            },
            bibleReference: { de: 'Ps 51,12 (Schlachter2000)', en: 'Ps 51:10 (Schlachter2000)', ar: 'مزمور 51:10 (Sch2000)' },
            fatherQuote: {
              de: '„Der Logos macht uns vernünftig.“',
              en: '"The Logos makes us truly reasonable."',
              ar: '«اللوغوس يجعلنا عقلانيين حقًا»'
            },
            // Origen über den Logos als Vernunft; Kurzfassung. :contentReference[oaicite:5]{index=5}
            fatherReference: {
              de: 'Origenes, zitiert bei Bercot, *Logos*-Einträge.',
              en: 'Origen, via Bercot, *Logos* entries.',
              ar: 'أوريجانس (بيركوت: اللوغوس)'
            }
          }
        },
        {
          type: 'sentence',
          item: {
            text: 'ⲡ̀ⲣⲱⲙⲓ ⲉⲧ-ϥ̀ⲙⲉⲣⲓ ⲡⲉ ⲡ̀ⲭⲣⲓⲥⲧⲟⲥ ⲙ̀ⲡⲉϥⲏⲓ',
            translit: 'ep-romi et-f-meri pe p-Christos em-pefi',
            meaning: { de: 'Der gütige Mann ist Christus in seinem Haus.', en: 'The kind man is Christ in his house.', ar: 'الرجل الطيب هو المسيح في بيته.' }
          },
          emoji: '🏠'
        },
        {
          type: 'grammar',
          title: { de: 'Pastoraler Kontext', en: 'Pastoral context', ar: 'سياق رعوي' },
          rule: {
            de: 'Frühe Kirche als Hauskirche; Lehre betont Tugend und Einheit. Nutze Relativkonstruktionen für katechetische Sätze.',
            en: 'Early Church met in homes; catechesis stressed virtue and unity. Use relatives for catechetical lines.',
            ar: 'الكنيسة الأولى اجتمعت في البيوت؛ التعليم ركّز على الفضيلة والوحدة.'
          },
          // Hintergrund Papandrea zur Hauskirche und Katechese. :contentReference[oaicite:6]{index=6}
          examples: [
            { coptic: 'ⲛⲓⲕⲉⲕⲗⲏⲥⲓⲁ ⲉⲧ-ⲟⲩⲟⲩⲛⲟⲩϩ ⲛ̀ⲧⲉ ⲡⲓⲙⲏϣ', translit: 'ni-keklēsia et-ou-ounouh ente pi-mēsh', meaning: { de: 'die Kirchen, die in den Häusern sind', en: 'the churches that are in the houses', ar: 'الكنائس التي في البيوت' } }
          ],
          emoji: '🏛️'
        }
      ]
    }
  };

export const QUIZZES: Record<string, Quiz> = {
  'q5-2': {
    id: 'q5-2',
    lessonId: 'l5-2',
    title: { de: 'Quiz: Qualitatives Präsens', en: 'Quiz: Qualitative Present', ar: 'اختبار: الحاضر الوصفي' },
    passScore: 70,
    questions: [
      {
        id: 'q5-2-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ϯⲙⲟⲩϯ"?', en: 'What does "ϯⲙⲟⲩϯ" mean?', ar: 'ماذا يعني "ϯⲙⲟⲩϯ"؟' },
        options: [
          { de: 'ich bin lebendig', en: 'I am alive', ar: 'أنا حيّ' },
          { de: 'ich lebe', en: 'I live', ar: 'أنا أعيش' },
          { de: 'beide sind korrekt', en: 'both are correct', ar: 'كلاهما صحيح' }
        ],
        correctAnswerIndex: 2
      },
      {
        id: 'q5-2-2',
        type: 'multiple-choice',
        questionText: { de: 'Wie negiert man das qualitative Präsens?', en: 'How do you negate the qualitative present?', ar: 'كيف تنفي الحاضر الوصفي؟' },
        options: [
          { de: 'mit ⲛ̀- vor und ⲁⲛ nach dem Ausdruck', en: 'with ⲛ̀- before and ⲁⲛ after', ar: 'بـ ⲛ̀- قبل و ⲁⲛ بعد' },
          { de: 'mit ϯⲙ̀- vor dem Verb', en: 'with ϯⲙ̀- before the verb', ar: 'بـ ϯⲙ̀- قبل الفعل' },
          { de: 'mit ⲙ̀ⲙⲟⲛ', en: 'with ⲙ̀ⲙⲟⲛ', ar: 'بـ ⲙ̀ⲙⲟⲛ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q5-2-3',
        type: 'multiple-choice',
        questionText: { de: 'Was ist die Funktion des qualitativen Präsens?', en: 'What is the function of the qualitative present?', ar: 'ما وظيفة الحاضر الوصفي؟' },
        options: [
          { de: 'beschreibt einen dauerhaften Zustand', en: 'describes a permanent state', ar: 'يصف حالة دائمة' },
          { de: 'beschreibt eine Handlung', en: 'describes an action', ar: 'يصف فعلاً' },
          { de: 'beschreibt die Zukunft', en: 'describes the future', ar: 'يصف المستقبل' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q5-3': {
    id: 'q5-3',
    lessonId: 'l5-3',
    title: { de: 'Quiz: Relativsätze', en: 'Quiz: Relative Clauses', ar: 'اختبار: جمل الوصل' },
    passScore: 70,
    questions: [
      {
        id: 'q5-3-1',
        type: 'multiple-choice',
        questionText: { de: 'Was macht ⲉⲧ- in einem Relativsatz?', en: 'What does ⲉⲧ- do in a relative clause?', ar: 'ما الذي يفعله ⲉⲧ- في جملة الوصل؟' },
        options: [
          { de: 'bildet einen Relativsatz', en: 'forms a relative clause', ar: 'يُكوّن جملة موصولة' },
          { de: 'negiert das Verb', en: 'negates the verb', ar: 'ينفي الفعل' },
          { de: 'zeigt die Zukunft an', en: 'indicates future', ar: 'يدل على المستقبل' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q5-3-2',
        type: 'multiple-choice',
        questionText: { de: 'Wann wird ⲉ- statt ⲉⲧ- verwendet?', en: 'When is ⲉ- used instead of ⲉⲧ-?', ar: 'متى تُستخدم ⲉ- بدلاً من ⲉⲧ-؟' },
        options: [
          { de: 'nach Präpositionen', en: 'after prepositions', ar: 'بعد حروف الجر' },
          { de: 'vor Nomen', en: 'before nouns', ar: 'قبل الأسماء' },
          { de: 'nie', en: 'never', ar: 'أبداً' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q5-4': {
    id: 'q5-4',
    lessonId: 'l5-4',
    title: { de: 'Quiz: Besondere Stämme', en: 'Quiz: Special Stems', ar: 'اختبار: جذور خاصة' },
    passScore: 70,
    questions: [
      {
        id: 'q5-4-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ϥ̀ⲙⲉⲣⲓ"?', en: 'What does "ϥ̀ⲙⲉⲣⲓ" mean?', ar: 'ماذا يعني "ϥ̀ⲙⲉⲣⲓ"؟' },
        options: [
          { de: 'er ist gütig', en: 'he is kind', ar: 'هو طيب' },
          { de: 'er ist rein', en: 'he is pure', ar: 'هو طاهر' },
          { de: 'er ist lebendig', en: 'he is alive', ar: 'هو حيّ' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};
