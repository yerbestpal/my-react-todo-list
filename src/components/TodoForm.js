import React from "react";

const TodoForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<input type="text" onChange={props.handleChange} />
			<button type="submit">Add</button>
		</form>
	);
};

export default TodoForm;
