import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import getBestPlant from "../data/dummy";
import { Pagination, Autoplay } from "swiper/modules";

export default function BestSellingCarousel() {
  const bestPlant = getBestPlant.getBestPlants();
  return (
    <div
      className={`ps-5 sm:ps-10 md:ps-[96px] lg:ps-[96px] mx-auto relative pt-10`}
    >
      {/* <img src={Leaf3} className="absolute -bottom-40 md:-bottom-56 -right-16 w-[300px]" alt="" /> */}
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          576: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4.2,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {bestPlant.map((item) => (
          <SwiperSlide key={item.id} className="cursor-pointer ">
            <div className="w-full overflow-hidden hover:scale-95 rounded-lg transition-transform ease-in-out duration-300 hover:shadow-md">
              <div className="absolute top-5 left-5 bg-green-700 text-white px-3 py-1 rounded-lg z-10 font-mono">
                {item.discount_percentage}% OFF
              </div>
              <img src={item.image} alt="background" className="rounded-sm " />
              <div className="relative bottom-0 left-0 right-0 text-black px-3 py-3  opacity-100">
                <h3 className="opacity-100 z-50 text-base">{item.category}</h3>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <h3 className="text-xl">
                  <span className="line-through me-2">
                    IDR {item.original_price.amount}
                  </span>
                  <span className="">IDR {item.discount_price.amount}</span>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
