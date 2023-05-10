import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBookForm from "./containers/books/addBookForm/AddBookForm";
import LandingPage from "./pages/LandingPage";

import { userContext } from "./context/userContext";
import BookDetails from "./containers/books/bookDetails/BookDetails";
// import { useSelector } from "react-redux";

function App() {
  // const userInfo =    JSON.parse(localStorage.getItem("authenticatedUser"));

  return (
    // <userContext.Provider value={userInfo}>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/addbook" element={<AddBookForm />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </div>
    // </userContext.Provider>
  );
}

export default App;
