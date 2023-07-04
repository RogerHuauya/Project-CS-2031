import { useBooks } from "../../context/booksContext";
import { Button, ButtonLink, Card } from "../ui";

export function BookCard({ book }) {
  const { deleteBook } = useBooks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteBook(book._id)}>Delete</Button>
          <ButtonLink to={`/books/${book._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{book.description}</p>
      {/* format date */}
      <p>
        {book.date &&
          new Date(book.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}
