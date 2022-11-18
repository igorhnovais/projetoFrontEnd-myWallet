import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext} from "react";

import {AuthContext} from "../Components/Auth";
import TransactionList from "./TransactionsList";

import Saida from "../assets/Vector(1).png";


export default function MenuPage(){

    const {token} = useContext(AuthContext);
    let navigate = useNavigate();

    const [transactions, setTransactions] = useState([]);
    const [user, setUser] = useState([]);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const promise = axios.get("http://localhost:5000/transactions", config)

        promise.then(catchTransactions)

        promise.catch(err => {alert("Seu tempo expirou!"); navigate("/"); window.location.reload()});

        function catchTransactions(resp){

            setTransactions(resp.data.transactions);
            setUser(resp.data.user);
        }
        
    }, []);


    return (
        <>
            <SectionName>
                <h1> Ola, {user}</h1>
                <Link to="/">
                    <img src={Saida} alt="sair"/>
                </Link>
            </SectionName>

            <SectionRegister>
                {(transactions?.length === 0 )
                    ? 
                    (<p> não há registros de entrada ou saida</p>)
                    :
                    (<div> 
                        {transactions?.map((item, i) =>  <TransactionList item={item}  key={i}/>)}                       
                    </div>)
                }
            </SectionRegister>

            <SectionEntryExit>
                <Div>
                    <Link to="/nova-entrada">
                        <h2> + </h2>
                        <h3> Nova entrada</h3>
                    </Link>
                </Div>

                <Div>
                    <Link to="/nova-saida">
                        <h2> - </h2>
                        <h3> Nova saída</h3>
                    </Link>
                </Div>
            </SectionEntryExit>
        </>
    )
}

const SectionName = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    color: white;
    & h1{
        font-size: 30px;
    }
`

const SectionRegister = styled.section`
    width: 95%;
    height: 600px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 20px;
    & p{
        font-size: 30px;
    } 
`

const SectionEntryExit = styled.section`
    display: flex;  
`

const Div = styled.div`
    background-color: #A328D6;
    height: 180px;
    width: 90%;
    color: white;
    border-radius: 10px;
    margin: 20px;
    padding: 10px 20px;
    & h2{
        font-size: 30px;
        margin-bottom: 50px;
    }
    & h3{
        font-size: 30px;
    }
    & a{
        text-decoration: none;
        color: white;
    }
`