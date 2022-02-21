import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';

export default function Footer() {
    const [value, setValue] =useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

  return (
    <BottomNavigation sx={{ width: '100%', color:'black',opacity:'0.8', backgroundColor:'#E85A4F',position:'sticky', bottom:'0px',marginTop:'10px'}} value={value} onChange={handleChange}>
        <a href='https://github.com/nermoo'>
        <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<GitHubIcon />}
      />
        </a>
        <a href='https://www.facebook.com/aravinda.navarathna'>
        <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FacebookIcon />}
      />
        </a>
        <a href='linkedin.com/in/aravinda-nawarathna-a6765a196'>
        <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LinkedInIcon />}
      />
        </a>
      
      
      
    </BottomNavigation>
  );
}