import React, { useState } from 'react';

function CalculaDesconto() {
    const [preco, setPreco] = useState('');
    const [desconto, setDesconto] = useState('');
    const [precoFinal, setPrecoFinal] = useState(null);

    const handleCalculate = () => {
        const valorDesconto = (parseFloat(preco) * parseFloat(desconto)) / 100;
        const precoComDesconto = parseFloat(preco) - valorDesconto;
        setPrecoFinal(precoComDesconto);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Calculadora de Desconto</h2>
            
            <input
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço Original"
                style={styles.input}
            />
            
            <input
                type="number"
                value={desconto}
                onChange={(e) => setDesconto(e.target.value)}
                placeholder="Percentual de Desconto (%)"
                style={styles.input}
            />
            
            <div className="container" style={styles.buttonContainer}>
                <button onClick={handleCalculate} style={styles.button}>
                    Calcular Desconto
                </button>
            </div>
            
            {precoFinal !== null && (
                <p style={styles.resultado}>
                    Preço com Desconto: R$ {precoFinal.toFixed(2)}
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

export default CalculaDesconto;
