import React from 'react'
import SectionTitle from './SectionTitle'
import ServiceCard from './ServiceCard'
import webDevIcon from '../public/coding.png'
import movileIcon from '../public/mobile-app.png'

function ServicesSection() {
  return (
    <div
      id="services"
      className=" bg-[#10101a] overflow-hiden py-[100px] block "
    >
      <div className=" lg:w-[950px] lg:max-w-[1440px] px-4 mx-auto">
        <SectionTitle title={'WHAT I DO'} />
      </div>
      <div className=" flex flex-wrap mx-[-15px] flex-col sm:flex-row">
        <ServiceCard
          serviceIcon={webDevIcon}
          serviceTitle={'Web Development'}
          serviceDescription={
            "Web development entails the creation and upkeep of websites and web applications. As I embark on my journey in this field, I specialize in web development, providing expertise in the design and construction of user-friendly, responsive web solutions. From front-end design to back-end functionality, my focus is on crafting seamless online experiences. My services encompass coding, feature implementation, and website optimization for enhanced performance. Let's transform your digital concepts into reality through customized web development tailored to your unique needs."
          }
        />
        <ServiceCard
          serviceIcon={movileIcon}
          serviceTitle={'Mobile App Development'}
          serviceDescription={
            "I am currently expanding my skills in mobile app development. Proficient in technologies like React Native and Expo, I craft user-friendly websites and intuitive mobile applications. While my primary focus is development, I collaborate seamlessly with designers, offering support in implementing and refining existing designs. I excel in bringing design concepts to life through coding and optimization, ensuring functional and polished digital solutions. Let's work together to elevate your web and mobile applications to new heights."
          }
        />
      </div>
    </div>
  )
}

export default ServicesSection
