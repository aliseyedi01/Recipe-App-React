import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" px-15 container flex h-16 flex-row items-center  justify-between px-5 pt-5 ">
      <h2 className=" cursor-pointer font-mono text-2xl font-bold">Recipe App</h2>

      <ul className="flex flex-row items-center justify-start gap-8 ">
        <li className="text-1xl font-serif font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-1xl font-serif font-bold">
          <Link to="/categories">Category</Link>
        </li>
        <li className="text-1xl font-serif font-bold">
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="flex gap-3">
        <button className="rounded-xl border bg-red-400 px-5 py-2">Log In</button>
        <button className="rounded-xl border bg-red-400 px-4 py-2">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
