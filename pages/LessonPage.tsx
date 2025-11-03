// FIX: Create LessonPage component to resolve module error.
import type React from "react";
import {
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
  useCallback,
} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { LESSONS, LETTERS } from "../constants/data";
import { useAppContext } from "../context/AppContext";
import type {
  Slide,
  AlphabetSlide,
  VocabSlide,
  SentenceSlide,
  PronunciationSlide,
  NumberSlide,
  GrammarSlide,
  ReadingSlide,
  ConversationSlide,
  DoSlide,
  DiscoverSlide,
  ExplainSlide,
  DrillSlide,
  QuizRefSlide,
  ExerciseSlide,
  TheologySlide,
} from "../types";
import { useTouchGestures } from "../hooks/useTouchGestures";

// Lazy load components for better performance
const AlphabetSlideCard = lazy(() => import("../components/AlphabetSlideCard"));
const VocabCard = lazy(() => import("../components/VocabCard"));
const SentenceCard = lazy(() => import("../components/SentenceCard"));
const PronunciationRuleCard = lazy(
  () => import("../components/PronunciationRuleCard")
);
const NumberCard = lazy(() => import("../components/NumberCard"));
const GrammarRuleCard = lazy(() => import("../components/GrammarRuleCard"));
const ReadingCard = lazy(() => import("../components/ReadingCard"));
const ConversationCard = lazy(() => import("../components/ConversationCard"));

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <title>Previous</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <title>Next</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { t } = useAppContext();
  const navigate = useNavigate();
  const lesson = lessonId ? LESSONS[lessonId] : undefined;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const goToNextSlide = useCallback(() => {
    if (lesson && currentSlideIndex < lesson.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }, [lesson, currentSlideIndex]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }, [currentSlideIndex]);

  // Touch gesture handling
  const { attachTouchListeners, detachTouchListeners } = useTouchGestures({
    onSwipeLeft: goToNextSlide,
    onSwipeRight: goToPrevSlide,
    threshold: 50,
    preventDefault: false,
  });

  useEffect(() => {
    const container = slideContainerRef.current;
    if (container) {
      attachTouchListeners(container);
      return () => detachTouchListeners(container);
    }
  }, [attachTouchListeners, detachTouchListeners]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          goToPrevSlide();
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNextSlide();
          break;
        case "Escape":
          event.preventDefault();
          navigate(`/module/${lesson.moduleId}`);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, lesson?.moduleId, goToNextSlide, goToPrevSlide]);

  if (!lesson) {
    return (
      <div>
        {t({
          de: "Lektion nicht gefunden",
          en: "Lesson not found",
          ar: "الدرس غير موجود",
        })}
      </div>
    );
  }

  const handleGoToQuiz = () => {
    if (!lesson) return;
    try {
      const completedLessonsRaw = localStorage.getItem(
        "coptic_completed_lessons"
      );
      const completedLessons = completedLessonsRaw
        ? JSON.parse(completedLessonsRaw)
        : [];
      if (!completedLessons.includes(lesson.id)) {
        completedLessons.push(lesson.id);
        localStorage.setItem(
          "coptic_completed_lessons",
          JSON.stringify(completedLessons)
        );
      }
    } catch (error) {
      console.error(
        "Failed to update completed lessons in localStorage:",
        error
      );
    }
    navigate(`/quiz/${lesson.quizId}`);
  };

  const renderSlide = (slide: Slide) => {
    // Helper function to create stable keys from content
    const createKey = (
      prefix: string,
      content: string | string[],
      idx: number
    ): string => {
      if (typeof content === "string") {
        // Use first 20 chars of content + hash of full content
        const hash = content.slice(0, 20).replace(/\s+/g, "-").substring(0, 20);
        return `${prefix}-${hash}-${idx}`;
      }
      // For arrays, use first element
      const first = Array.isArray(content) ? content[0] : String(content);
      const hash = String(first)
        .slice(0, 20)
        .replace(/\s+/g, "-")
        .substring(0, 20);
      return `${prefix}-${hash}-${idx}`;
    };

    switch (slide.type) {
      case "alphabet": {
        const letter = LETTERS[(slide as AlphabetSlide).letterId];
        if (!letter) return <div>Letter data missing</div>;
        return (
          <AlphabetSlideCard slide={slide as AlphabetSlide} letter={letter} />
        );
      }
      case "vocab":
        return (
          <VocabCard
            item={(slide as any).items || (slide as VocabSlide).item}
          />
        );
      case "sentence":
        return <SentenceCard item={(slide as SentenceSlide).item} />;
      case "pronunciation":
        return <PronunciationRuleCard slide={slide as PronunciationSlide} />;
      case "number":
        return <NumberCard slide={slide as NumberSlide} />;
      case "grammar":
        return <GrammarRuleCard slide={slide as GrammarSlide} />;
      case "reading":
        return <ReadingCard slide={slide as ReadingSlide} />;
      case "conversation":
        return <ConversationCard slide={slide as ConversationSlide} />;
      case "do": {
        const doSlide = slide as DoSlide;
        return (
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-coptic-blue dark:text-coptic-gold mb-4 text-center">
              {t({ de: "Aufgabe", en: "Activity", ar: "نشاط" })}
              {doSlide.minutes && (
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                  ({doSlide.minutes} {t({ de: "Min.", en: "min", ar: "دقائق" })}
                  )
                </span>
              )}
            </h2>
            <div className="space-y-3">
              {doSlide.tasks?.map((task: string, idx: number) => (
                <div
                  key={createKey("do-task", task, idx)}
                  className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  <p className="text-sm sm:text-base font-coptic">{task}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "discover": {
        const discoverSlide = slide as DiscoverSlide;
        return (
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-coptic-blue dark:text-coptic-gold mb-4 text-center">
              {t({ de: "Entdecken", en: "Discover", ar: "اكتشف" })}
            </h2>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
              <p className="text-sm sm:text-lg font-coptic">
                {discoverSlide.prompt}
              </p>
            </div>
          </div>
        );
      }
      case "explain": {
        const explainSlide = slide as ExplainSlide;
        return (
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-coptic-blue dark:text-coptic-gold mb-4 text-center">
              {t({ de: "Erklärung", en: "Explanation", ar: "شرح" })}
            </h2>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="text-sm sm:text-lg font-coptic whitespace-pre-wrap">
                {explainSlide.text?.split(/(\*\*.*?\*\*)/).map((part) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    const text = part.slice(2, -2);
                    return (
                      <strong key={`bold-${text.slice(0, 20)}`}>{text}</strong>
                    );
                  }
                  return <span key={`text-${part.slice(0, 20)}`}>{part}</span>;
                }) || ""}
              </div>
            </div>
          </div>
        );
      }
      case "drill": {
        const drillSlide = slide as DrillSlide;
        const modeLabels = {
          guided: { de: "Geführt", en: "Guided", ar: "موجه" },
          semi: { de: "Teilweise", en: "Semi-guided", ar: "نصف موجه" },
          free: { de: "Frei", en: "Free", ar: "حر" },
        };
        return (
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-coptic-blue dark:text-coptic-gold mb-4 text-center">
              {t({ de: "Übung", en: "Drill", ar: "تمرين" })} -{" "}
              {t(
                modeLabels[drillSlide.mode as keyof typeof modeLabels] ||
                  modeLabels.guided
              )}
            </h2>
            <div className="space-y-3">
              {drillSlide.items?.map((item: string | string[], idx: number) => {
                const itemKey = Array.isArray(item) ? item.join("-") : item;
                return (
                  <div
                    key={createKey("drill-item", itemKey, idx)}
                    className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    {Array.isArray(item) ? (
                      <div>
                        <p className="font-semibold mb-2">{item[0]}</p>
                        <p className="text-lg font-coptic">{item[1]}</p>
                      </div>
                    ) : (
                      <p className="text-sm sm:text-base font-coptic">{item}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
      case "quizRef": {
        const quizRefSlide = slide as QuizRefSlide;
        return (
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-coptic-blue dark:text-coptic-gold mb-4 text-center">
              {t({ de: "Quiz", en: "Quiz", ar: "اختبار" })}
            </h2>
            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate(`/quiz/${quizRefSlide.quizId}`)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 min-h-[44px] text-base sm:text-lg"
              >
                {t({
                  de: "Zum Quiz gehen",
                  en: "Go to Quiz",
                  ar: "انتقل إلى الاختبار",
                })}
              </button>
            </div>
          </div>
        );
      }
      case "exercise": {
        const exerciseSlide = slide as ExerciseSlide;
        return (
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-coptic-blue dark:text-coptic-gold mb-4 text-center">
              {t(exerciseSlide.title)}
            </h2>
            <div className="space-y-4">
              {exerciseSlide.tasks?.map((task, idx: number) => {
                const taskKey = task.prompt?.de || task.answer || String(idx);
                return (
                  <div
                    key={createKey("exercise-task", taskKey, idx)}
                    className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <p className="font-semibold mb-2">{t(task.prompt)}</p>
                    <p className="text-coptic-blue dark:text-coptic-gold font-coptic text-xl">
                      {task.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
      case "theology": {
        const theologySlide = slide as TheologySlide;
        return (
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <div className="text-center mb-4">
              {theologySlide.meta?.emoji && (
                <span className="text-4xl mb-2 block">
                  {theologySlide.meta.emoji}
                </span>
              )}
              <h2 className="text-xl sm:text-2xl font-bold text-coptic-blue dark:text-coptic-gold">
                {t(theologySlide.title)}
              </h2>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-sm sm:text-lg">{t(theologySlide.content)}</p>
            </div>
          </div>
        );
      }
      default:
        return <div>Unsupported slide type: {(slide as Slide).type}</div>;
    }
  };

  const currentSlide = lesson.slides[currentSlideIndex];
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === lesson.slides.length - 1;

  return (
    <div className="container mx-auto max-w-4xl px-2 sm:px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <Link
          to={`/module/${lesson.moduleId}`}
          className="text-coptic-blue dark:text-coptic-gold hover:underline text-sm sm:text-base order-2 sm:order-1"
        >
          &larr;{" "}
          {t({
            de: "Zurück zum Modul",
            en: "Back to Module",
            ar: "العودة إلى الوحدة",
          })}
        </Link>
        <h2 className="text-lg sm:text-2xl font-bold text-center order-1 sm:order-2">
          {t(lesson.title)}
        </h2>
        <div className="w-24 min-w-24 order-3"></div>
      </div>

      <div className="relative" ref={slideContainerRef}>
        <Suspense
          fallback={
            <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          }
        >
          {renderSlide(currentSlide)}
        </Suspense>

        {/* Navigation hints */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <span>←</span>
            <span>{t({ de: "Swipe", en: "Swipe", ar: "اسحب" })}</span>
            <span>→</span>
          </div>
          <div className="text-xs text-gray-400 dark:text-gray-500">
            {t({
              de: "oder Pfeiltasten",
              en: "or arrow keys",
              ar: "أو مفاتيح الأسهم",
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <button
          type="button"
          onClick={goToPrevSlide}
          disabled={isFirstSlide}
          className="flex items-center gap-2 px-4 py-3 bg-coptic-blue text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-coptic-gold dark:text-coptic-blue dark:disabled:bg-gray-600 min-h-[44px] touch-manipulation w-full sm:w-auto"
        >
          <ArrowLeftIcon className="h-5 w-5" />{" "}
          {t({ de: "Zurück", en: "Previous", ar: "السابق" })}
        </button>

        <span className="text-sm sm:text-base text-center">
          {t({ de: "Folie", en: "Slide", ar: "شريحة" })} {currentSlideIndex + 1}{" "}
          / {lesson.slides.length}
        </span>

        {isLastSlide ? (
          <button
            type="button"
            onClick={handleGoToQuiz}
            className="flex items-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 min-h-[44px] touch-manipulation w-full sm:w-auto"
          >
            {t({ de: "Zum Quiz", en: "Go to Quiz", ar: "إلى الاختبار" })}{" "}
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={goToNextSlide}
            disabled={isLastSlide}
            className="flex items-center gap-2 px-4 py-3 bg-coptic-blue text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-coptic-gold dark:text-coptic-blue dark:disabled:bg-gray-600 min-h-[44px] touch-manipulation w-full sm:w-auto"
          >
            {t({ de: "Weiter", en: "Next", ar: "التالي" })}{" "}
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
