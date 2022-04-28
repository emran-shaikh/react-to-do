import React from "react";
import {Button} from 'react-bootstrap';
function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <Button className="m-2" variant="primary" onClick={() => completeTodo(index)}>Complete</Button>
          <Button onClick={() => removeTodo(index)}>x</Button>
        </div>
      </div>
    );
  }

  export default Todo;