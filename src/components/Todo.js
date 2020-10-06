import React from "react";

const Todo = ({ value, index, handleDeleteTodo, handleCompleteTodo }) => {
	return (
		<li>
			{value}
			<button onClick={() => handleDeleteTodo(index)}>Delete</button>
			<button onClick={() => handleCompleteTodo(index)}>Done</button>
		</li>
	);
};

export default Todo;
