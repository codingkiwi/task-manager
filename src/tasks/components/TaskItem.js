import React from "react";

//import "./TaskItem.css";

const TaskItem = (props) => {

    const handleTaskClick = () => {
        props.onComplete(props.taskId);
    }

	return (
		<li>
			{props.taskName}
			<button onClick={handleTaskClick}>COMPLETE</button>
		</li>
	);
};
export default TaskItem;
