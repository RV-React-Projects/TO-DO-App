import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./TodoList.css";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function TodoList({ todo, time, id, inprogress }) {
  return (
    <div>
      <ListItem>
        <ListItemText primary={todo} secondary={inprogress} />
        <Button color="secondary">{inprogress ? "Done" : "Un-Done"}</Button>
        <Button
          style={{ display: "none" }}
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        ></Button>
      </ListItem>
    </div>
  );
}
