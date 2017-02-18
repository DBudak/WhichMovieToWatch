export default function movies(state=[],action){
    switch(action.type){
        case 'RECEIVED_MOVIES':
            return Object.assign({},state,{data: action.movies});
        case 'FEATURED_MOVIE_CHOSEN':
            return Object.assign({},state,{received: true, featuredMovie : action.movie});
        default:
            return state;
    }
}