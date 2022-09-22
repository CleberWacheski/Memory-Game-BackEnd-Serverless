import mongoose from 'mongoose'


const MONGODB_URI = process.env.URI_MONGO_DB


async function dbConnect() {

    const db = await mongoose.connect(String(MONGODB_URI), {
        dbName: 'MemoryGame'
    })

    return db.connection
}

export default dbConnect