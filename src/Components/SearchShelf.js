import React, { Component } from 'react';
import Books from './books';

class SearchShelf extends Component {
    // deve receber a lista de livros do APP
    render(){
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    <Books />
                </ol>
            </div>
        )
    }
}

export default SearchShelf