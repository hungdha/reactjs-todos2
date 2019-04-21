import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deleteTodo, toggleTodo, updateTodoEditing, fetchTodos } from '../actions/todos';
import { fetchCommentsOfTodo } from '../actions/comments';

class Link extends Component {
    
    componentDidMount(){

    }
    render() {
        return (
            <div style={{fontSize:'13px'}}>

                <a href="javascript:void(0);"  onClick={this.props.onEdit}>Preview</a> | 
                <a href="javascript:void(0);"  onClick={this.props.onEdit}>Quick Edit</a> | 
                <a href="javascript:void(0);" onClick={this.props.onDelete}>Delete</a> | 
                {!this.props.completed ? (
                    <a href="javascript:void(0);"   onClick={this.props.onCompleted }>Completed</a>
                ) : (
                    <a href="javascript:void(0);"   onClick={this.props.onCompleted}>Unfinished</a>
                )
                }|
                <a href="javascript:void(0);"  onClick={this.props.onFetchComments}>Comment</a>
                
            </div>
        );
    }
}




const mapStateToProps = (state, ownProps) => ({
    paramFilters : state.paramFilters
})

const mapDispatchToProps = (dispatch, ownProps) =>(
    {
        onDelete : () => dispatch(deleteTodo(ownProps.todo.id)).then( ()=> {
            dispatch(fetchTodos())
        } ),
        onEdit : () => dispatch(updateTodoEditing(ownProps.todo.id)),
        onCompleted : () => dispatch(toggleTodo(ownProps.todo)).then( () => {
            dispsatch(fetchTodos())
        }),
        onFetchComments : () => dispatch(fetchCommentsOfTodo(ownProps.todo)) 
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);