import React from 'react';
import {useState} from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';


const Signup=()=>{

    const [role, setRole] = useState('');
    const [reg,setreg]=useState({
      email:'',
      userName:'',
      password:'',
      role:''

    });
    const [Errors,setErr]=useState({});


  console.log(reg);

  const formHandle=(e)=>{
    const { name, value } = e.target;
    setreg({...reg,[name]:value});
    
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
                            value={role}
                            onChange={formHandle}
                            label="Role"
                            name='role'
                            error={Errors.role}
                            >
                            <MenuItem value={"reader"}>Reader</MenuItem>
                            <MenuItem value={"writer"}>Writer</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField error={Errors.userName} fullWidth onChange={formHandle} sx={{marginBottom:'20px'}} helperText={Errors.password} placeholder='Enter password' id="filled-basic" type='password' name='password' label="Password" variant="standard" />
                        
                        <input type='file'></input>
                        <Button onClick={handleReg}>Submit</Button>
                           </Grid> 
                       <Grid item xs={2}></Grid> 
                    </Grid>
    );
}

export default Signup;