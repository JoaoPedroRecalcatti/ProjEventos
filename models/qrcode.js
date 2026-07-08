import { Schema, model } from "mongoose";

const qrcodeSchema = new Schema({
    id_inscricao: {
        type: Schema.Types.ObjectId,
        ref: "Inscricao",
        required: true
    },
    codigo: { type: String, required: true, unique: true }
})

const QRCode = model("QRCode", qrcodeSchema)

export default QRCode
