import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Book extends Component {
  // O estado com a estante atual foi criado para poder garantir que além de mudar o estado no APP.js, também mudaria visualmente neste componente
  state = {
    shelf: '',
  }

  // chama a função que muda o livro de estante no APP.js.
  // Altera o estado atual do componente para a estante em que o livro foi alterado.
  handleChange = (e, currentShelf = this.state.shelf, book = this.props.book,) => {
    this.props.handleChange(book, e, currentShelf)
    this.changeShelf(e)
  }

  // Altera o estado do componente atual
  changeShelf = shelf => {
    this.setState({
      shelf: shelf
    })
  }

  // define, à partir dos livros que estão nas estantes do APP.js a estante atual de cada livro
  // os que não estão em nenhuma são colocados como "none"
  UNSAFE_componentWillMount(){
    const book = this.props.book
    let shelf = this.props.book.shelf
    if (this.props.currentBooks){
      let currentBook = this.props.currentBooks.filter(b => b.id === book.id)
      shelf = currentBook[0] ? currentBook[0].shelf : 'none' 
    }
    this.changeShelf(shelf)
  }
  render(){
    const book = this.props.book
    return (
        <div className="book">
        <div className="book-top">
        {/* verifica se a imagem esta disponível */}
          {typeof(book.imageLinks) !== 'undefined' && (
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail} ")` }}></div>
            )          
          }
          <div className="book-shelf-changer">
            <select defaultValue={this.state.shelf} onChange={e => this.handleChange(e.target.value, this.props.current) }>
                <option value="move" disabled>Mover para...</option>
                    <option value="wantToRead">Quero ler</option>
                    <option value="currentlyReading">Atualmente lendo</option>
                    <option value="read">Lido</option>
                <option value="none">Nenhuma opção</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
        {/* verifica se é o último indice, caso não, coloca uma virgula depois do nome do autor. */}
          { typeof(book.authors) === 'undefined' ? '' : book.authors.map((author, i) => 
          (book.authors.length === i + 1) 
            ? author 
            : `${author}, `
          )}
        </div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object,
  currentBooks: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func
};

export default Book