import { useBooks } from "../../context/booksContext";
import { Button, ButtonLink, Card } from "../../components/ui";

export function BookCard({ book }) {
  const { deleteBook } = useBooks();

  const renderOwner = () => {
    if (book.user && book.user.username) {
      return <p className="text-slate-500" style={{ fontSize: 'medium' }}>User: {book.user.username}</p>;
    } else {
      return <p className="text-slate-500" style={{ fontSize: 'medium' }}>User: Unknown</p>;
    }
  };

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteBook(book._id)}>Delete</Button>
          <ButtonLink to={`/books/${book._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300" style={{ fontSize: 'larger' }}>{book.author}</p>

      {renderOwner()}

      <p className="text-slate-300" style={{ fontSize: 'larger', textAlign: 'right' }}>{book.status ? 'Available' : 'Unavailable'}</p>
    </Card>
  );
}

