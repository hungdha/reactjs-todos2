import React from 'react';
import { connect} from 'react-redux';
import Comments from '../components/Comment/Comments';
// import { fetchCommentsOfTodo } from '../actions/comments';

const mapStateToProps = (state,ownProps) => ({
    commentsList : state.comments.commentsList
    //todo : state.comments.commentsList.todo
}) ;

const mapDispatchToProps = (dispatch, ownProps) => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments)