import React from 'react';
import {Grid, TextField, Button, Typography} from '@mui/material';
import { useEffect,useRef,useState } from 'react';
import axios from 'axios';



const Login=()=>{
    
    // const [form,setform]=useState({
    //     userName:'',
    //     password:''
    // });
    const [userName,setUname]=useState('');
    const [password,setPass]=useState('');
    const [msg,setMsg]=useState('');
    console.log(userName);

    const handleLogin=()=>{

        if(userName==='' || password===''){
            setMsg("Please Enter both Username and Password");
        }
        else{
            try {
                axios.post('http://localhost:5000/login',{
                    Name:userName,
                    Password:password
                }).then(res=>{
                    console.log(res);
                    const status=res.data.info.status;
                    const message=res.data.info.message;
                    if(status===true){
                        setMsg("you are logged in");
                    }else{
                        setMsg(message);
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
    
    }


    return(
        <Grid container>
                       <Grid item xs={2}></Grid> 
                       <Grid item xs={8}>
                       <TextField fullWidth onChange={(e)=>(setUname(e.target.value))} sx={{marginBottom:'10px', marginTop:'20px'}} multiline placeholder='Enter username' id="userName" label="Username" variant="standard" /><br/>
                       <TextField fullWidth onChange={(e)=>(setPass(e.target.value))} sx={{marginBottom:'20px'}} placeholder='Enter password' id="password" type="password" label="Password" variant="standard" />
                          <Button onClick={handleLogin}>Submit</Button>
                           </Grid> 
                       <Grid item xs={2}></Grid> 

                       <Typography>{msg}</Typography>
                    </Grid>
    );
}

export default Login;