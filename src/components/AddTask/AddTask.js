import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../../store/actions/taskAction';
import "./AddTask.css";
import Paper from '@material-ui/core/Paper';

function AddTask() {
    let history = useHistory();
    const taskList = useSelector(state => state.taskReducer.taskList);
    const dispatch = useDispatch();
    const [taskInput, setTaskInput] = useState({
        name: "",
        desc: "",
        status: "",
        priority: "",
        assigned: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const obj = {
            [e.target.name]: e.target.value 
        }
        setTaskInput({
          ...taskInput, 
          ...obj
        }); 
    }
    const handleSubmit = () => {
        dispatch(actions.addTask(taskInput));
        history.replace("/");
    }

    const handleCancel = () => {
        history.replace("/");
    }

    return (
        <Paper className="wrapper" elevation={3}>
          <h2 className="pageHeader">Add Task</h2>
          <form className="form">
            <label>Task name</label>
              <input type="text" name="name" value={taskInput.name} onChange={handleChange} />
            <label>Task description</label>
              <textarea type="text" name="desc" value={taskInput.desc} onChange={handleChange} />
            <label>Status</label>
              <select name="status" value={taskInput.status} onChange={handleChange}>
                <option selected>Select</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Ready for QA</option>
                <option>Done</option>
                <option>Cancelled</option>
              </select>
            <label>Priority</label>
              <select name="priority" value={taskInput.priority} onChange={handleChange}>
                <option selected>Select</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            <label>Assigned To</label>
              <select name="assigned" value={taskInput.assigned} onChange={handleChange}>
                <option>Ben</option>
                <option>Jimmy</option>
                <option>Tom</option>
                <option>John</option>
                <option>Mark</option>
              </select>
            <button className="formButton" onClick={handleSubmit}>
                Add Task
            </button>
            <button className="formButton" onClick={handleCancel}>
                Cancel
            </button>
          </form> 
        </Paper>         
    )
}

export default AddTask;