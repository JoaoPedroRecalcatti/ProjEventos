import { Schema, model } from "mongoose";

const validarPresencaSchema = new Schema({
    id_inscricao: {
        type: Schema.Types.ObjectId,
        ref: "Inscricao",
        required: true
    },
    id_organizador: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    data_validacao: { type: Date, default: Date.now }
})

const ValidarPresenca = model("ValidarPresenca", validarPresencaSchema)

export default ValidarPresenca
