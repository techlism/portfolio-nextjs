'use client'
import * as React from "react"
import { Minimize2 } from 'lucide-react';
import { Button } from "@/shadcn-components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shadcn-components/ui/drawer"

import { Badge } from "@/shadcn-components/ui/badge";

import { ProjectData } from "./ProjectsCarousel"
import { Separator } from '@/shadcn-components/ui/separator';

export function BottomDrawer({info}:{info:ProjectData}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">Know more</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm flex flex-col align-middle justify-center gap-2">
          <DrawerHeader>
            <DrawerTitle>{info.title}</DrawerTitle>
            <DrawerDescription>
                <div>
                    <ul className="custom-font-color text-left">
                        {info.description.map((d,index)=>(
                            <li key={index+" description list"}>
                                {`-> ${d}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center">
            <Separator className="max-w-16"/>
          </div>
          <div className="flex gap-5 justify-center m-5">
            {info.tags.map((tag,index)=>(
                <Badge variant={"secondary"} key={index+"th badge"}>
                    {tag}
                </Badge>
            ))}
          </div>          
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">
                <Minimize2/>
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
