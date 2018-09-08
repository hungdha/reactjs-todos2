import React, { Component } from 'react';
import '../assets/css/paging.css';
class Paging extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage : 1
        }
    }
    handlePage(e, page){
        e.preventDefault();
        this.props.handleClick(page)
        this.setState({
            currentPage : page
        })
    }
    renderPage(pages){
        let arrs =[];
        for (let i = 0; i < pages; i++) {
            arrs.push(i)            
        }
        return arrs.map( (index) => (
            <a href="#" key={index} onClick={(e)=> this.handlePage(e, index+1)} >{index + 1}</a>
        ))
    }
    render() {
        return (
            <div> Shown : page {this.state.currentPage}/{this.props.pages} total pages
                <div className="pagination">
                    <a href="#">&laquo;</a>
                        {this.renderPage(this.props.pages)}               
                    <a href="#">&raquo;</a>
                </div>
            </div>
        );
    }
}

export default Paging;