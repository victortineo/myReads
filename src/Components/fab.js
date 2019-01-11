import React from 'react';
import { Link } from 'react-router-dom';

const Fab = () => (
    // pode ser funcional
    <div className="open-search">
        <button>
            <Link to="/search" >Add a book</Link>
        </button>
    </div>
)

export default Fab