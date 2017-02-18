import React, {Component} from 'react';
import GenreButton from './GenreButton';
import '../styles/genres.css';
import MovieItem from './MovieItem';

class Movies extends Component{
    componentWillMount(){
        this.props.getGenres();
    }
    getMovies(e){
        this.props.getMovies(this.props.genres.userChoice);
    }
    imageLinkConstructor(url, type){
        if(type === 'backdrop'){
            return this.props.config.data.images.base_url +  this.props.config.data.images.backdrop_sizes[2] + url;
        }else if(type === 'poster'){
            return this.props.config.data.images.base_url +  this.props.config.data.images.poster_sizes[3] + url;
        }
    }
    render() {
        //generating a list
        let genreList = '';
        if(this.props.genres.received){
            genreList = this.props.genres.data.map((genre, i) => 
                <li key={genre.id}>
                    <GenreButton name={genre.name} id={genre.id} 
                    genreAdded={ this.props.genreAdded } 
                    genreRemoved={ this.props.genreRemoved }/>
                </li>
            );
        }
        //generating a button
        let fetchButton = '';
        if(this.props.genres.userChoice.length > 0){
            fetchButton = 
            <button className="button fetch ready" 
            onClick={ e => this.getMovies(e) }>
                Show Me What You Got
            </button>;
        }else{
            fetchButton = 
            <button className="button fetch"
            disabled 
            onClick={ e => this.getMovies(e) }>
                Pick some genres
            </button>
        }

        let movieView = '';
        let movieList = '';
        //genreating a movie view
        if(this.props.movies.received){
            let featuredMovie = this.props.movies.data[0];
            let backgdropUrl = this.imageLinkConstructor(featuredMovie.backdrop_path, 'backdrop');
            let posterUrl = this.imageLinkConstructor(featuredMovie.poster_path, 'poster');
            let title = featuredMovie.title;
            let releaseDate = featuredMovie.release_date;
            let description = featuredMovie.overview;
            movieList = this.props.movies.data.map((movie, i) => {
                <li key={i}>
                    <MovieItem {...movie} />
                </li>
            });
            console.log(this.props.movies.data.map((movie, i) => {
                <li key={i}>
                    <MovieItem {...movie} />
                </li>
            }));
            movieView = 
                <div className="movie-container" style={{backgroundImage: `linear-gradient(to right,rgba(2, 2, 2, 0.80) 20%, rgba(2, 2, 2, 0.60) 60%,rgba(0, 0, 0, 0)),linear-gradient(to bottom,rgba(0, 0, 0, 0) 60%,rgba(2, 2, 2, 0.60)),url("${backgdropUrl}")` }}>
                    <img className="poster" src={posterUrl} />
                    <div className="title">
                        {title}
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    {
                       this.props.movies.data.map((movie, i) => {
                        'LOOOOOOOL'
                        }) 
                    }
                </div> 
        }
        return (
            <div className="movies-container">
                <div className="genres-bar">
                    <ul className="genres">
                        {genreList}
                    </ul>
                    {fetchButton}
                </div>
                {movieView}
                {movieList}
            </div>
        );
    }
}
export default Movies;