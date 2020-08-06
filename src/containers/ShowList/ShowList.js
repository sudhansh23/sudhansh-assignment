import React, { Component } from 'react';
import DisplayImageList from '../../components/ImageList/DisplayImageList';
import SearchForm from '../../components/SearchForm/SearchForm';
import './ShowList.css';
import axios from 'axios';

class ShowList extends Component{
    state= {
        imgs: [],
        displayList: false
    }

    componentDidMount(){
        let url = 'https://api.unsplash.com/photos/?page=1&per_page=9&total=18&client_id=Utvc1kHVV3vU_qJhxJYVVLm4jqOJFj9CJaNM1UlDqRg';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ imgs: data, displayList: true})
            })
    }

    performSearch = (query) => {
        axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=30&query=${query}&client_id=Utvc1kHVV3vU_qJhxJYVVLm4jqOJFj9CJaNM1UlDqRg`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, displayList: true });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
    }
    render(){
        return(
            <React.Fragment>
                <div className="main-content">
                    <SearchForm onSearch={this.performSearch} />
					{this.state.displayList ? <DisplayImageList data={this.state.imgs} /> : null }
                    <div className="load-more">
                        <button className="load-more-button">Load More</button>
                    </div>
				</div>
                
            </React.Fragment>
        );
    }
}

export default ShowList;