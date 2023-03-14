import "./App.css";
import Home from "./../src/Pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/about/About";
import NotFound from "./Pages/notFound/NotFound";
import Categories from "./Pages/categories/Categories";
import Recipe from "./Pages/recipe/Recipe";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
