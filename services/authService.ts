// services/authService.ts
import { User, UserRole } from "../types";

const STORAGE_KEY_USERS = "coptic_learn_users";
const STORAGE_KEY_SESSION = "coptic_learn_session";
const SERVANT_SWITCH_SECRET = "servant_secret_2024"; // Change this in production!

// Simple hash function (for demo - use bcrypt in production)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  const passwordHash = await hashPassword(password);
  return passwordHash === hash;
}

export interface Session {
  userId: string;
  role: UserRole;
  forename: string;
  surname: string;
}

export interface RegisterData {
  forename: string;
  surname: string;
  password: string;
}

export const authService = {
  async register(
    data: RegisterData
  ): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      // Get existing users
      const usersJson = localStorage.getItem(STORAGE_KEY_USERS);
      const users: User[] = usersJson ? JSON.parse(usersJson) : [];

      // For simplicity, we'll use a single user account
      // If users exist, return error (only one account allowed)
      if (users.length > 0) {
        return {
          success: false,
          error: "Account already exists. Please login.",
        };
      }

      // Create new user (always starts as "user" role)
      const passwordHash = await hashPassword(data.password);
      const newUser: User = {
        id: crypto.randomUUID(),
        forename: data.forename.trim(),
        surname: data.surname.trim(),
        role: "user", // Always start as user
        createdAt: new Date().toISOString(),
        passwordHash,
      };

      users.push(newUser);
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));

      return { success: true, user: newUser };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: "Registration failed" };
    }
  },

  async login(
    password: string
  ): Promise<{ success: boolean; error?: string; session?: Session }> {
    try {
      const usersJson = localStorage.getItem(STORAGE_KEY_USERS);
      const users: User[] = usersJson ? JSON.parse(usersJson) : [];

      // Get the first (and only) user
      const user = users[0];
      if (!user) {
        return {
          success: false,
          error: "No account found. Please register first.",
        };
      }

      const isValid = await verifyPassword(password, user.passwordHash);
      if (!isValid) {
        return { success: false, error: "Invalid password" };
      }

      const session: Session = {
        userId: user.id,
        role: user.role,
        forename: user.forename,
        surname: user.surname,
      };

      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
      return { success: true, session };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "Login failed" };
    }
  },

  async switchRole(
    password: string,
    targetRole: UserRole
  ): Promise<{ success: boolean; error?: string; session?: Session }> {
    try {
      // Only allow switching to "servant" with password
      if (targetRole === "servant") {
        // Verify the servant switch password
        const passwordHash = await hashPassword(password);
        const expectedHash = await hashPassword(SERVANT_SWITCH_SECRET);

        if (passwordHash !== expectedHash) {
          return {
            success: false,
            error: "Invalid password. Cannot switch to service mode.",
          };
        }
      }

      // Get current session
      const session = this.getSession();
      if (!session) {
        return { success: false, error: "Not logged in" };
      }

      // Get user from storage
      const usersJson = localStorage.getItem(STORAGE_KEY_USERS);
      const users: User[] = usersJson ? JSON.parse(usersJson) : [];
      const user = users.find((u) => u.id === session.userId);

      if (!user) {
        return { success: false, error: "User not found" };
      }

      // Update user role
      user.role = targetRole;
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));

      // Update session
      const updatedSession: Session = {
        userId: user.id,
        role: user.role,
        forename: user.forename,
        surname: user.surname,
      };

      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(updatedSession));
      return { success: true, session: updatedSession };
    } catch (error) {
      console.error("Role switch error:", error);
      return { success: false, error: "Role switch failed" };
    }
  },

  logout(): void {
    localStorage.removeItem(STORAGE_KEY_SESSION);
  },

  getSession(): Session | null {
    try {
      const sessionJson = localStorage.getItem(STORAGE_KEY_SESSION);
      return sessionJson ? JSON.parse(sessionJson) : null;
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    return this.getSession() !== null;
  },

  isServant(): boolean {
    const session = this.getSession();
    return session?.role === "servant" || false;
  },
};
