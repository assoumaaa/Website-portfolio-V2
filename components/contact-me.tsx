import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import BlinkingCode from "./blinking-code";
import { HiMiniDocumentArrowDown } from "react-icons/hi2";

export default function ContactMe() {
	return (
		<div id="contact" className="flex flex-col gap-10">
			<h1 className="flex text-2xl tracking-wider p-6">{">"} Contact Me</h1>
			<div className="flex items-center justify-evenly">
				<a
					href="https://www.linkedin.com/in/omar-assouma-a45275210/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-blue-600 items-center flex justify-center"
				>
					<FaLinkedin size={"1.5rem"} />
				</a>
				<a
					href="https://github.com/assoumaaa"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-blue-600 items-center flex justify-center"
				>
					<FaGithub size={"1.5rem"} />
				</a>
				<a
					href="mailto:omarassouma01@gmail.com"
					className="hover:text-blue-600 items-center flex justify-center"
				>
					<FaEnvelope size={"1.5rem"} />
				</a>
				<a
					href="/cv.pdf"
					download
					className="hover:text-blue-600 items-center flex justify-center"
				>
					<HiMiniDocumentArrowDown size={"1.5rem"} />
				</a>
			</div>
		</div>
	);
}
