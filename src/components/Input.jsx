import React from "react";

const Input = ({contraseña, setContraseña}) => {
    return (
        <div>
            <h1>Validando datos</h1>
            <p>Nombre:</p>
            <input 
                type="text" 
                placeholder="Ingresa tu nombre" />
            <p>Contraseña:</p>
            <input 
                value={contraseña} 
                type="password" 
                placeholder="Ingresa contraseña"
                onChange={(ev) => setContraseña(ev.target.value)} />
        </div>
    )
};

export default Input;