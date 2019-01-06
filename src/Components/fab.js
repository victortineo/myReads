import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Fab extends Component {
    // pode ser funcional
    render(){
        return(
            <div className="open-search">
                <button>
                    <Link to="/search" >Add a book</Link>
                </button>
            </div>
        )
    }
}

export default Fab