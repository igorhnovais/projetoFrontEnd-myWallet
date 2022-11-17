import React, {createContext, useState} from 'react';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [user, setUser] = useState("");
    const [update, setUpdate] = useState([]);
    
    let navigate = useNavigate();

    function data(name){
        
        setUser({
            name
        })
        
        navigate("/menu");
    }

    return (
        <AuthContext.Provider value={{data, user, update, setUpdate}}>
            {children}
        </AuthContext.Provider>
        
    )
}

export default AuthProvider;