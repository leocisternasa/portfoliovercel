import React from "react";
import getTranscriptImg from "../public/assets/projects/getTranscript.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
function getTrascript() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={getTranscriptImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2>Youtube Trascriptions</h2>
          <h3>SvelteKit / Tailwind </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 mt-8">
        <div className="col-span-4">
          <p className="mb-3">Project</p>
          <h2 className="mb-3">Overview</h2>
          <p>
            This is a project that utilizes SvelteKit and Tailwind. The backend
            is built with Python. It provides the transcription of the YouTube
            link you paste.
          </p>
          <a
            href="https://www.getyoutubetranscript.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Web site</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SvelteKit
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind Css
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projets">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default getTrascript;
