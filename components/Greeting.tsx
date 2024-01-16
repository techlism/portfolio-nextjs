"use client"
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Card,CardContent } from "@/shadcn-components/ui/card";
import { Separator } from '@/shadcn-components/ui/separator';

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
    <Card className="auto-gradient m-2 mb-0 mt-10 lg:max-w-[59vw] max-w-[91vw] md:max-w-[70vw] flex align-middle justify-start">
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
        <div className="lg:text-xl md:text-xl mt-3.5 sm:text-base custom-font-color font-medium">
            <p>{"->"} I’m <b>Kundan</b>, a Developer who seamlessly blends code and creativity to construct immersive digital experiences.</p>
            <p className="mt-3">{"->"} My work, a fusion of functionality and aesthetics, is shaped by my passion for content creation and photography.</p>
            <p className="mt-3">{"->"} Let’s join forces to bring <u>your ideas to life</u>, crafting a digital narrative that leaves a lasting impression.</p>
        </div>
      </CardContent>
    </Card>    
  );
}

export default Greeting;
