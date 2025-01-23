import plantLovers from "../data/dummy";
const PlantLover = () => {
  const plantLover = plantLovers.plantLover();

  return (
    <>
      <div className="flex flex-col justify-center pt-20 items-center h-auto relative gap-5 px-3 md:px-[36px]">
        <div className="bg-[url('../src/assets/Leaf3.svg')] bg-no-repeat bg-cover w-[150px] h-[370px]  md:w-[210px] md:h-[400px]  absolute -z-10 scale-x-[-1] -left-2 md:-left-10 -bottom-20  md:bottom-1/3"></div>
        <div className="bg-[url('../src/assets/Leaf5.svg')] bg-no-repeat bg-cover w-[92px] h-[92px]  md:w-[210px] md:h-[210px]  absolute -z-10 scale-x-[-1] right-3 md:right-20 -bottom-10  md:-bottom-20"></div>
        <div className="bg-[url('../src/assets/Leaf2.svg')] bg-no-repeat bg-cover w-[150px] h-[150px]  md:w-[170px] md:h-[170px] rotate-12 absolute -z-10 scale-x-[-1] left-10 md:left-20 -top-24  md:-top-24"></div>
        <div className="bg-[url('../src/assets/Leaf5.svg')] bg-no-repeat bg-cover w-[92px] h-[92px]  md:w-[150px] md:h-[150px] rotate-90 absolute -z-10 scale-x-[-1] left-1/4 top-28 md:top-16"></div>

        <h1 className="text-3xl font-bold mb-10 z-10">
          What Plant <span className="text-green-700 ">Lovers Say</span>
        </h1>

        <div className="max-w-6xl mx-auto md:pe-16 z-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-7">
            {plantLover.map((plant, index) => (
              <div className="md:col-span-3" key={index}>
                <div
                  className={`bg-white border border-green-400 rounded-2xl py-3 px-3 md:px-9 ${
                    index >= 2 && index < 4 ? "md:translate-x-16" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-5 md:gap-5">
                    <div>
                      <h3 className="flex text-yellow-400 text-3xl">*****</h3>
                      <h3 className="text-gray-600 text-2xl">{plant.name}</h3>
                      <p className="text-gray-600 text-sm">{plant.review}</p>
                    </div>

                    <div className="w-56 rounded-full">
                      <img
                        src={plant.avatar}
                        alt="avatar"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default PlantLover;
