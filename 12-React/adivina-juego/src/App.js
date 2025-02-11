import { useActionState, useState } from 'react';
import Reiniciar from './Componentes/Reiniciar';
import NumeroSecreto from './Componentes/NumeroSecreto';
import Formulario from './Componentes/Formulario';
import Puntuacion from './Componentes/Puntuacion';
import './App.css';


function App() {

  const generarNumSecreto = () => {
    return Math.trunc(Math.random() * 20) + 1
  }

  const reiniciar = () => {
    setNumSecreto(generarNumSecreto);
    setMensaje("Empiece a adivinar...");
    setPuntuacion(20);
  }

  const comparar = (numero) => {
    if (!numero) {
      setMensaje("Pon un número");
    } else if (Number(numero) == NumeroSecreto) {
      setMensaje("Ganaste");
      document.body.style.backgroundColor="green";
      if(score>puntuacion){
        setScore(puntuacion);
      }
    } else if (Number(numero)< NumSecreto){
      setMensaje("Tu numero es bajo!!")
      setPuntuacion(puntuacion-1);
    } else {
      setMensaje("Tu numero es alto!!")
      setPuntuacion(puntuacion+1);
    }

    if (puntuacion == 0){
      setMensaje("Perdiste");
      document.body.style.backgroundColor="red";
    }
  }

  const [NumSecreto, setNumSecreto] = useState(generarNumSecreto);
  const [mensaje, setMensaje] = useState("Empiece a adivinar...");
  const [puntuacion, setPuntuacion] = useState(20);
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <Reiniciar reiniciar={reiniciar} />
      <h1>¡Adivina mi número!{NumSecreto}</h1>
      <NumeroSecreto />
      <br />
      <Formulario comparar={comparar} />

      <Puntuacion />
    </div>
  );
}

export default App;
