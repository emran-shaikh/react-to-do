import React from "react";
import "./App.css";
import TodoForm from './TodoForm';
import Todo from './Todo';
import {ListGroup} from 'react-bootstrap';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list container">
        <h2 className="text-center">Welcome to your To Do List App </h2>
        {todos.map((todo, index) => (
          <ListGroup as="ol">
            <ListGroup.Item as="li" className="m-2" >
              <Todo 
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
          </ListGroup.Item>
          </ListGroup>
        ))}
        <TodoForm addTodo={addTodo} />
        <p className="m-3">Add your Task and stay updated </p>
      </div>
    </div>
  );
}

export default App;