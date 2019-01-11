import React from 'react';
import Books from './books';
import PropTypes from 'prop-types';

const ReadingShelf = props => (
    <div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <Books loading={props.loading} books={props.shelf} handleChange={props.handleChange}/>
        </div>
    </div>
)

ReadingShelf.propTypes = {
    name: PropTypes.string,
    loading: PropTypes.bool,
    shelf: PropTypes.arrayOf(PropTypes.object),
    handleChange: PropTypes.func
};

export default ReadingShelf