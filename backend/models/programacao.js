import { Schema, model } from "mongoose";

const programacaoSchema = new Schema({
    id_evento: {
        type: Schema.Types.ObjectId,
        ref: "Evento",
        required: true
    },
    horario: { type: String, required: true },
    titulo: { type: String, required: true }
})

const Programacao = model("Programacao", programacaoSchema)

export default Programacao
