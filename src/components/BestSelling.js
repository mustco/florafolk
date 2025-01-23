import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import BestSellingCarousel from './Carousel'
const BestSelling =()=> {
    return (
      <div id="plants" className="pt-20 overflow-hidden">
        <div className="flex px-5 md:px-[96px] mx-auto relative flex-col md:flex-row md:justify-between ">
          <div className="mb-5 md:mb-0">
            <h1 className="text-3xl font-bold">
              BestSelling <span className="text-green-700">Plants</span>
            </h1>
            <p>Explore the most loved plants by our customers.</p>
          </div>
          <button className="border self-end md:self-start px-3 py-1 text-white bg-green-700 hover:bg-white hover:text-green-700 rounded-md border-green-700 flex items-center gap-2">
            <span>See More</span>
            <FaArrowRightLong className="-rotate-12 text-lg" />{" "}
          </button>
        </div>
        <BestSellingCarousel />
      </div>
    );
}

export default BestSelling