import RemoveTask from './removeTask';

function Task(props) {
	return(
		<li> {props.task} <RemoveTask /> </li>
	);
}
export default Task;
