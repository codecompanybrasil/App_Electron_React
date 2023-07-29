import styles from './Buttons.module.css'

function SimpleButton({text, onClick}) {
    return (
        <>
            {onClick ? (
                <button onClick={onClick} className={styles.simple_button} >{text}</button>
            ) : (
                <button className={styles.simple_button} >{text}</button> 
            )}
            
        </>
    )
}

export default SimpleButton;