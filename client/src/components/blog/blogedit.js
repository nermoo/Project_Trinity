import React from 'react';
import Editor from './editor';
import Tags from './tags';
import { Button, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const Blogeditor=()=>{

    

    return(
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Editor/>
                <Grid container>
                    <Grid item xs={12}>
                    <Tags/>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={2}></Grid>
            <Button sx={{marginLeft:'auto',marginRight:'auto',marginTop:'20px'}}>publish</Button>
        </Grid>
    );
}

export default Blogeditor;