import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { useCrud } from "../hooks/useCrud";
import { ContainerFilter } from "../styles/Styles";

const Filter = () => {
  const { filterPriority, setFilterListPriority, errorTaskDelete } =
    useContext(TodoContext);

  const { deleteTaskAll } = useCrud();

  const handleChangeFilter = (e) => {
    const { name, value } = e.target;
    setFilterListPriority({ ...filterPriority, [name]: value });
  };

  return (
    <ContainerFilter>
      <h3>Filtrar tareas</h3>
      <select
        name="prioridades"
        id=""
        value={filterPriority.prioridades}
        onChange={handleChangeFilter}
      >
        <option value="todos">--Todas--</option>
        <option value="alta">Alta</option>
        <option value="media">Media</option>
        <option value="baja">Baja</option>
        <option value="completada">Concluida</option>
      </select>

      {errorTaskDelete && (
        <button onClick={deleteTaskAll}>Borrar Tareas Concluidas</button>
      )}
    </ContainerFilter>
  );
};

export default Filter;
