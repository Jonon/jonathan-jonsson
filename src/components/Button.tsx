import styles from "./button.module.css";

export default function button(props: {
	name: string;
	variant: "primary" | "secondary";
}) {
	const handleVariant = () =>
		props.variant === "primary"
			? styles.primary
			: props.variant === "secondary"
				? styles.secondary
				: "";

	return (
		<button className={`${styles.btn} ${handleVariant()}`}>{props.name}</button>
	);
}
