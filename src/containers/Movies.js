import React, {Component} from 'react';
import GenreButton from './GenreButton';


class Movies extends Component{
    constructor(props){
        super(props);      
    }
    componentWillMount(){
        console.log('Mounting movies component');
        this.props.getGenres();
    }

    componentWillReceiveProps(){
        console.log('Movies Received new props');
        
    }

    render() {
        let genreList = '';
        if(this.props.genres.received){
            genreList = this.props.genres.data.map((genre, i) => 
                <li key={genre.id}>
                    <GenreButton name={genre.name} id={genre.id} />
                </li>
            );
        }
        return (
            <div>
                Movies component
                <ul>
                    {genreList}
                </ul>

            </div>
        );
    }
}
export default Movies;