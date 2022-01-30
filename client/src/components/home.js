import React from 'react';
import { Grid } from '@mui/material';
import Blogcard from './blogcard';



const Home=()=>{
    return(
        <Grid container>
            <Grid item xs={8}>
                <Blogcard/>
            </Grid>
            <Grid item xs={4}>
            
            </Grid>
        </Grid>

    );

}

export default Home;