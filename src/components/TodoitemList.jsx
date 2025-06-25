import Todoitem from "./Todoitem";
import styles from"./Todoitem.module.css";

const TodoitemList = ({ todo_items, onDeleteClick }) => {         
    return (
        <>
        <div className={styles.listAddbutton}>
            { todo_items.map((item, index) => (
                <Todoitem key={index} todoname={item.name} tododate={item.dueDate} onDeleteClick={onDeleteClick}></Todoitem>
            )) }
        </div>
        </>
    );
}; 

export default TodoitemList;
          