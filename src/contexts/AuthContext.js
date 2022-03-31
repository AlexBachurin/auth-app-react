import React, { useState, useContext, useCallback, useEffect, useMemo } from "react";
import Cookies from "js-cookie";
import api from '../services/index'
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./AppContext";
const AuthContext = React.createContext();


const AuthProvider = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setTokenData] = useState(null);


    //setToken
    const setToken = useCallback((tokenData) => {
        setTokenData(tokenData);

        if (tokenData) {
            Cookies.set("auth-token", tokenData);
        } else {
            Cookies.remove("auth-token");
        }
    }, []);
    //LOGOUT
    const logOut = useCallback(() => {
        setUser(null);
        setToken(null);
    }, [setToken]);

    //GET USER INFO
    const loadData = useCallback(async () => {
        const tokenData = Cookies.get("auth-token");
        setTokenData(tokenData);

        try {
            if (tokenData) {
                const { data } = await api.auth.getProfile();
                console.log(data);
                setUser(data);

            }
        } catch {
            setToken(null);
        } finally {
            setIsLoaded(true);

        }
    }, [setToken]);

    useEffect(() => {
        loadData();

    }, [loadData]);


    //ВСЕ ВАЛЬЮСЫ что передаем из контекста кэшируем и передаем в контекст
    const contextValues = useMemo(
        () => ({
            isLoaded,
            user,
            token,
            setUser,
            setToken,
            logOut,
        }),
        [isLoaded, user, token, setToken, logOut]
    );




    return <AuthContext.Provider value={{
        // isLoaded, user, token, setUser, setToken, logOut
        contextValues
    }}>
        {children}
    </AuthContext.Provider>
}
//global hook
const useAuthContext = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuthContext }