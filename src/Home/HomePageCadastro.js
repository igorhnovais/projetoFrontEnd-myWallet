import { Link } from "react-router-dom";

import Logo from "../assets/MyWallet.png"
import {Nav, SectionImg, DivInput, DivA, Button} from "./styled";

export default function HomePageCadastro(){
    return (
        <>
        <Nav>
            <SectionImg>
                <img src={Logo} alt="Logo do MyWallet"/>
            </SectionImg>

            <form>
                <DivInput>
                    <input  placeholder="Nome"  ></input>
                    <input  placeholder="E-mail" type="email" ></input>
                    <input  placeholder="Senha" type="password" ></input> 
                    <input placeholder="Confirme a senha" type="password" ></input>
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