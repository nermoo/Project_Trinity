import React,{useState,useEffect} from 'react';
import { Grid,TextareaAutosize,Button } from '@mui/material';
import axios from 'axios';




const Commentedit=(props)=>{

    const [comment,setComment]=useState('');
    const authName=localStorage.getItem('user');
    const [clear,setClear]=useState(false);
    const blogid=props.id;
    const cmntSave=()=>{
        axios.post('http://localhost:5000/comments/save',{blogid:blogid,comment:comment,authName:authName}).then(res=>{
            console.log(res.data);
            setComment('');
            setClear(!clear);
        })
    }
    // console.log(props);
    // console.log(comment,blogid,authName);

    useEffect(()=>{

    },[clear])

    return(
        <>
        <Grid container>
            <Grid item xs={12} sx={{marginTop:'5px'}}>
                <Grid container>        
                    <Grid item xs={9}>
                        <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Enter your comment"
                        style={{width:'-moz-available'}}
                        onChange={(e)=>setComment(e.target.value)}
                        />
                    </Grid>
                    <Grid item sx={{marginTop:'auto'}} xs={3}>
                    <Button onClick={cmntSave}>
                        Post
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </>
    );
}

export default Commentedit;