import React, { Component } from 'react';
import {connect} from 'react-redux';

class todoList extends Component {

    todoListItems() {
        return this.props.todos.map((todo, index) => {
            return (
                <div key={index}>
                   {todo.text}
                </div>
            )
        });
    }

    render() {

        if (!this.props.todos) {
            return (
                <div></div>
            );
        }

        return(
            <div>
                { this.todoListItems() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(todoList);