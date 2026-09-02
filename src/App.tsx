import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";

export default function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Intro />
				<About />
			</main>
		</>
	);
}
