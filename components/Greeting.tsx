import { Card,CardContent } from "@/shadcn-components/ui/card";
import { Separator } from '@/shadcn-components/ui/separator';
import Link from "next/link";
function Greeting() {
  return (
    <div className="bg-active-50 dark:bg-transparent mt-6 border  rounded-lg p-2 pb-4 shadow-[-2px_-2px_2px_2px_rgba(0,0,0,0.1),_2px_2px_2px_2px_rgba(45,78,255,0.15)] text-active-500" id="greetings" >
      <h1 className="mt-6 ml-5 text-5xl font-bold ">
       👋 I am Kundan...
      </h1>
      <p className="ml-5 text-lg mt-2">
        A software engineer with a passion for problem-solving and a love for programming. I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I&apos;m not coding, you might think I&apos;m exploring the great outdoors. Just kidding! You&apos;ll most likely find me watching YouTube.
      </p>
      <p className="ml-5 text-lg mt-2">
        Have a project or a full time opportunity in mind? <Link href={'#contact'} className="hover:underline">Let&apos;s connect!</Link>
      </p>      
    </div> 
  ); 
}

export default Greeting;
