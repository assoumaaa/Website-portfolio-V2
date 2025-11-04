import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content", "blog");

function getPostFileNames() {
	if (!fs.existsSync(postsDirectory)) {
		return [];
	}
	return fs
		.readdirSync(postsDirectory)
		.filter((name) => name.endsWith(".mdx") || name.endsWith(".md"));
}

function getSlugFromFileName(fileName) {
	return fileName.replace(/\.mdx?$/, "");
}

function parsePostMetadata(fileName) {
	const slug = getSlugFromFileName(fileName);
	const fullPath = path.join(postsDirectory, fileName);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data } = matter(fileContents);

	return {
		slug,
		title: data.title ?? "Untitled",
		date: data.date ?? "",
		description: data.description ?? "",
	};
}

export function getSortedPostsData() {
	const fileNames = getPostFileNames();
	const posts = fileNames.map(parsePostMetadata);

	return posts.sort((a, b) => {
		if (!a.date || !b.date) {
			return 0;
		}
		return new Date(b.date) - new Date(a.date);
	});
}

export function getAllPostSlugs() {
	return getPostFileNames().map(getSlugFromFileName);
}

export function getPostData(slug) {
	const fileNames = getPostFileNames();
	const fileName = fileNames.find(
		(name) => getSlugFromFileName(name) === slug
	);

	if (!fileName) {
		return null;
	}

	try {
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			slug,
			title: data.title ?? "Untitled",
			date: data.date ?? "",
			description: data.description ?? "",
			content,
		};
	} catch (error) {
		console.error(`Error reading post ${slug}:`, error);
		return null;
	}
}
