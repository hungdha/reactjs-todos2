import React, { Component } from 'react';


class UserForm extends Component {
    constructor(props) {
        super(props);

        this.txtBirthday = React.createRef();
        this.txtFullname = React.createRef();
        this.txtUsername = React.createRef();
        this.txtEmail = React.createRef();
        this.txtPhone = React.createRef();

        this.state = {
            user: {
                fullname : '',
                username : '',
                email : '',
                phone : '',
                birthday : ''
            }
        }
    }
    
    submitUser(event){
        event.preventDefault();
        const {user} = this.state;
        this.props.onAddUser(user);

        /* txtFullname.current.value = '';
        txtBirthday.current.value= '';
        txtPhone.current.value= '';
        txtUsername.current.value= '';
        txtEmail.current.value= ''; */
    }

    render() {
        // console.log('new user');
        // console.log(this.props.newUser);
        // const { newUser } = this.props;
        // const { user } = this.props.newUser;
        return (
            <form onSubmit={ (e) => this.submitUser(e)} >
                <h3>User Form</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Fullname:  {this.state.fullname}</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter fullname"
                                onChange={(e) => this.setState(
                                    { user :{
                                            ...this.state.user,
                                            fullname : e.target.value 
                                            }
                                    }) 
                                } />
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input  
                                type="text" 
                                className="form-control"  
                                placeholder="Enter username"
                                onChange={(e) => this.setState(
                                    { user :{
                                            ...this.state.user,
                                            username : e.target.value 
                                            }
                                    }) 
                                }
                                />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email"
                                onChange={(e) => this.setState(
                                    { user :{
                                            ...this.state.user,
                                            email : e.target.value 
                                            }
                                    }) 
                                }
                                />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Phone</label>
                            <input 
                            
                            type="text" 
                            className="form-control" placeholder="Enter phone"
                            onChange={(e) => this.setState(
                                    { user :{
                                            ...this.state.user,
                                            phone : e.target.value 
                                            }
                                    }) 
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label >Birthday</label>
                            <input
                                type="text" 
                                className="form-control"
                                placeholder="Enter birthday"
                                onChange={(e) => this.setState(
                                    { user :{
                                            ...this.state.user,
                                            birthday : e.target.value 
                                            }
                                    }) 
                                }
                                />
                        </div>
                    
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">Add User</button>
                    </div>
                </div>
                
            </form>
        );
    }
}

export default UserForm;