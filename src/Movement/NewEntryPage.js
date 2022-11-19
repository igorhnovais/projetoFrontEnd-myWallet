import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Nav, H1, DivInput, Button } from "../Movement/styled";
import { AuthContext } from "../Components/Auth";



export default function NewEntrypage(){

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const {token} = useContext(AuthContext);
    let navigate = useNavigate();

    function newEntry (event){

        event.preventDefault();

        
        const entry = {
            value,
            description
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post("http://localhost:5000/new-entry", entry, config);

        promise.then((resp) => {alert("Nova entrada adicionada"); navigate("/menu")});

        promise.catch((err) => {alert(err.response.data)});
    }

    return (
        <>
            <Nav>
                <H1> Nova entrada</H1>

                <form onSubmit={newEntry}>
                    <DivInput>
                        <input placeholder="Valor" type="number" value={value} onChange={(e) => setValue(e.target.value)} required></input>
                        <input placeholder="Descrição" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required></input>              
                        <Button type="submit"> Salvar entrada </Button>
                    </DivInput>
                </form>
            </Nav>
        </>
        
    )
}