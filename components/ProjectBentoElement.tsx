import Link from 'next/link';
import { ProjectData } from '@/lib/projects';

import { ExpandIcon, ExternalLink, Github} from 'lucide-react';
import { BottomDrawer } from './BottomDrawer';
export default function ProjectBentoElement ({projectData}:{projectData : ProjectData}) {
    return (
        <div className={`flex items-center align-middle rounded-md auto-gradient text-active-100 text-left p-4 min-h-[150px] hover:text-active-50 hover:rounded-xl transition-all`} >            
            <div>
                <h2 className="font-bold text-4xl">{projectData.title}</h2>
                <p className='text-lg mt-2 font-medium' >{projectData.description[1]}</p>
                <div className='flex max-w-fit gap-4 mt-2 align-middle items-center'>                    
                    <Link href={projectData.github} target='_blank' className='hover:text-active-800'><Github size={30}/></Link>
                    <Link href={projectData.deployed} target='_blank' className='hover:text-active-800'><ExternalLink size={30}/></Link>
                    <BottomDrawer info={projectData} />
                </div>
            </div>
        </div>
  )
}