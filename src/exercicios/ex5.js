import { useState } from "react";

function Exercicio5() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const [valor3, setValor3] = useState("");


    const Media = () => {
        setResultado((Number(valor1) + Number(valor2) + Number(valor3)) / 3);
        setValor1("");
        setValor2("");
        setValor3("");

    }

    return (
        <div>
            <h2>Calcular Média</h2>
            <input type="number" placeholder="Informe o valor 1" value={valor1} onChange={(e) => setValor1(e.target.value)} />
            <input type="number" placeholder="Informe o valor 2" value={valor2} onChange={(e) => setValor2(e.target.value)} />
            <input type="number" placeholder="Informe o valor 3" value={valor3} onChange={(e) => setValor3(e.target.value)} />

            <button onClick={Media}>Caucular</button>

            <p>O a Média dos três numeros é: {resultado}</p>
        </div>

    );

}

export default Exercicio5;