import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment } from '../../models/comment';
import {addComment} from '../../actions/comments';

class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            text : null
        }
    }
    handlePostComment(e){
        const val = e.target.value;
        // console.log(e);
        e.preventDefault();
        // console.log(this.state.text);
        // 
        // console.log(this.props.todo);
        if(this.state.text != null ){
            // var comment = new Comment();
            // comment.todo_id =  this.props.todo.id;
            // comment.user_id = 10;
            // comment.comment = this.state.text;

            // console.log(comment);
            // this.props.addComment(comment)

            const comment = { 
                todo_id : this.props.todo.id,
                user_id : 10,
                comment : this.state.text
            }
            this.props.addComment(comment)
        }
    }
    render() {
        return (
            <form>
                { this.state.text }
                <textarea className="form-control" 
                    placeholder="write a comment"
                    defaultValue={ this.state.text }
                    onChange={ (e)=> this.setState({text: e.target.value }) }></textarea>
                <button onClick={(e) => this.handlePostComment(e) }>Post</button>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) =>({
    todo : ownProps.todo
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addComment : (data) => {dispatch(addComment(data))}
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);