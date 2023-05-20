//2) En Linea con Fragment. 
//La usamos cuando deseamos renderizar un elemento condicional en función de expresión booleana. 

const TecnicaDos = ({booleano}) => {
  return (
    <>
        {booleano && <h2> Usuario Autorizado </h2>}
        {!booleano && <h2> Usuario NO AUTORIZADO </h2>}
    </>
  )
}

//! = niega el valor. 
// Recibo un booleano, si el booleano es true, renderizo el elemento. 

export default TecnicaDos