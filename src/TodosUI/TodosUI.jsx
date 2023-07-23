import Task from './Task';
import NewTask from './NewTask';
import CompletedDropdown from './CompletedDropdown';
import './css/TodosUI.css'
import { useRef, useEffect } from 'react';
export default function TodosUI({ currList, allTasks, addTask, toggleComplete, deleteTask }) {
    const tasks = allTasks.filter((task) => task.parentList === currList);
    const incomplete = tasks.filter((task) => !task.completed);
    const completed = tasks.filter((task) => task.completed);
    return (
        <div className="todo-ui" key={currList.title}>
            <h1 className="list-title">{currList.title}</h1>
            <ul>
                {incomplete.map((task) => {
                    return <Task
                        task={task}
                        key={task.id}
                        toggleComplete={toggleComplete}
                        deleteSelf={() => deleteTask(task)} />
                })}
            </ul>
            <h2>Add a Task:</h2>
            <NewTask addTask={addTask} currList={currList} />
            <CompletedDropdown
            tasks={completed}
            undo={toggleComplete}
            deleteTask={deleteTask} />
        </div>
    )
}