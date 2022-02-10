import React,{useEffect,useState} from 'react';
import followers from './followers';
import Infobar from './bloggerinfobar';
import Followers from './followers';
import Articles from  './../blog/articles';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';



const BloggerP=()=>{

    //get the bloggerid from the localstorage and send dat to the node app and get an list of post id from the database
    const [ids,setIds]=useState([]);
    const id=localStorage.getItem('id');
    const fetchData=()=>{
        axios.post('http://localhost:5000/',{id:id}).then(res=>{
            setIds(res.data);
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>
        <Grid container>
            <Infobar/>
        </Grid>
        <Grid container>
                
            <Routes>
            <Route path='/followers' element={<Followers/>}/>
            <Route path='/articles' element={<Articles List={ids}/>}/>
            </Routes>
            </Grid>
        </div>
        
    );
}

export default BloggerP;