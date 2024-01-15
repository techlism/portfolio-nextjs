import ProjectsCarousel from '../components/ProjectsCarousel';
import Navbar from '../components/Navbar';
import Greeting from '../components/Greeting';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
export default function Home(){
  return(
    <main className="flex min-h-screen flex-col items-center p-[10px]">
      <Navbar/>
      <Greeting/>
      <ProjectsCarousel/>
      <SkillsSection/>
      <ContactSection/>
    </main>
  )
}