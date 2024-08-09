import React, { useState } from 'react';

function BaseExpoente() {
    const [base, setBase] = useState('');
    const [expoente, setExpoente] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleCalculate = () => {
        const potencia = Math.pow(parseFloat(base), parseFloat(expoente));
        const resultadoEmCm = potencia * 100;
        setResultado(resultadoEmCm);
    };

    return (
        <div>
            <h2>Calculadora</h2>
            <input
                type="number"
                placeholder='base'
                value={base}
                onChange={(e) => setBase(e.target.value)}
            />

            <input
                type="number"
                placeholder=' Expoente'
                value={expoente}
                onChange={(e) => setExpoente(e.target.value)}
            />

            <button onClick={handleCalculate}>Calcular</button>
            {resultado !== null && (
                <p>
                    Resultado: {resultado.toFixed(2)} cm
                </p>
            )}
        </div>
    );
}

export default BaseExpoente;
