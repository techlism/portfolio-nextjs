"use client";

import { Cplusplus } from "@styled-icons/simple-icons/Cplusplus";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { NodeJs } from "@styled-icons/fa-brands/NodeJs";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Python } from "@styled-icons/fa-brands/Python";
import { Html5 } from "@styled-icons/fa-brands/Html5";
import { Css3 } from "@styled-icons/fa-brands/Css3";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Git } from "@styled-icons/fa-brands/Git";
import { Canva } from "@styled-icons/simple-icons/Canva";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
// import {Adobe} from '@styled-icons/boxicons-logos/Adobe';
import { TailwindCss } from "@styled-icons/boxicons-logos/TailwindCss";

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/shadcn-components/ui/card";
import { Separator } from "@/shadcn-components/ui/separator";
import SkillRenderer from "./SkillRenderer";

const iconSize = 40;

const SkillsSection: React.FC = () => {
  return (
    <div
      className="bg-active-100 dark:bg-transparent mt-10 border  rounded-lg p-2 shadow-[-2px_-2px_2px_2px_rgba(0,0,0,0.1),_2px_2px_2px_2px_rgba(45,78,255,0.15)]"
      id="skills"
    >
      <h1 className="mt-6 ml-5 mb-6 text-5xl font-bold text-active-400 dark:text-active-500">
        Skillset
      </h1>
      <Separator className="my-4 mx-auto w-[99%] bg-active-950"/>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 grid-cols-1 gap-2 items-center align-middle mb-2">
      <SkillRenderer>
        <div>
          <h2 className="font-bold text-4xl">Markup & Stylesheet Languages</h2>
          <div className="space-x-4 mt-2">
            <Html5 size={iconSize} />
            <Css3 size={iconSize} />
            <TailwindCss size={iconSize} />
          </div>
        </div>
      </SkillRenderer>
      <SkillRenderer>
        <div>
          <h2 className="font-bold text-4xl">Design Tools</h2>
          <div className="space-x-4 mt-2">
            <Canva size={iconSize} />
            {/* <Adobe size={iconSize} /> */}
          </div>
        </div>
      </SkillRenderer>

      <SkillRenderer>
        <div>
          <h2 className="font-bold text-4xl">Libraries and Frameworks</h2>
          <div className="space-x-4 mt-2">
            <ReactLogo size={iconSize} />
            <NodeJs size={iconSize} />
            <Nextdotjs size={iconSize} />
          </div>
        </div>
      </SkillRenderer>

      <SkillRenderer>
        <div>
          <h2 className="font-bold text-4xl">Databases</h2>
          <div className="space-x-4 mt-2">
            <Mongodb size={iconSize} />
          </div>
        </div>
      </SkillRenderer>

      <SkillRenderer>
        <div>
          <h2 className="font-bold text-4xl">Operating Systems</h2>
          <div className="space-x-4 mt-2">
            <Linux size={iconSize} />
          </div>
        </div>
      </SkillRenderer>

      <SkillRenderer>
        <div>
          <h2 className="font-bold text-4xl">Version Control</h2>
          <div className="space-x-4 mt-2">
            <Git size={iconSize} />
          </div>
        </div>
      </SkillRenderer>
    </div>
    <SkillRenderer>
        <div>
          <h2 className="font-bold text-4xl">Programming Languages</h2>
          <div className="space-x-4 mt-2">
            <Cplusplus size={iconSize} />
            <Python size={iconSize} />
            <Javascript size={iconSize+13} className="rounded-lg p-0" />
            <Typescript size={iconSize} />
          </div>
        </div>
      </SkillRenderer>
    </div>
  );
};

export default SkillsSection;
