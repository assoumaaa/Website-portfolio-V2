"use client";

import BlinkingCode from "./blinking-code";
import TerminalDisplay from "./terminal";

export default function Intro() {
	const myInfo = {
		education:
			"BE Computer Science Engineering - Sabanci Univeristy - Istanbul",
		skills: ["React", "Python", "Javascript", "TypeScript", "Next", "git"],
		currentLocation: "Dubai, UAE",
		contactInfo: ["omarassouma01@gmail.com", "linkedin", "github"],
		resume: "omar_cv.pdf",
	};

	return (
		<div className="flex flex-col gap-10 p-6">
			<h1 className="flex text-5xl tracking-wider">
				{">"} Omar Assouma
				<BlinkingCode size="h-14" />
			</h1>
			<h2 className="text-xl tracking-wide leading-9">
				I work as a Full Stack Engineer at Meikosoft, where I love using code to
				fix real-life problems. Right now, I'm focusing on building things with
				React and Python.
			</h2>
			<TerminalDisplay info={myInfo} />
		</div>
	);
}
