import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Button, Snackbar, Alert } from '@mui/material';

const Follow=(props)=>{
    
    const [statustxt,setStatustxt]=useState('Follow');
    const [followingStatus,setFollwingStatus]=useState(props.status);
    console.log(followingStatus);
    const [followAlert,setFollowalt]=useState(false);
    const follower=localStorage.getItem('id');
    const following=props.id;
    const authName=props.name
    const vertical='top';
    const horizontal='center';

    const Statusvalidate=()=>{
        if(followingStatus===true){
            setStatustxt('Following');
        }else{
            setStatustxt('Follow');
        }
    }
    
    const follow=()=>{
        setFollwingStatus(!followingStatus);
        if(followingStatus===true){
            setStatustxt('Following');
            axios.post('http://localhost:5000/follow',{follower:follower,following:following}).then(res=>{
                console.log(res.data.status);
                if(res.data.status===true){
                    setFollowalt(true)
                }
            })
        }
        if(followingStatus===false){
            setStatustxt('Follow');
        }
        
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setFollowalt(false);
      };
    

    useEffect(()=>{
        Statusvalidate()
    },[])

    return(
        <>
        <Button onClick={follow}>
            {statustxt}
        </Button>
        <Snackbar anchorOrigin={{ vertical, horizontal}} open={followAlert} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"> Now you are following {authName}</Alert>
        </Snackbar>
        </>
    );
}

export default Follow;