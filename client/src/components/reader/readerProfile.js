import React,{useEffect,useState} from 'react';
import Infobar from './infobar';
// import Articles from  './../blog/articles';
import Saved from './savedItems';
import { Button, Card, Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Logout from './../auth/logout';
import Following from './following';



const BloggerP=()=>{

    //get the bloggerid from the localstorage and send dat to the node app and get an list of post id from the database
    const [saved,setSaved]=useState([]);
    const [following,setFollowing]=useState([]);
    const id=localStorage.getItem('id');
    
    const fetchData=()=>{
        axios.post('http://localhost:5000/profile/info',{id:id}).then(res=>{
            setSaved(res.data);
        })
        axios.post('http://localhost:5000/profile/following',{id:id}).then(res=>{
            setFollowing(res.data);
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>
        <Grid container>
            <Infobar following={following.length} id={id}/>
        </Grid>
        <Grid container>
                
            <Routes>
            <Route path='/following' element={<Following List={following}/>}/>
            <Route path='/saved' element={<Saved List={saved}/>}/>
            </Routes>
            </Grid>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Card sx={{padding:'5px',marginTop:'10px'}}>
                        <Grid container>
                        <Grid item xs={9}></Grid>
                        <Grid sx={{textAlign:'center'}} item xs={3}>
                            <Logout/>
                        </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
        
    );
}

export default BloggerP;