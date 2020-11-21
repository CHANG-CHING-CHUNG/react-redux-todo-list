import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo, editTodo } from "../redux/actions";
import cx from "classnames";
import styled from "styled-components";

function MyTodo({ todo, toggleTodo, updateTodo, deleteTodo, editTodo }) {
  const [value, setValue] = useState("");
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const inputRef = useRef();
  const TodoContent = todo.isEditing ? (
    <input
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      ref={inputRef}
      autoFocus={true}
      onBlur={() => {
        setTimeout(() => {
          inputRef.current.focus();
        }, 10);
      }}
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

  const EditTodo = (
    <Button
      className="edit-todo"
      onClick={() => {
        setValue(todo.content);
        editTodo(todo.id);
      }}
    >
      Edit Todo
    </Button>
  );
  const UpdateTodo = (
    <Button
      className="update-todo"
      onClick={() => {
        updateTodo(todo.id, value);
      }}
    >
      Update Todo
    </Button>
  );

  const DeleteTodo = (
    <Button
      className="delete-todo"
      onClick={() => {
        handleDeleteTodo(todo.id);
      }}
    >
      Delete Todo
    </Button>
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
      {todo.completed ? null : todo.isEditing ? UpdateTodo : EditTodo}
      {DeleteTodo}
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

export default connect(null, { toggleTodo, updateTodo, deleteTodo, editTodo })(
  Todo
);
