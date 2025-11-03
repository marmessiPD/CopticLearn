import React, { useState } from 'react';
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

const AccessibilityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const Header: React.FC = () => {
    const { language, setLanguage, theme, setTheme, role, setRole } = useAppContext();
    const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
    const [highContrast, setHighContrast] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [pendingRole, setPendingRole] = useState<UserRole>('user');

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleAccessibilityToggle = (setting: 'highContrast' | 'reducedMotion') => {
        if (setting === 'highContrast') {
            setHighContrast(!highContrast);
            document.documentElement.classList.toggle('high-contrast');
        } else if (setting === 'reducedMotion') {
            setReducedMotion(!reducedMotion);
            document.documentElement.classList.toggle('reduce-motion');
        }
    };

    const handleRoleChange = (newRole: UserRole) => {
        if (newRole === 'admin' && role !== 'admin') {
            // Benutzer möchte Admin werden - Passwort-Modal öffnen
            setPendingRole(newRole);
            setShowPasswordModal(true);
            setPassword('');
            setPasswordError('');
        } else {
            // Direkte Änderung für User oder Diener, oder Admin möchte zurückwechseln
            setRole(newRole);
        }
    };

    const handlePasswordSubmit = () => {
        const ADMIN_PASSWORD = 'Jesus_is_LORD';
        
        if (password === ADMIN_PASSWORD) {
            setRole(pendingRole);
            setShowPasswordModal(false);
            setPassword('');
            setPasswordError('');
        } else {
            setPasswordError('Falsches Passwort. Bitte versuchen Sie es erneut.');
        }
    };

    const handlePasswordModalClose = () => {
        setShowPasswordModal(false);
        setPassword('');
        setPasswordError('');
    };

    const ThemeIcon = () => {
        if (theme === 'light') return <SunIcon />;
        return <MoonIcon />;
    };

    return (
        <header className="bg-light-primary dark:bg-dark-secondary shadow-md p-2 sm:p-3 flex justify-between items-center sticky top-0 z-10">
            <Link to="/" className="flex items-center gap-1 sm:gap-2 text-coptic-blue dark:text-coptic-gold">
                <HomeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                <h1 className="text-lg sm:text-xl font-bold font-coptic">ⲧⲉⲛⲁⲥⲡⲓ</h1>
                <span className="hidden sm:inline text-lg font-bold">Koptisch Lernen</span>
            </Link>

            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
                <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value as Language)} 
                    className="bg-transparent dark:bg-dark-primary rounded p-1 text-xs sm:text-sm min-h-[44px] touch-manipulation"
                    aria-label="Select language"
                >
                    <option value="de">DE</option>
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                </select>
                
                <button 
                    onClick={handleThemeChange} 
                    className="p-2 rounded-full text-light-text dark:text-dark-text min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation" 
                    aria-label={`Change theme, current is ${theme}`}
                >
                    <ThemeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                
                <div className="relative">
                    <button 
                        onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
                        className="p-2 rounded-full text-light-text dark:text-dark-text min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                        aria-label="Accessibility settings"
                        aria-expanded={showAccessibilityMenu}
                    >
                        <AccessibilityIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    
                    {showAccessibilityMenu && (
                        <div className="absolute right-0 top-full mt-2 bg-light-primary dark:bg-dark-secondary rounded-lg shadow-lg p-3 min-w-[200px] z-50">
                            <h3 className="font-semibold mb-2 text-sm">Accessibility</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm">
                                    <input 
                                        type="checkbox" 
                                        checked={highContrast}
                                        onChange={() => handleAccessibilityToggle('highContrast')}
                                        className="rounded"
                                    />
                                    High Contrast
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input 
                                        type="checkbox" 
                                        checked={reducedMotion}
                                        onChange={() => handleAccessibilityToggle('reducedMotion')}
                                        className="rounded"
                                    />
                                    Reduce Motion
                                </label>
                            </div>
                        </div>
                    )}
                </div>
                
                <select 
                    value={role} 
                    onChange={(e) => handleRoleChange(e.target.value as UserRole)} 
                    className="bg-transparent dark:bg-dark-primary rounded p-1 text-xs sm:text-sm min-h-[44px] touch-manipulation"
                    aria-label="Select user role"
                >
                    <option value="user">User</option>
                    <option value="diener">Diener</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            {/* Passwort-Modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-light-primary dark:bg-dark-secondary rounded-lg shadow-xl p-6 max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4 text-light-text dark:text-dark-text">
                            Admin-Zugang
                        </h2>
                        <p className="text-sm text-light-text dark:text-dark-text mb-4">
                            Bitte geben Sie das Admin-Passwort ein:
                        </p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError('');
                            }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handlePasswordSubmit();
                                }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-primary text-light-text dark:text-dark-text mb-2 focus:outline-none focus:ring-2 focus:ring-coptic-blue"
                            placeholder="Passwort eingeben"
                            autoFocus
                        />
                        {passwordError && (
                            <p className="text-red-500 text-sm mb-4">{passwordError}</p>
                        )}
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={handlePasswordModalClose}
                                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors min-h-[44px] touch-manipulation"
                            >
                                Abbrechen
                            </button>
                            <button
                                onClick={handlePasswordSubmit}
                                className="px-4 py-2 bg-coptic-blue text-white rounded-lg hover:bg-blue-700 transition-colors min-h-[44px] touch-manipulation"
                            >
                                Bestätigen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
