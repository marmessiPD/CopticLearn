import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QUIZZES, QUIZ_QUESTIONS, LESSONS, LETTERS } from '../constants/data';
import { QuizQuestion, QuizQuestionType, Letter } from '../types';
import { useAppContext } from '../context/AppContext';

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);

const SpeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const QuizPage: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const navigate = useNavigate();
    const { t, role, updateProgress, playSound } = useAppContext();
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    
    const quiz = quizId ? QUIZZES[quizId] : undefined;
    const questions: QuizQuestion[] = quiz ? quiz.questions.map(id => QUIZ_QUESTIONS[id]) : [];
    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerSubmit = () => {
        if (selectedAnswer === null) return;
        setIsAnswered(true);
        if (Array.isArray(currentQuestion.answer) && currentQuestion.answer.includes(selectedAnswer)) {
            setScore(prev => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        setIsAnswered(false);
        setSelectedAnswer(null);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    };
    
    const handlePlayListenQuestion = () => {
        if (currentQuestion.type !== QuizQuestionType.LISTEN) return;
        
        const findLetterByCharacter = (char: string): Letter | undefined => {
            return Object.values(LETTERS).find(l => l.uppercase === char || l.lowercase === char);
        }

        const answerIndex = currentQuestion.answer[0] as number;
        const correctOption = currentQuestion.options[answerIndex] as string;
        
        const letterData = findLetterByCharacter(correctOption);

        if (letterData) {
            const pronunciationString = t(letterData.pronunciation);
            const match = pronunciationString.match(/"([^"]+)"/);
            const sound = match ? match[1] : letterData.lowercase;
            playSound(sound);
        }
    };

    useEffect(() => {
        if (showResults && quiz) {
            const finalScore = score / questions.length;
            updateProgress(quiz.id, finalScore);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showResults]);

    if (!quiz || questions.length === 0) {
        return <div>{t({ de: 'Quiz nicht gefunden', en: 'Quiz not found', ar: 'الاختبار غير موجود' })}</div>;
    }

    if (showResults) {
        const finalScore = score / questions.length;
        const passed = finalScore >= quiz.passScore;
        const lesson = LESSONS[quiz.lessonId];
        return (
            <div className="text-center max-w-md mx-auto bg-light-primary dark:bg-dark-secondary p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{t({ de: 'Ergebnisse', en: 'Results', ar: 'النتائج' })}</h2>
                <p className="text-lg mb-4">{t({ de: 'Du hast', en: 'You scored', ar: 'لقد حصلت على' })} {score} / {questions.length}</p>
                <div className={`p-4 rounded-lg text-xl font-bold ${passed ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'}`}>
                    {passed ? t({ de: 'Bestanden!', en: 'Passed!', ar: 'نجحت!' }) : t({ de: 'Nicht bestanden', en: 'Failed', ar: 'فشلت' })}
                </div>
                <button onClick={() => navigate(`/module/${lesson.moduleId}`)} className="mt-6 px-6 py-2 bg-coptic-blue text-white dark:bg-coptic-gold dark:text-coptic-blue rounded-lg font-bold">
                   {t({ de: 'Zurück zum Modul', en: 'Back to Module', ar: 'العودة إلى الوحدة' })}
                </button>
            </div>
        );
    }
    
    const isCorrect = isAnswered && Array.isArray(currentQuestion.answer) && currentQuestion.answer.includes(selectedAnswer!);

    return (
        <div className="max-w-xl mx-auto bg-light-primary dark:bg-dark-secondary p-6 rounded-lg shadow-lg">
            <div className="mb-4">
                <p className="text-sm text-gray-500">{t({ de: 'Frage', en: 'Question', ar: 'سؤال' })} {currentQuestionIndex + 1}/{questions.length}</p>
                <h3 className="text-xl font-semibold">{t(currentQuestion.prompt)}</h3>
            </div>

            {currentQuestion.type === QuizQuestionType.LISTEN && (
                <div className="my-4 text-center">
                    <button 
                        className="p-4 bg-coptic-blue dark:bg-coptic-gold text-white dark:text-coptic-blue rounded-full inline-flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coptic-blue dark:focus:ring-coptic-gold"
                        onClick={handlePlayListenQuestion}
                        aria-label={t({de: "Audio abspielen", en: "Play audio", ar: "تشغيل الصوت"})}
                    >
                        <SpeakerIcon className="h-8 w-8" />
                    </button>
                </div>
            )}
            
            {(currentQuestion.type === QuizQuestionType.MCQ || currentQuestion.type === QuizQuestionType.LISTEN) && (
                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                        let buttonClass = "w-full text-left p-3 rounded-lg border-2 transition-colors font-coptic text-2xl ";
                        if (isAnswered) {
                            if (Array.isArray(currentQuestion.answer) && currentQuestion.answer.includes(index)) {
                                buttonClass += "bg-green-100 dark:bg-green-900 border-green-500";
                            } else if (selectedAnswer === index) {
                                buttonClass += "bg-red-100 dark:bg-red-900 border-red-500";
                            } else {
                                buttonClass += "border-gray-300 dark:border-gray-600 opacity-60";
                            }
                        } else {
                            if (selectedAnswer === index) {
                                buttonClass += "bg-coptic-blue/20 dark:bg-coptic-gold/20 border-coptic-blue dark:border-coptic-gold";
                            } else {
                                buttonClass += "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700";
                            }
                        }

                        return (
                            <button key={index} onClick={() => !isAnswered && setSelectedAnswer(index)} disabled={isAnswered} className={buttonClass}>
                                {typeof option === 'string' ? option : t(option.meaning)}
                            </button>
                        );
                    })}
                </div>
            )}
            
            {isAnswered && (
                <div className={`mt-4 p-3 rounded-lg ${isCorrect ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                    <div className="flex items-center">
                        {isCorrect ? <CheckIcon className="text-green-600 dark:text-green-400 mr-2" /> : <XIcon className="text-red-600 dark:text-red-400 mr-2" />}
                        <p className={`font-bold ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                            {isCorrect ? t({ de: 'Richtig!', en: 'Correct!', ar: 'صحيح!' }) : t({ de: 'Falsch', en: 'Incorrect', ar: 'خطأ' })}
                        </p>
                    </div>
                    {(role === 'admin' || role === 'diener') && (
                        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{t(currentQuestion.solution)}</p>
                    )}
                </div>
            )}
            
            <div className="mt-6 text-right">
                {isAnswered ? (
                    <button onClick={handleNextQuestion} className="px-6 py-2 bg-coptic-blue text-white dark:bg-coptic-gold dark:text-coptic-blue rounded-lg font-bold">
                        {currentQuestionIndex < questions.length - 1 ? t({ de: 'Nächste', en: 'Next', ar: 'التالي' }) : t({ de: 'Ergebnisse', en: 'Results', ar: 'النتائج' })}
                    </button>
                ) : (
                    <button onClick={handleAnswerSubmit} disabled={selectedAnswer === null} className="px-6 py-2 bg-coptic-blue text-white dark:bg-coptic-gold dark:text-coptic-blue rounded-lg font-bold disabled:bg-gray-400 disabled:dark:bg-gray-600 disabled:cursor-not-allowed">
                        {t({ de: 'Prüfen', en: 'Check', ar: 'تحقق' })}
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizPage;