import { useState } from "react";

function Perimetro() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    const area = () => {
        setResultado((Number(valor1) + Number(valor2)*2));
        setValor1("");
        setValor2("");

    }

    return (
        <div>
            <h2>Perimetro do Retângulo</h2>
            <input type="number" placeholder="Informe a Largura:"
                value={valor1} onChange={(e) => setValor1(e.target.value)} />

            <input type="number" placeholder="Infrome a Altura:"
                value={valor2} onChange={(e) => setValor2(e.target.value)} />

            <button onClick={area}>Calcular</button>
            <p>O Perimetro do retangulo é: {resultado}</p>
        </div>
    );
}

export default Perimetro;