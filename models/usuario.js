import { Schema, model } from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const usuarioSchema = new Schema({
    nome: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Email invalido']
    },
    senha: { type: String, required: true },
    tipo: {
        type: String,
        enum: ['PARTICIPANTE', 'ORGANIZADOR'],
        required: true
    }
})

usuarioSchema.plugin(uniqueValidator)

const Usuario = model("Usuario", usuarioSchema)

export default Usuario
