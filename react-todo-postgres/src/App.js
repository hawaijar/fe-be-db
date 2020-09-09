import React, { useEffect, useState } from "react";
import Todo from './components/todo/todo'
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000");
      const data = await response.json();
      if (data.length > 0) {
        setTodos(data);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h2>My Todo App</h2>
      <hr />
      {todos.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
