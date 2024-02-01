"use client";

import { Badge } from "./ui/badge";
import Image from "next/image";
import LaptopScreen from "./laptopScreen";
import React from "react";

interface ProjectCardProps {
	src: string;
	alt: string;
	children: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, alt, children }) => (
	<div className="relative" style={{ height: 280, width: 480, padding: 1.5 }}>
		<Image
			src={src}
			alt={alt}
			layout="fill"
			objectFit="cover"
			className="rounded-md"
		/>
		<div className="absolute bottom-0 left-0 right-0 h-3/4 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-gray to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-md">
			{children}
		</div>
	</div>
);
export default function Projects() {
	return (
		<div className="flex flex-col gap-10">
			<h1 className="flex items-center justify-center text-3xl tracking-wider">
				Projects
			</h1>
			<div className="grid gap-8 sm:grid-cols-2">
				<ProjectCard src="/projects/innovateX.png" alt="innovateX">
					<div className="flex flex-col gap-3">
						<p className="text-white text-lg font-bold">InnovateX</p>
						<p className="text-gray-300 text-xs mb-2">
							A platform for innovation.
						</p>
						<div className="flex gap-2">
							<Badge variant={"destructive"}>React</Badge>
							<Badge variant={"destructive"}>Scss</Badge>
							<Badge variant={"destructive"}>Firebase</Badge>
						</div>
					</div>
				</ProjectCard>
				<ProjectCard src="/projects/spotify.png" alt="spotify">
					<div className="flex flex-col gap-3">
						<p className="text-white text-lg font-bold">Spotify Analyser</p>
						<p className="text-gray-300 text-xs mb-2">
							Find out your best artists and tracks.
						</p>
						<div className="flex gap-2">
							<Badge variant={"destructive"}>React</Badge>
							<Badge variant={"destructive"}>Express</Badge>
							<Badge variant={"destructive"}>Spotify API</Badge>
						</div>
					</div>
				</ProjectCard>
				<ProjectCard src="/projects/spotify.png" alt="spotify">
					<div className="flex flex-col gap-3">
						<p className="text-white text-lg font-bold">Spotify Analyser</p>
						<p className="text-gray-300 text-xs mb-2">
							Find out your best artists and tracks.
						</p>
						<div className="flex gap-2">
							<Badge variant={"destructive"}>React</Badge>
							<Badge variant={"destructive"}>Express</Badge>
							<Badge variant={"destructive"}>Spotify API</Badge>
						</div>
					</div>
				</ProjectCard>
				<ProjectCard src="/projects/spotify.png" alt="spotify">
					<div className="flex flex-col gap-3">
						<p className="text-white text-lg font-bold">Spotify Analyser</p>
						<p className="text-gray-300 text-xs mb-2">
							Find out your best artists and tracks.
						</p>
						<div className="flex gap-2">
							<Badge variant={"destructive"}>React</Badge>
							<Badge variant={"destructive"}>Express</Badge>
							<Badge variant={"destructive"}>Spotify API</Badge>
						</div>
					</div>
				</ProjectCard>
			</div>
		</div>
	);
}
