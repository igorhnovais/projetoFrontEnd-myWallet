import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../assets/MyWallet.png"
import {Nav, SectionImg, DivInput, DivA, Button} from "./styled";

export default function HomePageCadastro(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    let navigate = useNavigate();

    function signUp(){

        const registration = {
            name,
            email,
            password
        }

        const promise = axios.post("https://localhost:5000/participants", registration);

        promise.then((resp => {alert('Parabéns por ter criado sua conta'); navigate("/")}));

        promise.catch((err) => {alert(err.response.data.message)});
    }

    return (
        <>
        <Nav>
            <SectionImg>
                <img src={Logo} alt="Logo do MyWallet"/>
            </SectionImg>

            <form onSubmit={signUp}>
                <DivInput>
                    <input  placeholder="Nome" type="text" value={name} ></input>
                    <input  placeholder="E-mail" type="email" value={email}></input>
                    <input  placeholder="Senha" type="password" value={password}></input> 
                    <input placeholder="Confirme a senha" type="password" value={confirmPassword}></input>
                    <Button type="submit"> "Cadastrar"</Button>
                </DivInput>
            </form>

            <DivA>
                <Link to="/">
                     Já tem uma conta? Faça login 
                </Link>
            </DivA>
        </Nav>
    </>
    )
}