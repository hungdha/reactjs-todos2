import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateTodo,editTodo  } from '../actions';
class EditTodo extends Component {

    handleSave(event){
        event.preventDefault();
        let {id, dispatch} = this.props;
        dispatch(updateTodo({
            id : id, 
            text: this.refs.text.value
        }));
        dispatch(editTodo(0))
    }
    handleCancel(event) {
        event.preventDefault();
        let {dispatch} = this.props
        dispatch(editTodo(0))
    }
    onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
          e.preventDefault();
        //   this.myFormRef.submit();
            this.handleSave(e);
        }
      }
    render() {
        if (this.props.editing === this.props.id ) {
            return (
                <form ref={el => this.myFormRef = el}>
                    <div style={{ width:'500px'}}>
                        <textarea style={{ width:'100%', height:'50px'}} ref="text" defaultValue= {this.props.text} onKeyDown={this.onEnterPress} >
                        </textarea>
                        <div style={{display:'block', margin:'10px 0'}}>
                            <button type="submit" onClick={this.handleSave.bind(this)} >Save</button>
                            <button onClick={this.handleCancel.bind(this)} >Cancel</button>
                        </div>
                    </div>
                </form>
            )
        }else{
            return (<div></div>)
        }
    }
}


const mapStateToProps = (state, ownProps) => ({
  editing: state.editing
})

export default connect(mapStateToProps)(EditTodo);