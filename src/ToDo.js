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

  return (
    <div className="ToDo">
      <input type="checkbox" name="check.done" onClick={props.onChecked} />
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
