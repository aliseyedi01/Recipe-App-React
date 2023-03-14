import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ChildCategories() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName.meals}`)
      .then((data) => {
        const image = data.data.meals;
        setImages(image);
        console.log(image);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const catName = useParams();

  return (
    <div className="flex h-full w-full flex-col">
      <Navbar />

      <h1 className="text-center text-4xl font-bold uppercase text-yellow-400">Choose Your Recipe</h1>
      <div className=" justify-center1 mt-2 flex flex-wrap items-center gap-2 px-2 ">
        {images.map((recipe) => {
          const { strMeal, strMealThumb } = recipe;
          return (
            <div className="mb-5 flex h-36  w-36 flex-col items-center justify-between ">
              <Link to={`/recipe/${strMeal}`}>
                <div className=" flex h-full  w-full flex-col items-center justify-between  rounded-2xl p-5 text-white backdrop-blur-2xl duration-300 hover:scale-105 hover:cursor-pointer">
                  <img className="h-full  w-full rounded-lg text-center" src={strMealThumb} alt={strMeal} />
                  <h2 className="text-md w-20 truncate  text-start font-bold">{strMeal}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChildCategories;
