import React,{useEffect} from 'react';
import Editor from './editor';
import Tags from './tags';
import { Button, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';


const Blogeditor=()=>{


    const tags=useSelector(state=>state.tupdate);
    const post=useSelector(state=>state.postupdate);

    const handlePub=()=>{

        // axios.post('');
        console.log(tags);
        console.log(post);
    }

    

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
            <Button sx={{marginLeft:'auto',marginRight:'auto',marginTop:'20px'}} onClick={handlePub}>publish</Button>
        </Grid>
    );
}

export default Blogeditor;