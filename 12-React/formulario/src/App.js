import React,{ useState } from "react";
import Input from './Componentes/Input';
import Saludar from './Componentes/Saludar';
import Boton from './Componentes/boton';
import './Componentes/estilos.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [categoriaEdad, setCategoriaEdad] = useState("");
  const [mostrarSaludo, setMostrarSaludo] = useState(false);
  const [esChico, setEsChico] = useState(false);

  function manejarSaludo(e) {
    setNombre(e.target.value);
  }

  function manejarEdad(e) {
    setEdad(e.target.value);
  }

  function manejarClick() {
    const edadNum = parseInt(edad);
    let categoria = "";

    if (edadNum <= 12) {
      categoria = "Niño";
    }
    else if (edadNum > 12 && edadNum <= 20) {
      categoria = "Joven";
    }
    else if (edadNum > 20 && edadNum <= 40) {
      categoria = "Mayor";
    } else if (edadNum > 40) {
      categoria = "Viejo";
    }
    else {
      categoria = "una perla buena que debería de ingresar su edad";
    }
    setCategoriaEdad(categoria);
    setMostrarSaludo(true);
  }

  function cambiarImagen() {
    setEsChico(!esChico);
  }

  return (
    <>
      <Input text={"Nombre"} type={"text"} value={nombre} onChange={manejarSaludo} />
      <Input text={"Edad"} type={"number"} min={0} value={edad} onChange={manejarEdad} />
      <Boton onClick={manejarClick} />
      {mostrarSaludo && <Saludar saludo={nombre} categoria={categoriaEdad} />}
      <div className="foto" onClick={cambiarImagen} ><img src={esChico ? "/imagenes/perro-cactus.jpg" : "/imagenes/perro-traje.jpg"} alt="Avatar" width="100" /></div>
    </>
  );
}

export default App;