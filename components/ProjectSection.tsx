import { Key } from "react";
import ProjectBentoElement from "./ProjectBentoElement";
import Link from "next/link";
import { ProjectData, projects } from "@/lib/projects";
import { Separator } from "@/shadcn-components/ui/separator";

const ProjectsSection: React.FC = () => {  
    return (
      <div className="bg-active-100 dark:bg-transparent mt-10 border  rounded-lg p-2 shadow-[-2px_-2px_2px_2px_rgba(0,0,0,0.1),_2px_2px_2px_2px_rgba(45,78,255,0.15)]" id="projects">
        {/* First two elements in grid-cols-2 */}
        <h1 className="mt-6 ml-5 mb-6 text-5xl font-bold text-active-400 dark:text-active-500">
          Projects
        </h1>
        <Separator className="my-4 mx-auto w-[99%] bg-active-950"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2">
            {projects.slice(0, 2).map((projectData, index) => (
            <ProjectBentoElement key={index} projectData={projectData} />
            ))}
        </div>
        
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 mt-2">
            {projects.slice(2, 5).map((projectData: ProjectData, index: Key | null | undefined) => (
            <ProjectBentoElement key={index} projectData={projectData} />
            ))}
        </div>
        
        {/* Last element in grid-cols-1 */}
        <div className="grid grid-cols-1 mt-2">
            {projects.slice(5, 6).map((projectData, index) => (
            <ProjectBentoElement key={index} projectData={projectData} />
            ))}
        </div>

        <span className="text-active-500 font-bold text-lg">
          and many more... <Link href="https://github.com/techlism?tab=repositories" target="_blank" className="hover:underline">@github</Link>
        </span>
      </div>
    );
};
  
export default ProjectsSection;
  