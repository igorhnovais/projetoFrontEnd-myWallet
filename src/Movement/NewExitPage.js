import axios from "axios";
import { useState, useContext } from "react";

import { Nav, H1, DivInput, Button } from "../Movement/styled";
import { AuthContext } from "../Components/Auth";
import { useNavigate } from "react-router-dom";


export default function NewExitPage(){

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const {token} = useContext(AuthContext);
    let navigate = useNavigate();

    function newExit (event){

        event.preventDefault();

        
        const exit = {
            value,
            description
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.post("http://localhost:5000/new-exit", exit, config);

        promise.then((resp) => {navigate("/menu")});

        promise.catch((err) => {alert(err.response.data.message)});
    };
    
    return (
        <>
            <Nav>
                <H1> Nova saída</H1>

                <form onSubmit={newExit}>
                    <DivInput>
                        <input placeholder="Valor" type="number" value={value} onChange={(e) => setValue(e.target.value)} required ></input>
                        <input placeholder="Descrição" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required></input>
                        <Button> Salvar saída </Button>
                    </DivInput>
                </form>
            </Nav>
        </>
        
    )
};