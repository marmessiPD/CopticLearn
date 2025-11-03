// pages/ServantPanel.tsx
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { userService } from '../services/userService';
import { User, UserRole } from '../types';

const ServantPanel: React.FC = () => {
    const { t, session } = useAppContext();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        try {
            const allUsers = userService.getAllUsers();
            // Don't show password hash in the UI
            const usersWithoutHash = allUsers.map(({ passwordHash, ...user }) => user);
            setUsers(usersWithoutHash);
            setLoading(false);
        } catch (err) {
            setError(t({ de: 'Fehler beim Laden der Benutzer', en: 'Error loading users', ar: 'خطأ في تحميل المستخدمين' }));
            setLoading(false);
        }
    };

    const handleRoleChange = (userId: string, newRole: UserRole) => {
        const result = userService.updateUserRole(userId, newRole);
        if (result.success) {
            loadUsers();
        } else {
            setError(result.error || t({ de: 'Fehler beim Aktualisieren', en: 'Update error', ar: 'خطأ في التحديث' }));
        }
    };

    const handleDelete = (userId: string) => {
        if (session?.userId === userId) {
            setError(t({ de: 'Sie können sich nicht selbst löschen', en: 'You cannot delete yourself', ar: 'لا يمكنك حذف نفسك' }));
            return;
        }

        if (window.confirm(t({ de: 'Benutzer wirklich löschen?', en: 'Really delete user?', ar: 'حذف المستخدم حقًا؟' }))) {
            const result = userService.deleteUser(userId);
            if (result.success) {
                loadUsers();
            } else {
                setError(result.error || t({ de: 'Fehler beim Löschen', en: 'Delete error', ar: 'خطأ في الحذف' }));
            }
        }
    };

    if (loading) {
        return (
            <div className="container mx-auto max-w-4xl px-4 py-8">
                <div className="text-center">{t({ de: 'Lädt...', en: 'Loading...', ar: 'جاري التحميل...' })}</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-4xl px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">
                {t({ de: 'Benutzerverwaltung', en: 'User Management', ar: 'إدارة المستخدمين' })}
            </h1>

            {error && (
                <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-4">
                    {error}
                    <button
                        onClick={() => setError('')}
                        className="ml-4 underline"
                    >
                        {t({ de: 'Schließen', en: 'Close', ar: 'إغلاق' })}
                    </button>
                </div>
            )}

            {users.length === 0 ? (
                <div className="bg-light-primary dark:bg-dark-secondary rounded-lg p-6 text-center">
                    {t({ de: 'Keine Benutzer gefunden', en: 'No users found', ar: 'لم يتم العثور على مستخدمين' })}
                </div>
            ) : (
                <div className="bg-light-primary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-coptic-blue dark:bg-coptic-gold text-white dark:text-dark-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold">
                                        {t({ de: 'Vorname', en: 'Forename', ar: 'الاسم الأول' })}
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold">
                                        {t({ de: 'Nachname', en: 'Surname', ar: 'اسم العائلة' })}
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold">
                                        {t({ de: 'Rolle', en: 'Role', ar: 'الدور' })}
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold">
                                        {t({ de: 'Aktionen', en: 'Actions', ar: 'الإجراءات' })}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <td className="px-4 py-3 text-sm">{user.forename}</td>
                                        <td className="px-4 py-3 text-sm">{user.surname}</td>
                                        <td className="px-4 py-3 text-sm">
                                            <select
                                                value={user.role}
                                                onChange={(e) => handleRoleChange(user.id, e.target.value as UserRole)}
                                                className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-light-text dark:text-dark-text min-h-[44px]"
                                            >
                                                <option value="user">
                                                    {t({ de: 'Benutzer', en: 'User', ar: 'مستخدم' })}
                                                </option>
                                                <option value="servant">
                                                    {t({ de: 'Servant', en: 'Servant', ar: 'خادم' })}
                                                </option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                disabled={session?.userId === user.id}
                                                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] touch-manipulation"
                                            >
                                                {t({ de: 'Löschen', en: 'Delete', ar: 'حذف' })}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServantPanel;

