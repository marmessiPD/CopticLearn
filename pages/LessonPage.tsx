// FIX: Create LessonPage component to resolve module error.
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LESSONS, LETTERS } from '../constants/data';
import { useAppContext } from '../context/AppContext';
import { Slide, AlphabetSlide, VocabSlide, SentenceSlide, PronunciationSlide, NumberSlide, GrammarSlide, ReadingSlide, ConversationSlide } from '../types';

import AlphabetSlideCard from '../components/AlphabetSlideCard';
import VocabCard from '../components/VocabCard';
import SentenceCard from '../components/SentenceCard';
import PronunciationRuleCard from '../components/PronunciationRuleCard';
import NumberCard from '../components/NumberCard';
import GrammarRuleCard from '../components/GrammarRuleCard';
import ReadingCard from '../components/ReadingCard';
import ConversationCard from '../components/ConversationCard';

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const LessonPage: React.FC = () => {
    const { lessonId } = useParams<{ lessonId: string }>();
    const { t } = useAppContext();
    const navigate = useNavigate();
    const lesson = lessonId ? LESSONS[lessonId] : undefined;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    if (!lesson) {
        return <div>{t({ de: 'Lektion nicht gefunden', en: 'Lesson not found', ar: 'الدرس غير موجود' })}</div>;
    }

    const goToNextSlide = () => {
        if (currentSlideIndex < lesson.slides.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const goToPrevSlide = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    };
    
    const handleGoToQuiz = () => {
        if (!lesson) return;
        try {
            const completedLessonsRaw = localStorage.getItem('coptic_completed_lessons');
            const completedLessons = completedLessonsRaw ? JSON.parse(completedLessonsRaw) : [];
            if (!completedLessons.includes(lesson.id)) {
                completedLessons.push(lesson.id);
                localStorage.setItem('coptic_completed_lessons', JSON.stringify(completedLessons));
            }
        } catch (error) {
            console.error("Failed to update completed lessons in localStorage:", error);
        }
        navigate(`/quiz/${lesson.quizId}`);
    };

    const renderSlide = (slide: Slide) => {
        switch (slide.type) {
            case 'alphabet':
                const letter = LETTERS[(slide as AlphabetSlide).letterId];
                if (!letter) return <div>Letter data missing</div>;
                return <AlphabetSlideCard slide={slide as AlphabetSlide} letter={letter} />;
            case 'vocab':
                return <VocabCard item={(slide as VocabSlide).item} />;
            case 'sentence':
                return <SentenceCard item={(slide as SentenceSlide).item} />;
            case 'pronunciation':
                return <PronunciationRuleCard slide={slide as PronunciationSlide} />;
            case 'number':
                return <NumberCard slide={slide as NumberSlide} />;
            case 'grammar':
                return <GrammarRuleCard slide={slide as GrammarSlide} />;
            case 'reading':
                 return <ReadingCard slide={slide as ReadingSlide} />;
            case 'conversation':
                 return <ConversationCard slide={slide as ConversationSlide} />;
            default:
                return <div>Unsupported slide type</div>;
        }
    };

    const currentSlide = lesson.slides[currentSlideIndex];
    const isFirstSlide = currentSlideIndex === 0;
    const isLastSlide = currentSlideIndex === lesson.slides.length - 1;

    return (
        <div className="container mx-auto max-w-4xl">
            <div className="flex justify-between items-center mb-4">
                <Link to={`/module/${lesson.moduleId}`} className="text-coptic-blue dark:text-coptic-gold hover:underline">
                    &larr; {t({de: "Zurück zum Modul", en: "Back to Module", ar: "العودة إلى الوحدة"})}
                </Link>
                <h2 className="text-2xl font-bold text-center">{t(lesson.title)}</h2>
                <div className="w-24 min-w-24"></div>
            </div>

            <div className="relative">
                {renderSlide(currentSlide)}
            </div>

            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={goToPrevSlide}
                    disabled={isFirstSlide}
                    className="flex items-center gap-2 px-4 py-2 bg-coptic-blue text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-coptic-gold dark:text-coptic-blue dark:disabled:bg-gray-600"
                >
                    <ArrowLeftIcon /> {t({de: "Zurück", en: "Previous", ar: "السابق"})}
                </button>

                <span>{t({de: "Folie", en: "Slide", ar: "شريحة"})} {currentSlideIndex + 1} / {lesson.slides.length}</span>
                
                {isLastSlide ? (
                    <button
                        onClick={handleGoToQuiz}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                        {t({de: "Zum Quiz", en: "Go to Quiz", ar: "إلى الاختبار"})} <ArrowRightIcon />
                    </button>
                ) : (
                    <button
                        onClick={goToNextSlide}
                        disabled={isLastSlide}
                        className="flex items-center gap-2 px-4 py-2 bg-coptic-blue text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-coptic-gold dark:text-coptic-blue dark:disabled:bg-gray-600"
                    >
                       {t({de: "Weiter", en: "Next", ar: "التالي"})} <ArrowRightIcon />
                    </button>
                )}
            </div>
        </div>
    );
};

export default LessonPage;