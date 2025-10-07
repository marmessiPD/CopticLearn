import React from 'react';
import { useAppContext } from '../context/AppContext';

const LoadingSpinner: React.FC = () => {
    const { t } = useAppContext();

    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coptic-blue dark:border-coptic-gold mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">
                    {t({ de: 'Lädt...', en: 'Loading...', ar: 'جاري التحميل...' })}
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
