export interface ProjectData {
  title: string;
  description: string;
  deployed?: string;
  github?: string;
  tags: string[];
  year: string;
}

export const projects: ProjectData[] = [
  {
    title: "TrackJobs",
    description: "TrackJobs is a job tracking app alongside a Google Chrome Extension that allows users to keep track of their job applications and assist in auto filling. It provides a personalized dashboard to manage job applications, interviews, and offers. TrackJobs is built with Next.js, Tailwind, SQLite and TypeScript (Of course). Now it also supports Resume Building and Optimization.",
    deployed: "https://trackjobs.co",
    // github: "https://github.com/techlism/trackjobs",
    tags: ["Nextjs", "TailwindCSS", "SQLite", "Lucia", "ChatGPT"],
    year: "2024-Present"
  },
  {
    title: "Notedown",
    description: "Notedown is a self-host-friendly note-taking application built with Next.js and Supabase. It allows users to securely create, store, and manage their notes with encryption. The project is designed to be easily deployable on your own infrastructure.",
    deployed: "https://notedown-techlism.vercel.app",
    github: "https://github.com/techlism/notedown",
    tags: ["Nextjs", "Supabase", "TailwindCSS"],
    year: "2024"
  },
  {
    title: "ConviFi",
    description: "ConviFi is an all-in-one media conversion tool made using Next.js and Web Assembly. It performs all processing client-side without involving any server. ConvertFast supports various media types and formats, providing a seamless and efficient conversion experience.",
    deployed: "https://convifi.com",
    github: "https://github.com/techlism/convertfast",
    tags: ["Nextjs", "WebAssembly", "TailwindCSS"],
    year: "2024"
  },
  {
    title: "Dealsdash (Archived)",
    description: "DealsDash is a web app that scrapes Amazon for a given product link and notifies you by email when the price drops. It uses CRON Job to check the price periodically and nodemailer to send the email. DealsDash is built with Next.js, Tailwind, and MongoDB.",
    // deployed: "https://dealsdash.vercel.app",
    github: "https://github.com/techlism/dealsdash",
    tags: ["Nextjs", "TailwindCSS", "BrightData"],
    year: "2024"
  },
  {
    title: "My Links Live (Archived)",
    description: "My Links Live is an open-source alternative to Linktree, built using Next.js, Clerk and SQLite. It allows users to create and manage a personalized link page with various customization options.",
    // deployed: "https://my-links.live",
    github: "https://github.com/techlism/mylivelink",
    tags: ["Nextjs", "Clerk", "SQLite"],
    year: "2024"
  },
  {
    title: "ICISS 2024",
    description: "A website for the International Conference on Information Systems Security. Provides information about the conference, tracks, and speakers.",
    deployed: "https://iciss2024.in",
    github: "https://github.com/techlism/iciss-2024-website",
    tags: ["React", "Cloudflare Pages"],
    year: "2023"
  }
]