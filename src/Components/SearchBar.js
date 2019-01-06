import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class SearchBar extends Component {
    // estado para o que esta escrevendo + função para lidar com o form + função para pesquisar
    render() {
        return(
            <div className="search-books-bar">
                <Link 
                    className="close-search" 
                    to="/">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    {/* criar estado pra cá */}
                    <input type="text" placeholder="Search by title or author"/>
                </div>
            </div>
        )
    }
}
export default SearchBar