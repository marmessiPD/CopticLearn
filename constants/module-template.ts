// Module Template - Copy this structure for new modules
// Replace "M2" with your module number (M2, M3, M4, etc.)

import { Module, Lesson, Quiz, Letter } from '../types';

// ————————————————————————————————————————————————————————————————————————
// LETTERS (if applicable for this module)
// Only include if this module has new letters to teach

export const LETTERS: Record<string, Letter> = {
  // Add your letters here following the same structure as module1
  // example: {
  //   id: 'example',
  //   uppercase: 'Ⲁ',
  //   lowercase: 'ⲁ',
  //   name: { de: 'Example', en: 'Example', ar: 'مثال' },
  //   pronunciation: { de: 'pronunciation', en: 'pronunciation', ar: 'النطق' },
  //   numeric: 1,
  //   exampleWord: { coptic: 'ⲁⲅⲁⲡⲏ', translit: 'agape', meaning: { de: 'Liebe', en: 'Love', ar: 'محبة' } }
  // },
};

// ————————————————————————————————————————————————————————————————————————
// LESSONS for this module

export const LESSONS: Record<string, Lesson> = {
  'm2-l1': {
    id: 'm2-l1',
    order: 1,
    moduleId: 'm2',
    title: { de: 'Lesson Title', en: 'Lesson Title', ar: 'عنوان الدرس' },
    prerequisites: [], // Add prerequisite lesson IDs here
    quizId: 'm2-q1',
    slides: [
      // Add your slides here
      // Follow the same structure as module1
    ],
  },
  // Add more lessons as needed
};

// ————————————————————————————————————————————————————————————————————————
// QUIZZES for this module

export const QUIZZES: Record<string, Quiz> = {
  'm2-q1': { 
    id: 'm2-q1', 
    moduleId: 'm2', 
    title: { de: 'Quiz 1', en: 'Quiz 1', ar: 'الاختبار 1' }, 
    questions: [] 
  },
  // Add more quizzes as needed
};

// ————————————————————————————————————————————————————————————————————————
// MODULE Export

export const MODULE_M2: Module = {
  id: 'm2',
  order: 2,
  title: { de: 'Module Title', en: 'Module Title', ar: 'عنوان الوحدة' },
  lessons: Object.keys(LESSONS).filter((k) => k.startsWith('m2-')),
  quizIds: Object.keys(QUIZZES).filter((k) => k.startsWith('m2-')),
};
