import RemoveTask from './removeTask';

function Task(props) {
	return(
		<li> 
			{props.task} 
			<RemoveTask index={props.index} handleOnRemove={props.handleOnRemove}/> 
		</li>
	);
}
export default Task;
