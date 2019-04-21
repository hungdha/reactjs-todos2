import React, { Component } from 'react';

class Comments extends Component {
    constructor(props){
        super(props);
    }
/* 
    shouldComponentUpdate(nextProps, nextState){
        return this.props.commentsList.todo.id == nextProps.todo.id;
    }

    
    componentWillUpdate(nextProps, nextState){
    
         if( this.props.commentsList.todo.id == nextProps.todo.id)
            console.log(this.props.todo.id);

    }
 */
    render() {
        const { loading, comments  } = this.props.commentsList;
        if(!loading)
            return (

                <ul>
                    {  comments.length > 0 ? comments.map( (comment, index) => (
                        <li key={index}>{comment.comment}</li>
                    )) : 
                    <ul>
                        <li>mm</li>
                        <li>mm</li>
                        <li>mm</li>
                        <li>mm</li>
                    </ul>

                     }
                </ul>
            );
        else 
            return (<h2>loading</h2>)
    }
}

export default Comments;