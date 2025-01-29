import { createContext, useReducer } from 'react';
import FormularioPregunta from './components/FormularioPregunta';
import './App.css';
import PreguntasCreadas from './components/PreguntasCreadas';
import preguntasReducer from './hooks/preguntasReducer';

export const PreguntasContext = createContext();
let idActualPregunta = 0;

function App() {
  const [preguntas, dispatch] = useReducer(preguntasReducer, []);
  console.log(preguntas);

  const addQuestion = (nueva) => {
    nueva.id = idActualPregunta;
    console.log(nueva);
    idActualPregunta++;
    dispatch({ tipo: "agregar_pregunta", nuevaPregunta: nueva });
  }

  const removeQuestion = (seleccionada) => {
    dispatch({ tipo: "eliminar_pregunta", preguntaId: seleccionada.id });
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
