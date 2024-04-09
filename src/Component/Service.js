import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Service() {
  const src = "./images/Logo.png";
  const alt = "dribble";
  const div1 = "./images/1dev.png";
  const div2 = "./images/2dev.png";
  const div3 = "./images/3dev.png";

  return (
    <div className="flex flex-col md:flex-row mt-0">
      <div className="flex flex-row items-center w-64 h-8">
        <Logo src={src} alt={alt} className="w-full md:w-auto" />
        <div className="px-4 outline-1 bg-gray-200 ml-5">&lt;</div>
      </div>
      <div className="mt-5 md:ml-25 md:mt-20">
        <h1 className="text-3xl font-bold ml-2 sm:text-center">
          What brings you to Dribble?
        </h1>
        <p className="mt-4 sm:text-center">
          Select the Options that best describes you. Don't worry, you can
          explore other options later.
        </p>
        <div className="flex flex-col md:flex-row mt-7 justify-center items-center">
          <div className="w-full md:w-1/3 outline-1 ml-2 shadow-md mb-2 md:mb-0">
            <img src={div1} alt="div1" className="w-full h-auto" />
            <h2 className="text-center font-bold">
              I'm a designer looking to share my work
            </h2>
            <div className="flex justify-center items-center mb-2">
              <input type="checkbox" className="rounded"></input>
            </div>
          </div>
          <div className="w-full md:w-1/3 outline-1 ml-2 shadow-md mb-2 md:mb-0 m-5">
            <img src={div2} alt="div2" className="w-full h-auto" />
            <h2 className="text-center font-bold">
              I'm a looking to hire a designer
            </h2>
            <div className="flex justify-center items-center mb-2">
              <input type="checkbox" className="rounded"></input>
            </div>
          </div>
          <div className="w-full md:w-1/3 outline-1 ml-2 shadow-md m-5">
            <img src={div3} alt="div3" className="w-full h-auto" />
            <h2 className="text-center font-bold">
              I'm a looking for design inspiration
            </h2>
            <div className="flex justify-center items-center ">
              <input type="checkbox" className="rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-7">
          <Link to="/mainContent">
            <button className="bg-pink-300 text-white px-12 py-2 rounded-md">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
