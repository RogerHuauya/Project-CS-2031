// import React, { useEffect, useState } from "react";
// import { Button, Card } from "../components/ui";
// import { useBooks } from "../context/booksContext";
// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// dayjs.extend(utc);

// export function BookShowPage() {
//   const { getLoanBooks } = useBooks(); // use the new function from the context
//   const [books, setBooks] = useState(null);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const fetchedBooks = await getLoanBooks(); // fetch all loaned books
//       setBooks(fetchedBooks);
//     };

//     fetchBooks();
//   }, []);

//   if (!books) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {books.map((book) => (
//         <Card key={book.id}>
//           <p><strong>Title:</strong> {book.title}</p>
//           <p><strong>Author:</strong> {book.author}</p>
//           <p><strong>Status:</strong> {book.status ? 'Available' : 'Unavailable'}</p>
//           <p><strong>Date:</strong> {book.date ? dayjs(book.date).utc().format("DD-MM-YYYY") : ""}</p>
//           <p><strong>Owner:</strong> {book.owner}</p> {/* Assuming that 'owner' field contains the user's name or id */}
//         </Card>
//       ))}
//     </div>
//   );
// }

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
