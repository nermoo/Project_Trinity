import React,{useState,useEffect} from 'react';
import { Card, Grid } from '@mui/material';
import Blogcard from '../blog/blogcard';
import Scroll from 'react-scroll';
import axios from 'axios';



const Home=()=>{

    const Element=Scroll.Element;
    // let innerHeight=window.innerHeight;
    const [ids,setIds]=useState([]);

    const fetchData=()=>{
        axios.get('http://localhost:5000/').then(res=>{
            setIds(res.data)
        })
    }
    console.log(ids);

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <Grid container>
            <Grid item xs={8}>
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                    <Element  className="element" id="containerElement" style={{
          position: 'relative',
          height:'600px',
          overflow: 'scroll',
          overflowX:'hidden',
          scrollbarWidth:'none'
          

          
        }}>
                {ids.map(id=>{
                    return <Blogcard id={id}/>
                })}
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