export default function genres(state={}, action){
    switch(action.type){
        case 'RECEIVED_GENRES':
            return Object.assign({},state,{received: true, data: action.genres});
        default:
            return state;
    }
}