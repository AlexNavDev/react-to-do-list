import { useContext } from "react";
import shortid from "shortid";
import swal from "sweetalert";
import TodoContext from "../context/TodoContext";

export const useCrud = (form) => {
  const { todoList, setTodoList, setDeleteTask } = useContext(TodoContext);

  const newTask = () => {
    setTodoList([...todoList, { ...form, id: shortid.generate() }]);
  };

  const editTask = (form) => {
    let newData = todoList.map((task) => (task.id === form.id ? form : task));

    if (
      todoList[0].tarea !== newData[0].tarea ||
      todoList[0].prioridad !== newData[0].prioridad
    ) {
      swal({
        icon: "success",
        title: "Tarea Editada",
        buttons: false,
        timer: 1500,
      });
    }

    setTodoList(newData);
  };

  const deleteT = (id) => {
    swal({
      title: "¿Estás seguro de eliminarla la tarea?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setTodoList(todoList.filter((task) => task.id !== id));
        swal("Tarea Eliminada", {
          icon: "success",
          buttons: false,
          timer: 1500,
        });
      }
    });
    setDeleteTask(null);
  };

  const deleteTaskAll = () => {
    swal({
      title: "¿Estás seguro de eliminarla todas las tareas?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setTodoList(todoList.filter((task) => task.completada !== true));
        swal("Tareas Eliminadas", {
          icon: "success",
        });
      }
    });
  };

  return { newTask, editTask, deleteT, deleteTaskAll };
};
