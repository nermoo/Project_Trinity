import React from 'react';
import followers from './followers';
import Infobar from './bloggerinfobar';
import Followers from './followers';
import Articles from  './../blog/blogcard';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';



const BloggerP=()=>{

    //get the bloggerid from the localstorage and send dat to the node app and get an list of post id from the database
    return(
        <div>
        <Grid container>
            <Infobar/>
        </Grid>
        <Grid container>
                
            <Routes>
            <Route path='/followers' element={<Followers/>}/>
            <Route path='/articles' element={<Articles/>}/>
            </Routes>
            </Grid>
        </div>
        
    );
}

export default BloggerP;