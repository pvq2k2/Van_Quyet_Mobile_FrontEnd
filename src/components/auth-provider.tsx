"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
} | null;

type AuthContextType = {
  user: User;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate checking for a stored session
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, you would check for a token in localStorage or cookies
        // and validate it with your backend
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Auth error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, you would make an API call to your backend
      // This is just a simulation
      const mockUser = {
        id: "1",
        name: "John Doe",
        email: email,
        avatar: "/placeholder.svg?height=32&width=32",
        password,
      };

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, you would make an API call to your backend
      // This is just a simulation
      const mockUser = {
        id: "1",
        name: name,
        email: email,
        avatar: "/placeholder.svg?height=32&width=32",
        password,
      };

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
