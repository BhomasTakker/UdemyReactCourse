import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (item: Todo) => void;
};

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (item: Todo) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const todo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
  };

  const removeTodoHandler = (item: Todo) => {
    // const removeItem = todos.find((todo) => item.id === todo.id);
    // if (!removeItem) {
    //   return;
    // }
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== item.id);
    });
  };
  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
