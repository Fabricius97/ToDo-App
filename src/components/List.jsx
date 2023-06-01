import React from 'react';
import Item from './Item';
import './List.css';

const List = ({ todos, complete, isLightMode }) => {
	if (todos.length === 0) {
		return (
			<div className="empty" style={{ color: `${isLightMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 90%)'}` }}>
				All tasks completed!
			</div>
		);
	}

	return (
		<div className="todo-list">
			{todos.map((todo, i) => (
				<Item text={todo} key={i} complete={complete} isLightMode={isLightMode} />
			))}
		</div>
	);
};

export default List;
