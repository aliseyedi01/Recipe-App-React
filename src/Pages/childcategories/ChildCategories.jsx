import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/loading";

function ChildCategories() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName.meals}`)
      .then((data) => {
        const image = data.data.meals;
        setImages(image);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const catName = useParams();

  return (
    <div className="flex h-full w-full flex-col  backdrop-blur-2xl">
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" scrollbar-hide mt-1 flex flex-wrap items-center justify-center gap-2 overflow-y-scroll scroll-auto px-2 ">
          {images.map((recipe) => {
            const { strMeal, strMealThumb } = recipe;
            return (
              <div className="mb-5 flex h-36  w-36 flex-col items-center justify-between ">
                <Link to={`/recipe/${strMeal}`}>
                  <div className=" flex h-full  w-full flex-col items-center justify-between  rounded-2xl p-5 text-yellow-300 duration-300  hover:scale-105 hover:cursor-pointer dark:text-white">
                    <img className="h-full  w-full rounded-lg text-center" src={strMealThumb} alt={strMeal} />
                    <h2 className="text-md w-20 truncate  text-start font-bold">{strMeal}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ChildCategories;
