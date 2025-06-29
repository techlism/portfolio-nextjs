import Link from "next/link";

const navItems = {
  "/projects": { name: "Projects" },
  "/skills": { name: "Skills" }
};
// xl:w-full 2xl:w-full lg:w-[98%] md:w-[96%] w-[96.5%]
export function Navbar({ className }: { className?: string }) {
  return (
    <nav className={`${className}  max-w-5xl top-3 border dark:border-border/60 rounded-lg p-4 mx-1 xl:mx-auto xl:w-full backdrop-blur supports-[backdrop-filter]:bg-background/40 z-40 left-0 right-0 sticky`}>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          {"⌂"}
        </Link>

        <div className="grid grid-flow-col gap-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}