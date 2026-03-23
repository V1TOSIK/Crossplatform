// AuthContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    accessToken: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const login = (token: string) => setAccessToken(token);
    const logout = () => setAccessToken(null);

    return (
        <AuthContext.Provider value={{
            isLoggedIn: !!accessToken,
            accessToken,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;