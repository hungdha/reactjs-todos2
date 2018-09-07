import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../actions';

class Link extends Component {
  
    render() {
        return (
            <div style={{fontSize:'13px'}}>
                <a style={{cursor: 'pointer',
        color: 'blue'}} onClick={this.props.onDelete}>Delete</a> | 
                <a   style={{cursor: 'pointer',
        color: 'blue'}} onClick={this.props.onEdit}>Edit</a> | 
                {!this.props.completed ? (
                    <a  style={{cursor: 'pointer',
        color: 'blue'}} onClick={this.props.onCompleted }>Completed</a>
                ) : (
                    <a  style={{cursor: 'pointer',
        color: 'blue'}} onClick={this.props.onCompleted}>Unfinished</a>
                )
                }
                
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => (
    {

    }
)

const mapDispatchToProps = (dispatch, ownProps) =>(
    {
        onDelete : () => 
            dispatch(deleteTodo(ownProps.id))
        ,
        onEdit : () => dispatch(editTodo(ownProps.id)),
        onCompleted : () => dispatch(toggleTodo(ownProps.id))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);