import { Link } from "react-router-dom"

import Logo from "../assets/MyWallet.png"
import {Nav, SectionImg, DivInput, DivA, Button} from "./styled"

export default function HomePage(){

    return (
        <>
            <Nav>
                <SectionImg>
                    <img src={Logo} alt="Logo My Wallet"/>
                </SectionImg>

                <form>
                    <DivInput>
                        <input placeholder="E-mail" type="email" ></input>
                        <input placeholder="Senha" type="password"></input>
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