const initState = {
    tasks: [
        {id: 0, content: "This is an important task", done: false},
        {id: 1, content: "This is alse an important task", done: false},
        {id: 2, content: "This is slightly less an important task", done: false},
    ],
    idCounter: 3
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        
        case 'DELETE_TASK': return {
            ...state,
            tasks: state.tasks.filter(obj => obj.id !== action.id)
        }
        case 'CHECK_TASK': return {
            ...state,
            tasks: state.tasks.map(obj => obj.id === action.id ? { ...obj, done: !obj.done} : obj)
        }
        case 'ADD_TASK': 
            let id = state.idCounter;
            let newObj = {id, content: action.task, done: false};
            return {
            ...state,
            tasks: [...state.tasks, newObj],
            idCounter: state.idCounter + 1,
            }
        default: return state
    }
    
}

export default rootReducer
