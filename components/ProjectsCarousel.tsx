"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shadcn-components/ui/carousel"

export interface ProjectData{
    title:string;
    source:string;
    description:string[];
    deployed:string;
    github:string;
    tags:string[];
}

import ProjectCard from './ProjectCard';

const projects:ProjectData[] = [
    {
        title: "Dealsdash",
        source: '/dealsdash.webp',
        description: [
            "DealsDash is a web app that scrapes Amazon for a given product link and notifies you by email when the price drops. It uses CRON Job to check the price periodically and nodemailer to send the email. DealsDash is built with Next.js, Tailwind, and MongoDB.",
            "A web app that scrapes Amazon for price drops and emails you. Built with Next.js, Tailwind, and MongoDB.", // 16 words
            "Amazon price drop scraper and notifier with web technologies.", // 8 words
        ],
        deployed: "https://dealsdash.vercel.app",
        github: "https://github.com/techlism/dealsdash",
        tags: ["Nextjs","TailwindCSS","BrightData"]
    },
    {
        title: "ImageSage",
        source: '/imagesage.webp',
        description:[
            "ImageSage is a web app that lets you search, download, and organize images from various sources. You can use Auth0 to sign in and access features like favorites and history. ImageSage is built with React, Node.js, and MongoDB.", // 100 words
            "A web app for image search, download, and organization, with Auth0 and React, Node.js, and MongoDB.", // 15 words
            "Image search and management with Auth0 and web technologies.", // 8 words
        ],
        deployed: "https://imagesage.netlify.app",
        github: "https://github.com/techlism/imagesage-frontend",
        tags: ["React", "Nodejs", "MongoDB","Auth0"]
    },
    {
        title: "Custom Home-Page",
        source: '/homepage.webp',
        description:[
            "Custom Homepage is a web app that displays a personalized homepage with weather and stock market data. It uses Next.js and CSS for the design and framework and some APIs for fetching the weather and sensex and s&p 500 data. Custom Homepage is a simple and elegant way to start your day.", // 100 words
            "A web app that shows a homepage with weather and stock data. Built with Next.js, CSS, and APIs.", // 16 words
            "Homepage with weather and stock data using web technologies.", // 8 words
        ],
        deployed: "https://homepage-nine-opal.vercel.app/",
        github: "https://github.com/techlism/custom-homepage-nextjs",
        tags: ["Nextjs", "WeatherAPI"]
    },    
    {
        title: "LearnJs",
        source: '/learnjs.webp',
        description: [
            "LearnJs is a website that helps you learn JavaScript with code snippets hosted on Pastebin. Each snippet has comments and reference links to explain the concepts and syntax. LearnJs is a simple and effective way to master JavaScript.", // 100 words
            "A website to learn JavaScript with Pastebin snippets, comments, and references.", // 12 words
            "JavaScript learning with Pastebin snippets.", // 6 words
        ],
        deployed: "https://learnjs.techlism.in",
        github: "https://github.com/techlism/Js-Project",
        tags: ["HTML","CSS","Pastebin"]
    },
]


export default function ProjectsCarousel(){
    return(
        <div id="projects">
        <Carousel className="max-w-[75vw] mt-10">
        <h1 className="text-4xl m-2 font-bold">Projects</h1>
            <CarouselContent className="lg:max-w-[57vw] max-w-[73vw]">                
                {projects.map((project,index)=>(
                    <CarouselItem className="lg:max-w-[54.8vw] max-w-[72vw] "key={index+'carousel'}>
                        <ProjectCard {...project} />
                    </CarouselItem> 
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
    )
}
  