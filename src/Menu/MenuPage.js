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
    const [balance, setBalance] = useState(0);

   
    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }    

        const promise = axios.get("http://localhost:5000/transactions", config)

        promise.then(catchTransactions)

        promise.catch(err => {alert("Seu tempo expirou!"); navigate("/"); window.location.reload()});

        function catchTransactions(resp){

            setTransactions(resp.data.transactions);
            setUser(resp.data.user);
            soma(resp.data.transactions);
        }

    }, [balance, navigate, token]);

    function soma(resp){
        let sum = 0;

        for (let i = 0; i < resp.length; i++) {

            if (resp[i].type === "exit") {
                sum = sum - Number(resp[i].value);
            }

            if (resp[i].type === "entry") {
                sum = sum + Number(resp[i].value);
            }
        };

        setBalance(sum);  
    };

    function logOut(){

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.delete("http://localhost:5000/sessions", config);

        promise.then((res) => {
            navigate("/");
            window.location.reload();
        });

        promise.catch((err) => {
            navigate("/");
            window.location.reload();
        });
    };
    
    return (
        <>
            <Nav>
                <SectionName>
                    <h1> Ola, {user}</h1>
                    <Link to="/">
                        <Img src={Saida} alt="sair" onClick={logOut}/>
                    </Link>
                </SectionName>

                <SectionRegister>
                    <DivTransaction>
                        {(transactions?.length === 0 )
                            ? 
                            (<p> não há registros de entrada ou saida</p>)
                            :
                            (<div> 
                                {transactions?.map((item, i) =>  <TransactionList item={item}  key={i}/>)}                       
                            </div>)
                        }
                    </DivTransaction>

                    <DivBalance color={balance}>
                        <h1> SALDO </h1>
                        <h2 >{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(balance)} </h2>
                    </DivBalance>
                </SectionRegister>

                <SectionEntryExit>
                    <Div>
                        <Link to="/nova-entrada">
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <h3> Nova entrada</h3>
                        </Link>
                    </Div>

                    <Div>
                        <Link to="/nova-saida">
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <h3> Nova saída</h3>
                        </Link>
                    </Div>
                </SectionEntryExit>
            </Nav>
        </>
    )
};

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    
`

const SectionName = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    color: white;
    & h1{
        font-size: 40px;
    }
`

const Img = styled.img`
    width: 30px;
`

const SectionRegister = styled.section`
    //width: 97%;
    height: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    margin: 20px;
    border: 5px black solid;
    & p{
        font-size: 30px;
    } 
`

const DivTransaction = styled.div`
    width: 94%;
    margin-bottom: 40px;
    overflow-y: auto;
    word-wrap: break-word;
    & p{
        height: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width:380px) {
        & p{
            margin-left: 45px;
        }
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

    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
    }
    & ion-icon{
        font-size: 50px;
        margin-bottom: 20px;
        margin-top: 15px;
    }
    & h3{
        font-size: 50px;
    }
    & a{
        text-decoration: none;
        color: white;
    }

    @media (max-width: 730px) {
        & h2{
            font-size: 40px;
        }
        & h3{
            font-size: 40px;
        }
    }

    @media (max-width: 520px) {
        & h2{
            font-size: 40px;
        }
        & h3{
            font-size: 35px;
        }
    }
`

const DivBalance = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 30px;
    font-family: 'Raleway';
    & h1{
        font-weight: bold;
        margin-left: 40px;
    }
    & h2{
        color: ${props => props.color >= 0 ? "#03AC00" : "#C70000"};
        margin-right: 40px;
    }
    @media (max-width: 400px) {
        font-size: 25px;
    }
`