import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Categories() {
  const [image, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((data) => {
        const image = data.data.categories;
        setImages(image);
        console.log(image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-full w-full backdrop-blur-2xl ">
      <Navbar />

      <div className="flex  flex-wrap items-center justify-center   ">
        {image.map((recipe) => {
          const { strCategory, strCategoryThumb } = recipe;

          return (
            <div className="flex h-48 w-48  flex-col place-content-center">
              <Link to={`/childCategories/${strCategory}`}>
                <div className="   rounded-2xl p-3 text-white  duration-300 hover:scale-105 hover:cursor-pointer">
                  <img className="h-full w-full rounded-lg" src={strCategoryThumb} alt={strCategory} />
                  <h2 className=" text-center text-2xl font-bold">{strCategory}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
