import React from 'react';
import './Item.css';

const Item = ({ text, complete, isLightMode }) => {
	return (
		<div className="todo" style={{ backgroundColor: `${isLightMode ? 'hsl(0, 0%, 90%)' : 'hsl(235, 24%, 19%)'}` }}>
			<div className="todo-entry" style={{ color: `${isLightMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 90%)'}` }}>
				{text}
			</div>
			<button
				className="complete-button"
				onClick={() => complete(text)}
				style={{ backgroundColor: 'transparent', border: 'transparent' }}
			>
				<img
					src="./../../images/icon-check.svg"
					alt="checkIcon"
					style={{ filter: `brightness(${isLightMode ? '0.2' : '1'})` }}
				/>
			</button>
		</div>
	);
};

export default Item;
