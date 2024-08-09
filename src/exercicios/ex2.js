import { useState } from "react";

function FormularioSubtracao() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    const subtrair = () => {
        setResultado(Number(valor2) - Number(valor1));
        setValor1("");
        setValor2("");
    }

    return (
        <div>
            <h2>Subtrair Valores</h2>
            <input type="number" placeholder="Informe o valor 1"
                value={valor1} onChange={(e) => setValor1(e.target.value)} />

            <input type="number" placeholder="Infrome o valor 2"
                value={valor2} onChange={(e) => setValor2(e.target.value)} />

            <button onClick={subtrair}>Calcular</button>
            <p>O valor da subtração é: {resultado}</p>
        </div>
    );
}

export default FormularioSubtracao;