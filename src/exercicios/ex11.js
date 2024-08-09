import { useState } from "react";

function Exercicio11() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");

    const calcular = () => {
        setResultado((Number(valor1) * 3.14 * 2));
        setValor1("");
    }

    return (
        <div>
            <h2>Calcular Perimetro do circulo</h2>
            <input type="number" placeholder="Insira o raio do circulo" value={valor1} onChange={(e) => setValor1(e.target.value)} />
            <button onClick={calcular}>Caucular</button>

            <p>O perimetro desse circulo é: {resultado}</p>
        </div>

    );

}

export default Exercicio11;