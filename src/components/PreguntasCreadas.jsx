import Pregunta from "./Pregunta";

const PreguntasCreadas = (props) => {
    const { preguntas, borrarPreguntas } = props;

    return (
        <div>
            <ul className="list-group">
                {
                    preguntas.map(p => {
                        return (<Pregunta key={p.id} pregunta={p} borrarPregunta={borrarPreguntas} />)
                    })
                }
            </ul>
        </div>
    );
}

export default PreguntasCreadas;