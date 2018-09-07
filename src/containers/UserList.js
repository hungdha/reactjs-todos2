import React, { Component } from 'react';
import UserList from '../components/UserList';
import {connect} from 'react-redux';
import {getAllUsers} from '../actions';
class UserListContainer extends Component {
    componentDidMount(){
        let { dispatch } = this.props;
        dispatch(getAllUsers());
    }
    render() {
        return (
            <UserList {...this.props} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    users : state.users,
    assigned : state.assigned
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})
export default connect(
    mapStateToProps
)(UserListContainer);