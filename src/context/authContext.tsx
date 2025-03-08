import { User } from '@supabase/supabase-js';
import {createContext, useContext, useState} from 'react'

interface AuthContextProps{
    user: User | null | undefined;
    setAuth: (authUser: User | null | undefined) => void;
}

const AuthContext = createContext({setAuth(authUser) {
    
},} as AuthContextProps)

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {

const [user, setUser] = useState<User | null | undefined>(undefined);

function setAuth(authUser: User | null | undefined){
    setUser(authUser)
}

return (
    <AuthContext.Provider value={{ user, setAuth }}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)