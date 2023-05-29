// import { combineReducers } from "redux"

interface TaskObject {
    task: string,
    status: boolean
}

let tasks: TaskObject[] = []

const initialState = {
    name: '',
    tasks: tasks
}

const commonReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, name: action.payload}
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, {task: action.payload, status: false}]}
        case 'DELETE_TASK':
            let array = [...state.tasks]
            array.splice(action.payload, 1)
            return {...state, tasks: array}
        case 'EDIT_TASK':
            let newArray = [...state.tasks]
            let task: TaskObject = newArray.splice(action.payload.index, 1)[0]
            let newTask: TaskObject = {task: action.payload.task, status: task.status}
            newArray.splice(action.payload.index, 0, newTask)
            return {...state, tasks: newArray}
        case 'CHANGE_STATUS':
            tasks = [...state.tasks]
            let statusTask: TaskObject = tasks.splice(action.payload, 1)[0]
            let newStatusTask: TaskObject = {task: statusTask.task, status: !statusTask.status}
            tasks.splice(action.payload, 0, newStatusTask)
            return {...state, tasks: tasks}
        default:
            return state
    }
}


export default commonReducer