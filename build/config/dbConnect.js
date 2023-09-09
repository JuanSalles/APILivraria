import mongoose from 'mongoose';
export default async function conectaNaDataBase() {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.g661jgb.mongodb.net/LivrariaDataBASE?retryWrites=true&w=majority");
    return mongoose.connection;
}
