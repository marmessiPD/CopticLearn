import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MODULES, LESSONS, QUIZZES } from '../constants/data';
import { useAppContext } from '../context/AppContext';

const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
);

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const ModulePage: React.FC = () => {
    const { moduleId } = useParams<{ moduleId: string }>();
    const { t, progress, role } = useAppContext();
    const module = moduleId ? MODULES[moduleId] : undefined;
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);

    useEffect(() => {
        try {
            const completedLessonsRaw = localStorage.getItem('coptic_completed_lessons');
            const completed = completedLessonsRaw ? JSON.parse(completedLessonsRaw) : [];
            setCompletedLessons(completed);
        } catch (error) {
            console.error("Failed to parse completed lessons from localStorage", error);
        }
    }, [moduleId]);

    if (!module) {
        return <div>{t({ de: 'Modul nicht gefunden', en: 'Module not found', ar: 'الوحدة غير موجودة' })}</div>;
    }

    const lessons = module.lessons
        .map(id => LESSONS[id])
        .sort((a, b) => a.order - b.order);

    const isLessonUnlocked = (lessonId: string): boolean => {
        if (role === 'admin') return true;
        const lesson = LESSONS[lessonId];
        if (!lesson.prerequisites || lesson.prerequisites.length === 0) {
            return true;
        }
        return lesson.prerequisites.every(prereqLessonId => {
            const prereqLesson = LESSONS[prereqLessonId];
            const quiz = QUIZZES[prereqLesson.quizId];
            return (progress[quiz.id] || 0) >= quiz.passScore;
        });
    };

    return (
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-coptic-blue dark:text-coptic-gold">{t(module.title)}</h2>
            <div className="space-y-4">
                {lessons.map((lesson, index) => {
                    const unlocked = isLessonUnlocked(lesson.id);
                    const isCompleted = completedLessons.includes(lesson.id);
                    return (
                        <div key={lesson.id}>
                            <Link 
                                to={unlocked ? `/lesson/${lesson.id}` : '#'}
                                className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                                    unlocked 
                                        ? 'bg-light-primary dark:bg-dark-secondary shadow-md hover:shadow-xl hover:bg-coptic-gold/10' 
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                                }`}
                                aria-disabled={!unlocked}
                            >
                                <div className="flex items-center">
                                    <div className={`flex items-center justify-center h-10 w-10 rounded-full mr-4 rtl:ml-4 rtl:mr-0 flex-shrink-0 ${
                                        unlocked ? 'bg-coptic-blue text-white dark:bg-coptic-gold dark:text-coptic-blue' : 'bg-gray-400 text-white'
                                    }`}>
                                        {index + 1}
                                    </div>
                                    <span className="font-semibold">{t(lesson.title)}</span>
                                </div>
                                <div className="flex-shrink-0 w-5 h-5">
                                    {!unlocked ? (
                                        <LockIcon />
                                    ) : isCompleted ? (
                                        <CheckIcon className="text-green-500" />
                                    ) : null}
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ModulePage;