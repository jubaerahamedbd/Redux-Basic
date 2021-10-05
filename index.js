const redux = require('redux');
//console.log(redux)

//state
const initState = {
    num: 0
}

//reducer
const rootReducer = (state = initState, action) => {
    if (action.type == 'INC_NUM') {
        return {
            ...state,
            num: state.num + 1
        }
    }
    if (action.type == 'ADD_NUM') {
        return {
            ...state,
            num: state.num + action.value
        }
    }
    if (action.type == 'DEC_NUM') {
        return {
            ...state,
            num: state.num - 1
        }
    }
    return state;
}


//store
const store = redux.createStore(rootReducer);
console.log(store.getState())

//subscribe

store.subscribe(() => {
    console.log("[Subscribe]", store.getState())
})


// Dispatching Action
store.dispatch({
    type: 'ADD_NUM',
    value: 34
})

store.dispatch({
    type: 'INC_NUM'
})

store.dispatch({
    type: 'DEC_NUM',
    value: 34
})