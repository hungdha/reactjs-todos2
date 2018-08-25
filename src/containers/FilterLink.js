import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setVisibilityFilter, VisibilityFilters} from '../actions'
class Link extends Component {
    render() {
        return (

                <a
                href="#"
                onClick={this.props.onClick}
                disabled={this.props.active}
                style={{
                    marginLeft: '4px',
                }}
                >
                {this.props.children}
                </a>

        );
    }
}
Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

  const mapStateToProps = (state, ownProps) => (
    {
        active : ownProps.filter === state.visibilityFilter,
    }
  )

  const mapDispatchToProps = (dispatch, ownProps) => (
      {
          onClick : () => dispatch(setVisibilityFilter(ownProps.filter))
      }
  )
  


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);