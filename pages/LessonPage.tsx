import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LESSONS, LEVELS, ALPHABET_SLIDES, LETTERS, VOCAB_ITEMS, SENTENCE_ITEMS, PRONUNCIATION_SLIDES } from '../constants/data';
import { useAppContext } from '../context/AppContext';
import AlphabetSlideCard from '../components/AlphabetSlideCard';
import VocabCard from '../components/VocabCard';
import SentenceCard from '../components/SentenceCard';
import PronunciationRuleCard from '../components/PronunciationRuleCard';
import { LessonType } from '../types';

const LessonPage: React.FC = () => {
    const { lessonId } = useParams<{ lessonId: string }>();
    const { t } = useAppContext();
    const navigate = useNavigate();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const lesson = lessonId ? LESSONS[lessonId] : undefined;

    if (!lesson) {
        return <div>{t({ de: 'Lektion nicht gefunden', en: 'Lesson not found', ar: 'الدرس غير موجود' })}</div>;
    }
    
    // For simplicity, we'll assume a lesson has one level, and we get all slides from it.
    const level = lesson.levels.length > 0 ? LEVELS[lesson.levels[0]] : undefined;
    const slides = level ? level.slides : [];
    
    const goToNextSlide = () => {
        if (currentSlideIndex < slides.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };
    
    const goToPrevSlide = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    };

    const renderSlideContent = () => {
        if (slides.length === 0) {
            return <p>This lesson has no content yet.</p>;
        }
        
        const slideId = slides[currentSlideIndex];

        switch (lesson.type) {
            case LessonType.ALPHABET: {
                const slideData = ALPHABET_SLIDES[slideId];
                if (!slideData) return <p>Slide data not found.</p>;
                const letterData = LETTERS[slideData.letterId];
                if (!letterData) return <p>Letter data not found.</p>;
                return <AlphabetSlideCard slide={slideData} letter={letterData} />;
            }
            case LessonType.VOCAB: {
                const vocabData = VOCAB_ITEMS[slideId];
                if (!vocabData) return <p>Vocabulary item not found.</p>;
                return <VocabCard item={vocabData} />;
            }
            case LessonType.SENTENCES: {
                const sentenceData = SENTENCE_ITEMS[slideId];
                if (!sentenceData) return <p>Sentence item not found.</p>;
                return <SentenceCard item={sentenceData} />;
            }
            case LessonType.PRONUNCIATION: {
                const slideData = PRONUNCIATION_SLIDES[slideId];
                if (!slideData) return <p>Pronunciation rule not found.</p>;
                return <PronunciationRuleCard slide={slideData} />;
            }
            default:
                return <p className="text-center p-8 bg-light-primary dark:bg-dark-secondary rounded-lg">Lesson type '{lesson.type}' not yet implemented.</p>;
        }
    };
    
    const progressPercentage = slides.length > 0 ? ((currentSlideIndex + 1) / slides.length) * 100 : 0;

    return (
        <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold mb-2 text-center text-coptic-blue dark:text-coptic-gold">{t(lesson.title)}</h2>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                <div className="bg-coptic-blue dark:bg-coptic-gold h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
            </div>

            {renderSlideContent()}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
                <button 
                    onClick={goToPrevSlide} 
                    disabled={currentSlideIndex === 0}
                    className="px-6 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
                    {t({ de: 'Zurück', en: 'Back', ar: 'السابق' })}
                </button>
                <span className="text-gray-600 dark:text-gray-400">{currentSlideIndex + 1} / {slides.length}</span>
                {currentSlideIndex === slides.length - 1 ? (
                     <Link to={`/quiz/${lesson.quizId}`} className="px-6 py-2 bg-coptic-blue text-white dark:bg-coptic-gold dark:text-coptic-blue rounded-lg font-bold">
                        {t({ de: 'Zum Quiz', en: 'To Quiz', ar: 'إلى الاختبار' })}
                    </Link>
                ) : (
                    <button 
                        onClick={goToNextSlide}
                        className="px-6 py-2 bg-coptic-blue text-white dark:bg-coptic-gold dark:text-coptic-blue rounded-lg">
                        {t({ de: 'Weiter', en: 'Next', ar: 'التالي' })}
                    </button>
                )}
            </div>
             <button onClick={() => navigate(`/module/${lesson.moduleId}`)} className="mt-6 text-sm text-coptic-blue dark:text-coptic-gold hover:underline">
                &larr; {t({de: 'Zurück zur Lektionsübersicht', en: 'Back to Lesson List', ar: 'العودة إلى قائمة الدروس'})}
             </button>
        </div>
    );
};

export default LessonPage;