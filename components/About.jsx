import Image from "next/image";
import React from "react";
import aboutImg from "../public/assets/teamWork.jpeg";
import Link from "next/link";

function About({ inIndex }) {
  return (
    <div
      id="about"
      className="w-full h-auto  p-2 flex items-center py-16 mb-40"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 mt-5  sm:ml-auto">
        <div className="col-span-2 ml-4 ">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 text-gray-600">
            {" "}
            I am a front end developer with different experiences
          </p>
          <p className="py-2 sm:pr-36 pr-3 text-gray-600 mb-3">
            {" "}
            I am a web developer with 2 years of experience working in teams for
            other companies and 1 year as a freelancer, specializing in web
            application development with strong skills in JavaScript and
            React.js. Working with frameworks like Next.js, SvelteKit, and
            Meteor has allowed me to create robust and efficient projects while
            collaborating effectively with teams.{" "}
          </p>
          <p className="py-2sm:pr-36 pr-3 text-gray-600 mb-3">
            My experiences extends to HTML and CSS, along with the frameworks
            Tailwind and Bootstrap, enabling me to design attractive and
            responsive interfaces. Git, as a version control system, has been
            instrumental in maintaining an efficient change history and
            facilitating collaborative work.
          </p>
          <p className="py-2 sm:pr-36 pr-3  text-gray-600 mb-3">
            My eagerness to expand my understanding of applications led me to
            undertake an intensive Fullstack Bootcamp trainee program, where I
            was able to learn and create projects with JavaScript and Node.js
            using Express. I also have experience with SQL databases (PostgreSQL
            and MySQL) and NoSQL databases (MongoDB), as well as in
            communication and management through SQL queries and/or using an ORM
            (Sequelize and Prisma).
          </p>
          {inIndex ? (
            <Link href="/about" className="cursor-pointer ">
              <a className="text-[#5651e5] hover:font-semibold">Leer mas...</a>
            </Link>
          ) : (
            <>
              <p className="py-2 pr-3 sm:pr-36 text-gray-600 mb-3">
                What sets me apart from the norm is my diverse background in the
                healthcare field, where I spent the last 9 years as a
                professional dentist. This unique experience has nurtured
                excellent communication skills and empathy, allowing me to
                deeply understand the needs and concerns of clients.
              </p>
              <p className="py-2 sm:pr-36 pr-3 text-gray-600 mb-3 ">
                My journey into the tech industry began in 2018 when I started
                self-learning through tutorials and online courses, driven by my
                passion for technology and computers. In 2019, I had the
                opportunity to work as a junior developer at Docmovi, a
                healthcare startup. There, I actively contributed to
                implementing new features and enhancing existing styles, using
                technologies such as React.js and Meteor.
              </p>
              <p className="py-2 sm:pr-36 pr-3 text-gray-600 mb-3 ">
                Following my experience at Docmovi in 2019, I joined Benchpal as
                an internal frontend developer. Working with the Next.js,
                Tailwind CSS, and React.js stack, I was responsible for
                developing new components and contributing to the frontend
                development.
              </p>
              <p className="py-2 sm:pr-36 pr-3 text-gray-600 mb-3">
                At Benchpal, I enjoyed working on challenging technical tasks
                and collaborating with a dynamic team. My background in the
                healthcare field complemented my frontend expertise, enabling me
                to create user-friendly interfaces tailored to the healthcare
                domain.
              </p>
              <p className="py-2 sm:pr-36 pr-3 text-gray-600 mb-3 ">
                Now, my goal is to combine my expertise in healthcare with web
                development. I am dedicated to building applications centered on
                user needs and I thrive on tackling new challenges.
                Collaborating in a team environment is my aspiration, as it
                allows me to gain diverse perspectives and further my experience
                in this ever-evolving field.
              </p>
              <p className="py-2 sm:pr-36 pr-3 text-gray-600 mb-3 ">
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
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="px-8 py-2 mt-10 mr-8 ml-[25vw] md:ml-[5vw] md:mt-[15vh] mb-10">
                Download my Resume
              </button>
            </a>
          )}
          <div className="w-[90%] sm:w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mt-4">
            <Image src={aboutImg} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
