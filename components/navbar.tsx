"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
	return (
		<nav className="w-full ">
			<div className="flex h-16 justify-end items-center">
				<div className="flex justify-evenly lg:justify-end text-lg items-center w-full sm:gap-20">
					<div className="flex gap-8">
						<Link href={"#projects"}>Projects</Link>
						<Link href={"#contact"}>Contact</Link>
					</div>
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
}
