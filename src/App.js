import React from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			input: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ input: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		const updatedTasks = this.state.tasks;
		updatedTasks.push(this.state.input);
		this.setState({
			tasks: updatedTasks,
		});
		console.log(this.state.tasks);
	}

	render() {
		return (
			<div className="App">
				<h1>Todo List</h1>
				<div>
					<TodoForm
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
					/>
					<ul>
						{this.state.tasks.map((value, index) => {
							return <Todo value={value} key={index} />;
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
