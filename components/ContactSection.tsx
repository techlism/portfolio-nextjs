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
        <Card className="auto-gradient ">        
            <CardHeader>
                <CardTitle className="lg:text-3xl md:text-2xl sm:text-base">
                    Get in touch..
                </CardTitle>                    
            </CardHeader>
            
            <CardContent>
            <Separator/>
                <CardFooter className="flex flex-col">            
                    <div className="flex space-x-3 h-7 m-5 mx-3 mt-6 custom-font-color">
                        <Link href={'mailto:email4kundanprasad@gmail.com'} target="blank">
                            <SendHorizontal size={30}/> 
                        </Link>
                        <Separator orientation="vertical" />
                        <Link href={'https://www.linkedin.com/in/kundan-kumar-a54461202/'} target="blank">
                            <Linkedin size={30}/>
                        </Link>                        
                        <Separator orientation="vertical" />
                        <Link href={'https://github.com/techlism'} target="blank">
                            <Github size={30}/>
                        </Link>                    
                    </div>
                    {/* <Separator/> */}
                    <Link href={'https://blog.techlism.in'} className="m-2" target="blank">
                        <Image src={'/blog.png'} alt="Techlism Blog Page" height={200} width={200}  className="mb-5 rounded-lg"/>
                    </Link>
                    <ResumeDialog/>
                </CardFooter>                
            </CardContent>
        </Card>
    )
}