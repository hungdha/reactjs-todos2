import React, { Component } from 'react';
import SelectCheckbox from './SelectCheckbox';

class Home extends Component {
    render() {
        const data  = [
            {
                id  : 1,
                name : 'First Checkbox'
            },
            {
                id  : 2,
                name : '2 Checkbox'
            },
            {
                id  : 3,
                name : 'Three Checkbox'
            },
            {
                id  : 4,
                name : 'Four Checkbox'
            },
            {
                id  : 5,
                name : 'asda sd Checkbox'
            },
            {
                id  : 6,
                name : 'sd asd adas Checkbox'
            }
        ]
        return (
            <div>
                <h3 style={{fontSize:'30px', fontWeight:'500'}}>Welcome to Todo-App</h3>
                <img src={require('../assets/images/todo_logo_oriz.png')} alt="alt" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magni, iusto sint eius consequatur veritatis reprehenderit suscipit voluptatum dolor reiciendis optio eum! Facere quos dignissimos inventore eos repellat quis esse.</p>
                <h3>Select Checkbox Components</h3>
               <SelectCheckbox data={data} />
            </div>
            
        );
    }
}

export default Home;