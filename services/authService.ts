// services/authService.ts
import { User, UserRole } from "../types";

const STORAGE_KEY_USERS = "coptic_learn_users";
const STORAGE_KEY_SESSION = "coptic_learn_session";
const SERVANT_REGISTRATION_SECRET = "servant_secret_2024"; // Change this in production!

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
  email: string;
  role: UserRole;
  forename: string;
  surname: string;
}

export interface RegisterData {
  forename: string;
  surname: string;
  email: string;
  password: string;
  role: UserRole;
  servantSecret?: string; // Required if registering as servant
}

export const authService = {
  async register(
    data: RegisterData
  ): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      // Validate servant registration
      if (
        data.role === "servant" &&
        data.servantSecret !== SERVANT_REGISTRATION_SECRET
      ) {
        return { success: false, error: "Invalid servant registration secret" };
      }

      // Get existing users
      const usersJson = localStorage.getItem(STORAGE_KEY_USERS);
      const users: User[] = usersJson ? JSON.parse(usersJson) : [];

      // Check if email already exists
      if (
        users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())
      ) {
        return { success: false, error: "Email already registered" };
      }

      // Create new user
      const passwordHash = await hashPassword(data.password);
      const newUser: User = {
        id: crypto.randomUUID(),
        forename: data.forename.trim(),
        surname: data.surname.trim(),
        email: data.email.toLowerCase().trim(),
        role: data.role,
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
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string; session?: Session }> {
    try {
      const usersJson = localStorage.getItem(STORAGE_KEY_USERS);
      const users: User[] = usersJson ? JSON.parse(usersJson) : [];

      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (!user) {
        return { success: false, error: "Invalid email or password" };
      }

      const isValid = await verifyPassword(password, user.passwordHash);
      if (!isValid) {
        return { success: false, error: "Invalid email or password" };
      }

      const session: Session = {
        userId: user.id,
        email: user.email,
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
