import React from 'react';
import { AlphabetSlide, Letter } from '../types';
import { useAppContext } from '../context/AppContext';

interface AlphabetSlideCardProps {
    slide: AlphabetSlide;
    letter: Letter;
}

const SpeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const BibleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const FatherIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
);

const AlphabetSlideCard: React.FC<AlphabetSlideCardProps> = ({ slide, letter }) => {
    const { t, playSound } = useAppContext();

    return (
        <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-coptic-blue dark:text-coptic-gold">{t(letter.name)}</h2>
                <div className="text-6xl font-coptic text-right">
                    <span className="text-gray-700 dark:text-gray-300">{letter.uppercase}</span>
                    <span className="text-gray-500 dark:text-gray-400">{letter.lowercase}</span>
                </div>
            </div>

            {/* Emoji */}
            <div className="w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
                <span className="text-8xl" role="img" aria-label={t(letter.exampleWord.meaning)}>{slide.emoji}</span>
            </div>
            
            {/* Example Word */}
            <div className="text-center mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="text-4xl font-coptic">{letter.exampleWord.coptic}</p>
                <p className="text-lg italic text-gray-600 dark:text-gray-400">{letter.exampleWord.translit}</p>
                <p className="text-lg font-semibold">{t(letter.exampleWord.meaning)}</p>
                <button 
                    onClick={() => playSound(t(letter.exampleWord.meaning))}
                    className="mt-2 inline-flex items-center px-3 py-1 bg-coptic-blue text-white rounded-full hover:bg-opacity-80 dark:bg-coptic-gold dark:text-coptic-blue"
                    aria-label={t({de: 'Wort anhören', en: 'Listen to word', ar: 'استمع للكلمة'})}
                >
                    <SpeakerIcon className="mr-2 rtl:ml-2 rtl:mr-0"/> {t({de: 'Wort', en: 'Word', ar: 'الكلمة'})}
                </button>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 text-center mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                    <p className="font-bold">{t({ de: 'Aussprache', en: 'Pronunciation', ar: 'النطق' })}</p>
                    <p className="text-lg">{t(letter.pronunciation)}</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/50 rounded-lg">
                    <p className="font-bold">{t({ de: 'Zahlenwert', en: 'Numeric Value', ar: 'القيمة العددية' })}</p>
                    <p className="text-2xl font-mono">{letter.numeric}</p>
                </div>
            </div>

            {/* Explanation */}
            <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                     <button 
                        onClick={() => playSound(t(letter.name))}
                        className="flex-shrink-0 mt-1 text-coptic-blue dark:text-coptic-gold"
                        aria-label={t({de: 'Buchstabenname anhören', en: 'Listen to letter name', ar: 'استمع لاسم الحرف'})}
                    >
                        <SpeakerIcon />
                     </button>
                     <p>{t(slide.explanation)}</p>
                </div>
            </div>

            {/* Spiritual Content Section */}
            <div className="mt-6 border-t-2 border-coptic-gold/20 pt-4 space-y-4">
                <h3 className="text-center text-lg font-bold text-coptic-blue dark:text-coptic-gold">{t({de: "Spiritueller Bezug", en: "Spiritual Context", ar: "السياق الروحي"})}</h3>
                
                {/* Bible Verse */}
                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                    <BibleIcon className="flex-shrink-0 mt-1 h-5 w-5 text-coptic-blue dark:text-blue-300"/>
                    <div>
                        <p className="italic">"{t(slide.spiritual.bibleVerse)}"</p>
                        <p className="text-right text-sm font-semibold mt-1">{t(slide.spiritual.bibleReference)}</p>
                    </div>
                </div>

                {/* Father Quote */}
                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/50 rounded-lg">
                    <FatherIcon className="flex-shrink-0 mt-1 h-5 w-5 text-green-700 dark:text-green-300"/>
                     <div>
                        <p className="italic">"{t(slide.spiritual.fatherQuote)}"</p>
                        <p className="text-right text-sm font-semibold mt-1">{t(slide.spiritual.fatherReference)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlphabetSlideCard;