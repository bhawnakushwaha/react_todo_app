import { useState } from "react";

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


    return <div className="list-container">
    <form className="row grid-row" 
    onSubmit={handleOnButtonClick} >
          
          <div className="col-6">
            <input type="text" placeholder="Enter your today's goal" value={Additem} onChange={handleNameChange}/>
          </div>
          
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          
          <div className="col-2">
            <button type="submit" className="btn btn-primary add-button" >
              Add </button>
          </div>
 
    </form>
    </div>
}

export default Addtodo;

