import { Link } from "react-router-dom"

import { H1, DivInput, Button } from "../Movement/styled"
export default function NewExitPage(){
    return (
        <>
            <H1> Nova saída</H1>

            <DivInput>
                <input placeholder="Valor" type="number" ></input>
                <input placeholder="Descrição" type="text"></input>
                <Link to="/menu">
                    <Button> Salvar saída </Button>
                </Link>
            </DivInput>
        </>
        
    )
}