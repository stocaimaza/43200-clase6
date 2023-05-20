import { Contexto } from "../../context/context"
//Importar el Contexto! No olvidarse!

//UTILIZANDO EL HOOK useContext
//En lugar de utilizar el Consumer y una función de renderizado yo puedo utilizar un hook llamado useContext. 

import { useContext } from "react";

import React from 'react'

const Hijo = () => {
    const herencia = useContext(Contexto);

  return (
    <div>
        <p>Herencia en efectivo: {herencia.efectivo} </p>
        <p>Recibi estos vehiculos ( y ya choque 2): {herencia.vehiculos} </p>
        <p>Y esta cantidad de propiedades: {herencia.propiedades} </p>
    </div>
  )
}

export default Hijo

/*
//UTILIZANDO EL CONSUMER: 

const Hijo = () => {
  return (
    <Contexto.Consumer>
        {
            (herencia) => (
                <div>
                    <p>Mi herencia es de: {herencia.efectivo} </p>
                    <p>Recibí estos vehiculos: {herencia.vehiculos} </p>
                    <p>Y esta cantidad de propiedades: {herencia.propiedades} </p>
                </div>
            )
        }
        
    </Contexto.Consumer>
  )
}
//Para poder acceder a la información se usa una función de renderizado. 
export default Hijo

*/

/*
//UTILIZANDO PROPS

const Hijo = ({herencia}) => {
  return (
    <div>
        <p>Mi herencia es de: {herencia.efectivo} </p>
        <p>Recibi estos vehiculos: {herencia.vehiculos} </p>
        <p>Y esta cantidad de propiedades: {herencia.propiedades} </p>
    </div>
  )
}

export default Hijo

*/