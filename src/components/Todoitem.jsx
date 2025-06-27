import styles from "./Todoitem.module.css"

function Todoitem({todoname, tododate, onDeleteClick}){


    return (
    <div className={styles["list-container"]}>
        <div className={`row ${styles["item-row"]}`}>
        <div className={`col-6 ${styles["item-name"]}`}>{todoname}</div>
        <div className={`col-4 ${styles["item-date"]}`}>{tododate}</div>
        <div className="col-2">
            <button
                type="button"
                className={styles["done-button"]}
                onClick={() => onDeleteClick(todoname)}
            >
                Done
            </button>
        </div>
    </div>
    </div>
    );
}

export default Todoitem;