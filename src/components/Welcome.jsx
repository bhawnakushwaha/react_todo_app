import styles from "./Welcome.module.css";

const Welcome = ({ todo_items }) =>{
    return todo_items.length === 0 && (
        <div style={{ textAlign: "center" }}>
            <p className={styles.welcome}>No tasks, let's add & increase productivity!🌟</p>
        </div>    
    )
}

export default Welcome;