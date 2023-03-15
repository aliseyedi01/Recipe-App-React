import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className="backdrop-blur-md">
      <Navbar />
      <div className="  mt-2 min-h-screen w-full pl-4 md:h-[530px]  ">
        <h2 className="  mt-6 text-3xl font-extrabold uppercase text-red-500 dark:text-sky-400 md:text-[5rem]">RecipeRiot</h2>
        <h2 className="mt-2 w-full text-xl font-extrabold   capitalize text-yellow-400 dark:text-sky-100 md:mt-10 md:w-[35rem]">
          {" "}
          A community-driven site for foodies to share and discuss their favorite recipes and cooking techniques.
        </h2>
      </div>
    </div>
  );
}

export default Home;
