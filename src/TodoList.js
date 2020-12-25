import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './TodoList.css';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { db } from './Firebase_Config';

export default function TodoList({ todo, time, id, inprogress }) {
	function toggleInProgress() {
		db.collection('TO-DO').doc(id).update({
			inprogress: !inprogress
		});
	}

	function deleteTodo() {
		db.collection('TO-DO').doc(id).delete();
	}
	return (
		<div>
			<ListItem>
				<ListItemText primary={todo} secondary={inprogress ? '🔔⌚ In-Progress ⏱⏳' : '✔ Completed ✅'} />
				<Button onClick={toggleInProgress} style={{ width: '90px' }} color="primary">
					{inprogress ? 'Done' : 'Un-Done'}
				</Button>
				<Button onClick={deleteTodo} style={{ width: '20px' }} color="secondary" startIcon={<DeleteIcon />} />
			</ListItem>
		</div>
	);
}
