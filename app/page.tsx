import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">
        Hi there! I'm Kundan.
      </h1>

      <div className="prose prose-neutral dark:prose-invert text-left lg:text-lg md:text-md text-base">
        <p>
        A software engineer with a passion for problem-solving and a love for programming. I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, I'm exploring the great outdoors. Just kidding! You'll most likely find me watching YouTube.
        </p>
        <p className="mt-4">
          My past experiences include working with a variety of programming languages and technologies at two different companies. I have a strong foundation in computer science and software development.
        </p>
        <p className="mt-4">
          I am available for full-time, part-time, and freelancing roles. If you have a project or a role that you want to get started, or think you need my help with something, or just fancy saying hey, then just get in <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:underline font-semibold text-lg">touch</a>.
        </p>
      </div>
    </section>
  );
}
