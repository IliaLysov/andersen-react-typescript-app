export const setUser = (name: string) => {
    return {
        type: 'SET_USER',
        payload: name
    }
}

export const addTask = (task: string) => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const deleteTask = (index: number) => {
    return {
        type: 'DELETE_TASK',
        payload: index
    }
}

export const editTask = (index: number, task: string) => {
    return {
        type: 'EDIT_TASK',
        payload: {
            index: index,
            task: task
        }
    }
}

export const changeStatus = (index: number) => {
    return {
        type: 'CHANGE_STATUS',
        payload: index
    }
}