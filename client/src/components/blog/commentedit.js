import React,{useState,useEffect} from 'react';
import { Grid, TextareaAutosize, Button, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updater } from './../../actions';




const Commentedit=(props)=>{

    const [comment,setComment]=useState('');
    const authName=localStorage.getItem('user');
    const [commentalt,setCommentalt]=useState(false);
    const [clear,setClear]=useState(false);
    const [warning, setwar] = useState(false);
    const dispatch=useDispatch();
    const vertical='top';
    const horizontal='center';
    const blogid=props.id;
    const cmntSave=(e)=>{
        if(authName){
            axios.post('http://localhost:5000/comments/save',{blogid:blogid,comment:comment,authName:authName}).then(res=>{
                if (res.data.status===true){
                    setComment('');
                    setCommentalt(true);
                    dispatch(updater());
                }else{
                    console.log("not saved");
                }
            })
        }else{
            setwar(true)
        }
    }
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setCommentalt(false);
        setwar(false);
      };

    useEffect(()=>{

    },[clear])

    

    return(
        <>
        <Grid container>
            <Grid item xs={12} sx={{marginTop:'5px'}}>
                <Grid container>        
                    <Grid item xs={8}>
                        <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Enter your comment"
                        style={{width:'-moz-available'}}
                        onChange={(e)=>setComment(e.target.value)}
                        />
                    </Grid>
                    <Grid item sx={{marginTop:'auto',marginLeft:'5px'}} xs={3}>
                    <Button onClick={cmntSave}>
                        Post
                    </Button>
                    </Grid>
                </Grid>
                <Snackbar autoHideDuration={6000} open={commentalt} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"> comment posted</Alert>
        </Snackbar>
            </Grid>
            </Grid>
            <Snackbar anchorOrigin={{ vertical, horizontal}} open={warning} onClose={handleClose}>
                           <Alert onClose={handleClose} severity="warning"> LogIn to post comments</Alert>
            </Snackbar>
        </>
    );
}

export default Commentedit;