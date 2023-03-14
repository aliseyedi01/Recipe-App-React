import "./App.css";
import Home from "./../src/Pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/about/About";
import NotFound from "./Pages/notFound/NotFound";
import Categories from "./Pages/categories/Categories";
import Recipe from "./Pages/recipe/Recipe";
import Background from "./../src/assest/image/backgournd/background.jpeg";
import ChildCategories from "./Pages/childcategories/ChildCategories";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <div className="h-[85%] w-[80%] overflow-hidden rounded-2xl hue-rotate-30    " style={{ backgroundImage: "url(" + Background + ")" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/categories" element={<Categories />} />z
          <Route path="/childCategories/:meals" element={<ChildCategories />} />z
          <Route path="/recipe/:recipe" element={<Recipe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
