import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateTodo, updateTodoEditing, fetchTodos  } from '../actions/todos';

class QuickEditFormTodo extends Component {
    constructor(props){
        super(props)
        this.state = props.todo;
    }
    handleSave(event){
        event.preventDefault();
        this.props.save(this.state)    
        this.props.cancelEdit()    
    }
    handleCancel(event) {
        event.preventDefault();
        this.props.cancelEdit()
    }
  
    render() {
        const {updateTodo, todo } = this.props;
        if (updateTodo.editing === todo.id ) {
            return (
                <form ref={el => this.myFormRef = el}>
                    <h4>Quick Edit</h4>
                    <div>
                        <input value={this.state.title} className="form-control"
                            onChange={ (event) => this.setState({ title : event.target.value })} />
                        <textarea style={{ width:'100%', height:'50px'}} 
                            defaultValue={this.state.content}
                            onChange={ (event) => this.setState({ content : event.target.value })} 
                            className="form-control"
                            >
                        </textarea>
                        
                        <div style={{display:'block', margin:'10px 0'}}>
                            <button type="submit" onClick={this.handleSave.bind(this)} className="btn btn-primary">Save</button>
                            <button onClick={this.handleCancel.bind(this)} className="btn btn-default" >Cancel</button>
                        </div>
                    </div>
                </form>
            )
        }else{
            return (<span></span>)
        }
    }
}


const mapStateToProps = (state, ownProps) => ({
    updateTodo: state.todos.updateTodo
})

const mapDispathToProps = (dispatch, ownProps) => ({
    cancelEdit : () => dispatch(updateTodoEditing(0)),
    save : (data) => dispatch(updateTodo(data)).then( () => {
        dispatch(fetchTodos())
    }) 
})

export default connect(
    mapStateToProps,
    mapDispathToProps
    )(QuickEditFormTodo);