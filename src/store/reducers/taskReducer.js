import * as actionTypes from '../actions/actionTypes';

const initialState = {
    taskList: [],
    error: false,
    isLoggedIn: localStorage.getItem("isLoggedIn")
}

const addTask = (state, action) => {
    const data = {...state.taskList, ...action.data} 
    return {
        ...state,
        taskList: data
    }
}

const removeTask = (state, action) => {
    return {
        ...state,
        taskList: action.data
    }
}

const setTaskList = (state, action) => {
    return {
        ...state,
        taskList: action.data
    }
}

const fetchTaskListFailed = (state, action) => {
    return {
        ...state,
        error: true
    }
}

const loginReduce = (state, action) => {
    return {
        ...state,
        isLoggedIn: true
    }
}

const logoutReduce = (state, action) => {
    return {
        ...state,
        isLoggedIn: false
    }
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADDTASK: return addTask(state, action);
        case actionTypes.REMOVETASK: return removeTask(state, action);
        case actionTypes.SETTASKLIST: return setTaskList(state, action);
        case actionTypes.FETCHTASKLISTFAILED: return fetchTaskListFailed(state, action);
        case actionTypes.LOGIN: return loginReduce(state, action);
        case actionTypes.LOGOUT: return logoutReduce(state, action);
        default: return state;
    }
}

export default taskReducer;