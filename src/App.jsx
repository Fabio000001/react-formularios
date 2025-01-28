import { useState, createContext } from 'react';
import FormularioPregunta from './components/FormularioPregunta';
import './App.css';
import PreguntasCreadas from './components/PreguntasCreadas';

export const PreguntasContext = createContext();
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
      <PreguntasContext.Provider value={{ preguntas, removeQuestion }}>
        <FormularioPregunta crearPregunta={addQuestion} />
        <PreguntasCreadas />
      </PreguntasContext.Provider>
    </>
  )
}

export default App
