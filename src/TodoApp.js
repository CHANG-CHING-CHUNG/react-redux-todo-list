import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalCss";

function MyTodoApp() {
  return (
    <div className="todo-app">
      <GlobalStyle />
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
const TodoApp = styled(MyTodoApp)`
  font-family: sans-serif;
`;

export default TodoApp;
