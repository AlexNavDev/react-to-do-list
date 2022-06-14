import React, {  useContext } from "react";
import TodoContext from "../context/TodoContext";
import Formulario from "./Formulario";
import TableList from "./TableList";
import Filter from "./Filter";
import { Main } from "../styles/Styles";

const TodoApp = () => { 
  const {todoList} = useContext(TodoContext)

  return (
    <Main>
       <h1>¿Que planes tienes hoy?</h1>    
        <Formulario/>
        {todoList.length >= 5 && <Filter/>}
        {todoList.length > 0 && <TableList/>}  
    </Main>
  );
};

export default TodoApp;
