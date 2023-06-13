import moongose from 'mongoose'

const bookSchema = new moongose.Schema({
    author: {
        type: String,
        required: true,
        trim: true,
    },

    book_name:{
        type: String,
        required: true,
        trim: true,
    },

    status:{
        type: Boolean,
        required: true,
    },

    
}, { timestamps: true })

export default moongose.model('Book', bookSchema)