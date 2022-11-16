import React, {createContext, useState} from 'react';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [user, setUser] = useState("");
    const [update, setUpdate] = useState([]);
    const [porcentage, setPorcentage] = useState(0);
    let navigate = useNavigate();

    function data(token, image){
        
        setUser({
            token: token,
            image: image
        })
        
        navigate("/hoje");
    }

    return (
        <AuthContext.Provider value={{data, user, update, setUpdate, porcentage, setPorcentage}}>
            {children}
        </AuthContext.Provider>
        
    )
}

export default AuthProvider;