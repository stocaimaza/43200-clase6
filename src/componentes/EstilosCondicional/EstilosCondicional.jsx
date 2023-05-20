import './EstilosCondicional.css'
//Podemos usar los estilos condicionales en línes. 
// Y podemos hacerlo con clases.

const EstilosCondicional = ({booleano, clase}) => {
  return (
    <div>
        <h4 style={{color:booleano ? "red" : "green"}}>Estilos Condicional</h4>
        <h4 className={booleano ? "amarillo" : "azul"}> Trabajando con ClassName </h4>
        <h4 className={booleano && "azul"}> Ejemplo con el Operador && </h4>
        <h4 className={clase}> Recibo una clase por props </h4>
    </div>
  )
}

export default EstilosCondicional