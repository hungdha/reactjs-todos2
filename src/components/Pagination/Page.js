import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Page extends Component {
    handleClick(e){
        // console.log('xx', e)
        const { isDisabled, pageNumber } =  this.props
        this.props.onClick(pageNumber)
    }
    render() {
        let {
            pageText,
            pageNumber,
            activeClass,
            itemClass,
            linkClass,
            activeLinkClass,
            disabledClass,
            isActive,
            isDisabled,
            href
        } = this.props;
        let classActive =  isActive ? 'active' : '';
        return (
            <li className={"page-item " + classActive } onClick={ (e) => this.handleClick(e) } >
                <Link to={href} className="page-link">
                    {pageText}
                </Link>
            </li>
        );
    }
}

export default Page;