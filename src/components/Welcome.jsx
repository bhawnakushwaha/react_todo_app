import styles from "./Welcome.module.css";

const Welcome = ({ todo_items }) =>{
    return todo_items.length === 0 && (
    <p className={styles.welcome}>Enjoy your day!</p>
    )
}

export default Welcome;