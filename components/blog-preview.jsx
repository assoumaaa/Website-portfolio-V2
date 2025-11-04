import BlinkingCode from "./blinking-code";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";

export default function BlogPreview() {
	const posts = getSortedPostsData().slice(0, 3);

	return (
		<div id="projects" className="flex flex-col w-full p-6 gap-10">
			<h1 className="flex text-2xl tracking-wider">{">"} Recent Posts</h1>

			{posts.length === 0 ? (
				<p className="text-muted-foreground">No blog posts yet.</p>
			) : (
				<div className="flex flex-col gap-8">
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="group flex flex-col gap-2 hover:opacity-80 transition-opacity"
						>
							<h2 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
								{post.title}
							</h2>
							{post.description && (
								<p className="text-muted-foreground text-sm leading-relaxed">
									{post.description}
								</p>
							)}
							{post.date && (
								<time className="text-xs text-muted-foreground mt-1">
									{new Date(post.date).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</time>
							)}
						</Link>
					))}
				</div>
			)}

			<Link
				href="/blog"
				className="text-sm text-purple-400 hover:underline mt-2"
			>
				View all posts →
			</Link>
		</div>
	);
}
