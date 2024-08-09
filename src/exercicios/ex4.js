import { useState } from "react";

function FormularioDivisao() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    const divisao = () => {
        if (Number(valor2) || Number(valor1) === 0) {
            alert("Não é possível dividir por 0. Por favor, insira outro valor.");
            return;
        }
        setResultado(Number(valor1) / Number(valor2));
        setValor1("");
        setValor2("");

    }

    return (
        <div>
            <h2>divisao Valores</h2>
            <input type="number" placeholder="Informe o valor 1"
                value={valor1} onChange={(e) => setValor1(e.target.value)} />

            <input type="number" placeholder="Infrome o valor 2"
                value={valor2} onChange={(e) => setValor2(e.target.value)} />

            <button onClick={divisao}>Calcular</button>
            <p>O valor da divisão é: {resultado}</p>
        </div>
    );
}

export default FormularioDivisao;