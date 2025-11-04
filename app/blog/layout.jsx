import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function BlogLayout({ children }) {
	return (
		<main className="flex justify-center min-h-screen">
			<div className="flex flex-col w-full max-w-5xl gap-12 sm:gap-24">
				<Navbar />
				{children}
				<Footer />
			</div>
		</main>
	);
}
