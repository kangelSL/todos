import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { addTodo } from '../actions/todoActions';

class todoInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        }

        this.onChangeInputText = this.onChangeInputText.bind(this);
    }

    onChangeInputText(e) {
        this.setState({
            inputText: e.target.value
        });
    }

    render() {
        return(
            <div>
                <input type="text" onChange={this.onChangeInputText} value={this.state.inputText} placeholder="Add text"></input>
                <button type="button" onClick={() =>{ this.props.addTodo(this.state.inputText); this.setState({ inputText: '' }) } }
                    style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button>
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        inputValue: state.inputValue
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addTodo: addTodo }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(todoInput);