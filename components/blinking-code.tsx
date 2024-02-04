"use client";

import { cn } from "@/lib/utils";

export default function BlinkingCode({
	color,
	size,
}: {
	color?: string;
	size?: string;
}) {
	return (
		<div
			className={cn(
				"bg-gray-600 animate-blink w-6 h-8 inline-flex ",
				color,
				size
			)}
		></div>
	);
}
