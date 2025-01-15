import { useState } from 'react';
import FormularioPregunta from './components/FormularioPregunta';
import './App.css';
import PreguntasCreadas from './components/PreguntasCreadas';

let idActualPregunta = 0;

function App() {
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nueva) => {
    nueva.id = idActualPregunta;
    console.log(nueva);
    idActualPregunta++;
    setPreguntas([...preguntas, nueva]);
  }

  const removeQuestion = (seleccionada) => {
    setPreguntas(preguntas.filter(p => p.id != seleccionada.id));
  }

  return (
    <>
      <h1>Hola</h1>
      <FormularioPregunta crearPregunta={addQuestion} />
      <PreguntasCreadas preguntas={preguntas} borrarPreguntas={removeQuestion} />
    </>
  )
}

export default App
