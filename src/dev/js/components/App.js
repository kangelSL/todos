import React from 'react';
import ToDoList from '../containers/todoList';
import ToDoInput from '../containers/todoInput';

const App = () => (
    <div>
        <h2>Add to do item:</h2>
        <ToDoInput />
        <hr/>
        <h2>To do items:</h2>
        <ToDoList />
    </div>
);

export default App;