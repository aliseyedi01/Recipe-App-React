import "./App.css";
import Home from "./../src/Pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/about/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
