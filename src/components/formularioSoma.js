import { useState } from "react";

function FormularioSoma() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    const somar = () => {
        setResultado(Number(valor1) + Number(valor2));
        setValor1("");
        setValor2("");
    }

    return (
        <div>
            <h3>Somar Valores</h3>
            <input type="number" placeholder="Informe o valor 1"
                value={valor1} onChange={(e) => setValor1(e.target.value)} />

            <input type="number" placeholder="Infrome o valor 2"
                value={valor2} onChange={(e) => setValor2(e.target.value)} />

            <button onClick={somar}>Calcular</button>
            <p>O valor da soma é: {resultado}</p>
        </div>
    );
}

export default FormularioSoma;