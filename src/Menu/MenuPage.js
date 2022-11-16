import Saida from "../assets/Vector(1).png";

export default function MenuPage(){
    return (
        <>
            <section>
                <h1> ola, Fulano</h1>
                <img src={Saida} alt="sair"/>
            </section>

            <section>
                <p> não há registros de entrada ou saida</p>
            </section>

            <div>
                <h2> + </h2>
                <h3> Nova entrada</h3>
            </div>

            <div>
                <h2> - </h2>
                <h3> Nova saída</h3>
            </div>
        </>
    )
}