import React from "react";

const Todo = ({ value, index, handleDeleteTodo }) => {
	return (
		<li>
			{value}
			<button onClick={() => handleDeleteTodo(index)}>Delete</button>
		</li>
	);
};

export default Todo;
