import { useState } from "react";

function Exercicio15() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    const calcularIMC = () => {
        const peso = Number(valor1);
        const altura = Number(valor2);
        if (altura === 0) {
            alert("A altura não pode ser zero.");
            return;
        }
        setResultado(peso / (altura * altura));
        setValor1("");
        setValor2("");
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Calcular IMC</h2>
            <input
                type="number"
                placeholder="Informe seu peso em Kg"
                value={valor1}
                onChange={(e) => setValor1(e.target.value)}
                style={styles.input}
            />
            <input
                type="number"
                placeholder="Informe sua altura em metros"
                value={valor2}
                onChange={(e) => setValor2(e.target.value)}
                style={styles.input}
            />
            <div className="container" style={styles.buttonContainer}>
                <button onClick={calcularIMC} style={styles.button}>
                    Calcular
                </button>
            </div>
            {resultado !== 0 && (
                <p style={styles.resultado}>
                    Seu IMC é: {resultado.toFixed(2)}
                </p>
            )}
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
        width: '95%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        fontSize: '16px',
        color: '#E0E0E0',
        backgroundColor: '#444',
        boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.2)',
    },
    buttonContainer: {
        margin: '20px 0',
        borderRadius: '0.9em',
        padding: '3px',
        background: 'linear-gradient(90deg, #03a9f4, #f441a5)',
        transition: 'all 0.4s ease',
        position: 'relative',
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
    },
    resultado: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '1.2em',
    },
};

export default Exercicio15;
