import BookCard from "./components/BookCard";
import NavBar from "./components/NavBar";
import CardGlider from "./containers/books/glider/CardGlider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardGlider />
    </div>
  );
}

export default App;
