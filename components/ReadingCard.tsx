// FIX: Create ReadingCard component.
import React from 'react';
import { ReadingSlide } from '../types';
import { useAppContext } from '../context/AppContext';

const SpeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


interface ReadingCardProps {
    slide: ReadingSlide;
}

const ReadingCard: React.FC<ReadingCardProps> = ({ slide }) => {
    const { t, playSound } = useAppContext();

    const handlePlayParagraph = (index: number) => {
        const paragraph = t(slide.translation[index]);
        playSound(paragraph);
    };

    return (
        <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-coptic-blue dark:text-coptic-gold text-center mb-4">{t(slide.title)}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Coptic Text */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold font-coptic text-center">Coptic Text</h3>
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg space-y-3 font-coptic text-lg">
                        {slide.copticText.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                    </div>
                </div>

                {/* Translation */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-center">{t({ de: "Übersetzung", en: "Translation", ar: "الترجمة" })}</h3>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/50 rounded-lg space-y-3 text-base">
                        {slide.translation.map((p, index) => (
                             <div key={index} className="flex items-start gap-2">
                                <p className="flex-grow">{t(p)}</p>
                                <button
                                    onClick={() => handlePlayParagraph(index)}
                                    className="p-1 rounded-full text-coptic-blue dark:text-coptic-gold hover:bg-coptic-blue/10 dark:hover:bg-coptic-gold/10 flex-shrink-0 mt-1"
                                    aria-label={t({de: "Absatz anhören", en: "Listen to paragraph", ar: "استمع للفقرة"})}
                                >
                                    <SpeakerIcon/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadingCard;
