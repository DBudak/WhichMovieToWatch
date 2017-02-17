import React, {Component} from 'react';

class GenreButton extends Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(id){
        console.log(id, 'was clicked');
    }

    render(){
        return (
            <button onClick = { this.clickHandler(this.props.name.id) } >
                {this.props.name}
            </button>
        )
    }
}
export default GenreButton;