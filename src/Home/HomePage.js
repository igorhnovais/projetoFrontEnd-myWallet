import { Link } from "react-router-dom"
import axios from "axios";
import { useState, useContext } from "react";

import Logo from "../assets/MyWallet.png";
import {Nav, SectionImg, DivInput, DivA, Button} from "./styled";
import {AuthContext} from "../Components/Auth";

export default function HomePage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {data} = useContext(AuthContext);

    function signIn(){

        const login = {
            email,
            password
        }

        const promise = axios.post("https://localhost:5000", login);

        promise.then((resp => {data(resp.data.name)}));

        promise.catch((err => {alert(err.response.data.message)}));
    }

    return (
        <>
            <Nav>
                <SectionImg>
                    <img src={Logo} alt="Logo My Wallet"/>
                </SectionImg>

                <form>
                    <DivInput onSubmit={signIn}>
                        <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <Link to="/menu">
                            <Button> "Entrar" </Button>
                        </Link>
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
}