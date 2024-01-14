'use client'

import { Cplusplus } from '@styled-icons/simple-icons/Cplusplus';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { NodeJs } from '@styled-icons/fa-brands/Nodejs';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { Python } from '@styled-icons/fa-brands/Python';
import { Html5 } from '@styled-icons/fa-brands/Html5';
import { Css3 } from '@styled-icons/fa-brands/Css3';
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';
import { Linux } from '@styled-icons/fa-brands/Linux';
import { Git } from '@styled-icons/fa-brands/Git';
import { Canva } from '@styled-icons/simple-icons/Canva';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs';
import {Adobe} from '@styled-icons/boxicons-logos/Adobe';

import { Card, CardContent, CardFooter, CardTitle, CardHeader } from '@/shadcn-components/ui/card';
import { Separator } from '@/shadcn-components/ui/separator';

const iconSize = 50 ;

const SkillsSection: React.FC = () => {
  return (
    <Card className='m-2 max-w-[85vw] auto-gradient'>
        <CardContent>
            <CardHeader>
                <CardTitle className="lg:text-3xl md:text-2xl sm:text-base">
                    Skills
                </CardTitle>
            </CardHeader>

            <Separator/>
            <CardFooter  className="grid grid-cols-3 md:grid-cols-5 lg:flex gap-4 p-4 content-center custom-font-color">
                <Cplusplus size={iconSize} />
                <Python size={iconSize} />                                
                <Html5 size={iconSize} />
                <Css3 size={iconSize} />
                <Javascript size={iconSize} />
                <ReactLogo size={iconSize} />
                <NodeJs size={iconSize} />                
                <Mongodb size={iconSize} />
                <Linux size={iconSize} />
                <Git size={iconSize} />
                <Typescript size={iconSize} />
                <Nextdotjs size={iconSize} />                
                <Canva size={iconSize} />
                <Adobe size={iconSize} /> 
                <Adobe size={iconSize} /> 
            </CardFooter>
        </CardContent>
    </Card>
  );
};

export default SkillsSection;
