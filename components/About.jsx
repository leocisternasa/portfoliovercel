import Image from "next/image";
import React from "react";
import aboutImg from "../public/assets/teamWork.jpeg";
import Link from "next/link";

function About({ inIndex }) {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 mb-64"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 mt-5">
        <div className="col-span-2">
          <p className="uppercase text-xl -tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            {" "}
            I am a front end developer with different experiences
          </p>
          <p className="py-2 pr-36 text-gray-600">
            {" "}
            I am a web developer with almost 2 years of experience, specializing
            in web application development with strong skills in JavaScript and
            React.js. Working with frameworks like Next.js, SvelteKit, and
            Meteor has allowed me to create robust and efficient projects while
            collaborating effectively with teams.{" "}
          </p>
          <p className="py-2 pr-36 text-gray-600">
            My experiences extends to HTML and CSS, along with the frameworks
            Tailwind and Bootstrap, enabling me to design attractive and
            responsive interfaces. Git, as a version control system, has been
            instrumental in maintaining an efficient change history and
            facilitating collaborative work.
          </p>
          <p className="py-2 pr-36 text-gray-600">
            However, what sets me apart from the norm is my diverse background
            in the healthcare field, where I spent the last 9 years as a
            professional dentist. This unique experience has nurtured excellent
            communication skills and empathy, allowing me to deeply understand
            the needs and concerns of clients.
          </p>
          {inIndex ? (
            <Link
              href="/about"
              className="cursor-pointer underline font-semibold hover:font-bold"
            >
              Leer mas...
            </Link>
          ) : (
            <>
              <p className="py-2 pr-36 text-gray-600">
                My journey into the tech industry began in 2018 when I started
                self-learning through tutorials and online courses, driven by my
                passion for technology and computers. In 2019, I had the
                opportunity to work as a junior developer at Docmovi, a
                healthcare startup. There, I actively contributed to
                implementing new features and enhancing existing styles, using
                technologies such as React.js and Meteor.
              </p>
              <p className="py-2 pr-36 text-gray-600">
                Following my experience at Docmovi in 2019, I joined Benchpal as
                an internal frontend developer. Working with the Next.js,
                Tailwind CSS, and React.js stack, I was responsible for
                developing new components and contributing to the frontend
                development.
              </p>
              <p className="py-2 pr-36 text-gray-600">
                At Benchpal, I enjoyed working on challenging technical tasks
                and collaborating with a dynamic team. My background in the
                healthcare field complemented my frontend expertise, enabling me
                to create user-friendly interfaces tailored to the healthcare
                domain.
              </p>
              <p className="py-2 pr-36 text-gray-600">
                Now, my goal is to combine my expertise in healthcare with web
                development. I am dedicated to building applications centered on
                user needs and I thrive on tackling new challenges.
                Collaborating in a team environment is my aspiration, as it
                allows me to gain diverse perspectives and further my experience
                in this ever-evolving field.
              </p>
              <p className="py-2 pr-36 text-gray-600">
                Starting from scratch in this industry doesn`t deter me; I am
                willing to embrace the opportunity to learn and demonstrate my
                potential to contribute significantly to any team I am part of.
                My passion for technology and determination to grow make me an
                exceptional addition to any project
              </p>
            </>
          )}
        </div>
        <div>
          {!inIndex && (
            <a
              href="/ResumeLeonardo.Cisternas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="px-8 py-2 mt-10 mr-8 ml-[25vw] md:ml-[5vw] md:mt-[15vh] mb-10">
                Download my CV
              </button>
            </a>
          )}
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={aboutImg} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
