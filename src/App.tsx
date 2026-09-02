import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

export default function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Intro />
				<About />
				<Skills />
			</main>
		</>
	);
}
