import { useState } from "react";

//De la siguiente forma puedo realizar un renderizado condicional: 
/*
const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);

    const habilitarUsuario = () => {
        setVerificado(true);
    }

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }

    return (
        <>
            {verificado ? (<button onClick={deshabilitarUsuario}> Cerrar Sesión </button>) : (<button onClick={habilitarUsuario}> Iniciar Sesión </button>)}
        </>
    )
}

export default BotonCondicional

*/

//Si lo quiero realizar con un Login podría hacer esto: 



const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);

    //Creo los estados para el usuario y la contraseña: 
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");

    const habilitarUsuario = (e) => {
        e.preventDefault(); 

        //Implemento la lógica de validación que se me ocurra: 
        if(usuario === "Tinki" && pass === "Winki"){
            setVerificado(true);
        } else {
            setUsuario("Vete Ladrón!");
            setPass("Perrito Malvado!");
        }
    }

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }

    const guardarUsuario = (e) => {
        setUsuario(e.target.value);
    }

    const guardarPass = (e) => {
        setPass(e.target.value);
    }


  return (
    <>
    {verificado ? (<button onClick={deshabilitarUsuario}> Cerrar Sesión</button>) : ( 
        <form onSubmit={habilitarUsuario}>
            <label htmlFor="usuario"> Usuario </label>
            <input type="text" id="usuario" onChange={guardarUsuario} value={usuario} />

            <label htmlFor="pass"> Contraseña </label>
            <input type="text" id="pass" value={pass} onChange={guardarPass}/>

            <button> Iniciar Sesión </button>
        </form>
    )}
    </>
  )
}

export default BotonCondicional