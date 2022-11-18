import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [token, setToken] = useState("");
    const [update, setUpdate] = useState([]);
        
    return (
        <AuthContext.Provider value={{setToken, token, update, setUpdate}}>
            {children}
        </AuthContext.Provider>
        
    )
}

export default AuthProvider;