import React from 'react';
import {Grid, TextField, Button} from '@mui/material';
import { useEffect,useRef,useState } from 'react';

const Login=()=>{
    
    const [form,setform]=useState({
        userName:'',
        password:''
    });


    return(
        <Grid container>
                       <Grid item xs={2}></Grid> 
                       <Grid item xs={8}>
                       <TextField fullWidth onChange={(e)=>(setform({[e.target.id]:e.target.value}))} sx={{marginBottom:'10px', marginTop:'20px'}} multiline placeholder='Enter username' id="userName" label="Username" variant="standard" /><br/>
                       <TextField fullWidth onChange={(e)=>(setform({[e.target.id]:e.target.value}))}sx={{marginBottom:'20px'}} placeholder='Enter password' id="password" type="password" label="Password" variant="standard" />
                          <Button >Submit</Button>
                           </Grid> 
                       <Grid item xs={2}></Grid> 
                    </Grid>
    );
}

export default Login;