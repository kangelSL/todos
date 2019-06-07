import { combineReducers } from 'redux';
import reducerTodos from './reducer-todos';

const appReducers = combineReducers({
    todos: reducerTodos
});

export default appReducers;