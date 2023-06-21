import moongose from 'mongoose'

const bookSchema = new moongose.Schema({
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
    },
    
    user:{
        type: moongose.Schema.Types.ObjectId,
        ref : 'User',
        required: true,
    }
    
}, { timestamps: true })

export default moongose.model('Book', bookSchema)