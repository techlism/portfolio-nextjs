import ProjectsCarousel from '../components/ProjectsCarousel';
import Navbar from '../components/Navbar';
import Greeting from '../components/Greeting';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
import { Card } from '@/shadcn-components/ui/card';
export default function Home(){
  return(
    <main className="flex min-h-screen flex-col items-center p-[10px]">
      <Navbar/>
      <Greeting/>
      <ProjectsCarousel/>
      <SkillsSection/>
      <Card className='flex m-2 mt-10 lg:max-w-[59vw] max-w-[89vw] md:max-w-[70vw] gap-2 flex-wrap p-3 align-middle justify-center'  id="contact">
        <ContactSection/>
        <ExperienceSection/>
      </Card>
      <p className='mt-8 m-2'>➖➖➖❌➖➖➖❌➖➖➖</p>
    </main>
  )
}