import './App.css';
import { useState } from 'react';
import Input from './input';
import List from './List';
import iconSun from './../../public/images/icon-sun.svg';
import iconMoon from './../../public/images/icon-moon.svg';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [isLightMode, setIsLightMode] = useState(false);

	const addTodo = () => {
		if (todo !== '') setTodos([...todos, todo]);
		setTodo('');
	};

	const complete = (text) => {
		const updatedTodos = [...todos];
		const index = updatedTodos.findIndex((todo) => todo === text);
		if (index !== -1) {
			updatedTodos.splice(index, 1);
			setTodos(updatedTodos);
		}
	};

	const toggleMode = () => {
		setIsLightMode(!isLightMode);
	};

	return (
		<div
			className="App"
			style={{
				backgroundColor: `${isLightMode ? 'hsl(0,0%,100%)' : 'hsl(235, 21%, 11%)'}`
			}}
		>
			<img className={`backgroundImg ${isLightMode ? 'light-mode' : 'dark-mode'}`} alt="" />
			<div className="todoApp">
				<div className="header">
					<h1>T O D O</h1>
					<button style={{ backgroundColor: 'transparent', border: 'transparent' }} onClick={toggleMode}>
						<img src={isLightMode ? iconMoon : iconSun} alt={isLightMode ? 'iconsun' : 'iconmoon'} />
					</button>
				</div>
				<Input setTodo={setTodo} todo={todo} addTodo={addTodo} isLightMode={isLightMode} />
				<List todos={todos} complete={complete} isLightMode={isLightMode} />
			</div>
		</div>
	);
}

export default App;
