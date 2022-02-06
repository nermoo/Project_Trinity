export const setTaglist=(tags)=>{
    console.log(tags);
    return{
        type:'add',
        payload: tags
    };
    
}


export const setPost=(postString)=>{
    return{
        payload:postString
    }
}