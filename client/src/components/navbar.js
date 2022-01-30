import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Link } from 'react-router-dom';



const Nav=()=>{


    return(
        <AppBar sx={{marginBottom:'20px', backgroundColor:'salmon'}} position="static">
        <Toolbar>
          <Link to="/">
          <Typography>
            <Button>
            To Do
            <MenuBookOutlinedIcon/>
            </Button>
          </Typography>
          </Link>
          <div style={{flexGrow:1}} />
          <div >
            <Link to='/auth'>
              
            <IconButton
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"
              // onClick={ handleUserIcon}
              color="inherit"
              
            >
              <Typography>Aravinda  &nbsp;</Typography>
              <AccountCircle/>
            </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
}

export default Nav;