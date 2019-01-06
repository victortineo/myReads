import React, {Component} from 'react';
import MoveDropdown from './MoveDropdown';

class Book extends Component {
  handleChange = (e, book = this.props.book, currentShelf = this.props.book.shelf) => {
    this.props.handleChange(book, e, currentShelf)
  }
  render(){
    const book = this.props.book
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <MoveDropdown current={book.shelf} handleChange={this.handleChange}/>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.map((author, i) => (book.authors.length === i + 1) ? author : `${author}, `)}</div>
      </div>
    )
  }
}

export default Book