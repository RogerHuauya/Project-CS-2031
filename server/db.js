import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://roger:TwBCiJz6gvgKiutS@cluster0.1o4uqng.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB is connected")
    } catch (error) {
        console.log('Error connecting to database: ', error);
    }
}