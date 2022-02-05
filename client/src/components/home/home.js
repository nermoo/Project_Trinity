import React from 'react';
import { Card, Grid } from '@mui/material';
import Blogcard from './blogcard';
import Scroll from 'react-scroll';



const Home=()=>{

    const Element=Scroll.Element;
    let innerHeight=window.innerHeight;

    return(
        <Grid container>
            <Grid item xs={8}>
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                    <Element  className="element" id="containerElement" style={{
          position: 'relative',
          height:'660px',
          overflow: 'scroll',
          overflowX:'hidden',
          scrollbarWidth:'none'
          

          
        }}>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
        </Element>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Card>Component is not developed yet</Card>
            </Grid>
        </Grid>

    );

}

export default Home;