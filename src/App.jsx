import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBookForm from "./containers/books/addBookForm/AddBookForm";
import LandingPage from "./pages/LandingPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/addbook" element={<AddBookForm />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
