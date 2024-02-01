import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div style={{marginTop: 100, color: 'white'}}>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movie/:id" element={ <Details /> } />
        </Routes>        
      </div>

      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App