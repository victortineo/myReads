import React, {Component} from 'react';

class MoveDropdown extends Component {  
    render(){
        return (
            <select defaultValue={this.props.current} onChange={e => this.props.handleChange(e.target.value) }>
                <option value="move" disabled>Move to...</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default MoveDropdown