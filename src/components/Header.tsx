import { IoMenuSharp } from "react-icons/io5";
import "./header.css";

export default function Header() {
	const { width } = useWindowDimensions();

	const list = [
		{ label: "Home" },
		{ label: "About" },
		{ label: "Projects" },
		{ label: "Contact" },
	];

	const MenuList = (
		<nav className="navigation">
			<ul>
				{list.map((listItem) => {
					return <li>{listItem.label.toUpperCase()}</li>;
				})}
			</ul>
		</nav>
	);

	return (
		<div className="container">
			<h1 className="title">Jonathan Jonsson</h1>
			<IoMenuSharp className="IoMenuSharp" />
		</div>
	);
}
