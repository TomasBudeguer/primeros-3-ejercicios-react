import { useState } from "react";

const TituloPrincipal = (props) => {
    // aca va la logica

    const [clave, setClave] = useState('')

    const mostrar = ()=>{
        setClave('(from changed state)')
    }

    return (
        // aca va el maquetado y poca logica
        <div>
            <h1>Hello {props.myFriend} {clave}!</h1>
            <button onClick={mostrar}>Mostrar clave</button>
        </div>
    );
};

export default TituloPrincipal;