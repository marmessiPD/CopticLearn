import { DISABLE_AUDIO } from "../constants/featureFlags";
import React from "react";
import { NumberSlide } from "../types";
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

interface NumberCardProps {
  slide: NumberSlide;
}

const NumberCard: React.FC<NumberCardProps> = ({ slide }) => {
  const { t, playSound } = useAppContext();

  return (
    <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <div className="w-full h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
        <span className="text-8xl font-bold font-coptic text-coptic-blue dark:text-coptic-gold">
          {slide.copticSymbol}
        </span>
      </div>

      <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <p className="text-lg font-semibold">
          {t({ de: "Zahl", en: "Number", ar: "Ø§Ù„Ø±Ù‚Ù…" })}:{" "}
          <span className="text-2xl font-bold">{slide.number}</span>
        </p>
        <p className="text-5xl font-coptic mt-2">{slide.copticName}</p>
      </div>

      <div className="text-center mt-4">
        <button
          style={{ display: DISABLE_AUDIO ? "none" : undefined }}
          onClick={() => !DISABLE_AUDIO && playSound()}
          className="mt-2 inline-flex items-center px-4 py-2 bg-coptic-blue text-white rounded-full hover:bg-opacity-80 dark:bg-coptic-gold dark:text-coptic-blue"
          aria-label={t({
            de: "Aussprache anhÃ¶ren",
            en: "Listen to pronunciation",
            ar: "Ø§Ø³ØªÙ…Ø¹ Ù„Ù„Ù†Ø·Ù‚",
          })}
        >
          <SpeakerIcon className="mr-2 rtl:ml-2 rtl:mr-0" />{" "}
          {t({ de: "AnhÃ¶ren", en: "Listen", ar: "Ø§Ø³ØªÙ…Ø¹" })}
        </button>
      </div>
    </div>
  );
};

export default NumberCard;
