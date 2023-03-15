import Navbar from "../../components/navbar/Navbar";
import aboutUs from "../../../src/assest/image/aboutUs/aboutUs.jpg";

function About() {
  return (
    <div className=" h-full w-full  backdrop-blur-2xl  ">
      <Navbar />

      <div className=" scrollbar-hide  flex h-full w-full flex-col items-start justify-center  gap-2 overflow-y-scroll rounded-lg   pt-5 md:h-[30rem] md:flex-row   md:overflow-hidden  ">
        {/* left */}
        <img className=" mx-auto h-64 w-64 rounded-image  bg-contain  md:mx-0 md:h-96 md:w-96 " src={aboutUs} alt="about" />
        {/* right */}
        <div className="h-5/6 w-full self-center px-3 md:w-3/5 md:px-0  ">
          <h2 className="text-2xl font-bold capitalize text-red-500 dark:text-sky-400">about us </h2>
          <p className="text-justify font-mono text-xl text-yellow-300 dark:text-white">
            Welcome to our recipe site! We are a team of passionate foodies dedicated to sharing delicious and easy-to-follow recipes with our readers. Our mission is to help home cooks of all skill
            levels create mouthwatering meals and desserts that will impress their family and friends. We believe that cooking should be fun and accessible, which is why we strive to make our recipes
            approachable and achievable.
            <br />
            <br />
            Whether you're looking for classic comfort foods or trendy new dishes, you'll find plenty of inspiration on our site. Join us on our culinary journey and let's cook up something delicious
            together!
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
