import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className="backdrop-blur-md">
      <Navbar />
      <div className="  mt-2 h-[530px] w-full pl-4  ">
        <h2 className="  mt-6 text-[5rem] font-extrabold uppercase text-yellow-200">RecipeRiot</h2>
        <h2 className="w-[35rem]   text-xl font-extrabold capitalize text-indigo-800"> A community-driven site for foodies to share and discuss their favorite recipes and cooking techniques.</h2>
      </div>
    </div>
  );
}

export default Home;
