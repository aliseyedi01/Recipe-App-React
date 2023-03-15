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
    <div className="scrollbar-hide flex h-full w-screen items-center justify-center overflow-y-scroll bg-gradient-to-b from-orange-500 to-yellow-300 dark:bg-gradient-to-b  dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 md:h-screen">
      <div className="h-full w-full overflow-hidden rounded-none saturate-150 md:h-[85%] md:w-[80%] md:rounded-2xl  " style={{ backgroundImage: "url(" + Background + ")" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
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
