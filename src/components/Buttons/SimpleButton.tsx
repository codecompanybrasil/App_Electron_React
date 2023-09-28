import styles from "./Buttons.module.css";

type SimplesButtonProps = {
    text: string,
    onClick: () => void
}

function SimpleButton({ text, onClick }: SimplesButtonProps) {
    return (
        <>
            {onClick ? (
                <button onClick={onClick} className={styles.simple_button}>
                    {text}
                </button>
            ) : (
                <button className={styles.simple_button}>{text}</button>
            )}
        </>
    );
}

export default SimpleButton;
