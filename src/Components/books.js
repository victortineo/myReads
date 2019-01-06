import React, {Component} from 'react';
import Book from './book';

class Books extends Component {
    // deverá filtrar os livros que aparecerão à partir do seu tipo
    render(){
        return(
            <ol className="books-grid">
                {this.props.books.map(book => 
                    <li key={book.id}>
                        <Book book={book} handleChange={this.props.handleChange} currentBook={book.id}/>
                    </li>
                )}
            </ol>
        )
    }
}

export default Books