import React from 'react'
import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
import docmoviLogo from '../public/docmovi-logo.png.webp'
import servicioSaludLogo from '../public/servicio-salud-chiloe.jpg'
import benchapalLogo from '../public/benchpal.png'
import freelanceLogo from '../public/freelanceLogo.png'
import takemedLogo from '../public/takemedLogo.svg'

export const experience = [
  {
    position: 'Junior Front-end Developer',
    company: 'BenchPal | Remote | May 2021 - Jan 2022',
    schedule: 'Full Time',
    workDescription:
      'Built features, collaborated with the Design Team and the Back End Team. Worked on the release of Version 1.',
    workFunctions: [
      'Layout and development of UI/UX views while respecting best practices.',
      'Utilization of React JS (Next.js) for frontend development.',
      'Consumption of APIs and utilization of Strapi for backend.',
      'Usage of Git (GitHub).',
      'Creation of responsive views while adhering to the Mobile First principle.',
      'Usage of CSS, Tailwind framework, for styling.',
      'Creation of a responsive Main Page and contact forms, including navigation bars.',
    ],
    companyLogo: benchapalLogo,
    stack: [
      ['ReactJS', 'green'],
      ['NextJS', 'purple'],
      ['Tailwind', 'pink'],
      ['Stripe', 'blue'],
      ['Firebase', 'orange'],
    ],
  },
  {
    position: 'Front-end Developer Intern / Practice',
    company: 'DocMovi | Remote | Dec 2019 - Feb 2021',
    schedule: 'Part Time',
    workDescription:
      'Built and maintained features on the frontend of this medical assistance company using React, Meteor, MongoDB, CSS, and HTML',
    workFunctions: [
      'Creation of components and updating views and designs provided by UI/UX designers.',
      'Creation of contact forms.',
      'Utilization of React JS (Meteor).',
      'Creation of components to allow doctors to group type medications and deliver them in different prescriptions.',
      'Creation of functions and algorithms. Code modularization and adherence to best practices.',
    ],
    companyLogo: docmoviLogo,
    stack: [
      ['ReactJS', 'green'],
      ['MeteorJS', 'teal'],
      ['CSS-Modules', 'indigo'],
      ['MongoDB', 'red'],
    ],
  },
  {
    position: 'Lead Dentist Surgeon',
    company: 'Chiloé Health Service, Chile | In-person | Apr 2015 - Apr 2020',
    schedule: 'Full Time',
    workDescription:
      'Purchasing, Technology, Operations, and Coordination Manager for Community Dental Service. Dental care to the general population, Public Health. ',
    workFunctions: [],
    companyLogo: servicioSaludLogo,
  },
  {
    position: 'Full Stack Developer Freelancer',
    company: 'Freelance | In-person/Remote | Jan 2022 - Present',
    schedule: 'Full Time | Part Time',
    workDescription:
      '"Web development and solutions tailored for diverse individual clients across various industries."',
    workFunctions: [
      "Currently building a website for a specialized orthodontic clinic and integrating it with various services according to the client's requirements",
    ],
    companyLogo: freelanceLogo,
    stack: [
      ['ReactJS', 'green'],
      ['NextJS', 'purple'],
      ['Tailwind', 'pink'],
      ['PostgreSQL', 'cyan'],
    ],
  },
  {
    position: 'Full Stack Developer',
    company: 'Takemed Health | Remote | Jan 2024 - Present',
    schedule: 'Full Time | Part Time',
    workDescription:
      "Development of a landing page, web portal with ReactJS | NextJS, and mobile application in React Native | Expo. Responsible for the company's frontend",
    workFunctions: [
      'Creation of a landing page based on the provided design, with a contact section via email, and creation of a survey with results for interested users as added value.',
      'creation of autentication and authorization system with JWT and integration with the backend.',
      'Creation of a web portal with ReactJS | NextJS, where users can access their medical records, schedule appointments, and receive notifications.',
      'Currently creating a mobile application in React Native | Expo, where users can access their medical records, schedule appointments, and receive notifications.',
    ],
    companyLogo: takemedLogo,
    stack: [
      ['ReactJS', 'green'],
      ['NextJS', 'purple'],
      ['Typescript', 'blue'],
      ['React Native', 'red'],
      ['Tailwind', 'pink'],
      ['PostgreSQL', 'cyan'],
    ],
  },
]
function ExperienceSection() {
  return (
    <>
      <div className=" mb-9">
        <SectionTitle title={'EXPERIENCE'} />
      </div>
      <div className="bg-[#0b0b13] mt-4 w-full align-top inline-block ">
        <ExperienceCard
          position={experience[4].position}
          company={experience[4].company}
          schedule={experience[4].schedule}
          workDescription={experience[4].workDescription}
          workFunctions={experience[4].workFunctions}
          companyLogo={experience[4].companyLogo}
          stack={experience[4].stack}
        />
        <ExperienceCard
          position={experience[3].position}
          company={experience[3].company}
          schedule={experience[3].schedule}
          workDescription={experience[3].workDescription}
          workFunctions={experience[3].workFunctions}
          companyLogo={experience[3].companyLogo}
          stack={experience[3].stack}
        />
        <ExperienceCard
          position={experience[0].position}
          company={experience[0].company}
          schedule={experience[0].schedule}
          workDescription={experience[0].workDescription}
          workFunctions={experience[0].workFunctions}
          companyLogo={experience[0].companyLogo}
          stack={experience[0].stack}
        />
        <ExperienceCard
          position={experience[1].position}
          company={experience[1].company}
          schedule={experience[1].schedule}
          workDescription={experience[1].workDescription}
          workFunctions={experience[1].workFunctions}
          companyLogo={experience[1].companyLogo}
          stack={experience[1].stack}
        />
        <ExperienceCard
          position={experience[2].position}
          company={experience[2].company}
          schedule={experience[2].schedule}
          workDescription={experience[2].workDescription}
          workFunctions={experience[2].workFunctions}
          companyLogo={experience[2].companyLogo}
        />
      </div>
    </>
  )
}

export default ExperienceSection
