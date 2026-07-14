import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import "./header.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

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

	const MobileMenuList = (
		<nav className="mobile-navigation">
			<ul>
				{list.map((listItem) => {
					return <li>{listItem.label.toUpperCase()}</li>;
				})}
			</ul>
		</nav>
	);

	return (
		<>
			<div className="container">
				<h1 className="title">Jonathan Jonsson</h1>
				{width > 960 ? (
					MenuList
				) : (
					<IoMenuSharp
						onClick={() => setDropdown(!showDropdown)}
						className="icon icon-menu"
					/>
				)}
			</div>
			<div className="dropdown-menu">
				<IoCloseSharp className="icon icon-close" />
				{MobileMenuList}
			</div>
		</>
	);
}
