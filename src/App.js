import React from "react";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Education from "../src/components/Education";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import '../src/index.css';
function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <Home /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
