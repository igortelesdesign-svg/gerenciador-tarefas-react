import styleTaskItem from "./TaskItem.module.css"

const TaskItem = ({ task, tasks, setTasks })=>{

    function attStatusTasks (){
        const tasksUpdated = tasks.map(t =>{
            return t.id == task.id ?
                {...t, status: !t.status}: t
        })

        setTasks(tasksUpdated)
    }

    function deleteTask(){
        const tasksUpdated = tasks.filter(t => t.id != task.id)
        setTasks(tasksUpdated)
    }

    return(
        <li className={styleTaskItem.itemList}>
            <div className={styleTaskItem.itemList}>
                <input
                    id={task.id} 
                    type="checkbox" 
                    name="task"
                    className={styleTaskItem.iptCheck}
                    onClick={attStatusTasks} 
                />
                <label
                    for={task.id}
                    style={{
                        textDecoration:
                            task.status ? "line-through":"none",
                        cursor: "pointer",
                        fontWeight: task.status ? "900":"400"
                    }}
                >
                    {task.text}
                </label>
            </div>
            <button
                onClick={deleteTask} 
                className={styleTaskItem.btnItem}
            >Remover</button>
        </li>
    )
}

export default TaskItem