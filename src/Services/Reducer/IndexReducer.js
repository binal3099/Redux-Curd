import {combineReducers} from 'redux'
import StudentReducer from './StuReducer'
import { counter_Reducer } from './CounterReducer';
import { SagaCounter } from './CounterSaga';


const MainReducer = combineReducers({
    StudentReducer,
    counter_Reducer,
    SagaCounter
})

export default MainReducer;