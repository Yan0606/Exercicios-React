import { useState } from "react";

// Importando os exercícios
import FormularioSoma from "./exercicios/ex1";
import FormularioSubtracao from "./exercicios/ex2";
import Exercicio3 from "./exercicios/ex3";
import FormularioDivisao from "./exercicios/ex4";
import Exercicio5 from "./exercicios/ex5";
import ConversoraTemp from "./exercicios/ex6";
import Exercicio7 from "./exercicios/ex7";
import FormularioArea from "./exercicios/ex8";
import Exercicio9 from "./exercicios/ex9";
import Perimetro from "./exercicios/ex10";
import Exercicio11 from "./exercicios/ex11";
import BaseExpoente from "./exercicios/ex12";
import Exercicio13 from "./exercicios/ex13";
import ConversorKm from "./exercicios/ex14";
import Exercicio15 from "./exercicios/ex15";
import CalculaDesconto from "./exercicios/ex16";
import Exercicio17 from "./exercicios/ex17";
import JurosComposto from "./exercicios/ex18";
import Exercicio19 from "./exercicios/ex19";
import VelocidadeMedia from "./exercicios/ex20";

function App() {
  const [exercicioAtual, setExercicioAtual] = useState(null);

  const renderExercicio = () => {
    switch (exercicioAtual) {
      case 1:
        return <FormularioSoma />;
      case 2:
        return <FormularioSubtracao />;
      case 3:
        return <Exercicio3 />;
      case 4:
        return <FormularioDivisao />;
      case 5:
        return <Exercicio5 />;
      case 6:
        return <ConversoraTemp />;
      case 7:
        return <Exercicio7 />;
      case 8:
        return <FormularioArea />;
      case 9:
        return <Exercicio9 />;
      case 10:
        return <Perimetro />;
      case 11:
        return <Exercicio11 />;
      case 12:
        return <BaseExpoente />;
      case 13:
        return <Exercicio13 />;
      case 14:
        return <ConversorKm />;
      case 15:
        return <Exercicio15 />;
      case 16:
        return <CalculaDesconto />;
      case 17:
        return <Exercicio17 />;
      case 18:
        return <JurosComposto />;
      case 19:
        return <Exercicio19 />;
      case 20:
        return <VelocidadeMedia />;
      default:
        return <h2>Selecione um exercício para começar</h2>;
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Lista de Exercícios</h1>
      {[...Array(20).keys()].map((num) => (
        <button
          key={num + 1}
          onClick={() => setExercicioAtual(num + 1)}
          style={{
            margin: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
          }}
        >
          Exercício {num + 1}
        </button>
      ))}
      <div style={{ marginTop: '20px' }}>
        {renderExercicio()}
      </div>
    </div>
  );
}

export default App;
