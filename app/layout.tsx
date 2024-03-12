import "./globals.css";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const raleway = Raleway({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Omar Assouma",
	description: "My personal portfolio!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
