
let tag=[];
const tagsReducer=(state =tag,action)=>{
    console.log(action.tags);
    state=[action.tags]
    return state;
}

export default tagsReducer;