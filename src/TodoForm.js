import React from "react";
import {FormControl, Button} from 'react-bootstrap';
function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={e => { e.preventDefault(); }}    className="m-2" >
        <FormControl
          type="textarea"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button className="float-end m-2" onClick={handleSubmit}>Submit</Button>
      </form>
    );
  }

  export default TodoForm;
  