import type { ReactNode } from "react";
import styles from "./projectCard.module.css";
import Button from "../../ui/Button";

interface Project {
	title: string;
	summary: string;
	languages: Array<ReactNode>;
}

export default function ProjectCard({ title, languages, summary }: Project) {
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
				<Button name="CODE" variant="tertiary" icon="github" />
				<Button
					name="OPEN"
					variant="tertiary"
					icon="externalLink"
					style={{
						backgroundColor: "var(--color-accent-600)",
					}}
				/>
			</div>
		</div>
	);
}
