import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/NavBar";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/:id" element={ <Details/> } />
        
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App