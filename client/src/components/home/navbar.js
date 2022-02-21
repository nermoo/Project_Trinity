import React,{useEffect,useState} from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Nav=()=>{

  const [prof,setProf]=useState(false);
  
  const user=localStorage.getItem('user');
  const [link,setLink]=useState('');
  const [comp,setComp]=useState('');
  const logStatus=useSelector(state=>state.logstatus); 

  
  useEffect(()=>{
    const loginStatus=localStorage.getItem('loginStatus');
    const name=localStorage.getItem('user');
    const role=localStorage.getItem('role');
    if(loginStatus){
      if(role==='writer'){
        setLink(`/profile/blogger/${name}/followers`);
      }else{
        setLink(`/profile/user/${name}/`);
      }
      setProf(true);
      setComp('Hi '+user);
    }else{
      setProf(false);
      setLink('/auth');
      setComp('Login/Signup');
    }
   
    
  },[logStatus]);

  

    return(
        <AppBar sx={{marginBottom:'20px', backgroundColor:'#E85A4F'}} position="sticky">
        <Toolbar>
          <Link to="/">
          <Typography>
            <Button>
            Blog Corner&nbsp; 
            <MenuBookOutlinedIcon/>
            </Button>
          </Typography>
          </Link>
          <div style={{flexGrow:1}} />
          <div >
            <Link to={link}>
              
            <IconButton
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"
              // onClick={ handleUserIcon}
              color="inherit"
              
            >
              <Typography>{comp}  &nbsp;</Typography>
              <AccountCircle/>
            </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
}

export default Nav;