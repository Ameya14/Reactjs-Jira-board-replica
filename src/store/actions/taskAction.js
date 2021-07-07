import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const addTaskSuccess = (data) => {
    return (
        { 
            type: actionTypes.ADDTASK
        }
    )
}

export const addTaskFailed = (err) => {
    return (
        { 
            type: actionTypes.FETCHTASKLISTFAILED
        }
    )
}

export const removeTaskSuccess = (data) => {
    return (
        { 
            type: actionTypes.REMOVETASK, 
            data: data
        }
    )
}

export const removeTaskFailed = (err) => {
    return (
        { 
            type: actionTypes.FETCHTASKLISTFAILED
        }
    )
}

export const setTaskList = (data) => {
    return (
        { 
            type: actionTypes.SETTASKLIST, 
            data: data
        }
    )
}

export const fetchTaskListFailed = () => {
    return (
        { 
            type: actionTypes.FETCHTASKLISTFAILED
        }
    )
}

export const addTask = (data) => {
    return dispatch => (
        axios.post("/taskList.json", data)
            .then( res => {
                dispatch(initTaskList())
            })
            .catch( err => {
               dispatch(addTaskFailed(err))
            })
    )
}

export const removeTask = (data) => {
    return dispatch => (
        axios.put("/taskList.json", data)
            .then( res => dispatch(removeTaskSuccess(data)))
            .catch( err => dispatch(removeTaskFailed(err)))
    )
}

export const initTaskList = () => {
    return dispatch => (
        axios.get('/taskList.json')
            .then(res => {
                dispatch(setTaskList(res.data))
            })
            .catch(err => {
                dispatch(fetchTaskListFailed())
            })
    )
}

export const loginAct = () => {
    return (
        { 
            type: actionTypes.LOGIN
        }
    )
}

export const logoutAct = () => {
    return (
        { 
            type: actionTypes.LOGOUT
        }
    )
}