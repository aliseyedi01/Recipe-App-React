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
    <div>
      <Navbar />

      <div className="flex flex-wrap items-center justify-center  ">
        {image.map((recipe) => {
          const { strCategory, strCategoryThumb } = recipe;

          return (
            <div className="flex h-44 w-48  flex-col place-content-center">
              <Link to={`/childCategories/${strCategory}`}>
                <div className=" m-1  rounded-2xl p-5 text-white backdrop-blur-2xl duration-300 hover:scale-105 hover:cursor-pointer">
                  <h2 className=" text-center text-2xl font-bold">{strCategory}</h2>
                  <img className="h-full w-full rounded-lg" src={strCategoryThumb} alt={strCategory} />
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
