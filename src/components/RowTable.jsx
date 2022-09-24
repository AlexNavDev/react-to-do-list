import React from "react";
import { FaRegEdit, FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

const RowTable = ({
  list,
  setEdit,
  setDeleteTask,
  handleCompleted,
  disabled,
}) => {

  const { id, tarea, prioridad, completada } = list;

  return (
    <tr className={completada ? "completada" : ""}>
      <td>{tarea}</td>
      <td>{prioridad}</td>
      <td>
        <button title="Editar Tarea"  onClick={() => setEdit(list)} disabled={completada}>
          <FaRegEdit />
        </button>
      </td>
      <td>
        <button title="Tarea Realizada"  onClick={() => handleCompleted(list)} disabled={disabled}>
          <FaRegCheckCircle />
        </button>
      </td>
      <td>
        <button title="Eliminar Tarea" onClick={() => setDeleteTask(id)} disabled={disabled}>
          <FaRegTimesCircle />
        </button>
      </td>
    </tr>
  );
};

export default RowTable;
