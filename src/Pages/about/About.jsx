import Navbar from "../../components/navbar/Navbar";
import aboutUs from "../../../src/assest/image/aboutUs/aboutUs.jpg";

function About() {
  return (
    <div className=" w-100 h-100 backdrop-blur-2xl  ">
      <Navbar />

      <div className="item-start mx-auto  mt-5 flex h-[550px] w-[95%] flex-row gap-1 overflow-hidden  rounded-lg  ">
        {/* left */}
        <img className=" my-auto ml-7 h-[400px] w-[400px]  rounded-image bg-contain " src={aboutUs} alt="about" />
        {/* right */}
        <div className="my-auto h-5/6 w-3/5  px-3 pt-4">
          <h2 className="text-2xl font-bold capitalize text-red-500 dark:text-sky-400">about us </h2>
          <p className="mt-1 text-justify font-mono text-xl text-yellow-300 dark:text-white">
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
