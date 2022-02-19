import React,{ useEffect,useState } from 'react';
import { Grid, Avatar,Typography,Card } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';


const BloggerInfobar=(props)=>{

    const [blogger,setBlogger]=useState({});
    const name=blogger.name;
    const profilePhoto='http://localhost:5000/'+blogger.profilePic;
    const numberOfFollowers=12;
    const numberofArticles=props.articles;
    const id=props.id;

    const fetchData=()=>{
        axios.post('/profile/user',{id:id}).then(res=>{
            setBlogger(res.data);
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

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
                        <Link to='/profile/followers' style={{textDecoration:'none'}}>
                        <Typography sx={{margin:'auto',color:'black',textDecoration:'none'}}>
                            Followers &nbsp;&nbsp;
                        {numberOfFollowers}
                        </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} sx={{margin:'auto'}}>
                        <Link to='/profile/articles' style={{textDecoration:'none'}}>
                        <Typography sx={{margin:'auto',color:'black',textDecoration:'none'}}>
                            Articles&nbsp;&nbsp;
                        {numberofArticles}
                        </Typography>
                        </Link>
                    </Grid>
                </Grid>
                </Card>
                
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );

}


export default BloggerInfobar;