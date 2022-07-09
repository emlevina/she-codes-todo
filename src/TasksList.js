import Task from './Task';
import { connect } from 'react-redux';

const TasksList = (props) => {
    return (
      <div style={{ textAlign: 'center', marginLeft: 100 }}>
          {props.tasks.map(task=><Task task={task} key={task.id} deleteTask={props.deleteTask} checkTask={props.checkTask}/>)}
      </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
      tasks: state.tasks
    }
  }
  
  export default connect(mapStateToProps)(TasksList);