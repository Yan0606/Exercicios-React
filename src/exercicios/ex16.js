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
        <div>
            <h2>Calculadora de Desconto</h2>

            <input
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço Original"
            />

            <input
                type="number"
                value={desconto}
                onChange={(e) => setDesconto(e.target.value)}
                placeholder="Percentual de Desconto (%)"
            />
            <button onClick={handleCalculate}>Calcular Desconto</button>
            {precoFinal !== null && (
                <p>Preço com Desconto: R$ {precoFinal.toFixed(2)}</p>
            )}
        </div>
    );
}

export default CalculaDesconto;
