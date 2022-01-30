import React from 'react';
import { Grid, Card, Avatar, Typography } from '@mui/material';
import { useState,useEffect } from 'react'
import Scroll from 'react-scroll';
import axios from 'axios';


const Followers=()=>{ //we can use props to pass the height to this component from dashboard

    let innerHeight=window.innerHeight;
    const Element=Scroll.Element;
    // const [image,setImage]=useState();

    axios.get(' http://localhost:5000/user').then(res=>{
        
    })


    const followers=[{name:'aravinda nawarathna', image:'http://localhost:5000/head.jpg'},{name:'thejana lakshan', image:'http://localhost:5000/index.jpg'},{name:'will smith', image:'https://picsum.photos/200/300'},{name:'henry cavill', image:'https://picsum.photos/200/300'},{name:'json statham', image:'https://picsum.photos/200/300'},{name:'hugh jackman', image:'https://picsum.photos/200/300'},{name:'tom cruise', image:'https://picsum.photos/200/300'},{name:'superman', image:'https://picsum.photos/200/300'},{name:'matt damon', image:'https://picsum.photos/200/300'}]

    return(
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
            <Element  className="element" id="containerElement" style={{
          position: 'relative',
          height:'280px',
          overflow: 'scroll',
          overflowX:'hidden',
          scrollbarWidth:'none'
          

          
        }}>
            {
                followers.map((follower)=>(
                    <Card sx={{marginBottom:'10px'}} variant='outlined'>
                    <Grid container>
                        <Grid item xs={2}>
                        <Avatar sx={{margin:'10px',marginLeft:'auto',marginRight:'auto'}} alt={follower.name} src={follower.image}/>
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
                
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
}

export default Followers;