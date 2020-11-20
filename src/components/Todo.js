import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";
import cx from "classnames";
import styled from "styled-components";

function MyTodo({ todo, toggleTodo, deleteTodo }) {
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const TodoContent = todo.isEditing ? (
    <input
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
      value={todo.content}
    />
  ) : (
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  );
  return (
    <TodoWrapper>
      <li
        className="todo-item"
        onClick={() => (!todo.isEditing ? toggleTodo(todo.id) : null)}
      >
        {todo && todo.isEditing ? "📝" : todo.completed ? "👌" : "👋"}{" "}
        {TodoContent}
      </li>
      <Button className="edit-todo">Edit Todo</Button>
      <Button
        className="delete-todo"
        onClick={() => {
          handleDeleteTodo(todo.id);
        }}
      >
        Delete Todo
      </Button>
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  display: flex;
`;

const Todo = styled(MyTodo)`
  margin-left: 0.5rem;
`;

const Button = styled.button`
  margin-left: 0.5rem;
`;

export default connect(null, { toggleTodo, deleteTodo })(Todo);
