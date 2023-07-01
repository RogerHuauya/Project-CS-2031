import Book from '../models/books.module.js'



// export const getBooks = async (req, res) => {
//     const books = await Book.find()
//     res.json(books)
// };

export const getBooks = async (req, res) => {
    const books = await Book.find({
        user: req.user.id
    }).populate('user')
    res.json(books)
};


export const createBook = async (req, res) => {
    const { author, title, status } = req.body;
    console.log(req.user)

    const newBook = new Book({ 
        author, 
        title, 
        status, 
        user: req.user.id });
    const savedBook = await newBook.save();
    res.json(savedBook)
};

export const getBook = async (req, res) => {
    const book = await Book.findById(req.params.id).populate('user')
    if (!book) return res.status(404).json({message : 'Book not found'})
    res.json(book)
};

export const deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    if (!book) return res.status(404).json({message : 'Book not found'})
    return res.status(204)
};

export const updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, 
    {new: true})
    if (!book) return res.status(404).json({message : 'Book not found'})
    res.json(book)
};



