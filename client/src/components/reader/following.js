import React from 'react';
import { Grid, Card, Avatar, Typography } from '@mui/material';
import Scroll from 'react-scroll';
import NoDataSreen from '../common/nodatascreen';


const Followers=(props)=>{

    const Element=Scroll.Element;
    const followers=props.List;

    return(
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
            {followers.length===0?
            <NoDataSreen type="Following Authors"/>:
            (
            <Element  className="element" id="containerElement" style={{
          position: 'relative',
          height:'590px',
          overflow: 'scroll',
          overflowX:'hidden',
          scrollbarWidth:'none'
          

          
        }}>
            {
                followers.map((follower)=>(
                    <Card sx={{marginBottom:'10px'}} variant='outlined'>
                    <Grid container>
                        <Grid item xs={2}>
                        <Avatar sx={{margin:'10px',marginLeft:'auto',marginRight:'auto'}} alt={follower.name} src={`http://localhost:5000/${follower.profilePic}`}/>
                        </Grid>
                        <Grid sx={{marginTop:'auto',marginBottom:'auto'}} item xs={10}>
                            <Typography >
                            {follower.name}
                            </Typography>
                        </Grid>
                    </Grid>
                
                
                </Card>
                ))
            }
        </Element>
            )
         }
                
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
}

export default Followers;