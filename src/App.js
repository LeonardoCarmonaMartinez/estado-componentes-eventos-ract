import React, {useState} from 'react';
import Boton from './components/Button';
import Input from './components/Input';

function App() {
  const [contraseña, setContraseña] = useState ('')
  return (
      <div className="validar">
        <Input contraseña={contraseña} setContraseña={setContraseña}/>
        {contraseña === "252525" && <Boton/>}
      </div>
    )
}

export default App;