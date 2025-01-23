import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdLocalPhone } from "react-icons/md";

export default function ContactUs() {
  return (
    <div id="contact" className="flex flex-col justify-center items-center h-auto pt-20">
      <h1 className="text-3xl font-bold">ContactUs</h1>
      <p className="text-gray-700 mb-5">Get attachment with us</p>
      <div className="flex justify-center items-center px-3">
        <div className="flex flex-col md:flex-row items-center rounded-md md:rounded-2xl bg-[#F1F5E7] justify-center max-w-7xl gap-12 p-5  md:p-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">
              Let’s talk <span className="text-green-600"> with us</span>
            </h1>
            <p className="text-base">
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>
            <div className="space-y-2 md:space-y-3 mt-10 ">
              <div className="flex items-start space-x-2">
                <IoLocationSharp className="text-3xl text-green-600" />
                <span>  
                  123 Nusantara Street, Beautiful City, Tropical Country.
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MdLocalPhone className="text-3xl text-green-600" />
                <span>+62 000 1111 0000</span>
              </div>
              <div className="flex items-start space-x-2">
                <MdEmail className="text-3xl text-green-600" />
                <span>contact@florafolk.com</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <form className="space-y-2 md:space-y-6">
              <div className="flex gap-2 md:gap-5">
                <input
                  type="text"
                  className="w-1/2 px-5 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="w-1/2 px-5 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                className="w-full px-5 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Email"
              />
              <input
                type="number"
                className="w-full px-5 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Phone"
              />

              <textarea
                className="w-full border py-2 px-5 border-gray-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-600"
                rows={9}
                placeholder="Message"
              />

              <button type="button" className="flex space-x-2 items-center px-5 py-2 border border-green-700 bg-green-700 hover:bg-green-800 hover:text-white text-white rounded-md">
                <span>Send Message</span>{" "}
                <FaArrowRightLong className="-rotate-12 text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
