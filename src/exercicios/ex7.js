import { useState } from "react";

function Exercicio7() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");

    const converter = () => {
        setResultado((Number(valor1) - 32) / 1.8);
        setValor1("");
    }

    return (
        <div>
            <h2>Celsius para Fahrenheit</h2>
            <input type="number" placeholder="Informe uma temperatura em Farenheit" value={valor1} onChange={(e) => setValor1(e.target.value)} />
            <button onClick={converter}>Caucular</button>
            <p>Convertendo para celcius essa temperatura é: {resultado}</p>
        </div>
    );
}

export default Exercicio7;