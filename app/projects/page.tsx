import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="text-5xl my-6 font-bold tracking-tight">Projects</h1>
      <div className="gap-4">
        {projects.map((project,index) => (
            <div className="flex flex-col mt-2" key={project.title}>
              <div className="w-full flex justify-between items-baseline">
                <span className="text-lg  font-semibold tracking-tight">
                  {project.title}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.year}
                </span>
              </div>
              <p className="mt-2 text-muted-foreground text-sm lg:text-base">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1.5 bg-gray-100 dark:bg-gray-600 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on GitHub
                </a>
                <a
                  href={project.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Version
                </a>
              </div>
            <hr className="border-gray-200 dark:border-gray-700 mt-2"/>
            </div>
            
        ))}
      </div>      
    </section>
  );
}