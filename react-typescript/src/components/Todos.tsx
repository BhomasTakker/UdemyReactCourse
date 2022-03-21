import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  //   const removeItemHandler = (item: Todo) => {
  //     props.onRemoveItem(item);
  //   };

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} item={item} onRemove={todosCtx.removeTodo} />
      ))}
    </ul>
  );
};
export default Todos;
