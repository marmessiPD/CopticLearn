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
    'l4-1': {
        id: 'l4-1', order: 2, moduleId: 'm3', title: { de: 'Der bestimmte Artikel', en: 'The Definite Article', ar: 'أداة التعريف' }, prerequisites: ['l3-3'], quizId: 'q4-1',
        slides: [
            { type: 'grammar', title: { de: 'Der bestimmte Artikel', en: 'The Definite Article', ar: 'أداة التعريف' }, rule: { de: 'Im Koptischen gibt es drei bestimmte Artikel: ⲡ̀ (pi) für maskuline Substantive, ⲧ̀ (ti) für feminine und ⲛⲓ (ni) für plurale.', en: 'Coptic has three definite articles: ⲡ̀ (pi) for masculine nouns, ⲧ̀ (ti) for feminine, and ⲛⲓ (ni) for plural.', ar: 'في القبطية، توجد ثلاث أدوات تعريف: ⲡ̀ (بي) للأسماء المذكرة، ⲧ̀ (تي) للمؤنثة، و ⲛⲓ (ني) للجمع.' }, examples: [{ coptic: 'ⲡ̀ⲣⲱⲙⲓ', translit: 'pi-romi', meaning: { de: 'der Mann', en: 'the man', ar: 'الرجل' } }, { coptic: 'ⲧ̀ⲥ̀ϩⲓⲙⲓ', translit: 'ti-shimi', meaning: { de: 'die Frau', en: 'the woman', ar: 'المرأة' } }, { coptic: 'ⲛⲓⲣⲱⲙⲓ', translit: 'ni-romi', meaning: { de: 'die Menschen', en: 'the people', ar: 'الناس' } }] },
            { type: 'vocab', item: { coptic: 'ⲡ̀ⲓⲱⲧ', translit: 'pi-iot', meaning: { de: 'der Vater', en: 'the father', ar: 'الأب' }, emoji: '👨‍👧‍👦' } },
            { type: 'vocab', item: { coptic: 'ⲧ̀ⲙⲁⲁⲩ', translit: 'ti-maav', meaning: { de: 'die Mutter', en: 'the mother', ar: 'الأم' }, emoji: '👩‍👧‍👦' } },
            { type: 'sentence', item: { text: 'ⲡ̀ⲓⲱⲧ ⲛⲉⲙ ⲧ̀ⲙⲁⲁⲩ', translit: 'pi-iot nem ti-maav', meaning: { de: 'Der Vater und die Mutter', en: 'The father and the mother', ar: 'الأب والأم' } } }
        ]
    },
     'l4-2': {
        id: 'l4-2', order: 3, moduleId: 'm3', title: { de: 'Bestimmter Artikel vor Vokalen', en: 'Definite Article Before Vowels', ar: 'أداة التعريف قبل حروف العلة' }, prerequisites: ['l4-1'], quizId: 'q4-2',
        slides: [
            { type: 'grammar', title: { de: 'Artikelvarianten', en: 'Article Variations', ar: 'تنوعات أداة التعريف' }, rule: { de: 'Vor Substantiven, die mit einem Vokal beginnen, ändern sich die Artikel: ⲡ̀ wird zu ⲡ-, ⲧ̀ wird zu ⲑ-, und ⲛⲓ wird zu ⲛⲓ-.', en: 'Before nouns starting with a vowel, the articles change: ⲡ̀ becomes ⲡ-, ⲧ̀ becomes ⲑ-, and ⲛⲓ becomes ⲛⲓ-.', ar: 'قبل الأسماء التي تبدأ بحرف متحرك، تتغير الأدوات: ⲡ̀ تصبح ⲡ-، ⲧ̀ تصبح ⲑ-، و ⲛⲓ تصبح ⲛⲓ-.' }, examples: [{ coptic: 'ⲡ̀ⲁⲅⲅⲉⲗⲟⲥ', translit: 'p-angelos', meaning: { de: 'der Engel', en: 'the angel', ar: 'الملاك' } }, { coptic: 'ⲑ̀ⲁⲅⲁⲡⲏ', translit: 'th-agape', meaning: { de: 'die Liebe', en: 'the love', ar: 'المحبة' } }, { coptic: 'ⲛⲓ̀ⲁ̀ⲅⲅⲉⲗⲟⲥ', translit: 'ni-angelos', meaning: { de: 'die Engel', en: 'the angels', ar: 'الملائكة' } }] },
        ]
    },
    // Module 4
    'l5-1': {
        id: 'l5-1', order: 1, moduleId: 'm4', title: { de: 'Verben: Präsens I', en: 'Verbs: Present Tense I', ar: 'الأفعال: المضارع الأول' }, prerequisites: ['l3-4'], quizId: 'q5-1',
        slides: [
            { type: 'grammar', title: { de: 'Präsenskonjugation', en: 'Present Tense Conjugation', ar: 'تصريف المضارع' }, rule: { de: 'Das Präsens wird mit einem Präfix gebildet. Hier sind die Singularformen:', en: 'The present tense is formed with a prefix. Here are the singular forms:', ar: 'يتم تكوين زمن المضارع ببادئة. إليك صيغ المفرد:' }, examples: [
                { coptic: 'ϯⲥⲱⲧⲉⲙ', translit: 'ti-sotem', meaning: { de: 'ich höre', en: 'I hear', ar: 'أنا أسمع' } }, 
                { coptic: 'ⲕⲥⲱⲧⲉⲙ', translit: 'k-sotem', meaning: { de: 'du (m.) hörst', en: 'you (m.) hear', ar: 'أنت تسمع' } },
                { coptic: 'ⲧⲉⲥⲱⲧⲉⲙ', translit: 'te-sotem', meaning: { de: 'du (f.) hörst', en: 'you (f.) hear', ar: 'أنتِ تسمعين' } },
                { coptic: 'ϥⲥⲱⲧⲉⲙ', translit: 'f-sotem', meaning: { de: 'er hört', en: 'he hears', ar: 'هو يسمع' } },
                { coptic: 'ⲥⲥⲱⲧⲉⲙ', translit: 's-sotem', meaning: { de: 'sie hört', en: 'she hears', ar: 'هي تسمع' } }
             ] },
             { type: 'grammar', title: { de: 'Präsenskonjugation (Plural)', en: 'Present Tense Conjugation (Plural)', ar: 'تصريف المضارع (الجمع)' }, rule: { de: 'Hier sind die Pluralformen:', en: 'Here are the plural forms:', ar: 'إليك صيغ الجمع:' }, examples: [
                { coptic: 'ⲧⲉⲛⲥⲱⲧⲉⲙ', translit: 'ten-sotem', meaning: { de: 'wir hören', en: 'we hear', ar: 'نحن نسمع' } }, 
                { coptic: 'ⲧⲉⲧⲉⲛⲥⲱⲧⲉⲙ', translit: 'teten-sotem', meaning: { de: 'ihr hört', en: 'you (pl.) hear', ar: 'أنتم تسمعون' } },
                { coptic: 'ⲥⲉⲥⲱⲧⲉⲙ', translit: 'se-sotem', meaning: { de: 'sie hören', en: 'they hear', ar: 'هم يسمعون' } }
             ] },
            { type: 'sentence', item: { text: 'ϥⲛⲁⲩ ⲉ̀ⲡ̀ⲣⲱⲙⲓ', translit: 'f-nau e-pi-romi', meaning: { de: 'Er sieht den Mann', en: 'He sees the man', ar: 'هو يرى الرجل' } } },
        ]
    },
    'l5-2': {
        id: 'l5-2', order: 2, moduleId: 'm4', title: { de: 'Verben: Perfekt (Vergangenheit)', en: 'Verbs: Perfect (Past Tense)', ar: 'الأفعال: الماضي التام' }, prerequisites: ['l5-1'], quizId: 'q5-2',
        slides: [
            { type: 'grammar', title: { de: 'Perfekt (Aorist)', en: 'Perfect Tense (Aorist)', ar: 'زمن الماضي التام' }, rule: { de: 'Die einfache Vergangenheit wird mit dem Präfix ⲁ- (a-) vor dem Personalpronomen-Stamm und dem Verb gebildet.', en: 'The simple past tense is formed with the prefix ⲁ- (a-) before the personal pronoun stem and the verb.', ar: 'يُصاغ زمن الماضي البسيط بإضافة البادئة ⲁ- (أ-) قبل جذر الضمير الشخصي والفعل.' }, examples: [
                { coptic: 'ⲁⲓⲥⲱⲧⲉⲙ', translit: 'a-i-sotem', meaning: { de: 'ich hörte', en: 'I heard', ar: 'أنا سمعت' } },
                { coptic: 'ⲁⲕⲥⲱⲧⲉⲙ', translit: 'a-k-sotem', meaning: { de: 'du (m.) hörtest', en: 'you (m.) heard', ar: 'أنت سمعت' } },
                { coptic: 'ⲁⲣⲉⲥⲱⲧⲉⲙ', translit: 'a-re-sotem', meaning: { de: 'du (f.) hörtest', en: 'you (f.) heard', ar: 'أنتِ سمعتِ' } },
                { coptic: 'ⲁϥⲥⲱⲧⲉⲙ', translit: 'a-f-sotem', meaning: { de: 'er hörte', en: 'he heard', ar: 'هو سمع' } },
                { coptic: 'ⲁⲥⲥⲱⲧⲉⲙ', translit: 'a-s-sotem', meaning: { de: 'sie hörte', en: 'she heard', ar: 'هي سمعت' } },
                { coptic: 'ⲁⲛⲥⲱⲧⲉⲙ', translit: 'a-n-sotem', meaning: { de: 'wir hörten', en: 'we heard', ar: 'نحن سمعنا' } },
                { coptic: 'ⲁⲣⲉⲧⲉⲛⲥⲱⲧⲉⲙ', translit: 'a-reten-sotem', meaning: { de: 'ihr hörtet', en: 'you (pl.) heard', ar: 'أنتم سمعتم' } },
                { coptic: 'ⲁⲩⲥⲱⲧⲉⲙ', translit: 'a-u-sotem', meaning: { de: 'sie hörten', en: 'they heard', ar: 'هم سمعوا' } }
            ]
        }]
    },
    'l5-3': {
        id: 'l5-3', order: 3, moduleId: 'm4', title: { de: 'Verben: Futur', en: 'Verbs: Future Tense', ar: 'الأفعال: المستقبل' }, prerequisites: ['l5-2'], quizId: 'q5-3',
        slides: [
            { type: 'grammar', title: { de: 'Futur I', en: 'Future Tense I', ar: 'زمن المستقبل' }, rule: { de: 'Die Zukunft wird mit dem Präfix ⲉ- (e-) vor dem Personalpronomen-Stamm und dem Verb gebildet. Der Stamm für "ich" ist -ⲓ.', en: 'The future tense is formed with the prefix ⲉ- (e-) before the personal pronoun stem and the verb. The stem for "I" is -ⲓ.', ar: 'يُصاغ زمن المستقبل بإضافة البادئة ⲉ- (إ-) قبل جذر الضمير الشخصي والفعل. جذر "أنا" هو -ⲓ.' }, examples: [
                { coptic: 'ⲉⲓⲉⲥⲱⲧⲉⲙ', translit: 'e-ie-sotem', meaning: { de: 'ich werde hören', en: 'I will hear', ar: 'أنا سأسمع' } },
                { coptic: 'ⲉⲕⲉⲥⲱⲧⲉⲙ', translit: 'e-k-e-sotem', meaning: { de: 'du (m.) wirst hören', en: 'you (m.) will hear', ar: 'أنت ستسمع' } },
                { coptic: 'ⲉⲣⲉⲥⲱⲧⲉⲙ', translit: 'e-re-sotem', meaning: { de: 'du (f.) wirst hören', en: 'you (f.) will hear', ar: 'أنتِ ستسمعين' } },
                { coptic: 'ⲉϥⲉⲥⲱⲧⲉⲙ', translit: 'e-f-e-sotem', meaning: { de: 'er wird hören', en: 'he will hear', ar: 'هو سيسمع' } },
                { coptic: 'ⲉⲥⲉⲥⲱⲧⲉⲙ', translit: 'e-s-e-sotem', meaning: { de: 'sie wird hören', en: 'she will hear', ar: 'هي ستسمع' } },
                { coptic: 'ⲉⲛⲉⲥⲱⲧⲉⲙ', translit: 'e-n-e-sotem', meaning: { de: 'wir werden hören', en: 'we will hear', ar: 'نحن سنسمع' } },
                { coptic: 'ⲉⲣⲉⲧⲉⲛⲉⲥⲱⲧⲉⲙ', translit: 'e-reten-e-sotem', meaning: { de: 'ihr werdet hören', en: 'you (pl.) will hear', ar: 'أنتم ستسمعون' } },
                { coptic: 'ⲉⲩⲉⲥⲱⲧⲉⲙ', translit: 'e-u-e-sotem', meaning: { de: 'sie werden hören', en: 'they will hear', ar: 'هم سيسمعون' } }
            ]
        }]
    },
    // Module 5
    'l6-1': {
        id: 'l6-1', order: 1, moduleId: 'm5', title: { de: 'Personalpronomen', en: 'Personal Pronouns', ar: 'الضمائر الشخصية' }, prerequisites: ['l5-3'], quizId: 'q6-1',
        slides: [
            { type: 'grammar', title: { de: 'Unabhängige Personalpronomen', en: 'Independent Personal Pronouns', ar: 'الضمائر الشخصية المنفصلة' }, rule: { de: 'Diese Pronomen stehen für sich und werden oft am Satzanfang zur Betonung verwendet.', en: 'These pronouns stand on their own and are often used at the beginning of a sentence for emphasis.', ar: 'هذه الضمائر قائمة بذاتها وغالبًا ما تستخدم في بداية الجملة للتأكيد.' }, examples: [
                { coptic: 'ⲁⲛⲟⲕ', translit: 'anok', meaning: { de: 'ich', en: 'I', ar: 'أنا' } }, 
                { coptic: 'ⲛ̀ⲑⲟⲕ', translit: 'entok', meaning: { de: 'du (m.)', en: 'you (m.)', ar: 'أنت' } }, 
                { coptic: 'ⲛ̀ⲑⲟ', translit: 'ento', meaning: { de: 'du (f.)', en: 'you (f.)', ar: 'أنتِ' } },
                { coptic: 'ⲛ̀ⲑⲟϥ', translit: 'entof', meaning: { de: 'er', en: 'he', ar: 'هو' } },
                { coptic: 'ⲛ̀ⲑⲟⲥ', translit: 'entos', meaning: { de: 'sie (sg.)', en: 'she', ar: 'هي' } },
                { coptic: 'ⲁⲛⲟⲛ', translit: 'anon', meaning: { de: 'wir', en: 'we', ar: 'نحن' } },
                { coptic: 'ⲛ̀ⲑⲱⲧⲉⲛ', translit: 'entoten', meaning: { de: 'ihr', en: 'you (pl.)', ar: 'أنتم' } },
                { coptic: 'ⲛ̀ⲑⲱⲟⲩ', translit: 'ento-ou', meaning: { de: 'sie (pl.)', en: 'they', ar: 'هم' } }
            ] },
             { type: 'sentence', item: { text: 'ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲁⲓⲱⲧ', translit: 'entof pe pa-iot', meaning: { de: 'Er ist mein Vater', en: 'He is my father', ar: 'هو أبي' } } }
        ]
    },
    'l6-2': {
        id: 'l6-2', order: 2, moduleId: 'm5', title: { de: 'Possessivartikel', en: 'Possessive Articles', ar: 'أدوات الملكية' }, prerequisites: ['l6-1'], quizId: 'q6-2',
        slides: [
            { type: 'grammar', title: { de: '"Mein"', en: '"My"', ar: '"خاصتي"' }, rule: { de: 'Um "mein" auszudrücken, verwende ⲡⲁ- (pa-) für maskuline Substantive, ⲧⲁ- (ta-) für feminine und ⲛⲁ- (na-) für plurale.', en: 'To express "my", use ⲡⲁ- (pa-) for masculine nouns, ⲧⲁ- (ta-) for feminine, and ⲛⲁ- (na-) for plural.', ar: 'للتعبير عن الملكية "لي"، استخدم ⲡⲁ- (با-) للأسماء المذكرة، ⲧⲁ- (تا-) للمؤنثة، و ⲛⲁ- (نا-) للجمع.' }, examples: [
                { coptic: 'ⲡⲁⲓⲱⲧ', translit: 'pa-iot', meaning: { de: 'mein Vater', en: 'my father', ar: 'أبي' } }, 
                { coptic: 'ⲧⲁⲙⲁⲁⲩ', translit: 'ta-maav', meaning: { de: 'meine Mutter', en: 'my mother', ar: 'أمي' } },
                { coptic: 'ⲛⲁⲥ̀ⲛⲏⲟⲩ', translit: 'na-sneo-u', meaning: { de: 'meine Brüder', en: 'my brothers', ar: 'إخوتي' } }
            ] },
             { type: 'grammar', title: { de: '"Dein" (m.)', en: '"Your" (m. sg.)', ar: '"خاصتك"' }, rule: { de: 'Um "dein" (zu einem Mann) auszudrücken, verwende ⲡⲉⲕ- (pek-), ⲧⲉⲕ- (tek-), ⲛⲉⲕ- (nek-).', en: 'To express "your" (to a male), use ⲡⲉⲕ- (pek-), ⲧⲉⲕ- (tek-), ⲛⲉⲕ- (nek-).', ar: 'للتعبير عن الملكية "لك" (للمذكر)، استخدم ⲡⲉⲕ- (بيك-)، ⲧⲉⲕ- (تيك-)، و ⲛⲉⲕ- (نيك-).' }, examples: [
                { coptic: 'ⲡⲉⲕⲓⲱⲧ', translit: 'pek-iot', meaning: { de: 'dein Vater', en: 'your father', ar: 'أبوك' } }, 
                { coptic: 'ⲧⲉⲕⲙⲁⲁⲩ', translit: 'tek-maav', meaning: { de: 'deine Mutter', en: 'your mother', ar: 'أمك' } },
            ] }
        ]
    },
     'l6-3': {
        id: 'l6-3', order: 3, moduleId: 'm5', title: { de: 'Demonstrativpronomen', en: 'Demonstrative Pronouns', ar: 'ضمائر الإشارة' }, prerequisites: ['l6-2'], quizId: 'q6-3',
        slides: [
            { type: 'grammar', title: { de: '"Dieser/Diese/Dieses"', en: '"This/These"', ar: '"هذا/هذه/هؤلاء"' }, rule: { de: 'Um "dies" auszudrücken, verwende ⲡⲁⲓ (pai) für m., ⲧⲁⲓ (tai) für f., und ⲛⲁⲓ (nai) für pl.', en: 'To express "this/these", use ⲡⲁⲓ (pai) for m., ⲧⲁⲓ (tai) for f., and ⲛⲁⲓ (nai) for pl.', ar: 'للتعبير عن "هذا/هذه/هؤلاء"، استخدم ⲡⲁⲓ (باي) للمذكر، ⲧⲁⲓ (تاي) للمؤنث، و ⲛⲁⲓ (ناي) للجمع.' }, examples: [
                { coptic: 'ⲡⲁⲓ ⲡⲉ ⲡ̀ⲣⲱⲙⲓ', translit: 'pai pe pi-romi', meaning: { de: 'Dies ist der Mann', en: 'This is the man', ar: 'هذا هو الرجل' } }, 
                { coptic: 'ⲧⲁⲓ ⲧⲉ ⲧ̀ⲥ̀ϩⲓⲙⲓ', translit: 'tai te ti-shimi', meaning: { de: 'Dies ist die Frau', en: 'This is the woman', ar: 'هذه هي المرأة' } },
                { coptic: 'ⲛⲁⲓ ⲛⲉ ⲛⲓ̀ⲁ̀ⲅⲅⲉⲗⲟⲥ', translit: 'nai ne ni-angelos', meaning: { de: 'Dies sind die Engel', en: 'These are the angels', ar: 'هؤلاء هم الملائكة' } }
            ] },
        ]
    },
    // Module 6
    'l7-1': {
        id: 'l7-1', order: 1, moduleId: 'm6', title: { de: 'Adjektive', en: 'Adjectives', ar: 'الصفات' }, prerequisites: ['l6-3'], quizId: 'q7-1',
        slides: [
            { type: 'grammar', title: { de: 'Verwendung von Adjektiven', en: 'Using Adjectives', ar: 'استخدام الصفات' }, rule: { de: 'Adjektive folgen im Koptischen oft dem Substantiv, das sie beschreiben. Sie können durch das Wort "ⲛ̀" (en) mit dem Substantiv verbunden werden.', en: 'In Coptic, adjectives often follow the noun they describe. They can be linked to the noun with the word "ⲛ̀" (en).', ar: 'في القبطية، غالبًا ما تتبع الصفات الاسم الذي تصفه. يمكن ربطها بالاسم بكلمة "ⲛ̀" (إن).' }, examples: [{ coptic: 'ⲡ̀ⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ', translit: 'pi-romi en-agathos', meaning: { de: 'der gute Mann', en: 'the good man', ar: 'الرجل الصالح' } }] },
            { type: 'vocab', item: { coptic: 'ⲛⲓϣϯ', translit: 'nishti', meaning: { de: 'groß', en: 'big', ar: 'كبير' }, emoji: '🐘' } },
            { type: 'sentence', item: { text: 'ⲡ̀ⲏⲓ ⲛ̀ⲛⲓϣϯ', translit: 'pi-ee en-nishti', meaning: { de: 'das große Haus', en: 'the big house', ar: 'البيت الكبير' } } }
        ]
    },
    // Module 7
    'l8-1': {
        id: 'l8-1', order: 1, moduleId: 'm7', title: { de: 'Präpositionen', en: 'Prepositions', ar: 'حروف الجر' }, prerequisites: ['l7-1'], quizId: 'q8-1',
        slides: [
            { type: 'grammar', title: { de: 'Einfache Präpositionen', en: 'Simple Prepositions', ar: 'حروف الجر البسيطة' }, rule: { de: 'Präpositionen stehen vor dem Substantiv und leiten eine Präpositionalphrase ein.', en: 'Prepositions come before the noun and introduce a prepositional phrase.', ar: 'تأتي حروف الجر قبل الاسم وتقدم عبارة جرية.' }, examples: [{ coptic: 'ϧⲉⲛ ⲡ̀ⲏⲓ', translit: 'khen pi-ee', meaning: { de: 'im Haus', en: 'in the house', ar: 'في البيت' } }, { coptic: 'ⲛⲉⲙ ⲡ̀ⲓⲱⲧ', translit: 'nem pi-iot', meaning: { de: 'mit dem Vater', en: 'with the father', ar: 'مع الأب' } }] },
            { type: 'vocab', item: { coptic: 'ϧⲉⲛ', translit: 'khen', meaning: { de: 'in', en: 'in', ar: 'في' }, emoji: '📥' } },
            { type: 'sentence', item: { text: 'ⲁⲛⲟⲕ ϧⲉⲛ ⲧ̀ⲉⲕⲕⲗⲏⲥⲓⲁ', translit: 'anok khen ti-ekklesia', meaning: { de: 'Ich bin in der Kirche', en: 'I am in the church', ar: 'أنا في الكنيسة' } } }
        ]
    },
    'l8-2': {
        id: 'l8-2', order: 2, moduleId: 'm7', title: { de: 'Weitere Präpositionen', en: 'More Prepositions', ar: 'المزيد من حروف الجر' }, prerequisites: ['l8-1'], quizId: 'q8-2',
        slides: [
            { type: 'grammar', title: { de: 'Häufige Präpositionen', en: 'Common Prepositions', ar: 'حروف الجر الشائعة' }, rule: { de: 'Hier sind einige weitere nützliche Präpositionen.', en: 'Here are some more useful prepositions.', ar: 'إليك بعض حروف الجر المفيدة الأخرى.' }, examples: [
                { coptic: 'ⲉ̀', translit: 'e', meaning: { de: 'zu, nach', en: 'to', ar: 'إلى' } }, 
                { coptic: 'ⲉ̀ⲃⲟⲗ', translit: 'evol', meaning: { de: 'aus, von', en: 'from, out of', ar: 'من' } },
                { coptic: 'ϩⲓϫⲉⲛ', translit: 'hijen', meaning: { de: 'auf', en: 'on, upon', ar: 'على' } },
                { coptic: 'ϣⲁ', translit: 'sha', meaning: { de: 'bis', en: 'until', ar: 'حتى' } }
            ] },
            { type: 'sentence', item: { text: 'ϯⲛⲁ ⲉ̀ ⲧ̀ⲉⲕⲕⲗⲏⲥⲓⲁ', translit: 'ti-na e ti-ekklesia', meaning: { de: 'Ich gehe zur Kirche', en: 'I go to the church', ar: 'أنا أذهب إلى الكنيسة' } } }
        ]
    },
    // Module 8
    'l9-1': {
        id: 'l9-1', order: 1, moduleId: 'm8', title: { de: 'Fragesätze', en: 'Questions', ar: 'الجمل الاستفهامية' }, prerequisites: ['l8-2'], quizId: 'q9-1',
        slides: [
            { type: 'grammar', title: { de: 'Fragen stellen', en: 'Asking Questions', ar: 'طرح الأسئلة' }, rule: { de: 'Fragen werden oft mit Fragewörtern wie "ⲁϣ" (was?) oder "ⲛⲓⲙ" (wer?) am Anfang des Satzes gebildet.', en: 'Questions are often formed with interrogative words like "ⲁϣ" (what?) or "ⲛⲓⲙ" (who?) at the beginning of the sentence.', ar: 'غالبًا ما يتم تكوين الأسئلة بكلمات استفهام مثل "ⲁϣ" (ماذا؟) أو "ⲛⲓⲙ" (من؟) في بداية الجملة.' }, examples: [{ coptic: 'ⲁϣ ⲡⲉ ⲡⲁⲓ', translit: 'ash pe pai', meaning: { de: 'Was ist das?', en: 'What is this?', ar: 'ما هذا؟' } }, { coptic: 'ⲛⲓⲙ ⲡⲉ ⲡ̀ⲣⲱⲙⲓ', translit: 'nim pe pi-romi', meaning: { de: 'Wer ist der Mann?', en: 'Who is the man?', ar: 'من هو الرجل؟' } }] },
            { type: 'sentence', item: { text: 'ⲁϣ ⲡⲉ ⲡⲉⲕⲣⲁⲛ', translit: 'ash pe pek-ran', meaning: { de: 'Wie ist dein Name?', en: 'What is your name?', ar: 'ما اسمك؟' } } }
        ]
    },
    'l9-2': {
        id: 'l9-2', order: 2, moduleId: 'm8', title: { de: 'Konjunktionen', en: 'Conjunctions', ar: 'أدوات الربط' }, prerequisites: ['l9-1'], quizId: 'q9-2',
        slides: [
            { type: 'grammar', title: { de: 'Sätze verbinden', en: 'Connecting Sentences', ar: 'ربط الجمل' }, rule: { de: 'Konjunktionen verbinden Wörter, Sätze oder Satzteile.', en: 'Conjunctions connect words, phrases, or clauses.', ar: 'أدوات الربط تربط الكلمات أو العبارات أو الجمل.' }, examples: [
                { coptic: 'ⲛⲉⲙ', translit: 'nem', meaning: { de: 'und', en: 'and', ar: 'و' } }, 
                { coptic: 'ⲁⲗⲗⲁ', translit: 'alla', meaning: { de: 'aber', en: 'but', ar: 'لكن' } },
                { coptic: 'ϫⲉ', translit: 'je', meaning: { de: 'dass, weil', en: 'that, because', ar: 'أن، لأن' } },
                { coptic: 'ⲏ', translit: 'e', meaning: { de: 'oder', en: 'or', ar: 'أو' } }
            ] },
            { type: 'sentence', item: { text: 'ⲡ̀ⲓⲱⲧ ⲛⲉⲙ ⲡ̀ϣⲏⲣⲓ', translit: 'pi-iot nem pi-sheri', meaning: { de: 'der Vater und der Sohn', en: 'the father and the son', ar: 'الآب والابن' } } },
            { type: 'sentence', item: { text: 'ϯⲥⲱⲧⲉⲙ ϫⲉ ⲛ̀ⲑⲟⲕ ⲭⲱ ⲙ̀ⲙⲟⲥ', translit: 'ti-sotem je enthok kho emmos', meaning: { de: 'Ich höre, dass du sprichst', en: 'I hear that you are speaking', ar: 'أسمع أنك تتكلم' } } }
        ]
    },
    // Module 9
    'l10-1': {
        id: 'l10-1', order: 1, moduleId: 'm9', title: { de: 'Konversation I', en: 'Conversation I', ar: 'الوحدة 9: المحادثة 1' }, prerequisites: ['l9-2'], quizId: 'q10-1',
        slides: [
            { type: 'conversation', title: { de: 'Einfache Begrüßung', en: 'Simple Greeting', ar: 'تحية بسيطة' }, participants: ['Youssef', 'Maria'], lines: [{ speaker: 'Youssef', coptic: 'ⲛⲟϥⲣⲓ', translation: { de: 'Hallo!', en: 'Hello!', ar: 'مرحباً!' } }, { speaker: 'Maria', coptic: 'ⲛⲟϥⲣⲓ', translation: { de: 'Hallo!', en: 'Hello!', ar: 'مرحباً!' } }, { speaker: 'Youssef', coptic: 'ⲁϣ ⲡⲉ ⲡⲉⲕⲣⲁⲛ', translation: { de: 'Wie ist dein Name?', en: 'What is your name?', ar: 'ما اسمك؟' } }, { speaker: 'Maria', coptic: 'ⲡⲁⲣⲁⲛ ⲡⲉ ⲙⲁⲣⲓⲁ', translation: { de: 'Mein Name ist Maria', en: 'My name is Maria', ar: 'اسمي ماريا' } }] },
            { type: 'conversation', title: { de: 'Verabschiedung', en: 'Farewell', ar: 'وداع' }, participants: ['Person A', 'Person B'], lines: [{ speaker: 'Person A', coptic: 'ⲟⲩϫⲁⲓ ϧⲉⲛ Ⲡ̀ϭⲟⲓⲥ', translation: { de: 'Geh in Frieden!', en: 'Go in peace!', ar: 'اذهب بسلام!' } }, { speaker: 'Person B', coptic: 'ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ', translation: { de: 'Und mit deinem Geiste.', en: 'And with your spirit.', ar: 'ومع روحك أيضًا.' } }] }
        ]
    },
    // Module 10
    'l11-1': {
        id: 'l11-1', order: 1, moduleId: 'm10', title: { de: 'Wortschatz: In der Kirche', en: 'Vocabulary: In the Church', ar: 'مفردات: في الكنيسة' }, prerequisites: ['l10-1'], quizId: 'q11-1',
        slides: [
            { type: 'vocab', item: { coptic: 'ⲉⲕⲕⲗⲏⲥⲓⲁ', translit: 'ekklesia', meaning: { de: 'Kirche', en: 'Church', ar: 'كنيسة' }, emoji: '⛪' } },
            { type: 'vocab', item: { coptic: 'ⲟⲩⲏⲃ', translit: 'oueeb', meaning: { de: 'Priester', en: 'Priest', ar: 'كاهن' }, emoji: '✝️' } },
            { type: 'vocab', item: { coptic: 'ⲇⲓⲁⲕⲱⲛ', translit: 'diakon', meaning: { de: 'Diakon', en: 'Deacon', ar: 'شماس' }, emoji: '👨‍ βοηθός' } },
            { type: 'vocab', item: { coptic: 'ⲯⲁⲗⲙⲟⲥ', translit: 'psalmos', meaning: { de: 'Psalm', en: 'Psalm', ar: 'مزمور' }, emoji: '🎶' } },
            { type: 'vocab', item: { coptic: 'ⲉⲩⲭⲏ', translit: 'eukhe', meaning: { de: 'Gebet', en: 'Prayer', ar: 'صلاة' }, emoji: '🙏' } },
            { type: 'vocab', item: { coptic: 'ⲑⲩⲥⲓⲁⲥⲧⲏⲣⲓⲟⲛ', translit: 'thysiasterion', meaning: { de: 'Altar', en: 'Altar', ar: 'مذبح' }, emoji: '🕊️' } },
            { type: 'vocab', item: { coptic: 'ⲥ̀ⲧⲟⲓⲛⲟⲩϥⲓ', translit: 'stoinoufi', meaning: { de: 'Weihrauch', en: 'Incense', ar: 'بخور' }, emoji: '💨' } },
            { type: 'sentence', item: { text: 'ϯϣ̀ⲗⲏⲗ ϧⲉⲛ ⲧ̀ⲉⲕⲕⲗⲏⲥⲓⲁ', translit: 'ti-shlel khen ti-ekklesia', meaning: { de: 'Ich bete in der Kirche', en: 'I pray in the church', ar: 'أصلي في الكنيسة' } } },
        ]
    },
    // Module 11
    'l12-1': {
        id: 'l12-1', order: 1, moduleId: 'm11', title: { de: 'Wortschatz: Familie', en: 'Vocabulary: Family', ar: 'مفردات: العائلة' }, prerequisites: ['l11-1'], quizId: 'q12-1',
        slides: [
            { type: 'vocab', item: { coptic: 'ⲓⲱⲧ', translit: 'iot', meaning: { de: 'Vater', en: 'Father', ar: 'أب' }, emoji: '👨' } },
            { type: 'vocab', item: { coptic: 'ⲙⲁⲁⲩ', translit: 'maav', meaning: { de: 'Mutter', en: 'Mother', ar: 'أم' }, emoji: '👩' } },
            { type: 'vocab', item: { coptic: 'ⲥⲟⲛ', translit: 'son', meaning: { de: 'Bruder', en: 'Brother', ar: 'أخ' }, emoji: '👦' } },
            { type: 'vocab', item: { coptic: 'ⲥⲱⲛⲓ', translit: 'soni', meaning: { de: 'Schwester', en: 'Sister', ar: 'أخت' }, emoji: '👧' } },
            { type: 'vocab', item: { coptic: 'ϣⲏⲣⲓ', translit: 'sheri', meaning: { de: 'Sohn', en: 'Son', ar: 'ابن' }, emoji: '👶' } },
            { type: 'vocab', item: { coptic: 'ϣⲉⲉⲣⲓ', translit: 'she-eri', meaning: { de: 'Tochter', en: 'Daughter', ar: 'ابنة' }, emoji: '👶‍♀️' } },
            { type: 'vocab', item: { coptic: 'ϩⲁⲓ', translit: 'hai', meaning: { de: 'Ehemann', en: 'Husband', ar: 'زوج' }, emoji: '🤵' } },
            { type: 'vocab', item: { coptic: 'ϩⲓⲙⲓ', translit: 'himi', meaning: { de: 'Ehefrau', en: 'Wife', ar: 'زوجة' }, emoji: '👰' } },
            { type: 'sentence', item: { text: 'ⲡⲁⲓⲱⲧ ⲛⲉⲙ ⲧⲁⲙⲁⲁⲩ', translit: 'pa-iot nem ta-maav', meaning: { de: 'mein Vater und meine Mutter', en: 'my father and my mother', ar: 'أبي وأمي' } } },
        ]
    },
    // Module 12
    'l13-1': {
        id: 'l13-1', order: 1, moduleId: 'm12', title: { de: 'Bibelvers: Johannes 3:16', en: 'Bible Verse: John 3:16', ar: 'آية: يوحنا 3: 16' }, prerequisites: ['l12-1'], quizId: 'q13-1',
        slides: [
            { type: 'reading', title: { de: 'Johannes 3:16', en: 'John 3:16', ar: 'يوحنا 3: 16' }, copticText: ['ⲡⲁⲓⲣⲏϯ ⲅⲁⲣ ⲁ̀ⲫⲛⲟⲩϯ ⲙⲉⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ', 'ϩⲱⲥⲧⲉ ⲡⲉϥϣⲏⲣⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ ⲁϥⲧⲏⲓϥ', 'ϩⲓⲛⲁ ⲛ̀ⲧⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲑⲛⲁϩϯ ⲉ̀ⲣⲟϥ', 'ⲛ̀ⲧⲉϥϣ̀ⲧⲉⲙⲧⲁⲕⲟ ⲁⲗⲗⲁ ⲛ̀ⲧⲉϥϭⲓ ⲛ̀ⲟⲩⲱⲛϧ ⲛ̀ⲉ̀ⲛⲉϩ'], translation: [{ de: 'Denn so sehr hat Gott die Welt geliebt,', en: 'For God so loved the world,', ar: 'لأنه هكذا أحب الله العالم' }, { de: 'dass er seinen eingeborenen Sohn gab,', en: 'that he gave his only begotten Son,', ar: 'حتى بذل ابنه الوحيد' }, { de: 'damit jeder, der an ihn glaubt,', en: 'that whoever believes in him', ar: 'لكي لا يهلك كل من يؤمن به' }, { de: 'nicht verloren geht, sondern ewiges Leben hat.', en: 'should not perish but have eternal life.', ar: 'بل تكون له الحياة الأبدية' }] }
        ]
    },
    // Module 13
    'l14-1': {
        id: 'l14-1', order: 1, moduleId: 'm13', title: { de: 'Konversation: Liturgie', en: 'Conversation: Liturgy', ar: 'محادثة: القداس' }, prerequisites: ['l13-1'], quizId: 'q14-1',
        slides: [
            { type: 'conversation', title: { de: 'Der Friedensgruß', en: 'The Kiss of Peace', ar: 'قبلة السلام' }, participants: ['Priester', 'Gemeinde'], lines: [{ speaker: 'Priester', coptic: 'ⲧ̀ϩⲓⲣⲏⲛⲏ ⲙ̀ⲡⲁⲛⲧⲱⲛ', translation: { de: 'Friede sei mit euch allen.', en: 'Peace be with you all.', ar: 'السلام لجميعكم.' } }, { speaker: 'Gemeinde', coptic: 'ⲕⲉ ⲧⲱ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ', translation: { de: 'Und mit deinem Geiste.', en: 'And with your spirit.', ar: 'ومع روحك أيضًا.' } }] }
        ]
    },
    // Module 14
    'l15-1': {
        id: 'l15-1', order: 1, moduleId: 'm14', title: { de: 'Das Vaterunser', en: 'The Lord\'s Prayer', ar: 'الصلاة الربانية' }, prerequisites: ['l14-1'], quizId: 'q15-1',
        slides: [
            { type: 'reading', title: { de: 'Das Vaterunser', en: 'The Lord\'s Prayer', ar: 'الصلاة الربانية' }, copticText: ['Πενιωτ εⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ', 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ', 'ⲙⲁⲣⲉⲥⲓ̀ ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ', 'ⲡⲉⲧⲉϩⲛⲁⲕ ⲙⲁⲣⲉϥϣⲱⲡⲓ', 'ⲙ̀ⲫ̀ⲣⲏϯ ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ'], translation: [{ de: 'Unser Vater im Himmel,', en: 'Our Father in heaven,', ar: 'أبانا الذي في السماوات' }, { de: 'geheiligt werde dein Name.', en: 'hallowed be your name.', ar: 'ليتقدس اسمك' }, { de: 'Dein Reich komme.', en: 'Your kingdom come.', ar: 'ليأت ملكوتك' }, { de: 'Dein Wille geschehe,', en: 'Your will be done,', ar: 'لتكن مشيئتك' }, { de: 'wie im Himmel, so auf Erden.', en: 'on earth as it is in heaven.', ar: 'كما في السماء كذلك على الأرض' }] }
        ]
    },
    // Module 15
    'l16-1': {
        id: 'l16-1', order: 1, moduleId: 'm15', title: { de: 'Wortschatz: Farben', en: 'Vocabulary: Colors', ar: 'مفردات: الألوان' }, prerequisites: ['l12-1'], quizId: 'q16-1',
        slides: [
            { type: 'vocab', item: { coptic: 'ⲕⲁⲙⲉ', translit: 'kame', meaning: { de: 'schwarz', en: 'black', ar: 'أسود' }, emoji: '⚫' } },
            { type: 'vocab', item: { coptic: 'ⲟⲩⲟⲃϣ', translit: 'ouobsh', meaning: { de: 'weiß', en: 'white', ar: 'أبيض' }, emoji: '⚪' } },
            { type: 'vocab', item: { coptic: 'ⲕⲁϩⲣⲱ', translit: 'kahro', meaning: { de: 'rot', en: 'red', ar: 'أحمر' }, emoji: '🔴' } },
            { type: 'vocab', item: { coptic: 'ⲭⲗⲱⲣⲟⲥ', translit: 'chloros', meaning: { de: 'grün', en: 'green', ar: 'أخضر' }, emoji: '🟢' } },
            { type: 'vocab', item: { coptic: 'ⲓⲁⲕⲓⲛⲑⲓⲛⲟⲥ', translit: 'yakinthinos', meaning: { de: 'blau', en: 'blue', ar: 'أزرق' }, emoji: '🔵' } }
        ]
    },
    'l16-2': {
        id: 'l16-2', order: 2, moduleId: 'm15', title: { de: 'Wortschatz: Tiere', en: 'Vocabulary: Animals', ar: 'مفردات: الحيوانات' }, prerequisites: ['l16-1'], quizId: 'q16-2',
        slides: [
            { type: 'vocab', item: { coptic: 'ⲟⲩϩⲟⲣ', translit: 'ouhor', meaning: { de: 'Hund', en: 'dog', ar: 'كلب' }, emoji: '🐶' } },
            { type: 'vocab', item: { coptic: 'ϣⲁⲩ', translit: 'shau', meaning: { de: 'Katze', en: 'cat', ar: 'قطة' }, emoji: '🐱' } },
            { type: 'vocab', item: { coptic: 'ⲉϩⲥⲱ', translit: 'ehso', meaning: { de: 'Pferd', en: 'horse', ar: 'حصان' }, emoji: '🐴' } },
            { type: 'vocab', item: { coptic: 'ⲉⲥⲱⲟⲩ', translit: 'eso-ou', meaning: { de: 'Schaf', en: 'sheep', ar: 'خروف' }, emoji: '🐑' } },
            { type: 'vocab', item: { coptic: 'ϩⲁⲗⲁⲧ', translit: 'halat', meaning: { de: 'Vogel', en: 'bird', ar: 'طائر' }, emoji: '🐦' } }
        ]
    },
    // Module 16
    'l17-1': {
        id: 'l17-1', order: 1, moduleId: 'm16', title: { de: 'Wortschatz: Lebensmittel', en: 'Vocabulary: Food', ar: 'مفردات: الطعام' }, prerequisites: ['l16-2'], quizId: 'q17-1',
        slides: [
            { type: 'vocab', item: { coptic: 'ⲱⲓⲕ', translit: 'oik', meaning: { de: 'Brot', en: 'bread', ar: 'خبز' }, emoji: '🍞' } },
            { type: 'vocab', item: { coptic: 'ⲙⲱⲟⲩ', translit: 'mo-ou', meaning: { de: 'Wasser', en: 'water', ar: 'ماء' }, emoji: '💧' } },
            { type: 'vocab', item: { coptic: 'ⲏⲣⲡ', translit: 'erp', meaning: { de: 'Wein', en: 'wine', ar: 'خمر' }, emoji: '🍷' } },
            { type: 'vocab', item: { coptic: 'ⲛⲉϩ', translit: 'neh', meaning: { de: 'Öl', en: 'oil', ar: 'زيت' }, emoji: '🫒' } },
            { type: 'vocab', item: { coptic: 'ⲉⲃⲓⲱ', translit: 'ebio', meaning: { de: 'Honig', en: 'honey', ar: 'عسل' }, emoji: '🍯' } }
        ]
    }
};

export const QUIZZES: Record<string, Quiz> = {
    'q1-1': {
        id: 'q1-1', lessonId: 'l1-1', title: { de: 'Test: Alphabet 1', en: 'Quiz: Alphabet 1', ar: 'اختبار: الأبجدية 1' }, passScore: 80,
        questions: [
            { id: 'q1-1-1', type: 'multiple-choice', questionText: { de: 'Was ist der Zahlenwert von Ⲁ?', en: 'What is the numeric value of Ⲁ?', ar: 'ما هي القيمة العددية لـ Ⲁ؟' }, options: [{ de: '1', en: '1', ar: '١' }, { de: '2', en: '2', ar: '٢' }, { de: '3', en: '3', ar: '٣' }], correctAnswerIndex: 0 },
            { id: 'q1-1-2', type: 'multiple-choice', questionText: { de: 'Welcher Buchstabe ist das: ⲃ?', en: 'Which letter is this: ⲃ?', ar: 'ما هذا الحرف: ⲃ' }, options: [{ de: 'Alpha', en: 'Alpha', ar: 'ألفا' }, { de: 'Gamma', en: 'Gamma', ar: 'غما' }, { de: 'Vita', en: 'Vita', ar: 'ڤيتا' }], correctAnswerIndex: 2 },
            { id: 'q1-1-3', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "Liebe" ist ___.', en: 'The Coptic word for "Love" is ___.', ar: 'الكلمة القبطية لـ "محبة" هي ___.' }, correctAnswer: 'ⲁⲅⲁⲡⲏ' },
            { id: 'q1-1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet das Wort "ⲃⲁⲗ"?', en: 'What does the word "ⲃⲁⲗ" mean?', ar: 'ما معنى كلمة "ⲃⲁⲗ"؟' }, options: [{ de: 'Auge', en: 'Eye', ar: 'عين' }, { de: 'Ohr', en: 'Ear', ar: 'أذن' }, { de: 'Herz', en: 'Heart', ar: 'قلب' }], correctAnswerIndex: 0 },
            { id: 'q1-1-5', type: 'fill-in-the-blank', questionText: { de: 'Der Zahlenwert von Delta ist ___.', en: 'The numeric value of Delta is ___.', ar: 'القيمة العددية لدلتا هي ___.' }, correctAnswer: '4' },
            { id: 'q1-1-6', type: 'multiple-choice', questionText: { de: 'Wie lautet der Großbuchstabe von Gamma?', en: 'What is the uppercase letter for Gamma?', ar: 'ما هو الحرف الكبير لغما؟' }, options: [{ de: 'Γ', en: 'Γ', ar: 'Γ' }, { de: 'Β', en: 'Β', ar: 'Β' }, { de: 'Δ', en: 'Δ', ar: 'Δ' }], correctAnswerIndex: 0 },
            { id: 'q1-1-7', type: 'multiple-choice', questionText: { de: 'Die Aussprache von Alpha ist wie in "Vater". Richtig oder Falsch?', en: 'The pronunciation of Alpha is like in "father". True or False?', ar: 'نطق ألفا مثل "ا" في "بابا". صح أم خطأ؟' }, options: [{ de: 'Richtig', en: 'True', ar: 'صح' }, { de: 'Falsch', en: 'False', ar: 'خطأ' }], correctAnswerIndex: 0 },
            { id: 'q1-1-8', type: 'fill-in-the-blank', questionText: { de: 'In der Offenbarung sagt Jesus: "Ich bin das Alpha und das ___".', en: 'In Revelation, Jesus says: "I am the Alpha and the ___".', ar: 'في سفر الرؤيا يقول يسوع: "أنا الألف و ___".' }, correctAnswer: 'Omega' },
            { id: 'q1-1-9', type: 'multiple-choice', questionText: { de: 'Was bedeutet das Wort "ⲇⲁⲩⲓⲇ"?', en: 'What does the word "ⲇⲁⲩⲓⲇ" mean?', ar: 'ما معنى كلمة "ⲇⲁⲩⲓⲇ"؟' }, options: [{ de: 'König', en: 'King', ar: 'ملك' }, { de: 'Gott', en: 'God', ar: 'الله' }, { de: 'David', en: 'David', ar: 'داود' }], correctAnswerIndex: 2 },
            { id: 'q1-1-10', type: 'fill-in-the-blank', questionText: { de: 'Der Zahlenwert von Vita ist ___.', en: 'The numeric value of Vita is ___.', ar: 'القيمة العددية لڤيتا هي ___.' }, correctAnswer: '2' },
        ]
    },
    'q1-2': {
        id: 'q1-2', lessonId: 'l1-2', title: { de: 'Test: Alphabet 2', en: 'Quiz: Alphabet 2', ar: 'اختبار: الأبجدية 2' }, passScore: 80,
        questions: [
            { id: 'q1-2-1', type: 'multiple-choice', questionText: { de: 'Was ist der Zahlenwert von Ⲏ?', en: 'What is the numeric value of Ⲏ?', ar: 'ما هي القيمة العددية لـ Ⲏ؟' }, options: [{ de: '6', en: '6', ar: '٦' }, { de: '7', en: '7', ar: '٧' }, { de: '8', en: '8', ar: '٨' }], correctAnswerIndex: 2 },
            { id: 'q1-2-2', type: 'multiple-choice', questionText: { de: 'Welcher Buchstabe wird wie ein kurzes "e" ausgesprochen?', en: 'Which letter is pronounced like a short "e"?', ar: 'أي حرف يُنطق مثل "إ" قصيرة؟' }, options: [{ de: 'Ⲏ', en: 'Ⲏ', ar: 'Ⲏ' }, { de: 'Ⲉ', en: 'Ⲉ', ar: 'Ⲉ' }, { de: 'Ⲍ', en: 'Ⲍ', ar: 'Ⲍ' }], correctAnswerIndex: 1 },
            { id: 'q1-2-3', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "Haus" ist ___.', en: 'The Coptic word for "house" is ___.', ar: 'الكلمة القبطية لـ "بيت" هي ___.' }, correctAnswer: 'ⲏⲓ' },
            { id: 'q1-2-4', type: 'multiple-choice', questionText: { de: 'Welcher Buchstabe wird nur als Zahl verwendet?', en: 'Which letter is only used as a number?', ar: 'أي حرف يستخدم كرقم فقط؟' }, options: [{ de: 'Ⲍ', en: 'Ⲍ', ar: 'Ⲍ' }, { de: 'Ⲉ', en: 'Ⲉ', ar: 'Ⲉ' }, { de: 'Ⲋ', en: 'Ⲋ', ar: 'Ⲋ' }], correctAnswerIndex: 2 },
            { id: 'q1-2-5', type: 'fill-in-the-blank', questionText: { de: 'Der Zahlenwert von Zeeta ist ___.', en: 'The numeric value of Zeeta is ___.', ar: 'القيمة العددية لـ زيتا هي ___.' }, correctAnswer: '7' },
        ]
    },
    'q2-1': {
        id: 'q2-1', lessonId: 'l2-1', title: { de: 'Test: Alphabet 3', en: 'Quiz: Alphabet 3', ar: 'اختبار: الأبجدية 3' }, passScore: 80,
        questions: [
            { id: 'q2-1-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet das Wort "ⲓⲱⲧ"?', en: 'What does the word "ⲓⲱⲧ" mean?', ar: 'ما معنى كلمة "ⲓⲱⲧ"؟' }, options: [ { de: 'Mutter', en: 'Mother', ar: 'أم' }, { de: 'Vater', en: 'Father', ar: 'أب' }, { de: 'Sohn', en: 'Son', ar: 'ابن' } ], correctAnswerIndex: 1 },
            { id: 'q2-1-2', type: 'multiple-choice', questionText: { de: 'Was ist der Zahlenwert von Ⲕ?', en: 'What is the numeric value of Ⲕ?', ar: 'ما هي القيمة العددية لـ Ⲕ؟' }, options: [{ de: '10', en: '10', ar: '١٠' }, { de: '20', en: '20', ar: '٢٠' }, { de: '30', en: '30', ar: '٣٠' }], correctAnswerIndex: 1 },
            { id: 'q2-1-3', type: 'fill-in-the-blank', questionText: { de: 'Der Buchstabe Theta (ⲑ) wird wie "__" im Englischen "thing" ausgesprochen.', en: 'The letter Theta (ⲑ) is pronounced like "__" in the English word "thing".', ar: 'حرف الثيتا (ⲑ) يُنطق مثل "__" في كلمة "ثلاثة".' }, correctAnswer: 'th' },
            { id: 'q2-1-4', type: 'multiple-choice', questionText: { de: 'Welcher Buchstabe ist das: ⲕ?', en: 'Which letter is this: ⲕ?', ar: 'ما هذا الحرف: ⲕ' }, options: [{ de: 'Kappa', en: 'Kappa', ar: 'كبا' }, { de: 'Yota', en: 'Yota', ar: 'يوتا' }, { de: 'Theta', en: 'Theta', ar: 'ثيتا' }], correctAnswerIndex: 0 },
            { id: 'q2-1-5', type: 'fill-in-the-blank', questionText: { de: 'Der Zahlenwert von Yota ist ___.', en: 'The numeric value of Yota is ___.', ar: 'القيمة العددية ليوتا هي ___.' }, correctAnswer: '10' },
        ]
    },
     'q2-2': {
        id: 'q2-2', lessonId: 'l2-2', title: { de: 'Test: Alphabet 4', en: 'Quiz: Alphabet 4', ar: 'اختبار: الأبجدية 4' }, passScore: 80,
        questions: [
            { id: 'q2-2-1', type: 'multiple-choice', questionText: { de: 'Was ist der Zahlenwert von Ⲙ?', en: 'What is the numeric value of Ⲙ?', ar: 'ما هي القيمة العددية لـ Ⲙ؟' }, options: [{ de: '30', en: '30', ar: '٣٠' }, { de: '40', en: '40', ar: '٤٠' }, { de: '50', en: '50', ar: '٥٠' }], correctAnswerIndex: 1 },
            { id: 'q2-2-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "Zunge" ist ___.', en: 'The Coptic word for "tongue" is ___.', ar: 'الكلمة القبطية لـ "لسان" هي ___.' }, correctAnswer: 'ⲗⲁⲥ' },
            { id: 'q2-2-3', type: 'multiple-choice', questionText: { de: 'Welcher Buchstabe steht für den Laut "n"?', en: 'Which letter represents the "n" sound?', ar: 'أي حرف يمثل صوت "ن"؟' }, options: [{ de: 'Ⲙ', en: 'Ⲙ', ar: 'Ⲙ' }, { de: 'Ⲛ', en: 'Ⲛ', ar: 'Ⲛ' }, { de: 'Ⲗ', en: 'Ⲗ', ar: 'Ⲗ' }], correctAnswerIndex: 1 },
        ]
    },
     'q2-3': {
        id: 'q2-3', lessonId: 'l2-3', title: { de: 'Test: Alphabet 5', en: 'Quiz: Alphabet 5', ar: 'اختبار: الأبجدية 5' }, passScore: 80,
        questions: [
            { id: 'q2-3-1', type: 'multiple-choice', questionText: { de: 'Was ist der Laut von Ⲝ?', en: 'What is the sound of Ⲝ?', ar: 'ما هو صوت Ⲝ؟' }, options: [{ de: 'ps', en: 'ps', ar: 'بس' }, { de: 'ks', en: 'ks', ar: 'كس' }, { de: 'sk', en: 'sk', ar: 'سك' }], correctAnswerIndex: 1 },
            { id: 'q2-3-2', type: 'fill-in-the-blank', questionText: { de: 'Der Zahlenwert von Pe (Ⲡ) ist ___.', en: 'The numeric value of Pe (Ⲡ) is ___.', ar: 'القيمة العددية لـ بي (Ⲡ) هي ___.' }, correctAnswer: '80' },
            { id: 'q2-3-3', type: 'multiple-choice', questionText: { de: 'Das Wort für "Name" ist ...', en: 'The word for "name" is ...', ar: 'كلمة "اسم" هي...' }, options: [{ de: 'ⲣⲟ', en: 'ro', ar: 'رو' }, { de: 'ⲣⲁⲛ', en: 'ran', ar: 'ران' }, { de: 'ⲣⲱⲓ', en: 'romi', ar: 'رومي' }], correctAnswerIndex: 1 },
        ]
    },
     'q2-4': {
        id: 'q2-4', lessonId: 'l2-4', title: { de: 'Test: Alphabet 6', en: 'Quiz: Alphabet 6', ar: 'اختبار: الأبجدية 6' }, passScore: 80,
        questions: [
            { id: 'q2-4-1', type: 'multiple-choice', questionText: { de: 'Was ist der Zahlenwert von Ⲩ?', en: 'What is the numeric value of Ⲩ?', ar: 'ما هي القيمة العددية لـ Ⲩ؟' }, options: [{ de: '200', en: '200', ar: '٢٠٠' }, { de: '300', en: '300', ar: '٣٠٠' }, { de: '400', en: '400', ar: '٤٠٠' }], correctAnswerIndex: 2 },
            { id: 'q2-4-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "hören" ist ___.', en: 'The Coptic word for "to hear" is ___.', ar: 'الكلمة القبطية لـ "يسمع" هي ___.' }, correctAnswer: 'ⲥⲱⲧⲉⲙ' },
            { id: 'q2-4-3', type: 'multiple-choice', questionText: { de: 'Wie wird Ⲧ nach Ⲛ ausgesprochen?', en: 'How is Ⲧ pronounced after Ⲛ?', ar: 'كيف يُنطق Ⲧ بعد Ⲛ؟' }, options: [{ de: 't', en: 't', ar: 'ت' }, { de: 'd', en: 'd', ar: 'د' }, { de: 'th', en: 'th', ar: 'ث' }], correctAnswerIndex: 1 },
        ]
    },
     'q2-5': {
        id: 'q2-5', lessonId: 'l2-5', title: { de: 'Test: Alphabet 7', en: 'Quiz: Alphabet 7', ar: 'اختبار: الأبجدية 7' }, passScore: 80,
        questions: [
            { id: 'q2-5-1', type: 'multiple-choice', questionText: { de: 'Welcher Buchstabe klingt wie "sch"?', en: 'Which letter sounds like "sh"?', ar: 'أي حرف صوته "ش"؟' }, options: [{ de: 'Ⲭ', en: 'Ⲭ', ar: 'Ⲭ' }, { de: 'Ϣ', en: 'Ϣ', ar: 'Ϣ' }, { de: 'Ⲯ', en: 'Ⲯ', ar: 'Ⲯ' }], correctAnswerIndex: 1 },
            { id: 'q2-5-2', type: 'fill-in-the-blank', questionText: { de: 'Das Wort "Psalm" beginnt mit dem Buchstaben ___.', en: 'The word "psalm" starts with the letter ___.', ar: 'كلمة "مزمور" تبدأ بحرف ___.' }, correctAnswer: 'Ⲯ' },
            { id: 'q2-5-3', type: 'multiple-choice', questionText: { de: 'Was ist der Zahlenwert von Ⲱ?', en: 'What is the numeric value of Ⲱ?', ar: 'ما هي القيمة العددية لـ Ⲱ؟' }, options: [{ de: '600', en: '600', ar: '٦٠٠' }, { de: '700', en: '700', ar: '٧٠٠' }, { de: '800', en: '800', ar: '٨٠٠' }], correctAnswerIndex: 2 },
        ]
    },
    'q2-6': {
        id: 'q2-6', lessonId: 'l2-6', title: { de: 'Test: Alphabet 8', en: 'Quiz: Alphabet 8', ar: 'اختبار: الأبجدية 8' }, passScore: 80,
        questions: [
            { id: 'q2-6-1', type: 'multiple-choice', questionText: { de: 'Welcher Buchstabe klingt wie "tsch"?', en: 'Which letter sounds like "ch" (as in church)?', ar: 'أي حرف صوته "تش"؟' }, options: [{ de: 'Ϫ', en: 'Ϫ', ar: 'Ϫ' }, { de: 'Ϭ', en: 'Ϭ', ar: 'Ϭ' }, { de: 'Ϯ', en: 'Ϯ', ar: 'Ϯ' }], correctAnswerIndex: 1 },
            { id: 'q2-6-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "in" ist ___.', en: 'The Coptic word for "in" is ___.', ar: 'الكلمة القبطية لـ "في" هي ___.' }, correctAnswer: 'ϧⲉⲛ' },
            { id: 'q2-6-3', type: 'multiple-choice', questionText: { de: 'Welcher dieser Buchstaben hat keinen Zahlenwert?', en: 'Which of these letters has no numeric value?', ar: 'أي من هذه الحروف ليس له قيمة عددية؟' }, options: [{ de: 'Ϣ', en: 'Ϣ', ar: 'Ϣ' }, { de: 'Ϥ', en: 'Ϥ', ar: 'Ϥ' }, { de: 'Ϩ', en: 'Ϩ', ar: 'Ϩ' }], correctAnswerIndex: 2 },
            { id: 'q2-6-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet das Wort "ϭⲟⲓⲥ"?', en: 'What does the word "ϭⲟⲓⲥ" mean?', ar: 'ما معنى كلمة "ϭⲟⲓⲥ"؟' }, options: [{ de: 'König', en: 'King', ar: 'ملك' }, { de: 'Herr', en: 'Lord', ar: 'الرب' }, { de: 'Priester', en: 'Priest', ar: 'كاهن' }], correctAnswerIndex: 1 },
        ]
    },
    'q2-l1': {
        id: 'q2-l1', lessonId: 'm2-l1', title: { de: 'Test: Zahlen', en: 'Quiz: Numbers', ar: 'اختبار: الأرقام' }, passScore: 80,
        questions: [
            { id: 'q2-l1-1', type: 'multiple-choice', questionText: { de: 'Was ist die koptische Zahl für 12?', en: 'What is the Coptic number for 12?', ar: 'ما هو الرقم القبطي لـ ١٢؟' }, options: [{ de: 'ⲙⲏⲧ', en: 'meet', ar: 'ميت' }, { de: 'ⲙⲏⲧⲥ̀ⲛⲁⲩ', en: 'meetsnau', ar: 'ميتسناف' }, { de: 'ϫⲟⲩⲱⲧ', en: 'jouot', ar: 'جوت' }], correctAnswerIndex: 1 },
            { id: 'q2-l1-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für 100 ist ___.', en: 'The Coptic word for 100 is ___.', ar: 'الكلمة القبطية لـ ١٠٠ هي ___.' }, correctAnswer: 'ϣⲉ' },
            { id: 'q2-l1-3', type: 'multiple-choice', questionText: { de: 'Welches Symbol steht für die Zahl 20?', en: 'Which symbol represents the number 20?', ar: 'أي رمز يمثل الرقم ٢٠؟' }, options: [{ de: 'ⲓ̅', en: 'ⲓ̅', ar: 'ⲓ̅' }, { de: 'ⲕ̅', en: 'ⲕ̅', ar: 'ⲕ̅' }, { de: 'ⲗ̅', en: 'ⲗ̅', ar: 'ⲗ̅' }], correctAnswerIndex: 1 },
            { id: 'q2-l1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲥⲁϣϥ ⲛ̀ⲉ̀ϩⲟⲟⲩ"?', en: 'What does "ⲥⲁϣϥ ⲛ̀ⲉ̀ϩⲟⲟⲩ" mean?', ar: 'ما معنى "ⲥⲁϣϥ ⲛ̀ⲉ̀ϩⲟⲟⲩ"؟' }, options: [{ de: 'Sieben Fische', en: 'Seven fish', ar: 'سبع سمكات' }, { de: 'Sieben Tage', en: 'Seven days', ar: 'سبعة أيام' }, { de: 'Sieben Brote', en: 'Seven loaves', ar: 'سبعة أرغفة' }], correctAnswerIndex: 1 },
            { id: 'q2-l1-5', type: 'fill-in-the-blank', questionText: { de: 'Die Zahl 72 auf Koptisch ist ___ ⲥ̀ⲛⲁⲩ.', en: 'The number 72 in Coptic is ___ ⲥ̀ⲛⲁⲩ.', ar: 'الرقم ٧٢ بالقبطية هو ___ ⲥ̀ⲛⲁⲩ.' }, correctAnswer: 'ⲥⲉⲃⲉ' },
        ]
    },
    'q2-l2': {
        id: 'q2-l2', lessonId: 'm2-l2', title: { de: 'Test: Substantive', en: 'Quiz: Nouns', ar: 'اختبار: الأسماء' }, passScore: 80,
        questions: [
            { id: 'q2-l2-1', type: 'multiple-choice', questionText: { de: 'Welcher Artikel zeigt ein maskulines Substantiv an?', en: 'Which article indicates a masculine noun?', ar: 'أي أداة تشير إلى اسم مذكر؟' }, options: [{ de: 'ⲧ̀', en: 'ⲧ̀', ar: 'ⲧ̀' }, { de: 'ⲡ̀', en: 'ⲡ̀', ar: 'ⲡ̀' }, { de: 'ⲛⲓ', en: 'ⲛⲓ', ar: 'ⲛⲓ' }], correctAnswerIndex: 1 },
            { id: 'q2-l2-2', type: 'fill-in-the-blank', questionText: { de: 'Der Pluralartikel im Koptischen ist ___.', en: 'The plural article in Coptic is ___.', ar: 'أداة الجمع في القبطية هي ___.' }, correctAnswer: 'ⲛⲓ' },
            { id: 'q2-l2-3', type: 'multiple-choice', questionText: { de: 'Ist das Wort "ⲥⲱⲛⲓ" (Schwester) maskulin oder feminin?', en: 'Is the word "ⲥⲱⲛⲓ" (sister) masculine or feminine?', ar: 'هل كلمة "ⲥⲱⲛⲓ" (أخت) مذكرة أم مؤنثة؟' }, options: [{ de: 'Maskulin', en: 'Masculine', ar: 'مذكر' }, { de: 'Feminin', en: 'Feminine', ar: 'مؤنث' }], correctAnswerIndex: 1 },
            { id: 'q2-l2-4', type: 'multiple-choice', questionText: { de: 'Wie sagt man "die Brüder"?', en: 'How do you say "the brothers"?', ar: 'كيف تقول "الإخوة"؟' }, options: [{ de: 'ⲡ̀ⲥⲟⲛ', en: 'pi-son', ar: 'بي-سون' }, { de: 'ⲛⲓⲥ̀ⲛⲏⲟⲩ', en: 'ni-sneo-u', ar: 'ني-سنيو' }], correctAnswerIndex: 1 },
        ]
    },
    'q3-1': {
        id: 'q3-1', lessonId: 'l3-1', title: { de: 'Test: Artikel', en: 'Quiz: Articles', ar: 'اختبار: الأدوات' }, passScore: 80,
        questions: [
             { id: 'q3-1-1', type: 'multiple-choice', questionText: { de: 'Was ist der unbestimmte Artikel Plural?', en: 'What is the indefinite plural article?', ar: 'ما هي أداة النكرة للجمع؟' }, options: [{de: 'ⲟⲩ', en: 'ou', ar: 'أو'}, {de: 'ⲛⲓ', en: 'ni', ar: 'ني'}, {de: 'ϩⲁⲛ', en: 'han', ar: 'هان'}], correctAnswerIndex: 2 },
             { id: 'q3-1-2', type: 'multiple-choice', questionText: { de: 'Welcher ist der starke maskuline Artikel?', en: 'Which is the strong masculine article?', ar: 'أي أداة هي أداة التعريف المذكرة القوية؟' }, options: [{de: 'ⲡ̀', en: 'ep', ar: 'إب'}, {de: 'ⲡⲓ', en: 'pi', ar: 'بي'}, {de: 'ⲫ̀', en: 'eph', ar: 'إف'}], correctAnswerIndex: 1 },
             { id: 'q3-1-3', type: 'fill-in-the-blank', questionText: { de: 'Vor einem Vilminor-Buchstaben wird ⲧ̀ zu ___.', en: 'Before a Vilminor letter, ⲧ̀ becomes ___.', ar: 'قبل حرف فيلمينور، ⲧ̀ تصبح ___.' }, correctAnswer: 'ⲑ̀' },
             { id: 'q3-1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet ⲱ ⲡⲁⲛⲟⲩϯ?', en: 'What does ⲱ ⲡⲁⲛⲟⲩϯ mean?', ar: 'ما معنى ⲱ ⲡⲁⲛⲟⲩϯ؟' }, options: [{de: 'mein Gott', en: 'my God', ar: 'إلهي'}, {de: 'der Gott', en: 'the God', ar: 'الإله'}, {de: 'O mein Gott!', en: 'O my God!', ar: 'يا إلهي!'}], correctAnswerIndex: 2 }
        ]
    },
    'q3-2': {
        id: 'q3-2', lessonId: 'l3-2', title: { de: 'Test: Possessivartikel', en: 'Quiz: Possessive Articles', ar: 'اختبار: أدوات الملكية' }, passScore: 80,
        questions: [
            { id: 'q3-2-1', type: 'multiple-choice', questionText: { de: 'Wie sagt man "sein Haus" (Haus = ⲏⲓ, mask.)?', en: 'How do you say "his house" (house = ⲏⲓ, masc.)?', ar: 'كيف تقول "بيته" (بيت = ⲏⲓ، مذكر)؟' }, options: [{de: 'ⲧⲉϥⲏⲓ', en: 'tef-ee', ar: 'تيف-إي'}, {de: 'ⲡⲉϥⲏⲓ', en: 'pef-ee', ar: 'بيف-إي'}, {de: 'ⲛⲉϥⲏⲓ', en: 'nef-ee', ar: 'نيف-إي'}], correctAnswerIndex: 1 },
            { id: 'q3-2-2', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ___ⲙⲁⲁⲩ (unsere Mutter)', en: 'Complete: ___maav (our mother)', ar: 'أكمل: ___ماڤ (أمنا)' }, correctAnswer: 'ⲧⲉⲛ' },
            { id: 'q3-2-3', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲛⲉⲕⲥ̀ⲛⲏⲟⲩ"?', en: 'What does "ⲛⲉⲕⲥ̀ⲛⲏⲟⲩ" mean?', ar: 'ما معنى "ⲛⲉⲕⲥ̀ⲛⲏⲟⲩ"؟' }, options: [{de: 'deine (m.) Brüder', en: 'your (m.) brothers', ar: 'إخوتك (للمذكر)'}, {de: 'deine (f.) Brüder', en: 'your (f.) brothers', ar: 'إخوتك (للمؤنث)'}], correctAnswerIndex: 0 }
        ]
    },
    'q3-3': {
        id: 'q3-3', lessonId: 'l3-3', title: { de: 'Test: Demonstrativpronomen', en: 'Quiz: Demonstrative Pronouns', ar: 'اختبار: ضمائر الإشارة' }, passScore: 80,
        questions: [
             { id: 'q3-3-1', type: 'multiple-choice', questionText: { de: 'Wie sagt man "diese Frau"?', en: 'How do you say "this woman"?', ar: 'كيف تقول "هذه المرأة"؟' }, options: [{de: 'ⲡⲁⲓ ⲥ̀ϩⲓⲙⲓ', en: 'pai shimi', ar: 'باي سيمي'}, {de: 'ⲧⲁⲓ ⲥ̀ϩⲓⲙⲓ', en: 'tai shimi', ar: 'تاي سيمي'}, {de: 'ⲛⲁⲓ ⲥ̀ϩⲓⲙⲓ', en: 'nai shimi', ar: 'ناي سيمي'}], correctAnswerIndex: 1 },
             { id: 'q3-3-2', type: 'multiple-choice', questionText: { de: 'Was ist der Unterschied zwischen ⲡⲁⲓ und ⲫⲁⲓ?', en: 'What is the difference between ⲡⲁⲓ and ⲫⲁⲓ?', ar: 'ما الفرق بين ⲡⲁⲓ و ⲫⲁⲓ؟' }, options: [{de: 'Keiner', en: 'None', ar: 'لا يوجد فرق'}, {de: 'Artikel vs. Pronomen', en: 'Article vs. Pronoun', ar: 'أداة مقابل ضمير'}], correctAnswerIndex: 1 },
             { id: 'q3-3-3', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ⲡ̀ⲏⲓ ___ (jenes Haus)', en: 'Complete: ⲡ̀ⲏⲓ ___ (that house)', ar: 'أكمل: ⲡ̀ⲏⲓ ___ (ذلك البيت)' }, correctAnswer: 'ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ' }
        ]
    },
    'q3-4': {
        id: 'q3-4', lessonId: 'l3-4', title: { de: 'Test: Pronomen & Abkürzungen', en: 'Quiz: Pronouns & Abbreviations', ar: 'اختبار: الضمائر والاختصارات' }, passScore: 80,
        questions: [
            { id: 'q3-4-1', type: 'multiple-choice', questionText: { de: 'Was ist das unabhängige Pronomen für "wir"?', en: 'What is the independent pronoun for "we"?', ar: 'ما هو الضمير المنفصل لـ "نحن"؟' }, options: [{de: 'ⲁ̀ⲛⲟⲕ', en: 'anok', ar: 'أنوك'}, {de: 'ⲁ̀ⲛⲟⲛ', en: 'anon', ar: 'أنون'}, {de: 'ⲛ̀ⲑⲱⲧⲉⲛ', en: 'entoten', ar: 'إنثوتين'}], correctAnswerIndex: 1 },
            { id: 'q3-4-2', type: 'fill-in-the-blank', questionText: { de: 'Die Abkürzung für Jesus ist ___.', en: 'The abbreviation for Jesus is ___.', ar: 'اختصار اسم يسوع هو ___.' }, correctAnswer: 'Ⲓ̅ⲥ̅' },
            { id: 'q3-4-3', type: 'multiple-choice', questionText: { de: 'Was bedeutet Ⲡϭ̅ⲟ̅ⲓ̅ⲥ̅?', en: 'What does Ⲡϭ̅ⲟ̅ⲓ̅ⲥ̅ mean?', ar: 'ما معنى Ⲡϭ̅ⲟ̅ⲓ̅ⲥ̅؟' }, options: [{de: 'Gott', en: 'God', ar: 'الله'}, {de: 'Christus', en: 'Christ', ar: 'المسيح'}, {de: 'Der Herr', en: 'The Lord', ar: 'الرب'}], correctAnswerIndex: 2 }
        ]
    },
    'q4-1': {
        id: 'q4-1', lessonId: 'l4-1', title: { de: 'Test: Der bestimmte Artikel', en: 'Quiz: The Definite Article', ar: 'اختبار: أداة التعريف' }, passScore: 80,
        questions: [
            { id: 'q4-1-1', type: 'fill-in-the-blank', questionText: { de: 'Füge den korrekten Artikel für "der Mann" ein: ___ ⲣⲱⲙⲓ', en: 'Insert the correct article for "the man": ___ ⲣⲱⲙⲓ', ar: 'أدخل الأداة الصحيحة لكلمة "الرجل": ___ ⲣⲱⲙⲓ' }, correctAnswer: 'ⲡ̀' },
            { id: 'q4-1-2', type: 'multiple-choice', questionText: { de: 'Welcher Artikel wird für weibliche Substantive verwendet?', en: 'Which article is used for feminine nouns?', ar: 'أي أداة تستخدم للأسماء المؤنثة؟' }, options: [{ de: 'ⲡ̀', en: 'ⲡ̀', ar: 'ⲡ̀' }, { de: 'ⲧ̀', en: 'ⲧ̀', ar: 'ⲧ̀' }, { de: 'ⲛⲓ', en: 'ⲛⲓ', ar: 'ⲛⲓ' }], correctAnswerIndex: 1 },
            { id: 'q4-1-3', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲛⲓⲣⲱⲙⲓ"?', en: 'What does "ⲛⲓⲣⲱⲙⲓ" mean?', ar: 'ما معنى "ⲛⲓⲣⲱⲙⲓ"؟' }, options: [{ de: 'der Mann', en: 'the man', ar: 'الرجل' }, { de: 'die Frau', en: 'the woman', ar: 'المرأة' }, { de: 'die Menschen', en: 'the people', ar: 'الناس' }], correctAnswerIndex: 2 },
            { id: 'q4-1-4', type: 'fill-in-the-blank', questionText: { de: 'Der Artikel für plurale Substantive ist ___.', en: 'The article for plural nouns is ___.', ar: 'أداة الجمع هي ___.' }, correctAnswer: 'ⲛⲓ' },
            { id: 'q4-1-5', type: 'multiple-choice', questionText: { de: 'Was ist der korrekte Ausdruck für "die Frau"?', en: 'What is the correct phrase for "the woman"?', ar: 'ما هي العبارة الصحيحة لـ "المرأة"؟' }, options: [{ de: 'ⲡ̀ⲥ̀ϩⲓⲙⲓ', en: 'pi-shimi', ar: 'بي سيمي' }, { de: 'ⲧ̀ⲥ̀ϩⲓⲙⲓ', en: 'ti-shimi', ar: 'تي سيمي' }, { de: 'ⲛⲓⲥ̀ϩⲓⲙⲓ', en: 'ni-shimi', ar: 'ني سيمي' }], correctAnswerIndex: 1 },
            { id: 'q4-1-6', type: 'fill-in-the-blank', questionText: { de: 'Schreibe "der Vater" auf Koptisch: ___ ⲓⲱⲧ', en: 'Write "the father" in Coptic: ___ ⲓⲱⲧ', ar: 'اكتب "الأب" بالقبطية: ___ ⲓⲱⲧ' }, correctAnswer: 'ⲡ̀' },
            { id: 'q4-1-7', type: 'multiple-choice', questionText: { de: 'Welcher Artikel ist maskulin?', en: 'Which article is masculine?', ar: 'أي أداة هي للمذكر؟' }, options: [{ de: 'ⲡ̀', en: 'ⲡ̀', ar: 'ⲡ̀' }, { de: 'ⲧ̀', en: 'ⲧ̀', ar: 'ⲧ̀' }, { de: 'ⲛⲓ', en: 'ⲛⲓ', ar: 'ⲛⲓ' }], correctAnswerIndex: 0 },
            { id: 'q4-1-8', type: 'fill-in-the-blank', questionText: { de: 'Füge den korrekten Artikel ein: ___ ⲙⲁⲁⲩ (die Mutter)', en: 'Insert the correct article: ___ ⲙⲁⲁⲩ (the mother)', ar: 'أدخل الأداة الصحيحة: ___ ⲙⲁⲁⲩ (الأم)' }, correctAnswer: 'ⲧ̀' },
        ]
    },
     'q4-2': {
        id: 'q4-2', lessonId: 'l4-2', title: { de: 'Test: Artikel vor Vokalen', en: 'Quiz: Articles Before Vowels', ar: 'اختبار: أدوات التعريف قبل حروف العلة' }, passScore: 80,
        questions: [
            { id: 'q4-2-1', type: 'multiple-choice', questionText: { de: 'Wie ändert sich ⲧ̀ vor einem Vokal?', en: 'How does ⲧ̀ change before a vowel?', ar: 'كيف تتغير ⲧ̀ قبل حرف متحرك؟' }, options: [{ de: 'ⲑ-', en: 'ⲑ-', ar: 'ⲑ-' }, { de: 'ⲡ-', en: 'ⲡ-', ar: 'ⲡ-' }, { de: 'ⲛⲓ-', en: 'ⲛⲓ-', ar: 'ⲛⲓ-' }], correctAnswerIndex: 0 },
            { id: 'q4-2-2', type: 'fill-in-the-blank', questionText: { de: 'Der Artikel für "der Engel" ist ___.', en: 'The article for "the angel" is ___.', ar: 'أداة "الملاك" هي ___.' }, correctAnswer: 'ⲡ̀' },
            { id: 'q4-2-3', type: 'multiple-choice', questionText: { de: 'Was ist korrekt für "die Engel"?', en: 'What is correct for "the angels"?', ar: 'ما هو الصحيح لـ "الملائكة"؟' }, options: [{ de: 'ⲛ̀ⲁ̀ⲅⲅⲉⲗⲟⲥ', en: 'n-angelos', ar: 'ن-أنجيلوس' }, { de: 'ⲛⲓ̀ⲁ̀ⲅⲅⲉⲗⲟⲥ', en: 'ni-angelos', ar: 'ني-أنجيلوس' }], correctAnswerIndex: 1 },
        ]
    },
    'q5-1': {
        id: 'q5-1', lessonId: 'l5-1', title: { de: 'Test: Verben I', en: 'Quiz: Verbs I', ar: 'اختبار: الأفعال 1' }, passScore: 80,
        questions: [
            { id: 'q5-1-1', type: 'multiple-choice', questionText: { de: 'Was ist das Präfix für "ich" im Präsens?', en: 'What is the prefix for "I" in the present tense?', ar: 'ما هي البادئة لـ "أنا" في المضارع؟' }, options: [{ de: 'ⲕ-', en: 'k-', ar: 'ك-' }, { de: 'ϯ-', en: 'ti-', ar: 'تي-' }, { de: 'ϥ-', en: 'f-', ar: 'ف-' }], correctAnswerIndex: 1 },
            { id: 'q5-1-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "hören" ist ___.', en: 'The Coptic word for "to hear" is ___.', ar: 'الكلمة القبطية لـ "يسمع" هي ___.' }, correctAnswer: 'ⲥⲱⲧⲉⲙ' },
            { id: 'q5-1-3', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ϥⲥⲱⲧⲉⲙ"?', en: 'What does "ϥⲥⲱⲧⲉⲙ" mean?', ar: 'ما معنى "ϥⲥⲱⲧⲉⲙ"؟' }, options: [{ de: 'ich höre', en: 'I hear', ar: 'أنا أسمع' }, { de: 'er hört', en: 'he hears', ar: 'هو يسمع' }, { de: 'sie hören', en: 'they hear', ar: 'هم يسمعون' }], correctAnswerIndex: 1 },
            { id: 'q5-1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲧⲉⲛⲥⲱⲧⲉⲙ"?', en: 'What does "ⲧⲉⲛⲥⲱⲧⲉⲙ" mean?', ar: 'ما معنى "ⲧⲉⲛⲥⲱⲧⲉⲙ"؟' }, options: [{ de: 'wir hören', en: 'we hear', ar: 'نحن نسمع' }, { de: 'ihr hört', en: 'you hear', ar: 'أنتم تسمعون' }, { de: 'sie hören', en: 'they hear', ar: 'هم يسمعون' }], correctAnswerIndex: 0 },
            { id: 'q5-1-5', type: 'fill-in-the-blank', questionText: { de: 'Schreibe "sie hört" auf Koptisch.', en: 'Write "she hears" in Coptic.', ar: 'اكتب "هي تسمع" بالقبطية.' }, correctAnswer: 'ⲥⲥⲱⲧⲉⲙ' },
            { id: 'q5-1-6', type: 'multiple-choice', questionText: { de: 'Welches Pronomen passt zum Präfix ⲕ-?', en: 'Which pronoun corresponds to the prefix ⲕ-?', ar: 'أي ضمير يتوافق مع البادئة ⲕ-؟' }, options: [{ de: 'ich', en: 'I', ar: 'أنا' }, { de: 'du (m.)', en: 'you (m.)', ar: 'أنت' }, { de: 'er', en: 'he', ar: 'هو' }], correctAnswerIndex: 1 },
            { id: 'q5-1-7', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ⲥⲉ___ (sie hören)', en: 'Complete: ⲥⲉ___ (they hear)', ar: 'أكمل: ⲥⲉ___ (هم يسمعون)' }, correctAnswer: 'ⲥⲱⲧⲉⲙ' },
        ]
    },
    'q5-2': {
        id: 'q5-2', lessonId: 'l5-2', title: { de: 'Test: Perfekt', en: 'Quiz: Perfect Tense', ar: 'اختبار: الماضي' }, passScore: 80,
        questions: [
            { id: 'q5-2-1', type: 'multiple-choice', questionText: { de: 'Welches Präfix wird für die Vergangenheit verwendet?', en: 'Which prefix is used for the past tense?', ar: 'أي بادئة تستخدم لزمن الماضي؟' }, options: [{de: 'ϯ-', en: 'ti-', ar: 'تي-'}, {de: 'ⲁ-', en: 'a-', ar: 'أ-'}, {de: 'ⲉ-', en: 'e-', ar: 'إ-'}], correctAnswerIndex: 1 },
            { id: 'q5-2-2', type: 'fill-in-the-blank', questionText: { de: 'Wie sagt man "ich hörte"?', en: 'How do you say "I heard"?', ar: 'كيف تقول "أنا سمعت"؟' }, correctAnswer: 'ⲁⲓⲥⲱⲧⲉⲙ' },
            { id: 'q5-2-3', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲁⲩⲥⲱⲧⲉⲙ"?', en: 'What does "ⲁⲩⲥⲱⲧⲉⲙ" mean?', ar: 'ما معنى "ⲁⲩⲥⲱⲧⲉⲙ"؟' }, options: [{de: 'wir hörten', en: 'we heard', ar: 'نحن سمعنا'}, {de: 'ihr hörtet', en: 'you heard', ar: 'أنتم سمعتم'}, {de: 'sie hörten', en: 'they heard', ar: 'هم سمعوا'}], correctAnswerIndex: 2 },
            { id: 'q5-2-4', type: 'multiple-choice', questionText: { de: 'Welches Pronomen passt zu "ⲁⲕ..."?', en: 'Which pronoun corresponds to "ⲁⲕ..."?', ar: 'أي ضمير يتوافق مع "ⲁⲕ..."؟' }, options: [{de: 'ich', en: 'I', ar: 'أنا'}, {de: 'du (m.)', en: 'you (m.)', ar: 'أنت'}, {de: 'er', en: 'he', ar: 'هو'}], correctAnswerIndex: 1 },
        ]
    },
     'q5-3': {
        id: 'q5-3', lessonId: 'l5-3', title: { de: 'Test: Futur', en: 'Quiz: Future Tense', ar: 'اختبار: المستقبل' }, passScore: 80,
        questions: [
            { id: 'q5-3-1', type: 'multiple-choice', questionText: { de: 'Welches Präfix wird für die Zukunft verwendet?', en: 'Which prefix is used for the future tense?', ar: 'أي بادئة تستخدم لزمن المستقبل؟' }, options: [{de: 'ϯ-', en: 'ti-', ar: 'تي-'}, {de: 'ⲁ-', en: 'a-', ar: 'أ-'}, {de: 'ⲉ-', en: 'e-', ar: 'إ-'}], correctAnswerIndex: 2 },
            { id: 'q5-3-2', type: 'fill-in-the-blank', questionText: { de: 'Wie sagt man "er wird hören"?', en: 'How do you say "he will hear"?', ar: 'كيف تقول "هو سيسمع"؟' }, correctAnswer: 'ⲉϥⲉⲥⲱⲧⲉⲙ' },
            { id: 'q5-3-3', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲉⲛⲉⲥⲱⲧⲉⲙ"?', en: 'What does "ⲉⲛⲉⲥⲱⲧⲉⲙ" mean?', ar: 'ما معنى "ⲉⲛⲉⲥⲱⲧ≉ⲙ"؟' }, options: [{de: 'wir werden hören', en: 'we will hear', ar: 'نحن سنسمع'}, {de: 'ihr werdet hören', en: 'you will hear', ar: 'أنتم ستسمعون'}, {de: 'sie werden hören', en: 'they will hear', ar: 'هم سيسمعون'}], correctAnswerIndex: 0 },
        ]
    },
    'q6-1': { id: 'q6-1', lessonId: 'l6-1', title: { de: 'Test: Personalpronomen', en: 'Quiz: Personal Pronouns', ar: 'اختبار: الضمائر الشخصية' }, passScore: 80, questions: [ { id: 'q6-1-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲁⲛⲟⲕ"?', en: 'What does "ⲁⲛⲟⲕ" mean?', ar: 'ما معنى "ⲁⲛⲟⲕ"؟' }, options: [{de: 'Ich', en: 'I', ar: 'أنا'}, {de: 'Wir', en: 'We', ar: 'نحن'}, {de: 'Er', en: 'He', ar: 'هو'}], correctAnswerIndex: 0 }, { id: 'q6-1-2', type: 'fill-in-the-blank', questionText: { de: 'Das Pronomen für "du (weiblich)" ist ___.', en: 'The pronoun for "you (feminine)" is ___.', ar: 'الضمير لـ "أنتِ" هو ___.' }, correctAnswer: 'ⲛ̀ⲑⲟ' }, { id: 'q6-1-3', type: 'multiple-choice', questionText: { de: 'Welches Pronomen ist "ⲛ̀ⲑⲟϥ"?', en: 'Which pronoun is "ⲛ̀ⲑⲟϥ"?', ar: 'أي ضمير هو "ⲛ̀ⲑⲟϥ"؟' }, options: [{de: 'sie', en: 'she', ar: 'هي'}, {de: 'er', en: 'he', ar: 'هو'}, {de: 'es', en: 'it', ar: 'هو/هي لغير العاقل'}], correctAnswerIndex: 1 }, { id: 'q6-1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲁⲛⲟⲛ"?', en: 'What does "ⲁⲛⲟⲛ" mean?', ar: 'ما معنى "ⲁⲛⲟⲛ"؟' }, options: [{de: 'ihr', en: 'you (pl.)', ar: 'أنتم'}, {de: 'wir', en: 'we', ar: 'نحن'}, {de: 'sie (pl.)', en: 'they', ar: 'هم'}], correctAnswerIndex: 1 }, { id: 'q6-1-5', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ___ ⲡⲉ ⲡⲁⲥⲟⲛ (Du (m.) bist mein Bruder)', en: 'Complete: ___ ⲡⲉ ⲡⲁⲥⲟⲛ (You (m.) are my brother)', ar: 'أكمل: ___ ⲡⲉ ⲡⲁⲥⲟⲛ (أنت أخي)' }, correctAnswer: 'ⲛ̀ⲑⲟⲕ' }, ] },
    'q6-2': {
        id: 'q6-2', lessonId: 'l6-2', title: { de: 'Test: Possessivartikel', en: 'Quiz: Possessive Articles', ar: 'اختبار: أدوات الملكية' }, passScore: 80,
        questions: [
            { id: 'q6-2-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲡⲁⲓⲱⲧ"?', en: 'What does "ⲡⲁⲓⲱⲧ" mean?', ar: 'ما معنى "ⲡⲁⲓⲱⲧ"؟' }, options: [{ de: 'dein Vater', en: 'your father', ar: 'أبوك' }, { de: 'mein Vater', en: 'my father', ar: 'أبي' }, { de: 'sein Vater', en: 'his father', ar: 'أبوه' }], correctAnswerIndex: 1 },
            { id: 'q6-2-2', type: 'fill-in-the-blank', questionText: { de: 'Wie sagt man "meine Mutter"?', en: 'How do you say "my mother"?', ar: 'كيف تقول "أمي"؟' }, correctAnswer: 'ⲧⲁⲙⲁⲁⲩ' },
            { id: 'q6-2-3', type: 'multiple-choice', questionText: { de: 'Welcher Artikel wird für "dein" (zu einem Mann) mit einem maskulinen Substantiv verwendet?', en: 'Which article is used for "your" (to a male) with a masculine noun?', ar: 'أي أداة تستخدم لـ "لك" (للمذكر) مع اسم مذكر؟' }, options: [{ de: 'ⲡⲁ-', en: 'pa-', ar: 'با-' }, { de: 'ⲧⲉⲕ-', en: 'tek-', ar: 'تيك-' }, { de: 'ⲡⲉⲕ-', en: 'pek-', ar: 'بيك-' }], correctAnswerIndex: 2 },
        ]
    },
    'q6-3': {
        id: 'q6-3', lessonId: 'l6-3', title: { de: 'Test: Demonstrativpronomen', en: 'Quiz: Demonstrative Pronouns', ar: 'اختبار: ضمائر الإشارة' }, passScore: 80,
        questions: [
            { id: 'q6-3-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲡⲁⲓ"?', en: 'What does "ⲡⲁⲓ" mean?', ar: 'ما معنى "ⲡⲁⲓ"؟' }, options: [{ de: 'dieser (m.)', en: 'this (m.)', ar: 'هذا' }, { de: 'diese (f.)', en: 'this (f.)', ar: 'هذه' }, { de: 'diese (pl.)', en: 'these', ar: 'هؤلاء' }], correctAnswerIndex: 0 },
            { id: 'q6-3-2', type: 'fill-in-the-blank', questionText: { de: 'Wie sagt man "diese (pl.)"?', en: 'How do you say "these (pl.)"?', ar: 'كيف تقول "هؤلاء"؟' }, correctAnswer: 'ⲛⲁⲓ' },
            { id: 'q6-3-3', type: 'multiple-choice', questionText: { de: 'Vervollständige: ___ ⲧⲉ ⲧ̀ⲥ̀ϩⲓⲙⲓ', en: 'Complete: ___ ⲧⲉ ⲧ̀ⲥ̀ϩⲓⲙⲓ', ar: 'أكمل: ___ ⲧⲉ ⲧ̀ⲥ̀ϩⲓⲙⲓ' }, options: [{ de: 'ⲡⲁⲓ', en: 'pai', ar: 'باي' }, { de: 'ⲧⲁⲓ', en: 'tai', ar: 'تاي' }, { de: 'ⲛⲁⲓ', en: 'nai', ar: 'ناي' }], correctAnswerIndex: 1 },
        ]
    },
    'q7-1': { id: 'q7-1', lessonId: 'l7-1', title: { de: 'Test: Adjektive', en: 'Quiz: Adjectives', ar: 'اختبار: الصفات' }, passScore: 80, questions: [ { id: 'q7-1-1', type: 'multiple-choice', questionText: { de: 'Wo steht das Adjektiv im Koptischen normalerweise?', en: 'Where does the adjective usually stand in Coptic?', ar: 'أين تأتي الصفة عادة في القبطية؟' }, options: [{de: 'Vor dem Substantiv', en: 'Before the noun', ar: 'قبل الاسم'}, {de: 'Nach dem Substantiv', en: 'After the noun', ar: 'بعد الاسم'}], correctAnswerIndex: 1 }, { id: 'q7-1-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "groß" ist ___.', en: 'The Coptic word for "big" is ___.', ar: 'الكلمة القبطية لـ "كبير" هي ___.' }, correctAnswer: 'ⲛⲓϣϯ' }, { id: 'q7-1-3', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲡ̀ⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ"?', en: 'What does "ⲡ̀ⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ" mean?', ar: 'ما معنى "ⲡ̀ⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ"؟' }, options: [{de: 'der böse Mann', en: 'the evil man', ar: 'الرجل الشرير'}, {de: 'der Mann ist gut', en: 'the man is good', ar: 'الرجل صالح'}, {de: 'der gute Mann', en: 'the good man', ar: 'الرجل الصالح'}], correctAnswerIndex: 2 }, { id: 'q7-1-4', type: 'multiple-choice', questionText: { de: 'Welches Wort verbindet oft Substantiv und Adjektiv?', en: 'Which word often connects the noun and the adjective?', ar: 'أي كلمة تربط غالبًا بين الاسم والصفة؟' }, options: [{de: 'ⲡⲉ', en: 'pe', ar: 'بي'}, {de: 'ⲛ̀', en: 'en', ar: 'إن'}, {de: 'ⲅⲁⲣ', en: 'gar', ar: 'غار'}], correctAnswerIndex: 1 }, { id: 'q7-1-5', type: 'fill-in-the-blank', questionText: { de: 'Schreibe "das große Haus": ⲡ̀ⲏⲓ ⲛ̀___', en: 'Write "the big house": ⲡ̀ⲏⲓ ⲛ̀___', ar: 'اكتب "البيت الكبير": ⲡ̀ⲏⲓ ⲛ̀___' }, correctAnswer: 'ⲛⲓϣϯ' }, ] },
    'q8-1': { id: 'q8-1', lessonId: 'l8-1', title: { de: 'Test: Präpositionen', en: 'Quiz: Prepositions', ar: 'اختبار: حروف الجر' }, passScore: 80, questions: [ { id: 'q8-1-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ϧⲉⲛ"?', en: 'What does "ϧⲉⲛ" mean?', ar: 'ما معنى "ϧⲉⲛ"؟' }, options: [{de: 'mit', en: 'with', ar: 'مع'}, {de: 'auf', en: 'on', ar: 'على'}, {de: 'in', en: 'in', ar: 'في'}], correctAnswerIndex: 2 }, { id: 'q8-1-2', type: 'fill-in-the-blank', questionText: { de: 'Die Präposition für "mit" ist ___.', en: 'The preposition for "with" is ___.', ar: 'حرف الجر لـ "مع" هو ___.' }, correctAnswer: 'ⲛⲉⲙ' }, { id: 'q8-1-3', type: 'multiple-choice', questionText: { de: 'Wo steht die Präposition im Verhältnis zum Substantiv?', en: 'Where does the preposition stand in relation to the noun?', ar: 'أين يأتي حرف الجر بالنسبة للاسم؟' }, options: [{de: 'Davor', en: 'Before', ar: 'قبله'}, {de: 'Danach', en: 'After', ar: 'بعده'}], correctAnswerIndex: 0 }, { id: 'q8-1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ϧⲉⲛ ⲡ̀ⲏⲓ"?', en: 'What does "ϧⲉⲛ ⲡ̀ⲏⲓ" mean?', ar: 'ما معنى "ϧⲉⲛ ⲡ̀ⲏⲓ"؟' }, options: [{de: 'zum Haus', en: 'to the house', ar: 'إلى البيت'}, {de: 'im Haus', en: 'in the house', ar: 'في البيت'}, {de: 'vom Haus', en: 'from the house', ar: 'من البيت'}], correctAnswerIndex: 1 }, { id: 'q8-1-5', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ___ ⲡ̀ⲓⲱⲧ (mit dem Vater)', en: 'Complete: ___ ⲡ̀ⲓⲱⲧ (with the father)', ar: 'أكمل: ___ ⲡ̀ⲓⲱⲧ (مع الأب)' }, correctAnswer: 'ⲛⲉⲙ' }, ] },
    'q8-2': {
        id: 'q8-2', lessonId: 'l8-2', title: { de: 'Test: Weitere Präpositionen', en: 'Quiz: More Prepositions', ar: 'اختبار: المزيد من حروف الجر' }, passScore: 80,
        questions: [
            { id: 'q8-2-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet die Präposition "ⲉ̀"?', en: 'What does the preposition "ⲉ̀" mean?', ar: 'ما معنى حرف الجر "ⲉ̀"؟' }, options: [{ de: 'auf', en: 'on', ar: 'على' }, { de: 'von', en: 'from', ar: 'من' }, { de: 'zu', en: 'to', ar: 'إلى' }], correctAnswerIndex: 2 },
            { id: 'q8-2-2', type: 'fill-in-the-blank', questionText: { de: 'Die Präposition für "auf" ist ___.', en: 'The preposition for "on" is ___.', ar: 'حرف الجر لـ "على" هو ___.' }, correctAnswer: 'ϩⲓϫⲉⲛ' },
            { id: 'q8-2-3', type: 'multiple-choice', questionText: { de: 'Welche Präposition bedeutet "bis"?', en: 'Which preposition means "until"?', ar: 'أي حرف جر يعني "حتى"؟' }, options: [{ de: 'ⲉ̀ⲃⲟⲗ', en: 'evol', ar: 'إيڤول' }, { de: 'ϣⲁ', en: 'sha', ar: 'شا' }], correctAnswerIndex: 1 },
        ]
    },
    'q9-1': { id: 'q9-1', lessonId: 'l9-1', title: { de: 'Test: Fragesätze', en: 'Quiz: Questions', ar: 'اختبار: الجمل الاستفهامية' }, passScore: 80, questions: [ { id: 'q9-1-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲁϣ"?', en: 'What does "ⲁϣ" mean?', ar: 'ما معنى "ⲁϣ"؟' }, options: [{de: 'Wer?', en: 'Who?', ar: 'من؟'}, {de: 'Was?', en: 'What?', ar: 'ماذا؟'}, {de: 'Wo?', en: 'Where?', ar: 'أين؟'}], correctAnswerIndex: 1 }, { id: 'q9-1-2', type: 'fill-in-the-blank', questionText: { de: 'Das Fragewort für "wer?" ist ___.', en: 'The question word for "who?" is ___.', ar: 'كلمة الاستفهام لـ "من؟" هي ___.' }, correctAnswer: 'ⲛⲓⲙ' }, { id: 'q9-1-3', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲁϣ ⲡⲉ ⲡⲁⲓ"?', en: 'What does "ⲁϣ ⲡⲉ ⲡⲁⲓ" mean?', ar: 'ما معنى "ⲁϣ ⲡⲉ ⲡⲁⲓ"؟' }, options: [{de: 'Wer ist das?', en: 'Who is this?', ar: 'من هذا؟'}, {de: 'Was ist das?', en: 'What is this?', ar: 'ما هذا؟'}, {de: 'Warum ist das?', en: 'Why is this?', ar: 'لماذا هذا؟'}], correctAnswerIndex: 1 }, { id: 'q9-1-4', type: 'multiple-choice', questionText: { de: 'Wo steht das Fragewort normalerweise?', en: 'Where does the question word usually stand?', ar: 'أين تأتي كلمة الاستفهام عادة؟' }, options: [{de: 'Am Satzende', en: 'At the end of the sentence', ar: 'في نهاية الجملة'}, {de: 'In der Satzmitte', en: 'In the middle of the sentence', ar: 'في منتصف الجملة'}, {de: 'Am Satzanfang', en: 'At the beginning of the sentence', ar: 'في بداية الجملة'}], correctAnswerIndex: 2 }, { id: 'q9-1-5', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ___ ⲡⲉ ⲡ̀ⲣⲱⲙⲓ (Wer ist der Mann?)', en: 'Complete: ___ ⲡⲉ ⲡ̀ⲣⲱⲙⲓ (Who is the man?)', ar: 'أكمل: ___ ⲡⲉ ⲡ̀ⲣⲱⲙⲓ (من هو الرجل؟)' }, correctAnswer: 'ⲛⲓⲙ' }, ] },
     'q9-2': {
        id: 'q9-2', lessonId: 'l9-2', title: { de: 'Test: Konjunktionen', en: 'Quiz: Conjunctions', ar: 'اختبار: أدوات الربط' }, passScore: 80,
        questions: [
            { id: 'q9-2-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲛⲉⲙ"?', en: 'What does "ⲛⲉⲙ" mean?', ar: 'ما معنى "ⲛⲉⲙ"؟' }, options: [{ de: 'aber', en: 'but', ar: 'لكن' }, { de: 'und', en: 'and', ar: 'و' }, { de: 'oder', en: 'or', ar: 'أو' }], correctAnswerIndex: 1 },
            { id: 'q9-2-2', type: 'fill-in-the-blank', questionText: { de: 'Die Konjunktion für "aber" ist ___.', en: 'The conjunction for "but" is ___.', ar: 'أداة الربط لـ "لكن" هي ___.' }, correctAnswer: 'ⲁⲗⲗⲁ' },
            { id: 'q9-2-3', type: 'multiple-choice', questionText: { de: 'Welches Wort bedeutet "dass" oder "weil"?', en: 'Which word means "that" or "because"?', ar: 'أي كلمة تعني "أن" أو "لأن"؟' }, options: [{ de: 'ϫⲉ', en: 'je', ar: 'جي' }, { de: 'ⲏ', en: 'e', ar: 'إي' }], correctAnswerIndex: 0 },
        ]
    },
    'q10-1': { id: 'q10-1', lessonId: 'l10-1', title: { de: 'Test: Begrüßungen', en: 'Quiz: Greetings', ar: 'اختبار: التحيات' }, passScore: 80, questions: [ { id: 'q10-1-1', type: 'multiple-choice', questionText: { de: 'Wie sagt man "Hallo" auf Koptisch?', en: 'How do you say "Hello" in Coptic?', ar: 'كيف تقول "مرحباً" بالقبطية؟' }, options: [ { de: 'ⲛⲟϥⲣⲓ', en: 'nofri', ar: 'نوفري' }, { de: 'ⲥ̀ⲙⲟⲩ', en: 'smou', ar: 'سمو' } ], correctAnswerIndex: 0 }, { id: 'q10-1-2', type: 'fill-in-the-blank', questionText: { de: 'Die Antwort auf "Geh in Frieden!" ist "Und mit deinem ___".', en: 'The response to "Go in peace!" is "And with your ___".', ar: 'الرد على "اذهب بسلام!" هو "ومع ___ أيضًا".' }, correctAnswer: 'Geiste' }, { id: 'q10-1-3', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲁϣ ⲡⲉ ⲡⲉⲕⲣⲁⲛ"?', en: 'What does "ⲁϣ ⲡⲉ ⲡⲉⲕⲣⲁⲛ" mean?', ar: 'ما معنى "ⲁϣ ⲡⲉ ⲡⲉⲕⲣⲁⲛ"؟' }, options: [{de: 'Wie geht es dir?', en: 'How are you?', ar: 'كيف حالك؟'}, {de: 'Wie ist dein Name?', en: 'What is your name?', ar: 'ما اسمك؟'}], correctAnswerIndex: 1 }, { id: 'q10-1-4', type: 'fill-in-the-blank', questionText: { de: 'Die koptische Phrase für "Geh in Frieden" ist ⲟⲩϫⲁⲓ ϧⲉⲛ ___.', en: 'The Coptic phrase for "Go in peace" is ⲟⲩϫⲁⲓ ϧⲉⲛ ___.', ar: 'العبارة القبطية لـ "اذهب بسلام" هي ⲟⲩϫⲁⲓ ϧⲉⲛ ___.' }, correctAnswer: 'Ⲡ̀ϭⲟⲓⲥ' }, { id: 'q10-1-5', type: 'multiple-choice', questionText: { de: 'Was antwortet man auf "Hallo"?', en: 'What is the response to "Hello"?', ar: 'ما هو الرد على "مرحباً"؟' }, options: [{de: 'ⲛⲟϥⲣⲓ', en: 'nofri', ar: 'نوفري'}, {de: 'ⲟⲩϫⲁⲓ', en: 'oujai', ar: 'أوجاي'}], correctAnswerIndex: 0 }, ] },
    'q11-1': { id: 'q11-1', lessonId: 'l11-1', title: { de: 'Test: In der Kirche', en: 'Quiz: In the Church', ar: 'اختبار: في الكنيسة' }, passScore: 80, questions: [ { id: 'q11-1-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲉⲕⲕⲗⲏⲥⲓⲁ"?', en: 'What does "ⲉⲕⲕⲗⲏⲥⲓⲁ" mean?', ar: 'ما معنى "ⲉⲕⲕⲗⲏⲥⲓⲁ"؟' }, options: [{de: 'Haus', en: 'House', ar: 'بيت'}, {de: 'Schule', en: 'School', ar: 'مدرسة'}, {de: 'Kirche', en: 'Church', ar: 'كنيسة'}], correctAnswerIndex: 2 }, { id: 'q11-1-2', type: 'fill-in-the-blank', questionText: { de: 'Ein Priester auf Koptisch ist ___.', en: 'A priest in Coptic is ___.', ar: 'الكاهن بالقبطية هو ___.' }, correctAnswer: 'ⲟⲩⲏⲃ' }, { id: 'q11-1-3', type: 'multiple-choice', questionText: { de: 'Was ist ein "ⲯⲁⲗⲙⲟⲥ"?', en: 'What is a "ⲯⲁⲗⲙⲟⲥ"?', ar: 'ما هو "ⲯⲁⲗⲙⲟⲥ"؟' }, options: [{de: 'Psalm', en: 'Psalm', ar: 'مزمور'}, {de: 'Lied', en: 'Song', ar: 'أغنية'}, {de: 'Gebet', en: 'Prayer', ar: 'صلاة'}], correctAnswerIndex: 0 }, { id: 'q11-1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲉⲩⲭⲏ"?', en: 'What does "ⲉⲩⲭⲏ" mean?', ar: 'ما معنى "ⲉⲩⲭⲏ"؟' }, options: [{de: 'Gebet', en: 'Prayer', ar: 'صلاة'}, {de: 'Glaube', en: 'Faith', ar: 'إيمان'}, {de: 'Hoffnung', en: 'Hope', ar: 'رجاء'}], correctAnswerIndex: 0 }, { id: 'q11-1-5', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ϯϣ̀ⲗⲏⲗ ϧⲉⲛ ___ (Ich bete in der Kirche)', en: 'Complete: ϯϣ̀ⲗⲏⲗ ϧⲉⲛ ___ (I pray in the church)', ar: 'أكمل: ϯϣ̀ⲗⲏⲗ ϧⲉⲛ ___ (أصلي في الكنيسة)' }, correctAnswer: 'ⲧ̀ⲉⲕⲕⲗⲏⲥⲓⲁ' }, { id: 'q11-1-6', type: 'multiple-choice', questionText: { de: 'Das koptische Wort für "Weihrauch" ist...', en: 'The Coptic word for "incense" is...', ar: 'الكلمة القبطية لـ "بخور" هي...' }, options: [{de: 'ⲥ̀ⲧⲟⲓⲛⲟⲩϥⲓ', en: 'stoinoufi', ar: 'اشتينوفي'}, {de: 'ⲇⲓⲁⲕⲱⲛ', en: 'diakon', ar: 'دياكون'}], correctAnswerIndex: 0 }, ] },
    'q12-1': { id: 'q12-1', lessonId: 'l12-1', title: { de: 'Test: Familie', en: 'Quiz: Family', ar: 'اختبار: العائلة' }, passScore: 80, questions: [ { id: 'q12-1-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲓⲱⲧ"?', en: 'What does "ⲓⲱⲧ" mean?', ar: 'ما معنى "ⲓⲱⲧ"؟' }, options: [{de: 'Bruder', en: 'Brother', ar: 'أخ'}, {de: 'Vater', en: 'Father', ar: 'أب'}, {de: 'Sohn', en: 'Son', ar: 'ابن'}], correctAnswerIndex: 1 }, { id: 'q12-1-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "Mutter" ist ___.', en: 'The Coptic word for "mother" is ___.', ar: 'الكلمة القبطية لـ "أم" هي ___.' }, correctAnswer: 'ⲙⲁⲁⲩ' }, { id: 'q12-1-3', type: 'multiple-choice', questionText: { de: 'Was ist ein "ⲥⲟⲛ"?', en: 'What is a "ⲥⲟⲛ"?', ar: 'ما هو "ⲥⲟⲛ"؟' }, options: [{de: 'Schwester', en: 'Sister', ar: 'أخت'}, {de: 'Vater', en: 'Father', ar: 'أب'}, {de: 'Bruder', en: 'Brother', ar: 'أخ'}], correctAnswerIndex: 2 }, { id: 'q12-1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ϣⲉⲉⲣⲓ"?', en: 'What does "ϣⲉⲉⲣⲓ" mean?', ar: 'ما معنى "ϣⲉⲉⲣⲓ"؟' }, options: [{de: 'Mutter', en: 'Mother', ar: 'أم'}, {de: 'Schwester', en: 'Sister', ar: 'أخت'}, {de: 'Tochter', en: 'Daughter', ar: 'ابنة'}], correctAnswerIndex: 2 }, { id: 'q12-1-5', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ⲡⲁⲓⲱⲧ ⲛⲉⲙ ___ (mein Vater und meine Mutter)', en: 'Complete: ⲡⲁⲓⲱⲧ ⲛⲉⲙ ___ (my father and my mother)', ar: 'أكمل: ⲡⲁⲓⲱⲧ ⲛⲉⲙ ___ (أبي وأمي)' }, correctAnswer: 'ⲧⲁⲙⲁⲁⲩ' }, { id: 'q12-1-6', type: 'multiple-choice', questionText: { de: 'Das Wort für "Ehemann" ist...', en: 'The word for "husband" is...', ar: 'كلمة "زوج" هي...' }, options: [{de: 'ϩⲁⲓ', en: 'hai', ar: 'هاي'}, {de: 'ϩⲓⲙⲓ', en: 'himi', ar: 'هيمي'}], correctAnswerIndex: 0 }, ] },
    'q13-1': { id: 'q13-1', lessonId: 'l13-1', title: { de: 'Test: Johannes 3:16', en: 'Quiz: John 3:16', ar: 'اختبار: يوحنا 3: 16' }, passScore: 80, questions: [ { id: 'q13-1-1', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ⲁ̀ⲫⲛⲟⲩϯ ⲙⲉⲓ ⲙ̀ⲡⲓ___', en: 'Complete: ⲁ̀ⲫⲛⲟⲩϯ ⲙⲉⲓ ⲙ̀ⲡⲓ___', ar: 'أكمل: ⲁ̀ⲫⲛⲟⲩϯ ⲙⲉⲓ ⲙ̀ⲡⲓ___' }, correctAnswer: 'ⲕⲟⲥⲙⲟⲥ' }, { id: 'q13-1-2', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲡ̀ⲕⲟⲥⲙⲟⲥ"?', en: 'What does "ⲡ̀ⲕⲟⲥⲙⲟⲥ" mean?', ar: 'ما معنى "ⲡ̀ⲕⲟⲥⲙⲟⲥ"؟' }, options: [{de: 'Himmel', en: 'heaven', ar: 'السماء'}, {de: 'Welt', en: 'world', ar: 'العالم'}, {de: 'Mensch', en: 'man', ar: 'الإنسان'}], correctAnswerIndex: 1 }, { id: 'q13-1-3', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ⲡⲉϥϣⲏⲣⲓ ⲙ̀___ ⲁϥⲧⲏⲓϥ', en: 'Complete: ⲡⲉϥϣⲏⲣⲓ ⲙ̀___ ⲁϥⲧⲏⲓϥ', ar: 'أكمل: ⲡⲉϥϣⲏⲣⲓ ⲙ̀___ ⲁϥⲧⲏⲓϥ' }, correctAnswer: 'ⲙⲁⲩⲁⲧϥ' }, { id: 'q13-1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲡⲉϥϣⲏⲣⲓ"?', en: 'What does "ⲡⲉϥϣⲏⲣⲓ" mean?', ar: 'ما معنى "ⲡⲉϥϣⲏⲣⲓ"؟' }, options: [{de: 'sein Sohn', en: 'his Son', ar: 'ابنه'}, {de: 'sein Vater', en: 'his Father', ar: 'أبوه'}, {de: 'sein Bruder', en: 'his Brother', ar: 'أخوه'}], correctAnswerIndex: 0 }, { id: 'q13-1-5', type: 'multiple-choice', questionText: { de: 'Was erhält man durch den Glauben?', en: 'What does one receive through faith?', ar: 'ماذا ينال الإنسان بالإيمان؟' }, options: [{de: 'Reichtum', en: 'riches', ar: 'الغنى'}, {de: 'ewiges Leben', en: 'eternal life', ar: 'الحياة الأبدية'}, {de: 'Macht', en: 'power', ar: 'السلطة'}], correctAnswerIndex: 1 }, ] },
    'q14-1': { id: 'q14-1', lessonId: 'l14-1', title: { de: 'Test: Liturgie', en: 'Quiz: Liturgy', ar: 'اختبار: القداس' }, passScore: 80, questions: [ { id: 'q14-1-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲧ̀ϩⲓⲣⲏⲛⲏ"?', en: 'What does "ⲧ̀ϩⲓⲣⲏⲛⲏ" mean?', ar: 'ما معنى "ⲧ̀ϩⲓⲣⲏⲛⲏ"؟' }, options: [{de: 'Liebe', en: 'Love', ar: 'محبة'}, {de: 'Friede', en: 'Peace', ar: 'سلام'}, {de: 'Glaube', en: 'Faith', ar: 'إيمان'}], correctAnswerIndex: 1 }, { id: 'q14-1-2', type: 'fill-in-the-blank', questionText: { de: 'Der Priester sagt: "Friede sei mit euch ___".', en: 'The priest says: "Peace be with you ___".', ar: 'يقول الكاهن: "السلام لـ ___".' }, correctAnswer: 'allen' }, { id: 'q14-1-3', type: 'multiple-choice', questionText: { de: 'Wie antwortet die Gemeinde?', en: 'How does the congregation respond?', ar: 'بماذا يرد الشعب؟' }, options: [{de: 'ⲕⲉ ⲧⲱ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ', en: 'ke to pneumati sou', ar: 'كي تو بنفماتي سو'}, {de: 'ⲁ̀ⲙⲏⲛ', en: 'amen', ar: 'آمين'}], correctAnswerIndex: 0 }, { id: 'q14-1-4', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲡ̀ⲛⲉⲩⲙⲁ"?', en: 'What does "ⲡ̀ⲛⲉⲩⲙⲁ" mean?', ar: 'ما معنى "ⲡ̀ⲛⲉⲩⲙⲁ"؟' }, options: [{de: 'Körper', en: 'Body', ar: 'جسد'}, {de: 'Seele', en: 'Soul', ar: 'نفس'}, {de: 'Geist', en: 'Spirit', ar: 'روح'}], correctAnswerIndex: 2 }, { id: 'q14-1-5', type: 'fill-in-the-blank', questionText: { de: 'Der Friedensgruß ist auch bekannt als die "___ des Friedens".', en: 'The peace greeting is also known as the "___ of peace".', ar: 'تحية السلام تعرف أيضًا بـ "___ السلام".' }, correctAnswer: 'Kuss' }, ] },
    'q15-1': {
        id: 'q15-1', lessonId: 'l15-1', title: { de: 'Test: Das Vaterunser', en: 'Quiz: The Lord\'s Prayer', ar: 'اختبار: الصلاة الربانية' }, passScore: 80,
        questions: [
            { id: 'q15-1-1', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: Πενιωτ εⲧϧⲉⲛ ___', en: 'Complete: Πενιωτ εⲧϧⲉⲛ ___', ar: 'أكمل: Πενιωτ εⲧϧⲉⲛ ___' }, correctAnswer: 'ⲛⲓⲫⲏⲟⲩⲓ' },
            { id: 'q15-1-2', type: 'multiple-choice', questionText: { de: 'Was bedeutet "Πενιωτ"?', en: 'What does "Πενιωτ" mean?', ar: 'ما معنى "Πενιωτ"؟' }, options: [{ de: 'Mein Vater', en: 'My Father', ar: 'أبي' }, { de: 'Unser Vater', en: 'Our Father', ar: 'أبانا' }, { de: 'Dein Vater', en: 'Your Father', ar: 'أبوك' }], correctAnswerIndex: 1 },
            { id: 'q15-1-3', type: 'multiple-choice', questionText: { de: 'Wo ist unser Vater laut dem Gebet?', en: 'Where is our Father according to the prayer?', ar: 'أين أبونا حسب الصلاة؟' }, options: [{ de: 'Auf Erden', en: 'On Earth', ar: 'على الأرض' }, { de: 'Im Himmel', en: 'In heaven', ar: 'في السماء' }], correctAnswerIndex: 1 },
            { id: 'q15-1-4', type: 'fill-in-the-blank', questionText: { de: 'Vervollständige: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕ___', en: 'Complete: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕ___', ar: 'أكمل: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕ___' }, correctAnswer: 'ⲣⲁⲛ' },
            { id: 'q15-1-5', type: 'multiple-choice', questionText: { de: 'Was soll kommen?', en: 'What should come?', ar: 'ماذا يجب أن يأتي؟' }, options: [{ de: 'Dein Reich', en: 'Your kingdom', ar: 'ملكوتك' }, { de: 'Dein Brot', en: 'Your bread', ar: 'خبزك' }], correctAnswerIndex: 0 },
        ]
    },
     'q16-1': {
        id: 'q16-1', lessonId: 'l16-1', title: { de: 'Test: Farben', en: 'Quiz: Colors', ar: 'اختبار: الألوان' }, passScore: 80,
        questions: [
            { id: 'q16-1-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲕⲁⲙⲉ"?', en: 'What does "ⲕⲁⲙⲉ" mean?', ar: 'ما معنى "ⲕⲁⲙⲉ"؟' }, options: [{ de: 'weiß', en: 'white', ar: 'أبيض' }, { de: 'schwarz', en: 'black', ar: 'أسود' }, { de: 'rot', en: 'red', ar: 'أحمر' }], correctAnswerIndex: 1 },
            { id: 'q16-1-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "weiß" ist ___.', en: 'The Coptic word for "white" is ___.', ar: 'الكلمة القبطية لـ "أبيض" هي ___.' }, correctAnswer: 'ⲟⲩⲟⲃϣ' },
            { id: 'q16-1-3', type: 'multiple-choice', questionText: { de: 'Welche Farbe ist "ⲭⲗⲱⲣⲟⲥ"?', en: 'Which color is "ⲭⲗⲱⲣⲟⲥ"?', ar: 'أي لون هو "ⲭⲗⲱⲣⲟⲥ"؟' }, options: [{ de: 'blau', en: 'blue', ar: 'أزرق' }, { de: 'rot', en: 'red', ar: 'أحمر' }, { de: 'grün', en: 'green', ar: 'أخضر' }], correctAnswerIndex: 2 },
        ]
    },
    'q16-2': {
        id: 'q16-2', lessonId: 'l16-2', title: { de: 'Test: Tiere', en: 'Quiz: Animals', ar: 'اختبار: الحيوانات' }, passScore: 80,
        questions: [
            { id: 'q16-2-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲟⲩϩⲟⲣ"?', en: 'What does "ⲟⲩϩⲟⲣ" mean?', ar: 'ما معنى "ⲟⲩϩⲟⲣ"؟' }, options: [{ de: 'Katze', en: 'cat', ar: 'قطة' }, { de: 'Hund', en: 'dog', ar: 'كلب' }, { de: 'Pferd', en: 'horse', ar: 'حصان' }], correctAnswerIndex: 1 },
            { id: 'q16-2-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "Schaf" ist ___.', en: 'The Coptic word for "sheep" is ___.', ar: 'الكلمة القبطية لـ "خروف" هي ___.' }, correctAnswer: 'ⲉⲥⲱⲟⲩ' },
            { id: 'q16-2-3', type: 'multiple-choice', questionText: { de: 'Welches Tier ist "ϩⲁⲗⲁⲧ"?', en: 'Which animal is "ϩⲁⲗⲁⲧ"?', ar: 'أي حيوان هو "ϩⲁⲗⲁⲧ"؟' }, options: [{ de: 'Vogel', en: 'bird', ar: 'طائر' }, { de: 'Fisch', en: 'fish', ar: 'سمكة' }, { de: 'Löwe', en: 'lion', ar: 'أسد' }], correctAnswerIndex: 0 },
        ]
    },
    'q17-1': {
        id: 'q17-1', lessonId: 'l17-1', title: { de: 'Test: Lebensmittel', en: 'Quiz: Food', ar: 'اختبار: الطعام' }, passScore: 80,
        questions: [
            { id: 'q17-1-1', type: 'multiple-choice', questionText: { de: 'Was bedeutet "ⲱⲓⲕ"?', en: 'What does "ⲱⲓⲕ" mean?', ar: 'ما معنى "ⲱⲓⲕ"؟' }, options: [{ de: 'Wasser', en: 'water', ar: 'ماء' }, { de: 'Brot', en: 'bread', ar: 'خبز' }, { de: 'Wein', en: 'wine', ar: 'خمر' }], correctAnswerIndex: 1 },
            { id: 'q17-1-2', type: 'fill-in-the-blank', questionText: { de: 'Das koptische Wort für "Wasser" ist ___.', en: 'The Coptic word for "water" is ___.', ar: 'الكلمة القبطية لـ "ماء" هي ___.' }, correctAnswer: 'ⲙⲱⲟⲩ' },
            { id: 'q17-1-3', type: 'multiple-choice', questionText: { de: 'Was ist "ⲉⲃⲓⲱ"?', en: 'What is "ⲉⲃⲓⲱ"?', ar: 'ما هو "ⲉⲃⲓⲱ"؟' }, options: [{ de: 'Öl', en: 'oil', ar: 'زيت' }, { de: 'Salz', en: 'salt', ar: 'ملح' }, { de: 'Honig', en: 'honey', ar: 'عسل' }], correctAnswerIndex: 2 },
        ]
    }
};

export const MODULES: Record<string, Module> = {
    'm1': { id: 'm1', order: 1, title: { de: 'Modul 1: Das Koptische Alphabet', en: 'Module 1: The Coptic Alphabet', ar: 'الوحدة 1: الأبجدية القبطية' }, lessons: ['l1-1', 'l1-2', 'l2-1', 'l2-2', 'l2-3', 'l2-4', 'l2-5', 'l2-6'] },
    'm2': { id: 'm2', order: 2, title: { de: 'Modul 2: Grundlagen', en: 'Module 2: Basics', ar: 'الوحدة 2: الأساسيات' }, lessons: ['m2-l1', 'm2-l2'] },
    'm3': { id: 'm3', order: 3, title: { de: 'Modul 3: Artikel & Besitz', en: 'Module 3: Articles & Possession', ar: 'الوحدة 3: الأدوات والملكية' }, lessons: ['l3-1', 'l3-2', 'l3-3', 'l3-4'] },
    'm4': { id: 'm4', order: 4, title: { de: 'Modul 4: Verben', en: 'Module 4: Verbs', ar: 'الوحدة 4: الأفعال' }, lessons: ['l5-1', 'l5-2', 'l5-3'] },
    'm5': { id: 'm5', order: 5, title: { de: 'Modul 5: Pronomen', en: 'Module 5: Pronouns', ar: 'الوحدة 5: الضمائر' }, lessons: ['l6-1', 'l6-2', 'l6-3'] },
    'm6': { id: 'm6', order: 6, title: { de: 'Modul 6: Adjektive', en: 'Module 6: Adjectives', ar: 'الوحدة 6: الصفات' }, lessons: ['l7-1'] },
    'm7': { id: 'm7', order: 7, title: { de: 'Modul 7: Präpositionen', en: 'Module 7: Prepositions', ar: 'الوحدة 7: حروف الجر' }, lessons: ['l8-1', 'l8-2'] },
    'm8': { id: 'm8', order: 8, title: { de: 'Modul 8: Satzbau', en: 'Module 8: Sentence Structure', ar: 'الوحدة 8: تركيب الجمل' }, lessons: ['l9-1', 'l9-2'] },
    'm9': { id: 'm9', order: 9, title: { de: 'Modul 9: Konversation I', en: 'Module 9: Conversation I', ar: 'الوحدة 9: المحادثة 1' }, lessons: ['l10-1'] },
    'm10': { id: 'm10', order: 10, title: { de: 'Modul 10: Wortschatz I - Kirche', en: 'Module 10: Vocabulary I - Church', ar: 'الوحدة 10: مفردات 1 - الكنيسة' }, lessons: ['l11-1'] },
    'm11': { id: 'm11', order: 11, title: { de: 'Modul 11: Wortschatz II - Familie', en: 'Module 11: Vocabulary II - Family', ar: 'الوحدة 11: مفردات 2 - العائلة' }, lessons: ['l12-1'] },
    'm12': { id: 'm12', order: 12, title: { de: 'Modul 12: Bibelverse', en: 'Module 12: Bible Verses', ar: 'الوحدة 12: آيات من الكتاب المقدس' }, lessons: ['l13-1'] },
    'm13': { id: 'm13', order: 13, title: { de: 'Modul 13: Konversation II - Liturgie', en: 'Module 13: Conversation II - Liturgy', ar: 'الوحدة 13: محادثة 2 - القداس' }, lessons: ['l14-1'] },
    'm14': { id: 'm14', order: 14, title: { de: 'Modul 14: Gebete', en: 'Module 14: Prayers', ar: 'الوحدة 14: الصلوات' }, lessons: ['l15-1'] },
    'm15': { id: 'm15', order: 15, title: { de: 'Modul 15: Wortschatz III', en: 'Module 15: Vocabulary III', ar: 'الوحدة 15: مفردات 3' }, lessons: ['l16-1', 'l16-2'] },
    'm16': { id: 'm16', order: 16, title: { de: 'Modul 16: Wortschatz IV', en: 'Module 16: Vocabulary IV', ar: 'الوحدة 16: مفردات 4' }, lessons: ['l17-1'] }
};