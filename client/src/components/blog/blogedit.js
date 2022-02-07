import React,{useEffect} from 'react';
import Editor from './editor';
import Tags from './tags';
import { Button, Grid, Typography, TextField, FormLabel,Input } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Blogeditor=()=>{


    const tags=useSelector(state=>state.tupdate);
    const post=useSelector(state=>state.postupdate);
    const [title,setTitle]=useState('');
    const [image,setImg]=useState();
    const navigate = useNavigate();
    console.log(title);

    const fileHandle=(e)=>{
        setImg(e.target.files[0]);
      }

    const handlePub=()=>{
        // axios.post('');
        if(tags && post && title){
            console.log("everything is okay");
            let bloggerId=localStorage.getItem('id');
            const formdata=new FormData();
            formdata.append('title',title);
            formdata.append('image',image);
            formdata.append('post',post);
            formdata.append('tags',tags);
            formdata.append('bloggerId',bloggerId);
            axios.post('http://localhost:5000/blog/save',formdata).then(res=>{
                    console.log(res);
                    if(res.status===true){
                        navigate('/articles');
                    }else{
                        console.log('something went wrong');
                    }
            })

        }else{
            console.log("something is missing");
        }
    }

    

    return(
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                
                <TextField 

                        variant='standard'
                        label="Enter post title"
                        sx={{width:'50%',marginBottom:'20px'}}
                        name="title"
                        id="title"
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        <br></br>
                <Grid container>
                    <Grid item sx={{marginBottom:'20px'}}>
                    <FormLabel sx={{textAlign:'left',marginBottom:'20px'}}>Upload a cover photo</FormLabel><br/>
                    <input onChange={(e)=>fileHandle(e)} type='file' name='profilepic' id="profilepic"/><br/>
                    </Grid>
                </Grid>
                
                <Editor/>
                <Grid container>
                    <Grid item xs={12}>
                    <Tags/>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={2}></Grid>
            <Button sx={{marginLeft:'auto',marginRight:'auto',marginTop:'20px'}} onClick={handlePub}>publish</Button>
        </Grid>
    );
}

export default Blogeditor;