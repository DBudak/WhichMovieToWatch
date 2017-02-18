import React, {Component} from 'react';
import '../styles/genres.css';

class MovieItem extends Component{


    clickHandler(e){
        console.log(e.target.name, 'was clicked');       
    }

    render(){
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}
export default MovieItem;