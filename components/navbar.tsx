"use client";

import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
	return (
		<nav className="w-full ">
			<div className="flex h-16 justify-end items-center">
				<div className="flex justify-evenly lg:justify-end text-lg items-center w-full sm:gap-20">
					<div className="flex gap-8">
						<h1>Projects</h1>
						<h1>Contact</h1>
					</div>
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
}
