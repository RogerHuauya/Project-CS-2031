import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">Welcome 2 bbuddy!</h1>
      <p className="text-md text-slate-400">
      BBuddy is a unique social media platform designed specifically for book enthusiasts. It serves as a vibrant 
      community where readers of all backgrounds and interests can come together to exchange books. With BBuddy, 
      you'll never have to feel alone in your literary journey; it’s like having a global book club right at your fingertips!
      BBuddy doesn't just facilitate book exchanges - it also fosters a culture of sharing knowledge, thoughts, and experiences. 
      Our platform is all about sustainability, encouraging users to give their pre-loved books a new home, reducing waste, and 
      promoting the love for reading.
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Get Started
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
