import { Schema, model } from "mongoose";

const certificadoSchema = new Schema({
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
    data_emissao: { type: Date, required: true },
    codigo_validacao: { type: String, required: true, unique: true }
})

const Certificado = model("Certificado", certificadoSchema)

export default Certificado
