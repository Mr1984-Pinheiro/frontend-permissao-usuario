import { createContext, useCallback } from "react";
import api from "../services/api";

interface AuthContextState {
    token: string;
    
}

interface UserData {
    username: string;
    password: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ( {children}:any ) => {

    const signIn = useCallback( async ({ username, password }: UserData) => {
        const response = await api.post('/sessions', {
            username,
            password
        })
      },
      []);
    

        return (
            <AuthContext.Provider value={{token: '7548794648' }}>
                {children}
            </AuthContext.Provider>
        )
}

export { AuthContext, AuthProvider }