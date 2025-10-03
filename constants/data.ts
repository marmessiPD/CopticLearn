import { Letter, Module, Lesson, Level, AlphabetSlide, Quiz, QuizQuestion, LessonType, QuizQuestionType, VocabItem, SentenceItem } from '../types';

export const LETTERS: Record<string, Letter> = {
    'lt_alpha': { id: 'lt_alpha', name: { de: 'Alpha', en: 'Alpha', ar: 'ألفا' }, uppercase: 'Ⲁ', lowercase: 'ⲁ', pronunciation: { de: '"A" wie in "Apfel"', en: '"A" as in "father"', ar: '"أ" كما في "أب"' }, numeric: 1, exampleWord: { coptic: 'ⲁⲃⲃⲁ', translit: 'abba', meaning: { de: 'Vater', en: 'Father', ar: 'أب' } } },
    'lt_vida': { id: 'lt_vida', name: { de: 'Vida', en: 'Vida', ar: 'ڤيتا' }, uppercase: 'Ⲃ', lowercase: 'ⲃ', pronunciation: { de: '"W" oder "B"', en: '"V" or "B"', ar: '"ڤ" أو "ب"' }, numeric: 2, exampleWord: { coptic: 'ⲃⲁⲗ', translit: 'bal', meaning: { de: 'Auge', en: 'Eye', ar: 'عين' } } },
    'lt_ghamma': { id: 'lt_ghamma', name: { de: 'Ghamma', en: 'Ghamma', ar: 'غما' }, uppercase: 'Ⲅ', lowercase: 'ⲅ', pronunciation: { de: '"G", "N", oder "Gh"', en: '"G", "N", or "Gh"', ar: '"ج" أو "ن" أو "غ"' }, numeric: 3, exampleWord: { coptic: 'ⲅⲉ', translit: 'ge', meaning: { de: 'Ja', en: 'Yes', ar: 'نعم' } } },
    'lt_dalda': { id: 'lt_dalda', name: { de: 'Dalda', en: 'Dalda', ar: 'دالدا' }, uppercase: 'Ⲇ', lowercase: 'ⲇ', pronunciation: { de: '"D" wie in "David"', en: '"D" as in "David"', ar: '"د" كما في "داود"' }, numeric: 4, exampleWord: { coptic: 'Ⲇⲁⲩⲓⲇ', translit: 'David', meaning: { de: 'David', en: 'David', ar: 'داود' } } },
    'lt_ei': { id: 'lt_ei', name: { de: 'Ei', en: 'Ei', ar: 'إي' }, uppercase: 'Ⲉ', lowercase: 'ⲉ', pronunciation: { de: 'Kurzes "E"', en: 'Short "e" as in "bet"', ar: '"إ" مكسورة' }, numeric: 5, exampleWord: { coptic: 'Ⲉⲃⲟⲗ', translit: 'ebol', meaning: { de: 'Aus', en: 'Out of', ar: 'من' } } },
    'lt_so': { id: 'lt_so', name: { de: 'So', en: 'So', ar: 'سو' }, uppercase: 'Ⲋ', lowercase: 'ⲋ', pronunciation: { de: 'Kein Laut', en: 'No sound', ar: 'لا يوجد صوت' }, numeric: 6, exampleWord: { coptic: '', translit: '', meaning: { de: 'Nur Zahl', en: 'Number only', ar: 'رقم فقط' } } },
    'lt_zita': { id: 'lt_zita', name: { de: 'Zita', en: 'Zita', ar: 'زيتا' }, uppercase: 'Ⲍ', lowercase: 'ⲍ', pronunciation: { de: 'Stimmhaftes "S"', en: '"Z" as in "zoo"', ar: '"ز" كما في "زرافة"' }, numeric: 7, exampleWord: { coptic: 'Ⲍⲱⲛ', translit: 'zōn', meaning: { de: 'Gürtel', en: 'Belt', ar: 'حزام' } } },
    'lt_hita': { id: 'lt_hita', name: { de: 'Hita', en: 'Hita', ar: 'هيتا' }, uppercase: 'Ⲏ', lowercase: 'ⲏ', pronunciation: { de: 'Langes "Ie"', en: 'Long "ee" as in "see"', ar: '"إي" طويلة' }, numeric: 8, exampleWord: { coptic: 'Ⲏⲗⲓⲁⲥ', translit: 'Ēlias', meaning: { de: 'Elias', en: 'Elias', ar: 'إلياس' } } },
    'lt_thita': { id: 'lt_thita', name: { de: 'Thita', en: 'Thita', ar: 'ثيتا' }, uppercase: 'Ⲑ', lowercase: 'ⲑ', pronunciation: { de: '"T" oder "Th"', en: '"T" or "Th"', ar: '"ت" أو "ث"' }, numeric: 9, exampleWord: { coptic: 'Ⲑⲉⲗⲏⲙⲁ', translit: 'thelēma', meaning: { de: 'Wille', en: 'Will', ar: 'إرادة' } } },
    'lt_iauda': { id: 'lt_iauda', name: { de: 'Iauda', en: 'Iauda', ar: 'يودا' }, uppercase: 'Ⲓ', lowercase: 'ⲓ', pronunciation: { de: '"I" oder "J"', en: '"I" or "Y"', ar: '"ي" كما في "يد"' }, numeric: 10, exampleWord: { coptic: 'Ⲓⲏⲥⲟⲩⲥ', translit: 'Iēsous', meaning: { de: 'Jesus', en: 'Jesus', ar: 'يسوع' } } },
    'lt_kapa': { id: 'lt_kapa', name: { de: 'Kapa', en: 'Kapa', ar: 'كپا' }, uppercase: 'Ⲕ', lowercase: 'ⲕ', pronunciation: { de: '"K" wie in "König"', en: '"K" as in "king"', ar: '"ك" كما في "كنيسة"' }, numeric: 20, exampleWord: { coptic: 'Ⲕⲩⲣⲓⲟⲥ', translit: 'Kyrios', meaning: { de: 'Herr', en: 'Lord', ar: 'الرب' } } },
    'lt_laula': { id: 'lt_laula', name: { de: 'Laula', en: 'Laula', ar: 'لولا' }, uppercase: 'Ⲗ', lowercase: 'ⲗ', pronunciation: { de: '"L" wie in "Licht"', en: '"L" as in "light"', ar: '"ل" كما في "لمبة"' }, numeric: 30, exampleWord: { coptic: 'Ⲗⲁⲟⲥ', translit: 'laos', meaning: { de: 'Volk', en: 'People', ar: 'شعب' } } },
    'lt_mi': { id: 'lt_mi', name: { de: 'Mi', en: 'Mi', ar: 'مي' }, uppercase: 'Ⲙ', lowercase: 'ⲙ', pronunciation: { de: '"M" wie in "Mutter"', en: '"M" as in "mother"', ar: '"م" كما في "مريم"' }, numeric: 40, exampleWord: { coptic: 'Ⲙⲁⲣⲓⲁ', translit: 'Maria', meaning: { de: 'Maria', en: 'Mary', ar: 'مريم' } } },
    'lt_ni': { id: 'lt_ni', name: { de: 'Ni', en: 'Ni', ar: 'ني' }, uppercase: 'Ⲛ', lowercase: 'ⲛ', pronunciation: { de: '"N" wie in "Nase"', en: '"N" as in "nose"', ar: '"ن" كما في "نور"' }, numeric: 50, exampleWord: { coptic: 'Ⲛⲟⲩⲧⲉ', translit: 'noute', meaning: { de: 'Gott', en: 'God', ar: 'الله' } } },
    'lt_xi': { id: 'lt_xi', name: { de: 'Xi', en: 'Xi', ar: 'كسي' }, uppercase: 'Ⲝ', lowercase: 'ⲝ', pronunciation: { de: '"Ks" wie in "Axt"', en: '"Ks" as in "axe"', ar: '"كس" كما في "أكسجين"' }, numeric: 60, exampleWord: { coptic: 'Ⲝⲩⲗⲟⲛ', translit: 'xylon', meaning: { de: 'Holz', en: 'Wood', ar: 'خشب' } } },
    'lt_o': { id: 'lt_o', name: { de: 'O', en: 'O', ar: 'أو' }, uppercase: 'Ⲟ', lowercase: 'ⲟ', pronunciation: { de: 'Kurzes "O"', en: 'Short "o" as in "lot"', ar: '"أو" قصيرة' }, numeric: 70, exampleWord: { coptic: 'Ⲟⲛ', translit: 'on', meaning: { de: 'Wahrlich', en: 'Truly', ar: 'حقاً' } } },
    'lt_pi': { id: 'lt_pi', name: { de: 'Pi', en: 'Pi', ar: 'پي' }, uppercase: 'Ⲡ', lowercase: 'ⲡ', pronunciation: { de: '"P" wie in "Papa"', en: '"P" as in "paper"', ar: '"ب" كما في "بابا"' }, numeric: 80, exampleWord: { coptic: 'Ⲡⲛⲉⲩⲙⲁ', translit: 'pneuma', meaning: { de: 'Geist', en: 'Spirit', ar: 'روح' } } },
    'lt_ro': { id: 'lt_ro', name: { de: 'Ro', en: 'Ro', ar: 'رو' }, uppercase: 'Ⲣ', lowercase: 'ⲣ', pronunciation: { de: '"R" wie in "Rose"', en: '"R" as in "rose"', ar: '"ر" كما في "رب"' }, numeric: 100, exampleWord: { coptic: 'Ⲣⲱⲙⲉ', translit: 'rōme', meaning: { de: 'Mensch', en: 'Man', ar: 'إنسان' } } },
    'lt_sima': { id: 'lt_sima', name: { de: 'Sima', en: 'Sima', ar: 'سيما' }, uppercase: 'Ⲥ', lowercase: 'ⲥ', pronunciation: { de: '"S" wie in "Sonne"', en: '"S" as in "sun"', ar: '"س" كما في "سماء"' }, numeric: 200, exampleWord: { coptic: 'Ⲥⲱⲧⲏⲣ', translit: 'sōtēr', meaning: { de: 'Retter', en: 'Savior', ar: 'مخلص' } } },
    'lt_tau': { id: 'lt_tau', name: { de: 'Tau', en: 'Tau', ar: 'تاڤ' }, uppercase: 'Ⲧ', lowercase: 'ⲧ', pronunciation: { de: '"T" oder "D"', en: '"T" or "D"', ar: '"ت" أو "د"' }, numeric: 300, exampleWord: { coptic: 'Ⲧⲉⲛⲟⲩⲱϣⲧ', translit: 'tenuosht', meaning: { de: 'Wir beten an', en: 'We worship', ar: 'نسجد' } } },
    'lt_epsilon': { id: 'lt_epsilon', name: { de: 'Epsilon', en: 'Epsilon', ar: 'إپسيلون' }, uppercase: 'Ⲩ', lowercase: 'ⲩ', pronunciation: { de: '"U", "W", oder "I"', en: '"U", "V", or "I"', ar: '"أو" أو "ڤ" أو "ي"' }, numeric: 400, exampleWord: { coptic: 'Ⲩⲓⲟⲥ', translit: 'yios', meaning: { de: 'Sohn', en: 'Son', ar: 'ابن' } } },
    'lt_phi': { id: 'lt_phi', name: { de: 'Phi', en: 'Phi', ar: 'في' }, uppercase: 'Ⲫ', lowercase: 'ⲫ', pronunciation: { de: '"F" wie in "Vater"', en: '"F" as in "father"', ar: '"ف" كما في "فيل"' }, numeric: 500, exampleWord: { coptic: 'Ⲫⲱⲥ', translit: 'phōs', meaning: { de: 'Licht', en: 'Light', ar: 'نور' } } },
    'lt_chi': { id: 'lt_chi', name: { de: 'Chi', en: 'Chi', ar: 'كي' }, uppercase: 'Ⲭ', lowercase: 'ⲭ', pronunciation: { de: '"K" oder "Sch"', en: '"K" or "Sh"', ar: '"ك" أو "ش"' }, numeric: 600, exampleWord: { coptic: 'Ⲭⲣⲓⲥⲧⲟⲥ', translit: 'Christos', meaning: { de: 'Christus', en: 'Christ', ar: 'المسيح' } } },
    'lt_epsi': { id: 'lt_epsi', name: { de: 'Epsi', en: 'Epsi', ar: 'إپسي' }, uppercase: 'Ⲯ', lowercase: 'ⲯ', pronunciation: { de: '"Ps" wie in "Psalm"', en: '"Ps" as in "psychology"', ar: '"بس" كما في "بصلمودية"' }, numeric: 700, exampleWord: { coptic: 'Ⲯⲩⲭⲏ', translit: 'psychē', meaning: { de: 'Seele', en: 'Soul', ar: 'نفس' } } },
    'lt_omega': { id: 'lt_omega', name: { de: 'Omega', en: 'Omega', ar: 'أوميجا' }, uppercase: 'Ⲱ', lowercase: 'ⲱ', pronunciation: { de: 'Langes "O"', en: 'Long "o" as in "go"', ar: '"أو" طويلة' }, numeric: 800, exampleWord: { coptic: 'Ⲱⲛϩ', translit: 'onkh', meaning: { de: 'Leben', en: 'Life', ar: 'حياة' } } },
    'lt_shai': { id: 'lt_shai', name: { de: 'Shai', en: 'Shai', ar: 'شاي' }, uppercase: 'Ϣ', lowercase: 'ϣ', pronunciation: { de: '"Sch" wie in "Schule"', en: '"Sh" as in "school"', ar: '"ش" كما في "شمس"' }, numeric: 90, exampleWord: { coptic: 'Ϣⲁ', translit: 'sha', meaning: { de: 'Fest', en: 'Feast', ar: 'عيد' } } },
    'lt_fai': { id: 'lt_fai', name: { de: 'Fai', en: 'Fai', ar: 'فاي' }, uppercase: 'Ϥ', lowercase: 'ϥ', pronunciation: { de: '"F" wie in "Fest"', en: '"F" as in "feast"', ar: '"ف" كما في "فرح"' }, numeric: 90, exampleWord: { coptic: 'Ϥⲁⲓ', translit: 'fai', meaning: { de: 'Tragen', en: 'To carry', ar: 'يحمل' } } },
    'lt_khai': { id: 'lt_khai', name: { de: 'Khai', en: 'Khai', ar: 'خاي' }, uppercase: 'Ϧ', lowercase: 'ϧ', pronunciation: { de: '"Ch" wie in "Bach"', en: '"Kh" (like "ch" in "Bach")', ar: '"خ" كما في "خبز"' }, numeric: 90, exampleWord: { coptic: 'Ϧⲉⲛ', translit: 'khen', meaning: { de: 'In', en: 'In', ar: 'في' } } },
    'lt_hori': { id: 'lt_hori', name: { de: 'Hori', en: 'Hori', ar: 'هوري' }, uppercase: 'Ϩ', lowercase: 'ϩ', pronunciation: { de: '"H" wie in "Haus"', en: '"H" as in "house"', ar: '"هـ" كما في "هواء"' }, numeric: 90, exampleWord: { coptic: 'Ϩⲓⲥⲉ', translit: 'hise', meaning: { de: 'Mühe', en: 'Toil', ar: 'تعب' } } },
    'lt_gangia': { id: 'lt_gangia', name: { de: 'Gangia', en: 'Gangia', ar: 'جانجا' }, uppercase: 'Ϫ', lowercase: 'ϫ', pronunciation: { de: '"Dsch" wie in "Dschungel"', en: '"J" as in "jungle"', ar: '"ج" كما في "جمل"' }, numeric: 90, exampleWord: { coptic: 'Ϫⲟⲉⲓⲥ', translit: 'jois', meaning: { de: 'Herr', en: 'Lord', ar: 'الرب' } } },
    'lt_shima': { id: 'lt_shima', name: { de: 'Shima', en: 'Shima', ar: 'شيما' }, uppercase: 'Ϭ', lowercase: 'ϭ', pronunciation: { de: '"Tsch" wie in "Deutsch"', en: '"Ch" as in "church"', ar: '"تش"' }, numeric: 90, exampleWord: { coptic: 'Ϭⲁⲥⲓ', translit: 'chasi', meaning: { de: 'Hoch', en: 'High', ar: 'عال' } } },
    'lt_dei': { id: 'lt_dei', name: { de: 'Dei', en: 'Dei', ar: 'دي' }, uppercase: 'Ϯ', lowercase: 'ϯ', pronunciation: { de: '"Ti" wie in "Partitur"', en: '"Ti" as in "tiara"', ar: '"تي"' }, numeric: 90, exampleWord: { coptic: 'Ϯⲙⲉⲧⲣⲉ', translit: 'timetre', meaning: { de: 'Zeugnis', en: 'Witness', ar: 'شهادة' } } },
};

const spiritualContentData: Record<string, AlphabetSlide['spiritual']> = {
    'lt_alpha': {
        bibleVerse: { de: 'Ehre deinen Vater und deine Mutter, damit deine Tage verlängert werden in dem Land, das der Herr, dein Gott, dir gibt.', en: 'Honour thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee.', ar: 'أَكْرِمْ أَبَاكَ وَأُمَّكَ لِكَيْ تَطُولَ أَيَّامُكَ عَلَى الأَرْضِ الَّتِي يُعْطِيكَ الرَّبُّ إِلهُكَ.' },
        bibleReference: { de: '2. Mose 20:12 (Schlachter 2000)', en: 'Exodus 20:12 (KJV)', ar: 'الخروج ٢٠: ١٢' },
        fatherQuote: { de: 'Denn der Vater ist Vater und nicht Sohn; und der Sohn ist Sohn und nicht Vater.', en: 'For the Father is Father, and not a Son; and the Son is Son, and not a Father.', ar: 'لأن الآب هو آب وليس ابناً، والابن هو ابن وليس آباً.' },
        fatherReference: { de: 'Athanasius, 4 Reden gegen die Arianer', en: 'St. Athanasius, Four Discourses Against the Arians', ar: 'القديس أثناسيوس، المقالات الأربع ضد الآريوسيين' }
    },
    'lt_vida': {
        bibleVerse: { de: 'Die Leuchte des Leibes ist das Auge. Wenn nun dein Auge lauter ist, so wird dein ganzer Leib licht sein.', en: 'The light of the body is the eye: if therefore thine eye be single, thy whole body shall be full of light.', ar: 'سِرَاجُ الْجَسَدِ هُوَ الْعَيْنُ، فَإِنْ كَانَتْ عَيْنُكَ بَسِيطَةً فَجَسَدُكَ كُلُّهُ يَكُونُ نَيِّرًا.' },
        bibleReference: { de: 'Matthäus 6:22 (Schlachter 2000)', en: 'Matthew 6:22 (KJV)', ar: 'متى ٦: ٢٢' },
        fatherQuote: { de: 'Das Auge der Seele ist der Verstand, und wie das leibliche Auge, wenn es gesund ist, das Licht sieht, so sieht auch der Verstand, wenn er rein ist, Gott.', en: 'The eye of the soul is the mind, and as the eye of the body, when it is sound, sees the light, so the mind, when it is pure, beholds God.', ar: 'عين النفس هي العقل، وكما أن عين الجسد، متى كانت سليمة، ترى النور، هكذا العقل، متى كان نقيًا، يعاين الله.' },
        fatherReference: { de: 'St. Macarius der Große, Homilien', en: 'St. Macarius the Great, Homilies', ar: 'القديس مقاريوس الكبير، العظات' }
    },
    'lt_ghamma': {
        bibleVerse: { de: 'Euer Ja sei ein Ja, und euer Nein ein Nein; was darüber ist, das ist vom Bösen.', en: 'But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.', ar: 'بَلْ لِيَكُنْ كَلاَمُكُمْ: نَعَمْ نَعَمْ، لاَ لاَ. وَمَا زَادَ عَلَى ذلِكَ فَهُوَ مِنَ الشِّرِّيرِ.' },
        bibleReference: { de: 'Matthäus 5:37 (Schlachter 2000)', en: 'Matthew 5:37 (KJV)', ar: 'متى ٥: ٣٧' },
        fatherQuote: { de: 'Lasst uns zu Gott mit einem einfachen und wahren Ja Zuflucht nehmen, damit wir nicht unter das Urteil der Heuchelei fallen.', en: 'Let us flee to God with a simple and true yea, that we may not fall under the judgment of hypocrisy.', ar: 'لنهرب إلى الله بـ "نعم" بسيطة وصادقة، لئلا نسقط تحت دينونة الرياء.' },
        fatherReference: { de: 'St. Johannes Chrysostomus, Homilien zu Matthäus', en: 'St. John Chrysostom, Homilies on Matthew', ar: 'القديس يوحنا الذهبي الفم، عظات على إنجيل متى' }
    },
    'lt_dalda': {
        bibleVerse: { de: 'Denn David, nachdem er zu seiner Zeit dem Willen Gottes gedient hatte, ist entschlafen und wurde zu seinen Vätern versammelt.', en: 'For David, after he had served his own generation by the will of God, fell on sleep, and was laid unto his fathers.', ar: 'لأَنَّ دَاوُدَ، بَعْدَ مَا خَدَمَ جِيلَهُ بِمَشُورَةِ اللهِ، رَقَدَ وَانْضَمَّ إِلَى آبَائِهِ.' },
        bibleReference: { de: 'Apostelgeschichte 13:36 (Schlachter 2000)', en: 'Acts 13:36 (KJV)', ar: 'أعمال الرسل ١٣: ٣٦' },
        fatherQuote: { de: 'David ist ein Vorbild für den, der bereut. Obwohl er schwer sündigte, schrie sein Herz in wahrer Reue zu Gott, und ihm wurde vergeben.', en: 'David is a type of the one who repents. Though he sinned grievously, his heart cried out to God in true repentance and he was forgiven.', ar: 'داود هو مثال للتائب. رغم أنه أخطأ خطيئة عظيمة، إلا أن قلبه صرخ إلى الله بتوبة صادقة فنال المغفرة.' },
        fatherReference: { de: 'St. Athanasius, Brief an Marcellinus über die Psalmen', en: 'St. Athanasius, Letter to Marcellinus on the Psalms', ar: 'القديس أثناسيوس، رسالة إلى مرسلينوس في تفسير المزامير' }
    },
    'lt_ei': {
        bibleVerse: { de: 'Geht aus von ihnen und sondert euch ab, spricht der Herr, und rührt nichts Unreines an!', en: 'Wherefore come out from among them, and be ye separate, saith the Lord, and touch not the unclean thing.', ar: 'لِذلِكَ اخْرُجُوا مِنْ وَسْطِهِمْ وَاعْتَزِلُوا، يَقُولُ الرَّبُّ. وَلاَ تَمَسُّوا نَجِسًا.' },
        bibleReference: { de: '2. Korinther 6:17 (Schlachter 2000)', en: '2 Corinthians 6:17 (KJV)', ar: 'كورنثوس الثانية ٦: ١٧' },
        fatherQuote: { de: 'Wir kommen aus der Welt heraus, nicht durch den Ort, sondern durch den Glauben, die Hoffnung und die Liebe.', en: 'We come out from the world not by place, but by faith, hope, and love.', ar: 'نحن نخرج من العالم ليس بالمكان، بل بالإيمان والرجاء والمحبة.' },
        fatherReference: { de: 'St. Augustinus, Predigten', en: 'St. Augustine, Sermons', ar: 'القديس أغسطينوس، العظات' }
    },
     'lt_so': {
        bibleVerse: { de: 'Und Gott sprach: Es sollen Lichter an der Himmelsausdehnung sein, zur Unterscheidung von Tag und Nacht, die sollen als Zeichen dienen und zur Bestimmung von Zeiten und Tagen und Jahren.', en: 'And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years.', ar: 'وَقَالَ اللهُ: «لِتَكُنْ أَنْوَارٌ فِي جَلَدِ السَّمَاءِ لِتَفْصِلَ بَيْنَ النَّهَارِ وَاللَّيْلِ، وَتَكُونَ لآيَاتٍ وَأَوْقَاتٍ وَأَيَّامٍ وَسِنِينٍ.' },
        bibleReference: { de: '1. Mose 1:14 (Schlachter 2000)', en: 'Genesis 1:14 (KJV)', ar: 'تكوين ١: ١٤' },
        fatherQuote: { de: 'Die Ordnung der Schöpfung selbst verkündet in einer Art stummen Beredsamkeit die Größe ihres Schöpfers.', en: 'The very order of creation proclaims in a kind of silent eloquence the greatness of its Creator.', ar: 'إن نظام الخليقة ذاته يعلن بنوع من البلاغة الصامتة عظمة خالقها.' },
        fatherReference: { de: 'St. Athanasius, Gegen die Heiden', en: 'St. Athanasius, Against the Heathen', ar: 'القديس أثناسيوس، ضد الوثنيين' }
    },
    'lt_zita': {
        bibleVerse: { de: 'Steht nun fest, eure Lenden umgürtet mit Wahrheit, und angetan mit dem Brustpanzer der Gerechtigkeit,', en: 'Stand therefore, having your loins girt about with truth, and having on the breastplate of righteousness;', ar: 'فَاثْبُتُوا مُمَنْطِقِينَ أَحْقَاءَكُمْ بِالْحَقِّ، وَلاَبِسِينَ دِرْعَ الْبِرِّ،' },
        bibleReference: { de: 'Epheser 6:14 (Schlachter 2000)', en: 'Ephesians 6:14 (KJV)', ar: 'أفسس ٦: ١٤' },
        fatherQuote: { de: 'Der Gürtel der Wahrheit ist der Glaube, der unsere losen Gedanken zusammenhält und uns für den geistlichen Kampf bereit macht.', en: 'The belt of truth is faith, which gathers together our loose thoughts and makes us ready for spiritual combat.', ar: 'حزام الحق هو الإيمان، الذي يجمع أفكارنا المشتتة ويجعلنا مستعدين للقتال الروحي.' },
        fatherReference: { de: 'St. Johannes Chrysostomus, Homilien zu den Ephesern', en: 'St. John Chrysostom, Homilies on Ephesians', ar: 'القديس يوحنا الذهبي الفم، عظات على رسالة أفسس' }
    },
    'lt_hita': {
        bibleVerse: { de: 'Und Elia trat hin zu dem ganzen Volk und sprach: Wie lange hinkt ihr auf beiden Seiten? Wenn der Herr Gott ist, so folgt ihm nach; wenn aber der Baal, so folgt ihm nach!', en: 'And Elijah came unto all the people, and said, How long halt ye between two opinions? if the Lord be God, follow him: but if Baal, then follow him.', ar: 'فَتَقَدَّمَ إِيلِيَّا إِلَى جَمِيعِ الشَّعْبِ وَقَالَ: «حَتَّى مَتَى تَعْرُجُونَ بَيْنَ الْفِرْقَتَيْنِ؟ إِنْ كَانَ الرَّبُّ هُوَ اللهَ فَاتَّبِعُوهُ، وَإِنْ كَانَ الْبَعْلُ فَاتَّبِعُوهُ».' },
        bibleReference: { de: '1. Könige 18:21 (Schlachter 2000)', en: '1 Kings 18:21 (KJV)', ar: 'ملوك الأول ١٨: ٢١' },
        fatherQuote: { de: 'Wie Elia müssen auch wir das Herz des Volkes zu Gott zurückführen, indem wir die Wahrheit ohne Kompromisse verkünden.', en: 'Like Elijah, we too must turn the heart of the people back to God by proclaiming the Truth without compromise.', ar: 'مثل إيليا، يجب علينا أيضًا أن نرد قلب الشعب إلى الله، بإعلان الحق دون مساومة.' },
        fatherReference: { de: 'St. Kyrill von Alexandria, Kommentar zu den kleinen Propheten', en: 'St. Cyril of Alexandria, Commentary on the Minor Prophets', ar: 'القديس كيرلس الإسكندري، تعليق على الأنبياء الصغار' }
    },
     'lt_thita': {
        bibleVerse: { de: 'Nicht mein Wille, sondern der deine geschehe!', en: 'not my will, but thine, be done.', ar: 'لَيْسَ إِرَادَتِي بَلْ إِرَادَتُكَ لِتَكُنْ.' },
        bibleReference: { de: 'Lukas 22:42 (Schlachter 2000)', en: 'Luke 22:42 (KJV)', ar: 'لوقا ٢٢: ٤٢' },
        fatherQuote: { de: 'Der menschliche Wille muss sich dem göttlichen Willen unterordnen, nicht durch Zwang, sondern aus Liebe, denn darin liegt unsere wahre Freiheit und unser Frieden.', en: 'The human will must be submitted to the divine will, not by force but out of love, for in this is our true freedom and peace.', ar: 'يجب أن تخضع الإرادة البشرية للإرادة الإلهية، لا بالإكراه بل بالحب، ففي هذا حريتنا وسلامنا الحقيقي.' },
        fatherReference: { de: 'St. Antonius der Große, Briefe', en: 'St. Anthony the Great, Letters', ar: 'القديس أنطونيوس الكبير، الرسائل' }
    },
     'lt_iauda': {
        bibleVerse: { de: 'Und es ist in keinem anderen das Heil; denn es ist auch kein anderer Name unter dem Himmel den Menschen gegeben, in dem wir gerettet werden sollen!', en: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.', ar: 'وَلَيْسَ بِأَحَدٍ غَيْرِهِ الْخَلاَصُ. لأَنْ لَيْسَ اسْمٌ آخَرُ تَحْتَ السَّمَاءِ، قَدْ أُعْطِيَ بَيْنَ النَّاسِ، بِهِ يَنْبَغِي أَنْ نَخْلُصَ.' },
        bibleReference: { de: 'Apostelgeschichte 4:12 (Schlachter 2000)', en: 'Acts 4:12 (KJV)', ar: 'أعمال الرسل ٤: ١٢' },
        fatherQuote: { de: 'Der Name Jesus ist kein gewöhnlicher Name, sondern er ist die Macht Gottes zur Erlösung, eine Quelle der Heilung und ein Schrecken für die Dämonen.', en: 'The name of Jesus is not a common name, but it is the power of God unto salvation, a fount of healing, and a terror to the demons.', ar: 'اسم يسوع ليس اسمًا عاديًا، بل هو قوة الله للخلاص، وينبوع للشفاء، ورعب للشياطين.' },
        fatherReference: { de: 'St. Athanasius, Über die Menschwerdung des Wortes', en: 'St. Athanasius, On the Incarnation of the Word', ar: 'القديس أثناسيوس، في تجسد الكلمة' }
    },
    'lt_kapa': {
        bibleVerse: { de: 'Denn ein Kind ist uns geboren, ein Sohn ist uns gegeben, und die Herrschaft ruht auf seiner Schulter; und man nennt seinen Namen: Wunderbarer, Ratgeber, starker Gott, Ewig-Vater, Friedefürst.', en: 'For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.', ar: 'لأَنَّهُ يُولَدُ لَنَا وَلَدٌ وَنُعْطَى ابْنًا، وَتَكُونُ الرِّيَاسَةُ عَلَى كَتِفِهِ، وَيُدْعَى اسْمُهُ عَجِيبًا، مُشِيرًا، إِلهًا قَدِيرًا، أَبًا أَبَدِيًّا، رَئِيسَ السَّلاَمِ.' },
        bibleReference: { de: 'Jesaja 9:5 (Schlachter 2000)', en: 'Isaiah 9:6 (KJV)', ar: 'إشعياء ٩: ٦' },
        fatherQuote: { de: 'Wenn wir ihn "Herr" nennen, bekennen wir seine Gottheit und seine Autorität über die gesamte Schöpfung und über unser eigenes Leben.', en: 'When we call Him "Lord," we confess His divinity and His authority over all creation and over our own lives.', ar: 'عندما ندعوه "ربًا"، فإننا نعترف بألوهيته وسلطانه على كل الخليقة وعلى حياتنا الخاصة.' },
        fatherReference: { de: 'St. Kyrill von Alexandria, Kommentar zum Johannesevangelium', en: 'St. Cyril of Alexandria, Commentary on the Gospel of John', ar: 'القديس كيرلس الإسكندري، تعليق على إنجيل يوحنا' }
    },
    'lt_laula': {
        bibleVerse: { de: 'Ihr aber seid ein auserwähltes Geschlecht, ein königliches Priestertum, ein heiliges Volk, ein Volk des Eigentums, damit ihr die Tugenden dessen verkündet, der euch aus der Finsternis berufen hat zu seinem wunderbaren Licht.', en: 'But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light.', ar: 'وَأَمَّا أَنْتُمْ فَجِنْسٌ مُخْتَارٌ، وَكَهَنُوتٌ مُلُوكِيٌّ، أُمَّةٌ مُقَدَّسَةٌ، شَعْبُ اقْتِنَاءٍ، لِكَيْ تُخْبِرُوا بِفَضَائِلِ الَّذِي دَعَاكُمْ مِنَ الظُّلْمَةِ إِلَى نُورِهِ الْعَجِيبِ.' },
        bibleReference: { de: '1. Petrus 2:9 (Schlachter 2000)', en: '1 Peter 2:9 (KJV)', ar: 'بطرس الأولى ٢: ٩' },
        fatherQuote: { de: 'Die Kirche ist das neue Volk Gottes, das nicht durch fleischliche Abstammung, sondern durch den Glauben an Christus und die Wiedergeburt aus Wasser und Geist versammelt wurde.', en: 'The Church is the new people of God, gathered not by fleshly descent but by faith in Christ and rebirth from water and Spirit.', ar: 'الكنيسة هي شعب الله الجديد، الذي لم يتجمع بالنسب الجسدي بل بالإيمان بالمسيح والولادة الجديدة من الماء والروح.' },
        fatherReference: { de: 'St. Irenäus, Gegen die Häresien', en: 'St. Irenaeus, Against Heresies', ar: 'القديس إيرينيؤس، ضد الهرطقات' }
    },
    'lt_mi': {
        bibleVerse: { de: 'Und der Engel sprach zu ihr: Fürchte dich nicht, Maria, denn du hast Gnade bei Gott gefunden!', en: 'And the angel said unto her, Fear not, Mary: for thou hast found favour with God.', ar: 'فَقَالَ لَهَا الْمَلاَكُ: «لاَ تَخَافِي يَا مَرْيَمُ، لأَنَّكِ قَدْ وَجَدْتِ نِعْمَةً عِنْدَ اللهِ.' },
        bibleReference: { de: 'Lukas 1:30 (Schlachter 2000)', en: 'Luke 1:30 (KJV)', ar: 'لوقا ١: ٣٠' },
        fatherQuote: { de: 'Durch Marias Gehorsam wurde der Knoten des Ungehorsams Evas gelöst.', en: 'Through Mary’s obedience, the knot of Eve’s disobedience was loosed.', ar: 'بطاعة مريم، حُلَّت عقدة عصيان حواء.' },
        fatherReference: { de: 'St. Irenäus, Gegen die Häresien', en: 'St. Irenaeus, Against Heresies', ar: 'القديس إيرينيؤس، ضد الهرطقات' }
    },
    'lt_ni': {
        bibleVerse: { de: 'Im Anfang schuf Gott die Himmel und die Erde.', en: 'In the beginning God created the heaven and the earth.', ar: 'فِي الْبَدْءِ خَلَقَ اللهُ السَّمَاوَاتِ وَالأَرْضَ.' },
        bibleReference: { de: '1. Mose 1:1 (Schlachter 2000)', en: 'Genesis 1:1 (KJV)', ar: 'تكوين ١: ١' },
        fatherQuote: { de: 'Wir glauben nicht an viele Götter, sondern an einen Gott: einen Gott, der Schöpfer, Bildner und Erhalter von allem ist.', en: 'We do not believe in many gods, but in one God: one God who is Creator, and Maker, and Preserver of all things.', ar: 'نحن لا نؤمن بآلهة كثيرة، بل بإله واحد: إله واحد هو الخالق والصانع والحافظ لكل الأشياء.' },
        fatherReference: { de: 'St. Athanasius, Gegen die Heiden', en: 'St. Athanasius, Against the Heathen', ar: 'القديس أثناسيوس، ضد الوثنيين' }
    },
    'lt_xi': {
        bibleVerse: { de: 'Denn das Wort vom Kreuz ist eine Torheit für die, welche verlorengehen; uns aber, die wir gerettet werden, ist es eine Gotteskraft.', en: 'For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.', ar: 'فَإِنَّ كَلِمَةَ الصَّلِيبِ عِنْدَ الْهَالِكِينَ جَهَالَةٌ، وَأَمَّا عِنْدَنَا نَحْنُ الْمُخَلَّصِينَ فَهِيَ قُوَّةُ اللهِ.' },
        bibleReference: { de: '1. Korinther 1:18 (Schlachter 2000)', en: '1 Corinthians 1:18 (KJV)', ar: 'كورنثوس الأولى ١: ١٨' },
        fatherQuote: { de: 'Das Kreuz, einst ein Instrument der Schande, ist nun zum Symbol unseres Sieges und zum Thron des Königs geworden.', en: 'The Cross, once an instrument of shame, has now become the symbol of our victory and the throne of the King.', ar: 'الصليب، الذي كان أداة عار، أصبح الآن رمز نصرتنا وعرش الملك.' },
        fatherReference: { de: 'St. Johannes Chrysostomus, Homilien zum Kreuz', en: 'St. John Chrysostom, Homilies on the Cross', ar: 'القديس يوحنا الذهبي الفم، عظات عن الصليب' }
    },
    'lt_o': {
        bibleVerse: { de: 'Denn so viele Verheißungen Gottes es auch gibt — in ihm ist das Ja, und in ihm auch das Amen, Gott zum Lob durch uns!', en: 'For all the promises of God in him are yea, and in him Amen, unto the glory of God by us.', ar: 'لأَنْ مَهْمَا كَانَتْ مَوَاعِيدُ اللهِ فَهُوَ فِيهِ «النَّعَمْ» وَفِيهِ «الآمِينُ»، لِمَجْدِ اللهِ، بِوَاسِطَتِنَا.' },
        bibleReference: { de: '2. Korinther 1:20 (Schlachter 2000)', en: '2 Corinthians 1:20 (KJV)', ar: 'كورنثوس الثانية ١: ٢٠' },
        fatherQuote: { de: 'Wenn wir "Amen" sagen, was "wahrlich" bedeutet, besiegeln wir in unseren Herzen das, was im Gebet gesprochen wurde.', en: 'When we say "Amen," which means "truly," we are sealing in our hearts that which has been spoken in prayer.', ar: 'عندما نقول "آمين"، والتي تعني "حقاً"، فإننا نختم في قلوبنا ما قيل في الصلاة.' },
        fatherReference: { de: 'St. Kyrill von Jerusalem, Katechetische Vorlesungen', en: 'St. Cyril of Jerusalem, Catechetical Lectures', ar: 'القديس كيرلس الأورشليمي، محاضرات التعليم المسيحي' }
    },
     'lt_pi': {
        bibleVerse: { de: 'Und als der Tag der Pfingsten erfüllt war, waren sie alle einmütig beisammen. Und es geschah plötzlich ein Brausen vom Himmel wie von einem gewaltigen Wind und erfüllte das ganze Haus, wo sie saßen.', en: 'And when the day of Pentecost was fully come, they were all with one accord in one place. And suddenly there came a sound from heaven as of a rushing mighty wind, and it filled all the house where they were sitting.', ar: 'وَلَمَّا حَضَرَ يَوْمُ الْخَمْسِينَ كَانَ الْجَمِيعُ مَعًا بِنَفْسٍ وَاحِدَةٍ، وَصَارَ بَغْتَةً مِنَ السَّمَاءِ صَوْتٌ كَمَا مِنْ هُبُوبِ رِيحٍ عَاصِفَةٍ وَمَلأَ كُلَّ الْبَيْتِ حَيْثْ كَانُوا جَالِسِينَ.' },
        bibleReference: { de: 'Apostelgeschichte 2:1-2 (Schlachter 2000)', en: 'Acts 2:1-2 (KJV)', ar: 'أعمال الرسل ٢: ١-٢' },
        fatherQuote: { de: 'Der Heilige Geist kommt nicht, um zu verweilen, wo er Trägheit und Nachlässigkeit findet. Er sucht Seelen, die wachsam und feurig sind.', en: 'The Holy Spirit does not come to dwell where He finds sloth and negligence. He seeks souls that are vigilant and fervent.', ar: 'الروح القدس لا يأتي ليسكن حيث يجد الكسل والإهمال. إنه يبحث عن نفوس ساهرة ومتقدة.' },
        fatherReference: { de: 'St. Johannes Chrysostomus, Homilien zur Apostelgeschichte', en: 'St. John Chrysostom, Homilies on Acts', ar: 'القديس يوحنا الذهبي الفم، عظات على أعمال الرسل' }
    },
    'lt_ro': {
        bibleVerse: { de: 'Was ist der Mensch, dass du an ihn gedenkst, und des Menschen Sohn, dass du dich um ihn kümmerst?', en: 'What is man, that thou art mindful of him? and the son of man, that thou visitest him?', ar: 'مَنْ هُوَ الإِنْسَانُ حَتَّى تَذْكُرَهُ؟ وَابْنُ آدَمَ حَتَّى تَفْتَقِدَهُ؟' },
        bibleReference: { de: 'Psalm 8:5 (Schlachter 2000)', en: 'Psalm 8:4 (KJV)', ar: 'مزمور ٨: ٤' },
        fatherQuote: { de: 'Gott wurde Mensch, damit der Mensch Gott werden könne.', en: 'God became man, so that man might become God.', ar: 'الله صار إنسانًا، لكي يصير الإنسان إلهًا.' },
        fatherReference: { de: 'St. Athanasius, Über die Menschwerdung des Wortes', en: 'St. Athanasius, On the Incarnation of the Word', ar: 'القديس أثناسيوس، في تجسد الكلمة' }
    },
    'lt_sima': {
        bibleVerse: { de: 'Sie wird aber einen Sohn gebären, und du sollst ihm den Namen Jesus geben, denn er wird sein Volk erretten von ihren Sünden.', en: 'And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.', ar: 'فَسَتَلِدُ ابْنًا وَتَدْعُو اسْمَهُ يَسُوعَ. لأَنَّهُ يُخَلِّصُ شَعْبَهُ مِنْ خَطَايَاهُمْ.' },
        bibleReference: { de: 'Matthäus 1:21 (Schlachter 2000)', en: 'Matthew 1:21 (KJV)', ar: 'متى ١: ٢١' },
        fatherQuote: { de: 'Er wird Retter genannt, nicht weil er eine vorübergehende Befreiung gewährt, sondern weil er der Seele ewiges Heil schenkt.', en: 'He is called Savior, not because He grants a temporary deliverance, but because He bestows eternal salvation upon the soul.', ar: 'يُدعى مخلصًا، ليس لأنه يمنح خلاصًا مؤقتًا، بل لأنه يهب النفس خلاصًا أبديًا.' },
        fatherReference: { de: 'St. Kyrill von Alexandria, Kommentar zum Lukasevangelium', en: 'St. Cyril of Alexandria, Commentary on Luke', ar: 'القديس كيرلس الإسكندري، تعليق على إنجيل لوقا' }
    },
    'lt_tau': {
        bibleVerse: { de: 'Kommt, lasst uns anbeten und uns vor ihm beugen, lasst uns niederknien vor dem Herrn, unserem Schöpfer!', en: 'O come, let us worship and bow down: let us kneel before the Lord our maker.', ar: 'هَلُمَّ نَسْجُدُ وَنَرْكَعُ، وَنَجْثُو أَمَامَ الرَّبِّ خَالِقِنَا.' },
        bibleReference: { de: 'Psalm 95:6 (Schlachter 2000)', en: 'Psalm 95:6 (KJV)', ar: 'مزمور ٩٥: ٦' },
        fatherQuote: { de: 'Wahre Anbetung ist nicht nur eine äußere Haltung, sondern die innere Haltung des Herzens, das sich in Demut und Liebe Gott hingibt.', en: 'True worship is not merely an external posture, but the internal disposition of the heart, surrendering itself to God in humility and love.', ar: 'العبادة الحقيقية ليست مجرد وضع خارجي، بل هي ميل القلب الداخلي، الذي يسلم نفسه لله في تواضع ومحبة.' },
        fatherReference: { de: 'St. Johannes Cassian, Konferenzen', en: 'St. John Cassian, Conferences', ar: 'القديس يوحنا كاسيان، المؤتمرات' }
    },
    'lt_epsilon': {
        bibleVerse: { de: 'Denn so sehr hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit jeder, der an ihn glaubt, nicht verlorengeht, sondern ewiges Leben hat.', en: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.', ar: 'لأَنَّهُ هكَذَا أَحَبَّ اللهُ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ الْوَحِيدَ، لِكَيْ لاَ يَهْلِكَ كُلُّ مَنْ يُؤْمِنُ بِهِ، بَلْ تَكُونُ لَهُ الْحَيَاةُ الأَبَدِيَّةُ.' },
        bibleReference: { de: 'Johannes 3:16 (Schlachter 2000)', en: 'John 3:16 (KJV)', ar: 'يوحنا ٣: ١٦' },
        fatherQuote: { de: 'Der Sohn ist aus dem Wesen des Vaters, nicht durch Teilung, sondern als wahrer Nachkomme, so wie das Licht von der Sonne ausgeht.', en: 'The Son is from the substance of the Father, not by division but as a true offspring, as light comes from the sun.', ar: 'الابن هو من جوهر الآب، ليس بالانقسام بل كنسل حقيقي، كما يصدر النور من الشمس.' },
        fatherReference: { de: 'St. Athanasius, Erklärung des Glaubens', en: 'St. Athanasius, Statement of Faith', ar: 'القديس أثناسيوس، بيان الإيمان' }
    },
    'lt_phi': {
        bibleVerse: { de: 'Ich bin das Licht der Welt. Wer mir nachfolgt, wird nicht in der Finsternis wandeln, sondern wird das Licht des Lebens haben.', en: 'I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.', ar: 'أَنَا هُوَ نُورُ الْعَالَمِ. مَنْ يَتْبَعْنِي فَلاَ يَمْشِي فِي الظُّلْمَةِ بَلْ يَكُونُ لَهُ نُورُ الْحَيَاةِ.' },
        bibleReference: { de: 'Johannes 8:12 (Schlachter 2000)', en: 'John 8:12 (KJV)', ar: 'يوحنا ٨: ١٢' },
        fatherQuote: { de: 'Christus ist das wahre Licht, das jede Seele erleuchtet und die Finsternis der Unwissenheit und Sünde vertreibt.', en: 'Christ is the true light, who illuminates every soul, dispelling the darkness of ignorance and sin.', ar: 'المسيح هو النور الحقيقي، الذي ينير كل نفس، ويبدد ظلمة الجهل والخطية.' },
        fatherReference: { de: 'St. Kyrill von Alexandria, Kommentar zum Johannesevangelium', en: 'St. Cyril of Alexandria, Commentary on the Gospel of John', ar: 'القديس كيرلس الإسكندري، تعليق على إنجيل يوحنا' }
    },
    'lt_chi': {
        bibleVerse: { de: 'Da sprach Jesus zu seinen Jüngern: Will jemand mir nachkommen, so verleugne er sich selbst und nehme sein Kreuz auf sich und folge mir nach!', en: 'Then said Jesus unto his disciples, If any man will come after me, let him deny himself, and take up his cross, and follow me.', ar: 'حِينَئِذٍ قَالَ يَسُوعُ لِتَلاَمِيذِهِ: «إِنْ أَرَادَ أَحَدٌ أَنْ يَأْتِيَ وَرَائِي فَلْيُنْكِرْ نَفْسَهُ وَيَحْمِلْ صَلِيبَهُ وَيَتْبَعْنِي.' },
        bibleReference: { de: 'Matthäus 16:24 (Schlachter 2000)', en: 'Matthew 16:24 (KJV)', ar: 'متى ١٦: ٢٤' },
        fatherQuote: { de: 'Er ist Christus, weil er nicht nur selbst gesalbt wurde, sondern weil durch ihn alle, die an ihn glauben, Priester und Könige werden, die mit dem Heiligen Geist gesalbt sind.', en: 'He is Christ because He was not only anointed Himself, but because through Him all who believe in Him become priests and kings, anointed with the Holy Spirit.', ar: 'هو المسيح لأنه لم يُمسح فقط بنفسه، بل لأنه به يصير كل المؤمنين به كهنة وملوكًا، ممسوحين بالروح القدس.' },
        fatherReference: { de: 'St. Kyrill von Jerusalem, Katechetische Vorlesungen', en: 'St. Cyril of Jerusalem, Catechetical Lectures', ar: 'القديس كيرلس الأورشليمي، محاضرات التعليم المسيحي' }
    },
    'lt_epsi': {
        bibleVerse: { de: 'Denn was würde es einem Menschen helfen, wenn er die ganze Welt gewönne, aber an seiner Seele Schaden litte? Oder was könnte ein Mensch als Lösegeld für seine Seele geben?', en: 'For what is a man profited, if he shall gain the whole world, and lose his own soul? or what shall a man give in exchange for his soul?', ar: 'لأَنَّهُ مَاذَا يَنْتَفِعُ الإِنْسَانُ لَوْ رَبِحَ الْعَالَمَ كُلَّهُ وَخَسِرَ نَفْسَهُ؟ أَوْ مَاذَا يُعْطِي الإِنْسَانُ فِدَاءً عَنْ نَفْسِهِ؟' },
        bibleReference: { de: 'Matthäus 16:26 (Schlachter 2000)', en: 'Matthew 16:26 (KJV)', ar: 'متى ١٦: ٢٦' },
        fatherQuote: { de: 'Nichts ist kostbarer als die Seele. Kümmere dich daher um sie, damit sie nicht unrein vor Gott erscheine.', en: 'Nothing is more precious than the soul. Take care of it, therefore, lest it appear impure before God.', ar: 'لا شيء أثمن من النفس. فاعتني بها، لئلا تظهر دنسة أمام الله.' },
        fatherReference: { de: 'St. Antonius der Große', en: 'St. Anthony the Great', ar: 'القديس أنطونيوس الكبير' }
    },
    'lt_omega': {
        bibleVerse: { de: 'Ich bin das Alpha und das Omega, der Anfang und das Ende, der Erste und der Letzte.', en: 'I am Alpha and Omega, the beginning and the end, the first and the last.', ar: 'أَنَا الأَلِفُ وَالْيَاءُ، الْبِدَايَةُ وَالنِّهَايَةُ، الأَوَّلُ وَالآخِرُ.' },
        bibleReference: { de: 'Offenbarung 22:13 (Schlachter 2000)', en: 'Revelation 22:13 (KJV)', ar: 'رؤيا ٢٢: ١٣' },
        fatherQuote: { de: 'Das wahre Leben wird nicht in der Länge der Tage gemessen, sondern in der Qualität des Lebens in Christus.', en: 'True life is not measured in length of days, but in the quality of one\'s life in Christ.', ar: 'الحياة الحقيقية لا تقاس بطول الأيام، بل بنوعية الحياة في المسيح.' },
        fatherReference: { de: 'St. Johannes Chrysostomus', en: 'St. John Chrysostom', ar: 'القديس يوحنا الذهبي الفم' }
    },
     'lt_shai': {
        bibleVerse: { de: 'Dies sind die Feste des Herrn, die heiligen Versammlungen, die ihr zu ihrer festgesetzten Zeit ausrufen sollt.', en: 'These are the feasts of the Lord, even holy convocations, which ye shall proclaim in their seasons.', ar: 'هذِهِ هِيَ مَوَاسِمُ الرَّبِّ، الْمَحَافِلُ الْمُقَدَّسَةُ الَّتِي تُنَادُونَ بِهَا فِي أَوْقَاتِهَا.' },
        bibleReference: { de: '3. Mose 23:4 (Schlachter 2000)', en: 'Leviticus 23:4 (KJV)', ar: 'لاويين ٢٣: ٤' },
        fatherQuote: { de: 'Jeder Tag im Leben eines Christen ist ein Fest, wenn wir uns an die Auferstehung des Herrn erinnern und in ihr leben.', en: 'Every day in a Christian’s life is a feast, if we remember and live in the Lord’s resurrection.', ar: 'كل يوم في حياة المسيحي هو عيد، إذا تذكرنا وعشنا في قيامة الرب.' },
        fatherReference: { de: 'St. Athanasius, Festbriefe', en: 'St. Athanasius, Festal Letters', ar: 'القديس أثناسيوس، رسائل الفصح' }
    },
     'lt_fai': {
        bibleVerse: { de: 'Kommt her zu mir alle, die ihr mühselig und beladen seid, so will ich euch erquicken!', en: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.', ar: 'تَعَالَوْا إِلَيَّ يَا جَمِيعَ الْمُتْعَبِينَ وَالثَّقِيلِي الأَحْمَالِ، وَأَنَا أُرِيحُكُمْ.' },
        bibleReference: { de: 'Matthäus 11:28 (Schlachter 2000)', en: 'Matthew 11:28 (KJV)', ar: 'متى ١١: ٢٨' },
        fatherQuote: { de: 'Er, der das Universum trägt, bittet uns, unser Kreuz zu tragen, nicht weil er unsere Hilfe braucht, sondern weil er uns an seiner Herrlichkeit teilhaben lassen will.', en: 'He Who carries the universe asks us to carry our cross, not because He needs our help, but because He wants to make us partakers of His glory.', ar: 'هو الذي يحمل الكون يطلب منا أن نحمل صليبنا، ليس لأنه يحتاج إلى مساعدتنا، بل لأنه يريد أن يجعلنا شركاء في مجده.' },
        fatherReference: { de: 'St. Kyrill von Alexandria, Kommentar zum Johannesevangelium', en: 'St. Cyril of Alexandria, Commentary on John', ar: 'القديس كيرلس الإسكندري، تعليق على إنجيل يوحنا' }
    },
    'lt_khai': {
        bibleVerse: { de: 'Denn in ihm leben, weben und sind wir.', en: 'For in him we live, and move, and have our being.', ar: 'لأَنَّنَا بِهِ نَحْيَا وَنَتَحَرَّكُ وَنُوجَدُ.' },
        bibleReference: { de: 'Apostelgeschichte 17:28 (Schlachter 2000)', en: 'Acts 17:28 (KJV)', ar: 'أعمال الرسل ١٧: ٢٨' },
        fatherQuote: { de: 'Wenn du im Gebet stehst, bist du in Gott und Gott ist in dir. Verschließe die Türen deiner Sinne, damit deine Gebete nicht unterbrochen werden.', en: 'When you stand in prayer, you are in God and God is in you. Close the doors of your senses, so that your prayers are not interrupted.', ar: 'عندما تقف في الصلاة، فأنت في الله والله فيك. أغلق أبواب حواسك، حتى لا تنقطع صلواتك.' },
        fatherReference: { de: 'St. Makarius der Große', en: 'St. Macarius the Great', ar: 'القديس مقاريوس الكبير' }
    },
    'lt_hori': {
        bibleVerse: { de: 'Und alles, was ihr tut in Wort oder Werk, das tut alles im Namen des Herrn Jesus und dankt Gott, dem Vater, durch ihn.', en: 'And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.', ar: 'وَكُلُّ مَا عَمِلْتُمْ بِقَوْل أَوْ فِعْل، فَاعْمَلُوا الْكُلَّ بِاسْمِ الرَّبِّ يَسُوعَ، شَاكِرِينَ اللهَ وَالآبَ بِهِ.' },
        bibleReference: { de: 'Kolosser 3:17 (Schlachter 2000)', en: 'Colossians 3:17 (KJV)', ar: 'كولوسي ٣: ١٧' },
        fatherQuote: { de: 'Die Mühe, die für Gott unternommen wird, ist niemals vergeblich. Selbst ein Becher kalten Wassers, der in Seinem Namen gegeben wird, wird seine Belohnung finden.', en: 'Toil undertaken for God is never in vain. Even a cup of cold water given in His name will find its reward.', ar: 'التعب المبذول من أجل الله لا يضيع أبدًا. حتى كوب الماء البارد المعطى باسمه سيجد مكافأته.' },
        fatherReference: { de: 'St. Basilius der Große, Längere Regeln', en: 'St. Basil the Great, Longer Rules', ar: 'القديس باسيليوس الكبير، القوانين الطويلة' }
    },
    'lt_gangia': {
        bibleVerse: { de: 'Der Herr ist mein Hirte, mir wird nichts mangeln.', en: 'The Lord is my shepherd; I shall not want.', ar: 'اَلرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ.' },
        bibleReference: { de: 'Psalm 23:1 (Schlachter 2000)', en: 'Psalm 23:1 (KJV)', ar: 'مزمور ٢٣: ١' },
        fatherQuote: { de: 'Wenn der Herr dein Meister ist, wovor solltest du dich dann fürchten? Wenn er dein Hirte ist, was könnte dir fehlen?', en: 'If the Lord is your master, what then shall you fear? If He is your shepherd, what could you lack?', ar: 'إذا كان الرب سيدك، فماذا تخاف؟ إذا كان هو راعيك، فماذا يمكن أن يعوزك؟' },
        fatherReference: { de: 'St. Johannes Chrysostomus, Homilien zu den Psalmen', en: 'St. John Chrysostom, Homilies on the Psalms', ar: 'القديس يوحنا الذهبي الفم، عظات على المزامير' }
    },
    'lt_shima': {
        bibleVerse: { de: 'Jedes gute Tal soll ausgefüllt und jeder Berg und Hügel erniedrigt werden.', en: 'Every valley shall be filled, and every mountain and hill shall be brought low.', ar: 'كُلُّ وَادٍ يَمْتَلِئُ، وَكُلُّ جَبَل وَأَكَمَةٍ يَنْخَفِضُ.' },
        bibleReference: { de: 'Lukas 3:5 (Schlachter 2000)', en: 'Luke 3:5 (KJV)', ar: 'لوقا ٣: ٥' },
        fatherQuote: { de: 'Demut ist der hohe Weg zu Gott. Je tiefer du dich beugst, desto höher wirst du in Seinen Augen erhoben.', en: 'Humility is the high road to God. The lower you bow, the higher you are exalted in His sight.', ar: 'التواضع هو الطريق العالي إلى الله. كلما انحنيت أكثر، كلما ارتفعت في عينيه.' },
        fatherReference: { de: 'St. Antonius der Große', en: 'St. Anthony the Great', ar: 'القديس أنطونيوس الكبير' }
    },
     'lt_dei': {
        bibleVerse: { de: 'Ihr seid meine Zeugen, spricht der Herr, und mein Knecht, den ich erwählt habe.', en: 'Ye are my witnesses, saith the Lord, and my servant whom I have chosen.', ar: '«أَنْتُمْ شُهُودِي، يَقُولُ الرَّبُّ، وَعَبْدِي الَّذِي اخْتَرْتُهُ.' },
        bibleReference: { de: 'Jesaja 43:10 (Schlachter 2000)', en: 'Isaiah 43:10 (KJV)', ar: 'إشعياء ٤٣: ١٠' },
        fatherQuote: { de: 'Ein Märtyrer ist ein Zeuge, nicht nur mit seinen Lippen, sondern mit seinem Blut, der die Wahrheit der Auferstehung Christi bezeugt.', en: 'A martyr is a witness, not only with his lips but with his blood, testifying to the truth of Christ’s resurrection.', ar: 'الشهيد هو شاهد، ليس بشفتيه فقط بل بدمه، يشهد لحقيقة قيامة المسيح.' },
        fatherReference: { de: 'St. Kyrill von Jerusalem, Katechetische Vorlesungen', en: 'St. Cyril of Jerusalem, Catechetical Lectures', ar: 'القديس كيرلس الأورشليمي، محاضرات التعليم المسيحي' }
    }
};

const LETTER_EMOJIS: Record<string, string> = {
    'lt_alpha': '👨‍👧', 'lt_vida': '👁️', 'lt_ghamma': '👍', 'lt_dalda': '👑', 'lt_ei': '📤',
    'lt_so': '6️⃣', 'lt_zita': '🥋', 'lt_hita': '🔥', 'lt_thita': '🙏', 'lt_iauda': '✝️',
    'lt_kapa': '👑', 'lt_laula': '👥', 'lt_mi': '👩‍👦', 'lt_ni': '✨', 'lt_xi': '🪵',
    'lt_o': '✅', 'lt_pi': '🕊️', 'lt_ro': '🚶', 'lt_sima': '❤️‍🩹', 'lt_tau': '🙌',
    'lt_epsilon': '👶', 'lt_phi': '💡', 'lt_chi': '✝️', 'lt_epsi': '🦋', 'lt_omega': '❤️',
    'lt_shai': '🎉', 'lt_fai': '💪', 'lt_khai': '📥', 'lt_hori': '😓', 'lt_gangia': '👑',
    'lt_shima': '🏔️', 'lt_dei': '📜'
};


const letter_keys = Object.keys(LETTERS);

export const ALPHABET_SLIDES: Record<string, AlphabetSlide> = letter_keys.reduce((acc, letterId, index) => {
    const letter = LETTERS[letterId];
    let explanation: { de: string, en: string, ar: string };

    switch(letterId) {
        case 'lt_vida': 
            explanation = { de: 'Normalerweise wie "W" in "Wasser". In manchen griechischen Wörtern und Namen wie "B".', en: 'Usually like "V" in "Vase". In some Greek words and names, it\'s pronounced "B".', ar: 'عادةً يُنطق مثل حرف "ڤ" (في ڤيديو). في بعض الكلمات والأسماء اليونانية، يُنطق "ب".' }; break;
        case 'lt_ghamma': 
            explanation = { de: 'Normalerweise "G" (wie in "Garten"). Vor ⲅ, ⲕ, ⲭ, ⲝ wird es zu "N" (wie in "singen"). Vor ⲉ, ⲏ, ⲓ, ⲩ wird es zu einem weichen "Gh".', en: 'Usually "g" (as in "go"). Before ⲅ, ⲕ, ⲭ, ⲝ it becomes "n" (as in "sing"). Before ⲉ, ⲏ, ⲓ, ⲩ it becomes a soft "gh" sound.', ar: 'عادةً "ج" (مثل "جمل"). قبل الحروف ⲅ, ⲕ, ⲭ, ⲝ يصبح "ن" (مثل "أنجيل"). قبل الحروف ⲉ, ⲏ, ⲓ, ⲩ يصبح صوتاً حلقياً "غ".' }; break;
        case 'lt_thita':
            explanation = { de: 'Wie "T" in den meisten koptischen Wörtern. In griechischen Lehnwörtern oft wie das englische "Th" in "thing".', en: 'Like "t" in most Coptic words. In words of Greek origin, often like "th" in "thing".', ar: 'يُنطق "ت" في معظم الكلمات القبطية. في الكلمات ذات الأصل اليوناني، غالبًا ما يُنطق "ث".' }; break;
        case 'lt_tau':
            explanation = { de: 'Normalerweise "T". Am Wortende nach einem Vokal oft wie "D".', en: 'Usually "t". At the end of a word after a vowel, it often sounds like "d".', ar: 'عادةً "ت". في نهاية الكلمة بعد حرف متحرك، غالباً ما يُنطق "د".' }; break;
        case 'lt_epsilon':
             explanation = { de: 'Als Teil eines Diphthongs ⲁⲩ/ⲉⲩ wie "W". Alleinstehend oft wie "I" im Deutschen.', en: 'As part of a diphthong ⲁⲩ/ⲉⲩ, it sounds like "v". When standing alone, it often sounds like "i" in "fit".', ar: 'كجزء من صوت مزدوج مثل ⲁⲩ/ⲉⲩ، يُنطق "ڤ". عندما يأتي منفرداً، غالباً ما يُنطق مثل الياء.' }; break;
        case 'lt_chi':
             explanation = { de: 'In koptischen Wörtern wie "Sch". In griechischen Wörtern wie "K".', en: 'In Coptic words, it sounds like "sh". In Greek words, it sounds like "k".', ar: 'في الكلمات القبطية، يُنطق "ش". في الكلمات اليونانية، يُنطق "ك".' }; break;
        default:
            explanation = { de: `Der Buchstabe ${letter.name.de} wird wie ${letter.pronunciation.de} ausgesprochen.`, en: `The letter ${letter.name.en} is pronounced like ${letter.pronunciation.en}.`, ar: `حرف ${letter.name.ar} يُنطق مثل ${letter.pronunciation.ar}.` };
    }

    acc[`sl${(index + 1).toString().padStart(2, '0')}`] = {
        id: `sl${(index + 1).toString().padStart(2, '0')}`,
        letterId: letterId,
        explanation: explanation,
        audio: { letter: 'a.mp3', word: 'abba.mp3' },
        emoji: LETTER_EMOJIS[letterId] || '❓',
        spiritual: spiritualContentData[letterId]
    };
    return acc;
}, {} as Record<string, AlphabetSlide>);


const slide_keys = Object.keys(ALPHABET_SLIDES);

export const LEVELS: Record<string, Level> = {
    ...slide_keys.reduce((acc, slideId, index) => {
        const levelIndex = Math.floor(index / 4);
        const levelId = `lev_m1_${levelIndex + 1}`;
        if (!acc[levelId]) {
            acc[levelId] = { id: levelId, order: levelIndex + 1, kind: 'letters', slides: [] };
        }
        acc[levelId].slides.push(slideId);
        return acc;
    }, {} as Record<string, Level>),
    'lev_m1_9': { id: 'lev_m1_9', order: 9, kind: 'vocab', slides: ['vb01', 'vb02'] },
    'lev_m1_10': { id: 'lev_m1_10', order: 10, kind: 'sentences', slides: ['st01', 'st02'] }
};

export const VOCAB_ITEMS: Record<string, VocabItem> = {
    'vb01': { id: 'vb01', coptic: 'ⲣⲁⲛ', translit: 'ran', meaning: { de: 'Name', en: 'Name', ar: 'اسم' }, emoji: '📛', audio: 'ran.mp3', tags: ['grundlagen'] },
    'vb02': { id: 'vb02', coptic: 'ⲉⲕⲕⲗⲏⲥⲓⲁ', translit: 'ekklēsia', meaning: { de: 'Kirche', en: 'Church', ar: 'كنيسة' }, emoji: '⛪️', audio: 'ekklesia.mp3', tags: ['kirche'] },
};

export const SENTENCE_ITEMS: Record<string, SentenceItem> = {
    'st01': { id: 'st01', text: 'Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ', translit: 'khen efran em-efiot', meaning: { de: 'Im Namen des Vaters', en: 'In the name of the Father', ar: 'باسم الآب' }, audio: 'sent1.mp3' },
    'st02': { id: 'st02', text: 'Ⲭⲣⲓⲥⲧⲟⲥ ⲁ̀ⲛⲉⲥⲧⲏ', translit: 'Christos anestē', meaning: { de: 'Christus ist auferstanden', en: 'Christ is risen', ar: 'المسيح قام' }, audio: 'sent2.mp3' },
};

export const QUIZ_QUESTIONS: Record<string, QuizQuestion> = {
    'qq01': { id: 'qq01', type: QuizQuestionType.MCQ, prompt: { de: 'Welcher Buchstabe ist Alpha?', en: 'Which letter is Alpha?', ar: 'أي حرف هو ألفا؟' }, media: { audio: null, image: null }, options: ['Ⲁ', 'Ⲃ', 'Ⲇ', 'Ⲉ'], answer: [0], solution: { de: 'Ⲁ ist Alpha.', en: 'Ⲁ is Alpha.', ar: 'Ⲁ هو ألفا.' } },
    'qq02': { id: 'qq02', type: QuizQuestionType.LISTEN, prompt: { de: 'Höre den Laut und wähle den passenden Buchstaben.', en: 'Listen to the sound and choose the matching letter.', ar: 'استمع للصوت واختر الحرف المناسب.' }, media: { audio: 'd.mp3', image: null }, options: ['Ⲅ', 'Ⲇ', 'Ⲃ', 'Ⲁ'], answer: [1], solution: { de: 'Der Laut war "D", was dem Buchstaben Ⲇ (Dalda) entspricht.', en: 'The sound was "D", which corresponds to the letter Ⲇ (Dalda).', ar: 'الصوت كان "د"، وهو يوافق حرف Ⲇ (دالدا).' } },
    'qq03': { id: 'qq03', type: QuizQuestionType.MCQ, prompt: { de: 'Was bedeutet ⲃⲁⲗ?', en: 'What does ⲃⲁⲗ mean?', ar: 'ما معنى ⲃⲁⲗ؟' }, media: { audio: null, image: null }, options: ['Auge', 'Vater', 'Sohn', 'Ja'], answer: [0], solution: { de: 'ⲃⲁⲗ (bal) bedeutet Auge.', en: 'ⲃⲁⲗ (bal) means Eye.', ar: 'ⲃⲁⲗ (bal) تعني عين.' } },
};

export const QUIZZES: Record<string, Quiz> = {
    ...Array.from({ length: 10 }, (_, i) => ({
        id: `qz_m1_${i + 1}`,
        lessonId: `l_m1_${i + 1}`,
        passScore: 0.8,
        questions: [`qq01`, `qq02`, `qq03`].sort(() => 0.5 - Math.random()) // Randomize for variety
    })).reduce((acc, quiz) => {
        acc[quiz.id] = quiz;
        return acc;
    }, {} as Record<string, Quiz>),
};

export const LESSONS: Record<string, Lesson> = {
    ...Array.from({ length: 8 }, (_, i) => {
        const letters = letter_keys.slice(i * 4, (i + 1) * 4).map(id => LETTERS[id].uppercase).join('-');
        return {
            id: `l_m1_${i + 1}`,
            moduleId: 'm01',
            order: i + 1,
            type: LessonType.ALPHABET,
            title: { de: `Buchstaben ${i * 4 + 1}-${(i + 1) * 4} (${letters})`, en: `Letters ${i * 4 + 1}-${(i + 1) * 4} (${letters})`, ar: `الحروف ${i * 4 + 1}-${(i + 1) * 4} (${letters})` },
            levels: [`lev_m1_${i + 1}`],
            quizId: `qz_m1_${i + 1}`,
            prerequisites: i > 0 ? [`l_m1_${i}`] : []
        };
    }).reduce((acc, lesson) => {
        acc[lesson.id] = lesson;
        return acc;
    }, {} as Record<string, Lesson>),
    'l_m1_9': { id: 'l_m1_9', moduleId: 'm01', order: 9, type: LessonType.VOCAB, title: { de: 'Grund-Vokabeln', en: 'Basic Vocabulary', ar: 'المفردات الأساسية' }, levels: ['lev_m1_9'], quizId: 'qz_m1_9', prerequisites: ['l_m1_8'] },
    'l_m1_10': { id: 'l_m1_10', moduleId: 'm01', order: 10, type: LessonType.SENTENCES, title: { de: 'Einfache Sätze', en: 'Simple Sentences', ar: 'جمل بسيطة' }, levels: ['lev_m1_10'], quizId: 'qz_m1_10', prerequisites: ['l_m1_9'] },
    'l03': { id: 'l03', moduleId: 'm02', order: 1, type: LessonType.PRONUNCIATION, title: { de: 'Grundlagen der Aussprache', en: 'Pronunciation Basics', ar: 'أساسيات النطق' }, levels: [], quizId: 'qz03', prerequisites: [] },
};

const module1_lessons = Object.keys(LESSONS).filter(id => LESSONS[id].moduleId === 'm01').sort((a, b) => LESSONS[a].order - LESSONS[b].order);

export const MODULES: Record<string, Module> = {
    'm01': {
        id: 'm01',
        order: 1,
        title: { de: 'Alphabet', en: 'Alphabet', ar: 'الأبجدية' },
        lessons: module1_lessons
    },
    'm02': {
        id: 'm02',
        order: 2,
        title: { de: 'Aussprache', en: 'Pronunciation', ar: 'النطق' },
        lessons: ['l03']
    },
};