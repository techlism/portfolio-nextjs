'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn-components/ui/card"
import { Button } from "@/shadcn-components/ui/button";
import { Separator } from '@/shadcn-components/ui/separator';
import { SendHorizontal, Linkedin, Github, FileText, Import } from "lucide-react";
import Link from "next/link";
import { ResumeDialog } from './ResumeDialog';
import Image from "next/image";


export default function ContactSection(){
    return(
        <div className="bg-active-100 dark:bg-transparent mt-10 border rounded-lg p-2 shadow-[-2px_-2px_2px_2px_rgba(0,0,0,0.1),_2px_2px_2px_2px_rgba(45,78,255,0.15)] flex flex-col" id="contact">                
            <h1 className="mt-6 ml-5 mb-2 text-5xl font-bold text-active-400 dark:text-active-500">
                Get in Touch
            </h1>
            <Separator className="my-4 mx-auto w-[99%] bg-active-950"/>         

            <div className="flex space-x-5 mt-4 custom-font-color justify-center auto-gradient max-w-fit mx-auto p-4 rounded-md text-active-100">
                <Link href={'mailto:email4kundanprasad@gmail.com'} target="blank" className="hover:text-active-950">
                    <SendHorizontal size={30} /> 
                </Link>

                <Link href={'https://www.linkedin.com/in/kundan-kumar-a54461202/'} target="blank" className="hover:text-active-950">
                    <Linkedin size={30}/>
                </Link>                        

                <Link href={'https://github.com/techlism'} target="blank" className="hover:text-active-950">
                    <Github size={30}/>
                </Link>                    
            </div>
            {/* <Separator/> */}
            <div className="flex justify-center mt-5 flex-col items-center">
                <Link href={'https://blog.techlism.in'} target="blank">
                    <Image src={'/blog.png'} alt="Techlism Blog Page" height={200} width={200}  className="mb-5 rounded-lg"/>
                </Link>                
            <ResumeDialog/>    
            </div>
         
        </div>
    )
}