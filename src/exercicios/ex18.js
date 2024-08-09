import { useState } from "react";

function JurosComposto() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const [valor3, setValor3] = useState("");

    const calcula = () => {
        const montante = Number(valor1) * Math.pow(1 + Number(valor2), Number(valor3));
        setResultado(montante);
        setValor1("");
        setValor2("");
        setValor3("");
    };

    return (
        <div>
            <h2>Calculadora de Juros Compostos</h2>
            <input 
                type="number" 
                placeholder="Informe o capital:" 
                value={valor1} 
                onChange={(e) => setValor1(e.target.value)} 
            />

            <input 
                type="number" 
                placeholder="Informe a taxa de juros:" 
                value={valor2} 
                onChange={(e) => setValor2(e.target.value)} 
            />

            <input 
                type="number" 
                placeholder="Informe o período:" 
                value={valor3} 
                onChange={(e) => setValor3(e.target.value)} 
            />

            <button onClick={calcula}>Calcular</button>
            <p>O montante com juros compostos é: R$ {resultado.toFixed(2)}</p>
        </div>
    );
}

export default JurosComposto;
