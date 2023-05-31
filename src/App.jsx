import './App.css';
import { useState } from 'react';
import logo from './../public/logo.png';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([1, 2, 3]);

	return (
		<div className="App">
			<img className="logo" src={logo} alt="Techover" />
			<ul>
				{todos.map((todo, i) => (
					<li key={i}>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
