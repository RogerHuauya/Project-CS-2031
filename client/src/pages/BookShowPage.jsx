import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "../components/ui";
import { useBooks } from "../context/booksContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import axios from "../bbuddy/axios.js";
import {BookCard} from "../components/books/BookCard.jsx";
dayjs.extend(utc);

export function BookShowPage() {
  const { getBook } = useBooks();
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
        const response = await axios.get("public_books/");
        setBooks(response.data);
    };
    fetchBook();
  }, [id]);

  if (!books) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-y-5">
        {books.map((book) => (
            <BookCard key={book._id} book={book} />
        ))}
    </div>
  );
}
