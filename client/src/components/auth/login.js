import React from 'react';
import {Grid, TextField, Button, Typography,Snackbar,Alert} from '@mui/material';
import { useEffect,useRef,useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import Card from './../common/card';
import { textAlign } from '@mui/system';



const Login=()=>{
    
    // const [form,setform]=useState({
    //     userName:'',
    //     password:''
    // });
    const [userName,setUname]=useState('');
    const [password,setPass]=useState('');
    const [loginEr,setLe]=useState('');
    const [Errors,setErr]=useState({});
    const [open, setOpen] = useState(false);
    const [warning, setwar] = useState(false);
    let navigate = useNavigate();
    const dispatch=useDispatch();
    const vertical='top';
    const horizontal='center';


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
                    const role=res.data.role;
                    if(status===true){
                        console.log(userName);
                        localStorage.setItem('user',userName);
                        localStorage.setItem('loginStatus',true);
                        localStorage.setItem('id',id);
                        localStorage.setItem('role',role);
                        dispatch(login());
                        setOpen(true);
                        navigate("/");
                        // setLe("Logged in");
                    }else{
                        setwar(true);
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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setwar(false);
      };



    return(
        <Grid container>
                       <Grid item xs={2}></Grid> 
                       <Grid item xs={8}>
                       <Card header='Login'>
                       <Typography sx={{color:'red',fontSize:'12px'}}>{loginEr}</Typography>
                       <TextField error={Errors.userName} helperText={Errors.userName} fullWidth onChange={(e)=>(setUname(e.target.value))} sx={{marginBottom:'10px', marginTop:'20px'}} multiline placeholder='Enter username' id="userName" label="Username" variant="standard" /><br/>
                       <TextField error={Errors.password} helperText={Errors.password} fullWidth onChange={(e)=>(setPass(e.target.value))} sx={{marginBottom:'20px'}} placeholder='Enter password' id="password" type="password" label="Password" variant="standard" />
                          <div style={{marginTop:'10px', textAlign:'center'}}>
                          <Button onClick={handleLog}>Login</Button>
                          </div>
                          <div style={{margin:'20px 0 10px 0',textAlign:'end'}}>
                            <span>
                                Don't have an account yet? 
                                <Link style={{textDecoration:'none'}} to={'/auth/signup'}> Sign up</Link>
                            </span>
                          </div>
                        </Card>
                           </Grid> 
                       <Grid item xs={2}></Grid>
                       <Snackbar anchorOrigin={{ vertical, horizontal}} open={warning} onClose={handleClose}>
                           <Alert onClose={handleClose} severity="error"> Incorrect Username or Password</Alert>
                       </Snackbar>
                    
                       
                    </Grid>
    );
}

export default Login;