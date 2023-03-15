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
    <div className=" px-15 container flex h-16 flex-row items-center  justify-between  px-5 pt-5 ">
      <h2 className=" cursor-pointer font-mono text-2xl font-bold uppercase text-amber-800 dark:text-violet-700">Recipe App</h2>

      <div className="-translate-x-20 transform">
        <ul className="flex flex-row items-center justify-start gap-8 ">
          <li className="font-serif text-2xl font-bold uppercase text-yellow-300 dark:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="font-serif text-2xl font-bold uppercase text-yellow-300 dark:text-white">
            <Link to="/categories">Category</Link>
          </li>
          <li className="font-serif text-2xl font-bold uppercase text-yellow-300 dark:text-white">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-3">
        <button className="rounded-xl  border-2 border-yellow-300 p-2   dark:border-white " onClick={handleThemeChange}>
          {!darkMode ? <FaSun className="text-2xl text-yellow-300" /> : <FaMoon className="text-2xl text-white" />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
