import { DISABLE_AUDIO } from "../constants/featureFlags";
import React from "react";
import { VocabItem } from "../types";
import { useAppContext } from "../context/AppContext";

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

interface VocabCardProps {
  item: VocabItem | VocabItem[];
}

const VocabCard: React.FC<VocabCardProps> = ({ item }) => {
  const { t, playSound } = useAppContext();

  // Safety check to prevent errors if item is undefined
  if (!item) {
    return (
      <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-md mx-auto">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>No vocabulary data available</p>
        </div>
      </div>
    );
  }

  // Handle array of items
  if (Array.isArray(item)) {
    return (
      <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {item.map((vocabItem, index) => {
            if (!vocabItem || !vocabItem.meaning) {
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                >
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <p>Invalid vocabulary item</p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
              >
                <div className="w-full h-24 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg mb-3">
                  <span
                    className="text-3xl sm:text-4xl"
                    role="img"
                    aria-label={t(vocabItem.meaning)}
                  >
                    {vocabItem.emoji || "📝"}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-coptic">
                    {vocabItem.coptic || "N/A"}
                  </p>
                  <p className="text-sm sm:text-base italic text-gray-600 dark:text-gray-400 mt-1">
                    {vocabItem.translit || "N/A"}
                  </p>
                  <p className="text-base sm:text-lg font-semibold mt-2">
                    {t(vocabItem.meaning)}
                  </p>
                </div>
                <div className="text-center mt-3">
                  <button
                    style={{ display: DISABLE_AUDIO ? "none" : undefined }}
                    onClick={() => !DISABLE_AUDIO && playSound()}
                    className="inline-flex items-center px-3 py-2 bg-coptic-blue text-white rounded-full hover:bg-opacity-80 dark:bg-coptic-gold dark:text-coptic-blue text-xs sm:text-sm"
                    aria-label={t({
                      de: "Wort anhÃ¶ren",
                      en: "Listen to word",
                      ar: "Ø§Ø³ØªÙ…Ø¹ Ù„Ù„ÙƒÙ„Ù…Ø©",
                    })}
                  >
                    <SpeakerIcon className="mr-1 h-4 w-4" />
                    {t({ de: "AnhÃ¶ren", en: "Listen", ar: "Ø§Ø³ØªÙ…Ø¹" })}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Handle single item
  return (
    <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-4 sm:p-6 max-w-md mx-auto">
      <div className="w-full h-32 sm:h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
        <span
          className="text-5xl sm:text-7xl"
          role="img"
          aria-label={t(item.meaning)}
        >
          {item.emoji}
        </span>
      </div>

      <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <p className="text-3xl sm:text-5xl font-coptic">{item.coptic}</p>
        <p className="text-lg sm:text-xl italic text-gray-600 dark:text-gray-400 mt-1">
          {item.translit}
        </p>
        <p className="text-xl sm:text-2xl font-semibold mt-2">
          {t(item.meaning)}
        </p>
      </div>

      <div className="text-center mt-4">
        <button
          style={{ display: DISABLE_AUDIO ? "none" : undefined }}
          onClick={() => !DISABLE_AUDIO && playSound()}
          className="mt-2 inline-flex items-center px-4 py-3 bg-coptic-blue text-white rounded-full hover:bg-opacity-80 dark:bg-coptic-gold dark:text-coptic-blue min-h-[44px] min-w-[44px] text-sm sm:text-base"
          aria-label={t({
            de: "Wort anhÃ¶ren",
            en: "Listen to word",
            ar: "Ø§Ø³ØªÙ…Ø¹ Ù„Ù„ÙƒÙ„Ù…Ø©",
          })}
        >
          <SpeakerIcon className="mr-2 rtl:ml-2 rtl:mr-0" />{" "}
          {t({ de: "AnhÃ¶ren", en: "Listen", ar: "Ø§Ø³ØªÙ…Ø¹" })}
        </button>
      </div>
    </div>
  );
};

export default VocabCard;
