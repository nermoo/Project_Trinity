import React from 'react';
import { Grid, Box, Card, Typography, CardContent } from '@mui/material';


const Comment=(props)=>{
    const name=props.comment.authName;
    const author=name.charAt(0).toUpperCase() +name.slice(1);
    const months=['January','February','March','April','May','June','July','August','September','Octomber','November','December'];
    const month=months[props.comment.month];
    const date=props.comment.day+" "+month;
    const content=props.comment.comment;

    return(
       <><Card sx={{width:'-moz-available',border:'none',boxShadow:'none'}} variant='outlined'>
           <Grid container>
               <Grid item xs={12}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography sx={{ color: 'gray', marginBottom: '5px' }}>
                                {author} 
                                <span style={{marginLeft:'20px',fontSize:'10px'}}>
                                    {date}
                                </span>

                            </Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                    <Typography sx={{ marginRight: '5px' }}>
                        {content}
                    </Typography>
                </CardContent>
               </Grid>
           </Grid>

            </Card></>
    );
}


export default Comment;