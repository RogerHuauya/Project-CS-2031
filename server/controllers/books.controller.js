import Book from "../models/books.model.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user : req.user.id }).populate("user");
    res.json(books);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    const { author, title, status, date } = req.body;
    const newBook = new Book({
      author,
      title,
      status,
      date,
      user: req.user.id,
    });
    await newBook.save();
    res.json(newBook);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { author, title, status, date } = req.body;
    const bookUpdated = await Book.findOneAndUpdate(
      { _id: req.params.id },
      { author, title, status, date },
      { new: true }
    );
    return res.json(bookUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    return res.json(book);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
