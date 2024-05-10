import React from "react";
import { ArrowDownToLine, Menu } from "lucide-react";
import pdf from "../../assets/CV_Developer__1_.pdf"

function Navbar() {
  return (
    <div className="pt-5 lg:pt-0 flex justify-between items-center  h-nav">
      <div className="font-bold text-4xl hover:scale-150 transition ease-in-out duration-300 hover:cursor-pointer bg-gradient-to-b from-orange-500  to-yellow-400 text-transparent bg-clip-text">
        {"<JS/>"}
      </div>

      
      <div className="hidden lg:flex justify-center items-center gap-3 h-full">
        <div className="font-extralight border-r-2 border-gray-500">
          <ol className="flex gap-5 px-3 ">
            <li
              href="#about"
              className="cursor-pointer hover:scale-125 hover:font-bold transition ease-in-out duration-300"
            >
              About
            </li>
            <li
              href="#skills"
              className="cursor-pointer hover:scale-125 hover:font-bold transition ease-in-out duration-300 "
            >
              Skills
            </li>
            <li
              href="#work"
              className="cursor-pointer hover:scale-125 hover:font-bold transition ease-in-out duration-300 "
            >
              Work
            </li>
          </ol>
        </div>
        <a
          href={pdf}
          className="primary-button hover:scale-110 flex items-center gap-2 btn-bg  px-2 py-1 rounded-lg transition ease-in-out duration-300 btn-bg-content  "
          download="Jai's Resume"
        >
          Download CV <ArrowDownToLine size={20} className="animate-pulse" />
        </a>
      </div>

      <div className=" lg:hidden">
        <div className="dropdown dropdown-end dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="px-2 py-1 rounded-lg bg-transprent text-white"
          >
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black small-menu"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Work</a>
            </li>
          </ul>
        </div>
      </div>


      
    </div>
  );
}

export default Navbar;
