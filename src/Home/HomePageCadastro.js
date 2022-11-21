import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Nav, SectionImg, DivInput, DivA, Button } from "./styled";

export default function HomePageCadastro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    let navigate = useNavigate();

    function signUp(event) {

        event.preventDefault();

        const registration = {
            name,
            email,
            password,
            confirmPassword
        };

        const promise = axios.post("http://localhost:5000/sign-up", registration);

        promise.then((resp => { alert('Parabéns por ter criado sua conta'); navigate("/");}));

        promise.catch((err) => { alert(err.response.data[0]) });
    };

    return (
        <>
            <Nav>
                <SectionImg>
                    <h1> MyWallet </h1>
                </SectionImg>

                <form onSubmit={signUp}>
                    <DivInput>
                        <input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                        <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                        <input placeholder="Confirme a senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                        <Button type="submit"> Cadastrar</Button>
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
};