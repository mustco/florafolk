import { RiPlantLine } from "react-icons/ri";
import { LuPackageCheck } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center pt-20 items-center h-auto relative gap-5 px-5 md:px-[96px] ">
      <div className="bg-[url('../src/assets/Leaf1.svg')] bg-no-repeat bg-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:h-[200px] lg:w-[200px] absolute -top-2 -left-8"></div>
      <div className="bg-[url('../src/assets/Leaf2.svg')] bg-no-repeat bg-cover w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:h-[250px] lg:w-[250px] absolute top-3 md:top-7 right-5 lg:right-20 md:right-15 -z-1"></div>
      <div className="bg-[url('../src/assets/Leaf2.svg')] bg-no-repeat bg-cover w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:h-[250px] lg:w-[250px] absolute -bottom-16 md:-bottom-32 lg:-bottom-32 rotate-90 lg:-rotate-90 left-3/4 md:left-2/4 lg:left-1/4 z-auto"></div>

      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="max-w-[992px] mx-auto left-0 right-0 z-10 mb-5">
        At FloraFolk, we believe in transforming your space into a timeless
        haven of greenery. With a wide variety of plants and eco-friendly
        solutions, we bring nature closer to you.Discover the beauty and
        tranquility of greenery tailored to enhance your lifestyle.
      </p>
      <div className="mt-5 md:mt-12 lg:mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-14 md:gap-y-16 md:gap-x-5 lg:gap-5  w-auto   ">
        <div className="px-2 md:px-4 py-8 md:py-12 border border-green-800 rounded-xl bg-[#F1F5E7] flex flex-col items-center text-center relative">
          <div className="icon flex flex-col items-center text-3xl md:text-4xl absolute justify-center z-10 bg-green-700 text-white border-white -top-12 md:-top-14  border-4 rounded-full w-20 h-20 md:w-24 md:h-24">
            <RiPlantLine />
          </div>
          <h1 className="text-xl  font-bold mb-3">
            Wide <span className="text-green-700">Variety</span>
          </h1>
          <p className="text-slate-800 text-sm md:text-base">
            Explore our extensive collection of plants, carefully curated to
            suit every space and style.
          </p>
        </div>

        <div className="px-2 md:px-4 py-8 md:py-12 border border-green-800 rounded-xl bg-[#F1F5E7] flex flex-col items-center text-center relative">
          <div className="icon flex flex-col items-center text-3xl md:text-4xl absolute justify-center z-10 bg-green-700 text-white border-white -top-12 md:-top-14   border-4 rounded-full w-20 h-20 md:w-24 md:h-24">
            <LuPackageCheck />
          </div>
          <h1 className="text-xl  font-bold mb-3">
            Eco-Friendly <span className="text-green-700">Delivery</span>
          </h1>
          <p className="text-sm md:text-base">
            Enjoy fast and sustainable delivery options, bringing nature to your
            doorstep effortlessly.
          </p>
        </div>

        <div className="px-2 md:px-4 py-8 md:py-12 border border-green-800 rounded-xl bg-[#F1F5E7] flex flex-col items-center text-center relative">
          <div className="icon flex flex-col items-center text-3xl md:text-4xl absolute justify-center z-10 bg-green-700 text-white border-white -top-12 md:-top-14 border-4 rounded-full w-20 h-20 md:w-24 md:h-24">
            <MdOutlinePhoneInTalk />
          </div>
          <h1 className="text-xl  font-bold mb-3">
            Dedicated <span className="text-green-700">Support</span>
          </h1>
          <p className="text-sm md:text-base">
            Our team is here 24/7 to assist with all your green space needs and
            inquiries.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
