import React from 'react';
import {useState} from 'react';
import {Grid, TextField, FormControl, InputLabel, Select, MenuItem} from '@mui/material';


const Signup=()=>{

    const [role, setRole] = useState('');
    const [reg,setreg]=useState({
      email:'',
      userName:'',
      password:''

    });

  const handleRole = (event) => {
    setRole(event.target.value);
    
  };
  console.log(reg);
  const formHandle=(e)=>{
    setreg({[e.target.id]:e.target.value});
    
  }
    return(
        <Grid container>
                       <Grid item xs={2}></Grid> 
                       <Grid item xs={8}>
                       <TextField onChange={(e)=>(setreg({[e.target.id]:e.target.value}))}  fullWidth sx={{marginBottom:'10px'}} multiline placeholder='Enter your email' id="email" label="Email" type="email" variant="standard" /><br/>
                       <TextField onChange={formHandle} fullWidth sx={{marginBottom:'10px'}} multiline placeholder='Enter username' id="userName" label="Username" variant="standard" /><br/>
                       <FormControl variant="standard" fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                            <Select
                            value={role}
                            onChange={handleRole}
                            label="Role"
                            >
                            <MenuItem value={"reader"}>Reader</MenuItem>
                            <MenuItem value={"writer"}>Writer</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth sx={{marginBottom:'20px'}} placeholder='Enter password' id="filled-basic" type='password' label="Password" variant="standard" />
                           </Grid> 
                       <Grid item xs={2}></Grid> 
                    </Grid>
    );
}

export default Signup;