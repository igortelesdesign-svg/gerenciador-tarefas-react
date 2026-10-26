import TaskItem from "./../atoms/TaskItem.jsx"

const TaskList = ({tasks,setTasks, style})=>{
    return(
        <ul className={style}>
            {
                tasks.map(task => {
                    return <TaskItem 
                        key={task.id} 
                        task={task} 
                        tasks={tasks} 
                        setTasks={setTasks} 
                        />
                    })
            }
        </ul>
    )
}

export default TaskList