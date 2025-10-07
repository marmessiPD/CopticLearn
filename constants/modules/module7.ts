// Modul 7 — Präpositionen I (Bohairisch, nach Younan)
// Quellen im Kommentar vermerkt. Bitte nicht entfernen.
// Einfache Präpositionen + pronominale Formen + „sa" Limitativ.
// Younan (Simple + Compound Preps, Nominalsätze) :contentReference[oaicite:0]{index=0}
// Younan (Präpositionen: pronominale Formen) :contentReference[oaicite:1]{index=1}
// Younan („sa" + Konjunktiv = Limitativ) :contentReference[oaicite:2]{index=2}
// Vokabular/Paradigmen-Übersicht (Inhaltsverz., Tabellen) :contentReference[oaicite:3]{index=3}
// Dogmatische Mini-Infobox: Vaterzitat (Beispiel Lactantius) :contentReference[oaicite:4]{index=4}

import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  'm7-l1': {
    id: 'm7-l1',
    order: 1,
    moduleId: 'm7',
    title: { de: 'Einfache Präpositionen & Nominalsatz', en: 'Simple Prepositions & Nominal Clause', ar: 'حروف الجر البسيطة والجملة الاسمية' },
    prerequisites: ['l3-4'],
    quizId: 'q7-1',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Kernpräpositionen', en: 'Core Prepositions', ar: 'حروف الجر الأساسية' },
        rule: {
          de: 'Präpositionen stehen vor dem Nomen. Häufige einfache Formen: ⲉ (zu/für, hinsichtlich), ⲛ̀ (in/aus/mit), ϩⲓ (auf), ϧⲉⲛ (in), ⲛⲉⲙ (mit/und), ⲉⲓⲃⲉ (wegen), ⲥⲁ (zu, gegen, bis), ϩⲱⲥ (wie), ⲁⲓⲕⲉⲛ (von, seit).',
          en: 'Prepositions precede the noun. Common simple forms: ⲉ, ⲛ̀, ϩⲓ, ϧⲉⲛ, ⲛⲉⲙ, ⲉⲓⲃⲉ, ⲥⲁ, ϩⲱⲥ, ⲁⲓⲕⲉⲛ.',
          ar: 'تسبق حروف الجر الاسم. أمثلة: ⲉ ، ⲛ̀ ، ϩⲓ ، ϧⲉⲛ ، ⲛⲉⲙ ، ⲉⲓⲃⲉ ، ⲥⲁ ، ϩⲱⲥ ، ⲁⲓⲕⲉⲛ.'
        },
        examples: [
          { coptic: 'ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ ϧⲉⲛ Ⲓ̅ⲗ̅ⲏ̅ⲙ', translit: 'ni-apostolos khen Ierē̄m', meaning: { de: 'die Apostel in Jerusalem', en: 'the apostles in Jerusalem', ar: 'الرسل في أورشليم' } },
          { coptic: 'ⲡⲓⲣⲱⲙⲓ ϩⲓⲉⲛ ⲡⲓⲙⲱⲓⲧ', translit: 'pi-rōmi hijen pi-mōit', meaning: { de: 'der Mann ist auf dem Weg', en: 'the man is on the road', ar: 'الرجل على الطريق' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Nominalsatz mit Präposition', en: 'Nominal Clause with Preposition', ar: 'جملة اسمية مع حرف جر' },
        rule: {
          de: 'Nominalsätze mit Präposition benötigen kein „ist". Struktur: [Nomen] + [Präposition + Nomen].',
          en: 'Nominal clauses with a preposition omit "is". Structure: [Noun] + [Preposition + Noun].',
          ar: 'الجمل الاسمية مع حرف جر بلا فعل "يكون". البنية: [اسم] + [حرف جر + اسم].'
        },
        examples: [
          { coptic: 'ⲡⲓⲥⲱⲧⲏⲣ ϩⲓⲧⲉⲛ ⲡⲓⲉⲕⲕⲗⲏⲥⲓⲁ', translit: 'pi-sōtēr hiten pi-ekklēsia', meaning: { de: 'der Retter in der Kirche', en: 'the Savior in the church', ar: 'المخلّص في الكنيسة' } }
        ],
        spiritual: {
          bibleVerse: { de: '„Denn wo zwei oder drei versammelt sind in meinem Namen …"', en: '"For where two or three are gathered in my name..."', ar: '«لأَنَّهُ حَيْثُمَا اجْتَمَعَ اثْنَانِ أَوْ ثَلَاثَةٌ بِاسْمِي...»' },
          bibleReference: { de: 'Mt 18,20 (Schlachter 2000)', en: 'Matt 18:20', ar: 'متى 18:20' },
          fatherQuote: {
            de: '„من خلال المحبة اخدموا بعضكم بعضًا."',
            en: '"Through love serve one another."',
            ar: '«بِالْمَحَبَّةِ اخْدِمُوا بَعْضُكُمْ بَعْضًا.»'
          },
          fatherReference: { de: 'Gal 5,13 zitiert in Bercot (Reziprok-Pronomen-Beispiel).', en: 'Gal 5:13 cited in Bercot.', ar: 'غلاطية 5:13 كما في بيركوت.' }
        }
      },
      {
        type: 'grammar',
        title: { de: 'Beispiele zu Kernpräpositionen', en: 'Core Preposition Patterns', ar: 'أنماط حروف الجر الأساسية' },
        rule: {
          de: 'Muster: ⲉ „zu/für", ϧⲉⲛ „in", ϩⲓ „auf", ⲛ̀ „mit/von", ⲉⲓⲃⲉ „wegen".',
          en: 'Patterns: ⲉ "to/for", ϧⲉⲛ "in", ϩⲓ "on", ⲛ̀ "with/from", ⲉⲓⲃⲉ "because of".',
          ar: 'أنماط: ⲉ «إلى/لأجل»، ϧⲉⲛ «في»، ϩⲓ «على»، ⲛ̀ «مع/من»، ⲉⲓⲃⲉ «بسبب».'
        },
        examples: [
          { coptic: 'ⲧⲉⲛⲥⲱⲧⲉⲙ ⲉ ⲡⲓⲗⲟⲅⲟⲥ', translit: 'ten-sōtem e pi-logos', meaning: { de: 'wir hören auf das Wort', en: 'we listen to the Word', ar: 'نسمع للكلمة' } },
          { coptic: 'ⲙⲁⲣⲉⲛⲣⲁⲥⲓ ϧⲉⲛ ⲡⲓⲕⲁⲗⲱⲥ', translit: 'maren-rasi khen pi-kalos', meaning: { de: 'lasst uns in Freude jubeln', en: 'let us rejoice in joy', ar: 'لنفرح بالفرح' } },
          { coptic: 'ⲡⲉⲛⲥⲱⲧⲏⲣ ϩⲓ ⲡⲓⲥⲧⲁⲩⲣⲟⲥ', translit: 'pen-sōtēr hi pi-stauros', meaning: { de: 'unser Retter am Kreuz', en: 'our Savior on the cross', ar: 'مخلّصنا على الصليب' } },
          { coptic: 'ⲛ̀ⲛⲓⲉⲣⲟ ⲛⲉⲙ ⲡⲓⲗⲁⲟⲥ', translit: 'enniero nem pi-laos', meaning: { de: 'mit den Priestern und dem Volk', en: 'with the priests and the people', ar: 'مع الكهنة والشعب' } },
          { coptic: 'ⲉⲓⲃⲉ ⲡⲓⲡⲓⲥⲧⲉⲩⲙⲁ', translit: 'eibe pi-pisteuma', meaning: { de: 'wegen des Glaubens', en: 'because of the faith', ar: 'بسبب الإيمان' } }
        ]
      }
    ]
  },

  'm7-l2': {
    id: 'm7-l2',
    order: 2,
    moduleId: 'm7',
    title: { de: 'Pronominale Präpositionen & Limitativ ⲥⲁ', en: 'Pronominal Preps & ⲥⲁ Limitative', ar: 'حروف الجر الضميرية وبنية ⲥⲁ' },
    prerequisites: ['m7-l1'],
    quizId: 'q7-2',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Pronominale Formen', en: 'Pronominal Forms', ar: 'الصيغ الضميرية' },
        rule: {
          de: 'Einfache Präpositionen besitzen pronominale Endungen: „ⲉ= ihm/ihr", „ⲛ̀= ihm/ihr", usw. Verwende die Pronomenform, wenn das Objekt ein Pronomen ist: ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ „segne ihn".',
          en: 'Simple prepositions take pronominal endings. Use pronoun form when the object is a pronoun: ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ "bless him".',
          ar: 'لدى الحروف البسيطة صيغ ضميرية. استعملها مع الضمير: ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ «باركه».'
        },
        examples: [
          { coptic: 'ⲉ̀ⲣⲟⲓ / ⲉ̀ⲣⲟⲕ / ⲉ̀ⲣⲟϥ / ⲉ̀ⲣⲟⲛ', translit: 'e-roi / e-rok / e-rof / e-ron', meaning: { de: 'zu mir/dir/ihm/uns', en: 'to me/you/him/us', ar: 'إليّ/إليك/إليه/إلينا' } },
          { coptic: 'ⲛ̀ⲣⲟⲥ / ⲛ̀ⲣⲟⲩ', translit: 'en-ros / en-rou', meaning: { de: 'mit ihr / mit ihnen', en: 'with her / with them', ar: 'معها / معهم' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Limitativ: ⲥⲁ + Konjunktiv', en: 'Limitative: ⲥⲁ + Subjunctive', ar: 'البنية المحدِّدة ⲥⲁ + المُضارع الرغبي' },
        rule: {
          de: 'ⲥⲁ „zu/bis" + Konjunktiv ergibt „bis dass/solange, bis …". Kurzform durch Wegfall von ⲛ: ⲥⲁⲧⲉⲕⲓ = ⲥⲁ ⲛⲧⲉⲕⲓ „bis du kommst".',
          en: 'ⲥⲁ "to/till" + subjunctive yields "until…". Short form by dropping ⲛ: ⲥⲁⲧⲉⲕⲓ = ⲥⲁ ⲛⲧⲉⲕⲓ.',
          ar: 'ⲥⲁ + صيغة الرغبة تعطي «حتى/إلى أن». صيغة قصيرة بحذف ⲛ: ⲥⲁⲧⲉⲕⲓ = ⲥⲁ ⲛⲧⲉⲕⲓ.'
        },
        examples: [
          { coptic: 'ⲟⲩⲟϩ ⲙ̀ⲡⲉϥⲥⲟⲩⲟⲛⲥ ⲥⲁⲧⲉⲥⲙⲓⲥⲓ ⲙ̀ⲡⲓϣⲏⲣⲓ', translit: 'ouoh mpef-souōns sate-smisi em-pi-sheri', meaning: { de: 'und er erkannte sie nicht, bis sie den Sohn gebar', en: 'and he did not know her until she bore the Son', ar: 'ولم يعرفها حتى ولدت الابن' } },
          { coptic: 'ⲥⲁⲧⲉⲛⲧⲱⲟⲩⲛ ⲉ̀ⲡⲓⲉⲕⲕⲗⲏⲥⲓⲁ', translit: 'saten-tōoun e pi-ekklēsia', meaning: { de: 'bis ihr in die Kirche eintretet', en: 'until you enter the church', ar: 'حتى تدخلوا الكنيسة' } }
        ],
        spiritual: {
          bibleVerse: { de: '„Harr auf den HERRN."', en: '"Wait for the LORD."', ar: '«ٱنْتَظِرِ ٱلرَّبَّ.»' },
          bibleReference: { de: 'Ps 27,14 (Schlachter 2000)', en: 'Ps 27:14', ar: 'مزمور 27:14' },
          fatherQuote: {
            de: '„لم نؤمن بالمسيح لأنه صنع عجائب، بل لأن النبوات قد تمت فيه."',
            en: '"We did not believe Christ because of wonders, but because prophecies were fulfilled in Him."',
            ar: '«لم نؤمن بالمسيح لأجل العجائب، بل لأن النبوات تحققت فيه.»'
          },
          fatherReference: { de: 'Lactantius, Divinae Institutiones (Bercot, Stichwort Prophetie/Christus).', en: 'Lactantius, Divine Institutes (Bercot).', ar: 'لاكتانتيوس، المؤسسات الإلهية (بيركوت).' }
        }
      },
      {
        type: 'grammar',
        title: { de: 'Übung: Präp. + Artikel/Pronomen', en: 'Drill: Prep + Article/Pronoun', ar: 'تمرين: حرف جر + أداة/ضمير' },
        rule: {
          de: 'Bilde Sätze mit ⲉ/ϧⲉⲛ/ϩⲓ/ⲛ̀ + pronominaler Form. Achte auf Lautung im Bohairischen.',
          en: 'Form sentences with ⲉ/ϧⲉⲛ/ϩⲓ/ⲛ̀ + pronominal form. Mind Bohairic phonology.',
          ar: 'كوّن جُملاً بـ ⲉ/ϧⲉⲛ/ϩⲓ/ⲛ̀ مع الصيغة الضميرية. انتبه لصوتيات البحيري.'
        },
        examples: [
          { coptic: 'ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲛ ⲛⲉⲙ ⲡⲓⲥⲱⲧⲏⲣ', translit: 'smou e-ron nem pi-sōtēr', meaning: { de: 'segne uns mit dem Retter', en: 'bless us with the Savior', ar: 'باركنا مع المخلّص' } },
          { coptic: 'ϩⲓⲣⲟⲥ ⲛ̀ⲣⲟⲩ', translit: 'hi-ros en-rou', meaning: { de: 'auf sie / mit ihnen', en: 'on her / with them', ar: 'عليها / معهم' } }
        ]
      }
    ]
  }
};

export const QUIZZES: Record<string, Quiz> = {
  'q7-1': {
    id: 'q7-1',
    lessonId: 'm7-l1',
    title: { de: 'Quiz: Einfache Präpositionen', en: 'Quiz: Simple Prepositions', ar: 'اختبار: حروف الجر البسيطة' },
    passScore: 70,
    questions: [
      {
        id: 'q7-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ϧⲉⲛ?', en: 'What does ϧⲉⲛ mean?', ar: 'ماذا يعني ϧⲉⲛ؟' },
        options: [
          { de: 'in', en: 'in', ar: 'في' },
          { de: 'zu', en: 'to', ar: 'إلى' },
          { de: 'mit', en: 'with', ar: 'مع' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q7-1-2',
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
        id: 'q7-1-3',
        type: 'multiple-choice',
        questionText: { de: 'Welche Präposition bedeutet "wegen"?', en: 'Which preposition means "because of"?', ar: 'أي حرف جر يعني "بسبب"؟' },
        options: [
          { de: 'ⲉⲓⲃⲉ', en: 'ⲉⲓⲃⲉ', ar: 'ⲉⲓⲃⲉ' },
          { de: 'ϩⲓ', en: 'ϩⲓ', ar: 'ϩⲓ' },
          { de: 'ϩⲱⲥ', en: 'ϩⲱⲥ', ar: 'ϩⲱⲥ' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q7-2': {
    id: 'q7-2',
    lessonId: 'm7-l2',
    title: { de: 'Quiz: Pronominale Präpositionen', en: 'Quiz: Pronominal Prepositions', ar: 'اختبار: حروف الجر الضميرية' },
    passScore: 70,
    questions: [
      {
        id: 'q7-2-1',
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
        id: 'q7-2-2',
        type: 'multiple-choice',
        questionText: { de: 'Was ist der Limitativ?', en: 'What is the limitative?', ar: 'ما هي البنية المحددة؟' },
        options: [
          { de: 'ⲥⲁ + Konjunktiv (bis dass)', en: 'ⲥⲁ + subjunctive (until)', ar: 'ⲥⲁ + المضارع الرغبي (حتى)' },
          { de: 'ⲛⲉⲙ + Nomen', en: 'ⲛⲉⲙ + noun', ar: 'ⲛⲉⲙ + اسم' },
          { de: 'ϧⲉⲛ + Verb', en: 'ϧⲉⲛ + verb', ar: 'ϧⲉⲛ + فعل' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};
