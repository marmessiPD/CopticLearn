// pages/LoginPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const LoginPage: React.FC = () => {
    const { login, t, session } = useAppContext();
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const from = (location.state as { from?: Location })?.from?.pathname || '/';

    // Redirect if already logged in
    useEffect(() => {
        if (session) {
            navigate(from, { replace: true });
        }
    }, [session, navigate, from]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await login(email, password);
        if (result.success) {
            navigate(from, { replace: true });
        } else {
            setError(result.error || 'Login failed');
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
                    {t({ de: 'Anmelden', en: 'Login', ar: 'تسجيل الدخول' })}
                </h2>

                {error && (
                    <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            {t({ de: 'E-Mail', en: 'Email', ar: 'البريد الإلكتروني' })}
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-light-text dark:text-dark-text min-h-[44px]"
                            autoComplete="email"
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
                            autoComplete="current-password"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-coptic-blue dark:bg-coptic-gold text-white dark:text-dark-primary py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 min-h-[44px] touch-manipulation"
                    >
                        {loading
                            ? t({ de: 'Lädt...', en: 'Loading...', ar: 'جاري التحميل...' })
                            : t({ de: 'Anmelden', en: 'Login', ar: 'تسجيل الدخول' })}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link
                        to="/register"
                        className="text-coptic-blue dark:text-coptic-gold hover:underline"
                    >
                        {t({ de: 'Noch kein Konto? Registrieren', en: 'No account? Register', ar: 'ليس لديك حساب؟ سجل' })}
                    </Link>
                </div>

                <div className="mt-4 text-center">
                    <Link
                        to="/register/servant"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                        {t({ de: 'Servant-Registrierung', en: 'Servant Registration', ar: 'تسجيل الخادم' })}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

