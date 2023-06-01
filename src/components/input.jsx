import React from 'react';
import './Input.css';

const Input = ({ setTodo, todo, addTodo, isLightMode }) => {
	return (
		<div
			className="input-holder"
			style={{ backgroundColor: `${isLightMode ? 'hsl(0, 0%, 90%)' : 'hsl(235, 24%, 19%)'}` }}
		>
			<input
				type="text"
				className="input"
				placeholder="Create a new todo.."
				name="todo"
				onChange={(event) => setTodo(event.target.value)}
				value={todo}
				style={{ color: `${isLightMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'}` }}
			/>
			<button
				className="add-button"
				onClick={addTodo}
				style={{
					backgroundColor: 'transparent',
					border: 'transparent'
				}}
			>
				<h3 style={{ color: `${isLightMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'}` }}>Add</h3>
			</button>
		</div>
	);
};

export default Input;
