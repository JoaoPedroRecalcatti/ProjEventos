import { Schema, model } from "mongoose";

const avaliacaoSchema = new Schema({
    id_evento: {
        type: Schema.Types.ObjectId,
        ref: "Evento",
        required: true
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    estrelas: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comentario: String
})

const Avaliacao = model("Avaliacao", avaliacaoSchema)

export default Avaliacao
