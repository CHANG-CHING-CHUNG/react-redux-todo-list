export const checkEditing = (handleFunction, todos) => {
  const isEditing = todos.some((todo) => todo.isEditing === true);
  return function () {
    handleFunction(isEditing);
  };
};
