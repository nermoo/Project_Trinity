import React from 'react';
import {useState} from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography,FormLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup=()=>{

    const [reg,setreg]=useState({
      email:'',
      userName:'',
      password:'',
      role:''

    });
    const [image,setImg]=useState();
    const [Errors,setErr]=useState({});
    let navigate = useNavigate();


  console.log(reg);

  const formHandle=(e)=>{
    const { name, value } = e.target;
    setreg({...reg,[name]:value});
    
  }

  const fileHandle=(e)=>{
    setImg(e.target.files[0]);
  }

  const handleReg=(e)=>{
    e.preventDefault();
    setErr(validate(reg));
  }

  const validate=(values)=>{
    const errors={};
    if(!values.email){
      errors.email="Email is required";
    }
    if(!values.userName){
      errors.userName="Username is required";
    }if(!values.password){
      errors.password="Password is required";
    }if(!values.role){
      errors.role="Please select a role";
    }else{
      try {
        let formdata=new FormData();
        formdata.append('userName',reg.userName);
        formdata.append('email',reg.email);
        formdata.append('role',reg.role);
        formdata.append('password',reg.password);
        formdata.append('image',image);
        for(var pair of formdata.entries()) {
          console.log(pair[0]+', '+pair[1]);
        }
        axios.post('/reg',formdata).then(res=>{

          console.log(res.status);
          if(res.status===200){
            navigate("/auth");
          }
          //this should redirected to the authpage.
        })
      } catch (error) {
        console.log(error);
      }
    }
    return errors;
  }


    return(
        <Grid container>
                       <Grid item xs={2}></Grid> 
                       <Grid item xs={8}>
                       <TextField error={Errors.email} onChange={formHandle} fullWidth sx={{marginBottom:'10px'}} helperText={Errors.email} multiline placeholder='Enter your email' name='email' id="email" label="Email" type="email" variant="standard" /><br/>
                       <TextField error={Errors.userName} onChange={formHandle} fullWidth sx={{marginBottom:'10px'}} helperText={Errors.userName} multiline placeholder='Enter username' id="userName" name='userName' label="Username" variant="standard" /><br/>
                       <FormControl variant="standard" fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                            <Select
                            value={reg.role}
                            onChange={formHandle}
                            label="Role"
                            name='role'
                            error={Errors.role}
                            >
                            <MenuItem value={"reader"}>Reader</MenuItem>
                            <MenuItem value={"writer"}>Writer</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField error={!!Errors.password} fullWidth onChange={formHandle} sx={{marginBottom:'20px'}} helperText={Errors.password} placeholder='Enter password' id="filled-basic" type='password' name='password' label="Password" variant="standard" />
                        <FormLabel sx={{textAlign:'left'}}>Upload a profile picture</FormLabel>
                        <input onChange={(e)=>fileHandle(e)} type='file' name='profilepic' id="profilepic"></input><br/>
                        <Button onClick={handleReg}>Submit</Button>
                           </Grid> 
                       <Grid item xs={2}></Grid> 
                    </Grid>
    );
}

export default Signup;