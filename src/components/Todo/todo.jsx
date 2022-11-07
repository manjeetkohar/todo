import styles from "./todo.module.css"
const Todo =({todo, index, markTodo, deleteTodo})=>{
    if (todo.text ==="" ||todo.text ===null ||todo.text === undefined) return null;
    return(
        <div className={styles.todo_list_panel}>
            <span className={styles.todo} style={{textDecoration:todo.isDone? "line-through" :""}}>{todo.text}</span>
            <button onClick={()=>markTodo(index)}>✓</button>
            <button onClick={()=>deleteTodo(index)}>✕</button>
        </div>
    )
}
export default Todo;