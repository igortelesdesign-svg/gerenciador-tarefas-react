import { useState, useEffect } from "react"

import PageDefault from "../../templates/PageDefault.jsx"
import TaskList from "../../molecules/TaskList.jsx"
import TaskForm from "../../organisms/TaskForm"
import TaskCounter from "../../atoms/TaskCounter.jsx"

import styleTasks from "./Tasks.module.css"

const Tasks = ()=>{

    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        const tasksSaved = JSON.parse(localStorage.getItem("tasks"))
        if(tasksSaved){
            setTasks(tasksSaved)
        }
    },[])

    useEffect(()=>{
        if(tasks.length >= 0){
            localStorage.setItem("tasks",JSON.stringify(tasks))
        }
    }, [tasks])

    return(
        <PageDefault>
            <section className={styleTasks.container}>
                <h1>📋 Gerenciamento de Tarefas</h1>
                <TaskForm 
                    setTasks={setTasks} 
                    tasks={tasks}
                />
                <TaskCounter
                    tasks={tasks}
                />
                <TaskList 
                    tasks={tasks}
                    setTasks={setTasks} 
                    style={styleTasks.listTasks}
                />
            </section>
        </PageDefault>
    )
}

export default Tasks
