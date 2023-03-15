import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className="backdrop-blur-md">
      <Navbar />
      <div className="  mt-2 h-[530px] w-full pl-4  ">
        <h2 className="  mt-6 text-[5rem] font-extrabold uppercase text-red-500 dark:text-sky-400">RecipeRiot</h2>
        <h2 className="w-[35rem]   text-xl font-extrabold capitalize text-yellow-400 dark:text-sky-100">
          {" "}
          A community-driven site for foodies to share and discuss their favorite recipes and cooking techniques.
        </h2>
      </div>
    </div>
  );
}

export default Home;
