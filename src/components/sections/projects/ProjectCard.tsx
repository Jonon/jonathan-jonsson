import type { ReactNode } from "react";
import styles from "./projectCard.module.css";
import Button from "../../ui/Button";

interface Project {
	title: string;
	summary: string;
	languages: Array<ReactNode>;
	github: string;
	website: string;
}

export default function ProjectCard({
	title,
	languages,
	summary,
	github,
	website,
}: Project) {
	return (
		<div className={styles.projectCard}>
			<h3>{title}</h3>
			<div>
				<ul className={styles.langList}>
					{languages.map((lang) => (
						<li>{lang}</li>
					))}
				</ul>
				<p>{summary}</p>
			</div>
			<div className={styles.buttons}>
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: "none" }}
				>
					<Button name="CODE" variant="tertiary" icon="github" />
				</a>
				<a
					href={website}
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: "none" }}
				>
					<Button
						name="OPEN"
						variant="tertiary"
						icon="externalLink"
						style={{
							backgroundColor: "var(--color-accent-600)",
						}}
					/>
				</a>
			</div>
		</div>
	);
}
