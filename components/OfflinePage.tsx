import React from 'react';
import { useAppContext } from '../context/AppContext';

const OfflinePage: React.FC = () => {
    const { t } = useAppContext();

    return (
        <div className="min-h-screen bg-light-secondary dark:bg-dark-primary flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 text-center">
                <div className="text-6xl mb-4">📱</div>
                <h1 className="text-2xl font-bold text-coptic-blue dark:text-coptic-gold mb-4">
                    {t({ de: 'Offline verfügbar', en: 'Available Offline', ar: 'متاح بدون اتصال' })}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {t({ 
                        de: 'Diese App funktioniert auch ohne Internetverbindung. Einige Funktionen sind möglicherweise eingeschränkt.', 
                        en: 'This app works even without an internet connection. Some features may be limited.', 
                        ar: 'هذا التطبيق يعمل حتى بدون اتصال بالإنترنت. قد تكون بعض الميزات محدودة.' 
                    })}
                </p>
                <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {t({ de: 'Alphabet-Lektionen verfügbar', en: 'Alphabet lessons available', ar: 'دروس الأبجدية متاحة' })}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {t({ de: 'Grammatik-Lektionen verfügbar', en: 'Grammar lessons available', ar: 'دروس القواعد متاحة' })}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        {t({ de: 'Audio-Aussprache eingeschränkt', en: 'Audio pronunciation limited', ar: 'النطق الصوتي محدود' })}
                    </div>
                </div>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-6 px-6 py-3 bg-coptic-blue text-white rounded-lg hover:bg-opacity-80 dark:bg-coptic-gold dark:text-coptic-blue min-h-[44px] touch-manipulation"
                >
                    {t({ de: 'Neu laden', en: 'Reload', ar: 'إعادة تحميل' })}
                </button>
            </div>
        </div>
    );
};

export default OfflinePage;
