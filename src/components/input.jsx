import React from 'react';

const Input = ({ setTodo, todo, addTodo }) => {
	return (
		<div className="input-holder">
			<input
				type="text"
				className="input"
				placeholder="Create a todo"
				name="todo"
				onChange={(event) => setTodo(event.target.value)}
				value={todo}
			/>
			<button className="add-button" onClick={addTodo}>
				Add
			</button>
		</div>
	);
};

export default Input;
