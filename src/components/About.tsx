import styles from "./about.module.css";

export default function About() {
	return (
		<div className={styles.container}>
			<div>
				<h2 className={`section-title`}>About</h2>
				<p>
					What I love most is tinkering with projects where technology and
					creativity meet — that's where I thrive. Watching my projects grow,
					creating something entirely new, and seeing it come to life — that's
					the exciting part!
				</p>
				<p>
					I get especially pumped when working with React, leveraging its
					component-driven architecture to build scalable and maintainable user
					interfaces that feel intuitive and responsive.
				</p>
			</div>
		</div>
	);
}
