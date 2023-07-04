import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "../components/ui";
import { useBooks } from "../context/booksContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export function BookShowPage() {
  const { getBook } = useBooks();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const fetchedBook = await getBook(id);
      setBook(fetchedBook);
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Status:</strong> {book.status ? 'Available' : 'Unavailable'}</p>
      <p><strong>Date:</strong> {book.date ? dayjs(book.date).utc().format("DD-MM-YYYY") : ""}</p>
    </Card>
  );
}
