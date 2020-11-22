import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo, editTodo } from "../redux/actions";
import { getTodos } from "../redux/selectors";
import { checkEditing } from "../utilities";
import cx from "classnames";
import styled from "styled-components";

function MyTodo({ todos, todo, toggleTodo, updateTodo, deleteTodo, editTodo }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let timer;
    if (todo.isEditing && inputRef.current) {
      timer = setInterval(() => {
        inputRef.current.focus();
      }, 10);
    }
    return () => clearInterval(timer);
  }, [todo.isEditing]);

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };
  const handleEditTodo = checkEditing((isEditing) => {
    if (!isEditing) {
      setValue(todo.content);
      editTodo(todo.id);
    }
  }, todos);
  const handleUpdateTodo = () => {
    updateTodo(todo.id, value);
  };

  const handleToggleTodo = checkEditing((isEditing) => {
    if (!isEditing) {
      return !todo.isEditing ? toggleTodo(todo.id) : null;
    }
  }, todos);

  const handleOnblur = (e) => {
    let updateClassName;
    let deleteClassName;
    if (e.relatedTarget) {
      updateClassName = e.relatedTarget.classList.contains("update-todo");
      deleteClassName = e.relatedTarget.classList.contains("delete-todo");
    }
    if (!updateClassName && !deleteClassName) {
      alert("請編輯完再進行其它操作!");
    }
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
      onBlur={handleOnblur}
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
    <Button className="edit-todo" onClick={handleEditTodo}>
      Edit Todo
    </Button>
  );
  const UpdateTodo = (
    <Button className="update-todo" onClick={handleUpdateTodo}>
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
      <li className="todo-item" onClick={handleToggleTodo}>
        {todo && todo.isEditing ? "📝" : todo.completed ? "👌" : "👋"}{" "}
        {TodoContent}
      </li>
      <div>
        {todo.completed ? null : todo.isEditing ? UpdateTodo : EditTodo}
        {DeleteTodo}
      </div>
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Todo = styled(MyTodo)`
  margin-left: 0.5rem;
`;

const Button = styled.button`
  margin-left: 0.5rem;
`;

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state),
  };
};

export default connect(mapStateToProps, {
  toggleTodo,
  updateTodo,
  deleteTodo,
  editTodo,
})(Todo);
