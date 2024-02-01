"use client";

import BlinkingCode from "./blinking-code";
import React from "react";

const TerminalDisplay: React.FC<{
	info: Record<string, string | string[]>;
}> = ({ info }) => {
	const renderLink = (item: string) => {
		switch (item) {
			case "omarassouma01@gmail.com":
				return (
					<a
						href={`mailto:${item}`}
						key={item}
						className="text-blue-400 hover:text-blue-600"
					>
						{item}
					</a>
				);
			case "linkedin":
				return (
					<a
						href="https://www.linkedin.com/in/omar-assouma-a60275210/"
						target="_blank"
						rel="noopener noreferrer"
						key="LinkedIn"
						className="text-blue-400 hover:text-blue-600"
					>
						LinkedIn
					</a>
				);
			case "github":
				return (
					<a
						href="https://github.com/assoumaaa"
						target="_blank"
						rel="noopener noreferrer"
						key="GitHub"
						className="text-blue-400 hover:text-blue-600"
					>
						GitHub
					</a>
				);
			case "omar_cv.pdf":
				return (
					<a
						href="/cv.pdf"
						download
						key="DownloadCV"
						className="text-pink-400 hover:text-purple-600"
					>
						omar_cv.pdf
					</a>
				);
			default:
				return <span key={item}>{item}</span>;
		}
	};
	return (
		<div className="bg-black p-4 rounded-md font-mono text-sm overflow-x-auto">
			<div className="flex items-center justify-start space-x-2 mb-4">
				<div className="w-3 h-3 bg-red-500 rounded-full"></div>
				<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
				<div className="w-3 h-3 bg-green-500 rounded-full"></div>
			</div>
			{Object.entries(info).map(([key, value], index) => (
				<div key={key} className={`${index !== 0 ? "mt-6" : ""} p-2`}>
					<p className="text-green-400">&gt; Omar.{key}</p>
					<div className="text-white">
						{Array.isArray(value) ? (
							<span>
								[
								{value.map((item, idx) => (
									<React.Fragment key={idx}>
										{idx > 0 ? ", " : ""}
										{renderLink(item)}
									</React.Fragment>
								))}
								]
							</span>
						) : (
							renderLink(value)
						)}
					</div>
				</div>
			))}
			<div className="flex items-center mt-4 p-2">
				<div className="text-green-400">
					&gt; <BlinkingCode color="bg-green-400" size="h-4 w-2" />
				</div>
			</div>
		</div>
	);
};

export default TerminalDisplay;
