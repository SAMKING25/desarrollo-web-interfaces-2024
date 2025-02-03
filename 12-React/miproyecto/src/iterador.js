import './iterador.css'


import React,{useRef,useState} from 'react';

function App() {
	const miDiv = useRef();
	let [valorReinicio, setValorReinicio] = useState("33");
	const iterar = (e)=>{
		e.target.innerHTML = Number(e.target.innerHTML)+1
	}

	const reiniciar = ()=>{
		miDiv.current.innerHTML = 1;
	}

	const cambiar = (e)=>{
		miDiv.current.innerHTML=e.target.value
	}

	return (
		<>
			<div ref={miDiv} onClick={iterar}>1</div>
			<button onClick={reiniciar}>Reiniciar</button>
			<input value={valorReinicio} onChange={cambiar} type="number"/>
		</>
	);
}

export default App;