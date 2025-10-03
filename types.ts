export type Language = 'de' | 'en' | 'ar';
export type Theme = 'light' | 'dark';
export type UserRole = 'user' | 'diener' | 'admin';

export interface LocaleString {
    de: string;
    en: string;
    ar: string;
}

export interface User {
    id: string;
    role: UserRole;
    settings: {
        lang: Language;
        theme: Theme;
        transliteration: boolean;
    };
}

export interface Module {
    id: string;
    order: number;
    title: LocaleString;
    lessons: string[];
}

export enum LessonType {
    ALPHABET = "alphabet",
    PRONUNCIATION = "pronunciation",
    NUMBERS = "numbers",
    GRAMMAR = "grammar",
    VOCAB = "vocab",
    SENTENCES = "sentences",
    CONVERSATION = "conversation",
    READING = "reading",
}

export interface Lesson {
    id: string;
    moduleId: string;
    order: number;
    type: LessonType;
    title: LocaleString;
    levels: string[];
    quizId: string;
    prerequisites: string[];
}

export interface Level {
    id: string;
    order: number;
    kind: "letters" | "vocab" | "sentences" | "pronunciation" | "practice";
    slides: string[]; // for letters, contains slideIds. For vocab, vocabItemIds, etc.
}

export interface SpiritualContent {
    bibleVerse: LocaleString;
    bibleReference: LocaleString;
    fatherQuote: LocaleString;
    fatherReference: LocaleString;
}

export interface AlphabetSlide {
    id: string;
    letterId: string;
    explanation: LocaleString;
    audio: {
        letter: string;
        word: string;
    };
    emoji: string;
    spiritual: SpiritualContent;
}

export interface PronunciationExample {
    coptic: string;
    translit: string;
    meaning: LocaleString;
    audio: string;
}

export interface PronunciationSlide {
    id: string;
    title: LocaleString;
    rule: LocaleString;
    examples: PronunciationExample[];
}


export interface Letter {
    id: string;
    name: LocaleString;
    uppercase: string;
    lowercase: string;
    pronunciation: LocaleString;
    numeric: number;
    exampleWord: {
        coptic: string;
        translit: string;
        meaning: LocaleString;
    };
}

export interface VocabItem {
    id: string;
    coptic: string;
    translit: string;
    meaning: LocaleString;
    emoji: string;
    audio: string;
    tags: string[];
}

export interface SentenceItem {
    id: string;
    text: string;
    translit: string;
    meaning: LocaleString;
    audio: string;
}

export enum QuizQuestionType {
    MCQ = "mcq",
    MATCH = "match",
    ORDER = "order",
    GAP = "gap",
    LISTEN = "listen",
    WRITE = "write",
    SPEAK = "speak",
}

export interface QuizQuestion {
    id: string;
    type: QuizQuestionType;
    prompt: LocaleString;
    media: {
        audio: string | null;
        image: string | null;
    };
    options: string[] | {coptic: string, meaning: LocaleString}[];
    answer: number[] | string;
    solution: LocaleString;
}

export interface Quiz {
    id: string;
    lessonId: string;
    passScore: number;
    questions: string[];
}