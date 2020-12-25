import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import { db } from "./Firebase_Config";
import firebase from "firebase";

function App() {
  const [todoInput, setTodoInput] = useState("");
  // const [todo, setTodo] = useState([]);
  function addTodo(e) {
    e.preventDefault();
    db.collection("TO-DO").add({
      inprogress: true,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  }
  return (
    <div className="App Container">
      <div className="Main paper">
        <h1 className="Title"> 🖋🖊 MY TO-DO List 📝📋 </h1>
        <form>
          <TextField
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            style={{ marginBottom: "20px" }}
            id="standard-basic"
            label="Standard"
          />
          <Button type={"submit"} onClick={addTodo} style={{}} color="primary">
            Add ToDo
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
