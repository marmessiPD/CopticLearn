import React from "react";
import { AlphabetSlide, Letter } from "../types";
import { useAppContext } from "../context/AppContext";
import { DISABLE_AUDIO } from "../constants/featureFlags";

interface AlphabetSlideCardProps {
  slide: AlphabetSlide;
  letter: Letter;
}

const SpeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const BibleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </svg>
);

const FatherIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6h.008v.008H6V6z"
    />
  </svg>
);

const AlphabetSlideCard: React.FC<AlphabetSlideCardProps> = ({
  slide,
  letter,
}) => {
  const { t, playSound } = useAppContext();

  return (
    <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-3 sm:p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-coptic-blue dark:text-coptic-gold text-center sm:text-left">
          {t(letter.name)}
        </h2>
        <div className="text-4xl sm:text-6xl font-coptic text-center sm:text-right">
          <span className="text-gray-700 dark:text-gray-300">
            {letter.uppercase}
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">
            {letter.lowercase}
          </span>
        </div>
      </div>

      {/* Emoji */}
      <div className="w-full h-32 sm:h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
        <span
          className="text-6xl sm:text-8xl"
          role="img"
          aria-label={t(letter.exampleWord.meaning)}
        >
          {slide.emoji}
        </span>
      </div>

      {/* Example Word */}
      <div className="text-center mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-3xl sm:text-4xl font-coptic">
          {letter.exampleWord.coptic}
        </p>
        <p className="text-base sm:text-lg italic text-gray-600 dark:text-gray-400">
          {letter.exampleWord.translit}
        </p>
        <p className="text-base sm:text-lg font-semibold">
          {t(letter.exampleWord.meaning)}
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-center mb-6">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
          <p className="font-bold text-sm sm:text-base">
            {t({ de: "Aussprache", en: "Pronunciation", ar: "Ø§Ù„Ù†Ø·Ù‚" })}
          </p>
          <p className="text-sm sm:text-lg">{t(letter.pronunciation)}</p>
        </div>
        <div className="p-3 bg-green-50 dark:bg-green-900/50 rounded-lg">
          <p className="font-bold text-sm sm:text-base">
            {t({
              de: "Zahlenwert",
              en: "Numeric Value",
              ar: "Ø§Ù„Ù‚ÙŠÙ…Ø© Ø§Ù„Ø¹Ø¯Ø¯ÙŠØ©",
            })}
          </p>
          <p className="text-xl sm:text-2xl font-mono">{letter.numeric}</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-sm sm:text-base">{t(slide.explanation)}</p>
        </div>
      </div>

      {/* Spiritual Content Section */}
      {slide.spiritual && (
        <div className="mt-6 border-t-2 border-coptic-gold/20 pt-4 space-y-4">
          <h3 className="text-center text-base sm:text-lg font-bold text-coptic-blue dark:text-coptic-gold">
            {t({
              de: "Spiritueller Bezug",
              en: "Spiritual Context",
              ar: "Ø§Ù„Ø³ÙŠØ§Ù‚ Ø§Ù„Ø±ÙˆØ­ÙŠ",
            })}
          </h3>

          {/* Bible Verse */}
          {slide.spiritual.bibleVerse && slide.spiritual.bibleReference && (
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
              <BibleIcon className="flex-shrink-0 mt-1 h-5 w-5 text-coptic-blue dark:text-blue-300" />
              <div className="min-w-0 flex-1">
                <p className="italic text-sm sm:text-base">
                  "{t(slide.spiritual.bibleVerse)}"
                </p>
                <p className="text-right text-xs sm:text-sm font-semibold mt-1">
                  {t(slide.spiritual.bibleReference)}
                </p>
              </div>
            </div>
          )}

          {/* Father Quote */}
          {slide.spiritual.fatherQuote && (
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/50 rounded-lg">
              <FatherIcon className="flex-shrink-0 mt-1 h-5 w-5 text-green-700 dark:text-green-300" />
              <div className="min-w-0 flex-1">
                <p className="italic text-sm sm:text-base">
                  "{t(slide.spiritual.fatherQuote)}"
                </p>
                <p className="text-right text-xs sm:text-sm font-semibold mt-1">
                  {t(slide.spiritual.fatherReference)}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AlphabetSlideCard;
