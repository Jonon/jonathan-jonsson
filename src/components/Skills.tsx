import SkillBox from "./SkillBox";
import styles from "./skills.module.css";

export default function Skills() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={"section-title"}>Skills</h2>
				<div className={styles.skillList}>
					<SkillBox icon="html" title="HTML" />
					<SkillBox icon="css" title="CSS" />
					<SkillBox icon="javascript" title="JavaScript" />
					<SkillBox icon="react" title="React" />
					<SkillBox icon="typescript" title="TypeScript" />
					<SkillBox icon="github" title="Github" />
					<SkillBox icon="git" title="Git" />
					<SkillBox icon="figma" title="Figma" />
					<SkillBox icon="penpot" title="Penpot" />
				</div>
			</div>
		</div>
	);
}
