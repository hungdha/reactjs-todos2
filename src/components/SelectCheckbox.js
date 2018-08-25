import React, { Component } from 'react';
import '../assets/css/selectcheckbox.css';
import PropTypes from 'prop-types';
class SelectCheckbox extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            expanded :  false,
            ids : []
        }      
    }
    handleDone(event){
        // console.log(this.props)
        if(this.props.onDone != undefined)
            this.props.onDone(this.state.ids);
        this.setState({
            expanded: false
        });
    }
    handleCancel(event){
        this.setState({
            expanded: false
        });
    }
    handleSelectUser(event){
        // console.log(this.state.ids)
        const uid = +event.target.value;
        if( event.target.checked ){

            let item = this.state.ids.find(
                (item)=>{
                    return item === uid
                }
            );
            
            
            if( item == undefined ){
               
                var newStateArray = [...this.state.ids];
                newStateArray.push(uid);
                this.setState({
                    ids: newStateArray
                })
            }
            else {
                
                var newStateArray = [...this.state.ids];
                var xx = newStateArray.filter((id) =>{
                    return id != uid;
                });
               
                this.setState( {
                    ids: xx
                })
            }
        }else{
            var newStateArray = [...this.state.ids];
            var xx = newStateArray.filter((id) => {
                return id != uid;
            });
           
            this.setState( {
                ids: xx
            })
        }
    }
    handleSelectAll(event){
        
        this.setState({
            ids : event.target.checked ? this.props.data.map((user)=> user.id ) : []
        })
    }
    showCheckboxes() {
       
        if (!this.state.expanded) {
            this.setState({expanded : true})
        } else {
            this.setState({expanded : false})
        }
    }
   
    checked(id){
      //  if( this.state.ids.length > 0 ){
            return this.state.ids.find((item) => {
                return item == id
            }) != undefined;
       // }
      //  return false
    }
    render() {
        let { assigns } = this.props;
        let totalAssigns = assigns ? assigns.length : 0;
        return (
                <div className="multiselect" >
                    <div className="selectBox" onClick={this.showCheckboxes.bind(this)}>
                        <select>
                            <option>Select a user ( {this.state.ids.length} assigned )</option>
                        </select>
                        <div className="overSelect"></div>
                    </div>
                    
                        <div style={{display: this.state.expanded ? 'block' : 'none' }} className="checkboxes" ref={ (el) => ( this.checkboxes = el ) }>
                       
                        {
                            this.props.data.map((item)=>(
                                <label key={item.id}>
                                    <input type="checkbox" value={item.id} onClick={this.handleSelectUser.bind(this)} defaultChecked={this.checked(item.id) } />{item.name}
                                </label>
                            ))
                        }
                        <button onClick={this.handleDone.bind(this) } >Apply</button>
                        <button onClick={this.handleCancel.bind(this)}>Cancel</button>
                        </div>
                    

                </div>
           
        );
    }
}

SelectCheckbox.propTypes = {
    data : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number.isRequired,
        name : PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default SelectCheckbox;