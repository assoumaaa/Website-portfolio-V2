/** @type {import('next').NextConfig} */
const createMDX = require("@next/mdx");
const remarkGfm = require("remark-gfm");
const rehypeHighlight = require("rehype-highlight");
const rehypeRaw = require("rehype-raw");

const nextConfig = {
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeHighlight, rehypeRaw],
	},
});

module.exports = withMDX(nextConfig);
