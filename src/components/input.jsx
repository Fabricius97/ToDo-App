import React from 'react';
import './Input.css';

const Input = ({ setTodo, todo, addTodo }) => {
	return (
		<div className="input-holder">
			<input
				type="text"
				className="input"
				placeholder="Create a new todo.."
				name="todo"
				onChange={(event) => setTodo(event.target.value)}
				value={todo}
			/>
			<button
				className="add-button"
				onClick={addTodo}
				style={{ backgroundColor: 'transparent', border: 'transparent' }}
			>
				<h3 style={{ color: 'white' }}>Add</h3>
			</button>
		</div>
	);
};

export default Input;
