import { DISABLE_AUDIO } from "../constants/featureFlags";
import React from "react";
import { PronunciationSlide } from "../types";
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

interface PronunciationRuleCardProps {
  slide: PronunciationSlide;
}

const PronunciationRuleCard: React.FC<PronunciationRuleCardProps> = ({
  slide,
}) => {
  const { t, playSound } = useAppContext();

  return (
    <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-coptic-blue dark:text-coptic-gold">
          {t(slide.title)}
        </h2>
      </div>

      {/* Rule */}
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-6">
        <p className="text-lg">{t(slide.rule)}</p>
      </div>

      {/* Examples */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">
          {t({ de: "Beispiele", en: "Examples", ar: "Ø£Ù…Ø«Ù„Ø©" })}
        </h3>
        <div className="space-y-3">
          {slide.examples.map((example, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <span className="font-coptic text-3xl w-28">
                  {example.coptic}
                </span>
                <div>
                  <p className="font-semibold">{t(example.meaning)}</p>
                  <p className="text-sm italic text-gray-500 dark:text-gray-400">
                    {example.translit}
                  </p>
                </div>
              </div>
              <button
                style={{ display: DISABLE_AUDIO ? "none" : undefined }}
                onClick={() => !DISABLE_AUDIO && playSound()}
                className="p-2 rounded-full text-coptic-blue dark:text-coptic-gold hover:bg-coptic-blue/10 dark:hover:bg-coptic-gold/10"
                aria-label={t({
                  de: "Beispiel anhÃ¶ren",
                  en: "Listen to example",
                  ar: "Ø§Ø³ØªÙ…Ø¹ Ù„Ù„Ù…Ø«Ø§Ù„",
                })}
              >
                <SpeakerIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PronunciationRuleCard;
