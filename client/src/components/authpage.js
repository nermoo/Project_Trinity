import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useState } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { TextField,Card,Grid } from '@mui/material';
import Login from './login';
import Signup from './signup';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";




export default function LoginForm() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (

    <Grid container>
      <Grid item xs={1} md={2} lg={3}></Grid>
      <Grid item xs={10} md={8} lg={6}>
      <Card sx={{height:'450px'}}>
      <Box sx={{ textAlign:'center', width: '100%', typography: 'body1' }} >
      <TabContext sx value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
          <TabList TabIndicatorProps={{sx: { backgroundColor: 'red',},}} textColor='red' onChange={handleChange} aria-label="lab API tabs example" centered>
            
            <Tab   title="Reader" label="Log in" value="1" />
  
            <Tab  title="Writer" label='Sign up' value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Grid container>
                <Grid item xs={1} md={3} lg={2}></Grid>
                <Grid item xs={10} md={6} lg={8}>
                
                    <Login/>
            
                </Grid>
                <Grid item xs={1} md={3} lg={2}></Grid>
            </Grid>
            
        </TabPanel>
        <TabPanel value="2">
        <Grid container>
                <Grid item xs={1} md={3} lg={2}></Grid>
                <Grid item xs={10} md={6} lg={8}>
                
                    <Signup/>
            
                </Grid>
                <Grid item xs={1} md={3} lg={2}></Grid>
            </Grid>
        </TabPanel>
      </TabContext>
    </Box>
    
    </Card>
      </Grid>
      <Grid item xs={1} md={2} lg={3}></Grid>
    </Grid>
    
  );
}
