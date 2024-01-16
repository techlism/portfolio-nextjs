'use client'

import { Card, CardTitle, CardHeader, CardContent, CardFooter } from '@/shadcn-components/ui/card';
import { Separator } from '@/shadcn-components/ui/separator';

export default function ExperienceSection() {
    return (
      <Card  className="auto-gradient">
        <CardHeader>
            <CardTitle className="lg:text-3xl md:text-2xl sm:text-base">Experience</CardTitle>
        </CardHeader>
        <div className='mx-6'>
            <Separator/>
        </div>        
        <CardContent className='mt-6 p-12 align-middle'>
        {/* <Separator/> */}
        <CardFooter>
        <div className="relative border-l border-gray-600 pl-4">
          <div className="absolute w-3 h-3 bg-foreground rounded-full -left-1.5 border border-gray-600" />
          <div className="mb-8 mt-1">
            <ClockIcon className=" w-5 h-5 inline-block mr-2 -mt-1" />
            <span className="font-semibold">Swabhyaas</span>
            <div className="text-gray-400 text-sm">Dec 2023 - Present</div>
          </div>
          <div
            className="absolute w-3 h-3 bg-foreground rounded-full -left-1.5 border border-gray-600"
            style={{
              opacity: 0.8,
              top: "calc(50% + 1.5rem)",
            }}
          />
          <div className="mt-1">
            <ClockIcon className=" w-5 h-5 inline-block mr-2 -mt-1" />
            <span className="font-semibold">ICISS, 2024</span>
            <div className="text-gray-400 text-sm">Jun 2023 - Dec 2023</div>
          </div>
        </div>
        </CardFooter>

        </CardContent>
      </Card>
    )
  }
  
function ClockIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
}
  