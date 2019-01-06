import React from 'react';
import ReadingShelf from './ReadingShelf';
import Fab from './fab';
import * as BooksAPI from '../BooksAPI'

class Home extends React.Component {
    state = {
        wantToRead: [],
        currentlyReading: [],
        read: []
    }
    
    populateState = book => {
        if(book.shelf === 'wantToRead'){
            this.setState(currentState => ({
                wantToRead: [...currentState.wantToRead, book]
            }))
        }
        else if(book.shelf === 'currentlyReading'){
            this.setState(currentState => ({
                currentlyReading: [...currentState.currentlyReading, book]
            }))
        }
        else if(book.shelf === 'read'){
            this.setState(currentState => ({
                read: [...currentState.read, book]
            }))
        }
    }

    componentDidMount(){
        BooksAPI.getAll()
        .then(books => {
           books.map(book => this.populateState(book))
        });
    }

    resetShelf = (shelf, books) => {
        this.setState(({
            [shelf]: [...books]
        }))
    }

    addToShelf = (shelf, book) => {
        if(!(shelf === 'none')){
            this.setState(currentState => ({
                [shelf]: [...currentState[shelf], book]
            }))
        }
    }

    changeBookState = (book, nextShelf) => {
        // Validação: Caso o shelf anterior e o novo sejam o mesmo, a função para de executar 
        if(nextShelf === book.shelf){
            return false;
        }
        const newBook = {...book, shelf:nextShelf}
        const newPreviousShelf  = this.state[book.shelf].filter(b => book.id !== b.id)
        BooksAPI.update(book, nextShelf)
        .then(() => (
            this.resetShelf(book.shelf, newPreviousShelf),
            this.addToShelf(nextShelf, newBook)
        ))
    }

    render() {
        return (
            <React.Fragment >
                <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <ReadingShelf name="Quero Ler" shelf={this.state.wantToRead} handleChange={this.changeBookState} />
                    <ReadingShelf name="Atualmente Lendo" shelf={this.state.currentlyReading} handleChange={this.changeBookState} />
                    <ReadingShelf name="Já lido" shelf={this.state.read} handleChange={this.changeBookState} />
                </div>
                </div>
                <Fab />
            </React.Fragment>
        )
    }
}

export default Home