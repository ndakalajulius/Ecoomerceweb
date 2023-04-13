import "./App.css";
import Home from "./routes/Home"
import Contact from "./routes/Contact";
import About from "./routes/About";
import { Routes, Route } from "react-router-dom";
function App() {

  
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
