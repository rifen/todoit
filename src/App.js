import React, { useState } from "react";
import "./App.css";
import ToDo from "./ToDo.js";

function App() {
  // Logic to track state of ToDo's
  const [todoList, setToDoList] = useState([]);

  const deleteToDo = todoToDelete => {
    console.log("trying to delete: ", todoToDelete);
    setToDoList(currentToDoList =>
      currentToDoList.filter((todo, index) => {
        return todoToDelete !== todo.id;
      })
    );
  };

  const addToDo = () => {
    const newTodo = { text: "", id: new Date().toString() };

    console.log("new todo is: ", newTodo);

    setToDoList(currentToDoList => [...currentToDoList, newTodo]);
  };

  const onTextChange = (event, index) => {
    const text = event.target.value;

    setToDoList(currentToDoList => {
      const newToDoList = [...currentToDoList];
      newToDoList[index].text = text;
      return newToDoList;
    });
  };

  // [Walk the Dog, Do the Dishes]

  return (
    //Displays the ToDo's and generates them
    <div className="App">
      <button onClick={addToDo}>Create ToDo</button>
      {todoList.map((todo, index) => (
        <ToDo //Start Component
          todoId={todo.id}
          text={todo.text}
          key={index}
          onTextChange={event => onTextChange(event, index)}
          onDelete={deleteToDo}
        /> //End Component
      ))}
    </div>
  );
}

export default App;
