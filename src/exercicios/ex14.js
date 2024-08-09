import { useState } from "react";

function ConversorKm() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    const area = () => {
        setResultado((Number(valor1) / 1.609));
        setValor1("");
        setValor2("");

    }

    return (
        <div>
            <h2>Conversor de Km para milhas</h2>
            <input type="number" placeholder="Informe o valor em quilômetros:"
                value={valor1} onChange={(e) => setValor1(e.target.value)} />

            <button onClick={area}>Calcular</button>
            <p>Os quilômetros em milhas é: {resultado}</p>
        </div>
    );
}

export default ConversorKm;