import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
