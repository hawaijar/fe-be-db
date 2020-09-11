import React, { useEffect, useState } from "react";
import Todo from "./components/todo/todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
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
  const handleChange = (event) => {
    const val = event.target.value;
    setInput(val);
  };
  const handleAdd = async () => {
    const payload = {
      payload: input,
    };
    console.log(payload)
    await fetch("http://localhost:5000", {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const response = await fetch("http://localhost:5000");
    const data = await response.json();
    if (data.length > 0) {
      setTodos(data);
    }
    setInput("");
  };
  return (
    <div className="App">
      <h2>My Todo App</h2>

      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleAdd}>Add</button>
      <hr />
      {todos.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
