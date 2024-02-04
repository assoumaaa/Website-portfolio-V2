"use client";

import BlinkingCode from "./blinking-code";
import TerminalDisplay from "./terminal";

export default function Intro() {
	const myInfo = {
		education:
			"BE Computer Science Engineering - Sabanci Univeristy - Istanbul",
		skills: [
			"React",
			"Python",
			"Javascript",
			"TypeScript",
			"Next",
			"Postgresql",
			"MySQL",
			"Redis",
			"git",
		],
		currentLocation: "Dubai, UAE",
		contactInfo: ["omarassouma01@gmail.com", "linkedin", "github"],
		resume: "omar_cv.pdf",
	};

	return (
		<div className="flex flex-col gap-10 p-6">
			<h1 className="flex text-4xl tracking-wider sm:text-5xl">
				{">"} Omar Assouma
				<BlinkingCode size="h-12" color="bg-blue-400" />
			</h1>
			<h2 className="text-xl tracking-wide leading-9">
				I work as a Full Stack Engineer{" "}
				<span className="underline underline-offset-4 decoration-blue-400">
					@Meikosoft
				</span>
				, where I love using code to fix real-life problems. Right now, I&apos;m
				focusing on building things with React and Python.
			</h2>

			<TerminalDisplay info={myInfo} />
		</div>
	);
}
