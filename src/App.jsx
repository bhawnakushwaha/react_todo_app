import Heading from "./components/heading";
import Addtodo from "./components/addtodo";
import TodoitemList from "./components/TodoitemList";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";




function App(){

const [todo_items, setTodoItem] = useState([]);


const HandleNewItem = (itemName, itemDuedate)=>{
  console.log(`new item is: ${itemName}, and due date is ${itemDuedate}`);   //for testing
  const newTodoItem = [
    ...todo_items,
    {name: itemName, dueDate: itemDuedate },
    
  ]
  setTodoItem(newTodoItem);
}

const handleDelete = (todoitemName) =>{
  const newTodoItem = todo_items.filter(item=>item.name !== todoitemName);
  setTodoItem(newTodoItem);
  console.log(`item deleted: ${todoitemName}`);   
}


  return(
    <center className="todo-container">
      <Heading/>
      <Addtodo OnNewItem = {HandleNewItem}/>
      <Welcome todo_items={todo_items} />  
      <TodoitemList todo_items={todo_items} onDeleteClick= { handleDelete } ></TodoitemList>
           
    </center>  
  );
}

export default App;

