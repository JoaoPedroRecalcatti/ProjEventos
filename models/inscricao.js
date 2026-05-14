import { Schema, model } from "mongoose";

const inscricaoSchema = new Schema({
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    id_evento: {
        type: Schema.Types.ObjectId,
        ref: "Evento",
        required: true
    },
    dataInscricao: { type: Date, default: Date.now }
})

const Inscricao = model("Inscricao", inscricaoSchema)

export default Inscricao
