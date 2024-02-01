import ContactMe from "@/components/contact-me";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
	return (
		<main className="flex justify-center min-h-screen">
			<div className="flex flex-col w-full max-w-5xl gap-12 sm:gap-24">
				<Navbar />
				<Intro />
				<Projects />
				<ContactMe />
				<Footer />
			</div>
		</main>
	);
}
