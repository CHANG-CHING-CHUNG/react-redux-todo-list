import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
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

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
