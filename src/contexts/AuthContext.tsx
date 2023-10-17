import { createContext, ReactNode, useState } from "react"
import UsuarioLogin from "../models/IUserLogin"
import { login } from "../service/Service"
import { toastAlerta } from "../utils/toastAlert"


interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
   

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        name: "",
        email: "",
        password: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/user/login`, userLogin, setUsuario)
            toastAlerta('Você precisa estar logado', 'info');
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta('Você precisa estar logado', 'info');
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            name: "",
            email: "",
            password: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}