import { Schema, model } from "mongoose";

const trabalhoSchema = new Schema({
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
    titulo: { type: String, required: true },
    autores: { type: String, required: true },
    resumo: { type: String, required: true },
    nome_arquivo: String,
    nota: Number,
    observacoes: String
})

const Trabalho = model("Trabalho", trabalhoSchema)

export default Trabalho
