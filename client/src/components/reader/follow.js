import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Button, Snackbar, Alert } from '@mui/material';

const Follow=(props)=>{
    
    const [followingStatus,setFollwingStatus]=useState(false);
    console.log(followingStatus);
    const [unfollowAlert,setunFollowalt]=useState(false);
    const [clicked,setClick]=useState(false);
    const [flwbtn,setFlwbtn]=useState('Follow');
    const [followAlert,setFollowalt]=useState(false);
    const follower=localStorage.getItem('user');
    const [warning, setwar] = useState(false);
    const following=props.id;
    const authName=props.name
    console.log(props);
    const vertical='top';
    const horizontal='center';

    const Statusvalidate=()=>{
        axios.post('http://localhost:5000/follow/status',{reader:localStorage.getItem('id'), author:following}).then(fres=>{
                  console.log(fres.data.status);
                  if(fres.data.status===true){
                    setFollwingStatus(true);
                    if(fres.data.status===true){
                        setFlwbtn('Following');
                    }else{
                        setFlwbtn('Follow');
                    }
        
                  }
                })
        
    }
    
    const follow= ()=>{
        if(followingStatus===true){
            setFlwbtn('Following');
            axios.post('http://localhost:5000/follow',{follower:localStorage.getItem('id'),following:following}).then(res=>{
                console.log(res.data.status);
                if(res.data.status===true){
                    setFollowalt(true)
                }
            })
        }
        if(followingStatus===false){
            setunFollowalt(true);
            setFlwbtn('Follow');
            axios.post('http://localhost:5000/follow/unfollow',{follower:localStorage.getItem('id'),following:following}).then(res=>{
                console.log(res.data.status);
                
            })
            
        }
  
        setClick(false);
        
    }
  console.log(follower);
    const handleClick= ()=>{
      
        setFollwingStatus(status=>!status);
      setClick(true);
      
    }
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setFollowalt(false);
      setunFollowalt(false);
      setwar(false);
    };
  
  
    useEffect(()=>{
      //methna follow status eka true da kyla btn eke name eka change krnda
      if(clicked===true){
        follow();
        console.log('clicked');
      }
  
    },[clicked])

    useEffect(()=>{
        Statusvalidate()
        
    },[followingStatus])

    return(
        <>
        <Button disabled={follower?true:false} onClick={handleClick}>
            {flwbtn}
        </Button>
        <Snackbar anchorOrigin={{ vertical, horizontal}} autoHideDuration={3000} open={followAlert} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"> Now you are following {authName}</Alert>
        </Snackbar>
        <Snackbar anchorOrigin={{ vertical, horizontal}} autoHideDuration={3000} open={unfollowAlert} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"> Successfully unfollowed {authName}</Alert>
        </Snackbar>
        <Snackbar anchorOrigin={{ vertical, horizontal}} open={warning} onClose={handleClose}>
                           <Alert onClose={handleClose} severity="warning"> LogIn to follow this author</Alert>
            </Snackbar>
        </>
    );
}

export default Follow;