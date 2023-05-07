import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBookForm from "./containers/books/addBookForm/AddBookForm";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/addbook" element={<AddBookForm />} />
      </Routes>
    </div>
  );
}

export default App;
