import React, { useState } from 'react';

interface CopticKeyboardProps {
    onKeyPress: (key: string) => void;
    onBackspace: () => void;
}

const CopticKeyboard: React.FC<CopticKeyboardProps> = ({ onKeyPress, onBackspace }) => {
    const [isShift, setIsShift] = useState(false);

    const lowercaseLetters = [
        'ⲁ', 'ⲃ', 'ⲅ', 'ⲇ', 'ⲉ', 'ⲋ', 'ⲍ', 'ⲏ', 'ⲑ', 'ⲓ', 'ⲕ', 'ⲗ', 'ⲙ', 'ⲛ', 'ⲝ', 'ⲟ', 'ⲡ', 'ⲣ', 'ⲥ', 'ⲧ', 'ⲩ', 'ⲫ', 'ⲭ', 'ⲯ', 'ⲱ', 'ϣ', 'ϥ', 'ϧ', 'ϩ', 'ϫ', 'ϭ', 'ϯ'
    ];
    const uppercaseLetters = [
        'Ⲁ', 'Ⲃ', 'Ⲅ', 'Ⲇ', 'Ⲉ', 'Ⲋ', 'Ⲍ', 'Ⲏ', 'Ⲑ', 'Ⲓ', 'Ⲕ', 'Ⲗ', 'Ⲙ', 'Ⲛ', 'Ⲝ', 'Ⲟ', 'Ⲡ', 'Ⲣ', 'Ⲥ', 'Ⲧ', 'Ⲩ', 'Ⲫ', 'Ⲭ', 'Ⲯ', 'Ⲱ', 'Ϣ', 'Ϥ', 'Ϧ', 'Ϩ', 'Ϫ', 'Ϭ', 'Ϯ'
    ];

    const letters = isShift ? uppercaseLetters : lowercaseLetters;

    const handleKeyPress = (key: string) => {
        onKeyPress(key);
    };

    return (
        <div className="bg-gray-200 dark:bg-dark-secondary p-2 sm:p-3 rounded-lg mt-4 w-full max-w-2xl mx-auto" dir="ltr">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {letters.map((key) => (
                    <button
                        key={key}
                        onClick={() => handleKeyPress(key)}
                        className="font-coptic text-xl sm:text-2xl w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-light-primary dark:bg-gray-600 dark:text-dark-text shadow hover:bg-gray-100 dark:hover:bg-gray-500 active:scale-95 transition-transform flex items-center justify-center touch-manipulation"
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className="flex justify-center gap-2 mt-2 sm:mt-3">
                <button
                    onClick={() => setIsShift(!isShift)}
                    className={`px-4 sm:px-8 py-2 sm:py-3 rounded-md shadow flex items-center justify-center text-sm sm:text-lg min-h-[44px] touch-manipulation ${isShift ? 'bg-coptic-blue text-white dark:bg-coptic-gold dark:text-coptic-blue' : 'bg-light-primary dark:bg-gray-600 dark:text-dark-text'}`}
                >
                    ↑ Shift
                </button>
                <button
                    onClick={onBackspace}
                    className="px-4 sm:px-8 py-2 sm:py-3 rounded-md bg-light-primary dark:bg-gray-600 dark:text-dark-text shadow flex items-center justify-center text-sm sm:text-lg min-h-[44px] touch-manipulation"
                >
                    ⌫
                </button>
            </div>
        </div>
    );
};

export default CopticKeyboard;
