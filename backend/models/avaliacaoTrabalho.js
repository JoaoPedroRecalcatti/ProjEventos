import { Schema, model } from "mongoose";

const avaliacaoTrabalhoSchema = new Schema({
    id_trabalho: {
        type: Schema.Types.ObjectId,
        ref: "Trabalho",
        required: true
    },
    id_avaliador: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    status: {
        type: String,
        enum: ['APROVADO', 'REPROVADO', 'PENDENTE_AJUSTES'],
        required: true
    },
    observacoes: String
})

const AvaliacaoTrabalho = model("AvaliacaoTrabalho", avaliacaoTrabalhoSchema)

export default AvaliacaoTrabalho
