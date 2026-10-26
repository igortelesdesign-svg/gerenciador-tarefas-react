import { useState } from "react"
import styleTaskForm from "./TaskForm.module.css"

const TaskForm = ({ tasks, setTasks })=>{

    const [task, setTask] = useState("")
    const limite = 60
    const restante = limite - task.length

    function tratarString(e){
        const value = e.target.value.replace(/[0-9]/g,"").slice(0, limite)
        setTask(value)
    }

    const sendTask = e => {
        e.preventDefault()

        const newTask = {
            id: Date.now(),
            text: task,
            status: false
        }

        const dataUpdate = [...tasks, newTask]

        setTasks(dataUpdate)
        setTask("")
    }

    return(
        <form className={styleTaskForm.container} onSubmit={sendTask}>
            <div>
                <input 
                    type="text" 
                    placeholder="Digite uma tarefa..."
                    className={styleTaskForm.iptTask}
                    onChange={ e => tratarString(e)}
                    value={task}
                    maxLength={limite}
                    required
                />
                <p 
                    style={{
                        fontSize: "0.6em",
                        color: restante <= 10 ? "red" : "black" 
                    }}
                >
                    Restante: {restante}
                </p>
            </div>
            <button 
                className={styleTaskForm.btnSubmit}
                type="submit"
            >
                Adicionar
            </button>
        </form>
    )
}

export default TaskForm