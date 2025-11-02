
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <AppProvider>
            <HashRouter>
                <div className="min-h-screen font-sans text-light-text dark:text-dark-text bg-light-secondary dark:bg-dark-primary safe-area-top safe-area-bottom">
                    <Header />
                    <main className="p-2 sm:p-4 md:p-6 pb-safe-area-inset-bottom">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/module/:moduleId" element={<ModulePage />} />
                            <Route path="/lesson/:lessonId" element={<LessonPage />} />
                            <Route path="/quiz/:quizId" element={<QuizPage />} />
                        </Routes>
                    </main>
                </div>
            </HashRouter>
        </AppProvider>
    );
};

export default App;
