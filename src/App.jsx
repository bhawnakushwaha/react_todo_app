import Heading from "./components/heading";
import Addtodo from "./components/addtodo";
import TodoitemList from "./components/TodoitemList";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";



function App(){


// const initialtodo_items= [
//   {
//     name: "buy milk",
//     dueDate: "4/4/25",
//   },
//   {
//     name: "go to college",
//     dueDate: "5/4/25",
//   },
//   {
//     name: "out for play",
//     dueDate: "10/5/25",
//   },
//  ]

// const [todo_items, setTodoItem] = useState(initialtodo_items);

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
      { todo_items.length === 0 && <Welcome/> }  
      <TodoitemList todo_items={todo_items} onDeleteClick= { handleDelete } ></TodoitemList>
           
    </center>   
  );
}

export default App;

