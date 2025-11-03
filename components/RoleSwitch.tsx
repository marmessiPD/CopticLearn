// components/RoleSwitch.tsx
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { UserRole } from '../types';

const RoleSwitch: React.FC = () => {
    const { session, role, switchRole, t } = useAppContext();
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (!session) {
        return null;
    }

    const handleToggle = () => {
        const targetRole: UserRole = role === 'user' ? 'servant' : 'user';
        
        // If switching to servant, require password
        if (targetRole === 'servant') {
            setShowPasswordModal(true);
            setPassword('');
            setError('');
        } else {
            // Switching back to user doesn't require password
            handleRoleSwitch('', targetRole);
        }
    };

    const handleRoleSwitch = async (passwordToCheck: string, targetRole: UserRole) => {
        setError('');
        setLoading(true);

        const result = await switchRole(passwordToCheck, targetRole);
        
        if (result.success) {
            setShowPasswordModal(false);
            setPassword('');
        } else {
            setError(result.error || t({ de: 'Rollenwechsel fehlgeschlagen', en: 'Role switch failed', ar: 'فشل تبديل الدور' }));
        }
        
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!password.trim()) {
            setError(t({ de: 'Bitte geben Sie ein Passwort ein', en: 'Please enter a password', ar: 'يرجى إدخال كلمة المرور' }));
            return;
        }
        await handleRoleSwitch(password, 'servant');
    };

    return (
        <>
            <div className="flex items-center gap-2">
                <span className="text-sm hidden sm:inline">
                    {t({ de: 'Modus:', en: 'Mode:', ar: 'الوضع:' })}
                </span>
                <button
                    onClick={handleToggle}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-coptic-blue dark:focus:ring-coptic-gold focus:ring-offset-2 min-h-[44px] min-w-[56px] touch-manipulation ${
                        role === 'servant' 
                            ? 'bg-coptic-blue dark:bg-coptic-gold' 
                            : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={role === 'user' 
                        ? t({ de: 'Zu Service-Modus wechseln', en: 'Switch to service mode', ar: 'التبديل إلى وضع الخدمة' })
                        : t({ de: 'Zu Benutzer-Modus wechseln', en: 'Switch to user mode', ar: 'التبديل إلى وضع المستخدم' })
                    }
                >
                    <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                            role === 'servant' ? 'translate-x-7' : 'translate-x-1'
                        }`}
                    />
                </button>
                <span className="text-sm font-medium min-w-[60px]">
                    {role === 'user' 
                        ? t({ de: 'Benutzer', en: 'User', ar: 'مستخدم' })
                        : t({ de: 'Service', en: 'Service', ar: 'خدمة' })
                    }
                </span>
            </div>

            {showPasswordModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-light-primary dark:bg-dark-secondary rounded-lg shadow-lg p-6 max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4">
                            {t({ de: 'Zu Service-Modus wechseln', en: 'Switch to Service Mode', ar: 'التبديل إلى وضع الخدمة' })}
                        </h3>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {t({ de: 'Bitte geben Sie das Service-Passwort ein, um zum Service-Modus zu wechseln.', en: 'Please enter the service password to switch to service mode.', ar: 'يرجى إدخال كلمة مرور الخدمة للتبديل إلى وضع الخدمة.' })}
                        </p>

                        {error && (
                            <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-4">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="servicePassword" className="block text-sm font-medium mb-2">
                                    {t({ de: 'Service-Passwort', en: 'Service Password', ar: 'كلمة مرور الخدمة' })}
                                </label>
                                <input
                                    id="servicePassword"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-light-text dark:text-dark-text min-h-[44px]"
                                    autoFocus
                                    autoComplete="off"
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowPasswordModal(false);
                                        setPassword('');
                                        setError('');
                                    }}
                                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-light-text dark:text-dark-text font-medium hover:bg-gray-50 dark:hover:bg-gray-800 min-h-[44px] touch-manipulation"
                                >
                                    {t({ de: 'Abbrechen', en: 'Cancel', ar: 'إلغاء' })}
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1 px-4 py-2 rounded-lg bg-coptic-blue dark:bg-coptic-gold text-white dark:text-dark-primary font-medium hover:opacity-90 disabled:opacity-50 min-h-[44px] touch-manipulation"
                                >
                                    {loading
                                        ? t({ de: 'Lädt...', en: 'Loading...', ar: 'جاري التحميل...' })
                                        : t({ de: 'Wechseln', en: 'Switch', ar: 'تبديل' })
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default RoleSwitch;

