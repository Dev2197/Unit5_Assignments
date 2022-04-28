import {combineReducers, legacy_createStore as createStore} from 'redux'
import { countReducer } from './Counter/reducer'
import {TodoReducer} from './Todos/reducer'

const rootReducer = combineReducers({
    counter : countReducer,
    todos : TodoReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(()=>{
//     console.log("sub:", store.getState())
// })