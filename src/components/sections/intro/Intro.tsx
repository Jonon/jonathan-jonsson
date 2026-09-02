import Button from "../../ui/Button";
import styles from "./intro.module.css";
import Profile from "./Profile";

export default function Intro() {
	return (
		<div className={styles.introContainer}>
			<Profile />
			<section className={styles.introContent}>
				<h2 className={styles.title}>
					Hello there! <span>I'm Jonathan Jonsson.</span>
				</h2>
				<p>
					A Full-Stack Developer and Infrastructure Architect focused on
					building scholarly, precise, and human-centric technical environments
					for deep work.{" "}
				</p>

				<div className={styles.buttons}>
					<Button name="View Projects" variant="primary" />
					<Button name="Get in touch" variant="secondary" />
				</div>
			</section>
		</div>
	);
}
