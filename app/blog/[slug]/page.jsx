import { getAllPostSlugs, getPostData } from "@/lib/blog";

import Link from "next/link";
import MDXContent from "@/components/mdx-content";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { serialize } from "next-mdx-remote/serialize";

export async function generateStaticParams() {
	const slugs = getAllPostSlugs();
	return slugs.map((slug) => ({
		slug,
	}));
}

export async function generateMetadata({ params }) {
	const post = getPostData(params.slug);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: `${post.title} | Omar Assouma's Blog`,
		description: post.description,
	};
}

export default async function BlogPostPage({ params }) {
	const post = getPostData(params.slug);

	if (!post) {
		notFound();
	}

	const mdxSource = await serialize(post.content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypeHighlight, rehypeRaw],
		},
	});

	return (
		<div className="flex flex-col gap-6 p-6 min-h-screen max-w-4xl mx-auto">
			<Link
				href="/blog"
				className="text-purple-400 hover:underline mb-4 inline-block"
			>
				← Back to Blog
			</Link>

			<article className="prose prose-lg dark:prose-invert max-w-none">
				<header className="mb-8">
					<h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
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
						<p className="text-xl text-muted-foreground mt-4">
							{post.description}
						</p>
					)}
				</header>

				<div className="prose prose-lg dark:prose-invert prose-purple max-w-none prose-headings:font-bold prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted">
					<MDXContent source={mdxSource} />
				</div>
			</article>
		</div>
	);
}
