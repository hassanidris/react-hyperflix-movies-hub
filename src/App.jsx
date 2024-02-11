import { Routes, Route, BrowserRouter } from "react-router-dom";
import MovieContextProvider from "./context/MovieContextProvider";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/header/NavBar";
import Footer from "./components/Footer/Footer";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/header/ProtectedRoute";

function App() {
  return (
    <div className=" h-[100vh] flex flex-col">
      <MovieContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <Navbar />
            <div className=" grow" style={{ color: "white" }}>
              <Routes /*location={previousLocation || location}*/>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Details />} />
                <Route
                  path="/search-results/:query"
                  element={<SearchResults />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/account"
                  element={
                    <ProtectedRoute>
                      <Account />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
