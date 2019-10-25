import React from "react";

//Use of onKeyDown={this.handleKeyDown}
//   class Input extends React.Component {
//     _handleKeyDown = e => {
//       if (e.key === "Enter") {
//         console.log("Validate");
//       }
//     }

export default function ToDo(props) {
  console.log("our props are: ", props);
  if (props.checked === true) {
  }

  return (
    <div className="ToDo">
      <input
        type="checkbox"
        name="check.done"
        onChange={() => props.onChecked(props.todoId)}
        checked={props.checked}
      />
      <input
        type="text"
        name="todo.input"
        value={props.text}
        onChange={props.onTextChange}
      />
      <button
        type="button"
        name="button.delete"
        onClick={() => props.onDelete(props.todoId)}
      >
        &#x2718;
      </button>
    </div>
  );
}
