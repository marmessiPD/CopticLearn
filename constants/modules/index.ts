// Central module index - exports all modules and their content
import { MODULE_M1, LETTERS as LETTERS_M1, LESSONS as LESSONS_M1, QUIZZES as QUIZZES_M1 } from './module1';
import type { Module } from '../../types';

// Import modules from the modules subdirectory
import { LESSONS as LESSONS_M2, QUIZZES as QUIZZES_M2 } from './module2';
import { LESSONS as LESSONS_M3, QUIZZES as QUIZZES_M3 } from './module3';
import { LESSONS as LESSONS_M4, QUIZZES as QUIZZES_M4 } from './module4';
import { LESSONS as LESSONS_M5, QUIZZES as QUIZZES_M5 } from './module5';
import { LESSONS as LESSONS_M6, QUIZZES as QUIZZES_M6 } from './module6';
import { LESSONS as LESSONS_M9, QUIZZES as QUIZZES_M9 } from './module9';
import { LESSONS as LESSONS_M10, QUIZZES as QUIZZES_M10 } from './module10';
import { LESSONS as LESSONS_M11, QUIZZES as QUIZZES_M11 } from './module11';
import { LESSONS as LESSONS_M12, QUIZZES as QUIZZES_M12 } from './module12';
import { LESSONS as LESSONS_M13, QUIZZES as QUIZZES_M13 } from './module13';
import { LESSONS as LESSONS_M14, QUIZZES as QUIZZES_M14 } from './module14';
import { LESSONS as LESSONS_M15, QUIZZES as QUIZZES_M15 } from './module15';
import { LESSONS as LESSONS_M16, QUIZZES as QUIZZES_M16 } from './module16';

// Export Module 1 content
export { MODULE_M1, LETTERS_M1, LESSONS_M1, QUIZZES_M1 };

// Combined exports for backward compatibility
export const LETTERS = {
  ...LETTERS_M1,
  // Add other module letters here as you create them
};

export const LESSONS = {
  ...LESSONS_M1,
  ...LESSONS_M2,
  ...LESSONS_M3,
  ...LESSONS_M4,
  ...LESSONS_M5,
  ...LESSONS_M6,
  ...LESSONS_M9,
  ...LESSONS_M10,
  ...LESSONS_M11,
  ...LESSONS_M12,
  ...LESSONS_M13,
  ...LESSONS_M14,
  ...LESSONS_M15,
  ...LESSONS_M16,
};

export const QUIZZES = {
  ...QUIZZES_M1,
  ...QUIZZES_M2,
  ...QUIZZES_M3,
  ...QUIZZES_M4,
  ...QUIZZES_M5,
  ...QUIZZES_M6,
  ...QUIZZES_M9,
  ...QUIZZES_M10,
  ...QUIZZES_M11,
  ...QUIZZES_M12,
  ...QUIZZES_M13,
  ...QUIZZES_M14,
  ...QUIZZES_M15,
  ...QUIZZES_M16,
};

// Create module objects for modules that don't have them
const MODULE_M2: Module = {
  id: 'm2',
  order: 2,
  title: { de: 'Zahlen', en: 'Numbers', ar: 'الأرقام' },
  lessons: ['m2-l1', 'm2-l2', 'm2-l3'],
  quizIds: ['q2-1', 'q2-2', 'q2-3'],
};

const MODULE_M3: Module = {
  id: 'm3',
  order: 3,
  title: { de: 'Artikel & Pronomen', en: 'Articles & Pronouns', ar: 'الأدوات والضمائر' },
  lessons: ['m3-l1', 'm3-l2', 'm3-l3'],
  quizIds: ['q3-1', 'q3-2', 'q3-3'],
};

const MODULE_M4: Module = {
  id: 'm4',
  order: 4,
  title: { de: 'Verben', en: 'Verbs', ar: 'الأفعال' },
  lessons: Object.keys(LESSONS_M4).filter((k) => k.startsWith('m4-')),
  quizIds: [],
};

const MODULE_M5: Module = {
  id: 'm5',
  order: 5,
  title: { de: 'Adjektive', en: 'Adjectives', ar: 'الصفات' },
  lessons: Object.keys(LESSONS_M5).filter((k) => k.startsWith('l5-')),
  quizIds: [],
};

const MODULE_M6: Module = {
  id: 'm6',
  order: 6,
  title: { de: 'Präpositionen', en: 'Prepositions', ar: 'حروف الجر' },
  lessons: ['m6-l1', 'm6-l2', 'm6-l3', 'm6-l4', 'm6-l5'],
  quizIds: ['q6-1', 'q6-2', 'q6-3', 'q6-4', 'q6-5'],
};

const MODULE_M9: Module = {
  id: 'm9',
  order: 9,
  title: { de: 'Relativsätze', en: 'Relative Clauses', ar: 'جمل الوصل' },
  lessons: Object.keys(LESSONS_M9).filter((k) => k.startsWith('m9-')),
  quizIds: [],
};

const MODULE_M10: Module = {
  id: 'm10',
  order: 10,
  title: { de: 'Weitere Zeiten', en: 'Additional Tenses', ar: 'أزمنة إضافية' },
  lessons: Object.keys(LESSONS_M10).filter((k) => k.startsWith('m10-')),
  quizIds: [],
};

const MODULE_M11: Module = {
  id: 'm11',
  order: 11,
  title: { de: 'Imperativ & Bitten', en: 'Imperative & Requests', ar: 'الأمر والالتماس' },
  lessons: Object.keys(LESSONS_M11).filter((k) => k.startsWith('m11-')),
  quizIds: [],
};

const MODULE_M12: Module = {
  id: 'm12',
  order: 12,
  title: { de: 'Präpositionen I: Ort & Richtung', en: 'Prepositions I: Place & Direction', ar: 'حروف الجر ١: المكان والاتجاه' },
  lessons: Object.keys(LESSONS_M12).filter((k) => k.startsWith('m12-')),
  quizIds: [],
};

const MODULE_M13: Module = {
  id: 'm13',
  order: 13,
  title: { de: 'Konjunktionen & Nebensätze', en: 'Conjunctions & Clauses', ar: 'حروف العطف والجمل' },
  lessons: Object.keys(LESSONS_M13).filter((k) => k.startsWith('m13-')),
  quizIds: [],
};

const MODULE_M14: Module = {
  id: 'm14',
  order: 14,
  title: { de: 'Imperativ & Aufforderung', en: 'Imperative & Commands', ar: 'صيغة الأمر' },
  lessons: Object.keys(LESSONS_M14).filter((k) => k.startsWith('m14-')),
  quizIds: [],
};

const MODULE_M15: Module = {
  id: 'm15',
  order: 15,
  title: { de: 'Besitz', en: 'Possession', ar: 'الملكية' },
  lessons: Object.keys(LESSONS_M15).filter((k) => k.startsWith('l15-')),
  quizIds: [],
};

const MODULE_M16: Module = {
  id: 'm16',
  order: 16,
  title: { de: 'Vergleiche', en: 'Comparisons', ar: 'المقارنات' },
  lessons: Object.keys(LESSONS_M16).filter((k) => k.startsWith('l16-')),
  quizIds: [],
};

export const MODULES = {
  m1: MODULE_M1,
  m2: MODULE_M2,
  m3: MODULE_M3,
  m4: MODULE_M4,
  m5: MODULE_M5,
  m6: MODULE_M6,
  m9: MODULE_M9,
  m10: MODULE_M10,
  m11: MODULE_M11,
  m12: MODULE_M12,
  m13: MODULE_M13,
  m14: MODULE_M14,
  m15: MODULE_M15,
  m16: MODULE_M16,
};

// Type exports
export type { Module, Lesson, Quiz, Letter } from '../types';