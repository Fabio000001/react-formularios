import { createContext, useReducer } from "react";
import preguntasReducer from "../hooks/preguntasReducer";

export const PreguntasContext = createContext();

export default function PreguntasProvider({ children }) {
    const [preguntas, dispatch] = useReducer(preguntasReducer, { lista: [], idSiguiente: 0 });

    const addQuestion = (nueva) => {
        nueva.id = preguntas.idSiguiente;
        console.log(nueva);
        dispatch({ tipo: "agregar_pregunta", nuevaPregunta: nueva });
    }

    const removeQuestion = (seleccionada) => {
        dispatch({ tipo: "eliminar_pregunta", preguntaId: seleccionada.id });
    }

    return (
        <PreguntasContext.Provider value={{ preguntas, addQuestion, removeQuestion }}>
            {children}
        </PreguntasContext.Provider>
    );
}