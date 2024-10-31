import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componentes/Header.jsx' // Importa el componente Header para que se muestre
import Base from './Componentes/Base.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Header /> {/* Aqu  se llama al componente Header para que se muestre su contenido*/}
        <Base /> {/* Aqui  se llama al componente Base para que se muestre su contenido*/}
        
      </div>
    </>
  )
}

export default App // Exportamos este componente con el nombre de "App"
