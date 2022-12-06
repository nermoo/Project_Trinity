import React,{useState, useEffect} from 'react';
import { Grid,Card,Stack, CardContent, Typography } from '@mui/material';
import Comment from './comment';
import axios from 'axios';
import Commentedit from './commentedit';
import { useSelector } from 'react-redux';


const Comments=(props)=>{

    const blogid=props.id;
    const [comments,setComments]=useState([]);
    const updater=useSelector(state=>state.Stateupdate);
    console.log(comments);
    const fetchData=()=>{
        axios.post('http://localhost:5000/comments/get',{id:blogid}).then(res=>{
            console.log(res.data.list);
            setComments(res.data);

        })
    }


    useEffect(()=>{
        fetchData();
    },[updater])
    
    return(
        <>
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
                <Commentedit id={blogid}/>
            <Stack
                sx={{marginTop:'10px'}}
                direction="column"
                justifyContent="flex-end"
                alignItems="start"
                spacing={1}
                >
                    
                        
                    
                    {
                       comments.map(comment=>{
                        if(comment.authName)
                           return(
                               <Comment comment={comment}/>
                           )
                       })
                   } 
                    
                </Stack>
            </Grid>
        </Grid>
        </>
    );
}


export default Comments;