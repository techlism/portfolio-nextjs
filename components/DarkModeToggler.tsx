"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shadcn-components/ui/tooltip"

import { Button } from "@/shadcn-components/ui/button"

const DarkModeSwitch = () =>{  
  const { theme, setTheme } = useTheme();
  const changeTheme = () =>{
    if(theme==='light') setTheme('dark')
    if(theme==='dark') setTheme('light');
  }

  return(
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>    
        <Button variant="outline" size="icon" onClick={changeTheme} className="transition-colors duration-200">
          { theme==='light' ? 
            <Moon />
            :
            <Sun  />
          }
        </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch to {theme==='dark' ? 'Light' : 'Dark'} mode</p>
        </TooltipContent>
        </Tooltip>
        </TooltipProvider>   
  )
}
export default DarkModeSwitch;
