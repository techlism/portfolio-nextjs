"use client"
import {
    Menubar,
    MenubarTrigger,
} from "@/shadcn-components/ui/menubar"

// import DarkModeToggler from './DarkModeToggler';
import { Button } from "@/shadcn-components/ui/button";
import DarkModeSwitch from './DarkModeToggler';
import Link from 'next/link';

export default function Navbar(){
    const handleClick = (id: string) => {
        document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
    };
        
    return(
        <nav className="w-[90vw] mx-auto rounded-md mt-3 glassmorphic" id="navbar">
            <Menubar className="flex content-center justify-evenly p-6">
                <Button variant="ghost" onClick={() => handleClick('projects')}>
                Projects
                </Button>
                <Button variant="ghost" onClick={() => handleClick('skills')}>
                Skills
                </Button>
                <Button variant="ghost" onClick={() => handleClick('contact')}>
                Contact Me
                </Button>
                <DarkModeSwitch/>
            </Menubar>     
        </nav>
    )
}