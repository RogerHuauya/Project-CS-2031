import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        trim: true,
    },

    title:{
        type: String,
        required: true,
        trim: true,
    },

    status:{
        type: Boolean,
        required: true,
        default : false,
    },

    date: {
        type: Date,
        default: Date.now,
      },
    
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: false,
      },

    
}, { timestamps: true })

export default mongoose.model('Book', bookSchema)
