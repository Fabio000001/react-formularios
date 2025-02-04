const preguntasReducer = (preguntas, accion) => {
    switch (accion.tipo) {
        case "agregar_pregunta":
            return { lista: [...preguntas.lista, accion.nuevaPregunta], idSiguiente: accion.nuevaPregunta.id + 1 }
        case "eliminar_pregunta":
            return { lista: preguntas.lista.filter(p => p.id != accion.preguntaId), idSiguiente: preguntas.idSiguiente };
        default:
            return preguntas;
    };
}

export default preguntasReducer;