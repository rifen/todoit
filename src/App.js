import React, { useState } from "react";
import "./App.css";
import ToDo from "./ToDo.js";

function App() {
  // Logic to keep track of ToDo's
  const [todoList, setToDoList] = useState([]);
  console.log(todoList);
  const addToDo = () =>
    setToDoList(currentToDoList => [...currentToDoList, ""]);
  return (
    //Displays the ToDo's and generates them
    <div className="App">
      <button onClick={addToDo}>Create ToDo</button>
      {todoList.map((todo, index) => (
        <ToDo
          text={todo}
          key={index}
          onTextChange={event => {
            const text = event.target.value;
            setToDoList(currentToDoList => {
              const newToDoList = [...currentToDoList];
              newToDoList[index] = text;
              return newToDoList;
            });
          }}
        />
      ))}
    </div>
  );
}

export default App;
