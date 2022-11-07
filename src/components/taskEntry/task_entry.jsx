import { useState } from "react";
import styles from "./task_entry.module.css"

// method designed to get task from user
const AddTask=({addTodo})=>{ 
    const [value, setTask]= useState("");
    const handleSubmit = e=>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setTask("");
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <div className={styles.task_panel}>
            <input className={styles.task_box} type="text" value={value}  onChange={e=>setTask(e.target.value)} placeholder="add new todo"/>
            <button className={styles.task_button} type="submit">Add</button>
            </div>
        </form>
        </div>

    )
}













export default AddTask;





