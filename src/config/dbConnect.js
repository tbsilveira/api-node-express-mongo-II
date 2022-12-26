import mongoose from "mongoose";

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://tiago:123@cluster0.bm3kd9f.mongodb.net/CursoNodeExpress")

let db = mongoose.connection

export default db
