import styled from "styled-components";

export default function TransactionList({item}){

    let color = item.type;
    
    return (
        <>
            <Div>
                <div>
                    <H5day> {item.day} </H5day>
                    <H5description> {item.description} </H5description>
                </div>
                
                <H5value color={color} > {
                new Intl.NumberFormat('pt-BR', 
                {style: 'currency', currency: 'BRL'})
                .format(item.value)} </H5value>
            </Div>
        </>
    )
};

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    margin-right: 20px;
    font-size: 30px;
    & div{
        display: flex;
    }
    @media (max-width: 540px) {
        font-size: 20px;
    }
`

const H5day = styled.h5`
    color: #C6C6C6;
    font-family: 'Raleway';
    margin-right: 15px;
`

const H5description = styled.h5`
    font-family: 'Raleway';
`

const H5value = styled.h5`
    color: ${props => props.color === "entry" ? "#03AC00" : "#C70000"};
    font-family: 'Raleway';
`