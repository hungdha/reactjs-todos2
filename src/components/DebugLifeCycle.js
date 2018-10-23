import React, { Component } from 'react';

class DebugLifeCycle extends Component {
    constructor(props){
        super(props);
        console.log('1. constructor')
        this.state = {
            plus : 0
        }
    }
    componentWillMount(){
        console.log('2. componentWillMount')
    }
    componentDidMount(){
        console.log('3. componentDidMount')
        console.log('value state', this.state.plus )
    }
    componentWillReceiveProps( newProps, newState){
        console.log('4. componentWillReceiveProps')
        console.log("value1: " , newProps, newState)
        
    }
    shouldComponentUpdate(newProps, newState){
        console.log('5. shouldComponentUpdate')
        console.log("value2: " , newProps, newState)
        
        return true
    }
    componentWillUpdate(newProps, newState){
        console.log('6. componentWillUpdate')
        console.log("value3: " , newProps, newState)
    }
    componentDidUpdate(oldProps, oldState){
        console.log('7. componentDidUpdate')
        console.log("value4: " , oldProps, oldState)
    }
    componentWillUnmount(){
        console.log('8. componentWillUnmount')
    }
    render() {
        return (
            <div>
            <button onClick={ () => this.setState({ plus : this.state.plus + 1 })}>State Plus +1</button>
            
            <p>Props Number: {this.props.number } + State Plus {this.state.plus} = { this.props.number + this.state.plus }</p>    
                
            </div>
        );
    }
}

export default DebugLifeCycle;