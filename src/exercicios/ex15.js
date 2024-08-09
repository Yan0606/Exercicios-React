import { useState } from "react";

function Exercicio15() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    const imc = () => {
        setResultado(Number(valor1) / (Number(valor2) * Number(valor2)));
        setValor1("");
        setValor2("");
    }

    return (
        <div>
            <h2>Calcular IMC</h2>
            <input type="number" placeholder="Informe seu peso em Kg" value={valor1} onChange={(e) => setValor1(e.target.value)} />
            <input type="number" placeholder="Informe sua altura em metros" value={valor2} onChange={(e) => setValor2(e.target.value)} />
            <button onClick={imc}>Calcular</button>

            <p>Seu IMC é: {resultado}</p>
        </div>

    );

}

export default Exercicio15;