import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <div>
                <form action="" >
                    <div>
                        <h3>Sign In</h3>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                            Remember me!
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-md-2">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
                <hr/>
                <div className="offset-md-5">
                    <button className="btn btn-primary">Facebook</button>
                    <button className="btn btn-primary">Twitter</button>
                    <button className="btn btn-primary">GitHub</button>
                </div>
            </div>
        );
    }
}

export default SignIn;
