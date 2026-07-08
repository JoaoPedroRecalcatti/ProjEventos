import { Schema, model } from "mongoose";

const ingressoSchema = new Schema({
    id_evento: {
        type: Schema.Types.ObjectId,
        ref: "Evento",
        required: true
    },
    preco: { type: Number, required: true },
    tipo_ingresso: {
        type: String,
        enum: ['GRATUITO', 'PAGO', 'VIP'],
        required: true
    }
})

const Ingresso = model("Ingresso", ingressoSchema)

export default Ingresso
