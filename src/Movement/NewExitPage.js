import axios from "axios";
import { useState, useContext } from "react";

import { H1, DivInput, Button } from "../Movement/styled";
import { AuthContext } from "../Components/Auth";


export default function NewExitPage(){

    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("");

    const {user} = useContext(AuthContext);

    function newExit (event){

        event.preventDefault();

        
        const exit = {
            value,
            description
        }

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const promise = axios.post("http://localhost:5000/new-exit", exit, config);

        promise.then((resp) => {alert("Nova entrada adicionada")});

        promise.catch((err) => {alert(err.response.data)});
    }
    return (
        <>
            <H1> Nova saída</H1>

            <form onSubmit={newExit}>
                <DivInput>
                    <input placeholder="Valor" type="text" value={value} onChange={(e) => setValue(e.target.value)} required ></input>
                    <input placeholder="Descrição" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required></input>
                    <Button> Salvar saída </Button>
                </DivInput>
            </form>
        </>
        
    )
}