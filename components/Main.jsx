/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5656e5]">Leonardo</span>
          </h1>
          <div>
            <AnimatedTitle />
          </div>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto mt-14">
            I`m a front-end web developer specializing in building exceptional
            digital experiences. Currently, I`m focusing on improving my
            front-end skills while learning back-end technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/leonardo-cisternas-674813249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn className="h-auto w-[25px]" />
              </div>
            </a>

            <a
              href="https://github.com/leocisternasa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub className="h-auto w-[25px]" />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail className="h-auto w-[25px]" />
              </div>
            </Link>
            {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <BsFillPersonLinesFill />
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
