import { useState } from "react";
import {v4 as uuivd4} from 'uuid';
export default function ToDo(){
   let[todos,setTodo]=useState([{task:"sample task",id:uuivd4()}]);//useState("sample task") causes error todos.map() was not applicable as todos wasnt considered array 
   let[newTodo,setNewTodo]=useState("");
   let updateNewTodo=(event)=>{
    setNewTodo(event.target.value);
   }
    
   let addNewTask=()=>{
   setTodo((prevTodo) => {
  return [...prevTodo, { task: newTodo, id: uuivd4() }];
});}
let deleteTodo=(id)=>{ 
let copy=todos.filter((todo)=>{return todo.id != id});
setTodo(copy);
};

  
        return(
          <div styles = {styles.container}>
            <h2 styles = {styles.heading}>My Todo List</h2>
            <div style={styles.inputdiv}> <input placeholder="write something" onChange={updateNewTodo}value={newTodo} styles = {styles.input}></input>
          <button onClick={addNewTask} style={styles.addButton}>Add Tasks</button></div>
          
          <br></br>
          <br></br>
          <br></br>
          <hr/>
          <ul style={styles.list}>
          {todos.map((todo)=>{return <li key={todo.id} style={styles.listItem}>
            <span>{todo.task}</span> <button onClick={()=>deleteTodo(todo.id)} style={styles.deleteButton}>Delete</button>
            
            </li>})} 
          </ul>
          </div>
        );
} 
const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#343a40",
  },
  
  inputdiv: {
  display: "flex",
  gap: "8px",
  marginBottom: "16px",
  alignItems: "center",
},
  input: {
  flex: 1,
  padding: "16px 16px",  
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  height: "50px",
},
  addButton: {
  padding: "4px 10px",     
  fontSize: "14px",        
  backgroundColor: "#4C9AE4",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  height: "32px",          
},
  list: {
    listStyle: "none",
    paddingLeft: "0",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 12px",
    marginBottom: "8px",
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid rgb(197, 217, 238)",
  },
  deleteButton: {
    backgroundColor: "#6C2393",
    color: "white",
    borderRadius: "4px",
    padding: "6px 10px",
    cursor: "pointer",
  },
};