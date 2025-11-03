import React, { createContext, useState, useContext, useEffect, useMemo, ReactNode } from 'react';
import { Language, Theme, UserRole } from '../types';

interface AppContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
    role: UserRole;
    setRole: (role: UserRole) => void;
    progress: Record<string, number>; // quizId: score
    updateProgress: (quizId: string, score: number) => void;
    t: (localeString: { de: string; en: string; ar: string } | undefined | null) => string;
    playSound: (text: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('de');
    const [theme, setTheme] = useState<Theme>('light');
    const [role, setRole] = useState<UserRole>('user');
    const [progress, setProgress] = useState<Record<string, number>>({});
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    useEffect(() => {
        const root = window.document.documentElement;
        
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        root.lang = language;
        root.dir = language === 'ar' ? 'rtl' : 'ltr';

    }, [theme, language]);
    
    useEffect(() => {
        const synth = window.speechSynthesis;
        if (!synth) return;

        const updateVoices = () => {
            setVoices(synth.getVoices());
        };

        updateVoices();
        synth.onvoiceschanged = updateVoices;

        return () => {
            synth.onvoiceschanged = null;
        };
    }, []);

    const playSound = (text: string) => {
        const synth = window.speechSynthesis;
        if (!synth) {
            console.error("Speech Synthesis not supported");
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        const langMap = {
            de: 'de-DE',
            en: 'en-US',
            ar: 'ar-SA'
        };
        const targetLang = langMap[language];
        utterance.lang = targetLang;

        const voice = voices.find(v => v.lang === targetLang) || voices.find(v => v.lang.startsWith(language));
        if (voice) {
            utterance.voice = voice;
        }
        
        synth.cancel();
        synth.speak(utterance);
    };


    const updateProgress = (quizId: string, score: number) => {
        setProgress(prev => ({ ...prev, [quizId]: score }));
    };

    const t = (localeString: { de: string; en: string; ar: string } | undefined | null): string => {
        if (!localeString) {
            console.warn('Translation function called with undefined/null localeString');
            return '';
        }
        return localeString[language] || localeString.en || localeString.de || localeString.ar || '';
    };

    const value = useMemo(() => ({
        language,
        setLanguage,
        theme,
        setTheme,
        role,
        setRole,
        progress,
        updateProgress,
        t,
        playSound
    }), [language, theme, role, progress, voices]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};