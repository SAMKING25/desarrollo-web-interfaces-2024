import React,{ useState } from "react";
import Nombre from "./Componentes/Nombre";
import Edad from "./Componentes/Edad";
import Saludar from "./Componentes/Saludar";
import Mensaje from "./Componentes/Mensaje";
import Foto from "./Componentes/Foto";
import './Componentes/estilos.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [categoriaEdad, setCategoriaEdad] = useState("");
  const [esChico, setEsChico] = useState(false);
  let mensaje;
  
  if (mostrarMensaje) {
    mensaje = <Mensaje nombre={nombre} edad={edad} categoria={categoriaEdad} />;
  }

  const comparar = () => {
    let categoria = "";

    if (edad <= 12) {
      categoria = "Niño";
    }
    else if (edad > 12 && edad <= 20) {
      categoria = "Joven";
    }
    else if (edad > 20 && edad <= 40) {
      categoria = "Mayor";
    } else if (edad > 40) {
      categoria = "Viejo";
    }
    else {
      categoria = "una perla buena que debería de ingresar su edad";
    }
    setCategoriaEdad(categoria);
  }

  function cambiarImagen() {
    setEsChico(!esChico);
  }

  return (
    <>
      <h1>Introduce tus datos</h1>
      <Nombre label="Nombre: " value={nombre} onChange={setNombre} />
      <Edad label="Edad: " value={edad} onChange={setEdad} />
      <Saludar setMostrarMensaje={setMostrarMensaje} comparar={comparar} />

      {mensaje}
      {/* {mostrarMensaje && <Mensaje nombre={nombre} edad={edad} />} */}
      
      <Foto esChico={esChico} onClick={cambiarImagen} />
    </>
  );
}

export default App;
