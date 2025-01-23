import { logo } from "../assets";

export default function Footer() {
  return (
    <div className="h-auto flex justify-center bg-green-950 text-gray-300 py-10 mt-16">
      <div className="flex flex-col max-w-7xl items-center gap-10">
        <div className="border-b border-green-700 flex md:flex-row flex-col  gap-5 md:gap-8 lg:gap-10 p-10">
          <div className="flex flex-col gap-3 md:gap-5">
            <h1 className="text-xl md:text-2xl">Newsletter</h1>
            <div className="subscribe space-y-3">
              <p>Subscribe to our Newsletter</p>
              <div className="email__input border border-green-700 p-1 flex space-x-1 rounded-md w-full justify-between">
                <input
                  type="email"
                  className="py-2 rounded-md bg-green-950 px-1 lg:px-2 focus:outline-none "
                  placeholder="Email"
                />
                <button className="px-3 lg:px-5 py-2 rounded-md bg-green-700 hover:bg-green-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="md:h-auto md:w-px bg-green-700"></div>

          <div className="flex flex-col gap-3 md:gap-5 w-full items-start md:w-1/3">
            <div className="text-2xl md:text-4xl flex items-end space-x-2 justify-center">
              <img src={logo} alt="logo" className="w-12" />
              <h1>FloraFolk</h1>
            </div>

            <p>
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.Lorem
              Ipsum has been the industry's standard dummy.
            </p>
          </div>
          <div className="md:h-auto md:w-px  bg-green-700"></div>

          <div className="flex flex-col md:gap-5 gap-2 w-1/3">
            <h1 className="text-xl md:text-2xl">Pages</h1>
            <ul className="flex md:flex-col flex-row md:space-y-1 space-x-2 md:space-x-0 text-gray-300">
              <li>
                <a href="" className="hover:text-green-700">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:text-green-700">
                  About
                </a>
              </li>
              <li>
                <a href="" className="hover:text-green-700">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="hover:text-green-700">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="hover:text-green-700">
                  Products
                </a>
              </li>
              <li>
                <a href="" className="hover:text-green-700">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>Copyright © 2024 | FloraFolk</div>
      </div>
    </div>
  );
}
