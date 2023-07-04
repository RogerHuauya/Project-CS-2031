import { createContext, useContext, useState } from "react";
import {
  createBookRequest,
  deleteBookRequest,
  getBooksRequest,
  getBookRequest,
  updateBookRequest,
} from "../bbuddy/books";

const BookContext = createContext();

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBooks must be used within a BookProvider");
  return context;
};

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await getBooksRequest();
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    try {
      const res = await deleteBookRequest(id);
      if (res.status === 204) setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createBook = async (book) => {
    try {
      const res = await createBookRequest(book);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

   

  const getBook = async (id) => {
    try {
      const res = await getBookRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateBook = async (id, book) => {
    try {
      await updateBookRequest(id, book);
    } catch (error) {
      console.error(error);
    }
  };

  const getLoanBooks = async (book) => {
    try {
      await getLoanBooks(book);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <BookContext.Provider
      value={{
        books,
        getBooks,
        deleteBook,
        createBook,
        getBook,
        updateBook,
        getLoanBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
