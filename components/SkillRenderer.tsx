export default function SkillRenderer(
    { children }: { children: React.ReactElement }
){
    return(
        <div className="flex items-center align-middle rounded-md auto-gradient text-active-100 text-left p-4 min-h-[200px] hover:text-rose-50 hover:rounded-xl transition-all filter">
            {children}
        </div>    
    )
}