import React from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			input: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
		this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
	}

	handleChange(event) {
		this.setState({ input: event.target.value });
	}

	handleSubmitTodo(event) {
		event.preventDefault();
		const updatedTodos = this.state.todos;
		updatedTodos.push(this.state.input);
		this.setState({
			todos: updatedTodos,
		});
	}

	handleDeleteTodo(index) {
		const updatedTodos = [...this.state.todos];
		updatedTodos.splice(index, 1);
		this.setState({
			todos: updatedTodos,
		});
	}

	render() {
		return (
			<div className="App">
				<h1>Todo List</h1>
				<div>
					<TodoForm
						handleSubmitTodo={this.handleSubmitTodo}
						handleChange={this.handleChange}
					/>
					<ul>
						{this.state.todos.map((value, index) => {
							return (
								<Todo
									value={value}
									key={index}
									index={index}
									handleDeleteTodo={this.handleDeleteTodo}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
