import Navbar from "../../components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/loading";

function Recipe() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName.recipe}`)
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

  const recipeName = useParams();

  return (
    <div className=" h-full min-h-screen backdrop-blur-2xl">
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="scrollbar-hide  w-full overflow-y-scroll scroll-auto   ">
          {images.map((recipe) => {
            return (
              <div className="flex flex-col justify-between overflow-visible md:flex-row ">
                {/* left */}
                <div className="w-full p-2 md:w-[30%]  ">
                  <h5 class="mb-2  font-sans text-2xl font-bold tracking-tight text-lime-900 dark:text-indigo-800  ">{recipe.strMeal}</h5>
                  <img class="m-auto mt-4 flex h-64 w-auto  rounded-full" src={recipe.strMealThumb} alt="" />
                  <div className="mt-1">
                    <h2 className="font-mono text-2xl font-bold text-lime-900 dark:text-indigo-800">Ingredients</h2>
                    <ul className="capitalize text-yellow-300 dark:text-white">
                      <li className="flex justify-between px-6">
                        <div>{recipe.strIngredient1}</div>
                        <div>{recipe.strMeasure1}</div>
                      </li>
                      <li className="flex justify-between px-6">
                        <div>{recipe.strIngredient2}</div>
                        <div>{recipe.strMeasure2}</div>
                      </li>
                      <li className="flex justify-between px-6">
                        <div>{recipe.strIngredient3}</div>
                        <div>{recipe.strMeasure3}</div>
                      </li>
                      <li className="flex justify-between px-6">
                        <div>{recipe.strIngredient4}</div>
                        <div>{recipe.strMeasure4}</div>
                      </li>
                      <li className="flex justify-between px-6">
                        <div>{recipe.strIngredient5}</div>
                        <div>{recipe.strMeasure5}</div>
                      </li>
                      <li className="flex justify-between px-6">
                        <div>{recipe.strIngredient6}</div>
                        <div>{recipe.strMeasure6}</div>
                      </li>
                      <li className="flex justify-between px-6">
                        <div>{recipe.strIngredient7}</div>
                        <div>{recipe.strMeasure7}</div>
                      </li>
                      <li className="flex justify-between px-6">
                        <div>{recipe.strIngredient8}</div>
                        <div>{recipe.strMeasure8}</div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* right */}
                <div className="w-full px-3 pt-2 backdrop-blur-3xl md:w-[70%]">
                  <h2 className="text-left text-2xl font-bold text-lime-800 dark:text-indigo-800">Directions</h2>
                  <p class="mb-3   text-justify text-lg font-normal text-yellow-300  dark:text-white">{recipe.strInstructions}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Recipe;
