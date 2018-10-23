import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createTodo, fetchTodos, resetNewTodo } from '../actions/todos';
// import { createUser } from '../actions/users';
const initialState = {
    title : 'xx',
    content : 'oo',
    completed : true
}
class AddTodo extends Component {
   /*  static contextTypes = {
        router: PropTypes.object
    }; */
    constructor(props){
        super(props)
        this.state = initialState
    }

    componentWillMount() {
        this.props.resetMe()
    }

    componentWillReceiveProps(nextProps){
        /* if( nextProps.newTodo.todo && !nextProps.newTodo.error ){
            this.context.router.push('/')
        } */
    }


    saveTodo(event) {
        event.preventDefault();
        this.props.saveTodo(this.state)
        // reset state
        this.setState( initialState);
    }
    renderError(newTodo) {
        if (newTodo && newTodo.error) {
          return (
            <div className="alert alert-danger">
              { newTodo ? newTodo.error : '' }
            </div>
            );
        } else {
          return <span></span>
        }
    }
    renderSuccess(newTodo){
        if (newTodo && newTodo.todo) {
            return (
              <div className="alert alert-success">
                Todo inserted sucessfully !!!
              </div>
              );
          } else {
            return <span></span>
          }
    }
    render() {
        const { newTodo } = this.props;
        return (
            <div>
                <a href="/todos">Go to list</a>
                <pre>{JSON.stringify(this.state) }</pre>
                { this.renderError(newTodo) }
                { this.renderSuccess(newTodo) }
                <form onSubmit={ (event) => this.saveTodo(event) } >
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" 
                            className="form-control" 
                            value={this.state.title} 
                            placeholder="enter title here"
                            onChange = { (event) => this.setState({ title : event.target.value })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <textarea rows="5" 
                            className="form-control" 
                            placeholder="enter content here..."
                            onChange={ (event) => this.setState({content : event.target.value })}
                            defaultValue={this.state.content}>
                        </textarea>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" 
                            defaultChecked={this.state.completed} 
                            id="checkCompleted"
                            onChange={ (event) => this.setState({ completed : event.target.checked })} />
                        <label className="form-check-label" htmlFor="checkCompleted">Completed</label>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Post</button>
                </form>
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => ({
    newTodo: state.todos.newTodo,
    editTodo : state.todos.editTodo
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    saveTodo : (data) => dispatch(createTodo( data )),
    resetMe : () => dispatch(resetNewTodo())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);