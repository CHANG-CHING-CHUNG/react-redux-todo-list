import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
import cx from "classnames";
import styled from "styled-components";

function MyTodo({ todo, toggleTodo }) {
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completd ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
}

const Todo = styled(MyTodo)`
  margin-left: 0.5rem;
`;

export default Todo;
