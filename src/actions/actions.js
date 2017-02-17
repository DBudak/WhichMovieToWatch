import fetch from 'isomorphic-fetch';


const API_KEY = "70ce42f6e68ebc97d7260f72e972fd9b";
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

export function getGenres(){
    return dispatch => {
        fetch(GENRES_URL)
            .then(response => response.json())
            .then(json => dispatch(receivedGenres(json)))
    }
}

export function receivedGenres(res){
    return {
        type: 'RECEIVED_GENRES',
        genres: json
    }
}


