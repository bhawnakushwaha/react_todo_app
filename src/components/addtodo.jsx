import { useState } from "react";
import styles from "./Addtodo.module.css";

function Addtodo({OnNewItem}){

const [Additem, setTodoName] = useState("");
const [dueDate, setDueDate] = useState("");

const handleNameChange = (event)=>{
  setTodoName(event.target.value);
};

const handleDateChange = (event)=>{
  setDueDate(event.target.value);
};

const handleOnButtonClick = (event)=>{
  event.preventDefault();
  OnNewItem(Additem, dueDate);
  setTodoName("");
  setDueDate("");
  
}

const today = new Date().toISOString().split("T")[0];

    return (
    <div className={styles["list-container"]}>
    <form className={`row ${styles["grid-row"]}`} 
    onSubmit={handleOnButtonClick} >
          
          <div className="col-6">
            <input type="text" placeholder="Enter your goal" value={Additem} onChange={handleNameChange} className="form-control"/>
          </div>
          
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange} className="form-control" min={today}/>
          </div>
          
          <div className="col-2">
            <button type="submit" className={`btn btn-primary ${styles["add-button"]}`} >
              Add </button>
          </div>
 
    </form>
    </div>
    );
}


export default Addtodo;

