import React from "react";
import { indoorPlants, outdoorPlants, hangingPlants } from "../assets";
import { FaArrowRightLong } from "react-icons/fa6";
const Categories = () => {
  return (
    <div className="w-full relative pt-20">
      <div className="bg-[url('../src/assets/Leaf4.svg')] bg-no-repeat bg-cover w-[150px] h-[370px]  md:w-[170px] md:h-[400px]  absolute z-10 scale-x-[-1] right-0 -bottom-10 md:bottom-0"></div>

      <div className="flex flex-col px-5 md:px-[120px] lg:px-[100px] xl:px-[150px] 2xl:px-[300px] 3xl:px-[400px] mx-auto relative text-center">
        <h1 className="text-3xl font-bold">Categories</h1>
        <p>Find what you are looking for</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center h-full py-10">
          <div>
            <img
              src={indoorPlants}
              className="w-[250px] h-[250px] border  rounded-full shadow-xl md:mb-5 mb-2"
            />
            <p className="text-lg font-bold">Indoor Plants</p>
          </div>
          <div>
            <img
              src={outdoorPlants}
              className="w-[250px] h-[250px] border  rounded-full shadow-xl md:mb-5 mb-2"
            />
            <p className="text-lg font-bold">Outdoor Plants</p>
          </div>
          <div>
            <img
              src={hangingPlants}
              className="w-[250px] h-[250px] border  rounded-full shadow-xl md:mb-5 mb-2"
            />
            <p className="text-lg font-bold">Hanging Plants</p>
          </div>
        </div>
        <button className="flex justify-center gap-2 hover:bg-white hover:text-green-700 items-center border border-green-700 text-base self-center px-3 py-1 bg-green-700 text-white rounded-lg">
          See More
          <FaArrowRightLong className="-rotate-12 text-lg" />
        </button>
      </div>
    </div>
  );
};
export default Categories;
