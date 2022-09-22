import mongoose from "mongoose"
import dbConnect from ".."

const Model = async () => {

    const db = await dbConnect()

    const { Schema } = mongoose

    const userSchema = new Schema({
        email: { type: String, required: true },
        name: { type: String, required: true },
        LevelOne: String,
        LevelTwo: String,
    })

    const userModel = db.models['user'] ? db.model('user') : db.model('user', userSchema)

    return userModel

}

export default Model



    