import React from 'react';
import ReadingShelf from './ReadingShelf';
import Fab from './fab';
import PropTypes from 'prop-types';

const Home = props => (
        <React.Fragment >
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <ReadingShelf loading={props.loading} name="Quero Ler" shelf={props.shelfs.wantToRead} handleChange={props.handleChangeBook} />
                    <ReadingShelf loading={props.loading} name="Atualmente Lendo" shelf={props.shelfs.currentlyReading} handleChange={props.handleChangeBook} />
                    <ReadingShelf loading={props.loading} name="Já lido" shelf={props.shelfs.read} handleChange={props.handleChangeBook} />
                </div>
            </div>
            <Fab />
        </React.Fragment>
)

Home.propTypes = {
    loading: PropTypes.bool,
    shelf: PropTypes.arrayOf(PropTypes.object),
    handleChange: PropTypes.func
};

export default Home