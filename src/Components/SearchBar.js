import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class SearchBar extends Component {
    state = {
        query: ''
    }
    
    // controla o estado de `query `
    updateQuery = (text) => {
        this.setState(() => ({
            query: text
        }));
        this.handleSearch()
    }
    // verifica se a string do estado `query` esta vazia. Caso sim, chama da função handleReset em props. Se houver algum conteúdo, irá chamar as funções que lidam com o loader e com a pesquisa no componente "Search"
    handleSearch = () => {
        if(this.state.query === ''){
            this.props.handleReset()
        } else{
            this.props.handleLoader()
            this.props.handleSearch(this.state.query)
        }
    }
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
                    <form>
                        <input 
                            type="text" 
                            value={this.state.query}
                            placeholder="Search by title or author"
                            onChange={(event) => {this.updateQuery(event.target.value)} }
                            />
                    </form>
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func,
    handleReset: PropTypes.func,
    handleLoader: PropTypes.func
    
}

export default SearchBar