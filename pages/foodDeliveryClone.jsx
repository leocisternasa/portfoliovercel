import Image from "next/image";
import React from "react";
import FoodDeliveryCloneImg from "../public/assets/projects/foodCloneImg.png";
import foodSample9 from "../public/assets/projects/9.png";
import foodSample2 from "../public/assets/projects/2.png";
import foodSample3 from "../public/assets/projects/3.png";
import foodSample4 from "../public/assets/projects/4.png";
import foodSample5 from "../public/assets/projects/5.png";
import foodSample6 from "../public/assets/projects/6.png";
import foodSample7 from "../public/assets/projects/7.png";
import foodSample8 from "../public/assets/projects/8.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
function FoodDeliveryClone() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={FoodDeliveryCloneImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2>Foode Delivery Clone with React Native and Expo</h2>
          <h3>React Native / ExpoJs / Firebase Auth </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 mt-8">
        <div className="col-span-4">
          <p className="mb-3">Project</p>
          <h2 className="mb-3">Overview</h2>
          <p>
            This is a personal project to practice using React Native and Expo
            as a framework. It is a clone of a food delivery application.
            Authentication is done using Firebase Auth..
          </p>
          <div className="grid md:grid-cols-3 gap-2 my-10 w-full h-auto">
            <div className="image-cotainer">
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain  "
                src={FoodDeliveryCloneImg}
                alt="/"
                height={600}
                width={300}
              />
            </div>
            <div className="image-cotainer">
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain  "
                src={foodSample9}
                alt="/"
                height={600}
                width={300}
              />
            </div>
            <div className="image-cotainer">
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain  "
                src={foodSample2}
                alt="/"
                height={600}
                width={300}
              />
            </div>
            <div className="image-cotainer">
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain  "
                src={foodSample3}
                alt="/"
                height={600}
                width={300}
              />
            </div>
            <div className="image-cotainer">
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain  "
                src={foodSample4}
                alt="/"
                height={600}
                width={300}
              />
            </div>
            <div className="image-cotainer">
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain  "
                src={foodSample5}
                alt="/"
                height={600}
                width={300}
              />
            </div>
            <div className="image-cotainer">
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain  "
                src={foodSample6}
                alt="/"
                height={600}
                width={300}
              />
            </div>
            <div className="image-cotainer">
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain  "
                src={foodSample7}
                alt="/"
                height={600}
                width={300}
              />
            </div>
            <div className="image-cotainer">
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain  "
                src={foodSample8}
                alt="/"
                height={600}
                width={300}
              />
            </div>
          </div>
          <a
            href="https://allma-dental.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">
              Repository in Github
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 max-h-[350px] mt-24">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Native
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Expo
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
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

export default FoodDeliveryClone;
