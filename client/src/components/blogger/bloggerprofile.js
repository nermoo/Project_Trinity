import React from 'react';
import followers from './followers';
import Infobar from './bloggerinfobar';
import Followers from './followers';
import Articles from './blogcard';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';



const BloggerP=()=>{

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