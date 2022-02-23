
const followingReducer=(state =[],action)=>{
    console.log(action.payload);
    switch(action.type){
        case 'updateFollowing':
            state=[];
            return action.payload;

        default:
            return state;
    }

}

export default followingReducer;