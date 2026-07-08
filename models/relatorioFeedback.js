import { Schema, model } from "mongoose";

const relatorioFeedbackSchema = new Schema({
    id_evento: {
        type: Schema.Types.ObjectId,
        ref: "Evento",
        required: true
    },
    id_organizador: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    data_geracao: { type: Date, default: Date.now },
    conteudo: String
})

const RelatorioFeedback = model("RelatorioFeedback", relatorioFeedbackSchema)

export default RelatorioFeedback
