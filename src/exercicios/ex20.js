import { useState } from "react";

function VelocidadeMedia() {
    const [resultado, setResultado] = useState(0);
    const [distancia, setDistancia] = useState("");
    const [tempo, setTempo] = useState("");

    const calcularVelocidadeMedia = () => {
        const velocidade = Number(distancia) / Number(tempo);
        setResultado(velocidade);
    };

    return (
        <div>
            <h2>Calculadora de Velocidade Média</h2>
            <input 
                type="number" 
                placeholder="Informe a distância (em km)" 
                value={distancia} 
                onChange={(e) => setDistancia(e.target.value)} 
            />

            <input 
                type="number" 
                placeholder="Informe o tempo (em horas)" 
                value={tempo} 
                onChange={(e) => setTempo(e.target.value)} 
            />

            <button onClick={calcularVelocidadeMedia}>Calcular</button>
            <p>Velocidade Média: {resultado.toFixed(2)} km/h</p>
        </div>
    );
}

export default VelocidadeMedia;
