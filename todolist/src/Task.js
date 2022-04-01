import ListItem from '@mui/material/ListItem';
import RemoveTask from './removeTask';

function Task(props) {
	return (
		<ListItem> 
			{props.task} 
			<RemoveTask id_task={props.id_task} removeTask={props.removeTask}/> 
		</ListItem>
	);
}
export default Task;
