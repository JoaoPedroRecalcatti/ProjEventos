import { Schema, model } from "mongoose";

const feedbackAtividadeSchema = new Schema({
    id_programacao: {
        type: Schema.Types.ObjectId,
        ref: "Programacao",
        required: true
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    nota: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comentario: String
})

const FeedbackAtividade = model("FeedbackAtividade", feedbackAtividadeSchema)

export default FeedbackAtividade
