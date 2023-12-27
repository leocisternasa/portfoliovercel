import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import Separator from '@/components/Separator'
import EducationSkills from '../components/EducationSkills'
import ExperienceSection from '../components/ExperienceSection'
import ServicesSection from '../components/ServicesSection'
import SomethingElseSection from '../components/SomethingElseSection'
import ContactMeSection from '../components/ContactMeSection'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <main className="lg:left-[250px] top-0 lg:absolute lg:h-full lg:w-[calc(100%-250px)] bg-[#0f0f19]">
      <div className="overflow-auto bg-[#10101a]">
        <div className="overflow-hidden relative">
          <div className="relative w-full px-4 mx-auto lg:w-[950px]">
            <HeroSection />
            <AboutMe />
            <Separator />
            <EducationSkills />
            <Separator />
            <ExperienceSection />
            <ServicesSection />
            <Separator />
            <SomethingElseSection />
            <Separator />
            <Projects />
            <Separator />
            <ContactMeSection />
            <Separator />
          </div>
        </div>
      </div>
    </main>
  )
}
