import React, {Component} from 'react';
import '../styles/genres.css';
import MovieItem from './MovieItem';

class MovieList extends Component{

    render(){
            let movieList = this.props.movies.map( (movie, i) =>{
            let backgdropUrl =''; 
                if(movie.backdrop_path){
                    backgdropUrl =  this.props.config.data.images.base_url +  this.props.config.data.images.backdrop_sizes[0] + movie.backdrop_path;
                }else{
                    backgdropUrl =  this.props.config.data.images.base_url +  this.props.config.data.images.backdrop_sizes[0] + movie.poster_path;
                }
                return  <li key={i}>
                            <MovieItem backdropUrl={backgdropUrl} 
                                setFeatured={this.props.setFeatured} 
                                movie={movie}/>
                        </li>;
            } 
               
             );
        return (
            <div>
                <ul className="movie-list">
                    <h2>Discover More</h2>
                    {movieList}
                </ul>
            </div>
        )
    }
}
export default MovieList;