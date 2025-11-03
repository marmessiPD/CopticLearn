// services/userService.ts
import { User, UserRole } from '../types';

const STORAGE_KEY_USERS = 'coptic_learn_users';

export const userService = {
    getAllUsers(): User[] {
        try {
            const usersJson = localStorage.getItem(STORAGE_KEY_USERS);
            return usersJson ? JSON.parse(usersJson) : [];
        } catch {
            return [];
        }
    },

    getUserById(id: string): User | null {
        const users = this.getAllUsers();
        return users.find(u => u.id === id) || null;
    },

    getUserByEmail(email: string): User | null {
        const users = this.getAllUsers();
        return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
    },

    updateUserRole(userId: string, newRole: UserRole): { success: boolean; error?: string } {
        try {
            const users = this.getAllUsers();
            const userIndex = users.findIndex(u => u.id === userId);
            
            if (userIndex === -1) {
                return { success: false, error: 'User not found' };
            }

            users[userIndex].role = newRole;
            localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
            return { success: true };
        } catch (error) {
            console.error('Update user role error:', error);
            return { success: false, error: 'Failed to update user role' };
        }
    },

    deleteUser(userId: string): { success: boolean; error?: string } {
        try {
            const users = this.getAllUsers();
            const filteredUsers = users.filter(u => u.id !== userId);
            
            if (filteredUsers.length === users.length) {
                return { success: false, error: 'User not found' };
            }

            localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(filteredUsers));
            
            // Also logout if the deleted user is currently logged in
            const sessionJson = localStorage.getItem('coptic_learn_session');
            if (sessionJson) {
                const session = JSON.parse(sessionJson);
                if (session.userId === userId) {
                    localStorage.removeItem('coptic_learn_session');
                }
            }

            return { success: true };
        } catch (error) {
            console.error('Delete user error:', error);
            return { success: false, error: 'Failed to delete user' };
        }
    }
};

