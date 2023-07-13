import React, { useEffect, useState } from "react";
import { useBooks } from "../context/booksContext";
import { BookCard } from "../components/books/BookCard";

export function BookShowPage() {
  const { getLoanBooks } = useBooks(); // use the new function from the context
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await getLoanBooks(); // fetch all loaned books
      setBooks(fetchedBooks);
    };

    fetchBooks();
  }, []);

  if (books.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {books.map((book) => (
        <BookCard book={book} key={book._id} /> // use BookCard component instead of Card
      ))}
    </div>
  );
}
