/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { BsGithub } from "react-icons/bs"
import { useState } from 'react'
import AddTask from '../components/taskEntry/task_entry'
import Todo from '../components/Todo/todo'
import styles from '../styles/Home.module.css'
import { FcTodoList } from "react-icons/fc"




export default function Home() {
  const [todos, setTodos] = useState([
    {
      text: "",
      isDone: false
    }
  ]);
  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  }
  const markTodoDone = (index) => {
    const newTodo = [...todos];
    newTodo[index].isDone = true;
    setTodos(newTodo);
  }
  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{" Todo"}</title>
      </Head>

      <main className={styles.main}>
        <div>Todo list</div>
        <AddTask addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (<Todo key={index} index={index} todo={todo} markTodo={markTodoDone} deleteTodo={deleteTodo} />))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div
          href="https://github.com/manjeetkohar"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Presented by Manjeet   "}
          <BsGithub />
        </div>

      </footer>
    </div>
  )
}
