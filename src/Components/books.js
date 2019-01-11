import React from 'react';
import Book from './book';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';


const Books = props => (
    <div className={props.fromSearch && ("search-books-results")}>
        <ol className="books-grid">
            {props.loading ? 
            <Loader 
                type="CradleLoader"
                color="#00BFFF"
                height="100"	
                width="100" />
            :
            <React.Fragment>
                {props.failedQuery === true ? 
                    <p> Nenhum resultado disponível :( </p>
                    :
                    <React.Fragment>
                        {props.books.map(book => 
                            <li key={book.id}>
                                <Book 
                                    book={book} 
                                    handleChange={props.handleChange} 
                                    currentBooks={props.currentBooks && (props.currentBooks)}
                                />
                            </li>
                        )}
                    </React.Fragment>
                }
            </React.Fragment>
            }
        </ol>
    </div>
)

Books.propTypes = {
    loading: PropTypes.bool,
    shelf: PropTypes.arrayOf(PropTypes.object),
    handleChange: PropTypes.func,
    failQuery: PropTypes.string,
    fromSearch: PropTypes.bool
};


export default Books