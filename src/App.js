import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './Firebase_Config';
import firebase from 'firebase';
import TodoList from './TodoList';

function App() {
	const [ todoInput, setTodoInput ] = useState('');
	const [ todos, setTodos ] = useState([]);

	useEffect(() => {
		getTodos();
	}, []);

	function getTodos() {
		db.collection('TO-DO').onSnapshot(function(querySnapshot) {
			setTodos(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					todo: doc.data().todo,
					inprogress: doc.data().inprogress
				}))
			);
		});
	}

	function addTodo(e) {
		e.preventDefault();
		db.collection('TO-DO').add({
			inprogress: true,
			time: firebase.firestore.FieldValue.serverTimestamp(),
			todo: todoInput
		});
		setTodoInput('');
	}
	return (
		<div className="App Container">
			<div className="Main paper">
				<h1 className="Title"> 🖋🖊 MY TO-DO List 📝📋 </h1>
				<form>
					<TextField
						value={todoInput}
						onChange={(e) => setTodoInput(e.target.value)}
						style={{ marginBottom: '20px' }}
						id="standard-basic"
						label="Standard"
					/>
					<Button
						style={{ display: 'none' }}
						type={'submit'}
						onClick={addTodo}
						variant={'contained'}
						color="primary"
					>
						Add ToDo
					</Button>
				</form>
				<div style={{ width: '90%' }}>
					{todos.map((todo) => <TodoList todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />)}
				</div>
			</div>
		</div>
	);
}

export default App;
