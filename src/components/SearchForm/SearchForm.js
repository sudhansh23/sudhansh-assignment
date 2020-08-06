import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
	state = {
		searchText: ''
	};

	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<input
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Search your images here..."
				/>
				<button type="submit" id="submit" className="search-button">
                    <i className="fa fa-search"></i>
				</button>
			</form>
		);
	}
}

export default SearchForm;