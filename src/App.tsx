import Header from "./components/layout/Header";
import About from "./components/sections/about/About";
import Intro from "./components/sections/intro/Intro";
import Projects from "./components/sections/projects/Projects";
import Skills from "./components/sections/skills/Skills";

export default function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Intro />
				<About />
				<Skills />
				<Projects />
			</main>
		</>
	);
}
