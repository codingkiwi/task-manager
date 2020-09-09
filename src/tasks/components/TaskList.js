import React, { useState } from "react";

import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
//import "./TaskList.css";

const TaskList = (props) => {
	let currentTaskNumber = 4;

	const [TASKS, setTasks] = useState([
		{ taskId: 1, taskName: "Task1" },
		{ taskId: 2, taskName: "Task2" },
		{ taskId: 3, taskName: "Task3" },
	]);

	const handleTaskSubmit = (input) => {
		console.log(input);
		setTasks(TASKS.concat({ taskId: currentTaskNumber, taskName: input.value }));
	};

	return (
		<React.Fragment>
			<TaskInput onInput={handleTaskSubmit} />
			<ul>
				{TASKS.map((task) => (
					<TaskItem key={task.id} taskName={task.taskName} />
				))}
			</ul>
		</React.Fragment>
	);
};
export default TaskList;
