import { Schema, model } from "mongoose";

const eventoSchema = new Schema({
    id_organizador: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    nome: { type: String, required: true },
    data: { type: Date, required: true },
    local: { type: String, required: true },
    palestrante: String,
    carga_horaria: Number,
    is_online: { type: Boolean, default: false },
    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    },
    descricao: String,
    imagem_url: String,
    permite_submissao: { type: Boolean, default: false },
    info_revisor_formacao: String
})

const Evento = model("Evento", eventoSchema)

export default Evento
