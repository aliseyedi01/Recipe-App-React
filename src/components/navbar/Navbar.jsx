import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-400 h-16 flex flex-row justify-between items-center container px-20 ">
      <h2 className=" text-2xl font-bold font-mono cursor-pointer">Recipe App</h2>

      <ul className="flex flex-row gap-8 justify-start items-center ">
        <li className="text-1xl font-bold font-serif">
          <Link to="/">Home</Link>
        </li>
        <li className="text-1xl font-bold font-serif">
          <Link to="/categories">Category</Link>
        </li>
        <li className="text-1xl font-bold font-serif">
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="flex gap-3">
        <button className="border rounded-xl bg-red-400 px-5 py-2">Log In</button>
        <button className="border rounded-xl bg-red-400 px-4 py-2">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
