import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import RemoveTask from "./removeTask";

function Task(props){
	return (
		<ListItem id="task_item">
		<ListItemButton>
			<ListItemText primary={props.task} />
			<RemoveTask task_id={props.task_id}
				task={props.task}
				order={props.order} 
				removeTask={props.removeTask} 
			/>
		</ListItemButton>
		</ListItem>
	);
}
export default Task;
