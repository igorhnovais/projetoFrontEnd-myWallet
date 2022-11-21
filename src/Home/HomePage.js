import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

import {Nav, SectionImg, DivInput, DivA, Button} from "./styled";
import {AuthContext} from "../Components/Auth";

export default function HomePage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const {setToken} = useContext(AuthContext);

    function signIn(event){


        event.preventDefault();


        const login = {
            email,
            password
        };

        const promise = axios.post("http://localhost:5000/sign-in", login);

        promise.then((resp => {setToken(resp.data); navigate("/menu")}));

        promise.catch((err => {alert(err.response.data)}));
    }

    return (
        <>
            <Nav>
                <SectionImg>
                    <h1> MyWallet </h1>
                </SectionImg>

                <form onSubmit={signIn}>
                    <DivInput >
                        <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                        <Button type="submit"> Entrar </Button>
                    </DivInput>
                </form>

                <DivA>
                    <Link to="/cadastro" data-identifier="sign-up-action">
                        Não tem uma conta? Cadastre-se! 
                    </Link>
                </DivA>
            </Nav> 

        </>
    )
};