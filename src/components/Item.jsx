import React from 'react';
import './Item.css';
import iconCheck from './../../public/images/icon-check.svg';

const Item = ({ text, complete, isLightMode }) => {
	return (
		<div className="todo" style={{ backgroundColor: `${isLightMode ? 'hsl(0, 0%, 90%)' : 'hsl(235, 24%, 19%)'}` }}>
			<div
				className="todo-entry"
				style={{
					color: `${isLightMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 90%)'}`,
					overflowWrap: 'break-word'
				}}
			>
				{text}
			</div>
			<div className="container-button">
				<button
					className="complete-button"
					onClick={() => complete(text)}
					style={{
						backgroundColor: `${isLightMode ? 'hsl(0, 0%, 90%)' : 'hsl(235, 24%, 19%)'}`,
						border: 'transparent'
					}}
				>
					<img
						src={iconCheck}
						alt="checkIcon"
						style={{ filter: `brightness(${isLightMode ? '0.2' : '1'})` }}
					/>
				</button>
			</div>
		</div>
	);
};

export default Item;
