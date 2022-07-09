export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    }
}

export const checkTask = (id) => {
    return {
        type: 'CHECK_TASK',
        id
    }
}

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task
    }
}