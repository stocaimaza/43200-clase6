//1) Return Temprano: 
//Esta técnica la usamos en JS y evitamos colocar el ELSE. 

//Función booleana qu eme dice si es fin de semana.

function esFinde(dia) {
    if (dia === "sabado" || dia === "domingo") {
        return true;
    } else {
        return false;
    }
}

//Peeeeeeeeeeero si aplica la técnico del "return temprano"

function esFindeSemana(dia) {
    if (dia === "sabado" || dia === "domingo") {
        return true;
    }
    return false;
}

const TecnicaUno = ({ nombre }) => {
    if (nombre === "Samuel") {
        return <h1>Hola Administrador!</h1>;
    }
    return <h1>Hola {nombre} </h1>
}

export default TecnicaUno