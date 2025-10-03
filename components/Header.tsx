import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Language, Theme, UserRole } from '../types';

// Icons
const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const Header: React.FC = () => {
    const { language, setLanguage, theme, setTheme, role, setRole } = useAppContext();

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const ThemeIcon = () => {
        if (theme === 'light') return <SunIcon />;
        return <MoonIcon />;
    };

    return (
        <header className="bg-light-primary dark:bg-dark-secondary shadow-md p-3 flex justify-between items-center sticky top-0 z-10">
            <Link to="/" className="flex items-center gap-2 text-coptic-blue dark:text-coptic-gold">
                <HomeIcon />
                <h1 className="text-xl font-bold font-coptic">ⲧⲉⲛⲁⲥⲡⲓ</h1>
                <span className="hidden sm:inline text-lg font-bold">Koptisch Lernen</span>
            </Link>

            <div className="flex items-center space-x-2 sm:space-x-4">
                <select value={language} onChange={(e) => setLanguage(e.target.value as Language)} className="bg-transparent dark:bg-dark-primary rounded p-1 text-sm">
                    <option value="de">DE</option>
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                </select>
                
                <button onClick={handleThemeChange} className="p-1 rounded-full text-light-text dark:text-dark-text" aria-label={`Change theme, current is ${theme}`}>
                    <ThemeIcon />
                </button>
                
                <select value={role} onChange={(e) => setRole(e.target.value as UserRole)} className="bg-transparent dark:bg-dark-primary rounded p-1 text-sm">
                    <option value="user">User</option>
                    <option value="diener">Diener</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
