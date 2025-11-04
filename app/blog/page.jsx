import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";

export const metadata = {
	title: "Blog | Omar Assouma",
	description: "My blog posts and thoughts",
};

export default function BlogPage() {
	const posts = getSortedPostsData();

	return (
		<div className="flex flex-col gap-10 p-6 min-h-screen">
			<h1 className="text-4xl tracking-wider sm:text-5xl font-bold">Blog</h1>
			<p className="text-xl text-muted-foreground">
				Thoughts, tutorials, and updates from my journey as a software engineer.
			</p>

			{posts.length === 0 ? (
				<div className="flex flex-col gap-4 pt-8">
					<p className="text-lg">No blog posts yet. Check back soon!</p>
				</div>
			) : (
				<div className="flex flex-col gap-8 pt-8">
					{posts.map((post) => (
						<article
							key={post.slug}
							className="border-b border-border pb-8 last:border-b-0"
						>
							<Link
								href={`/blog/${post.slug}`}
								className="group block hover:opacity-80 transition-opacity"
							>
								<h2 className="text-2xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
									{post.title}
								</h2>
								{post.date && (
									<time className="text-sm text-muted-foreground">
										{new Date(post.date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</time>
								)}
								{post.description && (
									<p className="mt-3 text-muted-foreground">
										{post.description}
									</p>
								)}
							</Link>
						</article>
					))}
				</div>
			)}
		</div>
	);
}
