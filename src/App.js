import React from 'react';
// import * as BooksAPI from './BooksAPI'
import Home from './Components/home';
import Search from './Components/search'
import './App.css';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class BooksApp extends React.Component {
  state = {
    wantToRead: [],
    currentlyReading: [],
    read: [],
    loading: true
  }

    // Adiciona um livro à sua estante
    populateState = book => {
      this.setState(currentState => (
          {
              [book.shelf]: [...currentState[book.shelf], book]
          }
      ))
    }

    // Recebe uma estante e uma lista de livros 
    // Os livros da estante serão substituidos por esses
    resetShelf = (shelf, books) => {
        this.setState(({
          [shelf]: [...books]
        }))
    }
    // Adiciona um livro à uma estante específica
    addToShelf = (shelf, book) => {
        if(!(shelf === 'none')){
          this.setState(currentState => ({
              [shelf]: [...currentState[shelf], book]
          }))
        }
    }

    // Handler que lida com a alteração de prateleira do livro 
    // Recebe o livro, a prateleira que ele será adicionado e a prateleira atual 
    onChangeBookState = (book, nextShelf, currentShelf) => {
        
        // Validação: Caso o shelf anterior e o novo sejam o mesmo, a função para de executar 
        if(nextShelf === currentShelf){
            return false;
        }
        // `newBook` muda o parâmetro "shelf" do objeto para que ele continue igual ao que será recebido da API
        const newBook = {...book, shelf:nextShelf}
        
        let newPreviousShelf
        // Se o livro pertencer à alguma prateleira, ele será arrancado para criar uma nova shelf
        if(currentShelf !== 'none'){
            newPreviousShelf  = this.state[currentShelf].filter(b => book.id !== b.id)
        }
        BooksAPI.update(book, nextShelf)
        .then(() => (
            this.addToShelf(nextShelf, newBook),
            currentShelf !== 'none' && (this.resetShelf(currentShelf, newPreviousShelf)),
            NotificationManager.success('Livro movido com sucesso', 'Uhul =D')
        ))
    }
    // Requisita os dados da API e chama a função que popula o estado quando a requisição acontece
    componentDidMount(){
        BooksAPI.getAll()
        .then(books => {
            books.map(book => this.populateState(book))
            this.setState({
                loading: false
            })
        });
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <Home 
                        shelfs={this.state}
                        handlePopulateState={(book) => this.populateState(book)}
                        handleChangeBook={this.onChangeBookState}
                        loading={this.state.loading}
                    />
                    )}
                />
                <Route path='/search' render={( {history} ) => (
                    <Search 
                        handleChangeBook={this.onChangeBookState}
                        books={[...this.state.wantToRead, ...this.state.currentlyReading, ...this.state.read]}
                        />
                    )} 
                />
                <NotificationContainer enterTimeout={400} leaveTimeout={100}/>
            </div>
        )
    }
}

export default BooksApp
