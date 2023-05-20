//3) OPERADOR TERNARIO: 

const TecnicaTres = ({booleano}) => {
  return (
    <div>
        {
           booleano ? <h3> Acceso Permitido </h3> : <h4> Acceso Denegado </h4>
        }
    </div>
  )
}

export default TecnicaTres