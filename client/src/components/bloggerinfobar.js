import React from 'react';
import { Grid, Avatar,Typography,Card } from '@mui/material';



const ReaderInfobar=()=>{

    const name="Aravinda Kolitha Nawarathna ";
    const profilePhoto='https://picsum.photos/200/300';
    const numberOfFollowers=12;
    const numberofArticles=3;

    return(
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Card sx={{marginBottom:'10px'}}> 
                <Grid container>
                    <Grid item xs={1}>
                    <Avatar sx={{margin:'10px',marginLeft:'auto',marginRight:'auto'}} alt="Travis Howard" src={profilePhoto} />
                    </Grid>
                    <Grid item xs={4} sx={{margin:'auto'}}>
                    <Typography>
                            {name}
                    </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} sx={{margin:'auto'}}>
                        <Typography sx={{margin:'auto'}}>
                            Followers &nbsp;&nbsp;
                        {numberOfFollowers}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{margin:'auto'}}>
                        <Typography>
                            Articles&nbsp;&nbsp;
                        {numberofArticles}
                        </Typography>
                    </Grid>
                </Grid>
                </Card>
                
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );

}


export default ReaderInfobar;