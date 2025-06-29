// app/skills/page.tsx
import type { Metadata } from "next";
import { skills } from "./skills-data";

export const metadata: Metadata = {
	title: "Skills",
	description: "My Technical Skills",
};

export default function Skills() {
	return (
		<main>
			<h1 className="text-5xl my-6 font-bold tracking-tight">Skills</h1>
			<div className="gap-4">
				{skills.map((skillCategory) => (
					<div key={skillCategory.category} className="flex flex-col mt-2">
						<h2 className="text-lg  font-medium tracking-tight mb-4">
							{skillCategory.category}
						</h2>
						<div className="flex flex-wrap gap-2">
							{skillCategory.skills.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-sm rounded-md text-gray-800 dark:text-gray-100"
								>
									{skill}
								</span>
							))}
						</div>
						<hr className="border-gray-200 dark:border-gray-700 mt-2" />
					</div>
				))}
			</div>
		</main>
	);
}