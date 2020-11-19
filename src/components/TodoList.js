import React, { useState } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import VISIBILITY_FILTERS from "../constants";
import styled from "styled-components";

function MyTodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
}

const TodoList = styled(MyTodoList)`
  margin-top: 1rem;
  text-align: left;
  list-style: none;
`;

export default TodoList;
