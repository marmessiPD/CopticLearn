// FIX: Create QuizPage component to resolve module error.
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QUIZZES, LESSONS } from '../constants/data';
import { useAppContext } from '../context/AppContext';
import { Question, MultipleChoiceQuestion, FillInTheBlankQuestion } from '../types';
import CopticKeyboard from '../components/CopticKeyboard';

const containsCoptic = (text: string): boolean => {
    // Coptic Unicode block range is U+2C80 to U+2CFF
    // Also include the older block for compatibility U+0370 to U+03FF (Greek and Coptic)
    const copticRegex = /[\u0370-\u03FF\u2C80-\u2CFF]/;
    return copticRegex.test(text);
};

const QuizPage: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const { t, updateProgress } = useAppContext();
    const navigate = useNavigate();
    const quiz = quizId ? QUIZZES[quizId] : undefined;
    const lesson = quiz ? LESSONS[quiz.lessonId] : undefined;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | string>>({});
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);

    if (!quiz || !lesson) {
        return <div>{t({ de: 'Quiz nicht gefunden', en: 'Quiz not found', ar: 'الاختبار غير موجود' })}</div>;
    }

    const handleAnswerSelect = (questionId: string, answer: number | string) => {
        setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
    };
    
    const handleVirtualKeyPress = (key: string) => {
        const question = quiz.questions[currentQuestionIndex];
        if (question.type === 'fill-in-the-blank') {
            const currentAnswer = (selectedAnswers[question.id] as string) || '';
            handleAnswerSelect(question.id, currentAnswer + key);
        }
    };
    
    const handleVirtualBackspace = () => {
        const question = quiz.questions[currentQuestionIndex];
        if (question.type === 'fill-in-the-blank') {
            const currentAnswer = (selectedAnswers[question.id] as string) || '';
            if (currentAnswer.length > 0) {
                handleAnswerSelect(question.id, currentAnswer.slice(0, -1));
            }
        }
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        const wrongQuestions: Question[] = [];

        quiz.questions.forEach(q => {
            let isCorrect = false;

            if (q.type === 'multiple-choice') {
                isCorrect = selectedAnswers[q.id] === q.correctAnswerIndex;
            } else if (q.type === 'fill-in-the-blank') {
                const answer = (selectedAnswers[q.id] as string) || '';
                isCorrect = answer.trim().toLowerCase() === q.correctAnswer.toLowerCase();
            }

            if (isCorrect) {
                correctAnswers++;
            } else {
                wrongQuestions.push(q);
            }
        });

        const finalScore = Math.round((correctAnswers / quiz.questions.length) * 100);
        setScore(finalScore);
        setWrongQuestions(wrongQuestions);
        updateProgress(quiz.id, finalScore);
        setIsFinished(true);
    };

    const renderQuestion = (question: Question) => {
        if (question.type === 'multiple-choice') {
            const mcq = question as MultipleChoiceQuestion;
            return (
                <div key={mcq.id}>
                    <p className="text-xl mb-4">{t(mcq.questionText)}</p>
                    <div className="space-y-3">
                        {mcq.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(mcq.id, index)}
                                className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                                    selectedAnswers[mcq.id] === index
                                        ? 'bg-coptic-blue/20 border-coptic-blue dark:bg-coptic-gold/20 dark:border-coptic-gold'
                                        : 'bg-gray-100 dark:bg-gray-700 border-transparent hover:border-coptic-blue/50'
                                }`}
                            >
                                {t(option)}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }
        if (question.type === 'fill-in-the-blank') {
            const fitb = question as FillInTheBlankQuestion;
            const textParts = t(fitb.questionText).split('___');
            const needsCopticKeyboard = containsCoptic(fitb.correctAnswer);

            return (
                <div key={fitb.id} className="w-full">
                    <div className="text-xl mb-4 text-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                        <label className="flex flex-wrap items-center justify-center">
                            {textParts[0]}
                            <input
                                type="text"
                                value={(selectedAnswers[fitb.id] as string) || ''}
                                onChange={(e) => handleAnswerSelect(fitb.id, e.target.value)}
                                className={`text-2xl text-center mx-2 p-1 w-40 border-b-2 border-gray-400 focus:border-coptic-blue dark:text-dark-text dark:bg-dark-primary dark:focus:border-coptic-gold outline-none ${needsCopticKeyboard ? 'font-coptic' : ''}`}
                                placeholder="?"
                                lang={needsCopticKeyboard ? "cop" : "auto"}
                                autoCapitalize="off"
                                autoCorrect="off"
                                autoComplete="off"
                            />
                            {textParts[1]}
                        </label>
                    </div>
                     {needsCopticKeyboard && <CopticKeyboard 
                        onKeyPress={handleVirtualKeyPress}
                        onBackspace={handleVirtualBackspace}
                    />}
                </div>
            )
        }
        return <div>Unsupported question type</div>;
    };
    
    if (isFinished) {
        const passed = score >= quiz.passScore;
        return (
            <div className="container mx-auto max-w-2xl">
                <div className="text-center p-8 bg-light-primary dark:bg-dark-secondary rounded-lg shadow-xl mb-6">
                    <h2 className="text-3xl font-bold mb-4">{t({de: "Ergebnis", en: "Result", ar: "النتيجة"})}</h2>
                    <p className="text-5xl font-bold mb-4">{score}%</p>
                    <p className={`text-2xl font-semibold mb-6 ${passed ? 'text-green-600' : 'text-red-600'}`}>
                        {passed
                            ? t({de: "Bestanden!", en: "Passed!", ar: "نجحت!"})
                            : t({de: "Nicht bestanden", en: "Failed", ar: "فشلت"})}
                    </p>
                    <p className="mb-6">{t({de: `Du benötigst ${quiz.passScore}% um zu bestehen.`, en: `You need ${quiz.passScore}% to pass.`, ar: `تحتاج إلى ${quiz.passScore}% للنجاح.`})}</p>
                </div>

                {/* Wrong Questions Section */}
                {wrongQuestions.length > 0 && (
                    <div className="bg-light-primary dark:bg-dark-secondary rounded-lg shadow-xl p-6 mb-6">
                        <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
                            {t({de: "Falsch beantwortet", en: "Incorrect Answers", ar: "إجابات خاطئة"})}
                        </h3>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            {t({de: "Bitte wiederhole diese Fragen:", en: "Please review these questions:", ar: "يرجى مراجعة هذه الأسئلة:"})}
                        </p>
                        <div className="space-y-4">
                            {wrongQuestions.map((question, index) => (
                                <div key={question.id} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-800">
                                    <p className="font-semibold mb-2">
                                        {index + 1}. {t(question.questionText)}
                                    </p>
                                    {question.type === 'multiple-choice' && (
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {t({de: "Bitte sieh dir die Lektion nochmal an.", en: "Please review the lesson.", ar: "يرجى مراجعة الدرس."})}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex justify-center gap-4">
                     <button onClick={() => {
                        setIsFinished(false);
                        setCurrentQuestionIndex(0);
                        setSelectedAnswers({});
                        setScore(0);
                        setWrongQuestions([]);
                        navigate(`/lesson/${lesson.id}`);
                     }} className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                        {t({de: "Lektion wiederholen", en: "Review Lesson", ar: "مراجعة الدرس"})}
                     </button>
                     <button onClick={() => navigate(`/module/${lesson.moduleId}`)} className="px-6 py-2 bg-coptic-blue text-white rounded-lg hover:bg-coptic-blue/80 dark:bg-coptic-gold dark:text-coptic-blue">
                         {t({de: "Zurück zum Modul", en: "Back to Module", ar: "العودة للوحدة"})}
                     </button>
                </div>
            </div>
        );
    }
    
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

    return (
        <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">{t(quiz.title)}</h2>
            <div className="bg-light-primary dark:bg-dark-secondary p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                {renderQuestion(currentQuestion)}
            </div>
            <div className="flex justify-between items-center mt-6">
                 <div>
                    {t({de: "Frage", en: "Question", ar: "سؤال"})} {currentQuestionIndex + 1} / {quiz.questions.length}
                </div>
                {isLastQuestion ? (
                    <button
                        onClick={handleSubmit}
                        disabled={selectedAnswers[currentQuestion.id] === undefined || selectedAnswers[currentQuestion.id] === ''}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
                    >
                       {t({de: "Abschließen", en: "Finish", ar: "إنهاء"})}
                    </button>
                ) : (
                    <button
                         onClick={() => setCurrentQuestionIndex(i => i + 1)}
                         disabled={selectedAnswers[currentQuestion.id] === undefined || selectedAnswers[currentQuestion.id] === ''}
                         className="px-6 py-2 bg-coptic-blue text-white rounded-lg hover:bg-opacity-80 dark:bg-coptic-gold dark:text-coptic-blue disabled:bg-gray-400"
                    >
                        {t({de: "Nächste", en: "Next", ar: "التالي"})}
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizPage;