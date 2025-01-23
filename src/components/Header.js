import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/Logo.png";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-3xl border border-green-700 border- px-5 py-1 fixed w-[95%] top-3 right-0 left-0 z-30 mx-auto bg-[#F1F5E7] text-black rounded-none bg-opacity-100 backdrop-blur-[10px]">
        <div
          className={`flex flex-col md:flex-row ${
            open ? "justify-start " : "justify-start"
          } md:justify-between transition-all duration-1000 ease-in-out`}
        >
          <h1
            className={`text-black w-full border-b ${
              open ? "border-b pb-1" : "border-none"
            } border-green-700 md:border-0 md:w-auto md:text-left flex items-center font-bold gap-2 text-2xl`}
          >
            <img src={Logo} alt="" className="w-12 h-12" />
            Florafolk
          </h1>
          <ul
            className={`md:flex ${
              open ? "flex flex-col md:flex-row justify-center" : "hidden"
            } text-xl mb-0 items-center gap-0 md:gap-2 py-3 md:py-0`}
          >
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="cursor-pointer  hover:bg-green-700 w-full md:w-auto text-center hover:text-white text-green-700"
            >
              <li className="px-2 py-2 md:py-1">Home</li>
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#about"
              className="cursor-pointer  hover:bg-green-700 w-full md:w-auto text-center hover:text-white text-green-700"
            >
              <li className="px-2 py-2 md:py-1">About Us</li>
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#plants"
              className="cursor-pointer  hover:bg-green-700 w-full md:w-auto text-center hover:text-white text-green-700"
            >
              <li className="px-2 py-2 md:py-1">Plants</li>
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="cursor-pointer  hover:bg-green-700 w-full md:w-auto text-center hover:text-white text-green-700"
            >
              <li className="px-2 py-2 md:py-1">Contact</li>
            </a>
          </ul>
          <div
            className={`md:flex ${
              open
                ? "flex flex-col md:flex-row justify-center w-full md:w-auto"
                : "hidden"
            } items-center gap-5`}
          >
            <FiShoppingCart className="cursor-pointer hidden md:block hover:text-green-700" />
            <h1 className="text-green-700 text-xl border border-green-700 px-5 py-2 md:py-1 w-full md:w-auto text-center mb-3 md:mb-0 cursor-pointer hover:bg-green-700 hover:text-white">
              Login
            </h1>
          </div>

          <button
            className="md:hidden absolute right-3 top-3"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IoMdClose className="hover:text-green-700" />
            ) : (
              <HiMiniBars3BottomRight className="hover:text-green-700" />
            )}
          </button>
        </div>
      </div>

      <div
        id="home"
        className="content w-full relative z-20 h-screen py-16 flex flex-col justify-center bg-no-repeat bg-cover bg-[center_left_30%] bg- lg:bg-center px-5 lg:px-[72px]"
      >
        <div className="max-w-[450px] md:max-w-[500px] lg:max-w-[600px] flex flex-col gap-5">
          <h1 className="text-3xl lg:text-5xl font-bold">
            <span className="text-green-800">Transform </span>Your Space with
            Timeless Greenery{" "}
          </h1>
          <p className="text-gray-700">
            Elevate your space with the serene charm of lush greenery, bringing
            life and timeless beauty to your surroundings.
          </p>
          <div className="mt-3 flex space-x-1 py-2 md:py-3  justify-between w-[90%] md:w-[80%] text-center bg-green-800 px-2 lg:px-4 rounded-3xl text-white">
            <div className=" border-black w-full text-lg md:text-xl lg:text-2xl">
              <h1 className="font-bold">15+</h1>
              <p className="text-sm lg:text-lg">Categories</p>
            </div>
            <div className="h-auto w-px bg-gray-300"></div>
            <div className=" border-black w-full text-lg md:text-xl lg:text-2xl">
              <h1 className="font-bold">200+</h1>
              <p className="text-sm lg:text-lg">Plant Products</p>
            </div>
            <div className="h-auto w-px bg-gray-300"></div>

            <div className=" border-black w-full text-lg md:text-xl lg:text-2xl">
              <h1 className="font-bold">100+</h1>
              <p className="text-sm lg:text-lg">Customers</p>
            </div>
          </div>
          <button className="flex items-center gap-1 border text-base border-green-800 px-4 py-2 rounded-xl text-green-800 self-start hover:text-white hover:bg-green-800">
            <span>Explore Collection</span>{" "}
            <FaArrowRightLong className="-rotate-12 text-lg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
