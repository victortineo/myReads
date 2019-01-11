import React from 'react';
import Books from './books';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import { search } from '../BooksAPI';

class Search extends React.Component {
    state = {
        books: [],
        failedQuery: false,
        loading: false
    }
    // desativa o loader
    toggleLoadgin = () =>{
        this.setState({
            loading: true
        })
    }
    // verifica se houve erro na query de pesquisa
    // Se sim, altera o estado `failedQuery` para true, `loading` para false e books recebe um array vazio
    // caso não haja erros, `failedQuery` continua como false, `loading` muda para false e `books` recebe o resultado do método search da API
    handleSearch = books => {
        if(books.error){
            this.setState({
                books: [],
                failedQuery: true,
                loading: false
            })
        } else {
            this.setState({
                books: [...books],
                failedQuery: false,
                loading: false
            })
        }
    }

    // usa o método search da API com uma string vinda do component "SearchBar"
    onSearch = text => {
        search(text)
        .then(books => {
            this.handleSearch(books)
        })
    }

    // Caso o a string do formulário de "SearchBar" esteja vazia, `books` recebe um array vazio
    handleReset = () =>{
        this.setState({
            books: []
        })
    }
    render() {
        return (
            <React.Fragment >
                <SearchBar 
                    handleSearch={this.onSearch} 
                    handleReset={this.handleReset}
                    handleLoader={this.toggleLoadgin}
                    />
                <Books 
                    books={this.state.books} 
                    fromSearch={true}
                    failedQuery={this.state.failedQuery} 
                    currentBooks={this.props.books}
                    handleChange={this.props.handleChangeBook}
                    loading={this.state.loading}
                />
            </React.Fragment >
        )
    }
}

Search.propTypes = {
    handleChangeBook: PropTypes.func,
    books: PropTypes.arrayOf(PropTypes.object)
}
export default Search

