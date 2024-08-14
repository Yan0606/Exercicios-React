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
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#1E1E1E', color: '#E0E0E0', minHeight: '100vh' }}>
      <h1>Lista de Exercícios</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[...Array(20).keys()].map((num) => (
          <div
            key={num + 1}
            className="container"
            style={{
              margin: '10px',
              borderRadius: '0.9em',
              padding: '3px',
              background: 'linear-gradient(90deg, #03a9f4, #f441a5)',
              transition: 'all 0.4s ease',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setExercicioAtual(num + 1)}
              style={{
                fontSize: '1.4em',
                padding: '0.6em 0.8em',
                borderRadius: '0.5em',
                border: 'none',
                backgroundColor: '#000',
                color: '#fff',
                cursor: 'pointer',
                boxShadow: '2px 2px 3px #000000b4',
                width: '100%',
              }}
            >
              Exercício {num + 1}
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        {renderExercicio()}
      </div>
    </div>
  );
}

export default App;
