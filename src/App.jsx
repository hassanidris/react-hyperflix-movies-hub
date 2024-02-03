import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Trailer from "./components/Trailer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div style={{ color: 'white', background: 'black'}}>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movie/:id" element={ <Details /> } />
          <Route path="/trailer/:id" element={ <Trailer/> } />
        </Routes>        
      </div>

      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App