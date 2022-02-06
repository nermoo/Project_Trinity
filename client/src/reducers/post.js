let poststr=" ";
const post=(state=poststr,action)=>{
    switch(action.type){
        case 'update':
            return state=action.payload;

        default:
            return state;
    }
}

export default post;