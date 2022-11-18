import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [token, setToken] = useState("");
    const [balance, setBalance] = useState([]);
        
    return (
        <AuthContext.Provider value={{setToken, token, balance, setBalance}}>
            {children}
        </AuthContext.Provider>
        
    )
}

export default AuthProvider;