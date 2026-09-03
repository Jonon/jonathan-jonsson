import styles from "./button.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

const icons: Record<IconName, IconType> = {
	github: FaGithub,
	externalLink: FaExternalLinkAlt,
};

interface Button {
	name: string;
	variant: "primary" | "secondary" | "tertiary";
	icon?: IconName;
	style?: React.CSSProperties;
}

type IconName = "github" | "externalLink";

export default function button({ name, variant, icon, style }: Button) {
	const Icon = icon ? icons[icon] : null;
	const handleVariant = () => {
		switch (variant) {
			case "primary":
				return styles.primary;
			case "secondary":
				return styles.secondary;
			case "tertiary":
				return styles.tertiary;
			default:
				return "";
		}
	};

	return (
		<button
			type="button"
			className={`${styles.btn} ${handleVariant()}`}
			style={style}
		>
			{variant === "tertiary" && Icon ? <Icon className={styles.icon} /> : null}

			{name}
		</button>
	);
}
