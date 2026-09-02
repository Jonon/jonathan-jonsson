import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./header.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";

export default function Header() {
	const { width } = useWindowDimensions();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	useEffect(() => {
		if (!isDropdownOpen) return;

		const preventScroll = (e: Event) => {
			e.preventDefault();
		};

		document.addEventListener("touchmove", preventScroll, { passive: false });
		document.addEventListener("wheel", preventScroll, { passive: false });

		return () => {
			document.removeEventListener("touchmove", preventScroll);
			document.removeEventListener("wheel", preventScroll);
		};
	}, [isDropdownOpen]);

	const list = [
		{ label: "Home" },
		{ label: "About" },
		{ label: "Projects" },
		{ label: "Contact" },
	];

	const MenuList = (
		<nav className={styles.navigation}>
			<ul>
				{list.map((listItem) => {
					return <li>{listItem.label.toUpperCase()}</li>;
				})}
			</ul>
		</nav>
	);

	const MobileMenuList = (
		<nav className={styles.navigation}>
			<ul>
				{list.map((listItem) => {
					return (
						<li>
							<span className={styles.mobileNavIndicator}></span>
							{listItem.label.toUpperCase()}
						</li>
					);
				})}
			</ul>
		</nav>
	);

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>Jonathan Jonsson</h1>
				{width > 960 ? (
					MenuList
				) : (
					<IoMenuSharp
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className={`icon ${styles.iconMenu}`}
					/>
				)}
			</div>
			<div className={isDropdownOpen ? styles.overlay : ""}></div>
			<div
				className={
					isDropdownOpen ? styles.dropdownMenu : styles.dropdownMenuDisplay
				}
			>
				<IoCloseSharp
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					className={`icon ${styles.iconClose}`}
				/>
				{MobileMenuList}
			</div>
		</>
	);
}
