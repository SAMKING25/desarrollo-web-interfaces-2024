function Saludar({saludo,categoria}){
  return(
      <div>
          <span>{`Hola, ${saludo}`}</span>
          <span>{` eres ${categoria}`}</span>
      </div>
  );
};
export default Saludar;