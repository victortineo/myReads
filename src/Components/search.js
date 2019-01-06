import React from 'react';
import SearchShelf from './SearchShelf';
import SearchBar from './SearchBar';
// import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
    render() {
        return (
            <React.Fragment >
                <SearchBar />
                <SearchShelf />
            </React.Fragment >
        )
    }
}

export default Search

