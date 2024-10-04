import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <h1>Welcome to Roxy's Little Creations!</h1>
        <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
