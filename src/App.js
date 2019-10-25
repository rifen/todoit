import React, { useState } from "react";
import "./App.css";
import ToDo from "./ToDo.js";

function App() {
  // Logic to track state of ToDo's
  const [todoList, setToDoList] = useState([]);
  // Logic to filter any ToDo's that are checked and adds it to a new array that is displayed somewhere else
  const checkedToDo = todoId => {
    console.log("checked! ", todoId);
    setToDoList(currentToDoList =>
      currentToDoList.map((todo, index) => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        } else {
          return todo;
        }
      })
    );
  };

  //Logic to filter down the ToDo's that aren't the ones that are checked and remove them from the array.
  const deleteToDo = todoToDelete => {
    console.log("trying to delete: ", todoToDelete);
    setToDoList(currentToDoList =>
      currentToDoList.filter((todo, index) => {
        return todoToDelete !== todo.id;
      })
    );
  };
  // Logic that adds a ToDo and gives it the text
  const addToDo = () => {
    const newTodo = { text: "", id: new Date().toString(), checked: false };

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

  return (
    //Displays the ToDo's and generates them
    <div className="App">
      <button onClick={addToDo}>Create ToDo</button>
      {todoList.map((todo, index) => (
        <ToDo //Start Component
          todoId={todo.id}
          text={todo.text}
          key={index}
          onChecked={checkedToDo}
          checked={todo.checked}
          onTextChange={event => onTextChange(event, index)}
          onDelete={deleteToDo}
        /> //End Component
      ))}
    </div>
  );
}

export default App;
