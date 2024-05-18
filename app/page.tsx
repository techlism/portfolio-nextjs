import ProjectsCarousel from '../components/ProjectSection';
import Greeting from '../components/Greeting';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
export default function Home(){
  return(
    <main className="grid grid-cols-1 min-h-screen items-center p-4 mx-auto max-w-7xl">
      <Greeting/>
      <ProjectsCarousel/>
      <SkillsSection/>
        <ContactSection/>
        <ExperienceSection/>
    </main>
  )
}