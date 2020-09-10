import React, { useState } from "react";

import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
//import "./TaskList.css";

const TaskList = (props) => {
	const [numberOfTasks, setNumberOfTasks] = useState(4);

	const [TASKS, setTasks] = useState([
		{ taskId: 1, taskName: "Task1" },
		{ taskId: 2, taskName: "Task2" },
		{ taskId: 3, taskName: "Task3" },
	]);

	const handleTaskSubmit = (input) => {
		setNumberOfTasks(numberOfTasks + 1);
		console.log(input);
		setTasks(TASKS.concat({ taskId: numberOfTasks, taskName: input.value }));
		console.log(numberOfTasks);
	};

	const handleTaskComplete = (taskIdToRemove) => {
		console.log("task completed for task" + taskIdToRemove);
		//const index = array.findIndex(p => p.taskId === taskIdToRemove);
		setTasks(TASKS.filter(task => task.taskId !== taskIdToRemove ));
		console.log(TASKS);
	}

	return (
		<React.Fragment>
			<TaskInput onInput={handleTaskSubmit} />
			<ul>
				{TASKS.map((task) => (
					<TaskItem key={task.taskId} taskId={task.taskId} taskName={task.taskName} onComplete={handleTaskComplete}/>
				))}
			</ul>
		</React.Fragment>
	);
};
export default TaskList;
