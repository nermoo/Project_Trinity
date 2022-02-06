const updater=(state =0,action)=>{
    console.log(action.payload);
    switch(action.type){
        case 'update':
            return state=state+1;

        default:
            return state;
    }

}

export default updater;