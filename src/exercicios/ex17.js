import { useState } from "react";

function Exercicio17() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const [valor3, setValor3] = useState("");


    const Media = () => {
        setResultado(Number(valor1) * Number(valor2) * Number(valor3));
        setValor1("");
        setValor2("");
        setValor3("");

    }

    return (
        <div>
            <h2>Calcular Juros Composto</h2>
            <input type="number" placeholder="Informe um capital" value={valor1} onChange={(e) => setValor1(e.target.value)} />
            <input type="number" placeholder="Informe uma taxa de juros" value={valor2} onChange={(e) => setValor2(e.target.value)} />
            <input type="number" placeholder="Informe um periodo" value={valor3} onChange={(e) => setValor3(e.target.value)} />

            <button onClick={Media}>Caucular</button>

            <p>O montante com juros compostos é: {resultado}</p>
        </div>

    );

}

export default Exercicio17;