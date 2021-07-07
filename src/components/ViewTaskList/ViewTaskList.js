import {useSelector, useDispatch} from 'react-redux';
import "./ViewTaskList.css";
import * as action from '../../store/actions/taskAction';
import Card from "../Card/Card";

function ViewTaskList({status}) {
    const taskList = useSelector(state => state.taskReducer.taskList);
    const dispatch = useDispatch();
    var data = Object.values(taskList).filter((el, i) => el.status == status)
    const handleRemoveItem = (e, index) => {
        e.preventDefault();
        let result =  window.confirm("Do you want to delete this item?");    
        if(result === true) {
            const data = taskList.filter((el, i) => i !== index)
            dispatch(action.removeTask(data))
        }
    }

    return (
        // <ul>
        //     {
        //         (taskList.length > 0) ?
        //         taskList.map((item, index) => 
        //             <li key={index}>
        //                 <span className="taskItem" onClick={(e) => handleRemoveItem(e, index)}>{item}</span>
        //             </li>
        //         ) 
        //         : null
        //     }
        // </ul>
        <>
             {
                (data.length > 0) ?
                data.map((item, index) => 
                    <Card key={index} data={item}/>     
                ) 
                : null
            }   
        </>
    );
}

export default ViewTaskList;