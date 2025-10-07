// Import from modular structure
import { LETTERS, LESSONS, QUIZZES, MODULES } from './modules';

// Re-export for backward compatibility
export { LETTERS, LESSONS, QUIZZES, MODULES };

// Legacy MODULES export (keeping the old structure for now)
export const MODULES_LEGACY = {
    'm1': {
        id: 'm1',
        order: 1,
        title: { de: 'Alphabet', en: 'Alphabet', ar: 'الأبجدية' },
        lessons: ['l1-1', 'l1-2', 'l2-1', 'l2-2', 'l2-3', 'l2-4', 'l2-5', 'l2-6'],
        quizIds: ['q1-1', 'q1-2', 'q2-1', 'q2-2', 'q2-3', 'q2-4', 'q2-5', 'q2-6']
    },
    'm2': {
        id: 'm2',
        order: 2,
        title: { de: 'Zahlen & Nomen', en: 'Numbers & Nouns', ar: 'الأرقام والأسماء' },
        lessons: ['m2-l1', 'm2-l2'],
        quizIds: ['q2-l1', 'q2-l2']
    },
    'm3': {
        id: 'm3',
        order: 3,
        title: { de: 'Artikel & Pronomen', en: 'Articles & Pronouns', ar: 'الأدوات والضمائر' },
        lessons: ['l3-1', 'l3-2', 'l3-3', 'l3-4'],
        quizIds: ['q3-1', 'q3-2', 'q3-3', 'q3-4']
    },
    'm4': {
        id: 'm4',
        order: 4,
        title: { de: 'Verben', en: 'Verbs', ar: 'الأفعال' },
        lessons: ['l5-1'],
        quizIds: ['q5-1']
    }
};