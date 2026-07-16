import styles from "./profile.module.css";

export default function Profile() {
	return (
		<header className={styles.introHeader}>
			<img
				className={styles.profilePicture}
				src="./src/assets/1548607367732.jpg"
				alt="Jonathan Jonsson in profile"
			/>
			<p className={styles.jobTitle}>FULLSTACK WEB DEVELOPER</p>
		</header>
	);
}
