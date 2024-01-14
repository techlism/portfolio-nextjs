"use client"
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Card,CardContent, CardDescription } from "@/shadcn-components/ui/card";
import { Separator } from '@/shadcn-components/ui/separator';
import { ArrowRight } from "lucide-react";

const greetings = [
 "Hello",
 "नमस्कार",
 "Hola",
 "Bonjour",
 "Ciao"
];



function Greeting() {
  const [index,setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(timer);
  });

  return (
    <Card className="auto-gradient m-2 max-w-[85vw] flex align-middle justify-start">
      <CardContent> 
        <div className="flex align-middle w-fit">
          <Transition
            show={true}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <h1 className={`text-[55px] lg:text-[125px] md:text-[90px] custom-font custom-font-color`}>
              {greetings[index]}
            </h1>
          </Transition>
        </div>
        <Separator/>
        <div className="text-xl mt-3.5 custom-font-color font-medium">
            {/* <header className="inline"> */}
              {"->"} I’m <b>Kundan</b>, a Developer who seamlessly blends code and creativity to construct immersive digital experiences.<br/> {"->"} My work, a fusion of functionality and aesthetics, is shaped by my passion for content creation and photography.<br/> {"->"} Let’s join forces to bring your ideas to life, crafting a digital narrative that leaves a lasting impression.
            {/* </header> */}
        </div>
      </CardContent>
    </Card>    
  );
}

export default Greeting;
