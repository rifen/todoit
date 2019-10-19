import React from "react";

//Use of onKeyDown={this.handleKeyDown}
//   class Input extends React.Component {
//     _handleKeyDown = e => {
//       if (e.key === "Enter") {
//         console.log("Validate");
//       }
//     }

export default function ToDo(props) {
  return (
    <div className="ToDo">
      <input
        type="text"
        name="todo.input"
        value={props.text}
        onChange={props.onTextChange}
      />
      <input type="checkbox" name="check.done" />
    </div>
  );
}
