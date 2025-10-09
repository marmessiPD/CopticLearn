// FIX: Create full type definitions for the application.

export type Language = 'de' | 'en' | 'ar';
export type Theme = 'light' | 'dark';
export type UserRole = 'user' | 'diener' | 'admin';

export interface LocalizedString {
    de: string;
    en: string;
    ar: string;
}

export interface Module {
    id: string;
    order: number;
    title: LocalizedString;
    lessons: string[]; // array of lesson IDs
}

export interface Lesson {
    id: string;
    order: number;
    title: LocalizedString;
    moduleId: string;
    slides: Slide[];
    quizId: string;
    prerequisites: string[]; // array of lesson IDs
}

export type Slide = AlphabetSlide | VocabSlide | SentenceSlide | PronunciationSlide | NumberSlide | GrammarSlide | ReadingSlide | ConversationSlide;

export interface BaseSlide {
    type: 'alphabet' | 'vocab' | 'sentence' | 'pronunciation' | 'number' | 'grammar' | 'reading' | 'conversation';
}

export interface Letter {
    id: string;
    uppercase: string;
    lowercase: string;
    name: LocalizedString;
    pronunciation: LocalizedString;
    numeric: number | null;
    exampleWord: {
        coptic: string;
        translit: string;
        meaning: LocalizedString;
    };
}

export interface AlphabetSlide extends BaseSlide {
    type: 'alphabet';
    letterId: string;
    emoji: string;
    explanation: LocalizedString;
    spiritual: {
        bibleVerse: LocalizedString;
        bibleReference: LocalizedString;
        fatherQuote: LocalizedString;
        fatherReference: LocalizedString;
    };
}

export interface VocabItem {
    coptic: string;
    translit: string;
    meaning: LocalizedString;
    emoji: string;
}

export interface VocabSlide extends BaseSlide {
    type: 'vocab';
    item: VocabItem;
}

export interface SentenceItem {
    text: string;
    translit: string;
    meaning: LocalizedString;
}

export interface SentenceSlide extends BaseSlide {
    type: 'sentence';
    item: SentenceItem;
}

export interface PronunciationExample {
    coptic: string;
    translit: string;
    meaning: LocalizedString;
}

export interface PronunciationSlide extends BaseSlide {
    type: 'pronunciation';
    title: LocalizedString;
    rule: LocalizedString;
    examples: PronunciationExample[];
}

export interface NumberSlide extends BaseSlide {
    type: 'number';
    number: number;
    copticSymbol: string;
    copticName: string;
    translit: string;
}

export interface GrammarExample {
    coptic: string;
    translit: string;
    meaning: LocalizedString;
}

export interface GrammarSlide extends BaseSlide {
    type: 'grammar';
    title: LocalizedString;
    rule: LocalizedString;
    examples: GrammarExample[];
}

export interface ReadingSlide extends BaseSlide {
    type: 'reading';
    title: LocalizedString;
    copticText: string[]; // paragraphs
    translation: LocalizedString[]; // paragraphs
}

export interface ConversationLine {
    speaker: string;
    coptic: string;
    translation: LocalizedString;
}

export interface ConversationSlide extends BaseSlide {
    type: 'conversation';
    title: LocalizedString;
    participants: string[];
    lines: ConversationLine[];
}

export interface Quiz {
    id: string;
    lessonId: string;
    title: LocalizedString;
    questions: Question[];
    passScore: number;
}

export type Question = MultipleChoiceQuestion | FillInTheBlankQuestion;

export interface BaseQuestion {
    id: string;
    type: 'multiple-choice' | 'fill-in-the-blank';
    questionText: LocalizedString;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
    type: 'multiple-choice';
    options: LocalizedString[];
    correctAnswerIndex: number;
}

export interface FillInTheBlankQuestion extends BaseQuestion {
    type: 'fill-in-the-blank';
    correctAnswer: string; // Case-insensitive check might be needed
}
