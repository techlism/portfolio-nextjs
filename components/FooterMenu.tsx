'use client'

import { Button } from "@/shadcn-components/ui/button"
import { Menubar } from "@/shadcn-components/ui/menubar"
import { MoveUp, ExternalLinkIcon } from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/shadcn-components/ui/tooltip"

import Link from 'next/link';
export default function FooterMenu(){
    const scrollTo = (id: string) => {
        document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
    };
    return(
        <Menubar className="mt-10 m-2 p-7 gap-4 auto-gradient">
            <TooltipProvider>
                < Tooltip>
                    <TooltipTrigger asChild>    
                        <Button variant={'outline'} onClick={()=>scrollTo('navbar')}>
                            <MoveUp/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Go to Top
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Button variant={'outline'}>
                <Link href={'https://9172d8e7.techlism-portfolio.pages.dev/'} className="flex p-3 align-middle gap-1" target="blank">
                    <p className="text-[27px]">v1</p><ExternalLinkIcon/>
                </Link>
            </Button>
        </Menubar>
    )
}