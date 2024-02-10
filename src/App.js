import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;