import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from "react";
import { Language, Theme, UserRole } from "../types";
import { authService, Session } from "../services/authService";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  progress: Record<string, number>; // quizId: score
  updateProgress: (quizId: string, score: number) => void;
  t: (localeString: { de: string; en: string; ar: string }) => string;
  playSound: (text: string) => void;
  session: Session | null;
  login: (password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  switchRole: (
    password: string,
    targetRole: UserRole
  ) => Promise<{ success: boolean; error?: string }>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("de");
  const [theme, setTheme] = useState<Theme>("light");
  const [role, setRole] = useState<UserRole>("user");
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [session, setSession] = useState<Session | null>(
    authService.getSession()
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
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

  const playSound = useCallback(
    (text: string) => {
      const synth = window.speechSynthesis;
      if (!synth) {
        console.error("Speech Synthesis not supported");
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      const langMap = {
        de: "de-DE",
        en: "en-US",
        ar: "ar-SA",
      };
      const targetLang = langMap[language];
      utterance.lang = targetLang;

      const voice =
        voices.find((v) => v.lang === targetLang) ||
        voices.find((v) => v.lang.startsWith(language));
      if (voice) {
        utterance.voice = voice;
      }

      synth.cancel();
      synth.speak(utterance);
    },
    [language, voices]
  );

  const updateProgress = useCallback((quizId: string, score: number) => {
    setProgress((prev) => ({ ...prev, [quizId]: score }));
  }, []);

  const t = useCallback(
    (localeString: { de: string; en: string; ar: string }): string => {
      return localeString[language];
    },
    [language]
  );

  const login = useCallback(
    async (password: string): Promise<{ success: boolean; error?: string }> => {
      const result = await authService.login(password);
      if (result.success && result.session) {
        setSession(result.session);
        setRole(result.session.role);
      }
      return result;
    },
    []
  );

  const logout = useCallback(() => {
    authService.logout();
    setSession(null);
    setRole("user");
  }, []);

  const switchRole = useCallback(
    async (
      password: string,
      targetRole: UserRole
    ): Promise<{ success: boolean; error?: string }> => {
      const result = await authService.switchRole(password, targetRole);
      if (result.success && result.session) {
        setSession(result.session);
        setRole(result.session.role);
      }
      return result;
    },
    []
  );

  // Sync role with session
  useEffect(() => {
    if (session) {
      setRole(session.role);
    }
  }, [session]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      role,
      setRole,
      progress,
      updateProgress,
      t,
      playSound,
      session,
      login,
      logout,
      switchRole,
    }),
    [
      language,
      theme,
      role,
      progress,
      session,
      updateProgress,
      t,
      playSound,
      login,
      logout,
      switchRole,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
