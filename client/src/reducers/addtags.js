
let tag=[];
const tagsReducer=(state =[],action)=>{
    console.log(action.payload);
    switch(action.type){
        case 'add':
            state=[];
            return action.payload;

        default:
            return state;
    }

}

export default tagsReducer;