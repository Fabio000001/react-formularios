import Pregunta from "./Pregunta";
import { PreguntasContext } from "../App";
import { useContext } from "react";

const PreguntasCreadas = () => {
    const { preguntas } = useContext(PreguntasContext);

    return (
        <div>
            <ul className="list-group">
                {
                    preguntas.map(p => {
                        return (<Pregunta key={p.id} pregunta={p} />)
                    })
                }
            </ul>
        </div>
    );
}

export default PreguntasCreadas;