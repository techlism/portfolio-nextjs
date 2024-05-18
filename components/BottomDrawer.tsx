'use client'
import * as React from "react"
import { ExpandIcon, Minimize2 } from 'lucide-react';
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

import { ProjectData } from "@/lib/projects";

import { Separator } from '@/shadcn-components/ui/separator';

export function BottomDrawer({info}:{info:ProjectData}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="m-0 p-0 hover:bg-transparent hover:text-active-800"><ExpandIcon size={30}/></Button>
      </DrawerTrigger>
      <DrawerContent className="bg-active-50 border-none dark:bg-inherit">
        <div className="mx-auto w-full max-w-lg flex flex-col align-middle justify-center gap-2">
          <DrawerHeader>
            <DrawerTitle className="text-4xl">{info.title}</DrawerTitle>
            <DrawerDescription className="text-justify p-1">
              {info.description[0]}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center">
            <Separator className="max-w-[92%] mx-auto mb-4"/>
          </div>
          <div className="max-w-[92%] mx-auto">
            <img src={info.source} alt={info.title} className="rounded-md border"/>
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
