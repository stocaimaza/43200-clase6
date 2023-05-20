import './App.css';
import Abuelo from './componentes/Abuelo/Abuelo';
import { Contexto } from './context/context';
import TecnicaUno from './componentes/TecnicaUno/TecnicaUno';
import TecnicaDos from './componentes/TecnicaDos/TecnicaDos';
import TecnicaTres from './componentes/TecnicaTres/TecnicaTres';
import EstilosCondicional from './componentes/EstilosCondicional/EstilosCondicional';
import BotonCondicional from './componentes/BotonCondicional/BotonCondicional';

//Aprendimos en estas clases que podemos enviar información entre componentes a traves de las props. Estas se envían de forma unidireccional de un componente padre a un componente hijo. 
//Esto en aplicaciones grandes con muchas capas de componentes se convierte en una tarea tediosa. 

//Llevamos este ejemplo al código:  "HERENCIA FAMILIAR"

//Para solucionar esto React presenta una nueva herramienta llamada Contexto. 

//En el contexto podemos almacenar datos o funciones para que esten disponibles para toda la app sin necesidad de pasar por todas las jerarquias de componentes. 

//Contexto: 

//Proveedor = componente que proporciona los datos que se van a compartir.  
//Consumidor = es el componente que consume los datos proporcionados por el proveedor. 
/*
function App() {

  const herencia = {
    efectivo: 10000000, 
    propiedades: 6,
    vehiculos: 5
  }; 

  return (
    
      <Contexto.Provider value={herencia} >
        <Abuelo/>
      </Contexto.Provider>
    
  );
}
//En el value paso la información que quiero transferir. 

export default App;
*/

//Técnicas de Renderizado: 

const App = () => {
  return (
    <div>
      <TecnicaUno nombre={"Camarada Bruno"} />
      <TecnicaDos booleano={false}/>
      <TecnicaTres booleano={true}/>
      <EstilosCondicional booleano={true} clase={"nuevaClase"}/>
      <BotonCondicional/>
    </div>
  )
}

export default App