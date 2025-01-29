const preguntasReducer = (preguntas, accion) => {
    switch (accion.tipo) {
        case "agregar_pregunta":
            return [
                ...preguntas,
                accion.nuevaPregunta
            ]
        case "eliminar_pregunta":
            return preguntas.filter(p => p.id != accion.preguntaId);
        default:
            return preguntas;
    };
}

export default preguntasReducer;