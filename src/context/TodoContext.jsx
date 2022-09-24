import { createContext, useEffect, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

  const initialFilter = { prioridades: "todos" };

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("Todo")) ?? []
  );
  const [edit, setEdit] = useState(null);
  const [deleteTask, setDeleteTask] = useState(null);
  const [disabled, setdisabled] = useState(false);
  const [filterPriority, setFilterListPriority] = useState(initialFilter);
  const [filterList, setFilterList] = useState([]);
  const [errorTaskDelete, setErrorTaskDelete] = useState(false)

  const saveLocal = () => {
    localStorage.setItem("Todo", JSON.stringify(todoList));
  };

  useEffect(() => {
    saveLocal();

    const taskComplete = todoList.filter((task)=> task.completada === true);
   
    taskComplete.length > 3 ?setErrorTaskDelete(true):setErrorTaskDelete(false);
    
  }, [todoList]);

  useEffect(() => {
    const { prioridades } = filterPriority;
    if (prioridades === "todos") {
      setFilterList(todoList);
      return;
    }

    if (prioridades === "completada") {
      setFilterList(todoList.filter((task) => task.completada === true));
      return;
    }

    setFilterList(todoList.filter((task) => task.prioridad === prioridades));
  }, [todoList, filterPriority]);

  useEffect(() => {
    let timer;

    if (filterList.length === 0 || todoList.length < 3) {
      timer = setTimeout(() => {
        setFilterListPriority(initialFilter);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [filterList]);

  const data = {
    todoList,
    setTodoList,
    edit,
    setEdit,
    deleteTask,
    setDeleteTask,
    disabled,
    setdisabled,
    filterPriority,
    setFilterListPriority,
    filterList,
    setFilterList,
    errorTaskDelete,
    setErrorTaskDelete
  };
  
  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};

export { TodoProvider };
export default TodoContext;
