'use client'

import { Card, CardTitle, CardHeader, CardContent, CardFooter } from '@/shadcn-components/ui/card';
import { Separator } from '@/shadcn-components/ui/separator';

export default function ExperienceSection() {
    return (
      <Card  className="bg-active-50 dark:bg-transparent mt-10 border rounded-lg p-2 shadow-[-2px_-2px_2px_2px_rgba(0,0,0,0.1),_2px_2px_2px_2px_rgba(45,78,255,0.15)] flex flex-col pb-4">
        <CardHeader>
            <CardTitle className="ml-1 text-5xl font-bold text-active-500">Experience</CardTitle>
        </CardHeader>
            <Separator className='max-w-[99%] bg-active-950 mx-auto'/>
        <CardContent className='align-middle mt-4 mb-0'>
        {/* <Separator/> */}
        <CardFooter className='p-0 ml-2'>
        <div className="relative border-l border-gray-600 pl-4">
          <div className="absolute w-3 h-3 bg-foreground rounded-full -left-1.5 border border-gray-600" />
          <div className=" mt-1">
            <ClockIcon className=" w-5 h-5 inline-block mr-2 -mt-1" />
            <span className="font-semibold text-active-950 dark:text-active-700">Swabhyaas</span>
            <div className="text-gray-400 text-sm">Dec 2023 - Feb 2024</div>
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
            <span className="font-semibold text-active-950 dark:text-active-700">ICISS, 2024</span>
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
  