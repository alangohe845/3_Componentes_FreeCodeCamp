import './App.css';
//Importamos nuestro componente testimonio
import {Testimonio} from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Aplicaciones Web para la 4.0</h1>
      <Testimonio 
      nombre='Alan Nahum'
      pais='Gomez Hernandez'
      imagen='fondo'
      cargo='Estudiante de la '
      empresa='UTD'/>
      </div>
    </div>
  );
}

export default App;
