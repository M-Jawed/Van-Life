import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    const login = (userData) => {
        setIsAuthenticated(true)
        setUser(userData)
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUser(null)
    }

    return (
        <AuthContext.Provider 
        value ={{
            isAuthenticated,
            user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}