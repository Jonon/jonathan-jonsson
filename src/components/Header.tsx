import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import "./header.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useState } from "react";

export default function Header() {
	const { width } = useWindowDimensions();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
					return (
						<li>
							<span className="mobile-nav-indicator"></span>
							{listItem.label.toUpperCase()}
						</li>
					);
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
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className="icon icon-menu"
					/>
				)}
			</div>

			<div
				className={isDropdownOpen ? "dropdown-menu" : "dropdown-menu-display"}
			>
				<IoCloseSharp
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					className="icon icon-close"
				/>
				{MobileMenuList}
			</div>
		</>
	);
}
