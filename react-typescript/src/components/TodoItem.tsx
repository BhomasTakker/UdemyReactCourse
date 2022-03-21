import React, { MouseEventHandler } from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  onRemove: (item: Todo) => void;
}> = (props) => {
  const onRemoveHandler = () => {
    props.onRemove(props.item);
  };

  return (
    <li className={classes.item} key={props.item.id} onClick={onRemoveHandler}>
      {/* could use .bind(null, props.item.id) */}
      {props.item.text}
    </li>
  );
};

export default TodoItem;
