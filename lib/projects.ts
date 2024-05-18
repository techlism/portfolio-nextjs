export interface ProjectData{
    title:string;
    source:string;
    description:string[];
    deployed:string;
    github:string;
    tags:string[];
}

export const projects: ProjectData[] = [
    {
        title: "ConvertFast",
        source: "https://r2.my-links.live/convertfast-og.png",
        description: [
            "ConvertFast is an all-in-one media conversion tool made using Next.js and Web Assembly. It performs all processing client-side without involving any server. ConvertFast supports various media types and formats, providing a seamless and efficient conversion experience.",
            "An all-in-one media conversion tool using Next.js and Web Assembly, with client-side processing.", // 16 words
            "Media conversion tool with Next.js and Web Assembly.", // 8 words
        ],
        deployed: "https://convertfast.media",
        github: "https://github.com/techlism/convertfast",
        tags: ["Nextjs", "WebAssembly", "TailwindCSS"]
    },  
    {
        title: "Dealsdash",
        source: '/dealsdash.webp',
        description: [
            "DealsDash is a web app that scrapes Amazon for a given product link and notifies you by email when the price drops. It uses CRON Job to check the price periodically and nodemailer to send the email. DealsDash is built with Next.js, Tailwind, and MongoDB.",
            "A web app that scrapes Amazon for price drops and emails you. Built with Next.js, Tailwind, and MongoDB.", // 16 words
            "Amazon price drop scraper and notifier with web technologies.", // 8 words
        ],
        deployed: "https://dealsdash.vercel.app",
        github: "https://github.com/techlism/dealsdash",
        tags: ["Nextjs", "TailwindCSS", "BrightData"]
    },
    {
        title: "ImageSage",
        source: '/imagesage.webp',
        description: [
            "ImageSage is a web app that lets you search, download, and organize images from various sources. You can use Auth0 to sign in and access features like favorites and history. ImageSage is built with React, Node.js, and MongoDB.",
            "A web app for image search, download, and organization, with Auth0 and React, Node.js, and MongoDB.", // 15 words
            "Image search and management with Auth0 and web technologies.", // 8 words
        ],
        deployed: "https://imagesage.netlify.app",
        github: "https://github.com/techlism/imagesage-frontend",
        tags: ["React", "Nodejs", "MongoDB", "Auth0"]
    },    
    {
        title: "LearnJs",
        source: '/learnjs.webp',
        description: [
            "LearnJs is a website that helps you learn JavaScript with code snippets hosted on Pastebin. Each snippet has comments and reference links to explain the concepts and syntax. LearnJs is a simple and effective way to master JavaScript.",
            "A website to learn JavaScript with Pastebin snippets, comments, and references.", // 12 words
            "JavaScript learning with Pastebin snippets.", // 6 words
        ],
        deployed: "https://learnjs.techlism.in",
        github: "https://github.com/techlism/Js-Project",
        tags: ["HTML", "CSS", "Pastebin"]
    },
    {
        title: "My Links Live",
        source: "https://my-links.live/ogmylinkslive.png",
        description: [
            "My Links Live is an open-source alternative to Linktree, built using Next.js (with the App Router), Clerk for authentication, and SQLite for the database. It allows users to create and manage a personalized link page with various customization options.",
            "An open-source alternative to Linktree built with Next.js, Clerk, and SQLite.", // 12 words
            "Linktree alternative with Next.js, Clerk, and SQLite.", // 6 words
        ],
        deployed: "https://my-links.live",
        github: "https://github.com/techlism/mylivelink",
        tags: ["Nextjs", "Clerk", "SQLite"]
    },   
    {
        title: "Custom Home-Page",
        source: '/homepage.webp',
        description: [
            "Custom Homepage is a web app that displays a personalized homepage with weather and stock market data. It uses Next.js and CSS for the design and framework and some APIs for fetching the weather and sensex and s&p 500 data. Custom Homepage is a simple and elegant way to start your day.",
            "A web app that shows a homepage with weather and stock data. Built with Next.js, CSS, and APIs.", // 16 words
            "Homepage with weather and stock data using web technologies.", // 8 words
        ],
        deployed: "https://homepage-nine-opal.vercel.app/",
        github: "https://github.com/techlism/custom-homepage-nextjs",
        tags: ["Nextjs", "WeatherAPI", "RestAPI"]
    },       
]
