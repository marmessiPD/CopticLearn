// FIX: Create full type definitions for the application.

export type Language = "de" | "en" | "ar";
export type Theme = "light" | "dark";
export type UserRole = "user" | "servant";

export interface User {
  id: string;
  forename: string;
  surname: string;
  email: string;
  role: UserRole;
  createdAt: string;
  passwordHash: string; // Stored hashed password
}

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
  quizIds?: string[]; // Optional: array of quiz IDs
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

export type Slide =
  | AlphabetSlide
  | VocabSlide
  | SentenceSlide
  | PronunciationSlide
  | NumberSlide
  | GrammarSlide
  | ReadingSlide
  | ConversationSlide;

export interface BaseSlide {
  type:
    | "alphabet"
    | "vocab"
    | "sentence"
    | "pronunciation"
    | "number"
    | "grammar"
    | "reading"
    | "conversation";
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
  type: "alphabet";
  letterId: string;
  emoji: string;
  explanation: LocalizedString;
  spiritual?: {
    bibleVerse?: LocalizedString;
    bibleReference?: LocalizedString;
    fatherQuote?: LocalizedString;
    fatherReference?: LocalizedString;
  };
}

export interface VocabItem {
  coptic: string;
  translit: string;
  meaning: LocalizedString;
  emoji: string;
}

export interface VocabSlide extends BaseSlide {
  type: "vocab";
  item: VocabItem;
}

export interface SentenceItem {
  text: string;
  translit: string;
  meaning: LocalizedString;
}

export interface SentenceSlide extends BaseSlide {
  type: "sentence";
  item: SentenceItem;
}

export interface PronunciationExample {
  coptic: string;
  translit: string;
  meaning: LocalizedString;
}

export interface PronunciationSlide extends BaseSlide {
  type: "pronunciation";
  title: LocalizedString;
  rule: LocalizedString;
  examples: PronunciationExample[];
}

export interface NumberSlide extends BaseSlide {
  type: "number";
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
  type: "grammar";
  title: LocalizedString;
  rule: LocalizedString;
  examples: GrammarExample[];
}

export interface ReadingSlide extends BaseSlide {
  type: "reading";
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
  type: "conversation";
  title: LocalizedString;
  participants: string[];
  lines: ConversationLine[];
}

export interface Quiz {
  id: string;
  moduleId?: string; // Optional: module ID for organization
  lessonId: string;
  title: LocalizedString;
  questions?: Question[]; // Standard format used by QuizPage
  items?: QuizItem[]; // Alternative format used by some modules (legacy)
  passScore: number;
}

// Legacy quiz item format (used in modules 3, 4, etc.)
export type QuizItem =
  | { type: "mc"; prompt: string; choices: string[]; answer: number }
  | { type: "match"; prompt: string; pairs: string[][] }
  | { type: "gap"; prompt: string; answer: string }
  | { type: "tf"; prompt: string; answer: boolean }
  | { type: "produce"; prompt: string; rubric: string }
  | {
      type: "multiple-choice";
      prompt: string;
      options: string[];
      answer: number;
    }
  | { type: "matching"; prompt: string; pairs: string[][] }
  | {
      type: "cloze";
      prompt: string;
      text: string;
      solutions: Record<number, string>;
    };

export type Question = MultipleChoiceQuestion | FillInTheBlankQuestion;

export interface BaseQuestion {
  id: string;
  type: "multiple-choice" | "fill-in-the-blank";
  questionText: LocalizedString;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple-choice";
  options: LocalizedString[];
  correctAnswerIndex: number;
}

export interface FillInTheBlankQuestion extends BaseQuestion {
  type: "fill-in-the-blank";
  correctAnswer: string; // Case-insensitive check might be needed
}
