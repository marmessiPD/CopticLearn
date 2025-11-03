import { DISABLE_AUDIO } from "../constants/featureFlags";
import React from "react";
import { SentenceItem } from "../types";
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

interface SentenceCardProps {
  item: SentenceItem;
}

const SentenceCard: React.FC<SentenceCardProps> = ({ item }) => {
  const { t, playSound } = useAppContext();

  return (
    <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-3xl font-coptic text-center">{item.text}</p>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-lg italic text-gray-600 dark:text-gray-400 text-center">
            {item.translit}
          </p>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
          <p className="text-xl font-semibold text-center">{t(item.meaning)}</p>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          style={{ display: DISABLE_AUDIO ? "none" : undefined }}
          onClick={() => !DISABLE_AUDIO && playSound(item.text)}
          className="mt-2 inline-flex items-center px-4 py-2 bg-coptic-blue text-white rounded-full hover:bg-opacity-80 dark:bg-coptic-gold dark:text-coptic-blue"
          aria-label={t({
            de: "Satz anhÃ¶ren",
            en: "Listen to sentence",
            ar: "Ø§Ø³ØªÙ…Ø¹ Ù„Ù„Ø¬Ù…Ù„Ø©",
          })}
        >
          <SpeakerIcon className="mr-2 rtl:ml-2 rtl:mr-0" />{" "}
          {t({ de: "AnhÃ¶ren", en: "Listen", ar: "Ø§Ø³ØªÙ…Ø¹" })}
        </button>
      </div>
    </div>
  );
};

export default SentenceCard;
