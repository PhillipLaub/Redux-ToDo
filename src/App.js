import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

const todoList = [
  { item: "todo item", done: false, id: 23490587123094582304958 },
  { item: "todo item2", done: true, id: 234905871958 },
];

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => {
            //todo component, pass in props
            return <TodoItem name={item.item} done={item.done} id={item.id} />;
          })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
