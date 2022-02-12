import React,{useEffect,useState} from 'react';
import followers from './followers';
import Infobar from './bloggerinfobar';
import Followers from './followers';
import Articles from  './../blog/articles';
import { Button, Card, Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Logout from './../auth/logout';
import { useNavigate } from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';



const BloggerP=()=>{

    //get the bloggerid from the localstorage and send dat to the node app and get an list of post id from the database
    const [ids,setIds]=useState([]);
    const id=localStorage.getItem('id');
    const navigate=useNavigate();
    const newBlog=()=>{
        navigate('/editor');
    }
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
            <Infobar articles={ids.length} id={id}/>
        </Grid>
        <Grid container>
                
            <Routes>
            <Route path='/followers' element={<Followers/>}/>
            <Route path='/articles' element={<Articles List={ids}/>}/>
            </Routes>
            </Grid>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Card sx={{padding:'5px',marginTop:'10px'}}>
                        <Grid container>
                            
                        <Grid item sx={{textAlign:'center'}} xs={3}>
                        <Button onClick={newBlog}>
                            <DriveFileRenameOutlineIcon/> &nbsp;
                            New blog
                        </Button>
                            </Grid>
                        <Grid item xs={6}></Grid>
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