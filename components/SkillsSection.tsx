'use client'

import { Cplusplus } from '@styled-icons/simple-icons/Cplusplus';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { NodeJs } from '@styled-icons/fa-brands/NodeJs';
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
// import {Adobe} from '@styled-icons/boxicons-logos/Adobe';
import {TailwindCss} from '@styled-icons/boxicons-logos/TailwindCss';

import { Card, CardContent, CardFooter, CardTitle, CardHeader, CardDescription } from '@/shadcn-components/ui/card';
import { Separator } from '@/shadcn-components/ui/separator';

const iconSize = 40 ;

const SkillsSection: React.FC = () => {
  return (
    <Card className='m-4 mt-10 mb-0 lg:max-w-[59vw] max-w-[91vw] md:max-w-[70vw]' id='skills'>
        <CardContent>
            <CardHeader>
                <CardTitle className="lg:text-3xl md:text-2xl sm:text-base">
                    Skills
                </CardTitle>
            </CardHeader>

            <Separator/>
            <CardFooter  className="flex flex-wrap gap-3 p-4 content-center justify-center custom-font-color">
                {/* <Cplusplus size={iconSize} />
                <Python size={iconSize} />                                
                <Html5 size={iconSize} />
                <Css3 size={iconSize} />
                <Javascript size={iconSize}  className='rounded-lg'/>
                <ReactLogo size={iconSize} />
                <NodeJs size={iconSize} />                
                <Mongodb size={iconSize} />
                <Linux size={iconSize} />
                <Git size={iconSize} />
                <Typescript size={iconSize} />
                <Nextdotjs size={iconSize} />                
                <Canva size={iconSize} />
                <Adobe size={iconSize} /> 
                <Adobe size={iconSize} />  */}
                <Card className='auto-gradient'>
                <CardContent>
                    <CardHeader>
                    <CardTitle>
                        Markup & Stylesheet Languages
                    </CardTitle>
                    </CardHeader>
                    <CardFooter className='flex align-middle justify-center gap-2 '>
                        <Html5 size={iconSize} />
                        <Css3 size={iconSize} />
                        <TailwindCss size={iconSize} />
                    </CardFooter>
                </CardContent>
                </Card>

                <Card className='auto-gradient'>
                <CardContent>
                    <CardHeader>
                    <CardTitle>
                        Programming Languages
                    </CardTitle>
                    </CardHeader>
                    <CardFooter className='flex align-middle justify-center gap-2 '>
                        <Cplusplus size={iconSize} />
                        <Python size={iconSize} />
                        <Javascript size={iconSize} className='rounded-lg'/>
                        <Typescript size={iconSize} />
                    </CardFooter>
                </CardContent>
                </Card>

                <Card className='auto-gradient'>
                <CardContent>
                    <CardHeader>
                    <CardTitle>
                        Libraries and Frameworks
                    </CardTitle>
                    </CardHeader>
                    <CardFooter className='flex align-middle justify-center gap-2 '>
                        <ReactLogo size={iconSize} />
                        <NodeJs size={iconSize} />
                        <Nextdotjs size={iconSize} />
                    </CardFooter>
                    
                </CardContent>
                </Card>

                <Card className='auto-gradient'>
                <CardContent>
                    <CardHeader>
                    <CardTitle>
                        Databases
                    </CardTitle>
                    </CardHeader>
                    <CardFooter className='flex align-middle justify-center gap-2 '>
                        <Mongodb size={iconSize} />
                    </CardFooter>
                    
                </CardContent>
                </Card>

                <Card className='auto-gradient'>
                <CardContent>
                    <CardHeader>
                    <CardTitle>
                        Operating Systems
                    </CardTitle>
                    </CardHeader>
                    <CardFooter className='flex align-middle justify-center gap-3'>
                        <Linux size={iconSize} />
                    </CardFooter>
                    
                </CardContent>
                </Card>

                <Card className='auto-gradient'>
                <CardContent>
                    <CardHeader>
                    <CardTitle>
                        Version Control
                    </CardTitle>
                    </CardHeader>
                    <CardFooter className='flex align-middle justify-center gap-3'>
                        <Git size={iconSize} />
                    </CardFooter>
                    
                </CardContent>
                </Card>

                <Card className='auto-gradient'>
                <CardContent>
                    <CardHeader>
                    <CardTitle>
                        Design Tools
                    </CardTitle>
                    </CardHeader>
                    <CardFooter className='flex align-middle justify-center gap-3'>
                        <Canva size={iconSize} />
                        {/* <Adobe size={iconSize} /> */}
                    </CardFooter>                    
                </CardContent>
                </Card>                
            </CardFooter>
        </CardContent>
    </Card>
  );
};

export default SkillsSection;
