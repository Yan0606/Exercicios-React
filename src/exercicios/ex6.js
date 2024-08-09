import { useState } from "react";

function ConversoraTemp() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");

    const divisao = () => {
        setResultado(Number(valor1) * 1.8 + 32);
        setValor1("");

    }

    return (
        <div>
            <h2>Conversor de Celsius para Fahrenheit</h2>
            <input type="number" placeholder="Informe a tempertura em Celsius"
                value={valor1} onChange={(e) => setValor1(e.target.value)} />

            <button onClick={divisao}>Converter</button>
            <p>Fahrenheit: {resultado}</p>
        </div>
    );
}

export default ConversoraTemp;