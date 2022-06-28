import Task from './Task';

function TasksList(props) {
    return (
      <div>
          {props.tasks.map(task=><Task task={task} key={task.id} deleteTask={props.deleteTask} checkTask={props.checkTask}/>)}
      </div>
    );
  }
  
  export default TasksList;