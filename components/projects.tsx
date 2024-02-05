import { Badge } from "./ui/badge";
import BlinkingCode from "./blinking-code";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
	return (
		<div id="projects" className="flex flex-col w-full p-6 gap-10">
			<h1 className="flex text-2xl tracking-wider">{">"} Projects</h1>
			<div className="flex flex-col items-center justify-center gap-12 sm:flex-row">
				<Image
					src="/projects/deep-talks-logo.png"
					alt="Deep Talks Logo"
					width={125}
					height={125}
					style={{ borderRadius: "5%" }}
				/>
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-3xl">Deep Talks</h2>
					<Link
						href={"https://deep-talks.vercel.app/"}
						className="text-sm text-blue-400"
					>
						https://deep-talks.vercel.app/
					</Link>
					<span className="block">
						Deep Talks is a website that allows users to have deep conversations
						among their friends in a well order.
					</span>
					<div className="flex flex-wrap gap-4">
						<Badge>NextJS</Badge>
						<Badge>Tailwind</Badge>
						<Badge>Prisma</Badge>
						<Badge>MySQL</Badge>
					</div>
					<span className="flex items-center justify-end gap-2 text-sm">
						View More <FaArrowRightLong />
					</span>
				</div>
			</div>
			<Separator />
			<div className="flex flex-col items-center justify-center gap-20 sm:flex-row">
				<Image
					src="/projects/spotify-logo.png"
					alt="Spotify Logo"
					width={125}
					height={125}
					style={{ borderRadius: "5%" }}
				/>
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-3xl">Spotify Profile Analyser</h2>
					<Link
						href={"spotify-analyser.herokuapp.com"}
						className="text-sm text-blue-400"
					>
						spotify-analyser.herokuapp.com
					</Link>
					<span className="block">
						A web application that lets you track your top artists, top tracks,
						and find your top artists and tracks according to a specific time
						range, all while offering detailed features of each track and
						allowing you to play them directly on your Spotify account.
					</span>
					<div className="flex flex-wrap gap-4">
						<Badge>ReactJS</Badge>
						<Badge>Express</Badge>
						<Badge>Spotify API</Badge>
					</div>
					<span className="flex items-center justify-end gap-2 text-sm">
						View More <FaArrowRightLong />
					</span>
				</div>
			</div>
			<Separator />
			<div className="flex flex-col items-center justify-center gap-20 sm:flex-row">
				<Image
					src="/projects/gg-twitter-logo.png"
					alt="GG Twitter Logo"
					width={125}
					height={125}
					style={{ borderRadius: "5%" }}
				/>
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-3xl">GG Twitter</h2>
					<Link
						href={"https://ggtwitter.vercel.app/"}
						className="text-sm text-blue-400"
					>
						https://ggtwitter.vercel.app/
					</Link>
					<span className="block">
						GGtwitter is a platform that allows users to engage in conversations
						and share thoughts without fear of being banned or judged!
					</span>
					<div className="flex flex-wrap gap-4 ">
						<Badge>NextJS</Badge>
						<Badge>Tailwind</Badge>
						<Badge>Typescript</Badge>
						<Badge>TRPC</Badge>
						<Badge>Prisma</Badge>
						<Badge>MySQL</Badge>
						<Badge>Clerk</Badge>
					</div>
					<span className="flex items-center justify-end gap-2 text-sm">
						View More <FaArrowRightLong />
					</span>
				</div>
			</div>
			<Separator />
		</div>
	);
}
