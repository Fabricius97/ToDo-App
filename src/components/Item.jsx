import React from 'react';
import './Item.css';

const Item = ({ text, complete }) => {
	return (
		<div className="todo">
			<div className="todo-entry">{text}</div>
			<button
				className="complete-button"
				onClick={() => complete(text)}
				style={{ backgroundColor: 'transparent', border: 'transparent' }}
			>
				<img src="./../../images/icon-check.svg" alt="checkIcon" />
			</button>
		</div>
	);
};

export default Item;
