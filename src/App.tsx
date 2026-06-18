import './App.css'
import Inicio from "./Inicio"
import Proyectos from './Proyectos.tsx'
import Experiencia from './Experiencia.tsx'

import Navegacion from './Navbar.tsx'

function App() {

  return (
    <>
      <Navegacion Contenido={[
        {id: 0, label: 'Inicio', componente: <Inicio />},
        {id: 1, label: 'Proyectos', componente: <Proyectos/>},
        {id: 2, label: 'Experiencia', componente: <Experiencia />}
      ]} />
    </>
  )
}

export default App
