"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn-components/ui/card" ;
import { Separator } from "@/shadcn-components/ui/separator";
import Link from "next/link";
import { ProjectData } from "./ProjectsCarousel";
import { Code, ExternalLink } from 'lucide-react';
import { BottomDrawer } from './BottomDrawer';

export default function ProjectCard(props : ProjectData){
    return(
        <Card className="auto-gradient">
            <CardHeader>
                <CardTitle className="lg:text-3xl md:text-2xl sm:text-base">
                    {props.title}
                </CardTitle>
                <Separator/>
                <CardDescription className="lg:text-base md:text-base sm:text-xs">
                    {props.description[0].substring(0,97)}...
                    <BottomDrawer info = {props}/>
                </CardDescription>                
            </CardHeader>
            <CardContent>
                <div>
                    <img src={props.source} alt={props.title+" Website Preview"} className="lg:max-h-[30vw] lg:max-w-[30vw] md:max-h-[40vw] md:max-w-[40vw] sm:max-h-[45vw] sm:max-w-[45vw] rounded-lg border border-black" />                
                </div>                    
            </CardContent>
            <CardFooter className="text-xs flex gap-4">
                <Link href={props.github} target="blank">
                    <Code/>
                </Link>
                <Link href={props.deployed} target="blank">
                    <ExternalLink/>
                </Link>        
                {/* {props.github} 
                <br />
                {props.deployed}  */}
            </CardFooter>            
        </Card>
    )
}