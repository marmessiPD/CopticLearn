import { Module, Lesson, Quiz, Letter } from '../types';

export const LETTERS: Record<string, Letter> = {
    'alpha': {
        id: 'alpha', uppercase: 'Ⲁ', lowercase: 'ⲁ', name: { de: 'Alpha', en: 'Alpha', ar: 'ألفا' },
        pronunciation: { de: 'wie "a" in "Vater"', en: 'like "a" in "father"', ar: 'مثل "ا" في "بابا"' },
        numeric: 1,
        exampleWord: { coptic: 'ⲁⲅⲁⲡⲏ', translit: 'agape', meaning: { de: 'Liebe', en: 'Love', ar: 'محبة' } }
    },
    'beta': {
        id: 'beta', uppercase: 'Ⲃ', lowercase: 'ⲃ', name: { de: 'Vita', en: 'Vita', ar: 'ڤيتا' },
        pronunciation: { de: 'wie "w" vor Vokal, "b" sonst; in Eigennamen immer "b"', en: 'like "v" before a vowel, "b" otherwise; always "b" in proper nouns', ar: 'مثل "ڤ" قبل حرف متحرك، و"ب" في الحالات الأخرى؛ دائمًا "ب" في الأسماء الخاصة' },
        numeric: 2,
        exampleWord: { coptic: 'ⲃⲁⲗ', translit: 'val', meaning: { de: 'Auge', en: 'Eye', ar: 'عين' } }
    },
    'gamma': {
        id: 'gamma', uppercase: 'Ⲅ', lowercase: 'ⲅ', name: { de: 'Gamma', en: 'Gamma', ar: 'غما' },
        pronunciation: { de: 'wie "gh" (Gurgeln) vor ⲁ,ⲟ,ⲱ; "g" (hart) vor ⲉ,ⲏ,ⲓ,ⲩ; "n" vor ⲅ,ⲕ,ⲭ,ⲝ', en: 'like "gh" (gargle) before ⲁ,ⲟ,ⲱ; hard "g" before ⲉ,ⲏ,ⲓ,ⲩ; "n" before ⲅ,ⲕ,ⲭ,ⲝ', ar: 'مثل "غ" قبل ⲁ,ⲟ,ⲱ؛ "ج" قوية قبل ⲉ,ⲏ,ⲓ,ⲩ؛ "ن" قبل ⲅ,ⲕ,ⲭ,ⲝ' },
        numeric: 3,
        exampleWord: { coptic: 'ⲅⲉ', translit: 'ge', meaning: { de: 'denn, für', en: 'because, for', ar: 'لأن' } }
    },
     'delta': {
        id: 'delta', uppercase: 'Ⲇ', lowercase: 'ⲇ', name: { de: 'Delta', en: 'Delta', ar: 'دلتا' },
        pronunciation: { de: 'wie "d" in Eigennamen, sonst wie "th" in "this"', en: 'like "d" in proper nouns, otherwise like "th" in "this"', ar: 'مثل "د" في الأسماء الخاصة، وفيما عدا ذلك مثل "ذ"' },
        numeric: 4,
        exampleWord: { coptic: 'ⲇⲁⲩⲓⲇ', translit: 'David', meaning: { de: 'David', en: 'David', ar: 'داود' } }
    },
    'eie': {
        id: 'eie', uppercase: 'Ⲉ', lowercase: 'ⲉ', name: { de: 'Eey', en: 'Eey', ar: 'إي' },
        pronunciation: { de: 'wie kurzes "e" in "Bett"', en: 'like short "e" in "bet"', ar: 'مثل "إ" في "إبرة"' },
        numeric: 5,
        exampleWord: { coptic: 'ⲉⲃⲟⲗ', translit: 'evol', meaning: { de: 'aus', en: 'out of', ar: 'من' } }
    },
    'so': {
        id: 'so', uppercase: 'Ⲋ', lowercase: 'ⲋ', name: { de: 'So-ou', en: 'So-ou', ar: 'سو-أو' },
        pronunciation: { de: 'Nur als Zahl verwendet', en: 'Only used as a number', ar: 'تستخدم كرقم فقط' },
        numeric: 6,
        exampleWord: { coptic: 'ⲋ̅', translit: 'so', meaning: { de: 'sechs', en: 'six', ar: 'ستة' } }
    },
    'zita': {
        id: 'zita', uppercase: 'Ⲍ', lowercase: 'ⲍ', name: { de: 'Zeeta', en: 'Zeeta', ar: 'زيتا' },
        pronunciation: { de: 'wie "s" in "Rose"', en: 'like "z" in "zoo"', ar: 'مثل "ز"' },
        numeric: 7,
        exampleWord: { coptic: 'ⲍⲱⲛ', translit: 'zon', meaning: { de: 'Gürtel', en: 'belt', ar: 'حزام' } }
    },
    'hita': {
        id: 'hita', uppercase: 'Ⲏ', lowercase: 'ⲏ', name: { de: 'Eeta', en: 'Eeta', ar: 'إيتا' },
        pronunciation: { de: 'wie langes "i" in "Biene"', en: 'like "ee" in "see"', ar: 'مثل "ي" طويلة' },
        numeric: 8,
        exampleWord: { coptic: 'ⲏⲓ', translit: 'ee', meaning: { de: 'Haus', en: 'house', ar: 'بيت' } }
    },
    'thita': {
        id: 'thita', uppercase: 'Ⲑ', lowercase: 'ⲑ', name: { de: 'Theta', en: 'Theta', ar: 'ثيتا' },
        pronunciation: { de: 'wie "th" in "thing", aber "t" nach ⲥ, ϣ, oder ⲧ', en: 'like "th" in "thing", but "t" after ⲥ, ϣ, or ⲧ', ar: 'مثل "ث"، ولكن "ت" بعد ⲥ, ϣ, أو ⲧ' },
        numeric: 9,
        exampleWord: { coptic: 'ⲑⲁⲗⲁⲥⲥⲁ', translit: 'thalassa', meaning: { de: 'Meer', en: 'sea', ar: 'بحر' } }
    },
    'yota': {
        id: 'yota', uppercase: 'Ⲓ', lowercase: 'ⲓ', name: { de: 'Yota', en: 'Yota', ar: 'يوتا' },
        pronunciation: { de: 'wie kurzes "i" in "Mitte"', en: 'like short "i" in "sit"', ar: 'مثل "ي" قصيرة' },
        numeric: 10,
        exampleWord: { coptic: 'ⲓⲱⲧ', translit: 'iot', meaning: { de: 'Vater', en: 'father', ar: 'أب' } }
    },
    'kappa': {
        id: 'kappa', uppercase: 'Ⲕ', lowercase: 'ⲕ', name: { de: 'Kappa', en: 'Kappa', ar: 'كبا' },
        pronunciation: { de: 'wie "k"', en: 'like "k"', ar: 'مثل "ك"' },
        numeric: 20,
        exampleWord: { coptic: 'ⲕⲁϩⲓ', translit: 'kahi', meaning: { de: 'Erde', en: 'earth', ar: 'أرض' } }
    },
    'laula': {
        id: 'laula', uppercase: 'Ⲗ', lowercase: 'ⲗ', name: { de: 'Lola', en: 'Lola', ar: 'لولا' },
        pronunciation: { de: 'wie "l"', en: 'like "l"', ar: 'مثل "ل"' },
        numeric: 30,
        exampleWord: { coptic: 'ⲗⲁⲥ', translit: 'las', meaning: { de: 'Zunge', en: 'tongue', ar: 'لسان' } }
    },
    'mi': {
        id: 'mi', uppercase: 'Ⲙ', lowercase: 'ⲙ', name: { de: 'Mey', en: 'Mey', ar: 'مي' },
        pronunciation: { de: 'wie "m"', en: 'like "m"', ar: 'مثل "م"' },
        numeric: 40,
        exampleWord: { coptic: 'ⲙⲁⲁⲩ', translit: 'maav', meaning: { de: 'Mutter', en: 'mother', ar: 'أم' } }
    },
    'ni': {
        id: 'ni', uppercase: 'Ⲛ', lowercase: 'ⲛ', name: { de: 'Ney', en: 'Ney', ar: 'ني' },
        pronunciation: { de: 'wie "n"', en: 'like "n"', ar: 'مثل "ن"' },
        numeric: 50,
        exampleWord: { coptic: 'ⲛⲟⲩⲃ', translit: 'noub', meaning: { de: 'Gold', en: 'gold', ar: 'ذهب' } }
    },
    'eksi': {
        id: 'eksi', uppercase: 'Ⲝ', lowercase: 'ⲝ', name: { de: 'Exi', en: 'Exi', ar: 'إكسي' },
        pronunciation: { de: 'wie "ks"', en: 'like "x" in "box"', ar: 'مثل "كس"' },
        numeric: 60,
        exampleWord: { coptic: 'ⲝⲩⲗⲟⲛ', translit: 'xylon', meaning: { de: 'Holz', en: 'wood', ar: 'خشب' } }
    },
    'o': {
        id: 'o', uppercase: 'Ⲟ', lowercase: 'ⲟ', name: { de: 'O', en: 'O', ar: 'أو' },
        pronunciation: { de: 'wie kurzes "o" in "offen"', en: 'like short "o" in "pot"', ar: 'مثل "و" قصيرة' },
        numeric: 70,
        exampleWord: { coptic: 'ⲟⲛ', translit: 'on', meaning: { de: 'wieder', en: 'again', ar: 'مرة أخرى' } }
    },
    'pi': {
        id: 'pi', uppercase: 'Ⲡ', lowercase: 'ⲡ', name: { de: 'Pe', en: 'Pe', ar: 'بي' },
        pronunciation: { de: 'wie "p"', en: 'like "p"', ar: 'مثل "ب"' },
        numeric: 80,
        exampleWord: { coptic: 'ⲡⲉ', translit: 'pe', meaning: { de: 'ist', en: 'is', ar: 'هو' } }
    },
    'ro': {
        id: 'ro', uppercase: 'Ⲣ', lowercase: 'ⲣ', name: { de: 'Ro', en: 'Ro', ar: 'رو' },
        pronunciation: { de: 'wie "r"', en: 'like "r"', ar: 'مثل "ر"' },
        numeric: 100,
        exampleWord: { coptic: 'ⲣⲁⲛ', translit: 'ran', meaning: { de: 'Name', en: 'name', ar: 'اسم' } }
    },
    'sima': {
        id: 'sima', uppercase: 'Ⲥ', lowercase: 'ⲥ', name: { de: 'Seema', en: 'Seema', ar: 'سيما' },
        pronunciation: { de: 'wie "s"', en: 'like "s"', ar: 'مثل "س"' },
        numeric: 200,
        exampleWord: { coptic: 'ⲥⲱⲧⲉⲙ', translit: 'sotem', meaning: { de: 'hören', en: 'to hear', ar: 'يسمع' } }
    },
    'tav': {
        id: 'tav', uppercase: 'Ⲧ', lowercase: 'ⲧ', name: { de: 'Tav', en: 'Tav', ar: 'تاڤ' },
        pronunciation: { de: 'wie "t", aber "d" nach ⲛ in griechischen Wörtern', en: 'like "t", but "d" after ⲛ in Greek words', ar: 'مثل "ت"، ولكن "د" بعد ⲛ في الكلمات اليونانية' },
        numeric: 300,
        exampleWord: { coptic: 'ⲧⲁⲗϭⲟ', translit: 'talcho', meaning: { de: 'heilen', en: 'to heal', ar: 'يشفي' } }
    },
    'epsilon': {
        id: 'epsilon', uppercase: 'Ⲩ', lowercase: 'ⲩ', name: { de: 'Epsilon (He)', en: 'Epsilon (He)', ar: 'إبسيلون (هي)' },
        pronunciation: { de: 'wie "i" in "Mitte"; nach ⲁ/ⲉ als "v"; nach ⲟ als "u" (wie in "Suppe")', en: 'like "i" in "sit"; after ⲁ/ⲉ as "v"; after ⲟ as "oo" in "soup"', ar: 'مثل "ي" قصيرة؛ بعد ⲁ/ⲉ مثل "ڤ"؛ بعد ⲟ مثل "و" طويلة' },
        numeric: 400,
        exampleWord: { coptic: 'ⲟⲩⲁⲡ', translit: 'ouap', meaning: { de: 'heilig', en: 'holy', ar: 'قدوس' } }
    },
    'phi': {
        id: 'phi', uppercase: 'Ⲫ', lowercase: 'ⲫ', name: { de: 'Phi', en: 'Phi', ar: 'في' },
        pronunciation: { de: 'wie "f"', en: 'like "f"', ar: 'مثل "ف"' },
        numeric: 500,
        exampleWord: { coptic: 'ⲫⲱⲥ', translit: 'phos', meaning: { de: 'Licht', en: 'light', ar: 'نور' } }
    },
    'khi': {
        id: 'khi', uppercase: 'Ⲭ', lowercase: 'ⲭ', name: { de: 'Key', en: 'Key', ar: 'كي' },
        pronunciation: { de: '"k" in kopt. Wörtern. Griech.: "sch" vor ⲉ,ⲏ,ⲓ,ⲩ; "ch" (Bach) sonst.', en: '"k" in Coptic words. Greek: "sh" before ⲉ,ⲏ,ⲓ,ⲩ; "kh" otherwise.', ar: '"ك" في الكلمات القبطية. يوناني: "ش" قبل ⲉ,ⲏ,ⲓ,ⲩ؛ "خ" في الحالات الأخرى.' },
        numeric: 600,
        exampleWord: { coptic: 'ⲭⲟⲓⲁⲕ', translit: 'khoiak', meaning: { de: 'Khoiak (4. Monat)', en: 'Khoiak (4th month)', ar: 'كيهك' } }
    },
    'epsi': {
        id: 'epsi', uppercase: 'Ⲯ', lowercase: 'ⲯ', name: { de: 'Epsi', en: 'Epsi', ar: 'إبسي' },
        pronunciation: { de: 'wie "ps"', en: 'like "ps" in "lips"', ar: 'مثل "بس"' },
        numeric: 700,
        exampleWord: { coptic: 'ⲯⲁⲗⲙⲟⲥ', translit: 'psalmos', meaning: { de: 'Psalm', en: 'psalm', ar: 'مزمور' } }
    },
    'oou': {
        id: 'oou', uppercase: 'Ⲱ', lowercase: 'ⲱ', name: { de: 'Omega', en: 'Omega', ar: 'أوميغا' },
        pronunciation: { de: 'wie langes "o" in "Boot"', en: 'like "o" in "go"', ar: 'مثل "و" طويلة' },
        numeric: 800,
        exampleWord: { coptic: 'ⲱⲛⲁⲓ', translit: 'onai', meaning: { de: 'Stein', en: 'stone', ar: 'حجر' } }
    },
    'shai': {
        id: 'shai', uppercase: 'Ϣ', lowercase: 'ϣ', name: { de: 'Shai', en: 'Shai', ar: 'شاي' },
        pronunciation: { de: 'wie "sch"', en: 'like "sh"', ar: 'مثل "ش"' },
        numeric: 900,
        exampleWord: { coptic: 'ϣⲏⲣⲓ', translit: 'sheri', meaning: { de: 'Sohn/Kind', en: 'son/child', ar: 'ابن/طفل' } }
    },
    'fai': {
        id: 'fai', uppercase: 'Ϥ', lowercase: 'ϥ', name: { de: 'Fai', en: 'Fai', ar: 'فاي' },
        pronunciation: { de: 'wie "f"', en: 'like "f"', ar: 'مثل "ف"' },
        numeric: 90,
        exampleWord: { coptic: 'ϥⲁⲓ', translit: 'fai', meaning: { de: 'tragen', en: 'to carry', ar: 'يحمل' } }
    },
    'khai': {
        id: 'khai', uppercase: 'Ϧ', lowercase: 'ϧ', name: { de: 'Khai', en: 'Khai', ar: 'خاي' },
        pronunciation: { de: 'wie "ch" in "Bach"', en: 'like "ch" in Scottish "loch"', ar: 'مثل "خ"' },
        numeric: 0,
        exampleWord: { coptic: 'ϧⲉⲛ', translit: 'khen', meaning: { de: 'in', en: 'in', ar: 'في' } }
    },
    'hori': {
        id: 'hori', uppercase: 'Ϩ', lowercase: 'ϩ', name: { de: 'Hori', en: 'Hori', ar: 'هوري' },
        pronunciation: { de: 'wie "h"', en: 'like "h"', ar: 'مثل "ه"' },
        numeric: 0,
        exampleWord: { coptic: 'ϩⲏⲧ', translit: 'heet', meaning: { de: 'Herz', en: 'heart', ar: 'قلب' } }
    },
    'janja': {
        id: 'janja', uppercase: 'Ϫ', lowercase: 'ϫ', name: { de: 'Jenja', en: 'Jenja', ar: 'جانجا' },
        pronunciation: { de: '"j" (dsch) vor ⲉ,ⲏ,ⲓ,ⲩ; "g" (hart) sonst.', en: '"j" (as in John) before ⲉ,ⲏ,ⲓ,ⲩ; hard "g" otherwise.', ar: '"ج" قبل ⲉ,ⲏ,ⲓ,ⲩ؛ "ج" قوية في الحالات الأخرى.' },
        numeric: 0,
        exampleWord: { coptic: 'ϫⲓϫ', translit: 'jij', meaning: { de: 'Hand', en: 'hand', ar: 'يد' } }
    },
    'chima': {
        id: 'chima', uppercase: 'Ϭ', lowercase: 'ϭ', name: { de: 'Cheema', en: 'Cheema', ar: 'تشيما' },
        pronunciation: { de: 'wie "tsch" in "Deutsch"', en: 'like "ch" in "church"', ar: 'مثل "تش"' },
        numeric: 0,
        exampleWord: { coptic: 'ϭⲟⲓⲥ', translit: 'chois', meaning: { de: 'Herr', en: 'Lord', ar: 'الرب' } }
    },
    'ti': {
        id: 'ti', uppercase: 'Ϯ', lowercase: 'ϯ', name: { de: 'Ti', en: 'Ti', ar: 'تي' },
        pronunciation: { de: 'wie "ti" in "Emotion"', en: 'like "ti" in "station"', ar: 'مثل "تي"' },
        numeric: 0,
        exampleWord: { coptic: 'ϯ', translit: 'ti', meaning: { de: 'geben / ich', en: 'to give / I', ar: 'يعطي / أنا' } }
    }
};

export const LESSONS: Record<string, Lesson> = {
    // Module 1: Alphabet
    'l1-1': {
        id: 'l1-1', order: 1, moduleId: 'm1', title: { de: 'Alphabet 1: Ⲁ bis Ⲇ', en: 'Alphabet 1: Ⲁ to Ⲇ', ar: 'الأبجدية 1: من Ⲁ إلى Ⲇ' }, prerequisites: [], quizId: 'q1-1',
        slides: [
            { type: 'alphabet', letterId: 'alpha', emoji: '❤️', explanation: { de: 'Alpha ist der erste Buchstabe des koptischen Alphabets.', en: 'Alpha is the first letter of the Coptic alphabet.', ar: 'ألفا هو الحرف الأول في الأبجدية القبطية.' }, spiritual: { bibleVerse: { de: '"Ich bin das Alpha und das Omega", sagt der Herr.', en: '"I am the Alpha and the Omega," says the Lord.', ar: '"أنا هو الألف والياء"، يقول الرب.' }, bibleReference: { de: 'Offenbarung 1:8', en: 'Revelation 1:8', ar: 'رؤيا ٨:١' }, fatherQuote: { de: 'Der Anfang aller Dinge ist Gott.', en: 'The beginning of all things is God.', ar: 'بداية كل الأشياء هو الله.' }, fatherReference: { de: 'Hl. Athanasius', en: 'St. Athanasius', ar: 'القديس أثناسيوس' } } },
            { type: 'alphabet', letterId: 'beta', emoji: '👁️', explanation: { de: 'Vita kann als "w" oder "b" ausgesprochen werden, je nach Kontext.', en: 'Vita can be pronounced as "v" or "b" depending on the context.', ar: 'ڤيتا يمكن أن تنطق "ڤ" أو "ب" حسب السياق.' }, spiritual: { bibleVerse: { de: 'Dein Auge ist die Leuchte deines Leibes.', en: 'Your eye is the lamp of your body.', ar: 'سراج الجسد هو العين.' }, bibleReference: { de: 'Lukas 11:34', en: 'Luke 11:34', ar: 'لوقا ٣٤:١١' }, fatherQuote: { de: 'Wenn das Auge einfach ist, wird der ganze Körper hell sein.', en: 'If the eye is simple, the whole body will be full of light.', ar: 'إن كانت عينك بسيطة فجسدك كله يكون نيراً.' }, fatherReference: { de: 'Hl. Johannes Chrysostomos', en: 'St. John Chrysostom', ar: 'القديس يوحنا ذهبي الفم' } } },
            { type: 'alphabet', letterId: 'gamma', emoji: '😇', explanation: {de: 'Gamma wird meistens wie "g" ausgesprochen, aber vor bestimmten Vokalen wie "n" oder "j".', en: 'Gamma is mostly pronounced like "g", but before certain vowels like "n" or "y".', ar: 'غما تنطق في الغالب مثل "ج"، ولكن قبل بعض الحروف المتحركة تنطق مثل "ن" أو "ي".'}, spiritual: { bibleVerse: {de: 'Denn Gott hat die Welt so sehr geliebt...', en: 'For God so loved the world...', ar: 'لأنه هكذا أحب الله العالم...'}, bibleReference: {de: 'Johannes 3:16', en: 'John 3:16', ar: 'يوحنا ١٦:٣'}, fatherQuote: {de: 'Gnade sei mit euch allen.', en: 'Grace be with you all.', ar: 'النعمة معكم أجمعين.'}, fatherReference: {de: 'Hl. Paulus', en: 'St. Paul', ar: 'القديس بولس'} }},
            { type: 'alphabet', letterId: 'delta', emoji: '👑', explanation: {de: 'Delta steht für den Klang "d" oder "th".', en: 'Delta represents the "d" or "th" sound.', ar: 'دلتا يمثل صوت "د" أو "ذ".'}, spiritual: { bibleVerse: {de: 'David war ein Mann nach Gottes Herzen.', en: 'David was a man after God\'s own heart.', ar: 'كان داود رجلاً حسب قلب الله.'}, bibleReference: {de: 'Apostelgeschichte 13:22', en: 'Acts 13:22', ar: 'أعمال الرسل ٢٢:١٣'}, fatherQuote: {de: 'Demut ist die Krone der Tugenden.', en: 'Humility is the crown of virtues.', ar: 'التواضع هو إكليل الفضائل.'}, fatherReference: {de: 'Hl. Antonius', en: 'St. Anthony', ar: 'القديس أنطونيوس'} }},
        ]
    },
    'l1-2': {
        id: 'l1-2', order: 2, moduleId: 'm1', title: { de: 'Alphabet 2: Ⲉ bis Ⲏ', en: 'Alphabet 2: Ⲉ to Ⲏ', ar: 'الأبجدية 2: من Ⲉ إلى Ⲏ' }, prerequisites: ['l1-1'], quizId: 'q1-2',
        slides: [
            { type: 'alphabet', letterId: 'eie', emoji: '🥚', explanation: {de: 'Eey ist ein kurzer Vokal.', en: 'Eey is a short vowel.', ar: 'إي هو حرف متحرك قصير.'}, spiritual: { bibleVerse: {de: '... auf dass sie das Leben haben und es in Fülle haben.', en: '...that they may have life, and have it to the full.', ar: '...لتكون لهم حياة وليكون لهم أفضل.'}, bibleReference: {de: 'Johannes 10:10', en: 'John 10:10', ar: 'يوحنا ١٠:١٠'}, fatherQuote: {de: 'Durch das Kreuz kam Freude in die ganze Welt.', en: 'Through the Cross, joy has come into all the world.', ar: 'بالصليب دخل الفرح إلى كل العالم.'}, fatherReference: {de: 'Liturgie des Hl. Basilius', en: 'Liturgy of St. Basil', ar: 'قداس القديس باسيليوس'} }},
            { type: 'alphabet', letterId: 'so', emoji: '6️⃣', explanation: {de: 'So-ou wird fast ausschließlich für den Zahlenwert 6 verwendet.', en: 'So-ou is almost exclusively used for the numeric value 6.', ar: 'سو-أو يستخدم بشكل حصري تقريبًا للقيمة العددية 6.'}, spiritual: { bibleVerse: {de: 'Sechs Tage sollst du arbeiten...', en: 'Six days you shall labor...', ar: 'ستة أيام تعمل...'}, bibleReference: {de: 'Exodus 20:9', en: 'Exodus 20:9', ar: 'خروج ٩:٢٠'}, fatherQuote: {de: 'Am sechsten Tag schuf Gott den Menschen.', en: 'On the sixth day, God created man.', ar: 'في اليوم السادس خلق الله الإنسان.'}, fatherReference: {de: 'Genesis 1', en: 'Genesis 1', ar: 'تكوين 1'} }},
            { type: 'alphabet', letterId: 'zita', emoji: '🦓', explanation: {de: 'Zeeta kommt aus dem Griechischen und ist selten in rein koptischen Wörtern.', en: 'Zeeta comes from Greek and is rare in purely Coptic words.', ar: 'زيتا يأتي من اليونانية وهو نادر في الكلمات القبطية الأصيلة.'}, spiritual: { bibleVerse: {de: 'Suchet zuerst das Reich Gottes...', en: 'But seek first his kingdom...', ar: 'اطلبوا أولاً ملكوت الله...'}, bibleReference: {de: 'Matthäus 6:33', en: 'Matthew 6:33', ar: 'متى ٣٣:٦'}, fatherQuote: {de: 'Der Eifer für dein Haus hat mich verzehrt.', en: 'Zeal for your house has consumed me.', ar: 'غيرة بيتك أكلتني.'}, fatherReference: {de: 'Psalm 69:9', en: 'Psalm 69:9', ar: 'مزمور ٩:٦٩'} }},
            { type: 'alphabet', letterId: 'hita', emoji: '🏠', explanation: {de: 'Eeta ist ein langer Vokal, der wie "ie" klingt.', en: 'Eeta is a long vowel that sounds like "ee".', ar: 'إيتا هو حرف متحرك طويل يُنطق مثل "ي" طويلة.'}, spiritual: { bibleVerse: {de: 'Ich aber und mein Haus, wir wollen dem HERRN dienen.', en: 'But as for me and my household, we will serve the Lord.', ar: 'أما أنا وبيتي فنعبد الرب.'}, bibleReference: {de: 'Josua 24:15', en: 'Joshua 24:15', ar: 'يشوع ١٥:٢٤'}, fatherQuote: {de: 'Das Haus Gottes ist die Kirche.', en: 'The house of God is the Church.', ar: 'بيت الله هو الكنيسة.'}, fatherReference: {de: 'Hl. Augustinus', en: 'St. Augustine', ar: 'القديس أغسطينوس'} }},
        ]
    },
    'l2-1': {
        id: 'l2-1', order: 3, moduleId: 'm1', title: { de: 'Alphabet 3: Ⲑ bis Ⲕ', en: 'Alphabet 3: Ⲑ to Ⲕ', ar: 'الأبجدية 3: من Ⲑ إلى Ⲕ' }, prerequisites: ['l1-2'], quizId: 'q2-1',
        slides: [
            { type: 'alphabet', letterId: 'thita', emoji: '🌊', explanation: {de: 'Theta wird oft in griechischen Lehnwörtern verwendet.', en: 'Theta is often used in Greek loanwords.', ar: 'ثيتا غالبًا ما يستخدم في الكلمات المستعارة من اليونانية.'}, spiritual: { bibleVerse: {de: 'Gott ist treu.', en: 'God is faithful.', ar: 'الله أمين.'}, bibleReference: {de: '1. Korinther 1:9', en: '1 Corinthians 1:9', ar: 'كورنثوس الأولى ٩:١'}, fatherQuote: {de: 'Durch den Glauben verstehen wir.', en: 'By faith we understand.', ar: 'بالإيمان نفهم.'}, fatherReference: {de: 'Hl. Clemens von Alexandria', en: 'St. Clement of Alexandria', ar: 'القديس إكليمندس الإسكندري'} }},
            { type: 'alphabet', letterId: 'yota', emoji: '👨‍👧‍👦', explanation: {de: 'Yota ist ein weiterer kurzer Vokal.', en: 'Yota is another short vowel.', ar: 'يوتا هو حرف متحرك قصير آخر.'}, spiritual: { bibleVerse: {de: 'Im Anfang war das Wort...', en: 'In the beginning was the Word...', ar: 'في البدء كان الكلمة...'}, bibleReference: {de: 'Johannes 1:1', en: 'John 1:1', ar: 'يوحنا ١:١'}, fatherQuote: {de: 'Der Vater ist größer als ich.', en: 'The Father is greater than I.', ar: 'الآب أعظم مني.'}, fatherReference: {de: 'Johannes 14:28', en: 'John 14:28', ar: 'يوحنا ٢٨:١٤'} }},
            { type: 'alphabet', letterId: 'kappa', emoji: '🌍', explanation: {de: 'Kappa wird wie ein "k" ausgesprochen.', en: 'Kappa is pronounced like a "k".', ar: 'كبا يُنطق مثل "ك".'}, spiritual: { bibleVerse: {de: 'Die Erde ist des HERRN und was darinnen ist.', en: 'The earth is the Lord’s, and everything in it.', ar: 'للرب الأرض وملؤها.'}, bibleReference: {de: 'Psalm 24:1', en: 'Psalm 24:1', ar: 'مزمور ١:٢٤'}, fatherQuote: {de: 'Wir sind nur Pilger auf dieser Erde.', en: 'We are but pilgrims on this earth.', ar: 'نحن مجرد غرباء على هذه الأرض.'}, fatherReference: {de: 'Hl. Kyrill von Alexandria', en: 'St. Cyril of Alexandria', ar: 'القديس كيرلس الإسكندري'} }},
        ]
    },
    'l2-2': {
        id: 'l2-2', order: 4, moduleId: 'm1', title: { de: 'Alphabet 4: Ⲗ bis Ⲛ', en: 'Alphabet 4: Ⲗ to Ⲛ', ar: 'الأبجدية 4: من Ⲗ إلى Ⲛ' }, prerequisites: ['l2-1'], quizId: 'q2-2',
        slides: [
            { type: 'alphabet', letterId: 'laula', emoji: '👅', explanation: {de: 'Lola steht für den Laut "l".', en: 'Lola represents the "l" sound.', ar: 'لولا يمثل صوت "ل".'}, spiritual: { bibleVerse: {de: 'Die Zunge der Weisen bringt heilsame Lehre.', en: 'The tongue of the wise brings healing.', ar: 'لسان الحكماء شفاء.'}, bibleReference: {de: 'Sprüche 12:18', en: 'Proverbs 12:18', ar: 'أمثال ١٨:١٢'}, fatherQuote: {de: 'Zähme deine Zunge.', en: 'Tame your tongue.', ar: 'ألجم لسانك.'}, fatherReference: {de: 'Hl. Makarius', en: 'St. Macarius', ar: 'القديس مقاريوس'} }},
            { type: 'alphabet', letterId: 'mi', emoji: '👩‍👧‍👦', explanation: {de: 'Mey steht für den Laut "m".', en: 'Mey represents the "m" sound.', ar: 'مي يمثل صوت "م".'}, spiritual: { bibleVerse: {de: 'Ehre deine Mutter.', en: 'Honor your mother.', ar: 'أكرم أمك.'}, bibleReference: {de: 'Exodus 20:12', en: 'Exodus 20:12', ar: 'خروج ١٢:٢٠'}, fatherQuote: {de: 'Die Theotokos ist die Mutter von uns allen.', en: 'The Theotokos is the mother of us all.', ar: 'والدة الإله هي أمنا جميعًا.'}, fatherReference: {de: 'Hl. Kyrill von Alexandria', en: 'St. Cyril of Alexandria', ar: 'القديس كيرلس الإسكندري'} }},
            { type: 'alphabet', letterId: 'ni', emoji: '✨', explanation: {de: 'Ney steht für den Laut "n".', en: 'Ney represents the "n" sound.', ar: 'ني يمثل صوت "ن".'}, spiritual: { bibleVerse: {de: 'Gott ist Licht, und in ihm ist keine Finsternis.', en: 'God is light; in him there is no darkness at all.', ar: 'الله نور وليس فيه ظلمة البتة.'}, bibleReference: {de: '1. Johannes 1:5', en: '1 John 1:5', ar: 'يوحنا الأولى ٥:١'}, fatherQuote: {de: 'Gold wird im Feuer geprüft.', en: 'Gold is tested in fire.', ar: 'الذهب يمتحن بالنار.'}, fatherReference: {de: 'Hl. Antonius', en: 'St. Anthony', ar: 'القديس أنطونيوس'} }},
        ]
    },
     'l2-3': {
        id: 'l2-3', order: 5, moduleId: 'm1', title: { de: 'Alphabet 5: Ⲝ bis Ⲣ', en: 'Alphabet 5: Ⲝ to Ⲣ', ar: 'الأبجدية 5: من Ⲝ إلى Ⲣ' }, prerequisites: ['l2-2'], quizId: 'q2-3',
        slides: [
            { type: 'alphabet', letterId: 'eksi', emoji: '🌳', explanation: {de: 'Exi ist ein Doppelkonsonant, "ks".', en: 'Exi is a double consonant, "ks".', ar: 'إكسي هو حرف ساكن مزدوج، "كس".'}, spiritual: { bibleVerse: {de: 'Das Holz des Kreuzes ist der Baum des Lebens.', en: 'The wood of the cross is the tree of life.', ar: 'خشبة الصليب هي شجرة الحياة.'}, bibleReference: {de: 'Liturgische Hymne', en: 'Liturgical Hymn', ar: 'لحن كنسي'}, fatherQuote: {de: 'Das Kreuz ist unsere Waffe.', en: 'The cross is our weapon.', ar: 'الصليب سلاحنا.'}, fatherReference: {de: 'Hl. Athanasius', en: 'St. Athanasius', ar: 'القديس أثناسيوس'} }},
            { type: 'alphabet', letterId: 'o', emoji: '🔄', explanation: {de: 'O ist ein sehr kurzer "o"-Laut.', en: 'O is a very short "o" sound.', ar: 'أو هو صوت "و" قصير جدًا.'}, spiritual: { bibleVerse: {de: '...und erneuert werdet im Geist eures Gemüts...', en: '...to be made new in the attitude of your minds...', ar: '...وتتجددوا بروح ذهنكم...'}, bibleReference: {de: 'Epheser 4:23', en: 'Ephesians 4:23', ar: 'أفسس ٢٣:٤'}, fatherQuote: {de: 'Beginne jeden Tag von neuem.', en: 'Begin again each day.', ar: 'ابدأ من جديد كل يوم.'}, fatherReference: {de: 'Hl. Antonius', en: 'St. Anthony', ar: 'القديس أنطونيوس'} }},
            { type: 'alphabet', letterId: 'pi', emoji: '🚪', explanation: {de: 'Pe wird wie ein "p" ausgesprochen.', en: 'Pe is pronounced like a "p".', ar: 'بي يُنطق مثل "ب".'}, spiritual: { bibleVerse: {de: 'Ich bin die Tür.', en: 'I am the door.', ar: 'أنا هو الباب.'}, bibleReference: {de: 'Johannes 10:9', en: 'John 10:9', ar: 'يوحنا ٩:١٠'}, fatherQuote: {de: 'Das Gebet ist die Tür zur Gnade.', en: 'Prayer is the door to grace.', ar: 'الصلاة هي باب النعمة.'}, fatherReference: {de: 'Hl. Johannes Klimakos', en: 'St. John Climacus', ar: 'القديس يوحنا السلمي'} }},
            { type: 'alphabet', letterId: 'ro', emoji: '📛', explanation: {de: 'Ro steht für den Laut "r".', en: 'Ro represents the "r" sound.', ar: 'رو يمثل صوت "ر".'}, spiritual: { bibleVerse: {de: 'Ein guter Name ist köstlicher als großer Reichtum.', en: 'A good name is more desirable than great riches.', ar: 'الصيت أفضل من الغنى الجزيل.'}, bibleReference: {de: 'Sprüche 22:1', en: 'Proverbs 22:1', ar: 'أمثال ١:٢٢'}, fatherQuote: {de: 'Rufe den Namen Jesu an, und du wirst errettet werden.', en: 'Call upon the name of Jesus and you will be saved.', ar: 'ادعُ باسم يسوع فتخلص.'}, fatherReference: {de: 'Der Hirte des Hermas', en: 'The Shepherd of Hermas', ar: 'راعي هرماس'} }},
        ]
    },
    'l2-4': {
        id: 'l2-4', order: 6, moduleId: 'm1', title: { de: 'Alphabet 6: Ⲥ bis Ⲩ', en: 'Alphabet 6: Ⲥ to Ⲩ', ar: 'الأبجدية 6: من Ⲥ إلى Ⲩ' }, prerequisites: ['l2-3'], quizId: 'q2-4',
        slides: [
            { type: 'alphabet', letterId: 'sima', emoji: '👂', explanation: {de: 'Seema wird wie ein "s" ausgesprochen.', en: 'Seema is pronounced like an "s".', ar: 'سيما يُنطق مثل "س".'}, spiritual: { bibleVerse: {de: 'Wer Ohren hat zu hören, der höre!', en: 'Whoever has ears to hear, let them hear.', ar: 'من له أذنان للسمع فليسمع!'}, bibleReference: {de: 'Markus 4:9', en: 'Mark 4:9', ar: 'مرقس ٩:٤'}, fatherQuote: {de: 'Höre auf den Rat der Ältesten.', en: 'Listen to the counsel of the elders.', ar: 'استمع إلى مشورة الشيوخ.'}, fatherReference: {de: 'Hl. Antonius', en: 'St. Anthony', ar: 'القديس أنطونيوس'} }},
            { type: 'alphabet', letterId: 'tav', emoji: '🩹', explanation: {de: 'Tav wird wie "t" ausgesprochen, kann aber nach "n" wie "d" klingen.', en: 'Tav is pronounced "t", but can sound like "d" after "n".', ar: 'تاڤ يُنطق "ت"، ولكن يمكن أن يبدو مثل "د" بعد "ن".'}, spiritual: { bibleVerse: {de: 'Er heilt, die zerbrochenen Herzens sind.', en: 'He heals the brokenhearted.', ar: 'يشفي المنكسري القلوب.'}, bibleReference: {de: 'Psalm 147:3', en: 'Psalm 147:3', ar: 'مزمور ٣:١٤٧'}, fatherQuote: {de: 'Christus ist der wahre Arzt unserer Seelen.', en: 'Christ is the true physician of our souls.', ar: 'المسيح هو طبيب نفوسنا الحقيقي.'}, fatherReference: {de: 'Hl. Ignatius von Antiochien', en: 'St. Ignatius of Antioch', ar: 'القديس أغناطيوس الأنطاكي'} }},
            { type: 'alphabet', letterId: 'epsilon', emoji: '😇', explanation: {de: 'Epsilon wird als Vokal "u" oder als Teil eines Diphthongs (z.B. "au", "eu") verwendet.', en: 'Epsilon is used as the vowel "u" or as part of a diphthong (e.g., "au", "eu").', ar: 'إبسيلون يستخدم كحرف متحرك "و" أو كجزء من صوت مزدوج (مثل "أو"، "إو").'}, spiritual: { bibleVerse: {de: 'Seid heilig, denn ich bin heilig.', en: 'Be holy, because I am holy.', ar: 'كونوا قديسين لأني أنا قدوس.'}, bibleReference: {de: '1. Petrus 1:16', en: '1 Peter 1:16', ar: 'بطرس الأولى ١٦:١'}, fatherQuote: {de: 'Heiligkeit ist nicht das Werk eines Tages, sondern des ganzen Lebens.', en: 'Holiness is not the work of a day, but of a lifetime.', ar: 'القداسة ليست عمل يوم واحد، بل عمل حياة كاملة.'}, fatherReference: {de: 'Hl. Johannes Chrysostomos', en: 'St. John Chrysostom', ar: 'القديس يوحنا ذهبي الفم'} }},
        ]
    },
     'l2-5': {
        id: 'l2-5', order: 7, moduleId: 'm1', title: { de: 'Alphabet 7: Ⲫ bis Ϣ', en: 'Alphabet 7: Ⲫ to Ϣ', ar: 'الأبجدية 7: من Ⲫ إلى Ϣ' }, prerequisites: ['l2-4'], quizId: 'q2-5',
        slides: [
            { type: 'alphabet', letterId: 'phi', emoji: '💡', explanation: {de: 'Phi wird wie "f" ausgesprochen.', en: 'Phi is pronounced like "f".', ar: 'في يُنطق مثل "ف".'}, spiritual: { bibleVerse: {de: 'Dein Wort ist meines Fußes Leuchte.', en: 'Your word is a lamp for my feet.', ar: 'سراج لرجلي كلامك.'}, bibleReference: {de: 'Psalm 119:105', en: 'Psalm 119:105', ar: 'مزمور ١٠٥:١١٩'}, fatherQuote: {de: 'Jesus ist das Licht der Welt.', en: 'Jesus is the light of the world.', ar: 'يسوع هو نور العالم.'}, fatherReference: {de: 'Hl. Athanasius', en: 'St. Athanasius', ar: 'القديس أثناسيوس'} }},
            { type: 'alphabet', letterId: 'khi', emoji: '🗓️', explanation: {de: 'Key wird normalerweise wie "ch" in "Bach" ausgesprochen.', en: 'Key is usually pronounced like "ch" in the Scottish "loch".', ar: 'كي يُنطق عادة مثل "خ".'}, spiritual: { bibleVerse: {de: 'Dies ist der Tag, den der HERR gemacht hat.', en: 'This is the day the Lord has made.', ar: 'هذا هو اليوم الذي صنعه الرب.'}, bibleReference: {de: 'Psalm 118:24', en: 'Psalm 118:24', ar: 'مزمور ٢٤:١١٨'}, fatherQuote: {de: 'Der Monat Khoiak ist der Theotokos gewidmet.', en: 'The month of Khoiak is dedicated to the Theotokos.', ar: 'شهر كيهك مكرس لوالدة الإله.'}, fatherReference: {de: 'Koptische Tradition', en: 'Coptic Tradition', ar: 'التقليد القبطي'} }},
            { type: 'alphabet', letterId: 'epsi', emoji: '🎶', explanation: {de: 'Epsi ist ein Doppelkonsonant, "ps".', en: 'Epsi is a double consonant, "ps".', ar: 'إبسي هو حرف ساكن مزدوج، "بس".'}, spiritual: { bibleVerse: {de: 'Singt dem HERRN ein neues Lied!', en: 'Sing to the Lord a new song!', ar: 'رنموا للرب ترنيمة جديدة!'}, bibleReference: {de: 'Psalm 96:1', en: 'Psalm 96:1', ar: 'مزمور ١:٩٦'}, fatherQuote: {de: 'Wenn du singst, betest du doppelt.', en: 'He who sings, prays twice.', ar: 'من يرنم يصلي مرتين.'}, fatherReference: {de: 'Hl. Augustinus', en: 'St. Augustine', ar: 'القديس أغسطينوس'} }},
            { type: 'alphabet', letterId: 'oou', emoji: '🗿', explanation: {de: 'Omega ist ein langer "o"-Laut.', en: 'Omega is a long "o" sound.', ar: 'أوميغا هو صوت "و" طويل.'}, spiritual: { bibleVerse: {de: 'Der Stein, den die Bauleute verworfen haben, ist zum Eckstein geworden.', en: 'The stone the builders rejected has become the cornerstone.', ar: 'الحجر الذي رفضه البناؤون هو قد صار رأس الزاوية.'}, bibleReference: {de: 'Psalm 118:22', en: 'Psalm 118:22', ar: 'مزمور ٢٢:١١٨'}, fatherQuote: {de: 'Christus ist der Fels unseres Heils.', en: 'Christ is the rock of our salvation.', ar: 'المسيح هو صخرة خلاصنا.'}, fatherReference: {de: 'Hl. Kyrill von Jerusalem', en: 'St. Cyril of Jerusalem', ar: 'القديس كيرلس الأورشليمي'} }},
            { type: 'alphabet', letterId: 'shai', emoji: '🧒', explanation: {de: 'Shai ist der erste der sieben rein koptischen Buchstaben.', en: 'Shai is the first of the seven purely Coptic letters.', ar: 'شاي هو أول الحروف القبطية السبعة الأصيلة.'}, spiritual: { bibleVerse: {de: 'Lasst die Kinder zu mir kommen.', en: 'Let the little children come to me.', ar: 'دعوا الأولاد يأتون إليّ.'}, bibleReference: {de: 'Markus 10:14', en: 'Mark 10:14', ar: 'مرقس ١٤:١٠'}, fatherQuote: {de: 'Wir sind alle Kinder Gottes.', en: 'We are all children of God.', ar: 'نحن جميعًا أبناء الله.'}, fatherReference: {de: 'Hl. Paulus', en: 'St. Paul', ar: 'القديس بولس'} }},
        ]
    },
    'l2-6': {
        id: 'l2-6', order: 8, moduleId: 'm1', title: { de: 'Alphabet 8: Ϥ bis Ϯ', en: 'Alphabet 8: Ϥ to Ϯ', ar: 'الأبجدية 8: من Ϥ إلى Ϯ' }, prerequisites: ['l2-5'], quizId: 'q2-6',
        slides: [
            { type: 'alphabet', letterId: 'fai', emoji: '👜', explanation: {de: 'Fai wird wie "f" ausgesprochen.', en: 'Fai is pronounced like "f".', ar: 'فاي يُنطق مثل "ف".'}, spiritual: { bibleVerse: {de: 'Nehmt mein Joch auf euch.', en: 'Take my yoke upon you.', ar: 'احملوا نيري عليكم.'}, bibleReference: {de: 'Matthäus 11:29', en: 'Matthew 11:29', ar: 'متى ٢٩:١١'}, fatherQuote: {de: 'Tragt einer des anderen Lasten.', en: 'Carry each other’s burdens.', ar: 'احملوا بعضكم أثقال بعض.'}, fatherReference: {de: 'Galater 6:2', en: 'Galatians 6:2', ar: 'غلاطية ٢:٦'} }},
            { type: 'alphabet', letterId: 'khai', emoji: '📥', explanation: {de: 'Khai ist ein kehliges "ch", ähnlich dem deutschen "ch" in "Bach".', en: 'Khai is a guttural "kh", similar to the German "ch" in "Bach".', ar: 'خاي هو صوت "خ" حلقي.'}, spiritual: { bibleVerse: {de: '...denn siehe, das Reich Gottes ist mitten unter euch.', en: '...because the kingdom of God is within you.', ar: '...لأن ملكوت الله داخلكم.'}, bibleReference: {de: 'Lukas 17:21', en: 'Luke 17:21', ar: 'لوقا ٢١:١٧'}, fatherQuote: {de: 'Das Herz ist ein kleines Gefäß, aber alle Dinge sind darin.', en: 'The heart is a small vessel, but all things are contained in it.', ar: 'القلب وعاء صغير، لكن كل الأشياء موجودة فيه.'}, fatherReference: {de: 'Hl. Makarius', en: 'St. Macarius', ar: 'القديس مقاريوس'} }},
            { type: 'alphabet', letterId: 'hori', emoji: '❤️', explanation: {de: 'Hori wird wie ein deutsches "h" ausgesprochen.', en: 'Hori is pronounced like an English "h".', ar: 'هوري يُنطق مثل "ه".'}, spiritual: { bibleVerse: {de: 'Selig sind, die reinen Herzens sind.', en: 'Blessed are the pure in heart.', ar: 'طوبى للأنقياء القلب.'}, bibleReference: {de: 'Matthäus 5:8', en: 'Matthew 5:8', ar: 'متى ٨:٥'}, fatherQuote: {de: 'Gib mir dein Herz, mein Sohn.', en: 'My son, give me your heart.', ar: 'يا ابني أعطني قلبك.'}, fatherReference: {de: 'Sprüche 23:26', en: 'Proverbs 23:26', ar: 'أمثال ٢٦:٢٣'} }},
            { type: 'alphabet', letterId: 'janja', emoji: '✋', explanation: {de: 'Jenja wird wie "j" in "Dschungel" ausgesprochen.', en: 'Jenja is pronounced like "j" in "jungle".', ar: 'جانجا يُنطق مثل "ج".'}, spiritual: { bibleVerse: {de: 'In deine Hände befehle ich meinen Geist.', en: 'Into your hands I commit my spirit.', ar: 'في يديك أستودع روحي.'}, bibleReference: {de: 'Lukas 23:46', en: 'Luke 23:46', ar: 'لوقا ٤٦:٢٣'}, fatherQuote: {de: 'Die Arbeit der Hände ist für das Gebet notwendig.', en: 'Manual labor is necessary for prayer.', ar: 'العمل اليدوي ضروري للصلاة.'}, fatherReference: {de: 'Hl. Pachomius', en: 'St. Pachomius', ar: 'القديس باخوميوس'} }},
            { type: 'alphabet', letterId: 'chima', emoji: '✝️', explanation: {de: 'Cheema wird wie "tsch" in "Deutsch" ausgesprochen.', en: 'Cheema is pronounced like "ch" in "church".', ar: 'تشيما يُنطق مثل "تش".'}, spiritual: { bibleVerse: {de: 'Denn das Wort vom Kreuz ist eine Torheit denen, die verloren werden; uns aber, die wir selig werden, ist\'s eine Gotteskraft.', en: 'For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God.', ar: 'فإن كلمة الصليب عند الهالكين جهالة، وأما عندنا نحن المخلصين فهي قوة الله.'}, bibleReference: {de: '1. Korinther 1:18', en: '1 Corinthians 1:18', ar: 'كورنثوس الأولى ١٨:١'}, fatherQuote: {de: 'Der Herr ist meine Stärke.', en: 'The Lord is my strength.', ar: 'الرب قوتي.'}, fatherReference: {de: 'Psalm 118:14', en: 'Psalm 118:14', ar: 'مزمور ١٤:١١٨'} }},
            { type: 'alphabet', letterId: 'ti', emoji: '🎁', explanation: {de: 'Ti ist eine Ligatur aus T und I und wird als "ti" ausgesprochen.', en: 'Ti is a ligature of T and I and is pronounced "ti".', ar: 'تي هو دمج لحرفي T و I ويُنطق "تي".'}, spiritual: { bibleVerse: {de: 'Denn die Gabe Gottes ist das ewige Leben.', en: 'For the gift of God is eternal life.', ar: 'لأن هبة الله هي الحياة الأبدية.'}, bibleReference: {de: 'Römer 6:23', en: 'Romans 6:23', ar: 'رومية ٢٣:٦'}, fatherQuote: {de: 'Gib, und es wird dir gegeben werden.', en: 'Give, and it will be given to you.', ar: 'أعطوا تعطوا.'}, fatherReference: {de: 'Lukas 6:38', en: 'Luke 6:38', ar: 'لوقا ٣٨:٦'} }},
        ]
    },
    // Module 2
    'm2-l1': {
        id: 'm2-l1', order: 1, moduleId: 'm2', title: { de: 'Zahlen', en: 'Numbers', ar: 'الأرقام' }, prerequisites: ['l2-6'], quizId: 'q2-l1',
        slides: [
            { type: 'grammar', title: { de: 'Zahlen und Geschlecht', en: 'Numbers and Gender', ar: 'الأرقام والجنس' }, rule: { de: 'Koptische Zahlen haben oft eine maskuline und eine feminine Form. Das Geschlecht richtet sich nach dem Substantiv, das sie beschreiben. Zum Beispiel "drei Söhne" (maskulin) vs. "drei Töchter" (feminin).', en: 'Coptic numbers often have masculine and feminine forms. The gender depends on the noun they describe. For example, "three sons" (masculine) vs. "three daughters" (feminine).', ar: 'الأرقام القبطية غالبًا ما يكون لها صيغة مذكرة ومؤنثة. يعتمد الجنس على الاسم الذي يصفونه. على سبيل المثال، "ثلاثة أبناء" (مذكر) مقابل "ثلاث بنات" (مؤنث).' }, examples: [{ coptic: 'ϣⲟⲙⲧ ⲛ̀ϣⲏⲣⲓ', translit: 'shomt en-sheri', meaning: { de: 'drei Söhne', en: 'three sons', ar: 'ثلاثة أبناء' } }, { coptic: 'ϣⲟⲙϯ ⲛ̀ϣⲉⲉⲣⲓ', translit: 'shomti en-sheeri', meaning: { de: 'drei Töchter', en: 'three daughters', ar: 'ثلاث بنات' } }] },
            { type: 'number', number: 1, copticSymbol: 'ⲁ̅', copticName: 'ⲟⲩⲁⲓ', translit: 'ouai' },
            { type: 'number', number: 2, copticSymbol: 'ⲃ̅', copticName: 'ⲥ̀ⲛⲁⲩ', translit: 'snau' },
            { type: 'number', number: 3, copticSymbol: 'ⲅ̅', copticName: 'ϣⲟⲙⲧ', translit: 'shomt' },
            { type: 'number', number: 4, copticSymbol: 'ⲇ̅', copticName: 'ϥ̀ⲧⲟⲟⲩ', translit: 'fto-ou' },
            { type: 'number', number: 5, copticSymbol: 'ⲉ̅', copticName: 'ϯ̀ⲟⲩ', translit: 'ti-ou' },
            { type: 'number', number: 6, copticSymbol: 'ⲋ̅', copticName: 'ⲥⲟⲟⲩ', translit: 'so-ou' },
            { type: 'number', number: 7, copticSymbol: 'ⲍ̅', copticName: 'ⲥⲁϣϥ', translit: 'sashf' },
            { type: 'number', number: 8, copticSymbol: 'ⲏ̅', copticName: 'ϣ̀ⲙⲟⲩⲛ', translit: 'shmoun' },
            { type: 'number', number: 9, copticSymbol: 'ⲑ̅', copticName: 'ⲯⲓⲧ', translit: 'psit' },
            { type: 'number', number: 10, copticSymbol: 'ⲓ̅', copticName: 'ⲙⲏⲧ', translit: 'meet' },
            { type: 'grammar', title: { de: 'Zahlen zählen', en: 'Counting with Numbers', ar: 'العد بالأرقام' }, rule: { de: 'Bei den Zahlen 1 und 2 steht die Zahl nach dem Substantiv. Ab 3 steht die Zahl vor dem Substantiv und wird mit "ⲛ̀" (en) verbunden.', en: 'For numbers 1 and 2, the number comes after the noun. From 3 onwards, the number comes before the noun and is connected with "ⲛ̀" (en).', ar: 'بالنسبة للرقمين 1 و 2، يأتي الرقم بعد الاسم. من 3 فصاعدًا، يأتي الرقم قبل الاسم ويرتبط بـ "ⲛ̀" (إن).' }, examples: [{ coptic: 'ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲟⲩⲱⲧ', translit: 'ou-romi en-ouot', meaning: { de: 'ein Mann', en: 'one man', ar: 'رجل واحد' } }, { coptic: 'ⲣⲱⲙⲓ ⲥ̀ⲛⲁⲩ', translit: 'romi snau', meaning: { de: 'zwei Männer', en: 'two men', ar: 'رجلان' } }, { coptic: 'ϣⲟⲙⲧ ⲛ̀ⲣⲱⲙⲓ', translit: 'shomt en-romi', meaning: { de: 'drei Männer', en: 'three men', ar: 'ثلاثة رجال' } }] },
            { type: 'grammar', title: { de: 'Ordnungszahlen', en: 'Ordinal Numbers', ar: 'الأعداد الترتيبية' }, rule: { de: 'Um Ordnungszahlen (erster, zweiter, dritter...) zu bilden, wird "ⲡⲓⲙⲁϩ-" (pimah-) vor die Grundzahl gesetzt.', en: 'To form ordinal numbers (first, second, third...), "ⲡⲓⲙⲁϩ-" (pimah-) is placed before the cardinal number.', ar: 'لتكوين الأعداد الترتيبية (الأول، الثاني، الثالث...)، يتم وضع "ⲡⲓⲙⲁϩ-" (بيماه-) قبل العدد الأصلي.' }, examples: [{ coptic: 'ⲡⲓϣⲟⲣⲡ', translit: 'pishorp', meaning: { de: 'der erste', en: 'the first', ar: 'الأول' } }, { coptic: 'ⲡⲓⲙⲁϩⲥ̀ⲛⲁⲩ', translit: 'pimah-snau', meaning: { de: 'der zweite', en: 'the second', ar: 'الثاني' } }, { coptic: 'ⲡⲓⲙⲁϩϣⲟⲙⲧ', translit: 'pimah-shomt', meaning: { de: 'der dritte', en: 'the third', ar: 'الثالث' } }] },
            { type: 'number', number: 20, copticSymbol: 'ⲕ̅', copticName: 'ϫⲟⲩⲱⲧ', translit: 'jouot' },
            { type: 'number', number: 30, copticSymbol: 'ⲗ̅', copticName: 'ⲙⲁⲁⲃ', translit: 'maav' },
            { type: 'number', number: 40, copticSymbol: 'ⲙ̅', copticName: 'ϩ̀ⲙⲉ', translit: 'hme' },
            { type: 'number', number: 100, copticSymbol: 'ⲣ̅', copticName: 'ϣⲉ', translit: 'she' },
            { type: 'sentence', item: { text: 'ⲡⲓϣⲟⲣⲡ ⲛ̀ⲣⲱⲙⲓ', translit: 'pishorp en-romi', meaning: { de: 'Der erste Mensch', en: 'The first man', ar: 'الإنسان الأول' } } },
            { type: 'sentence', item: { text: 'ⲡⲓⲙⲁϩⲥⲁϣϥ ⲛ̀ⲉ̀ϩⲟⲟⲩ', translit: 'pimah-sashf en-ehoou', meaning: { de: 'Der siebte Tag', en: 'The seventh day', ar: 'اليوم السابع' } } },
        ]
    },
    'm2-l2': {
        id: 'm2-l2', order: 2, moduleId: 'm2', title: { de: 'Nomen: Geschlecht & Artikel', en: 'Nouns: Gender & Articles', ar: 'الأسماء: الجنس والأدوات' }, prerequisites: ['m2-l1'], quizId: 'q2-l2',
        slides: [
            { type: 'grammar', title: { de: 'Der bestimmte Artikel (Singular)', en: 'The Definite Article (Singular)', ar: 'أداة التعريف (المفرد)' }, rule: { de: 'Es gibt "starke" Artikel (ⲡⲓ, ϯ) für Betonung und "schwache" Artikel (ⲡ̀/ⲫ, ⲧ̀/ⲑ̀) für den allgemeinen Gebrauch. Das Geschlecht des Nomens bestimmt den Artikel.', en: 'There are "strong" articles (ⲡⲓ, ϯ) for emphasis and "weak" articles (ⲡ̀/ⲫ, ⲧ̀/ⲑ̀) for general use. The gender of the noun determines the article.', ar: 'هناك أدوات "قوية" (ⲡⲓ، ϯ) للتأكيد وأدوات "ضعيفة" (ⲡ̀/ⲫ، ⲧ̀/ⲑ̀) للاستخدام العام. جنس الاسم يحدد الأداة.' }, examples: [{ coptic: 'ⲡⲓⲓⲱⲧ', translit: 'pi-iot', meaning: { de: 'dieser Vater (stark)', en: 'this very father (strong)', ar: 'هذا الآب (قوي)' } }, { coptic: 'ⲡ̀ⲣⲱⲙⲓ', translit: 'ep-romi', meaning: { de: 'der Mann (schwach)', en: 'the man (weak)', ar: 'الرجل (ضعيف)' } }] },
            { type: 'grammar', title: { de: 'Die Vilminor-Buchstaben', en: 'The Vilminor Letters', ar: 'الحروف الفيلمينورية' }, rule: { de: 'Die schwachen Artikel ändern sich vor den "Vilminor"-Buchstaben (ⲃ, ⲓ, ⲗ, ⲙ, ⲛ, ⲟ, ⲣ). ⲡ̀ wird zu ⲫ, und ⲧ̀ wird zu ⲑ̀.', en: 'The weak articles change before "Vilminor" letters (ⲃ, ⲓ, ⲗ, ⲙ, ⲛ, ⲟ, ⲣ). ⲡ̀ becomes ⲫ, and ⲧ̀ becomes ⲑ̀.', ar: 'تتغير الأدوات الضعيفة قبل حروف "الفيلمينور" (ⲃ، ⲓ، ⲗ، ⲙ، ⲛ، ⲟ، ⲣ). ⲡ̀ تصبح ⲫ، و ⲧ̀ تصبح ⲑ̀.' }, examples: [{ coptic: 'ⲫ̀ⲣⲁⲛ', translit: 'ev-ran', meaning: { de: 'der Name', en: 'the name', ar: 'الاسم' } }, { coptic: 'ⲑ̀ⲙⲁⲁⲩ', translit: 'eth-maav', meaning: { de: 'die Mutter', en: 'the mother', ar: 'الأم' } }] },
            { type: 'grammar', title: { de: 'Der bestimmte Artikel (Plural)', en: 'The Definite Article (Plural)', ar: 'أداة التعريف (الجمع)' }, rule: { de: 'Der allgemeine Pluralartikel ist ⲛⲓ. Der Artikel ⲛⲉⲛ wird in Konstruktionen wie "die Hände von Aaron" verwendet.', en: 'The general plural article is ⲛⲓ. The article ⲛⲉⲛ is used in constructions like "the hands of Aaron".', ar: 'أداة الجمع العامة هي ⲛⲓ. الأداة ⲛⲉⲛ تستخدم في تراكيب مثل "أيدي هارون".' }, examples: [{ coptic: 'ⲛⲓϫⲓϫ', translit: 'ni-jij', meaning: { de: 'die Hände', en: 'the hands', ar: 'الأيدي' } }, { coptic: 'ⲛⲉⲛϫⲓϫ ⲛ̀ⲁ̀ⲁⲣⲱⲛ', translit: 'nen-jij en-aaron', meaning: { de: 'die Hände Aarons', en: 'the hands of Aaron', ar: 'أيدي هارون' } }] },
            { type: 'grammar', title: { de: 'Unregelmäßige Pluralformen', en: 'Irregular Plurals', ar: 'الجموع الشاذة' }, rule: { de: 'Einige wenige Nomen haben unregelmäßige Pluralformen, die man auswendig lernen muss.', en: 'A few nouns have irregular plural forms that must be memorized.', ar: 'بعض الأسماء لها جموع شاذة يجب حفظها.' }, examples: [{ coptic: 'ⲡ̀ⲥⲟⲛ', translit: 'pi-son', meaning: { de: 'der Bruder', en: 'the brother', ar: 'الأخ' } }, { coptic: 'ⲛⲓⲥ̀ⲛⲏⲟⲩ', translit: 'ni-sneo-u', meaning: { de: 'die Brüder', en: 'the brothers', ar: 'الإخوة' } }] },
            { type: 'grammar', title: { de: 'Der Vokativ', en: 'The Vocative', ar: 'النداء' }, rule: { de: 'Um jemanden direkt anzusprechen (z. B. "O Herr!"), wird oft der bestimmte Artikel oder das Partikel ⲱ (o) verwendet.', en: 'To address someone directly (e.g., "O Lord!"), the definite article or the particle ⲱ (o) is often used.', ar: 'لمخاطبة شخص ما مباشرة (مثل "يا رب!"), غالبًا ما تُستخدم أداة التعريف أو أداة النداء ⲱ (أو).' }, examples: [{ coptic: 'Ⲡ̀ϭⲟⲓⲥ', translit: 'Ep-chois', meaning: { de: 'O Herr!', en: 'O Lord!', ar: 'يا رب!' } }, { coptic: 'ⲱ̀ ⲙⲁⲣⲓⲁ', translit: 'o maria', meaning: { de: 'O Maria!', en: 'O Mary!', ar: 'يا مريم!' } }] },
            { type: 'grammar', title: { de: 'Der unbestimmte Artikel', en: 'The Indefinite Article', ar: 'أداة النكرة' }, rule: { de: 'Der unbestimmte Artikel ist ⲟⲩ für den Singular ("ein/eine") und ϩⲁⲛ für den Plural ("einige").', en: 'The indefinite article is ⲟⲩ for the singular ("a/an") and ϩⲁⲛ for the plural ("some").', ar: 'أداة النكرة هي ⲟⲩ للمفرد ("واحد/واحدة") و ϩⲁⲛ للجمع ("بعض").' }, examples: [{ coptic: 'ⲟⲩⲣⲱⲙⲓ', translit: 'ou-romi', meaning: { de: 'ein Mann', en: 'a man', ar: 'رجل' } }, { coptic: 'ϩⲁⲛⲣⲱⲙⲓ', translit: 'han-romi', meaning: { de: 'einige Männer', en: 'some men', ar: 'بعض الرجال' } }] },
        ]
    },
    // Module 3
    'l3-1': {
        id: 'l3-1', order: 1, moduleId: 'm3', title: { de: 'Bestimmte & Unbestimmte Artikel', en: 'Definite & Indefinite Articles', ar: 'أدوات التعريف والتنكير' }, prerequisites: ['m2-l2'], quizId: 'q3-1',
        slides: [
            { type: 'grammar', title: { de: 'Unbestimmter Artikel', en: 'Indefinite Article', ar: 'أداة النكرة' }, rule: { de: 'Der unbestimmte Artikel ist "ⲟⲩ" (ou) für den Singular ("ein/eine") und "ϩⲁⲛ" (han) für den Plural ("einige"). Sie sind für alle Geschlechter gleich.', en: 'The indefinite article is "ⲟⲩ" (ou) for singular ("a/an") and "ϩⲁⲛ" (han) for plural ("some"). They are the same for all genders.', ar: 'أداة النكرة هي "ⲟⲩ" (أو) للمفرد و "ϩⲁⲛ" (هان) للجمع ("بعض"). وهي لا تتغير حسب الجنس.' }, examples: [
                { coptic: 'ⲟⲩⲣⲱⲙⲓ', translit: 'ou-romi', meaning: { de: 'ein Mann', en: 'a man', ar: 'رجل' } }, 
                { coptic: 'ϩⲁⲛⲣⲱⲙⲓ', translit: 'han-romi', meaning: { de: 'einige Männer', en: 'some men', ar: 'بعض الرجال' } }
            ]},
            { type: 'grammar', title: { de: 'Bestimmter Artikel: Singular', en: 'Definite Article: Singular', ar: 'أداة التعريف: المفرد' }, rule: { de: 'Es gibt 6 singuläre bestimmte Artikel. Starke (ⲡⲓ, ϯ) für Betonung und schwache (ⲡ̀, ⲫ̀, ⲧ̀, ⲑ̀) für den allgemeinen Gebrauch. Das Geschlecht des Substantivs entscheidet.', en: 'There are 6 singular definite articles. Strong (ⲡⲓ, ϯ) for emphasis, and weak (ⲡ̀, ⲫ̀, ⲧ̀, ⲑ̀) for general use. The noun\'s gender determines which to use.', ar: 'توجد 6 أدوات تعريف للمفرد. القوية (ⲡⲓ، ϯ) للتأكيد، والضعيفة (ⲡ̀، ⲫ̀، ⲧ̀، ⲑ̀) للاستخدام العام. جنس الاسم يحدد الأداة.' }, examples: [
                { coptic: 'ⲡⲓⲣⲱⲙⲓ', translit: 'pi-romi', meaning: { de: 'dieser spezielle Mann', en: 'this specific man', ar: 'هذا الرجل المحدد' } },
                { coptic: 'ⲡ̀ⲣⲱⲙⲓ', translit: 'ep-romi', meaning: { de: 'der Mann', en: 'the man', ar: 'الرجل' } }
            ]},
            { type: 'grammar', title: { de: 'Bestimmter Artikel: Vilminor Regel', en: 'Definite Article: Vilminor Rule', ar: 'أداة التعريف: قاعدة الفيلمينور' }, rule: { de: 'Vor den "Vilminor"-Buchstaben (ⲃ, ⲓ, ⲗ, ⲙ, ⲛ, ⲟ, ⲣ) wird der schwache maskuline Artikel ⲡ̀ zu ⲫ̀, und der schwache feminine Artikel ⲧ̀ wird zu ⲑ̀.', en: 'Before "Vilminor" letters (ⲃ, ⲓ, ⲗ, ⲙ, ⲛ, ⲟ, ⲣ), the weak masculine article ⲡ̀ becomes ⲫ̀, and the weak feminine article ⲧ̀ becomes ⲑ̀.', ar: 'قبل حروف "الفيلمينور" (ⲃ، ⲓ، ⲗ، ⲙ، ⲛ، ⲟ، ⲣ)، تتحول أداة المذكر الضعيفة ⲡ̀ إلى ⲫ̀، وأداة المؤنث الضعيفة ⲧ̀ إلى ⲑ̀.' }, examples: [
                { coptic: 'ⲫ̀ⲣⲁⲛ', translit: 'ev-ran', meaning: { de: 'der Name', en: 'the name', ar: 'الاسم' } }
            ]},
             { type: 'grammar', title: { de: 'Bestimmter Artikel: Plural', en: 'Definite Article: Plural', ar: 'أداة التعريف: الجمع' }, rule: { de: 'Der allgemeine Pluralartikel ist ⲛⲓ. In "von"-Konstruktionen wird ⲛⲉⲛ verwendet (z.B. "die Söhne von Israel").', en: 'The general plural article is ⲛⲓ. In "of" constructions, ⲛⲉⲛ is used (e.g., "the sons of Israel").', ar: 'أداة الجمع العامة هي ⲛⲓ. في تراكيب الإضافة، تُستخدم ⲛⲉⲛ (مثل "أبناء إسرائيل").' }, examples: [
                { coptic: 'ⲛⲓⲣⲱⲙⲓ', translit: 'ni-romi', meaning: { de: 'die Männer', en: 'the men', ar: 'الرجال' } },
                { coptic: 'ⲛⲉⲛϣⲏⲣⲓ ⲙ̀ⲡ̀ⲓⲥⲣⲁⲏⲗ', translit: 'nen-sheri em-pisrael', meaning: { de: 'die Söhne Israels', en: 'the sons of Israel', ar: 'أبناء إسرائيل' } }
            ]},
            { type: 'grammar', title: { de: 'Der Vokativ', en: 'The Vocative', ar: 'النداء' }, rule: { de: 'Um jemanden anzurufen, kann der bestimmte Artikel oder das Wort ⲱ verwendet werden.', en: 'To call upon someone, you can use the definite article or the word ⲱ.', ar: 'لمناداة شخص ما، يمكنك استخدام أداة التعريف أو كلمة ⲱ.' }, examples: [
                { coptic: 'Ⲡ̀ϭⲟⲓⲥ', translit: 'Epchois', meaning: { de: 'O Herr!', en: 'O Lord!', ar: 'يا رب!' } }
            ]}
        ]
    },
    'l3-2': {
        id: 'l3-2', order: 2, moduleId: 'm3', title: { de: 'Possessivartikel', en: 'Possessive Articles', ar: 'أدوات الملكية' }, prerequisites: ['l3-1'], quizId: 'q3-2',
        slides: [
            { type: 'grammar', title: { de: 'Besitz anzeigen', en: 'Indicating Possession', ar: 'التعبير عن الملكية' }, rule: { de: 'Possessivartikel ("mein", "dein" usw.) werden direkt vor das Substantiv gesetzt. Ihre Form hängt vom Besitzer (Person, Zahl) und vom Geschlecht des besessenen Objekts ab.', en: 'Possessive articles ("my", "your", etc.) are placed directly before the noun. Their form depends on the possessor (person, number) and the gender of the possessed object.', ar: 'توضع أدوات الملكية ("لي"، "لك"، إلخ) مباشرة قبل الاسم. شكلها يعتمد على المالك (الشخص، العدد) وجنس الشيء المملوك.' }, examples: [
                { coptic: 'ⲡⲁⲓⲱⲧ', translit: 'pa-iot', meaning: { de: 'mein Vater (mask. Objekt)', en: 'my father (masc. object)', ar: 'أبي (مفعول به مذكر)' } },
                { coptic: 'ⲧⲁⲙⲁⲁⲩ', translit: 'ta-maav', meaning: { de: 'meine Mutter (fem. Objekt)', en: 'my mother (fem. object)', ar: 'أمي (مفعول به مؤنث)' } },
                { coptic: 'ⲛⲁⲥ̀ⲛⲏⲟⲩ', translit: 'na-sneo-u', meaning: { de: 'meine Brüder (pl. Objekt)', en: 'my brothers (pl. object)', ar: 'إخوتي (مفعول به جمع)' } }
            ] },
            { type: 'grammar', title: { de: 'Tabelle der Possessivartikel', en: 'Table of Possessive Articles', ar: 'جدول أدوات الملكية' }, rule: { de: 'Beispiel für "dein" (zu einem Mann gesprochen): ⲡⲉⲕ- (pek) für maskuline Objekte, ⲧⲉⲕ- (tek) für feminine, ⲛⲉⲕ- (nek) für plurale.', en: 'Example for "your" (spoken to a male): ⲡⲉⲕ- (pek) for masculine objects, ⲧⲉⲕ- (tek) for feminine, ⲛⲉⲕ- (nek) for plural.', ar: 'مثال على "لك" (لمخاطبة مذكر): ⲡⲉⲕ- (بيك) للأشياء المذكرة، ⲧⲉⲕ- (تيك) للمؤنثة، و ⲛⲉⲕ- (نيك) للجمع.' }, examples: [
                { coptic: 'ⲡⲉⲕⲓⲱⲧ', translit: 'pek-iot', meaning: { de: 'dein Vater', en: 'your father', ar: 'أبوك' } },
                { coptic: 'ⲧⲉⲕⲙⲁⲁⲩ', translit: 'tek-maav', meaning: { de: 'deine Mutter', en: 'your mother', ar: 'أمك' } },
            ] }
        ]
    },
    'l3-3': {
        id: 'l3-3', order: 3, moduleId: 'm3', title: { de: 'Demonstrativartikel', en: 'Demonstrative Articles', ar: 'أدوات الإشارة' }, prerequisites: ['l3-2'], quizId: 'q3-3',
        slides: [
             { type: 'grammar', title: { de: 'Demonstrativartikel: "Dieser"', en: 'Demonstrative Article: "This"', ar: 'أداة الإشارة: "هذا"' }, rule: { de: 'Um auf etwas Nahes zu zeigen ("dieser, diese, dieses"), werden die Artikel ⲡⲁⲓ (pai) für maskulin, ⲧⲁⲓ (tai) für feminin und ⲛⲁⲓ (nai) für plural verwendet. Sie stehen vor dem Substantiv.', en: 'To point to something near ("this, these"), use the articles ⲡⲁⲓ (pai) for masculine, ⲧⲁⲓ (tai) for feminine, and ⲛⲁⲓ (nai) for plural. They come before the noun.', ar: 'للإشارة إلى شيء قريب ("هذا، هذه، هؤلاء")، استخدم الأدوات ⲡⲁⲓ (باي) للمذكر، ⲧⲁⲓ (تاي) للمؤنث، و ⲛⲁⲓ (ناي) للجمع. تأتي قبل الاسم.' }, examples: [
                { coptic: 'ⲡⲁⲓⲣⲱⲙⲓ', translit: 'pai-romi', meaning: { de: 'dieser Mann', en: 'this man', ar: 'هذا الرجل' } }
            ]},
            { type: 'grammar', title: { de: 'Demonstrativartikel: "Jener"', en: 'Demonstrative Article: "That"', ar: 'أداة الإشارة: "ذلك"' }, rule: { de: 'Um auf etwas Entferntes zu zeigen ("jener, jene, jenes"), wird die Phrase "ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ" (ete em-mau) nach dem Substantiv mit seinem bestimmten Artikel gestellt.', en: 'To point to something distant ("that, those"), the phrase "ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ" (ete em-mau) is placed after the noun with its definite article.', ar: 'للإشارة إلى شيء بعيد ("ذلك، تلك، أولئك")، توضع العبارة "ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ" (إيتي إم-ماو) بعد الاسم مع أداة التعريف الخاصة به.' }, examples: [
                { coptic: 'ⲡ̀ⲣⲱⲙⲓ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ', translit: 'ep-romi ete em-mau', meaning: { de: 'jener Mann', en: 'that man', ar: 'ذلك الرجل' } }
            ]},
            { type: 'grammar', title: { de: 'Demonstrativpronomen', en: 'Demonstrative Pronoun', ar: 'ضمير الإشارة' }, rule: { de: 'Wenn "dies" alleine steht (als Pronomen, nicht als Artikel), werden ⲫⲁⲓ (phai), ⲑⲁⲓ (thai) und ⲛⲁⲓ (nai) verwendet.', en: 'When "this" stands alone (as a pronoun, not an article), ⲫⲁⲓ (phai), ⲑⲁⲓ (thai), and ⲛⲁⲓ (nai) are used.', ar: 'عندما تأتي "هذا" بمفردها (كضمير وليس أداة)، تُستخدم ⲫⲁⲓ (فاي)، ⲑⲁⲓ (ثاي)، و ⲛⲁⲓ (ناي).' }, examples: [
                { coptic: 'ⲫⲁⲓ ⲡⲉ ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲫ̀ⲛⲟⲩϯ', translit: 'phai pe ep-sheri em-efnouti', meaning: { de: 'Dieser ist der Sohn Gottes', en: 'This is the Son of God', ar: 'هذا هو ابن الله' } }
            ]}
        ]
    },
    'l3-4': {
        id: 'l3-4', order: 4, moduleId: 'm3', title: { de: 'Personalpronomen & Abkürzungen', en: 'Personal Pronouns & Abbreviations', ar: 'الضمائر الشخصية والاختصارات' }, prerequisites: ['l3-3'], quizId: 'q3-4',
        slides: [
            { type: 'grammar', title: { de: 'Unabhängige Personalpronomen', en: 'Independent Personal Pronouns', ar: 'الضمائر الشخصية المنفصلة' }, rule: { de: 'Diese Pronomen können alleine stehen, oft zur Betonung. Sie werden für Subjekt und Prädikat verwendet.', en: 'These pronouns can stand alone, often for emphasis. They are used for subjects and predicates.', ar: 'هذه الضمائر يمكن أن تأتي بمفردها، غالبًا للتأكيد. تستخدم للمبتدأ والخبر.' }, examples: [
                { coptic: 'ⲁ̀ⲛⲟⲕ', translit: 'anok', meaning: { de: 'Ich', en: 'I', ar: 'أنا' } },
                { coptic: 'ⲛ̀ⲑⲟⲕ', translit: 'enthok', meaning: { de: 'Du (m.)', en: 'You (m.)', ar: 'أنت' } },
                { coptic: 'ⲁ̀ⲛⲟⲛ', translit: 'anon', meaning: { de: 'Wir', en: 'We', ar: 'نحن' } }
            ]},
            { type: 'sentence', item: { text: 'ⲁ̀ⲛⲟⲕ ⲡⲉ ⲡⲓⲭⲣⲓⲥⲧⲟⲥ', translit: 'anok pe pi-christos', meaning: { de: 'Ich bin der Christus', en: 'I am the Christ', ar: 'أنا هو المسيح' } } },
            { type: 'grammar', title: { de: 'Heilige Abkürzungen (Nomina Sacra)', en: 'Sacred Abbreviations (Nomina Sacra)', ar: 'الاختصارات المقدسة' }, rule: { de: 'Wichtige Namen wie "Jesus", "Christus", "Gott" und "Herr" wurden in Manuskripten oft abgekürzt und mit einem Strich darüber markiert.', en: 'Important names like "Jesus," "Christ," "God," and "Lord" were often abbreviated in manuscripts and marked with a line above.', ar: 'الأسماء الهامة مثل "يسوع" و "المسيح" و "الله" و "الرب" كانت غالبًا ما تُختصر في المخطوطات وتُميز بخط فوقها.' }, examples: [
                { coptic: 'Ⲓ̅ⲥ̅', translit: 'IS', meaning: { de: 'Jesus', en: 'Jesus', ar: 'يسوع' } },
                { coptic: 'Ⲭ̅ⲥ̅', translit: 'CHS', meaning: { de: 'Christus', en: 'Christ', ar: 'المسيح' } },
                { coptic: 'ⲫϯ', translit: 'FNouti', meaning: { de: 'Gott', en: 'God', ar: 'الله' } },
                { coptic: 'Ⲡϭ̅ⲟ̅ⲓ̅ⲥ̅', translit: 'PCHOIS', meaning: { de: 'Der Herr', en: 'The Lord', ar: 'الرب' } }
            ]}
        ]
    },
    'l5-1': {
        id: 'l5-1', order: 1, moduleId: 'm4', title: { de: 'Erstes Präsens', en: 'First Present Tense', ar: 'المضارع الأول' }, prerequisites: ['l3-4'], quizId: 'q5-1',
        slides: [
            { type: 'grammar', title: { de: 'Konjugation (Intransitiv)', en: 'Conjugation (Intransitive)', ar: 'التصريف (الفعل اللازم)' }, rule: { de: 'Das erste Präsens beschreibt eine andauernde Handlung. Es wird mit Personalpräfixen vor dem Infinitiv des Verbs gebildet.', en: 'The first present describes an ongoing action. It is formed with personal prefixes before the verb\'s infinitive.', ar: 'يصف المضارع الأول حدثًا مستمرًا. يتكون من ضمائر بادئة توضع قبل مصدر الفعل.' }, examples: [
                { coptic: 'ϯⲙⲟϣⲓ', translit: 'ti-moshi', meaning: { de: 'ich gehe', en: 'I am walking', ar: 'أنا أمشي' } }, 
                { coptic: 'ⲕ̀ⲙⲟϣⲓ', translit: 'ek-moshi', meaning: { de: 'du (m) gehst', en: 'you (m) are walking', ar: 'أنت تمشي' } },
                { coptic: 'ϥ̀ⲙⲟϣⲓ', translit: 'ef-moshi', meaning: { de: 'er geht', en: 'he is walking', ar: 'هو يمشي' } },
                { coptic: 'ⲧⲉⲛⲙⲟϣⲓ', translit: 'ten-moshi', meaning: { de: 'wir gehen', en: 'we are walking', ar: 'نحن نمشي' } }
             ] },
             { type: 'grammar', title: { de: 'Verneinung im Präsens', en: 'Negation in the Present Tense', ar: 'النفي في زمن المضارع' }, rule: { de: 'Um einen Satz im Präsens zu verneinen, fügt man "ⲁⲛ" (an) nach dem Verb hinzu. Optional kann auch ein "ⲛ̀-" (en-) vor das konjugierte Verb gesetzt werden.', en: 'To negate a sentence in the present, "ⲁⲛ" (an) is added after the verb. Optionally, an "ⲛ̀-" (en-) can also be placed before the conjugated verb.', ar: 'لنفي جملة في المضارع، تُضاف "ⲁⲛ" (أن) بعد الفعل. اختياريًا، يمكن أيضًا وضع "ⲛ̀-" (إن-) قبل الفعل المصرف.' }, examples: [
                { coptic: 'ⲕ̀ⲥⲁϫⲓ ⲁⲛ', translit: 'ek-saji an', meaning: { de: 'du sprichst nicht', en: 'you are not speaking', ar: 'أنت لا تتكلم' } }
             ]},
             { type: 'grammar', title: { de: 'Der verschobene Subjektindikator', en: 'The Postponed Subject Indicator', ar: 'علامة الفاعل المؤجلة' }, rule: { de: 'Normalerweise steht das Subjekt vor dem Verb. Mit "ⲛ̀ϫⲉ" (enje) kann das Subjekt nach dem Verb stehen, um die Wortstellung zu ändern, oft um griechische Originaltexte genauer wiederzugeben.', en: 'Usually, the subject precedes the verb. With "ⲛ̀ϫⲉ" (enje), the subject can be placed after the verb to change word order, often to more closely match Greek originals.', ar: 'عادةً ما يسبق الفاعل الفعل. مع "ⲛ̀ϫⲉ" (إنجي)، يمكن وضع الفاعل بعد الفعل لتغيير ترتيب الكلمات، غالبًا لمحاكاة النصوص اليونانية الأصلية