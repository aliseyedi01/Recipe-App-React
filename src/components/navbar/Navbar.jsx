import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // store dark mode in local storage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  // change mode with changes theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  // handle dark mode button
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="  container flex h-16 flex-row items-center  justify-between px-8 py-6  ">
      <h2 className=" hidden cursor-pointer font-mono text-2xl font-bold uppercase text-amber-800 dark:text-violet-700 md:block">Recipe App</h2>

      <div className="-translate-x-6 transform  md:-translate-x-10">
        <ul className="flex flex-row items-center justify-start gap-8 ">
          <li className="font-serif text-base font-bold uppercase text-yellow-300 dark:text-white md:text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="font-serif text-base font-bold uppercase text-yellow-300 dark:text-white md:text-2xl">
            <Link to="/categories">Category</Link>
          </li>
          <li className="font-serif text-base font-bold uppercase text-yellow-300 dark:text-white md:text-2xl">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="translate-x-6 transform md:transform-none">
        <button className="rounded-xl  border-2 border-yellow-300 p-2   dark:border-white " onClick={handleThemeChange}>
          {!darkMode ? <FaSun className="text-base text-yellow-300 md:text-2xl" /> : <FaMoon className="text-base text-white md:text-2xl" />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
