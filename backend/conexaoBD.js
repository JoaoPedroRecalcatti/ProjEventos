import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Conexão bem sucedida ao MongoDB")
    })
    .catch((error) => {
        console.log("Conexão falhou: ", error)
    })

export default mongoose;
