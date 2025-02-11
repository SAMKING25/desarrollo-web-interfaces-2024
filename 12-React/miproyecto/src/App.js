import './App.css';
import Iterador from './iterador.js';

// useRef = referencias a otros objetos
// useState = referencias a los VALORES de los objetos (para inputs por ahora)
import React, {useRef, useState} from 'react';

function App() {

  // El setNumero pienso que es como un setter
  // const [sumando1, setSumando1] = useState();
  // const [sumando2, setSumando2] = useState();
  const btnSumar = useRef();
  const sumando1 = useRef();
  const sumando2 = useRef();
  const [resultado, setResultado] = useState();
  
  const sumar = (e)=> {
    // Calculadora para sumar y mostrar a la 
    setResultado(Number(sumando1.current.value) + Number(sumando2.current.value));
  }

  return (
    <>
    {/* Cada vez que ponemos Iterador, utilizamos lo que hay la clase Iterador */}
    {/* <Iterador/>*/}

    <div></div>
    <input ref={sumando1} type="number"/> +
    <input ref={sumando2} type="number"/> =
    <input value={resultado} type="text"/><br/>
    <input value="Sumar" ref={btnSumar} type="button" onClick={sumar}/>

    </>
  );
}

export default App;