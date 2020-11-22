import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import styled from "styled-components";

function MyTodoList({ todos, className }) {
  return (
    <ul className={className}>
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
