export const setTaglist=(tags)=>{
    console.log(tags);
    return{
        type:'add',
        payload: tags
    };
    
}


export const setPost=(postString)=>{
    return{
        type:'update',
        payload:postString
    }
}

export const setFollowing=(list)=>{
    return{
        type:'updateFollowing',
        payload:list
    }
}

export const login=()=>{
    return{
        type:'login'
    }
}

export const updater=()=>{
    return{
        type:'stupdate'
    }
}