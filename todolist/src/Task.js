import ListItem from '@mui/material/ListItem';
import RemoveTask from './removeTask';

function Task(props) {
	return(
		<ListItem> 
			{props.task} 
			<RemoveTask index={props.index} handleOnRemove={props.handleOnRemove}/> 
		</ListItem>
	);
}
export default Task;
