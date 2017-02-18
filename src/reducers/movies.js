export default function movies(state=[],action){
    switch(action.type){
        case 'RECEIVED_MOVIES':
            return Object.assign({},state,{received: true, data: action.movies})
        default:
            return state;
    }
}