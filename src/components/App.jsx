import './App.css';
import { useState } from 'react';
import Input from './Input';
import List from './List';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		if (todo !== '') setTodos([...todos, todo]);
		setTodo('');
	};

	const complete = (text) => {
		const uncompletedTodos = todos.filter((todo) => todo !== text);
		setTodos(uncompletedTodos);
	};

	return (
		<div className="App">
			<img className="backgroundImg" src="./../../images/bg-desktop-dark.jpg" alt="Techover" />
			<div className="todoApp">
				<div className="header">
					<h1>T O D O</h1>
					<button style={{ backgroundColor: 'transparent', border: 'transparent' }}>
						<img src="./../../images/icon-sun.svg" alt="iconsun" />
					</button>
				</div>
				<Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
				<List todos={todos} complete={complete} />
			</div>
		</div>
	);
}

export default App;
