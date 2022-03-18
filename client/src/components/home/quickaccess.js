import React,{useEffect} from 'react';
import { Grid, Card } from '@mui/material';
import axios from 'axios';



const Quick=()=>{
    
    useEffect(()=>{
        axios.get('http://localhost:5000/quick').then(qres=>{
            console.log(qres);
        })
    },[])
    return(
        <>
        
        <Grid container>
              <Grid item xs={1}></Grid>  
              <Grid item xs={10}>
              <Card sx={{height:'100%'}}>
            <Grid container>
                <Grid item>Top Tags</Grid>     
             </Grid>
             <Grid container>
                <Grid item></Grid>     
             </Grid>
             <Grid container>
                <Grid item>Top Authors</Grid>     
             </Grid>
             <Grid container>
                <Grid item></Grid>     
             </Grid>
             <Grid container>
                <Grid item></Grid>     
             </Grid>
             </Card>
                  </Grid>  
              <Grid item xs={1}></Grid>  
                
            </Grid>
        
        </>
    );
}

export default Quick;