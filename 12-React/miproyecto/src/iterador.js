import './iterador.css';


// useRef = referencias a otros objetos
// useState = referencias a los VALORES de los objetos (para inputs por ahora)
import React, {useRef, useState} from 'react';

function Iterador() {
  // Así selecciono el div que he creado con ref={miDiv}
  const miDiv = useRef();

  // Lo que le pongo entre parentesis va a ser su nuevo valor
  const [valorReinicio, setValorReinicio] = useState();


  const iterar = (e)=>{
    // Con esto cogemos el texto del div (1) y lo vamos sumando cada vez que clickamos
    e.target.innerHTML = Number(e.target.innerHTML)+1
  }

  const iniciar = (e)=> {
    // Cambiamos el valor a 1
    // current siempre hay que ponerlo porque hace referencia al estado ACTUAl
    miDiv.current.innerHTML="1";
  }

  const cambiar = (e)=> {
    // Cambiamos el div a el valor del input
    miDiv.current.innerHTML = e.target.value;
  }
  
  // El return crea HTML (Tiene que estar todo en un div, o entre <> </>)
  return (
    <>
    {/* Lo que va entre {} es de JavaScript */}
    {/* ref={miDiv} para asignarle una variable a un elemento */}
    <div ref={miDiv} onClick={iterar}>1</div>

    <button onClick={iniciar}>Reiniciar</button>

    <input value={valorReinicio} onChange={cambiar} type="number"/>
    </>
  );
}

export default Iterador;