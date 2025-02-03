import './App.css';
import Iterador from './iterador.js';

import React,{useRef,useState} from 'react';

function App() {
	const [numero, setNumero] = useState();
	const op1 = useRef();
	const op2 = useRef();
	const res = useRef();

	const seleccionar = (e) =>{
		setNumero(e.target.value);
	}

	const sumar = (e) =>{
		e.target.value = Number(op1.current.value)+Number(op2.current.value);
	}

	return (
		<>
			<Iterador />
			<select value={numero} onChange={seleccionar}>
				<option value="cero">0</option>
				<option value="uno">1</option>
				<option value="dos">2</option>
				<option value="tres">3</option>
			</select>
			<p>La opcion seleccionada es {numero}</p>
			<input ref={op1} type='text'></input>+<input ref={op2} type='text'></input>
			<input ref={res} type='text' readOnly onClick={sumar}></input>
		</>
	);
}

export default App;
