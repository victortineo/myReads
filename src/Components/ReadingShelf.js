import React, {Component} from 'react';
import Books from './books';

class ReadingShelf extends Component {
    // deverá filtrar os livros que aparecerão à partir do seu tipo
    render(){
        return(
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.name}</h2>
                    <Books books={this.props.shelf} handleChange={this.props.handleChange}/>
                </div>
            </div>
        )
    }
}

export default ReadingShelf