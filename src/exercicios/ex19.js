import { useState } from "react";

function Exercicio19() {
    const [resultadoHoras, setResultadoHoras] = useState(0);
    const [resultadoMinutos, setResultadoMinutos] = useState(0);
    const [resultadoSegundos, setResultadoSegundos] = useState(0);
    const [valorDias, setValorDias] = useState("");

    const calcular = () => {
        const dias = Number(valorDias);
        const horas = dias * 24;
        const minutos = horas * 60;
        const segundos = minutos * 60;

        setResultadoHoras(horas);
        setResultadoMinutos(minutos);
        setResultadoSegundos(segundos);
        setValorDias("");
    }

    return (
        <div>
            <h2>Contagem de dias</h2>
            <input
                type="number"
                placeholder="Insira o valor em dias"
                value={valorDias}
                onChange={(e) => setValorDias(e.target.value)}
            />
            <button onClick={calcular}>Calcular</button>

            <p>{valorDias} dias correspondem a:</p>
            <p>{resultadoHoras} horas</p>
            <p>{resultadoMinutos} minutos</p>
            <p>{resultadoSegundos} segundos</p>
        </div>
    );
}

export default Exercicio19;
