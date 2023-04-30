import { createContext, useState, useEffect, ReactNode } from "react";
import { getSession } from "lastHomework/utils/fetchService";

interface AuthContextData {
  isLoggedIn: boolean;
  setLoggedIn: (isLoggedIn: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("boolSessionId");
    if (session) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
