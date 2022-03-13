import React from 'react';
import { Grid, Card } from '@mui/material';


const Quick=()=>{
    
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