import React from "react";

const TodoForm = ({ handleChange, handleSubmitTodo }) => {
	return (
		<form onSubmit={handleSubmitTodo}>
			<input type="text" onChange={handleChange} />
			<button type="submit">Add</button>
		</form>
	);
};

export default TodoForm;
