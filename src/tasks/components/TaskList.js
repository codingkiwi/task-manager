import React from "react";

import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
//import "./TaskList.css";

const TaskList = (props) => {
	const handleTaskSubmit = (input) => {
		console.log(input);
	};

	return (
		<React.Fragment>
			<TaskInput onInput={handleTaskSubmit}/>
			<ul>
				<TaskItem>Task 1</TaskItem>
				<TaskItem>Task 2</TaskItem>
				<TaskItem>Task 3</TaskItem>
			</ul>
		</React.Fragment>
	);
};
export default TaskList;
