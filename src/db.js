import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/bookbuddy');
        console.log("DB is connected")
    } catch (error) {
        console.log('Error connecting to database: ', error);
    }
}