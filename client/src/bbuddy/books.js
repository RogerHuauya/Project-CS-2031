import axios from "./axios";

export const getBooksRequest = async () => axios.get("/books");

export const createBookRequest = async (book) => axios.post("/books", book);

export const updateBookRequest = async (id, book) =>
  axios.put(`/books/${id}`, book);

export const deleteBookRequest = async (id) => axios.delete(`/books/${id}`);

export const getBookRequest = async (id) => axios.get(`/books/${id}`);

export const getLoanBooksRequest = async () => axios.get("/books/all");
