import React, { useState, useReducer, useEffect } from "react";

//import './TaskInput.css';

const inputReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE":
			return {
				...state,
				value: action.val,
            };
        case "SUBMIT":
            return {
                ...state,
                value: ""
            }
        default:
            return state;
	}
};

const TaskInput = (props) => {
	const [inputShowing, setInputShowing] = useState(false);

	const [inputState, dispatch] = useReducer(inputReducer, {
		value: "",
    });
    
	const toggleInputShowing = () => {
		if (inputShowing) {
			setInputShowing(false);
		} else {
			setInputShowing(true);
		}
    };
    
    const changeHandler = (event) => {
        dispatch({type: "CHANGE", val:event.target.value});
    }

	const handleInputSubmit = (event) => {
        event.preventDefault();
        props.onInput(inputState);
        dispatch({type: "SUBMIT"});
	};

	return (
		<form onSubmit={handleInputSubmit}>
			{!inputShowing && (
				<input type='button' value='Add' onClick={toggleInputShowing} />
			)}
			{inputShowing && <input onChange={changeHandler} value={inputState.value}/>}
			{inputShowing && (
				<input
					type='submit'
					value='Submit'
				/>
			)}
		</form>
	);
};
export default TaskInput;
