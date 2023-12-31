import Task from "./Task";
import NewTask from "./NewTask";
import CompletedDropdown from "./CompletedDropdown";
import "./css/TodosUI.css";
export default function TodosUI({
  currList,
  allTasks,
  addTask,
  toggleComplete,
  deleteTask,
  setTitle,
  displayLists,
}) {
  if (!currList) {
    return (
      <div className={`todo-ui fade-in${displayLists ? " hide" : ""}`}>
        <h1 className="no-curr-list-title">Select a List</h1>
      </div>
    );
  }
  const tasks = allTasks.filter((task) => task.parentListId === currList.id);
  const incomplete = tasks.filter((task) => !task.completed);
  const completed = tasks.filter((task) => task.completed);
  return (
    <div
      className={`todo-ui fade-in${displayLists ? " hide" : ""}`}
      key={currList.title}
    >
      <h1 className="list-title">{currList.title}</h1>
      <ul className="task-ul">
        {incomplete.map((task) => {
          return (
            <Task
              task={task}
              key={task.id}
              toggleComplete={toggleComplete}
              deleteSelf={() => deleteTask(task)}
              setTitle={(newTitle) => setTitle(task.id, newTitle)}
            />
          );
        })}
      </ul>
      <NewTask addTask={addTask} currList={currList} />
      <CompletedDropdown
        tasks={completed}
        undo={toggleComplete}
        deleteTask={deleteTask}
        setTitle={setTitle}
      />
    </div>
  );
}
