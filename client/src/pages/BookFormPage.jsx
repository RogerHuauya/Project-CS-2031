import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useBooks } from "../context/booksContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm} from "react-hook-form";
dayjs.extend(utc);

export function BookFormPage() {
  const { createBook, getBook, updateBook } = useBooks();

  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formattedDate = dayjs.utc(data.date).format(); // Convert the date to the expected format
      const bookData = {
        ...data,
        date: formattedDate,
      };
  
      if (params.id) {
        updateBook(params.id, bookData);
      } else {
        createBook(bookData);
      }
  
      // navigate("/books");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadBook = async () => {
      if (params.id) {
        const book = await getBook(params.id);
        setValue("author", book.author);
        setValue("title", book.title);
        setValue("status", book.status);
        setValue(
          "date",
          // book.date ? dayjs(book.date).utc().format("YYYY-createBookRequest") : ""
          book.date ? dayjs(book.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", book.completed);
      }
    };
    loadBook();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="author">Author</Label>
        <Input
          type="text"
          name="author"
          placeholder="Author"
          {...register("author")}
          autoFocus
        />
        {errors.author && (
          <p className="text-red-500 text-xs italic">Please enter the author's name.</p>
        )}

        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Please enter the title.</p>
        )}

        {/* <Label htmlFor="status">Status</Label>
        <Checkbox
        name="status"
        type="checkbox"
        {...register("status")}
        />
        <p>{watch("status") ? 'Available' : 'Unavailable'}</p>
        {errors.status && (
        <p className="text-red-500 text-xs italic">Please enter the status.</p>
        )} */}

        <Label htmlFor="status">Status</Label>
        <input type="checkbox" {...register("status")} />
        <p>{watch("status") ? 'Available' : 'Unavailable'}</p>
        {errors.status && (
          <p className="text-red-500 text-xs italic">Please enter the status.</p>
        )}

        

        <Label htmlFor="date">Date</Label>
        <Input type="date" name="date" {...register("date")} />
        <Button>Save</Button>
      </form>
    </Card>
  );
}
