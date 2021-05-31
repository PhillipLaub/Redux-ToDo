import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          <h1>To Do List</h1>
          {todoList.map((item) => {
            //todo component, pass in props
            return (
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
