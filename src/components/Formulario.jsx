import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import TodoContext from "../context/TodoContext";
import { useCrud } from "../hooks/useCrud";
import { ConteinerForm } from "../styles/Styles";

const Formulario = () => {
  const { edit, deleteTask, setdisabled, setEdit } = useContext(TodoContext);

  const initialForm = {
    id: null,
    tarea: "",
    prioridad: null,
    completada: false,
  };

  const $inputTask = document.querySelector(".tarea");
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);

  const { newTask, editTask, deleteT } = useCrud(form);

  useEffect(() => {
    if (edit) {
      setForm(edit);
      setdisabled(true);
      $inputTask.focus();
    } else {
      setForm(initialForm);
    }
  }, [edit]);

  useEffect(() => {
    deleteTask ? deleteT(deleteTask) : null;
  }, [deleteTask]);

  useEffect(() => {
    let timer;

    if (error) {
      timer = setTimeout(() => {
        setError(false);
        $inputTask.focus();
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.tarea.trim() || form.prioridad === null) {
      setError(true);
      return;
    }

    form.id === null ? newTask(form) : editTask(form);

    setError(false);
    setdisabled(false);
    setForm(initialForm);
    setEdit(null);
    $inputTask.focus();
  };

  const changeText = form.id === null ? "Agregar" : "Editar";

  return (
    <ConteinerForm>
      <h2>{changeText}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="tarea"
          type="text"
          name="tarea"
          placeholder="Escribe la tarea para hoy"
          value={form.tarea}
          onChange={handleChange}
          autoFocus
        />
        <h3>Prioridad</h3>
        <div className="container__radio">                  
          <input
            type="radio"
            name="prioridad"
            id="alta"
            value="alta"
            checked={form.prioridad === "alta" ? true : false}
            onChange={handleChange}
          />
          <label htmlFor="alta">Alta</label>
          <input
            type="radio"
            name="prioridad"
            id="media"
            value="media"
            checked={form.prioridad === "media" ? true : false}
            onChange={handleChange}
          />
          <label htmlFor="media">Media</label>
          <input
            type="radio"
            name="prioridad"
            id="baja"
            value="baja"
            checked={form.prioridad === "baja" ? true : false}
            onChange={handleChange}
          />
          <label htmlFor="baja">Baja</label>
        </div>

        <button type="submit">{changeText}</button>
      </form>
      {error && <Message message="Tarea y prioridad son necesarios" />}
    </ConteinerForm>
  );
};

export default Formulario;
