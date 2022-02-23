import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Button, Snackbar, Alert } from '@mui/material';

const Follow=(props)=>{
    
    const [status,setStatus]=useState('Follow');
    const [followingStatus,setFollwingStatus]=useState(false);
    const [followAlert,setFollowalt]=useState(false);
    const follower=localStorage.getItem('id');
    const following=props.id;
    const list=props.list;
    const authName=props.name
    const vertical='top';
    const horizontal='center';
    
    const follow=()=>{
        setFollwingStatus(!followingStatus);
        if(followingStatus===true){
            setStatus('Following');
            axios.post('http://localhost:5000/follow',{follower:follower,following:following}).then(res=>{
                console.log(res.data.status);
                if(res.data.status===true){
                    setFollowalt(true)
                }
            })
        }else{
            setStatus('Follow');
        } 
        
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setFollowalt(false);
      };
    

    useEffect(()=>{
        if(list.includes(following)){
            setStatus('Following');
            setFollwingStatus(true);
        }
    },[])

    return(
        <>
        <Button onClick={follow}>
            {status}
        </Button>
        <Snackbar anchorOrigin={{ vertical, horizontal}} open={followAlert} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"> Now you are following {authName}</Alert>
        </Snackbar>
        </>
    );
}

export default Follow;