import styles from "./todo.module.css"
const Todo =({todo, index, markTodo, deleteTodo})=>{
    if (todo.text ==="" ||todo.text ===null ||todo.text === undefined) return null;
    return(
        <div className={styles.main}>
            <div className={styles.todo_list_panel}>
            <span className={styles.todo} style={{textDecoration:todo.isDone? "line-through" :""}}>{todo.text}</span>
        </div>
        <div>
            <button className={styles.todo_done} onClick={()=>markTodo(index)}>✓</button>
            <button className={styles.todo_delete} onClick={()=>deleteTodo(index)}>✕</button>
        </div>
        </div>
    )
}
export default Todo;