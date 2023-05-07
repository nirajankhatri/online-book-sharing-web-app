import BookCard from "./components/BookCard";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AddBookForm from "./containers/books/addBookForm/AddBookForm";
import CardGlider from "./containers/books/glider/CardGlider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <CardGlider />
      <AddBookForm />
    </div>
  );
}

export default App;
