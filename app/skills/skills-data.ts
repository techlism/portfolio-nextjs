export type Skills = {
    category: string;
    skills: string[];
}

export const skills: Skills[] = [
    {
        category: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Python", "C++", "C"]
    },
    {
        category : "Libraries & Frameworks",
        skills: ["React", "Next.js", "TailwindCSS", "Node.js"]
    },
    {
        category : "Databases",
        skills: ["SQLite", "MongoDB", "SQL"]
    },
    {
        category : "Tools & Technologies",
        skills: ["Git", "GitHub", "Vercel"]        
    },
    {
        category : "Operating Systems",
        skills: ["Windows", "Linux"]
    },
    {
        category : "Currently Learning",
        skills : ["Amazon Web Services", "Docker", "Kubernetes", "DevOps"]
    }
]