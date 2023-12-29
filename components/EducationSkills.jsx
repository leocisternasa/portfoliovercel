import React from 'react'
import SectionTitle from './SectionTitle'
import Education from './Education'
import Skills from './Skills'

function EducationSkills() {
  const information = [
    {
      title: 'Html | Css | Javascript | Node Js | Express | SQL | Sequelize',
      content: [
        ' Creation of a web application using Vanilla JavaScript and handling DOM events.',
        ' Layout of designs provided by UI designers using CSS with the Bootstrap framework, HTML, and JavaScript.',
        ' Jquery and AJAX',
        ' Usage of native JavaScript applications for querying APIs using methods like then, catch, fetch, async and await.',
        ' Creation of SQL databases.',
        ' Integration of third-party APIs such as Google Maps, Twitter, and Facebook.',
        ' Server deployment and backend development using Node.js and Express.',
        ' Usage of AXIOS for querying external APIs.',
        ' API REST',
        ' HTTPs',
        ' Usage of Babel for transpilation from ES6 to ES5',
      ],
      stack: [
        ['HTML', 'red'],
        ['CSS', 'green'],
        ['JavaScript', 'purple'],
        ['NodeJS', 'blue'],
        ['Express', 'cyan'],
        ['SQL', 'yellow'],
        ['PostgreSQL', 'pink'],
        ['Sequelize', 'emerald'],
      ],
    },
    {
      title: 'JavaScript | Data Structures | Algorithms',
      content: [
        'Variables, operators, data types, conditional statements, and loops.',

        'Objects and nested arrays, basic and intermediate algorithms, OOP, constructor functions, closures, and promises.',

        'Advanced algorithms, functional programming, regular expressions, string and object manipulation, ES6 modules.',

        'Linked Lists, Stacks, Queues, Trees, Binary Search Trees, Graphs, Hash Tables, and Heaps.',

        'Search and sorting algorithms, graph algorithms, tree and graph traversal algorithms, divide and conquer algorithms.',
      ],
      stack: [['JavaScript', 'green']],
    },
    {
      title: 'React | Redux | Zustand ',
      content: [
        'Introduction to React and JSX',
        'Components and Props',
        'State and Lifecycle',
        'Events in React',
        'Forms and Input Handling',
        'Lifting State Up',
        'Routing with React Router',
        'State Management with Context API',
        'Hooks (useState, useEffect, etc.)',
        'Integration with APIs and Data Fetching',
        'State Management using Redux and Zustand',
      ],
      stack: [
        ['ReactJS', 'purple'],
        ['Redux', 'blue'],
        ['Zustand', 'red'],
      ],
    },
  ]

  return (
    <>
      <div className=" mb-9">
        <SectionTitle title={'EDUCATION & SKILLS'} />
      </div>
      <div className=" flex flex-col-reverse sm:flex-row  flex-wrap mx-[-15px] justify-center items-center">
        <div className=" relative w-full px-4 lg:max-w-[33.5%] lg:basis-1/3 mt-11 pb-4 ">
          <ul className=" m-0 p-0 bg-[#0b0b13] list-none h-full">
            <Education
              year={'2022-2023'}
              course={'Bootcamp Full Stack Web Developer Trainee'}
              company={'Edutecno, Digital Talent Initiative for Chile.'}
              informationTitle={information[0].title}
              informationContent={information[0].content}
              hasInformation={true}
              stack={information[0].stack}
            />
            <Education
              year={'2019-2020'}
              course={'JavaScript Algorithms and Data Structures Certificate'}
              company={'FreeCodeCamp.'}
              informationTitle={information[1].title}
              informationContent={information[1].content}
              hasInformation={true}
              stack={information[1].stack}
            />
            <Education
              year={'2018-2019'}
              course={'ReactJS Development'}
              company={
                'Frontend Masters | ReactJS Official Documentation Training'
              }
              informationTitle={information[2].title}
              informationContent={information[2].content}
              hasInformation={true}
              stack={information[2].stack}
            />
            <Education
              year={'2008-2014'}
              course={'Graduated as a DDS, Doctor in Dental Surgery.'}
              company={`Universidad de Chile | Dentristry School`}
              hasInformation={false}
            />
          </ul>
        </div>
        <div className=" relative w-full px-4 lg:max-w-[58.3%] lg:basis-2/3 mt-4 pb-4 h-auto mb-[21px]">
          <div className=" block">
            <h3 className=" font-medium leading-5 text-2xl pb-4">My Skills</h3>
            <p className=" mt-0 mb-4 pb-2 ">
              I have worked with frameworks like Next.js, SvelteKit, and Meteor,
              which have allowed me to work and collaborate in the creation of
              robust and efficient projects. I have experience with HTML and
              CSS, along with the frameworks Tailwind and Bootstrap, that have
              enabled me to create attractive and responsive interfaces.
            </p>
            <Skills
              title={'HTML5 | CSS | JavaScript/TypeScript '}
              percentage={'92%'}
            />
            <Skills title={'Node Js'} percentage={'67%'} />
            <Skills title={'React Js'} percentage={'80%'} />
            <Skills title={'Next Js'} percentage={'80%'} />
            <Skills title={'Express'} percentage={'50%'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default EducationSkills
