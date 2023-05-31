import './App.css';
import { useState } from 'react';
import Input from './Input';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([1, 2, 3]);

	const addTodo = () => {
		setTodos([...todos, todo]);
	};

	return (
		<div className="App">
			<img className="logo" src="/logo.png" alt="Techover" />
			<Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
			<ul>
				{todos.map((todo, i) => (
					<li key={i}>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
