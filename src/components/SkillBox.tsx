import styles from "./skillBox.module.css";
import {
	FaFigma,
	FaGithub,
	FaHtml5,
	FaJs,
	FaReact,
	FaGitAlt,
} from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { SiPenpot } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import type { IconType } from "react-icons";

type IconName =
	| "html"
	| "css"
	| "javascript"
	| "typescript"
	| "figma"
	| "github"
	| "git"
	| "react"
	| "penpot";

interface SkillBoxProps {
	title: string;
	icon: IconName;
}

const icons: Record<IconName, IconType> = {
	html: FaHtml5,
	css: FaCss,
	javascript: FaJs,
	typescript: BsTypescript,
	figma: FaFigma,
	git: FaGitAlt,
	github: FaGithub,
	react: FaReact,
	penpot: SiPenpot,
};

export default function SkillBox({ title, icon }: SkillBoxProps) {
	const Icon = icons[icon];

	const capitalize = (value: string) =>
		value.charAt(0).toUpperCase() + value.slice(1);
	const modKey = `icon${capitalize(icon)}`;
	const modifier = (styles as Record<string, string>)[modKey];
	const boxClass = [styles.skillBox, modifier].filter(Boolean).join(" ");

	return (
		<div className={boxClass}>
			{icon && <Icon className={styles.icon} />}
			<span>{title}</span>
		</div>
	);
}
