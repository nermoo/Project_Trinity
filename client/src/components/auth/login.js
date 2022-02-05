import React from 'react';
import {Grid, TextField, Button, Typography} from '@mui/material';
import { useEffect,useRef,useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const Login=()=>{
    
    // const [form,setform]=useState({
    //     userName:'',
    //     password:''
    // });
    const [userName,setUname]=useState('');
    const [password,setPass]=useState('');
    const [loginEr,setLe]=useState('');
    const [Errors,setErr]=useState({});
    let navigate = useNavigate();


    const validate=()=>{
        const errors={};
        if(!userName){
            errors.userName="Enter username";
        }
        if(!password){
            errors.password="Enter password";
        }else{
            try {
                axios.post('http://localhost:5000/login',{
                    Name:userName,
                    Password:password
                }).then(res=>{
                    console.log(res);
                    const status=res.data.info.status;
                    const userName=res.data.user;
                    const id=res.data.id;
                    if(status===true){
                        console.log(userName);
                        localStorage.setItem('user',userName);
                        localStorage.setItem('loginStatus',true);
                        localStorage.setItem('id',id);
                        navigate("/");
                        // setLe("Logged in");
                    }else{
                       setLe("Username or password do not match");
                    }
                    
                })
            } catch (error) {
                console.log(error);
            }
        }
        return errors;
    };

    const handleLog=()=>{
        setErr(validate);
    }

    const handleLogin=()=>{
        
        
            
    
    }


    return(
        <Grid container>
                       <Grid item xs={2}></Grid> 
                       <Grid item xs={8}>
                       <Typography sx={{color:'red',fontSize:'12px'}}>{loginEr}</Typography>
                       <TextField error={Errors.userName} helperText={Errors.userName} fullWidth onChange={(e)=>(setUname(e.target.value))} sx={{marginBottom:'10px', marginTop:'20px'}} multiline placeholder='Enter username' id="userName" label="Username" variant="standard" /><br/>
                       <TextField error={Errors.password} helperText={Errors.password} fullWidth onChange={(e)=>(setPass(e.target.value))} sx={{marginBottom:'20px'}} placeholder='Enter password' id="password" type="password" label="Password" variant="standard" />
                          <Button onClick={handleLog}>Login</Button>
                           </Grid> 
                       <Grid item xs={2}></Grid> 

                       
                    </Grid>
    );
}

export default Login;