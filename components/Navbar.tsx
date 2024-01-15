"use client"
import {
    Menubar,
    MenubarTrigger,
} from "@/shadcn-components/ui/menubar"

// import DarkModeToggler from './DarkModeToggler';
import { Button } from "@/shadcn-components/ui/button";
import DarkModeSwitch from "./DarkModeToggler";

export default function Navbar(){
    return(
        <nav className="w-[90vw]">
            <Menubar className="flex content-center justify-evenly p-6">
            <Button variant={'ghost'}>
                Link
            </Button>    
            <DarkModeSwitch/>     
            </Menubar>     
        </nav>
    )
}