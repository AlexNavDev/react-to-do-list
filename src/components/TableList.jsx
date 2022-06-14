import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import { ContainerTable } from '../styles/Styles'
import RowTable from './RowTable'

const TableList = () => { 
  const {todoList, setTodoList, filterList, setEdit, setDeleteTask, disabled} = useContext(TodoContext)

  const handleCompleted=(task)=>{
    setTodoList(todoList.map((list)=>{
      list.id === task.id 
      ?list.completada = !list.completada 
      :null
      return list
    }))
  }
  
  return (
    <ContainerTable>
    <h3>Listado de Tareas</h3>
    <table>
        <thead>
            <tr>
                <th>Tarea</th>
                <th>Prioridad</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {filterList.length === 0
            ?<tr><td colSpan="5">No hay tareas</td></tr>
            :filterList.map((list) => (
              <RowTable key={list.id} list={list} setEdit={setEdit} setDeleteTask={setDeleteTask} handleCompleted={handleCompleted}disabled={disabled}/>
            ))
          }
        </tbody>
    </table>

    </ContainerTable>
  )
}

export default TableList