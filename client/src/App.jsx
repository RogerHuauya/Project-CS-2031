import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { BookFormPage } from "./pages/BookFormPage";
import { LoginPage } from "./pages/LoginPage";
import { BooksPage } from "./pages/BooksPage";
import { BookShowPage } from './pages/BookShowPage';
import { BookProvider } from "./context/booksContext";

function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/books" element={<BooksPage />} />
                <Route path="/add-book" element={<BookFormPage />} />
                <Route path="/show-books" element={<BookShowPage />} />
                <Route path="/books/:id" element={<BookFormPage />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </BookProvider>
    </AuthProvider>
  );
}

export default App;
