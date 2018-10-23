import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/paging.css';
import queryString from 'query-string';
import Page from './Page';
class Pagination extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // console.log('componentDidMount')
        /* const values = queryString.parse(this.props.location.search);
        if(values.page){
            console.log('yyy')
            this.setState({
                page : values.page
            })  
        } */
    }

    componentWillUpdate(nextProps, nextState){
        /* console.log('componentWillUpdate')
        console.log(nextProps, nextState);
        const values = queryString.parse(this.props.location.search);
        // console.log(nextProps, nextState, values)
        if( values &&  values.page != nextState.page){
            console.log('xxx')
            this.setState({
                page : 2
            })  
        } */
    }

    renderPage(pages){
        const {match, location } = this.props;
        const query = queryString.parse(location.search);
        console.log("PAGE: ",this.state.page);
        let url = match.url;
        let search = queryString.stringify(query);
        let spra = location.search  ? "&" : "?";
        let arrs =[];
        for (let i = 0; i < pages; i++) {
            arrs.push(i)            
        }
        return arrs.map( (page, index) => 
            {
                let m = {...query, page: index +1}
                return (<Link key={index} 
                    className={this.props.activePage === index + 1 ? 'active' : '' }
                    to={'todos?' + queryString.stringify(m) } >{index + 1}</Link>)
            }
        )
    }


    buildPages(){
        const {
            itemsCountPerPage,
            totalItemsCount,
            activePage,
            getPageUrl,
            onChange
        } = this.props;
        const pages = [];
        for(let i = 1; i < Math.ceil( totalItemsCount/itemsCountPerPage) ;i++ ){
            pages.push(<Page 
                key={i}
                isActive={ i === activePage }
                href={getPageUrl("todos?page=" + i)}
                pageText={i}
                onClick={onChange}
                pageNumber={i}
            />)
        }
        return pages;
    }
    render() {
        const {match} = this.props;
        const pages = this.buildPages();
        

        return (
            <nav>
                <ul className="pagination">
                    {/* <Link to={`${match.url}?page=${this.state.page - 1}`} >&laquo;</Link> */}
                       {pages}     
                    {/* <Link to={`${match.url}?page=${this.state.page + 1}`} >&raquo;</Link> */}
                </ul>
            </nav>
        );
    }
}

export default Pagination;