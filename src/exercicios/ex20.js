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
        <div style={styles.container}>
            <h2 style={styles.heading}>Calculadora de Velocidade Média</h2>
            <input 
                type="number" 
                placeholder="Informe a distância (em km)" 
                value={distancia} 
                onChange={(e) => setDistancia(e.target.value)} 
                style={styles.input}
            />

            <input 
                type="number" 
                placeholder="Informe o tempo (em horas)" 
                value={tempo} 
                onChange={(e) => setTempo(e.target.value)} 
                style={styles.input}
            />

            <button onClick={calcularVelocidadeMedia} style={styles.button}>Calcular</button>
            <p style={styles.resultado}>Velocidade Média: {resultado.toFixed(2)} km/h</p>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#2C2C2C',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
        maxWidth: '400px',
        margin: '20px auto',
        color: '#E0E0E0',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#03A9F4',
    },
    input: {
        display: 'block',
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        fontSize: '16px',
        color: '#E0E0E0',
        backgroundColor: '#444',
        boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.2)',
    },
    button: {
        fontSize: '1.4em',
        padding: '0.6em 0.8em',
        borderRadius: '0.5em',
        border: 'none',
        backgroundColor: '#000',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '2px 2px 3px #000000b4',
        width: '100%',
        margin: '20px 0',
        transition: 'background 0.3s ease',
    },
    resultado: {
        textAlign: 'center',
        fontSize: '1.2em',
        margin: '10px 0',
    },
};

export default VelocidadeMedia;
