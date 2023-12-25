import React from 'react'
import SectionTitle from './SectionTitle'
import ServiceCard from './ServiceCard'

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
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  )
}

export default ServicesSection
