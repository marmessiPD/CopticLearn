// pages/RegisterPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { authService } from '../services/authService';

const RegisterPage: React.FC = () => {
    const { t, login, session } = useAppContext();
    const navigate = useNavigate();
    
    const [forename, setForename] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Redirect if already logged in
    useEffect(() => {
        if (session) {
            navigate('/', { replace: true });
        }
    }, [session, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!forename.trim() || !surname.trim() || !password) {
            setError(t({ de: 'Bitte füllen Sie alle Felder aus', en: 'Please fill in all fields', ar: 'يرجى ملء جميع الحقول' }));
            return;
        }

        if (password.length < 6) {
            setError(t({ de: 'Passwort muss mindestens 6 Zeichen lang sein', en: 'Password must be at least 6 characters', ar: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل' }));
            return;
        }

        if (password !== confirmPassword) {
            setError(t({ de: 'Passwörter stimmen nicht überein', en: 'Passwords do not match', ar: 'كلمات المرور غير متطابقة' }));
            return;
        }

        setLoading(true);

        const result = await authService.register({
            forename,
            surname,
            password,
        });

        if (result.success) {
            // Auto-login after registration
            const loginResult = await login(password);
            if (loginResult.success) {
                navigate('/', { replace: true });
            } else {
                navigate('/login', { replace: true });
            }
        } else {
            setError(result.error || t({ de: 'Registrierung fehlgeschlagen', en: 'Registration failed', ar: 'فشل التسجيل' }));
        }
        setLoading(false);
    };

    if (session) {
        return null; // Will redirect via useEffect
    }

    return (
        <div className="container mx-auto max-w-md px-4 py-8">
            <div className="bg-light-primary dark:bg-dark-secondary rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {t({ de: 'Registrieren', en: 'Register', ar: 'التسجيل' })}
                </h2>

                {error && (
                    <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="forename" className="block text-sm font-medium mb-2">
                            {t({ de: 'Vorname', en: 'Forename', ar: 'الاسم الأول' })}
                        </label>
                        <input
                            id="forename"
                            type="text"
                            value={forename}
                            onChange={(e) => setForename(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-light-text dark:text-dark-text min-h-[44px]"
                            autoComplete="given-name"
                        />
                    </div>

                    <div>
                        <label htmlFor="surname" className="block text-sm font-medium mb-2">
                            {t({ de: 'Nachname', en: 'Surname', ar: 'اسم العائلة' })}
                        </label>
                        <input
                            id="surname"
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-light-text dark:text-dark-text min-h-[44px]"
                            autoComplete="family-name"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-2">
                            {t({ de: 'Passwort', en: 'Password', ar: 'كلمة المرور' })}
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-light-text dark:text-dark-text min-h-[44px]"
                            autoComplete="new-password"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                            {t({ de: 'Passwort bestätigen', en: 'Confirm Password', ar: 'تأكيد كلمة المرور' })}
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-light-text dark:text-dark-text min-h-[44px]"
                            autoComplete="new-password"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-coptic-blue dark:bg-coptic-gold text-white dark:text-dark-primary py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 min-h-[44px] touch-manipulation"
                    >
                        {loading
                            ? t({ de: 'Lädt...', en: 'Loading...', ar: 'جاري التحميل...' })
                            : t({ de: 'Registrieren', en: 'Register', ar: 'التسجيل' })}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link
                        to="/login"
                        className="text-coptic-blue dark:text-coptic-gold hover:underline"
                    >
                        {t({ de: 'Bereits ein Konto? Anmelden', en: 'Already have an account? Login', ar: 'لديك حساب بالفعل؟ تسجيل الدخول' })}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;

