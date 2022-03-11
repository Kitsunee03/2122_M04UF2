import RemoveTask from './removeTask';

function Task(props) {
	return(
		<li id="Task"> 
			{props.task} 
			<RemoveTask/> 
		</li>
	);
}
export default Task;
