'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn-components/ui/card"
import { Button } from "@/shadcn-components/ui/button";
import { Separator } from '@/shadcn-components/ui/separator';
import { SendHorizontal, Linkedin, Github, FileText, Import } from "lucide-react";
import { ResumeDialog } from './ResumeDialog';


export default function ContactSection(){
    return(
        <Card className="auto-gradient">
            <CardContent>
                <CardHeader>
                    <CardTitle>
                        Contact Me
                    </CardTitle>                    
                </CardHeader>
         
                <CardFooter className="flex flex-col">
                    <Separator/>
                    <div className="flex space-x-4 h-7 m-5 custom-font-color">
                        <SendHorizontal/> 
                        <Separator orientation="vertical" />
                        <Linkedin/>
                        <Separator orientation="vertical" />
                        <Github/>
                    </div>
                    {/* <Separator/> */}
                    <ResumeDialog/>
                </CardFooter>                
            </CardContent>
        </Card>
    )
}