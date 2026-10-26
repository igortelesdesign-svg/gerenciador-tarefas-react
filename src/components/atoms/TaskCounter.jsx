const TaskCounter = ({ tasks })=>{

    const total = tasks.length
    const concluidas = tasks.filter(t=> t.status).length


    return(
        <div>
            {
                concluidas ?
                    <p>{concluidas} de {total}</p>
                    : total
                    ? <p>Clique para concluir a tarefa!</p>
                    : <p>Adicione tarefas para começar!</p>
            }
        </div>
    )
}

export default TaskCounter