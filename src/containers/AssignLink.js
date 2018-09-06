import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssignBox from '../components/AssignBox';
import SelectCheckbox from '../components/SelectCheckbox';
import { assignUsers } from '../actions';
import PropTypes from 'prop-types';

class AssignLink extends Component {
    handleAssign(users){
        let {dispatch, todoid} = this.props;
        dispatch(assignUsers(users, todoid))
    }
    render() {
        return (
            <div>
                <SelectCheckbox data={this.props.users} 
                onDone={(e) => this.handleAssign(e)}    
                 />
            </div>
        );
    }
}
AssignLink.propTypes = {
    todoid: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => (
    {
        users : state.users,
        assigned : state.assigned
    }
)

const mapDispatchToProps = (dispatch, ownProps) =>(
    {
        
    }
)


export default connect(
    mapStateToProps
    // mapDispatchToProps
)(AssignLink);
// export default connect()(AssignLink);