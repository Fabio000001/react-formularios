import { useState } from 'react'
import FormularioPregunta from './components/FormularioPregunta';
import './App.css'

function App() {
  const [preguntas, setPreguntas] = useState([]);
  let idActualPregunta = 0;

  const addQuestion = (nueva) => {
    nueva.id = idActualPregunta;
    console.log(nueva);
    idActualPregunta++;
    console.log(idActualPregunta);
    setPreguntas([...preguntas, nueva]);
  }

  return (
    <>
      <h1>Hola</h1>
      <FormularioPregunta crearPregunta={addQuestion} />
    </>
  )
}

export default App
